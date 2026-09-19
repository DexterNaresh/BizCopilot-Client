import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FilterState {
  product: string;
  category: string;
  customer: string;
  offer: string;
  paymentMethod: string;
  status: string;
}

@Component({
  selector: 'app-reports-controls',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports-controls.component.html',
  styleUrls: ['./reports-controls.component.scss']
})

export class ReportsControlsComponent {
  @Input() selectedPeriod: string = 'Today (25 Aug 2025)';
  @Input() activeFilterCount: number = 2;

  @Output() periodChange = new EventEmitter<string>();
  @Output() filterApply = new EventEmitter<FilterState>();
  @Output() filterClear = new EventEmitter<void>();

  isPeriodDropdownOpen: boolean = false;
  isFilterModalOpen: boolean = false;
  isAiModalOpen: boolean = false;

  periods: string[] = [
    'Today (25 Aug 2025)',
    'Yesterday (24 Aug 2025)',
    'This Week (19 Aug - 25 Aug)',
    'This Month (Aug 2025)',
    'This Year (2025)',
    'Custom Date Range'
  ];

  filterState: FilterState = {
    product: 'All Products',
    category: 'All Categories',
    customer: 'All Customers',
    offer: 'All Offers',
    paymentMethod: 'All Payment Methods',
    status: 'All Status'
  };

  productsList: string[] = ['All Products', 'Espresso', 'Cappuccino', 'Croissant', 'Sandwich', 'Green Tea'];
  categoriesList: string[] = ['All Categories', 'Beverages', 'Bakery', 'Snacks', 'Combos'];
  customersList: string[] = ['All Customers', 'Regular', 'VIP', 'Walk-in'];
  offersList: string[] = ['All Offers', 'Morning Coffee 10%', 'Weekend Special 15%', 'None'];
  paymentMethodsList: string[] = ['All Payment Methods', 'UPI', 'Cash', 'Card', 'Mixed'];
  statusList: string[] = ['All Status', 'Completed', 'Refunded', 'Cancelled'];

  isCustomDateModalOpen: boolean = false;
  startDate: string = '2025-08-01';
  endDate: string = '2025-08-25';

  togglePeriodDropdown(): void {
    this.isPeriodDropdownOpen = !this.isPeriodDropdownOpen;
  }

  selectPeriod(period: string): void {
    this.isPeriodDropdownOpen = false;
    if (period === 'Custom Date Range') {
      this.isCustomDateModalOpen = true;
    } else {
      this.selectedPeriod = period;
      this.periodChange.emit(period);
    }
  }

  applyCustomDate(): void {
    this.isCustomDateModalOpen = false;
    this.selectedPeriod = `Custom (${this.startDate} to ${this.endDate})`;
    this.periodChange.emit(this.selectedPeriod);
  }


  toggleFilterModal(): void {
    this.isFilterModalOpen = !this.isFilterModalOpen;
  }

  applyFilters(): void {
    this.isFilterModalOpen = false;
    this.filterApply.emit(this.filterState);
  }

  clearFilters(): void {
    this.filterState = {
      product: 'All Products',
      category: 'All Categories',
      customer: 'All Customers',
      offer: 'All Offers',
      paymentMethod: 'All Payment Methods',
      status: 'All Status'
    };
    this.filterClear.emit();
  }

  toggleAiModal(): void {
    this.isAiModalOpen = !this.isAiModalOpen;
  }
}

