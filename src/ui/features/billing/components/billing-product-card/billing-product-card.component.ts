import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { BillingProduct, CartItem } from '../../services/billing-state.service';
import { PRODUCT_UNITS } from '../../../../../shared/constants/product-unit.constant';

@Component({
  selector: 'app-billing-product-card',
  standalone: true,
  imports: [CommonModule, FormsModule, BizIconComponent],
  templateUrl: './billing-product-card.component.html',
  styleUrls: ['./billing-product-card.component.scss']
})
export class BillingProductCardComponent {
  @Input() product!: BillingProduct;
  @Input() cartItem?: CartItem; // If undefined, product is not in cart
  
  @Output() add = new EventEmitter<void>();
  @Output() updateQuantity = new EventEmitter<number>();
  @Output() toggleFavourite = new EventEmitter<void>();

  get isInCart(): boolean {
    return !!this.cartItem;
  }

  get currentQuantity(): number {
    return this.cartItem ? this.cartItem.quantity : 0;
  }

  get isQtyOrPack(): boolean {
    return this.product.unit === PRODUCT_UNITS.QTY || this.product.unit === PRODUCT_UNITS.PACK;
  }
  
  get isDecimalUnit(): boolean {
    return [PRODUCT_UNITS.KG, PRODUCT_UNITS.LTR, PRODUCT_UNITS.METER].includes(this.product.unit as any);
  }

  onAdd() {
    this.add.emit();
  }

  onIncrement() {
    this.updateQuantity.emit(this.currentQuantity + 1);
  }

  onDecrement() {
    this.updateQuantity.emit(this.currentQuantity - 1);
  }

  onDecimalInputChange(event: any) {
    const val = parseFloat(event.target.value);
    if (!isNaN(val) && val >= 0) {
      this.updateQuantity.emit(val);
    }
  }

  // Prevents invalid characters like '-' or 'e' in number inputs for decimal units
  onNumberKeypress(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab', '.'];
    if (allowedKeys.includes(event.key)) {
      return;
    }
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }
}
