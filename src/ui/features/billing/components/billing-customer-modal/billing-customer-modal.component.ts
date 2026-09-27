import { Component, EventEmitter, OnInit, Output, OnDestroy, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { BillingCustomer } from '../../services/billing-state.service';
import { CustomerApplication } from '@runtime/customer/application/customer.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-billing-customer-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, BizIconComponent],
  templateUrl: './billing-customer-modal.component.html',
  styleUrls: ['./billing-customer-modal.component.scss']
})
export class BillingCustomerModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<BillingCustomer | null>();

  // Search State
  searchTerm: string = '';
  searchMode: 'combined' | 'name' = 'combined';
  private searchSubject = new Subject<string>();
  searchResults: BillingCustomer[] | null = null;
  isSearching = false;

  // Selection State
  selectedCustomer: BillingCustomer | null = null;
  isWalkIn: boolean = true;

  // New Customer State
  newCustomerName = '';
  newCustomerPhone = '';
  newCustomerNotes = '';

  private destroy$ = new Subject<void>();

  constructor(
    @Inject(CustomerApplication) private customerApp: CustomerApplication,
    @Inject(ISessionService) private sessionService: ISessionService,
    private toastService: ToastService
  ) { }

  get currentUserId(): string {
    const user = this.sessionService.getCurrentUser();
    if (!user) throw new Error('No active session');
    return user.id;
  }

  ngOnInit() {
    this.searchSubject.pipe(
      takeUntil(this.destroy$),
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.performSearch(term);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchInput(event: any) {
    this.searchSubject.next(this.searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
    this.searchResults = null;
    this.searchSubject.next('');
  }

  toggleSearchMode() {
    this.searchMode = this.searchMode === 'combined' ? 'name' : 'combined';
    if (this.searchTerm) {
      this.searchSubject.next(this.searchTerm);
    }
  }

  private performSearch(term: any) {
    const termStr = String(term || '');
    if (termStr.trim().length < 2) {
      this.searchResults = null;
      this.isSearching = false;
      return;
    }

    this.isSearching = true;
    const lowerTerm = termStr.toLowerCase().trim();

    const response = this.customerApp.searchCustomers({ userId: this.currentUserId, query: lowerTerm });

    if (response.success && response.data) {
      this.searchResults = response.data.map(c => ({
        id: c.customer_id,
        name: c.name,
        phone: c.phone || '',
        createdAt: c.created_at ? new Date(c.created_at).toLocaleDateString() : 'Just now'
      }));
    } else {
      this.searchResults = [];
    }

    this.isSearching = false;
  }

  getInitials(name: string): string {
    if (!name) return '??';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }

  selectSearchResult(customer: BillingCustomer) {
    this.selectedCustomer = customer;
    this.isWalkIn = false;
  }

  selectWalkIn() {
    this.isWalkIn = true;
    this.selectedCustomer = null;
  }

  useEnteredCustomer() {
    if (!this.newCustomerName.trim()) return;

    const response = this.customerApp.createCustomer({
      userId: this.currentUserId,
      name: this.newCustomerName.trim(),
      phone: this.newCustomerPhone.trim(),
      email: null
    });

    if (response.success && response.data) {
      const c = response.data;
      this.selectedCustomer = {
        id: c.customer_id,
        name: c.name,
        phone: c.phone || '',
        notes: this.newCustomerNotes.trim(),
        createdAt: 'Just now'
      };
      this.isWalkIn = false;
      this.toastService.success('Customer created successfully');
    } else {
      this.toastService.error(response.error?.message || 'Failed to create customer');
    }
  }

  onConfirm() {
    if (this.isWalkIn) {
      this.confirm.emit(null);
    } else {
      this.confirm.emit(this.selectedCustomer);
    }
  }

  onClose() {
    this.close.emit();
  }
}
