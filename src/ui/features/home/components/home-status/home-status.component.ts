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
        <p class="subtitle">Your system is running smoothly</p>
      </div>
      
      <div class="status-grid">
        <div class="status-item">
          <div class="icon-circle">
            <span class="material-symbols-outlined">check_circle</span>
          </div>
          <div class="text">
            <div class="title">Billing Ready</div>
            <div class="desc">Ready to create bills</div>
          </div>
        </div>
        
        <div class="divider"></div>
        
        <div class="status-item">
          <div class="icon-circle">
            <span class="material-symbols-outlined">check_circle</span>
          </div>
          <div class="text">
            <div class="title">Sync Up to Date</div>
            <div class="desc">Last sync 5 mins ago</div>
          </div>
        </div>
        
        <div class="divider"></div>
        
        <div class="status-item">
          <div class="icon-circle">
            <span class="material-symbols-outlined">check_circle</span>
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
      background: white;
      border: 1px solid #E5E7EB;
      border-radius: 12px;
      padding: 24px;
      display: flex;
      align-items: center;
      gap: 32px;
    }
    .header {
      width: 250px;
    }
    .section-title {
      margin: 0 0 4px 0;
      font-size: 16px;
      font-weight: 700;
      color: #111827;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .section-title .icon {
      color: #059669; /* green */
    }
    .subtitle {
      margin: 0;
      font-size: 13px;
      color: #6B7280;
    }
    .status-grid {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
    }
    .status-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .icon-circle {
      color: #16A34A;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-circle .material-symbols-outlined {
      font-size: 32px;
    }
    .title {
      font-size: 14px;
      font-weight: 600;
      color: #111827;
    }
    .desc {
      font-size: 12px;
      color: #6B7280;
    }
    .divider {
      width: 1px;
      height: 32px;
      background: #E5E7EB;
    }
    
    @media (max-width: 1023px) {
      .status-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }
      .status-grid {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
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
