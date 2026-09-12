import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerStateService } from '../../services/customer-state.service';

@Component({
  selector: 'app-customer-bill-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-bill-details.component.html',
  styleUrls: ['./customer-bill-details.component.scss']
})
export class CustomerBillDetailsComponent {
  state = inject(CustomerStateService);

  @HostListener('document:keydown.escape')
  onEscape() {
    this.close();
  }
  
  close() {
    this.state.clearBillSelection();
  }

  reprint() {
    // Show a toast or feedback, per specs
    console.log('Reprint bill triggered');
  }
}
