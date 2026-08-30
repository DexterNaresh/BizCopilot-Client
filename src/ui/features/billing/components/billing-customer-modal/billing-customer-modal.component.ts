import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { BillingCustomer } from '../../services/billing-state.service';

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

  // Mock data
  private MOCK_CUSTOMERS: BillingCustomer[] = [
    { id: 'CUST001', name: 'Ravi Kumar', phone: '9876543210', createdAt: 'Since 12 Jan 2024' },
    { id: 'CUST002', name: 'Ramesh Mehta', phone: '9876511111', createdAt: 'Since 15 Feb 2024' },
    { id: 'CUST003', name: 'Anita Sharma', phone: '9876522222', createdAt: 'Since 01 Mar 2024' },
    { id: 'CUST004', name: 'Anil Gupta', phone: '9876533333', createdAt: 'Since 10 Mar 2024' },
    { id: 'CUST005', name: 'Rahul Desai', phone: '9876544444', createdAt: 'Since 20 Apr 2024' }
  ];

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

  ngOnInit() {
    this.searchSubject.pipe(
      takeUntil(this.destroy$),
      debounceTime(500),
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

  private performSearch(term: string) {
    if (!term || term.trim().length < 2) {
      this.searchResults = null;
      this.isSearching = false;
      return;
    }
    
    this.isSearching = true;
    const lowerTerm = term.toLowerCase().trim();
    
    // Simulate slight delay for realism
    setTimeout(() => {
      this.searchResults = this.MOCK_CUSTOMERS.filter(c => {
        const matchesName = c.name.toLowerCase().includes(lowerTerm);
        const matchesPhone = c.phone?.includes(lowerTerm);
        if (this.searchMode === 'name') {
          return matchesName;
        }
        return matchesName || matchesPhone;
      });
      this.isSearching = false;
    }, 150);
  }

  getInitials(name: string): string {
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

    const newCust: BillingCustomer = {
      id: `CUST${Date.now()}`,
      name: this.newCustomerName.trim(),
      phone: this.newCustomerPhone.trim(),
      notes: this.newCustomerNotes.trim(),
      createdAt: 'Just now'
    };
    
    this.selectedCustomer = newCust;
    this.isWalkIn = false;
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
