import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { RecentBill } from '../../services/recent-bills-state.service';

@Component({
  selector: 'app-bill-details',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.scss']
})
export class BillDetailsComponent {
  @Input() bill!: RecentBill;
  @Output() backClicked = new EventEmitter<void>();

  onBack() {
    this.backClicked.emit();
  }

  printBill() {
    window.print();
  }
}
