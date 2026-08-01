import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { IOfferRepository } from './repositories/offer.repository.interface';
import { TestBed } from '@angular/core/testing';
import { OfferService } from './offer.service';

import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { OfferEntity } from './models/offer.entity';

describe('OfferService', () => {
  let service: OfferService;
  let repoSpy: any;
  let identitySpy: jasmine.SpyObj<IIdentityService>;

  beforeEach(() => {
    repoSpy = jasmine.createSpyObj('IOfferRepository', ['saveNewOffer', 'findById', 'findActiveByCategory', 'update']);
    identitySpy = jasmine.createSpyObj('IIdentityService', ['generateId']);

    TestBed.configureTestingModule({
      providers: [
        OfferService,
        { provide: IOfferRepository, useValue: repoSpy },
        { provide: IIdentityService, useValue: identitySpy }
      ]
    });
    service = TestBed.inject(OfferService);
  });

  describe('Validation', () => {
    it('should throw if both percentage and flat are null', () => {
      expect(() => {
        service.createOffer({ name: 'Empty', category: 'C1', discount_percentage: null, discount_flat: null, valid_from: null, valid_until: null, userId: '1', sessionId: 's1' });
      }).toThrowError('VALIDATION_FAILED: Offer must provide at least a percentage or flat discount.');
    });

    it('should throw if percentage > 100', () => {
      expect(() => {
        service.createOffer({ name: 'Huge', category: 'C1', discount_percentage: 150, discount_flat: null, valid_from: null, valid_until: null, userId: '1', sessionId: 's1' });
      }).toThrowError('VALIDATION_FAILED: Discount percentage must be between 0 and 100.');
    });
  });

  describe('Runtime Validity', () => {
    let mockOffer: OfferEntity;

    beforeEach(() => {
      mockOffer = {
        offer_id: '1',
        name: 'Test',
        category: 'Summer',
        discount_percentage: 10,
        discount_flat: null,
        status: 'ACTIVE',
        valid_from: null,
        valid_until: null,
        created_at: '2026-07-31T00:00:00Z'
      };
    });

    it('should be valid if ACTIVE and no dates set', () => {
      expect(service.isOfferCurrentlyValid(mockOffer)).toBeTrue();
    });

    it('should be invalid if INACTIVE', () => {
      mockOffer.status = 'INACTIVE';
      expect(service.isOfferCurrentlyValid(mockOffer)).toBeFalse();
    });

    it('should be valid if current date is within bounds', () => {
      mockOffer.valid_from = '2026-07-01T00:00:00Z';
      mockOffer.valid_until = '2026-07-31T23:59:59Z';

      const currentDate = new Date('2026-07-15T12:00:00Z');
      expect(service.isOfferCurrentlyValid(mockOffer, currentDate)).toBeTrue();
    });

    it('should be invalid if current date is before valid_from', () => {
      mockOffer.valid_from = '2026-08-01T00:00:00Z';
      const currentDate = new Date('2026-07-31T12:00:00Z');
      expect(service.isOfferCurrentlyValid(mockOffer, currentDate)).toBeFalse();
    });

    it('should be invalid if current date is after valid_until', () => {
      mockOffer.valid_until = '2026-06-30T00:00:00Z';
      const currentDate = new Date('2026-07-31T12:00:00Z');
      expect(service.isOfferCurrentlyValid(mockOffer, currentDate)).toBeFalse();
    });
  });

  describe('Conflict Resolution (V1 Rule 1)', () => {
    it('should automatically pick the offer with highest customer benefit', () => {
      const offers: OfferEntity[] = [
        { offer_id: '1', discount_percentage: 10, discount_flat: null, status: 'ACTIVE', valid_from: null, valid_until: null } as any,
        { offer_id: '2', discount_percentage: null, discount_flat: 50, status: 'ACTIVE', valid_from: null, valid_until: null } as any,
        { offer_id: '3', discount_percentage: 50, discount_flat: null, status: 'INACTIVE', valid_from: null, valid_until: null } as any // Should be ignored
      ];

      const winner = service.resolveSameCategoryConflict(offers, 100);
      expect(winner).toBeTruthy();
      expect(winner?.offer_id).toBe('2'); // Flat 50 is better than 10% of 100
    });

    it('should calculate best offer by percentage', () => {
      const offers: OfferEntity[] = [
        { offer_id: '1', discount_percentage: null, discount_flat: 500, status: 'ACTIVE', valid_from: null, valid_until: null } as any
      ];

      const result = service.generateOfferResult(offers[0], 200);
      expect(result.discount_amount).toBe(200);
    });
  });
});


