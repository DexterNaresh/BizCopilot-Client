import { Injectable } from '@angular/core';
import { BaseRepository } from '../base.repository';
import { OfferEntity } from '@runtime/offer/models/offer.entity';
import { DatabaseService } from '../database.service';
import { IOfferRepository } from '@runtime/offer/repositories/offer.repository.interface';

@Injectable({
  providedIn: 'root'
})
export class SqliteOfferRepository extends BaseRepository<OfferEntity> implements IOfferRepository {
  constructor(db: DatabaseService) {
    super(db, 'offers', 'offer_id');
  }

  override findById(id: string): OfferEntity | null {
    return super.findById(id);
  }

  findActiveByCategory(category: string): OfferEntity[] {
    const sql = `SELECT * FROM ${this.tableName} WHERE category = ? AND status = 'ACTIVE'`;
    return this.db.query<OfferEntity>(sql, [category]);
  }

  findAllActive(): OfferEntity[] {
    const sql = `SELECT * FROM ${this.tableName} WHERE status = 'ACTIVE'`;
    return this.db.query<OfferEntity>(sql, []);
  }

  saveNewOffer(offer: OfferEntity): OfferEntity {
    this.create(offer);
    return offer;
  }

  override update(id: string, offer: OfferEntity): void {
    super.update(id, offer);
  }
}
