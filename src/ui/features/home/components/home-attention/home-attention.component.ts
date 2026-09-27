import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-attention',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="attention-container">
      <div class="header">
        <h3 class="section-title">
          <span class="material-symbols-outlined icon">warning</span>
          Needs Your Attention
        </h3>
      </div>
      
      <div class="attention-card" *ngIf="billsOnHold > 0 || productsUnavailable > 0; else noAttention">
        <div class="attention-item" *ngIf="billsOnHold > 0" (click)="onNavigate.emit('billing')" role="button" tabindex="0">
          <div class="item-icon-box pink">
            <span class="material-symbols-outlined">receipt_long</span>
          </div>
          <div class="item-text">
            <div class="title">{{ billsOnHold }} Bills on Hold</div>
            <div class="subtitle">Review and complete held bills</div>
          </div>
          <span class="material-symbols-outlined chevron">chevron_right</span>
        </div>
        
        <div class="divider" *ngIf="billsOnHold > 0 && productsUnavailable > 0"></div>
        
        <div class="attention-item" *ngIf="productsUnavailable > 0" (click)="onNavigate.emit('products')" role="button" tabindex="0">
          <div class="item-icon-box amber">
            <span class="material-symbols-outlined">warning</span>
          </div>
          <div class="item-text">
            <div class="title">{{ productsUnavailable }} Products Unavailable</div>
            <div class="subtitle">Review unavailable products</div>
          </div>
          <span class="material-symbols-outlined chevron">chevron_right</span>
        </div>
      </div>
      
      <ng-template #noAttention>
        <div class="attention-card empty-state">
          <span class="material-symbols-outlined success-icon">check_circle</span>
          <div class="item-text">
            <div class="title">Nothing needs your attention</div>
            <div class="subtitle">Everything looks good.</div>
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .attention-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      height: 100%;
    }
    .header {
      display: flex;
      align-items: center;
    }
    .section-title {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      color: #DC2626; /* red */
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .section-title .icon {
      font-size: 20px;
    }
    .attention-card {
      background: #FEF2F2;
      border: 1px solid #FECACA;
      border-radius: 12px;
      padding: 8px 0;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .attention-card.empty-state {
      background: #F0FDF4;
      border-color: #BBF7D0;
      flex-direction: row;
      align-items: center;
      padding: 24px 20px;
      gap: 16px;
    }
    .success-icon {
      color: #16A34A;
      font-size: 28px;
    }
    .attention-item {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      gap: 16px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .attention-item:hover {
      background: #FEE2E2;
    }
    .item-icon-box {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
    }
    .item-icon-box.pink { color: #BE185D; border: 1px solid #FBCFE8; }
    .item-icon-box.amber { color: #D97706; border: 1px solid #FDE68A; }
    
    .item-text {
      flex: 1;
    }
    .title {
      font-size: 15px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 2px;
    }
    .subtitle {
      font-size: 13px;
      color: #4B5563;
    }
    .chevron {
      color: #9CA3AF;
      font-size: 20px;
    }
    .divider {
      height: 1px;
      background: #FECACA;
      margin: 0 20px;
    }
  `]
})
export class HomeAttentionComponent {
  @Input() billsOnHold = 3;
  @Input() productsUnavailable = 2;
  @Output() onNavigate = new EventEmitter<string>();
}
