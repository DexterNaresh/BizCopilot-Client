import { Injectable } from '@angular/core';
import { BaseRepository } from '../base.repository';
import { CategoryEntity } from '@runtime/category/models/category.entity';
import { DatabaseService } from '../database.service';
import { ICategoryRepository } from '@runtime/category/repositories/category.repository.interface';

@Injectable({
  providedIn: 'root'
})
export class SqliteCategoryRepository extends BaseRepository<CategoryEntity> implements ICategoryRepository {
  constructor(db: DatabaseService) {
    super(db, 'categories', 'category_id');
  }

  override findById(id: string): CategoryEntity | null {
    return super.findById(id);
  }

  override findAll(): CategoryEntity[] {
    return super.findAll();
  }

  saveNewCategory(category: CategoryEntity): CategoryEntity {
    this.create(category);
    return category;
  }

  override update(id: string, category: CategoryEntity): void {
    super.update(id, category);
  }
}
