import { IDiscountCalculator } from './services/discount-calculator.interface';
import { ITaxCalculator } from './services/tax-calculator.interface';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { ISequenceService } from '@shared/abstractions/sequence.service.interface';
import { ITransactionManager } from '@shared/abstractions/transaction-manager.interface';
import { BusinessException } from '@shared/exceptions/business.exception';
import { NotFoundException } from '@shared/exceptions/not-found.exception';
import { ValidationException } from '@shared/exceptions/validation.exception';
import { Injectable, Inject } from '@angular/core';
import { IBillRepository } from '@runtime/billing/repositories/bill.repository.interface';
import { ProductApplication } from '@runtime/product/application/product.application';
import { CompleteSaleRequest, CalculateOffersRequest, OfferCandidateDto } from '@application/contracts/sales/sales.dto';
import { BillEntity, BillItemEntity } from '@runtime/billing/models/bill.entity';
import { OfferEntity } from '@runtime/offer/models/offer.entity';
import { OfferService } from '@runtime/offer/offer.service';
import { IOfferRepository } from '@runtime/offer/repositories/offer.repository.interface';
import { BillNumberFormatter } from './formatting/bill-number.formatter';
import { SequenceType } from '@shared/abstractions/sequence.service.interface';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  // UUID for the permanently initialized Walk-In Customer
  public readonly WALK_IN_CUSTOMER_ID = '00000000-0000-0000-0000-000000000000';

    constructor(
    @Inject(IBillRepository) private billRepo: IBillRepository,
    @Inject(ProductApplication) private productApp: ProductApplication,
    @Inject(ITransactionManager) private transactionManager: ITransactionManager,
    @Inject(ISequenceService) private sequenceService: ISequenceService,
    @Inject(IIdentityService) private IIdentityService: IIdentityService,
    @Inject(ITaxCalculator) private taxCalculator: ITaxCalculator,
    @Inject(IDiscountCalculator) private discountCalculator: IDiscountCalculator,
    @Inject(OfferService) private offerService: OfferService,
    @Inject(IOfferRepository) private offerRepository: IOfferRepository
  ) {}

  /**
   * Processes a sale by calculating totals, taxes, and persisting it atomically.
   */
    processSale(request: CompleteSaleRequest): BillEntity {
    // 1. Idempotency Check
    const billId = request.operationId || this.IIdentityService.generateId();
    const existingBillData = this.billRepo.getBillWithItems(billId);
    if (existingBillData) {
      return existingBillData.bill;
    }

    if (request.items.length === 0) {
      throw new ValidationException('Bill must have at least one item.');
    }

    const productIds = request.items.map(i => i.productId);
    const productsResponse = this.productApp.getProductsByIds({ userId: request.userId, productIds });
    
    if (!productsResponse.success) {
      throw new BusinessException('PRODUCT_FETCH_FAILED', productsResponse.error?.message || 'Failed to fetch products');
    }
    const products = productsResponse.data || [];
    const productMap = new Map(products.map(p => [p.product_id, p]));

    return this.transactionManager.execute(() => {
      const billItems: BillItemEntity[] = [];
      let subtotal = 0;

      for (const item of request.items) {
        if (item.quantity <= 0) {
          throw new ValidationException('Quantity must be greater than zero.');
        }

        const product = productMap.get(item.productId);
        if (!product) {
          throw new NotFoundException('Product', item.productId);
        }

        if (product.available !== 1 || product.status !== 'ACTIVE') {
          throw new BusinessException('PRODUCT_UNAVAILABLE', 'Product is not available for sale.');
        }

        // Product Type Quantity Rules
        const productType = product.type || 'QTY';
        if (productType === 'QTY' || productType === 'PACK') {
          if (!Number.isInteger(item.quantity)) {
            throw new ValidationException(`Quantity for product type ${productType} must be an integer.`);
          }
        }

        // Decimal representation safety (JavaScript Math rounding for precision)
        const quantity = Math.round(item.quantity * 1000) / 1000;
        const lineTotal = Math.round(product.price * quantity * 100) / 100;
        subtotal += lineTotal;

        billItems.push({
          bill_item_id: this.IIdentityService.generateId(),
          bill_id: billId,
          product_id: product.product_id,
          product_name: product.name,
          product_type: productType,
          quantity: quantity,
          price_per_unit: product.price,
          discount: 0,
          tax: 0,
          total: lineTotal
        });
      }

      const activeOffers = this.offerRepository.findAllActive();
      const validOffers = activeOffers.filter(o => this.offerService.isOfferCurrentlyValid(o));
      
      let applicableOffers = validOffers.filter(o => {
        // Mock eligibility: if it requires minimum subtotal, check it. (Assuming simple rule for V1)
        if (o.category === 'Bill Discount' && subtotal < 500 && o.name.includes('500')) return false;
        return true;
      });

      let appliedOffers: OfferEntity[] = [];
      let finalOffers: OfferEntity[] = [];

      if (request.appliedOfferIds && request.appliedOfferIds.length > 0) {
        // Validate user selected offers
        for (const id of request.appliedOfferIds) {
          const offer = applicableOffers.find(o => o.offer_id === id);
          if (!offer) {
            throw new ValidationException(`Offer ${id} is invalid, expired, or ineligible.`);
          }
          finalOffers.push(offer);
        }
        // Conflict rule: cannot have multiple offers from same category if applied manually
        const categories = new Set();
        for (const o of finalOffers) {
          if (o.category && categories.has(o.category)) {
            throw new ValidationException(`Multiple offers from category ${o.category} selected.`);
          }
          categories.add(o.category);
        }
      } else {
        // Auto apply offers if they are all in same category (Rule 1) or no conflict
        // Group by category
        const categoryMap = new Map<string, OfferEntity[]>();
        applicableOffers.forEach((o: OfferEntity) => {
          const cat = o.category || 'General';
          if (!categoryMap.has(cat)) categoryMap.set(cat, []);
          categoryMap.get(cat)!.push(o);
        });

        // Resolve same-category conflicts automatically
        categoryMap.forEach((offers, cat) => {
           const best = this.offerService.resolveSameCategoryConflict(offers, subtotal);
           if (best) finalOffers.push(best);
        });
        
        // If there are different categories, UI should decide. We shouldn't auto apply cross-category in V1 unless specified.
        // Wait, spec says: "When multiple different offer categories are applicable, the billing screen displays an Applicable Offers popup."
        // So we should NOT apply them automatically. We apply nothing and let the user decide if there are cross-category conflicts.
        if (finalOffers.length > 1) {
           finalOffers = []; // User must select
        }
      }

      let discountTotal = 0;
      for (const o of finalOffers) {
        const res = this.offerService.generateOfferResult(o, subtotal);
        discountTotal += (res.discount_amount || 0);
      }
      let taxTotal = this.taxCalculator.calculateTax(subtotal - discountTotal, billItems);
      
      // Calculate individual item tax allocation after the tax calculator modifies them (mocked behavior assumes it updates billItems)
      taxTotal = Math.round(taxTotal * 100) / 100;

      const grandTotal = Math.round((subtotal - discountTotal + taxTotal) * 100) / 100;

      if (request.amountPaid < grandTotal) {
        throw new BusinessException('PAYMENT_INSUFFICIENT', 'Paid amount is less than grand total.');
      }

      const sequence = this.sequenceService.next(SequenceType.BILL_NUMBER);
      const billNumber = BillNumberFormatter.format(request.deviceId, sequence);

      const billToSave: BillEntity = {
        bill_id: billId,
        bill_number: billNumber,
        device_id: request.deviceId,
        user_id: request.userId,
        session_id: request.sessionId,
        customer_id: request.customerId || this.WALK_IN_CUSTOMER_ID,
        subtotal,
        discount_total: discountTotal,
        tax_total: taxTotal,
        grand_total: grandTotal,
        payment_method: request.paymentMethod,
        status: 'COMPLETED',
        created_at: new Date().toISOString()
      };

      return this.billRepo.saveCompletedBill(billToSave, billItems, billNumber);
    });
  }

  cancelSale(billId: string): BillEntity {
    const existingBillData = this.billRepo.getBillWithItems(billId);
    if (!existingBillData) {
      throw new NotFoundException('Bill', billId);
    }
    const bill = existingBillData.bill;
    
    if (bill.status === 'COMPLETED') {
      throw new BusinessException('BILL_COMPLETED', 'Cannot cancel a completed bill. Use return/refund or void.');
    }
    
    bill.status = 'CANCELLED';
    // Assume repo has update method from BaseRepository
    this.billRepo.update(billId, bill);
    return bill;
  }

  reprintBill(billId: string): BillEntity {
    const existingBillData = this.billRepo.getBillWithItems(billId);
    if (!existingBillData) {
      throw new NotFoundException('Bill', billId);
    }
    const bill = existingBillData.bill;
    
    return bill;
  }

  evaluateApplicableOffers(request: CalculateOffersRequest): OfferCandidateDto[] {
    // 1. Calculate subtotal based on items
    let subtotal = 0;
    const productIds = request.items.map(i => i.productId);
    const productsResponse = this.productApp.getProductsByIds({ userId: request.userId, productIds });
    const products = productsResponse.data || [];
    const productMap = new Map(products.map(p => [p.product_id, p]));

    for (const item of request.items) {
      const product = productMap.get(item.productId);
      if (product) {
        const quantity = Math.round(item.quantity * 1000) / 1000;
        const lineTotal = Math.round(product.price * quantity * 100) / 100;
        subtotal += lineTotal;
      }
    }

    const activeOffers = this.offerRepository.findAllActive();
    const validOffers = activeOffers.filter(o => this.offerService.isOfferCurrentlyValid(o));
    
    // Evaluate eligibility
    let applicableOffers = validOffers.filter(o => {
      if (o.category === 'Bill Discount' && subtotal < 500 && o.name.includes('500')) return false;
      return true;
    });

    // Group by category to find conflicts
    const categoryMap = new Map<string, OfferEntity[]>();
    applicableOffers.forEach((o: OfferEntity) => {
      const cat = o.category || 'General';
      if (!categoryMap.has(cat)) categoryMap.set(cat, []);
      categoryMap.get(cat)!.push(o);
    });

    const crossCategoryConflict = categoryMap.size > 1;

    const candidates: OfferCandidateDto[] = [];
    applicableOffers.forEach(o => {
      const res = this.offerService.generateOfferResult(o, subtotal);
      candidates.push({
        offer_id: o.offer_id,
        name: o.name,
        description: o.description || res.description,
        discount_amount: res.discount_amount,
        category: o.category || 'General',
        requires_operator_selection: crossCategoryConflict
      });
    });

    return candidates;
  }

}
