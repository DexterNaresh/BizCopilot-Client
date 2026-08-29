import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-billing-mobile-cart-bar',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './billing-mobile-cart-bar.component.html',
  styleUrls: ['./billing-mobile-cart-bar.component.scss']
})
export class BillingMobileCartBarComponent {
  @Input() itemCount: number = 0;
  @Input() total: number = 0;
  @Input() discount: number = 0;
  
  @Output() openCart = new EventEmitter<void>();
  @Output() holdBill = new EventEmitter<void>();
  @Output() proceedToPay = new EventEmitter<void>();

  onCartClick() {
    // Only open if there are items, or if we want to allow opening empty cart to see customer/etc.
    // The spec says "Before any product is added, show a compact Cart summary at the bottom... Once first product added, expands"
    // I'll allow clicking to open it always, but user usually clicks when items > 0.
    this.openCart.emit();
  }
}
