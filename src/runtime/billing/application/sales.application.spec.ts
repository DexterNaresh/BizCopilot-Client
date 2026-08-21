import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { SalesApplication } from '@application/contracts/sales/sales.application';
import { BillingService } from '@runtime/billing/billing.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { UserRole } from '@shared/models/user.model';

describe('SalesApplication', () => {
  let app: SalesApplication;
  let billingSpy: jasmine.SpyObj<BillingService>;
  let permissionSpy: jasmine.SpyObj<IPermissionService>;
  let sessionSpy: jasmine.SpyObj<ISessionService>;

  beforeEach(() => {
    billingSpy = jasmine.createSpyObj('BillingService', ['processSale']);
    permissionSpy = jasmine.createSpyObj('IPermissionService', ['hasPermission']);
    sessionSpy = jasmine.createSpyObj('ISessionService', ['getCurrentUser']);

    TestBed.configureTestingModule({
      providers: [
        SalesApplication,
        { provide: BillingService, useValue: billingSpy },
        { provide: IPermissionService, useValue: permissionSpy },
        { provide: ISessionService, useValue: sessionSpy }
      ]
    });
    app = TestBed.inject(SalesApplication);
  });

  it('should return PERMISSION_DENIED if user lacks rights', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'user1', role: UserRole.EMPLOYEE } as any);
    permissionSpy.hasPermission.and.returnValue(false);

    const response = app.completeSale({
      deviceId: 'DEV1', userId: 'user1', sessionId: 's1', items: [], paymentMethod: 'CASH', amountPaid: 0
    });

    expect(response.success).toBeFalse();
    expect(response.error?.code).toBe('PERMISSION_DENIED');
    expect(billingSpy.processSale).not.toHaveBeenCalled();
  });

  it('should call BillingService and return success on valid request', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'user1', role: UserRole.EMPLOYEE } as any);
    permissionSpy.hasPermission.and.returnValue(true);
    billingSpy.processSale.and.returnValue({ bill_id: '123', grand_total: 50 } as any);

    const response = app.completeSale({
      deviceId: 'DEV1', userId: 'user1', sessionId: 's1', items: [], paymentMethod: 'CASH', amountPaid: 50
    });

    expect(response.success).toBeTrue();
    expect(response.data?.bill_id).toBe('123');
    expect(billingSpy.processSale).toHaveBeenCalled();
  });

  it('should map business exceptions to error envelope', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'user1', role: UserRole.EMPLOYEE } as any);
    permissionSpy.hasPermission.and.returnValue(true);
    billingSpy.processSale.and.throwError('PAYMENT_INSUFFICIENT: Paid amount is less than grand total.');

    const response = app.completeSale({
      deviceId: 'DEV1', userId: 'user1', sessionId: 's1', items: [], paymentMethod: 'CASH', amountPaid: 10
    });

    expect(response.success).toBeFalse();
    expect(response.error?.code).toBe('PAYMENT_INSUFFICIENT');
    expect(response.error?.message).toBe('Paid amount is less than grand total.');
  });
});




