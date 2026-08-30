import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-cash-payment-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, BizIconComponent],
  templateUrl: './cash-payment-panel.component.html',
  styleUrls: ['./cash-payment-panel.component.scss']
})
export class CashPaymentPanelComponent implements OnChanges {
  @Input() totalPayable: number = 0;
  @Output() amountReceivedChange = new EventEmitter<number>();
  @Output() validityChange = new EventEmitter<boolean>();

  amountReceived: number | null = null;
  suggestedCash: number[] = [];
  changeToReturn: number = 0;
  isValid: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalPayable']) {
      this.generateSuggestedCash();
      this.calculateChange();
    }
  }

  generateSuggestedCash() {
    const total = this.totalPayable;
    if (total <= 0) {
      this.suggestedCash = [];
      return;
    }
    
    const roundedUp10 = Math.ceil(total / 10) * 10;
    const roundedUp50 = Math.ceil(total / 50) * 50;
    const roundedUp100 = Math.ceil(total / 100) * 100;
    const roundedUp500 = Math.ceil(total / 500) * 500;
    
    const set = new Set<number>();
    if (roundedUp10 > total) set.add(roundedUp10);
    if (roundedUp10 + 10 > total) set.add(roundedUp10 + 10);
    set.add(roundedUp50);
    set.add(roundedUp100);
    set.add(roundedUp500);
    set.add(roundedUp500 + 500);
    
    let sorted = Array.from(set).filter(a => a >= total).sort((a, b) => a - b);
    this.suggestedCash = Array.from(new Set(sorted)).slice(0, 4);
  }

  onQuickFill() {
    this.amountReceived = this.totalPayable;
    this.onAmountChange();
  }

  onSuggestedCashClick(amount: number) {
    this.amountReceived = amount;
    this.onAmountChange();
  }

  onAmountChange() {
    this.calculateChange();
    this.amountReceivedChange.emit(this.amountReceived || 0);
  }

  calculateChange() {
    if (this.amountReceived === null || this.amountReceived < this.totalPayable) {
      this.changeToReturn = 0;
      this.isValid = false;
    } else {
      this.changeToReturn = this.amountReceived - this.totalPayable;
      this.isValid = true;
    }
    this.validityChange.emit(this.isValid);
  }
}
