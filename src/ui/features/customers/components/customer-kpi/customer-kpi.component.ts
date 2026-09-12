import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerStateService } from '../../services/customer-state.service';

@Component({
  selector: 'app-customer-kpi',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="kpi-container" *ngIf="state.kpiData() as kpi">
      <div class="kpi-card">
        <div class="kpi-icon-wrapper blue">
          <span class="material-symbols-outlined">group</span>
        </div>
        <div class="kpi-content">
          <span class="kpi-label">Total Customers</span>
          <span class="kpi-value">{{ kpi.totalCustomers }}</span>
        </div>
      </div>
      
      <div class="kpi-card">
        <div class="kpi-icon-wrapper green">
          <span class="material-symbols-outlined">how_to_reg</span>
        </div>
        <div class="kpi-content">
          <span class="kpi-label">Active Now</span>
          <span class="kpi-value">{{ kpi.activeCustomers }}</span>
        </div>
      </div>
      
      <div class="kpi-card">
        <div class="kpi-icon-wrapper purple">
          <span class="material-symbols-outlined">person_add</span>
        </div>
        <div class="kpi-content">
          <span class="kpi-label">New This Month</span>
          <span class="kpi-value">{{ kpi.newThisMonth }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./customer-kpi.component.scss']
})
export class CustomerKpiComponent {
  state = inject(CustomerStateService);
}
