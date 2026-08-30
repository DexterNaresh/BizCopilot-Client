import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-upi-payment-panel',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './upi-payment-panel.component.html',
  styleUrls: ['./upi-payment-panel.component.scss']
})
export class UpiPaymentPanelComponent {
  @Input() totalPayable: number = 0;
  @Input() upiId: string = 'bizcopilot@upi';
  
  paymentStatus: 'WAITING' | 'SUCCESS' | 'FAILED' = 'WAITING';

  copyUpiId() {
    navigator.clipboard.writeText(this.upiId);
  }
}
