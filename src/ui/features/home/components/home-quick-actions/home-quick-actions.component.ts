import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-quick-actions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="quick-actions-container">
      <div class="header">
        <h3 class="section-title">Quick Actions</h3>
      </div>
      <div class="actions-grid">
        <div class="action-card" (click)="onNavigate.emit('products')" role="button" tabindex="0">
          <div class="icon-box blue"><span class="material-symbols-outlined">inventory_2</span></div>
          <div class="text">
            <div class="title">Products</div>
            <div class="subtitle">Manage products</div>
          </div>
          <span class="material-symbols-outlined chevron">chevron_right</span>
        </div>
        <div class="action-card" (click)="onNavigate.emit('customers')" role="button" tabindex="0">
          <div class="icon-box green"><span class="material-symbols-outlined">group</span></div>
          <div class="text">
            <div class="title">Customers</div>
            <div class="subtitle">View and manage</div>
          </div>
          <span class="material-symbols-outlined chevron">chevron_right</span>
        </div>
        <div class="action-card" (click)="onNavigate.emit('offers')" role="button" tabindex="0">
          <div class="icon-box orange"><span class="material-symbols-outlined">local_offer</span></div>
          <div class="text">
            <div class="title">Offers</div>
            <div class="subtitle">Create and manage</div>
          </div>
          <span class="material-symbols-outlined chevron">chevron_right</span>
        </div>
        <div class="action-card" (click)="onNavigate.emit('reports')" role="button" tabindex="0">
          <div class="icon-box indigo"><span class="material-symbols-outlined">bar_chart</span></div>
          <div class="text">
            <div class="title">Reports</div>
            <div class="subtitle">View business reports</div>
          </div>
          <span class="material-symbols-outlined chevron">chevron_right</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .quick-actions-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
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
    .actions-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
    .action-card {
      background: white;
      border: 1px solid #F3F4F6;
      border-radius: 12px;
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .action-card:hover {
      border-color: #E5E7EB;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .icon-box {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-box.blue { background: #E0F2FE; color: #0284C7; }
    .icon-box.green { background: #DCFCE7; color: #16A34A; }
    .icon-box.orange { background: #FFEDD5; color: #EA580C; }
    .icon-box.indigo { background: #E0E7FF; color: #4F46E5; }
    
    .text {
      flex: 1;
    }
    .title {
      font-size: 15px;
      font-weight: 600;
      color: #111827;
      margin-bottom: 2px;
    }
    .subtitle {
      font-size: 12px;
      color: #6B7280;
    }
    .chevron {
      color: #9CA3AF;
      font-size: 20px;
    }
    @media (max-width: 1023px) {
      .actions-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class HomeQuickActionsComponent {
  @Output() onNavigate = new EventEmitter<string>();
}
