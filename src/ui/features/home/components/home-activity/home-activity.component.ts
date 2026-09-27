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
        <button class="view-all-btn" (click)="onViewAll.emit()" role="button" aria-label="View all bills">
          <span>View All</span>
          <span class="material-symbols-outlined arrow">arrow_forward</span>
        </button>
      </div>
      
      <div class="activity-card">
        <div class="activity-list" *ngIf="recentBills && recentBills.length > 0; else emptyActivity">
          <div 
            class="activity-item" 
            *ngFor="let bill of recentBills"
            (click)="onBillClick.emit(bill)"
            (keydown.enter)="onBillClick.emit(bill)"
            (keydown.space)="onBillClick.emit(bill)"
            role="button"
            tabindex="0">
            <div class="time">{{ bill.time }}</div>
            <div class="bill-id">{{ bill.id }}</div>
            <div class="amount">{{ bill.amount | currency:'INR':'symbol-narrow':'1.0-0' }}</div>
            <div class="badge" [ngClass]="(bill.method || 'cash').toLowerCase()">
              <span class="dot"></span>
              {{ bill.method }}
            </div>
            <span class="material-symbols-outlined chevron">chevron_right</span>
          </div>
        </div>

        <ng-template #emptyActivity>
          <div class="empty-state">
            <span class="material-symbols-outlined empty-icon">receipt_long</span>
            <div class="empty-title">No bills yet today</div>
            <div class="empty-sub">Completed bills will appear here.</div>
          </div>
        </ng-template>
      </div>
    </div>
  `,
  styles: [`
    .activity-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      height: 100%;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .section-title {
      margin: 0;
      font-size: clamp(16px, 1.5vw, 18px);
      font-weight: 700;
      color: #0F172A;
      letter-spacing: -0.01em;
    }

    .view-all-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: none;
      border: none;
      font-size: 13px;
      font-weight: 600;
      color: var(--color-primary, #5B3BEB);
      cursor: pointer;
      padding: 2px 6px;
      border-radius: var(--radius-sm, 6px);
      transition: background-color 0.2s;
    }

    .view-all-btn:hover {
      background: var(--color-primary-light, rgba(91, 59, 235, 0.08));
    }

    .view-all-btn .arrow {
      font-size: 16px;
    }

    .activity-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: var(--radius-card, 16px);
      flex: 1;
      overflow: hidden;
      box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.05));
      display: flex;
      flex-direction: column;
    }

    .activity-list {
      display: flex;
      flex-direction: column;
    }

    .activity-item {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border-bottom: 1px solid #F1F5F9;
      gap: 12px;
      cursor: pointer;
      transition: background-color 0.15s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .activity-item:last-child {
      border-bottom: none;
    }

    .activity-item:hover {
      background: #F8FAFC;
    }

    .activity-item:hover .chevron {
      transform: translateX(3px);
      color: var(--color-primary, #5B3BEB);
    }

    .time {
      font-size: 12px;
      color: #64748B;
      font-weight: 500;
      min-width: 68px;
    }

    .bill-id {
      font-size: 13px;
      font-weight: 600;
      color: #0F172A;
      flex: 1;
    }

    .amount {
      font-size: 13px;
      font-weight: 700;
      color: #0F172A;
      text-align: right;
      min-width: 65px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 3px 8px;
      border-radius: var(--radius-full, 999px);
      font-size: 11px;
      font-weight: 600;
      min-width: 58px;
      justify-content: center;
    }

    .badge.upi { background: #EEF2FF; color: #4338CA; }
    .badge.upi .dot { background: #4338CA; }

    .badge.cash { background: #ECFDF5; color: #047857; }
    .badge.cash .dot { background: #047857; }

    .badge.card { background: #E0F2FE; color: #0369A1; }
    .badge.card .dot { background: #0369A1; }

    .badge.mixed { background: #FFFBEB; color: #B45309; }
    .badge.mixed .dot { background: #B45309; }

    .dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
    }

    .chevron {
      color: #94A3B8;
      font-size: 18px;
      transition: transform 0.2s, color 0.2s;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px 16px;
      text-align: center;
      gap: 6px;
      flex: 1;
    }

    .empty-icon {
      font-size: 32px;
      color: #94A3B8;
      margin-bottom: 4px;
    }

    .empty-title {
      font-size: 14px;
      font-weight: 600;
      color: #0F172A;
    }

    .empty-sub {
      font-size: 12px;
      color: #64748B;
    }
  `]
})
export class HomeActivityComponent {
  @Input() recentBills: any[] = [];
  @Output() onViewAll = new EventEmitter<void>();
  @Output() onBillClick = new EventEmitter<any>();
}

