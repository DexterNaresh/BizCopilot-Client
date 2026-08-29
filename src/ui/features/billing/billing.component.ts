import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingHeaderComponent } from './components/billing-header/billing-header.component';
import { BillingSearchComponent } from './components/billing-search/billing-search.component';
import { BillingFilterComponent, BillingCategory } from './components/billing-filter/billing-filter.component';
import { BillingProductGridComponent } from './components/billing-product-grid/billing-product-grid.component';
import { BillingCartPanelComponent } from './components/billing-cart-panel/billing-cart-panel.component';
import { BillingMobileCartBarComponent } from './components/billing-mobile-cart-bar/billing-mobile-cart-bar.component';
import { BillingCartSheetComponent } from './components/billing-cart-sheet/billing-cart-sheet.component';
import { BillingStateService, BillingProduct, CartItem } from './services/billing-state.service';
import { ProductApplication } from '@runtime/product/application/product.application';
import { CategoryApplication } from '@runtime/category/application/category.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ToastService } from '../../shared/services/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [
    CommonModule,
    BillingHeaderComponent,
    BillingSearchComponent,
    BillingFilterComponent,
    BillingProductGridComponent,
    BillingCartPanelComponent,
    BillingMobileCartBarComponent,
    BillingCartSheetComponent
  ],
  providers: [BillingStateService],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  // State Observables
  cartItems$: Observable<CartItem[]>;
  subtotal$: Observable<number>;
  discount$: Observable<number>;
  total$: Observable<number>;
  itemCount$: Observable<number>;

  // Data
  allProducts: BillingProduct[] = [];
  categories: BillingCategory[] = [];

  // UI State
  activeFilter = 'all';
  searchTerm = '';
  isMobileCartOpen = false;

  constructor(
    private state: BillingStateService,
    private productApp: ProductApplication,
    private categoryApp: CategoryApplication,
    private sessionService: ISessionService,
    private toastService: ToastService
  ) {
    this.cartItems$ = this.state.cartItems$;
    this.subtotal$ = this.state.subtotal$;
    this.discount$ = this.state.discount$;
    this.total$ = this.state.total$;
    this.itemCount$ = this.state.itemCount$;
  }

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }

  get currentUserId(): string {
    const user = this.sessionService.getCurrentUser();
    return user ? user.id : '00000000-0000-0000-0000-000000000000';
  }

  private loadCategories() {
    const response = this.categoryApp.getAllCategories({ userId: this.currentUserId });
    if (response.success && response.data) {
      this.categories = response.data
        .filter(c => c.status !== 'ARCHIVED')
        .map(c => ({
          id: c.name.toLowerCase().replace(/\s+/g, '-'),
          name: c.name,
          icon: c.icon || 'category' // Default icon if not provided
        }));
    }
  }

  private loadProducts() {
    const response = this.productApp.getAllProducts({ userId: this.currentUserId });
    if (response.success && response.data) {
      this.allProducts = response.data
        .filter(p => p.status !== 'ARCHIVED' && p.available === 1) // Only show available products in billing
        .map(p => ({
          id: p.product_id,
          name: p.name,
          category: p.category || 'Uncategorized',
          price: p.price,
          unit: p.type,
          isAvailable: p.available === 1,
          isFavourite: false, // Defaulting to false, you could persist this later
          colorHint: this.getColorForCategory(p.category)
        }));
    } else {
      this.toastService.error(response.error?.message || 'Failed to load products');
    }
  }

  private getColorForCategory(cat?: string | null): string {
    const colors = ['#F3E8FF', '#FEF3C7', '#E0E7FF', '#D1FAE5', '#FFEDD5'];
    if (!cat) return colors[0];
    const hash = cat.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  }

  get filteredProducts(): BillingProduct[] {
    return this.allProducts.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      let matchesFilter = true;
      if (this.activeFilter === 'favourites') matchesFilter = p.isFavourite;
      else if (this.activeFilter !== 'all') {
        const catId = p.category.toLowerCase().replace(/\s+/g, '-');
        matchesFilter = catId === this.activeFilter;
      }
      return matchesSearch && matchesFilter;
    });
  }

  // --- Handlers ---

  onSearch(term: string) {
    this.searchTerm = term;
  }

  onFilterChange(filter: string) {
    this.activeFilter = filter;
  }

  onAddProduct(product: BillingProduct) {
    // Determine initial qty based on unit
    const initialQty = ['Kg', 'Ltr', 'Meter'].includes(product.unit) ? 1.000 : 1;
    this.state.addToCart(product, initialQty);
  }

  onUpdateQuantity(event: { productId: string, quantity: number }) {
    this.state.updateQuantity(event.productId, event.quantity);
  }

  onToggleFavourite(product: BillingProduct) {
    // For now we mutate the object. Ideally this goes through state or backend.
    product.isFavourite = !product.isFavourite;
  }

  onRemoveCartItem(productId: string) {
    this.state.removeFromCart(productId);
  }

  onClearCart() {
    this.state.clearCart();
    this.isMobileCartOpen = false;
  }

  // Placeholders
  onPlaceholderAction(actionName: string) {
    alert(`Placeholder Action: ${actionName}`);
  }
}
