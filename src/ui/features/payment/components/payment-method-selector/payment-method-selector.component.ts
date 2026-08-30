import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

export type PaymentMethodType = 'CASH' | 'UPI' | 'CARD' | 'MIXED';

interface PaymentMethodOption {
  id: PaymentMethodType;
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
  @Input() selectedMethod: PaymentMethodType = 'CASH';
  @Output() methodSelected = new EventEmitter<PaymentMethodType>();

  methods: PaymentMethodOption[] = [
    { id: 'CASH', label: 'Cash', icon: 'numbers' },
    { id: 'UPI', label: 'UPI', icon: 'barcode_scanner' },
    { id: 'CARD', label: 'Card', icon: 'devices' },
    { id: 'MIXED', label: 'Mixed', icon: 'grid_view' }
  ];

  selectMethod(methodId: PaymentMethodType) {
    this.methodSelected.emit(methodId);
  }
}
