import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeldBill } from '../../services/billing-state.service';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-billing-hold-bill-card',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './billing-hold-bill-card.component.html',
  styleUrls: ['./billing-hold-bill-card.component.scss']
})
export class BillingHoldBillCardComponent {
  @Input() bill!: HeldBill;
  @Output() resume = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  get formattedTime(): string {
    if (!this.bill?.timestamp) return '';
    const date = new Date(this.bill.timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
