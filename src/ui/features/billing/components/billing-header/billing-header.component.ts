import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-billing-header',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './billing-header.component.html',
  styleUrls: ['./billing-header.component.scss']
})
export class BillingHeaderComponent {
  @Output() openHeldBills = new EventEmitter<void>();
  @Output() openRecentBills = new EventEmitter<void>();

  @Input() heldBillsCount = 0;
}
