import { Provider } from '@angular/core';
import { ProductService } from './product.service';
import { ProductApplication } from './application/product.application';

export const productProviders: Provider[] = [
  ProductService,
  ProductApplication
];
