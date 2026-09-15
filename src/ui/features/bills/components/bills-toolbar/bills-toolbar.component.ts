import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  RecentBillsStateService, 
  DateFilterOption, 
  AdvancedFilterState, 
  PaymentMethodFilter, 
  CustomerTypeFilter, 
  BilledByFilter 
} from '../../services/recent-bills-state.service';

@Component({
  selector: 'app-bills-toolbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bills-toolbar.component.html',
  styleUrls: ['./bills-toolbar.component.scss']
})
export class BillsToolbarComponent {
  stateService = inject(RecentBillsStateService);

  // Dropdown / Modal Visibility Signals
  isDateDropdownOpen = signal<boolean>(false);
  isFilterModalOpen = signal<boolean>(false);

  // Custom Date Range Input State
  customFromDate = signal<string>('');
  customToDate = signal<string>('');

  // Local Draft Filter State (applied on 'Apply')
  draftFilters = signal<AdvancedFilterState>({
    paymentMethod: 'All',
    customerType: 'All',
    billedBy: 'All',
    minAmount: null,
    maxAmount: null
  });

  dateOptions: DateFilterOption[] = [
    'Today',
    'Yesterday',
    'This Week',
    'This Month',
    'Last Month',
    'Custom'
  ];

  paymentMethods: PaymentMethodFilter[] = ['All', 'Cash', 'UPI', 'Card', 'Mixed'];
  customerTypes: { label: string; value: CustomerTypeFilter }[] = [
    { label: 'All Customers', value: 'All' },
    { label: 'Walk-In Customer', value: 'WalkIn' },
    { label: 'Named Customer', value: 'Named' }
  ];
  billedByOptions: { label: string; value: BilledByFilter }[] = [
    { label: 'All Staff', value: 'All' },
    { label: 'Owner', value: 'Owner' },
    { label: 'Waiter / Cashier', value: 'Waiter' }
  ];

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.stateService.setSearchQuery(input.value);
  }

  // --- Date Dropdown Actions ---
  toggleDateDropdown(event?: Event) {
    if (event) event.stopPropagation();
    this.isDateDropdownOpen.update(v => !v);
    if (this.isFilterModalOpen()) this.isFilterModalOpen.set(false);
  }

  selectDateOption(option: DateFilterOption) {
    if (option !== 'Custom') {
      this.stateService.setDateOption(option);
      this.isDateDropdownOpen.set(false);
    } else {
      this.stateService.setDateOption('Custom', this.customFromDate(), this.customToDate());
    }
  }

  applyCustomDateRange() {
    this.stateService.setDateOption('Custom', this.customFromDate(), this.customToDate());
    this.isDateDropdownOpen.set(false);
  }

  // --- Filter Modal Actions ---
  toggleFilterModal(event?: Event) {
    if (event) event.stopPropagation();
    const willOpen = !this.isFilterModalOpen();
    if (willOpen) {
      // Sync draft filters with state
      this.draftFilters.set({ ...this.stateService.filters() });
      if (this.isDateDropdownOpen()) this.isDateDropdownOpen.set(false);
    }
    this.isFilterModalOpen.set(willOpen);
  }

  setDraftPaymentMethod(method: PaymentMethodFilter) {
    this.draftFilters.update(f => ({ ...f, paymentMethod: method }));
  }

  setDraftCustomerType(type: CustomerTypeFilter) {
    this.draftFilters.update(f => ({ ...f, customerType: type }));
  }

  setDraftBilledBy(billedBy: BilledByFilter) {
    this.draftFilters.update(f => ({ ...f, billedBy }));
  }

  updateDraftMinAmount(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    const num = val ? Number(val) : null;
    this.draftFilters.update(f => ({ ...f, minAmount: num }));
  }

  updateDraftMaxAmount(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    const num = val ? Number(val) : null;
    this.draftFilters.update(f => ({ ...f, maxAmount: num }));
  }

  applyFilters() {
    this.stateService.setFilters(this.draftFilters());
    this.isFilterModalOpen.set(false);
  }

  resetFilters() {
    const defaultFilters: AdvancedFilterState = {
      paymentMethod: 'All',
      customerType: 'All',
      billedBy: 'All',
      minAmount: null,
      maxAmount: null
    };
    this.draftFilters.set(defaultFilters);
    this.stateService.resetFilters();
    this.isFilterModalOpen.set(false);
  }

  onExport() {
    console.log('Exporting recent bills data...');
  }

  closeAllPopovers() {
    this.isDateDropdownOpen.set(false);
    this.isFilterModalOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeAllPopovers();
  }
}
