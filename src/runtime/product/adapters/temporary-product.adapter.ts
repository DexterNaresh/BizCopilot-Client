import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ProductApplication, ProductDto, SaveProductCommand } from '../../../application/contracts/product.application';
import { ApplicationResult } from '../../../application/contracts/application-result.interface';

@Injectable({
  providedIn: 'root'
})
export class TemporaryProductAdapter implements ProductApplication {
  private products: ProductDto[] = [
    { id: 'prod-1', name: 'Cappuccino', categoryId: 'cat-1', categoryName: 'Beverages', sellingPrice: 120, availability: 'available', favourite: true, unit: 'Cup', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 'prod-2', name: 'Chocolate Cake', categoryId: 'cat-2', categoryName: 'Desserts', sellingPrice: 80, availability: 'available', favourite: false, unit: 'Slice', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 'prod-3', name: 'Veg Burger', categoryId: 'cat-3', categoryName: 'Food', sellingPrice: 150, availability: 'available', favourite: true, unit: 'Piece', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 'prod-4', name: 'Orange Juice', categoryId: 'cat-1', categoryName: 'Beverages', sellingPrice: 90, availability: 'unavailable', favourite: false, unit: 'Glass', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ];

  getProducts(categoryId?: string): Observable<ApplicationResult<ProductDto[]>> {
    let filtered = this.products;
    if (categoryId) {
      filtered = filtered.filter(p => p.categoryId === categoryId);
    }
    return of({ success: true, data: [...filtered] } as ApplicationResult<ProductDto[]>).pipe(delay(300));
  }

  getProduct(id: string): Observable<ApplicationResult<ProductDto>> {
    const product = this.products.find(p => p.id === id);
    if (product) {
      return of({ success: true, data: { ...product } } as ApplicationResult<ProductDto>).pipe(delay(300));
    }
    return of({ success: false, error: { code: 'NOT_FOUND', message: 'Product not found' } } as ApplicationResult<ProductDto>).pipe(delay(300));
  }

  saveProduct(command: SaveProductCommand): Observable<ApplicationResult<ProductDto>> {
    let product: ProductDto;
    
    // In a real implementation, we would query the category to get its name.
    const mockCategoryName = 'Assigned Category';

    if (command.id) {
      const index = this.products.findIndex(p => p.id === command.id);
      if (index === -1) {
        return of({ success: false, error: { code: 'NOT_FOUND', message: 'Product not found' } } as ApplicationResult<ProductDto>).pipe(delay(500));
      }
      product = {
        ...this.products[index],
        name: command.name,
        categoryId: command.categoryId,
        categoryName: mockCategoryName,
        sellingPrice: command.sellingPrice,
        image: command.image,
        availability: command.availability,
        favourite: command.favourite,
        barcode: command.barcode,
        unit: command.unit,
        description: command.description,
        updatedAt: new Date().toISOString()
      };
      this.products[index] = product;
    } else {
      product = {
        id: 'prod-' + Date.now().toString(),
        name: command.name,
        categoryId: command.categoryId,
        categoryName: mockCategoryName,
        sellingPrice: command.sellingPrice,
        image: command.image,
        availability: command.availability,
        favourite: command.favourite,
        barcode: command.barcode,
        unit: command.unit,
        description: command.description,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      this.products.push(product);
    }
    
    return of({ success: true, data: { ...product } } as ApplicationResult<ProductDto>).pipe(delay(500));
  }

  deleteProduct(id: string): Observable<ApplicationResult<void>> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) {
      return of({ success: false, error: { code: 'NOT_FOUND', message: 'Product not found' } } as ApplicationResult<void>).pipe(delay(500));
    }
    this.products.splice(index, 1);
    return of({ success: true } as ApplicationResult<void>).pipe(delay(500));
  }

  toggleFavourite(id: string, favourite: boolean): Observable<ApplicationResult<void>> {
    const product = this.products.find(p => p.id === id);
    if (product) {
      product.favourite = favourite;
      return of({ success: true } as ApplicationResult<void>).pipe(delay(300));
    }
    return of({ success: false, error: { code: 'NOT_FOUND', message: 'Product not found' } } as ApplicationResult<void>).pipe(delay(300));
  }

  toggleAvailability(id: string, availability: 'available' | 'unavailable'): Observable<ApplicationResult<void>> {
    const product = this.products.find(p => p.id === id);
    if (product) {
      product.availability = availability;
      return of({ success: true } as ApplicationResult<void>).pipe(delay(300));
    }
    return of({ success: false, error: { code: 'NOT_FOUND', message: 'Product not found' } } as ApplicationResult<void>).pipe(delay(300));
  }
}
