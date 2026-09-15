import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerStateService } from '../../services/customer-state.service';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-customer-header',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  template: `
    <header class="customer-header">
      <div class="header-content">
        <div class="title-row">
          <h1 class="title">Customers</h1>
          <span class="count-chip">{{ state.totalItems() }}</span>
        </div>
        <p class="subtitle">Manage and track your customer base</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-primary" (click)="state.openAddCustomerModal()">
          <biz-icon category="common" name="add" class="icon"></biz-icon>
          Add Customer
        </button>
      </div>
    </header>
  `,
  styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent {
  state = inject(CustomerStateService);
}
