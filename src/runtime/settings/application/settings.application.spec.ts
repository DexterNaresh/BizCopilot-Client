import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { SettingsApplication } from './settings.application';
import { SettingsService } from '@runtime/settings/settings.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { IEventBus } from '@shared/abstractions/event-bus';
import { IConfigProvider } from '@shared/abstractions/config-provider';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { UserRole } from '@shared/models/user.model';

describe('SettingsApplication', () => {
  let appContract: SettingsApplication;
  let sessionService: ISessionService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        SettingsApplication,
        SettingsService,
        { provide: IPermissionService, useClass: PermissionManager },
        { provide: ISessionService, useClass: SessionService },
        { provide: IEventBus, useClass: EventBusService },
        { provide: IConfigProvider, useClass: ConfigProviderService },
        { provide: IIdentityService, useClass: IdentityService }
      ]
    });

    appContract = TestBed.inject(SettingsApplication);
    sessionService = TestBed.inject(ISessionService);

    // Mock active owner session
    sessionService.startSession({
      id: 'owner-user-1',
      name: 'Owner User',
      role: UserRole.OWNER
    });
  });

  it('should get settings when user has permission', () => {
    const currentUser = sessionService.getCurrentUser()!;
    const response = appContract.getSettings(currentUser.id);
    expect(response.success).toBeTrue();
    expect(response.data?.businessProfile.businessName).toBe('BizCopilot Store');
  });

  it('should deny update when user ID mismatches active session', () => {
    const response = appContract.updateBusinessProfile('invalid-user-id', {
      businessName: 'New Name'
    });
    expect(response.success).toBeFalse();
    expect(response.error?.code).toBe('PERMISSION_DENIED');
  });

  it('should update tax settings successfully via application contract', () => {
    const currentUser = sessionService.getCurrentUser()!;
    const response = appContract.updateTaxSettings(currentUser.id, {
      gstEnabled: true,
      gstPercentage: 18
    });
    expect(response.success).toBeTrue();
    expect(response.data?.gstEnabled).toBeTrue();
  });
});



