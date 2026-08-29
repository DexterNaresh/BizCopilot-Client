import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

@Injectable()
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

  get cartItems() {
    return this.cartItemsSubject.value;
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
