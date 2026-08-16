import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductFacade, ProductViewMode, ProductFilter } from './facades/product.facade';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { AddProductOverlayComponent } from './components/add-product-overlay/add-product-overlay.component';
import { ProductViewModel } from './ui-models/product-view.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductGridComponent, ProductTableComponent, AddProductOverlayComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  facade = inject(ProductFacade);
  private router = inject(Router);

  isAddProductOpen = false;

  ngOnInit() {
    this.facade.loadInitialData();
  }

  // Header Actions
  openAddProduct() {
    this.isAddProductOpen = true;
  }

  closeAddProduct() {
    this.isAddProductOpen = false;
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
  }

  // Card / Table Actions
  onToggleFavourite(product: ProductViewModel) {
    this.facade.toggleProductFavourite(product.id, !product.favourite);
  }

  onMarkAvailability(event: {product: ProductViewModel, availability: 'available' | 'unavailable'}) {
    this.facade.toggleProductAvailability(event.product.id, event.availability);
  }

  onEditProduct(product: ProductViewModel) {
    // Open edit modal (in future could be the same overlay initialized with product data)
    console.log('Edit product', product);
  }

  async onDeleteProduct(product: ProductViewModel) {
    if (confirm(`Are you sure you want to delete ${product.name}?`)) {
      await this.facade.deleteProduct(product.id);
    }
  }
}
