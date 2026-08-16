import { Provider } from '@angular/core';
import { SetupApplication } from '../../application/contracts/setup.application';
import { TemporarySetupApplicationAdapter } from './adapters/temporary-startup.adapter';
import { ProductApplication } from '../../application/contracts/product.application';
import { CategoryApplication } from '../../application/contracts/category.application';
import { TemporaryProductAdapter } from '../product/adapters/temporary-product.adapter';
import { TemporaryCategoryAdapter } from '../product/adapters/temporary-category.adapter';

export const startupProviders: Provider[] = [
  {
    provide: SetupApplication,
    useClass: TemporarySetupApplicationAdapter
  },
  {
    provide: ProductApplication,
    useClass: TemporaryProductAdapter
  },
  {
    provide: CategoryApplication,
    useClass: TemporaryCategoryAdapter
  }
];
