import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { SettingsService } from './settings.service';
import { IEventBus } from '@shared/abstractions/event-bus';
import { IConfigProvider } from '@shared/abstractions/config-provider';
import { SETTINGS_EVENT_TYPES } from './settings-events';

describe('SettingsService', () => {
  let service: SettingsService;
  let eventBus: IEventBus;
  let configProvider: IConfigProvider;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [SettingsService, { provide: IEventBus, useClass: EventBusService }, { provide: IConfigProvider, useClass: ConfigProviderService }]
    });
    service = TestBed.inject(SettingsService);
    eventBus = TestBed.inject(IEventBus);
    configProvider = TestBed.inject(IConfigProvider);
  });

  it('should be created and return default settings', () => {
    expect(service).toBeTruthy();
    const profile = service.getBusinessProfile();
    expect(profile.businessName).toBe('BizCopilot Store');
    expect(profile.currency).toBe('₹');
  });

  it('should update tax settings and publish TaxSettingsChanged event', (done) => {
    eventBus.on(SETTINGS_EVENT_TYPES.TAX_SETTINGS_CHANGED).subscribe((payload: any) => {
      expect(payload.tax.gstEnabled).toBeTrue();
      expect(payload.tax.gstPercentage).toBe(12);
      expect(configProvider.get<boolean>('gstEnabled')).toBeTrue();
      done();
    });

    service.updateTaxSettings({
      gstEnabled: true,
      gstPercentage: 12
    });
  });

  it('should update payment settings and reflect in payment config', (done) => {
    eventBus.on(SETTINGS_EVENT_TYPES.PAYMENT_SETTINGS_CHANGED).subscribe((payload: any) => {
      expect(payload.payment.merchantUpiId).toBe('test@upi');
      expect(configProvider.get<string>('merchantUpiId')).toBe('test@upi');
      done();
    });

    service.updatePaymentSettings({
      merchantUpiId: 'test@upi'
    });
  });
});



