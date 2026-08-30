import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-bill-summary-card',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './bill-summary-card.component.html',
  styleUrls: ['./bill-summary-card.component.scss']
})
export class BillSummaryCardComponent {
  @Input() customerName: string = 'Ravi Kumar';
  @Input() itemsCount: number = 4;
  @Input() subtotal: number = 862.50;
  @Input() discountCode: string = 'BUYMORE10';
  @Input() discountAmount: number = 86.25;
  @Input() totalPayable: number = 776.25;
}
