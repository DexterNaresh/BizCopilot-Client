import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { CategoryApplication, CategoryDto, SaveCategoryCommand } from '../../../application/contracts/category.application';
import { ApplicationResult } from '../../../application/contracts/application-result.interface';

@Injectable({
  providedIn: 'root'
})
export class TemporaryCategoryAdapter implements CategoryApplication {
  private categories: CategoryDto[] = [
    { id: 'cat-1', name: 'Beverages', description: 'Hot and cold drinks', icon: 'local_cafe', status: 'active', productCount: 12, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 'cat-2', name: 'Desserts', description: 'Sweet treats', icon: 'cake', status: 'active', productCount: 8, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 'cat-3', name: 'Food', description: 'Main courses', icon: 'restaurant', status: 'active', productCount: 25, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
  ];

  getCategories(): Observable<ApplicationResult<CategoryDto[]>> {
    return of({ success: true, data: [...this.categories] } as ApplicationResult<CategoryDto[]>).pipe(delay(300));
  }

  getCategory(id: string): Observable<ApplicationResult<CategoryDto>> {
    const category = this.categories.find(c => c.id === id);
    if (category) {
      return of({ success: true, data: { ...category } } as ApplicationResult<CategoryDto>).pipe(delay(300));
    }
    return of({ success: false, error: { code: 'NOT_FOUND', message: 'Category not found' } } as ApplicationResult<CategoryDto>).pipe(delay(300));
  }

  saveCategory(command: SaveCategoryCommand): Observable<ApplicationResult<CategoryDto>> {
    let category: CategoryDto;
    
    if (command.id) {
      const index = this.categories.findIndex(c => c.id === command.id);
      if (index === -1) {
        return of({ success: false, error: { code: 'NOT_FOUND', message: 'Category not found' } } as ApplicationResult<CategoryDto>).pipe(delay(500));
      }
      category = {
        ...this.categories[index],
        name: command.name,
        description: command.description,
        icon: command.icon,
        status: command.status,
        updatedAt: new Date().toISOString()
      };
      this.categories[index] = category;
    } else {
      category = {
        id: 'cat-' + Date.now().toString(),
        name: command.name,
        description: command.description,
        icon: command.icon,
        status: command.status,
        productCount: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      this.categories.push(category);
    }
    
    return of({ success: true, data: { ...category } } as ApplicationResult<CategoryDto>).pipe(delay(500));
  }

  deleteCategory(id: string): Observable<ApplicationResult<void>> {
    const category = this.categories.find(c => c.id === id);
    if (!category) {
      return of({ success: false, error: { code: 'NOT_FOUND', message: 'Category not found' } } as ApplicationResult<void>).pipe(delay(500));
    }
    if (category.productCount > 0) {
      return of({ success: false, error: { code: 'IN_USE', message: 'Category is in use and cannot be deleted' } } as ApplicationResult<void>).pipe(delay(500));
    }
    
    this.categories = this.categories.filter(c => c.id !== id);
    return of({ success: true } as ApplicationResult<void>).pipe(delay(500));
  }
}
