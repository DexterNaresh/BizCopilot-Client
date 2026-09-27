import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-ai-brief',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ai-container">
      <div class="header">
        <h3 class="section-title">
          <span class="material-symbols-outlined icon">auto_awesome</span>
          AI Business Brief
        </h3>
      </div>
      
      <div class="ai-card">
        <div class="content">
          <p>Sales today are <strong>{{ metrics.totalSales | currency:'INR':'symbol-narrow':'1.0-0' }}</strong> across <strong>{{ metrics.totalBills }} {{ metrics.totalBills === 1 ? 'bill' : 'bills' }}</strong>.</p>
          <p>Your average bill is <strong>{{ metrics.avgBill | currency:'INR':'symbol-narrow':'1.0-0' }}</strong>.</p>
          <p *ngIf="attention.billsOnHold > 0 || attention.productsUnavailable > 0">
            You have 
            <ng-container *ngIf="attention.billsOnHold > 0"><strong>{{ attention.billsOnHold }} {{ attention.billsOnHold === 1 ? 'bill' : 'bills' }} on hold</strong></ng-container>
            <ng-container *ngIf="attention.billsOnHold > 0 && attention.productsUnavailable > 0"> and </ng-container>
            <ng-container *ngIf="attention.productsUnavailable > 0"><strong>{{ attention.productsUnavailable }} {{ attention.productsUnavailable === 1 ? 'product is' : 'products are' }}</strong> unavailable</ng-container>.
          </p>
          <p *ngIf="attention.billsOnHold === 0 && attention.productsUnavailable === 0" class="good-text">
            Everything else looks good!
          </p>
        </div>

        <button 
          class="ai-btn" 
          (click)="onAskAi.emit()" 
          (keydown.enter)="onAskAi.emit()"
          (keydown.space)="onAskAi.emit()"
          role="button" 
          aria-label="Ask AI for more insights">
          <span class="material-symbols-outlined icon">auto_awesome</span>
          <span>Ask AI for more insights</span>
          <span class="material-symbols-outlined arrow">arrow_forward</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .ai-container {
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
      color: var(--color-primary, #5B3BEB);
      font-size: 20px;
    }

    .ai-card {
      position: relative;
      background: linear-gradient(135deg, #F5F3FF 0%, #EEF2FF 100%);
      border: 1px solid #DDD6FE;
      border-radius: var(--radius-card, 16px);
      padding: clamp(16px, 1.8vw, 22px);
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 16px;
      box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.05));
      overflow: hidden;
    }

    .ai-card::before {
      content: '';
      position: absolute;
      top: -30px;
      right: -30px;
      width: 120px;
      height: 120px;
      background: radial-gradient(circle, rgba(91, 59, 235, 0.12) 0%, rgba(255, 255, 255, 0) 70%);
      pointer-events: none;
    }

    .content p {
      font-size: 14px;
      color: #334155;
      margin: 0 0 8px 0;
      line-height: 1.55;
    }

    .content p:last-child {
      margin-bottom: 0;
    }

    .content strong {
      color: #0F172A;
      font-weight: 700;
    }

    .content .good-text {
      color: #047857;
      font-weight: 500;
    }

    .ai-btn {
      background: var(--gradient-primary, linear-gradient(135deg, #5B3BEB 0%, #4B2DC7 100%));
      color: #FFFFFF;
      border: none;
      padding: 10px 16px;
      border-radius: var(--radius-btn, 10px);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(91, 59, 235, 0.22);
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 1;
    }

    .ai-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(91, 59, 235, 0.32);
      background: linear-gradient(135deg, #4B2DC7 0%, #3B1DB7 100%);
    }

    .ai-btn .icon {
      font-size: 18px;
    }

    .ai-btn .arrow {
      margin-left: auto;
      font-size: 18px;
      transition: transform 0.2s;
    }

    .ai-btn:hover .arrow {
      transform: translateX(3px);
    }
  `]
})
export class HomeAiBriefComponent {
  @Input() metrics = { totalSales: 0, totalBills: 0, avgBill: 0 };
  @Input() attention = { billsOnHold: 0, productsUnavailable: 0 };
  @Output() onAskAi = new EventEmitter<void>();
}

