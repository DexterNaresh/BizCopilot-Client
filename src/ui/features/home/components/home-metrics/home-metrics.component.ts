import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-metrics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="metrics-container">
      <h3 class="section-title">Today's Business</h3>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="icon-wrapper blue">
            <span class="material-symbols-outlined">bar_chart</span>
          </div>
          <div class="metric-data">
            <div class="value">{{ totalSales | currency:'INR':'symbol-narrow':'1.0-0' }}</div>
            <div class="label">Total Sales</div>
          </div>
        </div>
        <div class="metric-card">
          <div class="icon-wrapper green">
            <span class="material-symbols-outlined">receipt_long</span>
          </div>
          <div class="metric-data">
            <div class="value">{{ totalBills }}</div>
            <div class="label">Bills</div>
          </div>
        </div>
        <div class="metric-card">
          <div class="icon-wrapper orange">
            <span class="material-symbols-outlined">currency_rupee</span>
          </div>
          <div class="metric-data">
            <div class="value">{{ avgBill | currency:'INR':'symbol-narrow':'1.0-0' }}</div>
            <div class="label">Average Bill</div>
          </div>
        </div>
        <div class="metric-card">
          <div class="icon-wrapper red">
            <span class="material-symbols-outlined">local_offer</span>
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
      gap: 16px;
      height: 100%;
    }
    .section-title {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      color: #111827;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      flex: 1;
    }
    .metric-card {
      background: white;
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      border: 1px solid #F3F4F6;
    }
    .icon-wrapper {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-wrapper.blue { background: #E0E7FF; color: #4338CA; }
    .icon-wrapper.green { background: #D1FAE5; color: #059669; }
    .icon-wrapper.orange { background: #FFEDD5; color: #C2410C; }
    .icon-wrapper.red { background: #FCE7F3; color: #BE185D; }
    
    .metric-data .value {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 4px;
    }
    .metric-data .label {
      font-size: 13px;
      color: #6B7280;
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
  @Input() totalSales = 18450;
  @Input() totalBills = 42;
  @Input() avgBill = 439;
  @Input() discountGiven = 320;
}
