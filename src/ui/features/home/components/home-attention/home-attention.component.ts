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
          <span class="material-symbols-outlined icon">error_outline</span>
          Needs Your Attention
        </h3>
      </div>
      
      <div class="attention-card" *ngIf="billsOnHold > 0 || productsUnavailable > 0; else noAttention">
        <div 
          class="attention-item" 
          *ngIf="billsOnHold > 0" 
          (click)="onNavigate.emit('billing')" 
          (keydown.enter)="onNavigate.emit('billing')"
          (keydown.space)="onNavigate.emit('billing')"
          role="button" 
          tabindex="0"
          aria-label="Review bills on hold">
          <div class="item-icon-box rose">
            <span class="material-symbols-outlined icon">receipt_long</span>
          </div>
          <div class="item-text">
            <div class="title">{{ billsOnHold }} {{ billsOnHold === 1 ? 'Bill' : 'Bills' }} on Hold</div>
            <div class="subtitle">Review and complete held bills</div>
          </div>
          <span class="material-symbols-outlined chevron">chevron_right</span>
        </div>
        
        <div class="divider" *ngIf="billsOnHold > 0 && productsUnavailable > 0"></div>
        
        <div 
          class="attention-item" 
          *ngIf="productsUnavailable > 0" 
          (click)="onNavigate.emit('products')" 
          (keydown.enter)="onNavigate.emit('products')"
          (keydown.space)="onNavigate.emit('products')"
          role="button" 
          tabindex="0"
          aria-label="Review unavailable products">
          <div class="item-icon-box amber">
            <span class="material-symbols-outlined icon">warning</span>
          </div>
          <div class="item-text">
            <div class="title">{{ productsUnavailable }} {{ productsUnavailable === 1 ? 'Product' : 'Products' }} Unavailable</div>
            <div class="subtitle">Review unavailable products</div>
          </div>
          <span class="material-symbols-outlined chevron">chevron_right</span>
        </div>
      </div>
      
      <ng-template #noAttention>
        <div class="attention-card empty-state">
          <div class="success-icon-box">
            <span class="material-symbols-outlined success-icon">check_circle</span>
          </div>
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
      gap: 12px;
      height: 100%;
    }

    .header {
      display: flex;
      align-items: center;
    }

    .section-title {
      margin: 0;
      font-size: clamp(16px, 1.5vw, 18px);
      font-weight: 700;
      color: #0F172A;
      display: flex;
      align-items: center;
      gap: 8px;
      letter-spacing: -0.01em;
    }

    .section-title .icon {
      font-size: 20px;
      color: #E11D48;
    }

    .attention-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: var(--radius-card, 16px);
      padding: 6px 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.05));
    }

    .attention-card.empty-state {
      background: #F0FDF4;
      border-color: #BBF7D0;
      flex-direction: row;
      align-items: center;
      padding: 20px;
      gap: 16px;
    }

    .success-icon-box {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #DCFCE7;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .success-icon {
      color: #10B981;
      font-size: 24px;
    }

    .attention-item {
      display: flex;
      align-items: center;
      padding: 14px 20px;
      gap: 14px;
      cursor: pointer;
      transition: background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .attention-item:hover {
      background: #F8FAFC;
    }

    .attention-item:hover .chevron {
      transform: translateX(3px);
      color: var(--color-primary, #5B3BEB);
    }

    .attention-item:focus-visible {
      outline: 2px solid var(--color-primary, #5B3BEB);
      outline-offset: -2px;
    }

    .item-icon-box {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .item-icon-box.rose { background: #FFF1F2; color: #E11D48; border: 1px solid #FECDD3; }
    .item-icon-box.amber { background: #FFFBEB; color: #D97706; border: 1px solid #FDE68A; }

    .item-icon-box .icon {
      font-size: 20px;
    }

    .item-text {
      flex: 1;
    }

    .title {
      font-size: 14px;
      font-weight: 700;
      color: #0F172A;
      margin-bottom: 2px;
    }

    .subtitle {
      font-size: 12px;
      color: #64748B;
    }

    .chevron {
      color: #94A3B8;
      font-size: 20px;
      transition: transform 0.2s, color 0.2s;
    }

    .divider {
      height: 1px;
      background: #F1F5F9;
      margin: 0 20px;
    }
  `]
})
export class HomeAttentionComponent {
  @Input() billsOnHold = 0;
  @Input() productsUnavailable = 0;
  @Output() onNavigate = new EventEmitter<string>();
}

