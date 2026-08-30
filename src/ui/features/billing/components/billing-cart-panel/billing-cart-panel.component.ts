import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { BillingCartItemComponent } from '../billing-cart-item/billing-cart-item.component';
import { AvailableOffer } from '../billing-offer-modal/billing-offer-modal.component';
import { CartItem, BillingCustomer } from '../../services/billing-state.service';

@Component({
  selector: 'app-billing-cart-panel',
  standalone: true,
  imports: [CommonModule, BizIconComponent, BillingCartItemComponent],
  templateUrl: './billing-cart-panel.component.html',
  styleUrls: ['./billing-cart-panel.component.scss']
})
export class BillingCartPanelComponent {
  @Input() cartItems: CartItem[] = [];
  @Input() itemCount: number = 0;
  @Input() subtotal: number = 0;
  @Input() discount: number = 0;
  @Input() total: number = 0;

  @Output() updateQuantity = new EventEmitter<{productId: string, quantity: number}>();
  @Output() remove = new EventEmitter<string>();
  @Output() clearCart = new EventEmitter<void>();
  
  @Output() openCustomer = new EventEmitter<void>();
  @Output() openOffers = new EventEmitter<void>();
  @Output() holdBill = new EventEmitter<void>();
  @Output() proceedToPay = new EventEmitter<void>();

  @Input() appliedOffer: AvailableOffer | null = null;
  @Input() customer: BillingCustomer | null = null;

  // Mocked state for UI layout
  customerName = 'Walk-In Customer';
  customerType = 'Default Customer';

  onRemove(productId: string) {
    this.remove.emit(productId);
  }

  onUpdateQuantity(productId: string, quantity: number) {
    this.updateQuantity.emit({ productId, quantity });
  }
}
