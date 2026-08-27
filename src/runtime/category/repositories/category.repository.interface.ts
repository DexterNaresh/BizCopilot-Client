import { Injectable } from '@angular/core';
import { CategoryEntity } from '../models/category.entity';

@Injectable()
export abstract class ICategoryRepository {
  abstract findById(id: string): CategoryEntity | null;
  abstract findAll(): CategoryEntity[];
  abstract saveNewCategory(category: CategoryEntity): CategoryEntity;
  abstract update(id: string, category: CategoryEntity): void;
}
