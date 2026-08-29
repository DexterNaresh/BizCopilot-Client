import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingProductCardComponent } from '../billing-product-card/billing-product-card.component';
import { BillingProduct, CartItem } from '../../services/billing-state.service';
import { BizPaginationComponent } from '../../../../shared/components/biz-pagination/biz-pagination.component';

@Component({
  selector: 'app-billing-product-grid',
  standalone: true,
  imports: [CommonModule, BillingProductCardComponent, BizPaginationComponent],
  templateUrl: './billing-product-grid.component.html',
  styleUrls: ['./billing-product-grid.component.scss']
})
export class BillingProductGridComponent implements OnChanges {
  @Input() products: BillingProduct[] = [];
  @Input() cartItems: CartItem[] = [];
  
  @Output() addProduct = new EventEmitter<BillingProduct>();
  @Output() updateQuantity = new EventEmitter<{productId: string, quantity: number}>();
  @Output() toggleFavourite = new EventEmitter<BillingProduct>();

  // Pagination State
  currentPage = 1;
  pageSize = 12;
  totalProducts = 0;
  paginatedProducts: BillingProduct[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products']) {
      this.totalProducts = this.products.length;
      this.updatePagination();
    }
  }

  getCartItem(productId: string): CartItem | undefined {
    return this.cartItems.find(item => item.product.id === productId);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.currentPage = 1;
    this.updatePagination();
  }

  private updatePagination() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedProducts = this.products.slice(start, start + this.pageSize);
  }
}
