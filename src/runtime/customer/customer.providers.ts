import { Provider } from '@angular/core';
import { CustomerService } from './customer.service';
import { CustomerApplication } from './application/customer.application';

export const customerProviders: Provider[] = [
  CustomerService,
  CustomerApplication
];
