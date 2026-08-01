import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { ValidationException } from '@shared/exceptions/validation.exception';
import { Injectable, Inject } from '@angular/core';
import { IOfferRepository } from './repositories/offer.repository.interface';
import { OfferEntity } from './models/offer.entity';
import { OfferCreateRequest, OfferUpdateRequest, OfferStatusRequest, OfferResult } from '@runtime/offer/application/dto/offer.dto';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(
    @Inject(IOfferRepository) private offerRepository: IOfferRepository,
    @Inject(IIdentityService) private IIdentityService: IIdentityService
  ) {}

  createOffer(request: OfferCreateRequest): OfferEntity {
    this.validateDiscount(request.discount_percentage, request.discount_flat);

    const offerTemplate: OfferEntity = {
      offer_id: this.IIdentityService.generateId(),
      name: request.name,
      category: request.category,
      discount_percentage: request.discount_percentage,
      discount_flat: request.discount_flat,
      status: 'ACTIVE',
      valid_from: request.valid_from,
      valid_until: request.valid_until,
      created_at: new Date().toISOString()
    };

    return this.offerRepository.saveNewOffer(offerTemplate as any);
  }

  updateOffer(request: OfferUpdateRequest): OfferEntity {
    this.validateDiscount(request.discount_percentage, request.discount_flat);

    const existingOffer = this.offerRepository.findById(request.offer_id);
    if (!existingOffer) {
      throw new Error(`OFFER_NOT_FOUND: Offer with id ${request.offer_id} does not exist.`);
    }

    const updatedOffer: OfferEntity = {
      ...existingOffer,
      name: request.name,
      category: request.category,
      discount_percentage: request.discount_percentage,
      discount_flat: request.discount_flat,
      valid_from: request.valid_from,
      valid_until: request.valid_until
    };

    this.offerRepository.update(updatedOffer.offer_id, updatedOffer);
    return updatedOffer;
  }

  changeStatus(request: OfferStatusRequest): OfferEntity {
    const existingOffer = this.offerRepository.findById(request.offer_id);
    if (!existingOffer) {
      throw new Error(`OFFER_NOT_FOUND: Offer with id ${request.offer_id} does not exist.`);
    }

    if (existingOffer.status === request.status) {
      return existingOffer;
    }

    const updatedOffer: OfferEntity = {
      ...existingOffer,
      status: request.status
    };

    this.offerRepository.update(updatedOffer.offer_id, updatedOffer);
    return updatedOffer;
  }

  /**
   * Validates if an offer is currently applicable based on the runtime expiration standard.
   */
  isOfferCurrentlyValid(offer: OfferEntity, currentDate: Date = new Date()): boolean {
    if (offer.status !== 'ACTIVE') {
      return false;
    }

    const currentIso = currentDate.toISOString();

    if (offer.valid_from && currentIso < offer.valid_from) {
      return false;
    }

    if (offer.valid_until && currentIso > offer.valid_until) {
      return false;
    }

    return true;
  }

  /**
   * Evaluates offers in the same category and automatically picks the one offering 
   * the highest customer benefit.
   * Note: This calculation assumes a given 'targetAmount' against which discounts are evaluated.
   */
  resolveSameCategoryConflict(offers: OfferEntity[], targetAmount: number): OfferEntity | null {
    if (!offers || offers.length === 0) return null;

    // Filter out invalid offers (expired or not active)
    const validOffers = offers.filter(o => this.isOfferCurrentlyValid(o));
    if (validOffers.length === 0) return null;

    let bestOffer: OfferEntity | null = null;
    let maxDiscountAmount = -1;

    for (const offer of validOffers) {
      let discountAmount = 0;

      if (offer.discount_flat) {
        discountAmount += offer.discount_flat;
      }
      
      if (offer.discount_percentage) {
        discountAmount += (targetAmount * (offer.discount_percentage / 100));
      }

      // Cap discount to target amount (can't discount below 0)
      if (discountAmount > targetAmount) {
        discountAmount = targetAmount;
      }

      if (discountAmount > maxDiscountAmount) {
        maxDiscountAmount = discountAmount;
        bestOffer = offer;
      }
    }

    return bestOffer;
  }

  /**
   * Generates the standard OfferResult format for Billing module consumption.
   */
  generateOfferResult(offer: OfferEntity, targetAmount: number): OfferResult {
    let discountAmount = 0;

    if (offer.discount_flat) {
      discountAmount += offer.discount_flat;
    }
    
    if (offer.discount_percentage) {
      discountAmount += (targetAmount * (offer.discount_percentage / 100));
    }

    if (discountAmount > targetAmount) {
      discountAmount = targetAmount;
    }

    return {
      description: offer.name,
      discount_amount: discountAmount
    };
  }

  private validateDiscount(percentage: number | null, flat: number | null): void {
    if (percentage !== null && (percentage < 0 || percentage > 100)) {
      throw new ValidationException('Discount percentage must be between 0 and 100.');
    }
    
    if (flat !== null && flat < 0) {
      throw new ValidationException('Flat discount cannot be negative.');
    }

    if (percentage === null && flat === null) {
      throw new ValidationException('Offer must provide at least a percentage or flat discount.');
    }
  }
}
