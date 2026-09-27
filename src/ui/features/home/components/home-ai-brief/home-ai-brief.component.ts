import { Component, Input } from '@angular/core';
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
          <p>Sales today are <strong>{{ metrics.totalSales | currency:'INR':'symbol-narrow':'1.0-0' }}</strong> across <strong>{{ metrics.totalBills }} bills</strong>. Your average bill is <strong>{{ metrics.avgBill | currency:'INR':'symbol-narrow':'1.0-0' }}</strong>.</p>
          <p *ngIf="attention.billsOnHold > 0 || attention.productsUnavailable > 0">
            You have 
            <ng-container *ngIf="attention.billsOnHold > 0"><strong>{{ attention.billsOnHold }} bills on hold</strong></ng-container>
            <ng-container *ngIf="attention.billsOnHold > 0 && attention.productsUnavailable > 0"> and </ng-container>
            <ng-container *ngIf="attention.productsUnavailable > 0"><strong>{{ attention.productsUnavailable }} products</strong> are unavailable</ng-container>.
          </p>
          <p *ngIf="attention.billsOnHold === 0 && attention.productsUnavailable === 0">
            Everything else looks good!
          </p>
        </div>
        <button class="ai-btn">
          <span class="material-symbols-outlined">auto_awesome</span>
          Ask AI for more insights
          <span class="material-symbols-outlined arrow">arrow_forward</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .ai-container {
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
      color: #111827;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .section-title .icon {
      color: #5B3BEB;
      font-size: 20px;
    }
    .ai-card {
      background: #F5F3FF;
      border: 1px solid #EDE9FE;
      border-radius: 12px;
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .content p {
      font-size: 15px;
      color: #4B5563;
      margin: 0 0 12px 0;
      line-height: 1.5;
    }
    .content p:last-child {
      margin-bottom: 24px;
    }
    .content strong {
      color: #111827;
      font-weight: 600;
    }
    .ai-btn {
      background: #5B3BEB;
      color: white;
      border: none;
      padding: 12px 16px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .ai-btn:hover {
      background: #4B2DC7;
    }
    .ai-btn .arrow {
      margin-left: auto;
      font-size: 18px;
    }
  `]
})
export class HomeAiBriefComponent {
  @Input() metrics = { totalSales: 0, totalBills: 0, avgBill: 0 };
  @Input() attention = { billsOnHold: 0, productsUnavailable: 0 };
}
