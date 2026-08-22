import { Injectable } from '@angular/core';
import { ProductEntity } from '../models/product.entity';
@Injectable()
export abstract class IProductRepository {
  abstract findById(id: string): ProductEntity | null;
  abstract findByIds(ids: string[]): ProductEntity[];
  abstract findByCode(productCode: string): ProductEntity | null;
  abstract findByBarcode(barcode: string): ProductEntity | null;
  abstract list(status: 'ACTIVE' | 'ARCHIVED'): ProductEntity[];
  abstract saveNewProduct(product: ProductEntity): ProductEntity;
  abstract update(id: string, product: ProductEntity): void;
}
