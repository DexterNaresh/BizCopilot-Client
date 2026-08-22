import { Injectable } from '@angular/core';
import { BaseRepository } from '../base.repository';
import { ProductEntity } from '@runtime/product/models/product.entity';
import { DatabaseService } from '../database.service';
import { IProductRepository } from '@runtime/product/repositories/product.repository.interface';

@Injectable({
  providedIn: 'root'
})
export class SqliteProductRepository extends BaseRepository<ProductEntity> implements IProductRepository {
  constructor(db: DatabaseService) {
    super(db, 'products', 'product_id');
  }

  override findById(id: string): ProductEntity | null {
    return super.findById(id);
  }

  findByIds(ids: string[]): ProductEntity[] {
    if (ids.length === 0) return [];
    const placeholders = ids.map(() => '?').join(',');
    const sql = `SELECT * FROM ${this.tableName} WHERE product_id IN (${placeholders})`;
    return this.db.query<ProductEntity>(sql, ids);
  }

  findByCode(productCode: string): ProductEntity | null {
    const sql = `SELECT * FROM ${this.tableName} WHERE product_code = ?`;
    return this.db.queryOne<ProductEntity>(sql, [productCode]);
  }

  findByBarcode(barcode: string): ProductEntity | null {
    const sql = `SELECT * FROM ${this.tableName} WHERE barcode = ?`;
    return this.db.queryOne<ProductEntity>(sql, [barcode]);
  }

  list(status: 'ACTIVE' | 'ARCHIVED'): ProductEntity[] {
    return this.db.query<ProductEntity>(
      `SELECT * FROM ${this.tableName} WHERE status = ? ORDER BY name COLLATE NOCASE`,
      [status]
    );
  }

  saveNewProduct(product: ProductEntity): ProductEntity {
    this.create(product);
    return product;
  }

  override update(id: string, product: ProductEntity): void {
    super.update(id, product);
  }
}
