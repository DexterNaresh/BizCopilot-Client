import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { PaymentMethod } from '../../../../../shared/enums/payment-method.enum';

export type PaymentMethodType = PaymentMethod;

interface PaymentMethodOption {
  id: PaymentMethod;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-payment-method-selector',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './payment-method-selector.component.html',
  styleUrls: ['./payment-method-selector.component.scss']
})
export class PaymentMethodSelectorComponent {
  @Input() selectedMethod: PaymentMethodType = PaymentMethod.CASH;
  @Output() methodSelected = new EventEmitter<PaymentMethodType>();

  methods: PaymentMethodOption[] = [
    { id: PaymentMethod.CASH, label: 'Cash', icon: 'numbers' },
    { id: PaymentMethod.UPI, label: 'UPI', icon: 'barcode_scanner' },
    { id: PaymentMethod.CARD, label: 'Card', icon: 'devices' },
    { id: PaymentMethod.MIXED, label: 'Mixed', icon: 'grid_view' }
  ];

  selectMethod(methodId: PaymentMethodType) {
    this.methodSelected.emit(methodId);
  }
}
