import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerStateService } from '../../services/customer-state.service';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
  state = inject(CustomerStateService);

  mockRecentBills = [
    { id: 'BILL-1042', date: new Date('2026-08-18T18:42:00'), items: 3, total: 620 },
    { id: 'BILL-1038', date: new Date('2026-08-16T19:15:00'), items: 5, total: 1240 },
    { id: 'BILL-1031', date: new Date('2026-08-14T17:48:00'), items: 2, total: 480 },
    { id: 'BILL-1024', date: new Date('2026-08-11T18:10:00'), items: 4, total: 890 },
  ];

  onClose() {
    this.state.clearSelection();
  }

  onBillClick(billId: string) {
    // For demo purposes, we're using the single mocked bill 'b1' from state.
    this.state.selectBill('b1');
  }
}
