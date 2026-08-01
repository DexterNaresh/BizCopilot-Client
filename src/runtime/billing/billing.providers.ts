import { Provider } from '@angular/core';
import { ITaxCalculator } from './services/tax-calculator.interface';
import { IDiscountCalculator } from './services/discount-calculator.interface';
import { ZeroTaxCalculator } from './calculators/zero-tax.calculator';
import { ZeroDiscountCalculator } from '@runtime/offer/calculators/zero-discount.calculator';

export const billingProviders: Provider[] = [
  { provide: ITaxCalculator, useClass: ZeroTaxCalculator },
  { provide: IDiscountCalculator, useClass: ZeroDiscountCalculator }
];
