import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { ValidationException } from '@shared/exceptions/validation.exception';
import { Injectable, Inject } from '@angular/core';
import { ICategoryRepository } from './repositories/category.repository.interface';
import { CategoryEntity } from './models/category.entity';
import { CategoryCreateRequest, CategoryUpdateRequest, CategoryArchiveRequest, CategoryStatusRequest } from '@runtime/category/application/dto/category.dto';
import { ITransactionManager } from '@shared/abstractions/transaction-manager.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(
    @Inject(ICategoryRepository) private categoryRepository: ICategoryRepository,
    @Inject(IIdentityService) private IIdentityService: IIdentityService,
    @Inject(ITransactionManager) private transactionManager: ITransactionManager
  ) {}

  createCategory(request: CategoryCreateRequest): CategoryEntity {
    this.validateCategoryDetails(request.name);

    return this.transactionManager.execute(() => {
      const categoryId = this.IIdentityService.generateId();

      const categoryTemplate: CategoryEntity = {
        category_id: categoryId,
        name: request.name,
        description: request.description,
        icon: request.icon,
        color_hint: request.color_hint,
        status: 'ACTIVE',
        created_at: new Date().toISOString()
      };

      return this.categoryRepository.saveNewCategory(categoryTemplate);
    });
  }

  updateCategory(request: CategoryUpdateRequest): CategoryEntity {
    this.validateCategoryDetails(request.name);

    const existingCategory = this.categoryRepository.findById(request.category_id);
    if (!existingCategory) {
      throw new Error(`CATEGORY_NOT_FOUND: Category with id ${request.category_id} does not exist.`);
    }

    const updatedCategory: CategoryEntity = {
      ...existingCategory,
      name: request.name,
      description: request.description,
      icon: request.icon,
      color_hint: request.color_hint,
      updated_at: new Date().toISOString()
    };

    this.categoryRepository.update(updatedCategory.category_id, updatedCategory);
    return updatedCategory;
  }

  archiveCategory(request: CategoryArchiveRequest): CategoryEntity {
    const existingCategory = this.categoryRepository.findById(request.category_id);
    if (!existingCategory) {
      throw new Error(`CATEGORY_NOT_FOUND: Category with id ${request.category_id} does not exist.`);
    }

    if (existingCategory.status === 'ARCHIVED') {
      return existingCategory; // Idempotent
    }

    const updatedCategory: CategoryEntity = {
      ...existingCategory,
      status: 'ARCHIVED',
      updated_at: new Date().toISOString()
    };

    this.categoryRepository.update(updatedCategory.category_id, updatedCategory);
    return updatedCategory;
  }

  updateStatus(request: CategoryStatusRequest): CategoryEntity {
    const existingCategory = this.categoryRepository.findById(request.category_id);
    if (!existingCategory) {
      throw new Error(`CATEGORY_NOT_FOUND: Category with id ${request.category_id} does not exist.`);
    }

    const updatedCategory: CategoryEntity = {
      ...existingCategory,
      status: request.status,
      updated_at: new Date().toISOString()
    };

    this.categoryRepository.update(updatedCategory.category_id, updatedCategory);
    return updatedCategory;
  }

  getAllCategories(): CategoryEntity[] {
    return this.categoryRepository.findAll();
  }

  private validateCategoryDetails(name: string) {
    if (!name || name.trim() === '') {
      throw new ValidationException('Category name is required.');
    }
  }
}
