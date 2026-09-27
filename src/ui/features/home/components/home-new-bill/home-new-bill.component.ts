import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-new-bill',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="new-bill-card" 
      (click)="onNewBill.emit()" 
      (keydown.enter)="onNewBill.emit()"
      (keydown.space)="onNewBill.emit()"
      role="button" 
      tabindex="0"
      aria-label="Start new bill now">
      
      <div class="content">
        <div class="icon-container">
          <span class="material-symbols-outlined icon">add_shopping_cart</span>
        </div>
        <div class="text-content">
          <h2>New Bill</h2>
          <p class="subtitle">Start billing now</p>
          <span class="meta-tag">Fast • Simple • Reliable</span>
        </div>
      </div>
      
      <div class="arrow-container">
        <span class="material-symbols-outlined arrow">arrow_forward</span>
      </div>
    </div>
  `,
  styles: [`
    .new-bill-card {
      position: relative;
      background: linear-gradient(135deg, #4F46F5 0%, #3730A3 100%);
      border-radius: var(--radius-card, 16px);
      padding: clamp(20px, 2.5vw, 28px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #FFFFFF;
      cursor: pointer;
      box-shadow: 0 8px 24px rgba(79, 70, 245, 0.28);
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .new-bill-card::before {
      content: '';
      position: absolute;
      top: -40%;
      right: -20%;
      width: 180px;
      height: 180px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 70%);
      pointer-events: none;
    }

    .new-bill-card:hover {
      transform: translateY(-3px) scale(1.01);
      box-shadow: 0 12px 32px rgba(79, 70, 245, 0.38);
    }

    .new-bill-card:focus-visible {
      outline: 3px solid #818CF8;
      outline-offset: 2px;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 14px;
      z-index: 1;
    }

    .icon-container {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      border-radius: var(--radius-md, 12px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .icon-container .icon {
      font-size: 26px;
      color: #FFFFFF;
    }

    .text-content h2 {
      margin: 0 0 2px 0;
      font-size: clamp(20px, 2vw, 24px);
      font-weight: 800;
      letter-spacing: -0.01em;
      line-height: 1.2;
    }

    .text-content .subtitle {
      margin: 0 0 8px 0;
      font-size: 14px;
      opacity: 0.92;
      font-weight: 500;
    }

    .meta-tag {
      display: inline-block;
      font-size: 11px;
      padding: 3px 8px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-full, 999px);
      letter-spacing: 0.02em;
      font-weight: 500;
      width: fit-content;
    }

    .arrow-container {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #FFFFFF;
      color: #4F46F5;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s;
      z-index: 1;
      flex-shrink: 0;
    }

    .new-bill-card:hover .arrow-container {
      transform: translateX(4px);
      background: #EEF2FF;
    }

    .arrow-container .arrow {
      font-size: 20px;
    }

    @media (max-width: 1023px) {
      .new-bill-card {
        padding: 20px;
      }
      .content {
        flex-direction: row;
        align-items: center;
        gap: 16px;
      }
      .meta-tag {
        display: none;
      }
    }
  `]
})
export class HomeNewBillComponent {
  @Output() onNewBill = new EventEmitter<void>();
}

