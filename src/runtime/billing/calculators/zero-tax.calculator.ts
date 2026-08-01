import { Injectable } from '@angular/core';
import { ITaxCalculator } from '@runtime/billing/services/tax-calculator.interface';

@Injectable({
  providedIn: 'root'
})
export class ZeroTaxCalculator implements ITaxCalculator {
  calculateTax(): number {
    return 0;
  }
}
