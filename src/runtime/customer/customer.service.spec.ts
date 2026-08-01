import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { ICustomerRepository } from './repositories/customer.repository.interface';
import { TestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';

import { IIdentityService } from '@shared/abstractions/identity.service.interface';

describe('CustomerService', () => {
  let service: CustomerService;
  let repoSpy: any;
  let identitySpy: jasmine.SpyObj<IIdentityService>;

  beforeEach(() => {
    repoSpy = jasmine.createSpyObj('ICustomerRepository', ['saveNewCustomer', 'findById', 'findByPhone', 'update']);
    identitySpy = jasmine.createSpyObj('IIdentityService', ['generateOperationId']);

    TestBed.configureTestingModule({
      providers: [
        CustomerService,
        { provide: ICustomerRepository, useValue: repoSpy },
        { provide: IIdentityService, useValue: identitySpy }
      ]
    });
    service = TestBed.inject(CustomerService);
  });

  describe('Phone Normalization & Validation', () => {
    it('should pass exactly 10 digits untouched', () => {
      expect(service.normalizeAndValidatePhone('9876543210')).toBe('9876543210');
    });

    it('should strip spaces and dashes', () => {
      expect(service.normalizeAndValidatePhone('987 654-3210')).toBe('9876543210');
      expect(service.normalizeAndValidatePhone('(987) 654-3210')).toBe('9876543210');
    });

    it('should strip +91 country code', () => {
      expect(service.normalizeAndValidatePhone('+919876543210')).toBe('9876543210');
      expect(service.normalizeAndValidatePhone('+91 987 654 3210')).toBe('9876543210');
    });

    it('should strip leading 91 if it makes the number 10 digits', () => {
      expect(service.normalizeAndValidatePhone('919876543210')).toBe('9876543210');
    });

    it('should throw error if phone is just 1 (reserved)', () => {
      expect(() => {
        service.normalizeAndValidatePhone('1');
      }).toThrowError('VALIDATION_FAILED: The phone number "1" is reserved for the Walk-In Customer.');
    });

    it('should throw error if resulting digits are not 10', () => {
      expect(() => {
        service.normalizeAndValidatePhone('98765');
      }).toThrowError('VALIDATION_FAILED: Phone number must be exactly 10 digits.');

      expect(() => {
        service.normalizeAndValidatePhone('9876543210123');
      }).toThrowError('VALIDATION_FAILED: Phone number must be exactly 10 digits.');
    });
  });

  describe('Business Logic', () => {
    it('should throw error on blank name', () => {
      expect(() => {
        service.createCustomer({ name: '   ', phone: null, email: null, userId: '1', sessionId: '1' });
      }).toThrowError('VALIDATION_FAILED: Customer name is required.');
    });

    it('should throw error on duplicate phone', () => {
      repoSpy.findByPhone.and.returnValue({ customer_id: 'existing-id' } as any);
      expect(() => {
        service.createCustomer({ name: 'John', phone: '9876543210', email: null, userId: '1', sessionId: '1' });
      }).toThrowError('PHONE_CONFLICT: A customer with this phone number already exists.');
    });

    it('should lock Walk-In Customer from updates', () => {
      repoSpy.findById.and.returnValue({ customer_id: 'walkin', is_system: 1 } as any);
      expect(() => {
        service.updateCustomer({ customer_id: 'walkin', name: 'Hacked', phone: null, email: null, userId: '1', sessionId: '1' });
      }).toThrowError('SYSTEM_CUSTOMER_LOCKED: Cannot modify a system-generated customer.');
    });

    it('should lock Walk-In Customer from archives', () => {
      repoSpy.findById.and.returnValue({ customer_id: 'walkin', is_system: 1 } as any);
      expect(() => {
        service.archiveCustomer({ customer_id: 'walkin', userId: '1', sessionId: '1' });
      }).toThrowError('SYSTEM_CUSTOMER_LOCKED: Cannot archive a system-generated customer.');
    });
  });
});


