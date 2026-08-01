import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { CustomerApplication } from './customer.application';
import { CustomerService } from '@runtime/customer/customer.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { UserRole } from '@shared/models/user.model';

describe('CustomerApplication', () => {
  let app: CustomerApplication;
  let serviceSpy: jasmine.SpyObj<CustomerService>;
  let permissionSpy: jasmine.SpyObj<IPermissionService>;
  let sessionSpy: jasmine.SpyObj<ISessionService>;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj('CustomerService', ['createCustomer', 'updateCustomer', 'archiveCustomer']);
    permissionSpy = jasmine.createSpyObj('IPermissionService', ['hasPermission']);
    sessionSpy = jasmine.createSpyObj('ISessionService', ['getCurrentUser']);

    TestBed.configureTestingModule({
      providers: [
        CustomerApplication,
        { provide: CustomerService, useValue: serviceSpy },
        { provide: IPermissionService, useValue: permissionSpy },
        { provide: ISessionService, useValue: sessionSpy }
      ]
    });
    app = TestBed.inject(CustomerApplication);
  });

  it('should deny archive if user lacks CUSTOMER_ARCHIVE permission (e.g. Employee)', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'user1', role: UserRole.EMPLOYEE } as any);
    permissionSpy.hasPermission.and.returnValue(false);

    const result = app.archiveCustomer({ customer_id: 'cust1', userId: 'user1', sessionId: 's1' });

    expect(result.success).toBeFalse();
    expect(result.error?.code).toBe('PERMISSION_DENIED');
    expect(serviceSpy.archiveCustomer).not.toHaveBeenCalled();
  });

  it('should allow create if user has permission', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'user1', role: UserRole.EMPLOYEE } as any);
    permissionSpy.hasPermission.and.returnValue(true);
    serviceSpy.createCustomer.and.returnValue({ customer_id: 'uuid-1', name: 'John' } as any);

    const result = app.createCustomer({ name: 'John', phone: null, email: null, userId: 'user1', sessionId: 's1' });

    expect(result.success).toBeTrue();
    expect(serviceSpy.createCustomer).toHaveBeenCalled();
  });
});




