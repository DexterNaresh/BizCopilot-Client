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
  selectedMethod: PaymentMethodType = 'CASH';
  
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

  constructor(private router: Router, private billingState: BillingStateService) {}

  ngOnInit() {
    this.billingState.total$.pipe(takeUntil(this.destroy$)).subscribe(total => this.totalPayable = total);
    this.billingState.subtotal$.pipe(takeUntil(this.destroy$)).subscribe(subtotal => this.subtotal = subtotal);
    this.billingState.discount$.pipe(takeUntil(this.destroy$)).subscribe(discount => this.discountAmount = discount);
    this.billingState.itemCount$.pipe(takeUntil(this.destroy$)).subscribe(count => this.itemsCount = count);
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
    if (method === 'CARD' || method === 'UPI') {
      this.isPaymentValid = true;
    } else {
      this.isPaymentValid = false;
    }
  }

  onValidityChange(isValid: boolean) {
    this.isPaymentValid = isValid;
  }

  markAsPaid() {
    if (!this.isPaymentValid) return;
    console.log(`Payment processed for ${this.totalPayable} via ${this.selectedMethod}`);
    this.router.navigate(['/billing']);
  }
}
