import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { BusinessException } from '@shared/exceptions/business.exception';
import { ValidationException } from '@shared/exceptions/validation.exception';
import { Injectable, Inject } from '@angular/core';
import { ICustomerRepository } from './repositories/customer.repository.interface';
import { CustomerEntity } from './models/customer.entity';
import { CustomerCreateRequest, CustomerUpdateRequest, CustomerArchiveRequest } from '@runtime/customer/application/dto/customer.dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(
    @Inject(ICustomerRepository) private customerRepository: ICustomerRepository,
    @Inject(IIdentityService) private IIdentityService: IIdentityService
  ) {}

  createCustomer(request: CustomerCreateRequest): CustomerEntity {
    if (!request.name || request.name.trim() === '') {
      throw new ValidationException('Customer name is required.');
    }

    const normalizedPhone = this.normalizeAndValidatePhone(request.phone);
    if (normalizedPhone) {
      this.ensurePhoneUnique(normalizedPhone);
    }

    const customerTemplate: CustomerEntity = {
      customer_id: this.IIdentityService.generateId(),
      name: request.name,
      phone: normalizedPhone,
      email: request.email,
      is_system: 0,
      status: 'ACTIVE',
      created_at: new Date().toISOString()
    };

    return this.customerRepository.saveNewCustomer(customerTemplate);
  }

  updateCustomer(request: CustomerUpdateRequest): CustomerEntity {
    if (!request.name || request.name.trim() === '') {
      throw new ValidationException('Customer name is required.');
    }

    const existingCustomer = this.customerRepository.findById(request.customer_id);
    if (!existingCustomer) {
      throw new Error(`CUSTOMER_NOT_FOUND: Customer with id ${request.customer_id} does not exist.`);
    }

    if (existingCustomer.is_system === 1) {
      throw new BusinessException('SYSTEM_CUSTOMER_LOCKED', 'Cannot modify a system-generated customer.');
    }

    const normalizedPhone = this.normalizeAndValidatePhone(request.phone);
    if (normalizedPhone) {
      this.ensurePhoneUnique(normalizedPhone, request.customer_id);
    }

    const updatedCustomer: CustomerEntity = {
      ...existingCustomer,
      name: request.name,
      phone: normalizedPhone,
      email: request.email
    };

    this.customerRepository.update(updatedCustomer.customer_id, updatedCustomer);
    return updatedCustomer;
  }

  archiveCustomer(request: CustomerArchiveRequest): CustomerEntity {
    const existingCustomer = this.customerRepository.findById(request.customer_id);
    if (!existingCustomer) {
      throw new Error(`CUSTOMER_NOT_FOUND: Customer with id ${request.customer_id} does not exist.`);
    }

    if (existingCustomer.is_system === 1) {
      throw new BusinessException('SYSTEM_CUSTOMER_LOCKED', 'Cannot archive a system-generated customer.');
    }

    if (existingCustomer.status === 'ARCHIVED') {
      return existingCustomer;
    }

    const updatedCustomer: CustomerEntity = {
      ...existingCustomer,
      status: 'ARCHIVED'
    };

    this.customerRepository.update(updatedCustomer.customer_id, updatedCustomer);
    return updatedCustomer;
  }

  /**
   * Applies the Frozen Phone Normalization Standard:
   * 1. Trim whitespace.
   * 2. Remove spaces, dashes, brackets.
   * 3. Remove +91.
   * 4. Remove leading 91 if exactly 10 digits remain.
   * 5. Validates exact 10 digit length.
   * 6. Blocks "1" for normal customers.
   */
  normalizeAndValidatePhone(phone: string | null): string | null {
    if (!phone) return null;

    let normalized = phone.trim();
    // Remove spaces, dashes, brackets
    normalized = normalized.replace(/[\s\-()]/g, '');
    
    // Remove +91
    if (normalized.startsWith('+91')) {
      normalized = normalized.substring(3);
    }
    
    // Remove leading 91 if the rest is 10 digits
    if (normalized.length === 12 && normalized.startsWith('91')) {
      normalized = normalized.substring(2);
    }

    if (normalized === '1') {
      throw new ValidationException('The phone number "1" is reserved for the Walk-In Customer.');
    }

    const digitsOnly = /^\d{10}$/;
    if (!digitsOnly.test(normalized)) {
      throw new ValidationException('Phone number must be exactly 10 digits.');
    }

    return normalized;
  }

  private ensurePhoneUnique(phone: string, excludeCustomerId?: string): void {
    const existing = this.customerRepository.findByPhone(phone);
    if (existing && existing.customer_id !== excludeCustomerId) {
      throw new BusinessException('PHONE_CONFLICT', 'A customer with this phone number already exists.');
    }
  }
}
