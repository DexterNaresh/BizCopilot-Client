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
        <div 
          class="action-card" 
          (click)="onNavigate.emit('products')" 
          (keydown.enter)="onNavigate.emit('products')"
          (keydown.space)="onNavigate.emit('products')"
          role="button" 
          tabindex="0"
          aria-label="Manage Products">
          <div class="icon-box sky">
            <span class="material-symbols-outlined icon">inventory_2</span>
          </div>
          <div class="text">
            <div class="title">Products</div>
            <div class="subtitle">Manage products</div>
          </div>
          <span class="material-symbols-outlined chevron">chevron_right</span>
        </div>

        <div 
          class="action-card" 
          (click)="onNavigate.emit('customers')" 
          (keydown.enter)="onNavigate.emit('customers')"
          (keydown.space)="onNavigate.emit('customers')"
          role="button" 
          tabindex="0"
          aria-label="Manage Customers">
          <div class="icon-box emerald">
            <span class="material-symbols-outlined icon">group</span>
          </div>
          <div class="text">
            <div class="title">Customers</div>
            <div class="subtitle">View and manage</div>
          </div>
          <span class="material-symbols-outlined chevron">chevron_right</span>
        </div>

        <div 
          class="action-card" 
          (click)="onNavigate.emit('offers')" 
          (keydown.enter)="onNavigate.emit('offers')"
          (keydown.space)="onNavigate.emit('offers')"
          role="button" 
          tabindex="0"
          aria-label="Manage Offers">
          <div class="icon-box amber">
            <span class="material-symbols-outlined icon">sell</span>
          </div>
          <div class="text">
            <div class="title">Offers</div>
            <div class="subtitle">Create and manage</div>
          </div>
          <span class="material-symbols-outlined chevron">chevron_right</span>
        </div>

        <div 
          class="action-card" 
          (click)="onNavigate.emit('reports')" 
          (keydown.enter)="onNavigate.emit('reports')"
          (keydown.space)="onNavigate.emit('reports')"
          role="button" 
          tabindex="0"
          aria-label="View Business Reports">
          <div class="icon-box indigo">
            <span class="material-symbols-outlined icon">bar_chart</span>
          </div>
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
      gap: 12px;
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

    .actions-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }

    .action-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: var(--radius-card, 16px);
      padding: clamp(14px, 1.2vw, 18px);
      display: flex;
      align-items: center;
      gap: 14px;
      cursor: pointer;
      box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.05));
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .action-card:hover {
      transform: translateY(-2px);
      border-color: #CBD5E1;
      box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
    }

    .action-card:hover .chevron {
      transform: translateX(3px);
      color: var(--color-primary, #5B3BEB);
    }

    .action-card:focus-visible {
      outline: 2px solid var(--color-primary, #5B3BEB);
      outline-offset: 2px;
    }

    .icon-box {
      width: 42px;
      height: 42px;
      border-radius: var(--radius-md, 10px);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .icon-box.sky { background: #E0F2FE; color: #0284C7; }
    .icon-box.emerald { background: #ECFDF5; color: #10B981; }
    .icon-box.amber { background: #FFFBEB; color: #D97706; }
    .icon-box.indigo { background: #EEF2FF; color: #4F46F5; }

    .icon-box .icon {
      font-size: 22px;
    }

    .text {
      flex: 1;
      min-width: 0;
    }

    .title {
      font-size: 15px;
      font-weight: 600;
      color: #0F172A;
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .subtitle {
      font-size: 12px;
      color: #64748B;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .chevron {
      color: #94A3B8;
      font-size: 20px;
      transition: transform 0.2s, color 0.2s;
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

