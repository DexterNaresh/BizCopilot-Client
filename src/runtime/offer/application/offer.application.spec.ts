import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { OfferApplication } from './offer.application';
import { OfferService } from '@runtime/offer/offer.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { UserRole } from '@shared/models/user.model';

describe('OfferApplication', () => {
  let app: OfferApplication;
  let serviceSpy: jasmine.SpyObj<OfferService>;
  let permissionSpy: jasmine.SpyObj<IPermissionService>;
  let sessionSpy: jasmine.SpyObj<ISessionService>;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj('OfferService', ['createOffer', 'updateOffer', 'changeStatus']);
    permissionSpy = jasmine.createSpyObj('IPermissionService', ['hasPermission']);
    sessionSpy = jasmine.createSpyObj('ISessionService', ['getCurrentUser']);

    TestBed.configureTestingModule({
      providers: [
        OfferApplication,
        { provide: OfferService, useValue: serviceSpy },
        { provide: IPermissionService, useValue: permissionSpy },
        { provide: ISessionService, useValue: sessionSpy }
      ]
    });
    app = TestBed.inject(OfferApplication);
  });

  it('should deny create if user lacks OFFER_CREATE permission (Employee)', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'user1', role: UserRole.EMPLOYEE } as any);
    permissionSpy.hasPermission.and.returnValue(false); // Employees don't have OFFER_CREATE

    const result = app.createOffer({ name: 'Promo', category: 'ALL', discount_percentage: 10, discount_flat: null, valid_from: null, valid_until: null, userId: 'user1', sessionId: 's1' });

    expect(result.success).toBeFalse();
    expect(result.error?.code).toBe('PERMISSION_DENIED');
    expect(serviceSpy.createOffer).not.toHaveBeenCalled();
  });

  it('should allow create if user has permission (Owner)', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'owner1', role: UserRole.OWNER } as any);
    permissionSpy.hasPermission.and.returnValue(true);
    serviceSpy.createOffer.and.returnValue({ offer_id: '1' } as any);

    const result = app.createOffer({ name: 'Promo', category: 'ALL', discount_percentage: 10, discount_flat: null, valid_from: null, valid_until: null, userId: 'owner1', sessionId: 's1' });

    expect(result.success).toBeTrue();
    expect(serviceSpy.createOffer).toHaveBeenCalled();
  });
});




