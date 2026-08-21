import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DialogModule } from '@angular/cdk/dialog';
import { routes } from './app.routes';

import { platformProviders } from '@platform/platform.providers';
import { billingProviders } from '@runtime/billing/billing.providers';
import { productProviders } from '@runtime/product/product.providers';
import { customerProviders } from '@runtime/customer/customer.providers';
import { offerProviders } from '@runtime/offer/offer.providers';
import { reportProviders } from '@runtime/report/report.providers';
import { startupProviders } from '@runtime/startup/startup.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(DialogModule),
    ...platformProviders,
    ...billingProviders,
    ...productProviders,
    ...customerProviders,
    ...offerProviders,
    ...reportProviders,
    ...startupProviders
  ]
};
