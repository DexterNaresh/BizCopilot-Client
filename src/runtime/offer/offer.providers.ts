import { Provider } from '@angular/core';
import { OfferService } from './offer.service';
import { OfferApplication } from './application/offer.application';

export const offerProviders: Provider[] = [
  OfferService,
  OfferApplication
];
