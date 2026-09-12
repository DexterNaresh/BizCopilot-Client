import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerStateService } from '../../services/customer-state.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-customer-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="customer-toolbar-container">
      <div class="search-box">
        <span class="material-symbols-outlined search-icon">search</span>
        <input 
          type="text" 
          placeholder="Search customers by name or phone" 
          [value]="state.searchTerm()"
          (input)="onSearchInput($event)"
        >
        <button 
          class="clear-btn" 
          *ngIf="state.searchTerm()" 
          (click)="clearSearch()">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div class="toolbar-actions">
        <!-- Minimal Filter implementation for Dashboard Phase 1 -->
        <button class="filter-button" (click)="toggleFilterMenu()">
          <span class="material-symbols-outlined">filter_list</span>
          Filters
          <span class="status-indicator" *ngIf="state.statusFilter() !== 'All'"></span>
        </button>
        
        <!-- Dropdown for filter (simplified) -->
        <div class="filter-dropdown" *ngIf="showFilterMenu">
          <div class="filter-option" [class.active]="state.statusFilter() === 'All'" (click)="setFilter('All')">All Customers</div>
          <div class="filter-option" [class.active]="state.statusFilter() === 'Active'" (click)="setFilter('Active')">Active Only</div>
          <div class="filter-option" [class.active]="state.statusFilter() === 'Inactive'" (click)="setFilter('Inactive')">Inactive Only</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./customer-toolbar.component.scss']
})
export class CustomerToolbarComponent implements OnInit, OnDestroy {
  state = inject(CustomerStateService);
  showFilterMenu = false;

  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(term => {
      this.state.updateSearch(term);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchSubject.next(target.value);
  }

  clearSearch() {
    this.searchSubject.next('');
    this.state.updateSearch(''); // Immediately clear without debounce
  }

  toggleFilterMenu() {
    this.showFilterMenu = !this.showFilterMenu;
  }

  setFilter(filter: 'All' | 'Active' | 'Inactive') {
    this.state.updateFilter(filter);
    this.showFilterMenu = false;
  }
}
