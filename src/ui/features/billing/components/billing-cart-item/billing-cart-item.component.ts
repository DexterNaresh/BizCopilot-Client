import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { CartItem } from '../../services/billing-state.service';
import { PRODUCT_UNITS } from '../../../../../shared/constants/product-unit.constant';

@Component({
  selector: 'app-billing-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule, BizIconComponent],
  templateUrl: './billing-cart-item.component.html',
  styleUrls: ['./billing-cart-item.component.scss']
})
export class BillingCartItemComponent {
  @Input() item!: CartItem;
  
  @Output() updateQuantity = new EventEmitter<number>();
  @Output() remove = new EventEmitter<void>();

  get isQtyOrPack(): boolean {
    return this.item.product.unit === PRODUCT_UNITS.QTY || this.item.product.unit === PRODUCT_UNITS.PACK;
  }
  
  get isDecimalUnit(): boolean {
    return [PRODUCT_UNITS.KG, PRODUCT_UNITS.LTR, PRODUCT_UNITS.METER].includes(this.item.product.unit as any);
  }

  onIncrement() {
    this.updateQuantity.emit(this.item.quantity + 1);
  }

  onDecrement() {
    this.updateQuantity.emit(this.item.quantity - 1);
  }

  onDecimalInputChange(event: any) {
    const val = parseFloat(event.target.value);
    if (!isNaN(val) && val >= 0) {
      this.updateQuantity.emit(val);
    }
  }

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
