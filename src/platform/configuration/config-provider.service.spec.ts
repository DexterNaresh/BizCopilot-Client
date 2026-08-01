import { TestBed } from '@angular/core/testing';
import { ConfigProviderService } from './config-provider.service';

describe('ConfigProviderService', () => {
  let service: ConfigProviderService;

  beforeEach(() => {
    localStorage.removeItem('bizcopilot_generic_config');
    TestBed.configureTestingModule({
      providers: [ConfigProviderService]
    });
    service = TestBed.inject(ConfigProviderService);
  });

  afterEach(() => {
    localStorage.removeItem('bizcopilot_generic_config');
  });

  it('should return null when getting unset values', () => {
    expect(service.get<string>('currency')).toBeNull();
  });

  it('should update configuration and persist to localStorage', () => {
    service.set('currency', '$');
    service.set('gstEnabled', true);
    expect(service.get<string>('currency')).toBe('$');
    expect(service.get<boolean>('gstEnabled')).toBeTrue();
  });
});
