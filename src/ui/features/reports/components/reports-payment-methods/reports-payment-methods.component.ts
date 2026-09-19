import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PaymentMethodData {
  name: string;
  percentage: number;
  amount: number;
  color: string;
  dashArray?: string;
  dashOffset?: string;
}

type PaymentSortMode = 'percentage' | 'amount';

@Component({
  selector: 'app-reports-payment-methods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-payment-methods.component.html',
  styleUrls: ['./reports-payment-methods.component.scss']
})
export class ReportsPaymentMethodsComponent {
  @Input() totalSales: number = 24680;
  
  @Input() paymentMethods: PaymentMethodData[] = [
    { name: 'UPI', percentage: 42, amount: 10366, color: '#6366F1' },
    { name: 'Cash', percentage: 28, amount: 6910, color: '#10B981' },
    { name: 'Card', percentage: 20, amount: 4936, color: '#0088FF' },
    { name: 'Mixed', percentage: 10, amount: 2468, color: '#F59E0B' }
  ];

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
