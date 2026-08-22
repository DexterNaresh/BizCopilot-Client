import { TestBed } from '@angular/core/testing';
import { BillingService } from './billing.service';
import { IBillRepository } from './repositories/bill.repository.interface';
import { ProductApplication } from '@runtime/product/application/product.application';
import { ITransactionManager } from '@shared/abstractions/transaction-manager.interface';
import { ISequenceService, SequenceType } from '@shared/abstractions/sequence.service.interface';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { ITaxCalculator } from './services/tax-calculator.interface';
import { IDiscountCalculator } from './services/discount-calculator.interface';

describe('BillingService', () => {
  let service: BillingService;
  let repoSpy: jasmine.SpyObj<IBillRepository>;
  let productAppSpy: jasmine.SpyObj<ProductApplication>;

  beforeEach(() => {
    repoSpy = jasmine.createSpyObj('IBillRepository', ['saveCompletedBill']);
    productAppSpy = jasmine.createSpyObj('ProductApplication', ['getProductsByIds']);
    const txSpy = { execute: (fn: any) => fn() };
    const seqSpy = jasmine.createSpyObj('ISequenceService', ['next']);
    const identitySpy = jasmine.createSpyObj('IIdentityService', ['generateId']);
    const taxSpy = jasmine.createSpyObj('ITaxCalculator', ['calculateTax']);
    const discountSpy = jasmine.createSpyObj('IDiscountCalculator', ['calculateDiscount']);

    seqSpy.next.and.returnValue(1);
    identitySpy.generateId.and.returnValue('id');
    taxSpy.calculateTax.and.returnValue(0);
    discountSpy.calculateDiscount.and.returnValue(0);

    TestBed.configureTestingModule({
      providers: [
        BillingService,
        { provide: IBillRepository, useValue: repoSpy },
        { provide: ProductApplication, useValue: productAppSpy },
        { provide: ITransactionManager, useValue: txSpy },
        { provide: ISequenceService, useValue: seqSpy },
        { provide: IIdentityService, useValue: identitySpy },
        { provide: ITaxCalculator, useValue: taxSpy },
        { provide: IDiscountCalculator, useValue: discountSpy },
      ]
    });
    service = TestBed.inject(BillingService);
  });

  describe('Bill Snapshot', () => {
    it('should preserve product_name and product_type from the time of sale', () => {
      const mockProduct = {
        product_id: 'p1',
        name: 'Apple Juice',
        type: 'LTR',
        price: 100,
        available: 1,
        status: 'ACTIVE'
      };

      productAppSpy.getProductsByIds.and.returnValue({
        success: true,
        data: [mockProduct]
      } as any);

      repoSpy.saveCompletedBill.and.callFake((bill, items) => {
        expect(items[0].product_name).toBe('Apple Juice');
        expect(items[0].product_type).toBe('LTR');
        return bill as any;
      });

      service.processSale({
        deviceId: 'd1',
        userId: 'u1',
        items: [{ productId: 'p1', quantity: 1 }],
        amountPaid: 100
      });

      expect(repoSpy.saveCompletedBill).toHaveBeenCalled();
    });
  });
});
