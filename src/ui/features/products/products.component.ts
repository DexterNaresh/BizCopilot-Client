import { Component, OnInit, OnDestroy, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductFacade, ProductViewMode, ProductFilter } from './facades/product.facade';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { AddEditProductModalService } from './components/add-edit-product-modal/add-edit-product-modal.service';
import { ProductViewModel } from './ui-models/product-view.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductGridComponent, ProductTableComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  facade = inject(ProductFacade);
  private router = inject(Router);
  private addEditModalService = inject(AddEditProductModalService);

  isFilterOpen = false;
  math = Math;


  private mqlMobile = window.matchMedia('(max-width: 767px)');
  private mqlTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');

  ngOnInit() {
    this.facade.loadInitialData();
    this.updateViewportDefault();
    
    // Add listeners
    this.mqlMobile.addEventListener('change', this.handleResize);
    this.mqlTablet.addEventListener('change', this.handleResize);
  }

  ngOnDestroy() {
    this.mqlMobile.removeEventListener('change', this.handleResize);
    this.mqlTablet.removeEventListener('change', this.handleResize);
  }

  private handleResize = () => {
    this.updateViewportDefault();
  };

  private updateViewportDefault() {
    let viewport: 'desktop' | 'tablet' | 'mobile' = 'desktop';
    if (this.mqlMobile.matches) viewport = 'mobile';
    else if (this.mqlTablet.matches) viewport = 'tablet';
    
    this.facade.setViewportResponsiveDefault(viewport);
  }


  // Header Actions
  async openAddProduct() {
    await this.addEditModalService.openAdd();
  }

  navigateToCategories() {
    this.router.navigate(['/categories']);
  }

  // Toolbar Actions
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.facade.setSearchQuery(input.value);
  }

  onFilterAvailability(filter: string) {
    this.facade.setAvailabilityFilter(filter as ProductFilter);
  }

  onToggleFavouriteFilter() {
    this.facade.toggleFavouriteFilter();
  }

  onCategoryFilterChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.facade.setCategoryFilter(select.value);
  }

  onViewModeChange(mode: ProductViewMode) {
    this.facade.setViewMode(mode);
    this.updateViewportDefault(); // Re-calc default for new mode
  }

  // Filter Popover
  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }
  
  closeFilter() {
    this.isFilterOpen = false;
  }

  // Pagination Logic
  onPageSizeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.facade.setPageSize(Number(select.value));
  }

  goToPage(page: number) {
    this.facade.setPage(page);
  }

  previousPage() {
    this.facade.setPage(this.facade.currentPage() - 1);
  }

  nextPage() {
    this.facade.setPage(this.facade.currentPage() + 1);
  }

  getPageNumbers(): number[] {
    const total = this.facade.totalPages();
    const current = this.facade.currentPage();
    
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    
    // Simple sliding window
    let start = Math.max(1, current - 2);
    let end = Math.min(total, current + 2);
    
    if (start === 1) end = 5;
    if (end === total) start = total - 4;
    
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Card / Table Actions
  onToggleFavourite(product: ProductViewModel) {
    this.facade.toggleProductFavourite(product.id, !product.favourite);
  }

  onMarkAvailability(event: {product: ProductViewModel, availability: 'available' | 'unavailable'}) {
    this.facade.toggleProductAvailability(event.product.id, event.availability);
  }

  async onEditProduct(product: ProductViewModel) {
    await this.addEditModalService.openEdit(product);
  }

  async onDeleteProduct(product: ProductViewModel) {
    if (confirm(`Are you sure you want to delete ${product.name}?`)) {
      await this.facade.deleteProduct(product.id);
    }
  }
}
