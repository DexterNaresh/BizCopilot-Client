import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { IProductRepository } from './repositories/product.repository.interface';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { ITransactionManager } from '@shared/abstractions/transaction-manager.interface';
import { ISequenceService } from '@shared/abstractions/sequence.service.interface';
import { ProductType } from './models/product.entity';

describe('ProductService', () => {
  let service: ProductService;
  let repoSpy: jasmine.SpyObj<IProductRepository>;
  
  beforeEach(() => {
    repoSpy = jasmine.createSpyObj('IProductRepository', ['saveNewProduct', 'findById', 'findByBarcode']);
    const identitySpy = jasmine.createSpyObj('IIdentityService', ['generateId']);
    const txSpy = { execute: (fn: any) => fn() };
    const seqSpy = jasmine.createSpyObj('ISequenceService', ['next']);
    
    identitySpy.generateId.and.returnValue('test-id');
    seqSpy.next.and.returnValue(1);
    
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        { provide: IProductRepository, useValue: repoSpy },
        { provide: IIdentityService, useValue: identitySpy },
        { provide: ITransactionManager, useValue: txSpy },
        { provide: ISequenceService, useValue: seqSpy },
      ]
    });
    service = TestBed.inject(ProductService);
  });

  ['QTY', 'KG', 'LTR', 'METER', 'PACK'].forEach(type => {
    it(`should create Product with type ${type}`, () => {
      repoSpy.saveNewProduct.and.callFake((p: any) => p);
      const res = service.createProduct({
        name: 'Test Product',
        type: type as ProductType,
        price: 100,
        userId: 'u1'
      });
      expect(res.type).toBe(type);
      expect(repoSpy.saveNewProduct).toHaveBeenCalled();
    });
  });
});