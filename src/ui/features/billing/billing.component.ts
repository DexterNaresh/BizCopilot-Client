import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingHeaderComponent } from './components/billing-header/billing-header.component';
import { BillingSearchComponent } from './components/billing-search/billing-search.component';
import { BillingFilterComponent, BillingCategory } from './components/billing-filter/billing-filter.component';
import { BillingProductGridComponent } from './components/billing-product-grid/billing-product-grid.component';
import { BillingCartPanelComponent } from './components/billing-cart-panel/billing-cart-panel.component';
import { BillingMobileCartBarComponent } from './components/billing-mobile-cart-bar/billing-mobile-cart-bar.component';
import { BillingCartSheetComponent } from './components/billing-cart-sheet/billing-cart-sheet.component';
import { BillingHoldBillModalComponent } from './components/billing-hold-bill-modal/billing-hold-bill-modal.component';
import { BillingOfferModalComponent, AvailableOffer } from './components/billing-offer-modal/billing-offer-modal.component';
import { BillingStateService, BillingProduct, CartItem, HeldBill } from './services/billing-state.service';
import { ProductApplication } from '@runtime/product/application/product.application';
import { CategoryApplication } from '@runtime/category/application/category.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ConfirmDialogService } from '../../shared/services/confirm-dialog.service';
import { ToastService } from '../../shared/services/toast.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PRODUCT_UNITS, ProductUnitKey } from '../../../shared/constants/product-unit.constant';
import { getTestImageUrlForProduct } from '../../../shared/utilities/test-image.util';

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
    BillingCartSheetComponent,
    BillingHoldBillModalComponent,
    BillingOfferModalComponent
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
  heldBills$: Observable<HeldBill[]>;

  // Data
  allProducts: BillingProduct[] = [];
  categories: BillingCategory[] = [];

  // UI State
  activeFilter = 'all';
  searchTerm = '';
  isMobileCartOpen = false;
  showHoldBillsModal = false;
  showOfferModal = false;
  currentAppliedOfferCode: string | null = null;
  currentAppliedOffer: AvailableOffer | null = null;

  constructor(
    private state: BillingStateService,
    private productApp: ProductApplication,
    private categoryApp: CategoryApplication,
    private sessionService: ISessionService,
    private toastService: ToastService,
    private confirmService: ConfirmDialogService
  ) {
    this.cartItems$ = this.state.cartItems$;
    this.subtotal$ = this.state.subtotal$;
    this.discount$ = this.state.discount$;
    this.total$ = this.state.total$;
    this.itemCount$ = this.state.itemCount$;
    this.heldBills$ = this.state.heldBills$;
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
          unit: PRODUCT_UNITS[p.type as ProductUnitKey] || PRODUCT_UNITS.QTY,
          isAvailable: p.available === 1,
          isFavourite: false, // Defaulting to false, you could persist this later
          colorHint: this.getColorForCategory(p.category),
          imageUrl: environment.seedTestData ? getTestImageUrlForProduct(p.name, p.product_id) : (p.image_url || undefined)
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

  // --- Hold Bill Handlers ---

  onHoldBill() {
    if (this.state.cartItems.length > 0) {
      this.state.holdCurrentBill();
      this.toastService.info('Bill placed on hold');
    } else {
      // Just open the modal
      this.showHoldBillsModal = true;
    }
  }

  onOpenHeldBills() {
    this.showHoldBillsModal = true;
  }

  async onResumeHeldBill(heldBillId: string) {
    if (this.state.cartItems.length > 0) {
      const isConfirmed = await this.confirmService.confirm({
        variant: 'warning',
        title: 'Active Bill Present',
        message: 'You have an active bill with items. What would you like to do?',
        cancelLabel: 'Cancel',
        confirmLabel: 'Hold Current & Resume'
      });

      if (!isConfirmed) return;
      
      this.state.holdCurrentBill();
    }
    
    this.state.resumeBill(heldBillId);
    this.showHoldBillsModal = false;
  }

  async onDeleteHeldBill(heldBillId: string) {
    const isConfirmed = await this.confirmService.confirm({
      variant: 'danger',
      title: 'Delete held bill?',
      message: 'This bill will be permanently removed from held bills.',
      cancelLabel: 'Cancel',
      confirmLabel: 'Delete'
    });

    if (isConfirmed) {
      this.state.deleteHeldBill(heldBillId);
    }
  }

  // --- Offers Handlers ---
  onOpenOffers() {
    this.showOfferModal = true;
  }

  onApplyOffer(offer: AvailableOffer | null) {
    this.showOfferModal = false;
    this.currentAppliedOffer = offer;
    if (offer) {
      this.currentAppliedOfferCode = offer.code;
      this.toastService.success(`Offer ${offer.code} applied! You save ₹${offer.savingAmount}`);
    } else {
      this.currentAppliedOfferCode = null;
      this.toastService.info('Offer removed');
    }
  }

  // Placeholders
  onPlaceholderAction(actionName: string) {
    alert(`Placeholder Action: ${actionName}`);
  }
}
