import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { ProductApplication } from './product.application';
import { ProductService } from '@runtime/product/product.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { UserRole } from '@shared/models/user.model';

describe('ProductApplication', () => {
  let app: ProductApplication;
  let serviceSpy: jasmine.SpyObj<ProductService>;
  let permissionSpy: jasmine.SpyObj<IPermissionService>;
  let sessionSpy: jasmine.SpyObj<ISessionService>;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj('ProductService', ['createProduct', 'archiveProduct']);
    permissionSpy = jasmine.createSpyObj('IPermissionService', ['hasPermission']);
    sessionSpy = jasmine.createSpyObj('ISessionService', ['getCurrentUser']);

    TestBed.configureTestingModule({
      providers: [
        ProductApplication,
        { provide: ProductService, useValue: serviceSpy },
        { provide: IPermissionService, useValue: permissionSpy },
        { provide: ISessionService, useValue: sessionSpy }
      ]
    });
    app = TestBed.inject(ProductApplication);
  });

  it('should deny if user lacks PRODUCT_CREATE permission', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'user1', role: UserRole.EMPLOYEE } as any);
    permissionSpy.hasPermission.and.returnValue(false);

    const result = app.createProduct({
      name: 'Coffee', type: 'QTY', price: 5, category: 'Drinks', barcode: '12345', userId: 'user1', sessionId: 's1'
    });

    expect(result.success).toBeFalse();
    expect(result.error?.code).toBe('PERMISSION_DENIED');
    expect(serviceSpy.createProduct).not.toHaveBeenCalled();
  });

  it('should proceed if user has permission', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'user1', role: UserRole.OWNER } as any);
    permissionSpy.hasPermission.and.returnValue(true);
    serviceSpy.createProduct.and.returnValue({ product_id: 'uuid-1', name: 'Coffee' } as any);

    const result = app.createProduct({
      name: 'Coffee', type: 'QTY', price: 5, category: 'Drinks', barcode: '12345', userId: 'user1', sessionId: 's1'
    });

    expect(result.success).toBeTrue();
    expect(result.data?.product_id).toBe('uuid-1');
    expect(serviceSpy.createProduct).toHaveBeenCalled();
  });

  it('should gracefully handle business exceptions', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'user1', role: UserRole.OWNER } as any);
    permissionSpy.hasPermission.and.returnValue(true);
    serviceSpy.createProduct.and.throwError('VALIDATION_FAILED: Product name is required.');

    const result = app.createProduct({
      name: '', type: 'QTY', price: 5, category: 'Drinks', barcode: '12345', userId: 'user1', sessionId: 's1'
    });

    expect(result.success).toBeFalse();
    expect(result.error?.code).toBe('VALIDATION_FAILED');
    expect(result.error?.message).toBe('Product name is required.');
  });
});




