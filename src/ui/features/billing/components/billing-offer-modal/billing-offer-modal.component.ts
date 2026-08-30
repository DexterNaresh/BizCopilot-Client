import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

export interface AvailableOffer {
  code: string;
  description: string;
  savingAmount: number;
}

@Component({
  selector: 'app-billing-offer-modal',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './billing-offer-modal.component.html',
  styleUrls: ['./billing-offer-modal.component.scss']
})
export class BillingOfferModalComponent implements OnInit {
  @Input() currentAppliedOfferCode: string | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() applyOffer = new EventEmitter<AvailableOffer | null>();

  selectedOfferCode: string | null = null;

  // Hardcoded mock data for the UI presentation phase
  offers: AvailableOffer[] = [
    {
      code: 'BUYMORE10',
      description: '10% off on orders above ₹500',
      savingAmount: 45.50
    },
    {
      code: 'SAVE20',
      description: '20% off on orders above ₹1,000',
      savingAmount: 120.00
    },
    {
      code: 'BIGSAVE500',
      description: '₹500 off on bills above ₹2,000',
      savingAmount: 500.00
    },
    {
      code: 'FRESH5',
      description: 'Flat ₹5 off on eligible orders',
      savingAmount: 5.00
    }
  ];

  ngOnInit(): void {
    // Sort offers by saving amount descending
    this.offers.sort((a, b) => b.savingAmount - a.savingAmount);
    
    // Initialize selection with the currently applied offer
    this.selectedOfferCode = this.currentAppliedOfferCode;
  }

  selectOffer(code: string): void {
    if (this.selectedOfferCode === code) {
      this.selectedOfferCode = null;
    } else {
      this.selectedOfferCode = code;
    }
  }

  onCancel(): void {
    this.close.emit();
  }

  onApply(): void {
    if (!this.selectedOfferCode) {
      this.applyOffer.emit(null);
    } else {
      const selected = this.offers.find(o => o.code === this.selectedOfferCode);
      this.applyOffer.emit(selected || null);
    }
  }
}
