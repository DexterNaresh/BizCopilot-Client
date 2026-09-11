import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentBillsStateService } from '../../services/recent-bills-state.service';

@Component({
  selector: 'app-bills-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bills-toolbar.component.html',
  styleUrls: ['./bills-toolbar.component.scss']
})
export class BillsToolbarComponent {
  stateService = inject(RecentBillsStateService);

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.stateService.setSearchQuery(input.value);
  }
}
