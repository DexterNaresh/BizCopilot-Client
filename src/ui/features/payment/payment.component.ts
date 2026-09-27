import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BillingStateService } from '../billing/services/billing-state.service';
import { PaymentHeaderComponent } from './components/payment-header/payment-header.component';
import { BillSummaryCardComponent } from './components/bill-summary-card/bill-summary-card.component';
import { PaymentMethodSelectorComponent, PaymentMethodType } from './components/payment-method-selector/payment-method-selector.component';
import { CashPaymentPanelComponent } from './components/cash-payment-panel/cash-payment-panel.component';
import { UpiPaymentPanelComponent } from './components/upi-payment-panel/upi-payment-panel.component';
import { CardPaymentPanelComponent } from './components/card-payment-panel/card-payment-panel.component';
import { MixedPaymentPanelComponent } from './components/mixed-payment-panel/mixed-payment-panel.component';
import { BizIconComponent } from '../../shared/components/biz-icon/biz-icon.component';
import { SalesApplication } from '@runtime/billing/application/sales.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ToastService } from '../../shared/services/toast.service';
import { CompleteSaleRequest } from '@runtime/billing/application/dto/sales.dto';
import { Inject } from '@angular/core';

import { PaymentMethod } from '../../../shared/enums/payment-method.enum';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PaymentHeaderComponent,
    BillSummaryCardComponent,
    PaymentMethodSelectorComponent,
    CashPaymentPanelComponent,
    UpiPaymentPanelComponent,
    CardPaymentPanelComponent,
    MixedPaymentPanelComponent,
    BizIconComponent
  ],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy {
  selectedMethod: PaymentMethodType = PaymentMethod.CASH;
  
  billNumber = '1052';
  itemsCount = 4;
  customerName = 'Ravi Kumar';
  subtotal = 862.50;
  discountCode = 'BUYMORE10';
  discountAmount = 86.25;
  totalPayable = 776.25;

  paymentNote: string = '';
  isPaymentValid: boolean = false;

  private destroy$ = new Subject<void>();

  constructor(
    private router: Router, 
    private billingState: BillingStateService,
    @Inject(SalesApplication) private salesApp: SalesApplication,
    @Inject(ISessionService) private sessionService: ISessionService,
    private toastService: ToastService
  ) {}

  get currentUserId(): string {
    const user = this.sessionService.getCurrentUser();
    if (!user) throw new Error('No active session');
    return user.id;
  }

  ngOnInit() {
    this.billingState.total$.pipe(takeUntil(this.destroy$)).subscribe(total => this.totalPayable = total);
    this.billingState.subtotal$.pipe(takeUntil(this.destroy$)).subscribe(subtotal => this.subtotal = subtotal);
    this.billingState.discount$.pipe(takeUntil(this.destroy$)).subscribe(discount => this.discountAmount = discount);
    this.billingState.itemCount$.pipe(takeUntil(this.destroy$)).subscribe(count => this.itemsCount = count);
    this.billingState.customer$.pipe(takeUntil(this.destroy$)).subscribe(c => this.customerName = c ? c.name : 'Walk-in');
    
    // We don't have discount code in state yet, but this is a placeholder
    this.discountCode = this.discountAmount > 0 ? 'APPLIED' : '';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onClose() {
    this.router.navigate(['/billing']);
  }

  onMethodSelected(method: PaymentMethodType) {
    this.selectedMethod = method;
    if (method === PaymentMethod.CARD || method === PaymentMethod.UPI) {
      this.isPaymentValid = true;
    } else {
      this.isPaymentValid = false; // Requires validation from child component
    }
  }

  onValidityChange(isValid: boolean) {
    this.isPaymentValid = isValid;
  }

  markAsPaid() {
    if (!this.isPaymentValid) return;
    
    const request: CompleteSaleRequest = {
      deviceId: 'DEVICE-01', // Should come from settings eventually
      userId: this.currentUserId,
      items: this.billingState.cartItems.map(item => ({
        productId: item.product.id,
        quantity: item.quantity
      })),
      customerId: this.billingState.currentCustomer ? this.billingState.currentCustomer.id : undefined,
      paymentMethod: this.selectedMethod,
      amountPaid: this.totalPayable,
      paymentDetails: {
        method: this.selectedMethod as any,
        cashAmount: this.selectedMethod === PaymentMethod.CASH ? this.totalPayable : undefined,
        upiAmount: this.selectedMethod === PaymentMethod.UPI ? this.totalPayable : undefined,
        cardAmount: this.selectedMethod === PaymentMethod.CARD ? this.totalPayable : undefined
      }
    };

    const response = this.salesApp.completeSale(request);

    if (response.success) {
      this.toastService.success(`Payment processed for ₹${this.totalPayable.toFixed(2)}`);
      this.billingState.clearCart();
      this.router.navigate(['/billing']);
    } else {
      this.toastService.error(response.error?.message || 'Failed to process payment');
    }
  }
}
