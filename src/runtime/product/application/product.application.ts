import { Injectable, Inject } from '@angular/core';
import { ProductService } from '@runtime/product/product.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ApplicationResponse } from '@application/contracts/sales/sales.dto';
import { ProductEntity } from '../models/product.entity';
import { ProductCreateRequest, ProductUpdateRequest, ProductArchiveRequest, ProductAvailabilityRequest, ProductInfo } from '@runtime/product/application/dto/product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductApplication {
  constructor(
    @Inject(ProductService) private productService: ProductService,
    @Inject(IPermissionService) private IPermissionService: IPermissionService,
    @Inject(ISessionService) private ISessionService: ISessionService
  ) {}

  createProduct(request: ProductCreateRequest): ApplicationResponse<ProductInfo> {
    return this.executeWithPermission(request.userId, 'PRODUCT_CREATE', () => {
      return this.mapToInfo(this.productService.createProduct(request));
    });
  }

  updateProduct(request: ProductUpdateRequest): ApplicationResponse<ProductInfo> {
    return this.executeWithPermission(request.userId, 'PRODUCT_UPDATE', () => {
      return this.mapToInfo(this.productService.updateProduct(request));
    });
  }

  archiveProduct(request: ProductArchiveRequest): ApplicationResponse<ProductInfo> {
    return this.executeWithPermission(request.userId, 'PRODUCT_ARCHIVE', () => {
      return this.mapToInfo(this.productService.archiveProduct(request));
    });
  }

  updateAvailability(request: ProductAvailabilityRequest): ApplicationResponse<ProductInfo> {
    return this.executeWithPermission(request.userId, 'PRODUCT_AVAILABILITY', () => {
      return this.mapToInfo(this.productService.updateAvailability(request));
    });
  }

  getProductsByIds(request: { userId: string, productIds: string[] }): ApplicationResponse<ProductInfo[]> {
    return this.executeWithPermission(request.userId, 'PRODUCT_VIEW', () => {
      return this.productService.getProductsByIds(request.productIds).map(e => this.mapToInfo(e));
    });
  }

  private mapToInfo(entity: ProductEntity): ProductInfo {
    return {
      product_id: entity.product_id,
      product_code: entity.product_code,
      name: entity.name,
      type: entity.type,
      description: entity.description,
      price: entity.price,
      category: entity.category,
      barcode: entity.barcode,
      available: entity.available,
      status: entity.status,
      created_at: entity.created_at
    };
  }

  /**
   * Helper method to enforce permissions and map exceptions to standard ApplicationResponse.
   */
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

      if (!this.IPermissionService.hasPermission(currentUser.role, permission)) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'You do not have permission to perform this action.'
          }
        };
      }

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
