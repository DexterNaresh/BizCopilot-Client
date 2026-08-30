import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-card-payment-panel',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './card-payment-panel.component.html',
  styleUrls: ['./card-payment-panel.component.scss']
})
export class CardPaymentPanelComponent {
  @Input() totalPayable: number = 0;
}
