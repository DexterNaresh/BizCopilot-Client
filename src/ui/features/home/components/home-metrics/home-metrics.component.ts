import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-metrics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="metrics-container">
      <div class="header">
        <h3 class="section-title">Today's Business</h3>
        <span class="live-pill">
          <span class="dot"></span>
          Live Today
        </span>
      </div>

      <div class="metrics-grid">
        <div class="metric-card indigo">
          <div class="icon-wrapper">
            <span class="material-symbols-outlined icon">bar_chart</span>
          </div>
          <div class="metric-data">
            <div class="value">{{ totalSales | currency:'INR':'symbol-narrow':'1.0-0' }}</div>
            <div class="label">Total Sales</div>
          </div>
        </div>

        <div class="metric-card emerald">
          <div class="icon-wrapper">
            <span class="material-symbols-outlined icon">receipt_long</span>
          </div>
          <div class="metric-data">
            <div class="value">{{ totalBills }}</div>
            <div class="label">Bills</div>
          </div>
        </div>

        <div class="metric-card amber">
          <div class="icon-wrapper">
            <span class="material-symbols-outlined icon">currency_rupee</span>
          </div>
          <div class="metric-data">
            <div class="value">{{ avgBill | currency:'INR':'symbol-narrow':'1.0-0' }}</div>
            <div class="label">Average Bill</div>
          </div>
        </div>

        <div class="metric-card rose">
          <div class="icon-wrapper">
            <span class="material-symbols-outlined icon">sell</span>
          </div>
          <div class="metric-data">
            <div class="value">{{ discountGiven | currency:'INR':'symbol-narrow':'1.0-0' }}</div>
            <div class="label">Discount Given</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .metrics-container {
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

    .live-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 500;
      color: #475569;
      background: #F1F5F9;
      padding: 3px 8px;
      border-radius: var(--radius-full, 999px);
    }

    .live-pill .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--color-success, #10B981);
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      flex: 1;
    }

    .metric-card {
      background: #FFFFFF;
      border-radius: var(--radius-card, 16px);
      padding: clamp(14px, 1.5vw, 20px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 12px;
      box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.05));
      border: 1px solid #E2E8F0;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .metric-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
      border-color: #CBD5E1;
    }

    .metric-card.indigo .icon-wrapper { background: #EEF2FF; color: #4F46F5; }
    .metric-card.emerald .icon-wrapper { background: #ECFDF5; color: #10B981; }
    .metric-card.amber .icon-wrapper { background: #FFFBEB; color: #D97706; }
    .metric-card.rose .icon-wrapper { background: #FFF1F2; color: #E11D48; }

    .icon-wrapper {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-md, 10px);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .icon-wrapper .icon {
      font-size: 22px;
    }

    .metric-data .value {
      font-size: clamp(20px, 2vw, 26px);
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 2px;
      letter-spacing: -0.02em;
      line-height: 1.15;
    }

    .metric-data .label {
      font-size: 13px;
      font-weight: 500;
      color: #64748B;
    }

    @media (max-width: 1023px) {
      .metrics-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .metric-card {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }
    }
  `]
})
export class HomeMetricsComponent {
  @Input() totalSales = 0;
  @Input() totalBills = 0;
  @Input() avgBill = 0;
  @Input() discountGiven = 0;
}

