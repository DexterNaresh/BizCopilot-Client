import { Injectable } from '@angular/core';
import { OfferEntity } from '../models/offer.entity';
@Injectable()
export abstract class IOfferRepository {
  abstract findById(id: string): OfferEntity | null;
  abstract findActiveByCategory(category: string): OfferEntity[];
  abstract saveNewOffer(offer: OfferEntity): OfferEntity;
  abstract update(id: string, offer: OfferEntity): void;
}
