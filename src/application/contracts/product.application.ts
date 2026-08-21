import { Observable } from 'rxjs';
import { ApplicationResult } from './application-result.interface';

export interface ProductDto {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string; // Denormalized for fast display
  sellingPrice: number;
  image?: string;
  availability: 'available' | 'unavailable';
  favourite: boolean;
  barcode?: string;
  type: 'QTY' | 'KG' | 'LTR' | 'METER' | 'PACK';
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SaveProductCommand {
  id?: string; // If empty, create new
  name: string;
  categoryId: string;
  sellingPrice: number;
  image?: string;
  availability: 'available' | 'unavailable';
  favourite: boolean;
  barcode?: string;
  type: 'QTY' | 'KG' | 'LTR' | 'METER' | 'PACK';
  description?: string;
}

export abstract class ProductApplication {
  abstract getProducts(categoryId?: string): Observable<ApplicationResult<ProductDto[]>>;
  abstract getProduct(id: string): Observable<ApplicationResult<ProductDto>>;
  abstract saveProduct(command: SaveProductCommand): Observable<ApplicationResult<ProductDto>>;
  abstract deleteProduct(id: string): Observable<ApplicationResult<void>>;
  abstract toggleFavourite(id: string, favourite: boolean): Observable<ApplicationResult<void>>;
  abstract toggleAvailability(id: string, availability: 'available' | 'unavailable'): Observable<ApplicationResult<void>>;
}
