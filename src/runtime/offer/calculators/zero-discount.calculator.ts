import { Injectable } from '@angular/core';
import { IDiscountCalculator } from '@runtime/billing/services/discount-calculator.interface';

@Injectable({
  providedIn: 'root'
})
export class ZeroDiscountCalculator implements IDiscountCalculator {
  calculateDiscount(): number {
    return 0;
  }
}
