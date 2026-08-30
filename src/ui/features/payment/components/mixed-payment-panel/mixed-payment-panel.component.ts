import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

export interface PaymentAllocation {
  id: string;
  method: string;
  amount: number;
}

@Component({
  selector: 'app-mixed-payment-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, BizIconComponent],
  templateUrl: './mixed-payment-panel.component.html',
  styleUrls: ['./mixed-payment-panel.component.scss']
})
export class MixedPaymentPanelComponent {
  @Input() totalPayable: number = 0;
  @Output() validityChange = new EventEmitter<boolean>();
  @Output() addMethod = new EventEmitter<void>();

  allocations: PaymentAllocation[] = [
    { id: '1', method: 'Cash', amount: 500.00 },
    { id: '2', method: 'UPI', amount: 276.25 }
  ];

  get totalPaid(): number {
    return this.allocations.reduce((sum, alloc) => sum + alloc.amount, 0);
  }

  get remaining(): number {
    return Math.max(0, this.totalPayable - this.totalPaid);
  }

  get isFullyPaid(): boolean {
    return this.remaining === 0;
  }

  hasUpiAllocation(): boolean {
    return this.allocations.some(a => a.method === 'UPI');
  }

  ngOnInit() {
    this.checkValidity();
  }

  removeAllocation(id: string) {
    this.allocations = this.allocations.filter(a => a.id !== id);
    this.checkValidity();
  }

  onAddMethod() {
    this.allocations.push({
      id: Date.now().toString(),
      method: 'Cash',
      amount: 0
    });
    this.checkValidity();
  }

  onClearAll() {
    this.allocations = [];
    this.checkValidity();
  }

  onAllocationChange() {
    this.checkValidity();
  }

  private checkValidity() {
    this.validityChange.emit(this.isFullyPaid);
  }
}
