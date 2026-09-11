import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentBillsStateService } from '../../services/recent-bills-state.service';
import { BillCardComponent } from '../bill-card/bill-card.component';

@Component({
  selector: 'app-bill-list',
  standalone: true,
  imports: [CommonModule, BillCardComponent],
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent {
  stateService = inject(RecentBillsStateService);
}
