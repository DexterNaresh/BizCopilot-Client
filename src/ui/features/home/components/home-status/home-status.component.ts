import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-status',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="status-container">
      <div class="header">
        <h3 class="section-title">
          <span class="material-symbols-outlined icon">monitor_heart</span>
          Business Status
        </h3>
        <p class="subtitle">Your POS is running smoothly</p>
      </div>
      
      <div class="status-grid">
        <div class="status-item">
          <div class="icon-circle emerald">
            <span class="material-symbols-outlined icon">check_circle</span>
          </div>
          <div class="text">
            <div class="title">Billing Ready</div>
            <div class="desc">Ready to create bills</div>
          </div>
        </div>
        
        <div class="divider"></div>
        
        <div class="status-item">
          <div class="icon-circle indigo">
            <span class="material-symbols-outlined icon">sync</span>
          </div>
          <div class="text">
            <div class="title">Sync Up to Date</div>
            <div class="desc">Last sync 5 mins ago</div>
          </div>
        </div>
        
        <div class="divider"></div>
        
        <div class="status-item">
          <div class="icon-circle sky">
            <span class="material-symbols-outlined icon">print</span>
          </div>
          <div class="text">
            <div class="title">Printer Ready</div>
            <div class="desc">Connected</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .status-container {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: var(--radius-card, 16px);
      padding: clamp(16px, 2vw, 22px) clamp(20px, 2.5vw, 28px);
      display: flex;
      align-items: center;
      gap: clamp(20px, 3vw, 36px);
      box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.05));
    }

    .header {
      min-width: 200px;
    }

    .section-title {
      margin: 0 0 2px 0;
      font-size: clamp(15px, 1.4vw, 17px);
      font-weight: 700;
      color: #0F172A;
      display: flex;
      align-items: center;
      gap: 8px;
      letter-spacing: -0.01em;
    }

    .section-title .icon {
      color: #10B981;
      font-size: 20px;
    }

    .subtitle {
      margin: 0;
      font-size: 12px;
      color: #64748B;
      font-weight: 400;
    }

    .status-grid {
      display: flex;
      flex: 1;
      justify-content: space-around;
      align-items: center;
    }

    .status-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .icon-circle {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .icon-circle.emerald { background: #ECFDF5; color: #10B981; }
    .icon-circle.indigo { background: #EEF2FF; color: #4F46F5; }
    .icon-circle.sky { background: #E0F2FE; color: #0284C7; }

    .icon-circle .icon {
      font-size: 20px;
    }

    .title {
      font-size: 13px;
      font-weight: 600;
      color: #0F172A;
    }

    .desc {
      font-size: 11px;
      color: #64748B;
    }

    .divider {
      width: 1px;
      height: 32px;
      background: #E2E8F0;
    }

    @media (max-width: 1023px) {
      .status-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }
      .status-grid {
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
        width: 100%;
      }
      .divider {
        width: 100%;
        height: 1px;
      }
    }
  `]
})
export class HomeStatusComponent {}

