import { Observable } from 'rxjs';
import { ApplicationResult } from './application-result.interface';

export interface CategoryDto {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  status: 'active' | 'inactive';
  productCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface SaveCategoryCommand {
  id?: string; // If empty, create new
  name: string;
  description?: string;
  icon?: string;
  status: 'active' | 'inactive';
}

export abstract class CategoryApplication {
  abstract getCategories(): Observable<ApplicationResult<CategoryDto[]>>;
  abstract getCategory(id: string): Observable<ApplicationResult<CategoryDto>>;
  abstract saveCategory(command: SaveCategoryCommand): Observable<ApplicationResult<CategoryDto>>;
  abstract deleteCategory(id: string): Observable<ApplicationResult<void>>;
}
