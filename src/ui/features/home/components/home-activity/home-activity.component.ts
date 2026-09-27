import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-activity',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="activity-container">
      <div class="header">
        <h3 class="section-title">Today's Activity</h3>
        <a class="view-all" href="javascript:void(0)" (click)="onViewAll.emit()">View All</a>
      </div>
      
      <div class="activity-card">
        <div class="activity-list">
          <div class="activity-item" *ngFor="let bill of recentBills">
            <div class="time">{{ bill.time }}</div>
            <div class="bill-id">{{ bill.id }}</div>
            <div class="amount">{{ bill.amount | currency:'INR':'symbol-narrow':'1.0-0' }}</div>
            <div class="badge" [ngClass]="bill.method.toLowerCase()">
              <span class="dot"></span>
              {{ bill.method }}
            </div>
            <span class="material-symbols-outlined chevron">chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .activity-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      height: 100%;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .section-title {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      color: #111827;
    }
    .view-all {
      font-size: 14px;
      color: #5B3BEB;
      text-decoration: none;
      font-weight: 500;
    }
    .activity-card {
      background: white;
      border: 1px solid #E5E7EB;
      border-radius: 12px;
      flex: 1;
      overflow: hidden;
    }
    .activity-list {
      display: flex;
      flex-direction: column;
    }
    .activity-item {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border-bottom: 1px solid #F3F4F6;
      gap: 12px;
      cursor: pointer;
    }
    .activity-item:last-child {
      border-bottom: none;
    }
    .activity-item:hover {
      background: #F9FAFB;
    }
    .time {
      font-size: 13px;
      color: #6B7280;
      width: 70px;
    }
    .bill-id {
      font-size: 14px;
      font-weight: 500;
      color: #374151;
      flex: 1;
    }
    .amount {
      font-size: 14px;
      font-weight: 600;
      color: #111827;
      width: 60px;
      text-align: right;
    }
    .badge {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      width: 60px;
      justify-content: flex-start;
    }
    .badge.upi { background: #E0E7FF; color: #4338CA; }
    .badge.upi .dot { background: #4338CA; }
    .badge.cash { background: #DCFCE7; color: #15803D; }
    .badge.cash .dot { background: #15803D; }
    .badge.card { background: #E0F2FE; color: #0369A1; }
    .badge.card .dot { background: #0369A1; }
    
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
    .chevron {
      color: #9CA3AF;
      font-size: 18px;
    }
  `]
})
export class HomeActivityComponent {
  @Input() recentBills: any[] = [
    { time: '10:42 AM', id: '#1042', amount: 850, method: 'UPI' },
    { time: '10:31 AM', id: '#1041', amount: 320, method: 'Cash' },
    { time: '10:18 AM', id: '#1040', amount: 1240, method: 'Card' },
    { time: '09:56 AM', id: '#1039', amount: 560, method: 'UPI' },
    { time: '09:21 AM', id: '#1038', amount: 420, method: 'Cash' }
  ];
  @Output() onViewAll = new EventEmitter<void>();
}
