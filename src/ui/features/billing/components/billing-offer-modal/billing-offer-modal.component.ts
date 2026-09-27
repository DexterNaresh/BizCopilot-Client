import { Component, EventEmitter, Input, OnInit, Output, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { OfferApplication } from '@runtime/offer/application/offer.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';

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
  @Input() subtotal: number = 0;
  @Output() close = new EventEmitter<void>();
  @Output() applyOffer = new EventEmitter<AvailableOffer | null>();

  selectedOfferCode: string | null = null;
  offers: AvailableOffer[] = [];

  constructor(
    @Inject(OfferApplication) private offerApp: OfferApplication,
    @Inject(ISessionService) private sessionService: ISessionService
  ) { }

  get currentUserId(): string {
    const user = this.sessionService.getCurrentUser();
    if (!user) throw new Error('No active session');
    return user.id;
  }

  ngOnInit(): void {
    const response = this.offerApp.getAllOffers({ userId: this.currentUserId });
    if (response.success && response.data) {
      // Filter for ACTIVE offers and calculate savingAmount
      this.offers = response.data
        .filter(o => o.status === 'ACTIVE')
        .map(o => {
          let savings = 0;
          if (o.discount_flat) savings += o.discount_flat;
          if (o.discount_percentage) savings += (this.subtotal * o.discount_percentage) / 100;

          if (savings > this.subtotal) savings = this.subtotal;

          return {
            code: o.name,
            description: o.description || o.name,
            savingAmount: savings
          };
        });

      this.offers.sort((a, b) => b.savingAmount - a.savingAmount);
    }

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
