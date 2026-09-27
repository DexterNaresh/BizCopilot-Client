import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PaymentMethodData } from '@runtime/report/application/dto/report.dto';

type PaymentSortMode = 'percentage' | 'amount';

@Component({
  selector: 'app-reports-payment-methods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-payment-methods.component.html',
  styleUrls: ['./reports-payment-methods.component.scss']
})
export class ReportsPaymentMethodsComponent {
  @Input() totalSales: number = 0;
  
  @Input() paymentMethods: PaymentMethodData[] = [];

  sortMode: PaymentSortMode = 'percentage';

  readonly radius = 65;
  readonly circumference = 2 * Math.PI * 65; // ~408.407

  get sortedPaymentMethods(): PaymentMethodData[] {
    return [...this.paymentMethods].sort((a, b) => {
      return this.sortMode === 'percentage'
        ? b.percentage - a.percentage
        : b.amount - a.amount;
    });
  }

  get chartSegments(): PaymentMethodData[] {
    let accumulatedOffset = 0;
    // Donut chart always uses the input order (by percentage), not the legend sort
    return this.paymentMethods.map(item => {
      const segmentLength = (item.percentage / 100) * this.circumference;
      const dashArray = `${segmentLength.toFixed(2)} ${(this.circumference - segmentLength).toFixed(2)}`;
      const dashOffset = `-${accumulatedOffset.toFixed(2)}`;
      accumulatedOffset += segmentLength;
      return {
        ...item,
        dashArray,
        dashOffset
      };
    });
  }

  setSortMode(mode: PaymentSortMode): void {
    this.sortMode = mode;
  }
}
