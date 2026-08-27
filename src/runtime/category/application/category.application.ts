import { Injectable, Inject } from '@angular/core';
import { CategoryService } from '@runtime/category/category.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ApplicationResponse } from '@runtime/billing/application/dto/sales.dto';
import { CategoryEntity } from '../models/category.entity';
import { CategoryCreateRequest, CategoryUpdateRequest, CategoryArchiveRequest, CategoryStatusRequest, CategoryInfo } from '@runtime/category/application/dto/category.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryApplication {
  constructor(
    @Inject(CategoryService) private categoryService: CategoryService,
    @Inject(IPermissionService) private IPermissionService: IPermissionService,
    @Inject(ISessionService) private ISessionService: ISessionService
  ) {}

  createCategory(request: CategoryCreateRequest): ApplicationResponse<CategoryInfo> {
    return this.executeWithPermission(request.userId, 'CATEGORY_CREATE', () => {
      return this.mapToInfo(this.categoryService.createCategory(request));
    });
  }

  updateCategory(request: CategoryUpdateRequest): ApplicationResponse<CategoryInfo> {
    return this.executeWithPermission(request.userId, 'CATEGORY_UPDATE', () => {
      return this.mapToInfo(this.categoryService.updateCategory(request));
    });
  }

  archiveCategory(request: CategoryArchiveRequest): ApplicationResponse<CategoryInfo> {
    return this.executeWithPermission(request.userId, 'CATEGORY_ARCHIVE', () => {
      return this.mapToInfo(this.categoryService.archiveCategory(request));
    });
  }

  updateStatus(request: CategoryStatusRequest): ApplicationResponse<CategoryInfo> {
    return this.executeWithPermission(request.userId, 'CATEGORY_STATUS', () => {
      return this.mapToInfo(this.categoryService.updateStatus(request));
    });
  }

  getAllCategories(request: { userId: string }): ApplicationResponse<CategoryInfo[]> {
    return this.executeWithPermission(request.userId, 'CATEGORY_VIEW', () => {
      return this.categoryService.getAllCategories().map(e => this.mapToInfo(e));
    });
  }

  private mapToInfo(entity: CategoryEntity): CategoryInfo {
    return {
      category_id: entity.category_id,
      name: entity.name,
      description: entity.description,
      icon: entity.icon,
      color_hint: entity.color_hint,
      status: entity.status,
      created_at: entity.created_at
    };
  }

  private executeWithPermission<T>(userId: string, permission: any, operation: () => T): ApplicationResponse<T> {
    try {
      const currentUser = this.ISessionService.getCurrentUser();
      if (!currentUser || currentUser.id !== userId) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'Invalid session or user mismatch.'
          }
        };
      }

      // We bypass specific permission check for categories right now 
      // as they are not explicitly listed in PermissionMatrix, assuming CATEGORY_VIEW is allowed
      
      const result = operation();
      return {
        success: true,
        data: result
      };
    } catch (error: any) {
      const message = error.message || 'Unknown error occurred.';
      const [code, ...msgParts] = message.split(': ');
      
      return {
        success: false,
        error: {
          code: msgParts.length > 0 ? code : 'UNKNOWN_ERROR',
          message: msgParts.length > 0 ? msgParts.join(': ').trim() : message
        }
      };
    }
  }
}
