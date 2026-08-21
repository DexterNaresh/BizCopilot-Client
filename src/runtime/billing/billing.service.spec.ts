import { BillingService } from './billing.service';
import { CompleteSaleRequest } from '@application/contracts/sales/sales.dto';
import { BusinessException } from '@shared/exceptions/business.exception';
import { ValidationException } from '@shared/exceptions/validation.exception';

describe('BillingService', () => {
  let service: BillingService;
  let mockBillRepo: any;
  let mockProductApp: any;
  let mockTransactionManager: any;
  let mockSequenceService: any;
  let mockIdentityService: any;
  let mockTaxCalculator: any;
  let mockDiscountCalculator: any;
  let mockOfferService: any;
  let mockOfferRepo: any;

  beforeEach(() => {
    mockBillRepo = {
      getBillWithItems: jasmine.createSpy('getBillWithItems').and.returnValue(null),
      saveCompletedBill: jasmine.createSpy('saveCompletedBill').and.callFake((bill, items, num) => bill)
    };

    mockProductApp = {
      getProductsByIds: jasmine.createSpy('getProductsByIds').and.returnValue({
        success: true,
        data: [
          { product_id: 'p1', name: 'Item 1', price: 100, available: 1, status: 'ACTIVE', type: 'QTY' },
          { product_id: 'p2', name: 'Item 2', price: 200, available: 1, status: 'ACTIVE', type: 'QTY' }
        ]
      })
    };

    mockTransactionManager = {
      execute: jasmine.createSpy('execute').and.callFake((fn: any) => fn())
    };

    mockSequenceService = {
      next: jasmine.createSpy('next').and.returnValue(1)
    };

    mockIdentityService = {
      generateId: jasmine.createSpy('generateId').and.returnValue('uuid-123')
    };

    mockTaxCalculator = {
      calculateTax: jasmine.createSpy('calculateTax').and.returnValue(0)
    };

    mockDiscountCalculator = {
      calculateDiscount: jasmine.createSpy('calculateDiscount').and.returnValue(0)
    };

    mockOfferService = {
      isOfferCurrentlyValid: jasmine.createSpy('isOfferCurrentlyValid').and.returnValue(true),
      resolveSameCategoryConflict: jasmine.createSpy('resolveSameCategoryConflict').and.callFake((offers: any[]) => offers[0]),
      generateOfferResult: jasmine.createSpy('generateOfferResult').and.callFake((offer: any) => ({
        description: offer.name,
        discount_amount: offer.discount_flat || 0
      }))
    };

    mockOfferRepo = {
      findAllActive: jasmine.createSpy('findAllActive').and.returnValue([])
    };

    service = new BillingService(
      mockBillRepo,
      mockProductApp,
      mockTransactionManager,
      mockSequenceService,
      mockIdentityService,
      mockTaxCalculator,
      mockDiscountCalculator,
      mockOfferService,
      mockOfferRepo
    );
  });

  const baseRequest: CompleteSaleRequest = {
    deviceId: 'dev1',
    userId: 'u1',
    items: [{ productId: 'p1', quantity: 2 }], // 2 * 100 = 200 subtotal
    amountPaid: 200
  };

  it('Sale without offer', () => {
    mockOfferRepo.findAllActive.and.returnValue([]); // No offers
    
    const bill = service.processSale(baseRequest);
    
    expect(bill.subtotal).toBe(200);
    expect(bill.discount_total).toBe(0);
    expect(bill.grand_total).toBe(200);
  });

  it('Sale with valid auto-applied offer (Same Category)', () => {
    mockOfferRepo.findAllActive.and.returnValue([
      { offer_id: 'o1', name: '10 OFF', category: 'General', discount_flat: 10 }
    ]);
    
    const bill = service.processSale(baseRequest);
    
    expect(bill.subtotal).toBe(200);
    expect(bill.discount_total).toBe(10);
    expect(bill.grand_total).toBe(190);
  });

  it('Sale with invalid/expired selected offer throws', () => {
    mockOfferRepo.findAllActive.and.returnValue([]); // No active offers
    const req = { ...baseRequest, appliedOfferIds: ['expired_offer'] };
    
    expect(() => service.processSale(req)).toThrowError(ValidationException, /Offer expired_offer is invalid/);
  });

  it('Sale with conflicting offers in same category requires manual selection if applied via UI, or throws if multiple selected', () => {
    mockOfferRepo.findAllActive.and.returnValue([
      { offer_id: 'o1', name: '10 OFF', category: 'General', discount_flat: 10 },
      { offer_id: 'o2', name: '20 OFF', category: 'General', discount_flat: 20 }
    ]);
    
    // User tries to apply both from the same category
    const req = { ...baseRequest, appliedOfferIds: ['o1', 'o2'] };
    expect(() => service.processSale(req)).toThrowError(ValidationException, /Multiple offers from category General selected/);
  });

  it('Sale with cross-category selection (UI selected multiple valid categories)', () => {
    mockOfferRepo.findAllActive.and.returnValue([
      { offer_id: 'o1', name: '10 OFF General', category: 'General', discount_flat: 10 },
      { offer_id: 'o2', name: '5 OFF Specific', category: 'Specific', discount_flat: 5 }
    ]);
    
    // Auto apply should yield 0 discount because cross-category requires user selection
    const reqAuto = { ...baseRequest, amountPaid: 200 };
    const billAuto = service.processSale(reqAuto);
    expect(billAuto.discount_total).toBe(0); // Because finalOffers.length > 1 => finalOffers = []
    
    // Now user applies both manually
    const reqManual = { ...baseRequest, appliedOfferIds: ['o1', 'o2'], amountPaid: 200 };
    const billManual = service.processSale(reqManual);
    expect(billManual.discount_total).toBe(15);
  });
});
