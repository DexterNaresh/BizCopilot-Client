import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerStateService } from '../../services/customer-state.service';

@Component({
  selector: 'app-customer-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="customer-header-container">
      <div class="header-titles">
        <div class="title-row">
          <h1 class="page-title">Customers</h1>
          <span class="count-chip">{{ state.totalItems() }}</span>
        </div>
        <p class="page-subtitle">Manage and track your customer base</p>
      </div>
      <button class="add-btn">
        <span class="material-symbols-outlined">add</span>
        <span class="btn-text">Add Customer</span>
      </button>
    </div>
  `,
  styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent {
  state = inject(CustomerStateService);
}

