import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { RecentBill } from '../../services/recent-bills-state.service';

@Component({
  selector: 'app-bill-card',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent {
  @Input() bill!: RecentBill;
  @Input() isSelected = false;
}
