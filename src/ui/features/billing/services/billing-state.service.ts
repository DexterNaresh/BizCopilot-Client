import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILocalStorageService } from '@shared/abstractions/storage.service';

export interface BillingProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  isAvailable: boolean;
  isFavourite: boolean;
  colorHint?: string;
  imageUrl?: string;
}

export interface CartItem {
  product: BillingProduct;
  quantity: number; // For Qty, Pack, Kg, Ltr, Meter
  lineTotal: number;
}

export interface HeldBill {
  id: string;
  billNumber: string;
  timestamp: string;
  customer?: any; // To be extended when customer module integrates
  appliedOffers?: any[]; // To be extended when offers module integrates
  cartItems: CartItem[];
  itemCount: number;
  subtotal: number;
  discount: number;
  total: number;
}

@Injectable({ providedIn: 'root' })
export class BillingStateService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private subtotalSubject = new BehaviorSubject<number>(0);
  subtotal$ = this.subtotalSubject.asObservable();

  private discountSubject = new BehaviorSubject<number>(0);
  discount$ = this.discountSubject.asObservable();

  private totalSubject = new BehaviorSubject<number>(0);
  total$ = this.totalSubject.asObservable();

  private itemCountSubject = new BehaviorSubject<number>(0);
  itemCount$ = this.itemCountSubject.asObservable();

  private heldBillsSubject = new BehaviorSubject<HeldBill[]>([]);
  heldBills$ = this.heldBillsSubject.asObservable();

  private readonly HELD_BILLS_STORAGE_KEY = 'bizcopilot_held_bills';

  constructor(private storageService: ILocalStorageService) {
    this.loadHeldBills();
  }

  get cartItems() {
    return this.cartItemsSubject.value;
  }

  get heldBills() {
    return this.heldBillsSubject.value;
  }

  private loadHeldBills() {
    try {
      const stored = this.storageService.getItem(this.HELD_BILLS_STORAGE_KEY);
      if (stored) {
        this.heldBillsSubject.next(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load held bills from storage', e);
    }
  }

  private saveHeldBills(bills: HeldBill[]) {
    this.heldBillsSubject.next(bills);
    try {
      this.storageService.setItem(this.HELD_BILLS_STORAGE_KEY, JSON.stringify(bills));
    } catch (e) {
      console.error('Failed to save held bills to storage', e);
    }
  }

  holdCurrentBill(): void {
    const items = this.cartItems;
    if (items.length === 0) return;

    // Generate a simple sequential bill number for display purposes, e.g. Bill #1048
    // In a real app this might come from a sequence service, but since it's temporary:
    const randomId = Math.floor(1000 + Math.random() * 9000);
    
    const heldBill: HeldBill = {
      id: `HOLD-${Date.now()}`,
      billNumber: `Bill #${randomId}`,
      timestamp: new Date().toISOString(),
      cartItems: [...items],
      itemCount: this.itemCountSubject.value,
      subtotal: this.subtotalSubject.value,
      discount: this.discountSubject.value,
      total: this.totalSubject.value
      // Note: customer and appliedOffers would be captured here
    };

    // Prepend new held bill (newest first)
    this.saveHeldBills([heldBill, ...this.heldBills]);
    this.clearCart();
  }

  resumeBill(heldBillId: string): void {
    const heldBill = this.heldBills.find(b => b.id === heldBillId);
    if (!heldBill) return;

    // Restore active cart state
    this.cartItemsSubject.next([...heldBill.cartItems]);
    this.recalculateTotals();

    // Remove from held bills
    this.deleteHeldBill(heldBillId);
  }

  deleteHeldBill(heldBillId: string): void {
    this.saveHeldBills(this.heldBills.filter(b => b.id !== heldBillId));
  }

  addToCart(product: BillingProduct, initialQuantity: number = 1) {
    const currentItems = this.cartItems;
    const existing = currentItems.find(item => item.product.id === product.id);
    
    if (existing) {
      this.updateQuantity(product.id, existing.quantity + initialQuantity);
    } else {
      const lineTotal = product.price * initialQuantity;
      const newItem: CartItem = { product, quantity: initialQuantity, lineTotal };
      this.cartItemsSubject.next([...currentItems, newItem]);
      this.recalculateTotals();
    }
  }

  removeFromCart(productId: string) {
    const currentItems = this.cartItems;
    this.cartItemsSubject.next(currentItems.filter(item => item.product.id !== productId));
    this.recalculateTotals();
  }

  updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const currentItems = this.cartItems;
    const updated = currentItems.map(item => {
      if (item.product.id === productId) {
        return {
          ...item,
          quantity,
          lineTotal: item.product.price * quantity
        };
      }
      return item;
    });
    this.cartItemsSubject.next(updated);
    this.recalculateTotals();
  }
  
  clearCart() {
    this.cartItemsSubject.next([]);
    this.recalculateTotals();
  }

  private recalculateTotals() {
    const items = this.cartItems;
    const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
    
    // For now, no discount applied automatically
    const discount = 0; 
    const total = subtotal - discount;

    this.subtotalSubject.next(subtotal);
    this.discountSubject.next(discount);
    this.totalSubject.next(total);
    this.itemCountSubject.next(items.length);
  }
}
