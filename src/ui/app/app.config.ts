import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

import { platformProviders } from '@platform/platform.providers';
import { billingProviders } from '@runtime/billing/billing.providers';
import { productProviders } from '@runtime/product/product.providers';
import { categoryProviders } from '@runtime/category/category.providers';
import { customerProviders } from '@runtime/customer/customer.providers';
import { offerProviders } from '@runtime/offer/offer.providers';
import { reportProviders } from '@runtime/report/report.providers';
import { startupProviders } from '@runtime/startup/startup.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    ...platformProviders,
    ...productProviders,
    ...categoryProviders,
    ...billingProviders,
    ...customerProviders,
    ...offerProviders,
    ...reportProviders,
    ...startupProviders
  ]
};
