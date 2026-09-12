import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerStateService } from '../../services/customer-state.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="customer-list-container">
      
      <!-- Desktop / Tablet Table View -->
      <div class="desktop-table-view" [class.condensed]="state.selectedCustomerId() !== null">
        <div class="table-header">
          <div class="col col-seq">Seq. No.</div>
          <div class="col col-customer">Customer</div>
          <div class="col col-phone">Phone</div>
          <div class="col col-bills" *ngIf="!state.selectedCustomerId()">Bills</div>
          <div class="col col-spent" *ngIf="!state.selectedCustomerId()">Total Spent</div>
          <div class="col col-visit" *ngIf="!state.selectedCustomerId()">Last Visit</div>
          <div class="col col-status">Status</div>
          <div class="col col-actions" *ngIf="!state.selectedCustomerId()">Edit</div>
          <div class="col col-actions">Deactivate</div>
          <div class="col col-arrow"></div>
        </div>
        
        <div class="table-body">
          <div class="table-row" 
               *ngFor="let customer of state.paginatedCustomers()" 
               [class.selected]="state.selectedCustomerId() === customer.id"
               (click)="onRowClick(customer.id)">
            <div class="col col-seq">{{ (customer.seqNo < 10 ? '0' : '') + customer.seqNo }}</div>
            <div class="col col-customer primary-text">{{ customer.name }}</div>
            <div class="col col-phone secondary-text">{{ customer.phone || '—' }}</div>
            <div class="col col-bills" *ngIf="!state.selectedCustomerId()">{{ customer.billsCount }}</div>
            <div class="col col-spent money" *ngIf="!state.selectedCustomerId()">{{ customer.totalSpent | currency:'INR':'symbol':'1.0-0' }}</div>
            <div class="col col-visit" *ngIf="!state.selectedCustomerId()">{{ customer.lastVisit | date:'dd MMM yyyy' }}</div>
            <div class="col col-status">
              <div class="status-toggle" (click)="toggleStatus($event, customer.id)" [class.active]="customer.isActive">
                <span class="status-text">{{ customer.isActive ? 'Active' : 'Inactive' }}</span>
                <div class="toggle-switch">
                  <div class="toggle-knob"></div>
                </div>
              </div>
            </div>
            <div class="col col-actions" *ngIf="!state.selectedCustomerId()">
              <button class="action-btn edit" (click)="$event.stopPropagation()">
                <span class="material-symbols-outlined">edit</span>
              </button>
            </div>
            <div class="col col-actions">
              <button class="action-btn delete" (click)="deactivate($event, customer.id)">
                <span class="material-symbols-outlined">delete</span>
              </button>
            </div>
            <div class="col col-arrow">
              <span class="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile List View -->
      <div class="mobile-list-view">
        <div class="mobile-card" 
             *ngFor="let customer of state.paginatedCustomers()" 
             [class.selected]="state.selectedCustomerId() === customer.id"
             (click)="onRowClick(customer.id)">
          <div class="card-header">
            <div class="seq-name">
              <span class="seq">{{ (customer.seqNo < 10 ? '0' : '') + customer.seqNo }}</span>
              <span class="name">{{ customer.name }}</span>
            </div>
            <div class="status-badge" [class.active]="customer.isActive">
              {{ customer.isActive ? 'Active' : 'Inactive' }}
            </div>
          </div>
          
          <div class="card-phone">{{ customer.phone || 'No Phone' }}</div>
          
          <div class="card-stats">
            <span>{{ customer.billsCount }} bills</span>
            <span class="dot">•</span>
            <span class="money">{{ customer.totalSpent | currency:'INR':'symbol':'1.0-0' }}</span>
            <span class="dot">•</span>
            <span>Last visit {{ customer.lastVisit | date:'dd MMM' }}</span>
          </div>
          
          <div class="card-actions">
            <button class="action-text-btn" (click)="toggleStatus($event, customer.id)">
              <span class="material-symbols-outlined">{{ customer.isActive ? 'toggle_on' : 'toggle_off' }}</span>
            </button>
            <button class="action-text-btn" (click)="$event.stopPropagation()">
              <span class="material-symbols-outlined">edit</span> Edit
            </button>
            <button class="action-text-btn delete" (click)="deactivate($event, customer.id)">
              <span class="material-symbols-outlined">delete</span> Delete
            </button>
            <span class="material-symbols-outlined arrow">chevron_right</span>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="empty-state" *ngIf="state.totalItems() === 0">
        <span class="material-symbols-outlined">group_off</span>
        <h3 *ngIf="state.searchTerm() || state.statusFilter() !== 'All'">No customers found</h3>
        <p *ngIf="state.searchTerm() || state.statusFilter() !== 'All'">Try a different name or phone number.</p>
        
        <h3 *ngIf="!state.searchTerm() && state.statusFilter() === 'All'">No customers yet</h3>
        <p *ngIf="!state.searchTerm() && state.statusFilter() === 'All'">Add your first customer to start tracking history.</p>
      </div>

      <!-- Pagination (Design System Spec 6.4) -->
      <div class="pagination-container" *ngIf="state.totalItems() > 0">
        <div class="pagination-controls">
          <button class="icon-btn" (click)="prevPage()" [disabled]="state.currentPage() === 1">
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
          
          <!-- Simplified pagination display for now -->
          <ng-container *ngFor="let p of [].constructor(state.totalPages()); let i = index">
            <button 
              class="page-btn" 
              [class.active]="state.currentPage() === (i + 1)"
              (click)="state.setPage(i + 1)">
              {{ i + 1 }}
            </button>
          </ng-container>

          <button class="icon-btn" (click)="nextPage()" [disabled]="state.currentPage() === state.totalPages()">
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        
        <div class="per-page">
          <span>{{ (state.currentPage() - 1) * state.itemsPerPage() + 1 }}–{{ min(state.currentPage() * state.itemsPerPage(), state.totalItems()) }} of {{ state.totalItems() }}</span>
          <span class="dot" style="margin: 0 4px; color: var(--color-text-muted)">•</span>
          <select [value]="state.itemsPerPage()" (change)="onPerPageChange($event)">
            <option [value]="5">5 / page</option>
            <option [value]="10">10 / page</option>
            <option [value]="20">20 / page</option>
          </select>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  state = inject(CustomerStateService);

  onRowClick(id: string) {
    this.state.selectCustomer(id);
  }

  toggleStatus(event: Event, id: string) {
    event.stopPropagation();
    this.state.toggleCustomerStatus(id);
  }

  deactivate(event: Event, id: string) {
    event.stopPropagation();
    this.state.deactivateCustomer(id);
  }

  prevPage() {
    this.state.setPage(this.state.currentPage() - 1);
  }

  nextPage() {
    this.state.setPage(this.state.currentPage() + 1);
  }

  onPerPageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.state.setItemsPerPage(Number(target.value));
  }

  min(a: number, b: number): number {
    return Math.min(a, b);
  }
}
