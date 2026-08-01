import { Injectable } from '@angular/core';
import { CustomerEntity } from '../models/customer.entity';
@Injectable()
export abstract class ICustomerRepository {
  abstract findById(id: string): CustomerEntity | null;
  abstract findByPhone(phone: string): CustomerEntity | null;
  abstract saveNewCustomer(customer: CustomerEntity): CustomerEntity;
  abstract update(id: string, customer: CustomerEntity): void;
}
