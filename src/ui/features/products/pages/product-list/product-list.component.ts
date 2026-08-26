import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductFiltersComponent } from '../../components/product-filters/product-filters.component';
import { ProductPaginationComponent } from '../../components/product-pagination/product-pagination.component';
import { ProductSidebarComponent } from '../../components/product-sidebar/product-sidebar.component';
import { ProductFacade } from '../../facade/product.facade';
import { Product, ProductFilterStatus, ProductViewMode } from '../../models/product.model';

@Component({
  selector: 'biz-product-list-page',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    ProductFiltersComponent,
    ProductPaginationComponent,
    ProductSidebarComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  public facade = inject(ProductFacade);

  currentPage = signal<number>(1);
  pageSize = signal<number>(12);

  // ── Event Handlers ──
  onSearch(query: string): void {
    this.facade.setSearchQuery(query);
  }

  onFilterStatusChange(status: ProductFilterStatus): void {
    this.facade.setStatusFilter(status);
  }

  onToggleFavouritesFilter(): void {
    const current = this.facade.activeStatusFilter();
    this.facade.setStatusFilter(current === 'all' ? 'available' : 'all');
  }

  onViewModeChange(mode: ProductViewMode): void {
    this.facade.setViewMode(mode);
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
  }

  onPageSizeChange(size: number): void {
    this.pageSize.set(size);
    this.currentPage.set(1);
  }

  onEditProduct(product: Product): void {
    console.log('Edit product', product);
  }

  onDeleteProduct(product: Product): void {
    this.facade.archiveProduct(product);
  }

  onToggleAvailability(product: Product): void {
    this.facade.toggleAvailability(product);
  }

  onToggleFavourite(product: Product): void {
    this.facade.toggleFavourite(product);
  }
}
