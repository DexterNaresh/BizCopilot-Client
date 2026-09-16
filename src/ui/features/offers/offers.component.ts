import { Component, inject, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OfferService } from './services/offer.service';
import { Offer } from './models/offer.model';
import { BizPaginationComponent } from '../../shared/components/biz-pagination/biz-pagination.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, BizPaginationComponent],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  private offerService = inject(OfferService);
  
  offers = this.offerService.offers;
  
  // Pagination State
  currentPage = 1;
  pageSize = 10;
  
  // Filter State
  searchQuery = signal<string>('');
  filterType = signal<string>('All');
  filterAppliesTo = signal<string>('All');
  filterStatus = signal<string>('All');

  // Derived state for summary cards
  totalOffers = computed(() => this.offers().length);
  activeOffers = computed(() => this.offers().filter(o => o.status === 'Active').length);
  inactiveOffers = computed(() => this.offers().filter(o => o.status === 'Inactive').length);
  
  // Filtered offers list
  filteredOffers = computed(() => {
    let result = this.offers();
    const query = this.searchQuery().toLowerCase().trim();
    if (query) {
      result = result.filter(o => o.name.toLowerCase().includes(query) || o.description?.toLowerCase().includes(query));
    }
    const type = this.filterType();
    if (type !== 'All') result = result.filter(o => o.type === type);
    
    const appliesTo = this.filterAppliesTo();
    if (appliesTo !== 'All') result = result.filter(o => o.appliesTo === appliesTo);
    
    const status = this.filterStatus();
    if (status !== 'All') result = result.filter(o => o.status === status);
    
    return result;
  });

  // The actual offers displayed on the current page
  paginatedOffers = computed(() => {
    const all = this.filteredOffers();
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return all.slice(startIndex, startIndex + this.pageSize);
  });
  
  // Used by pagination component
  totalFilteredOffers = computed(() => this.filteredOffers().length);
  
  toggleStatus(offerId: string) {
    this.offerService.toggleStatus(offerId);
  }
  
  deleteOffer(offerId: string) {
    this.offerService.deleteOffer(offerId);
  }
  
  onPageChange(page: number) {
    this.currentPage = page;
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.currentPage = 1;
  }
}
