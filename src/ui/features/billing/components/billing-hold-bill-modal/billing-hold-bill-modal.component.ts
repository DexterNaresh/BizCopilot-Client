import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeldBill } from '../../services/billing-state.service';
import { BillingHoldBillCardComponent } from '../billing-hold-bill-card/billing-hold-bill-card.component';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-billing-hold-bill-modal',
  standalone: true,
  imports: [CommonModule, BillingHoldBillCardComponent, BizIconComponent],
  templateUrl: './billing-hold-bill-modal.component.html',
  styleUrls: ['./billing-hold-bill-modal.component.scss']
})
export class BillingHoldBillModalComponent {
  @Input() heldBills: HeldBill[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() resume = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  onResume(id: string) {
    this.resume.emit(id);
  }

  onDelete(id: string) {
    this.delete.emit(id);
  }
}
