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
import { CompleteSaleRequest } from '@runtime/billing/application/dto/sales.dto';
import { BillEntity, BillItemEntity } from '@runtime/billing/models/bill.entity';
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
    @Inject(IDiscountCalculator) private discountCalculator: IDiscountCalculator
  ) {}

  /**
   * Processes a sale by calculating totals, taxes, and persisting it atomically.
   */
    processSale(request: CompleteSaleRequest): BillEntity {
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
      
      const billId = this.IIdentityService.generateId();

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

        const lineTotal = product.price * item.quantity;
        subtotal += lineTotal;

        billItems.push({
          bill_item_id: this.IIdentityService.generateId(),
          bill_id: billId,
          product_id: product.product_id,
          quantity: item.quantity,
          price_per_unit: product.price,
          discount: 0,
          total: lineTotal
        });
      }

      const discountTotal = this.discountCalculator.calculateDiscount(subtotal, billItems);
      const taxTotal = this.taxCalculator.calculateTax(subtotal - discountTotal, billItems);
      const grandTotal = subtotal - discountTotal + taxTotal;

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

}
