import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-new-bill',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="new-bill-card" (click)="onNewBill.emit()" role="button" tabindex="0">
      <div class="content">
        <div class="icon-container">
          <span class="material-symbols-outlined">add_shopping_cart</span>
        </div>
        <div class="text-content">
          <h2>New Bill</h2>
          <p class="subtitle">Start billing now</p>
          <p class="meta">Fast • Simple • Reliable</p>
        </div>
      </div>
      <div class="arrow-container">
        <span class="material-symbols-outlined">arrow_forward</span>
      </div>
    </div>
  `,
  styles: [`
    .new-bill-card {
      background: linear-gradient(135deg, #6C4EEB 0%, #4B2DC7 100%);
      border-radius: 16px;
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 12px rgba(91, 59, 235, 0.2);
      height: 100%;
      box-sizing: border-box;
    }
    .new-bill-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(91, 59, 235, 0.3);
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .icon-container {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 12px;
    }
    .icon-container .material-symbols-outlined {
      font-size: 28px;
    }
    .text-content h2 {
      margin: 0 0 4px 0;
      font-size: 24px;
      font-weight: 700;
    }
    .text-content .subtitle {
      margin: 0 0 8px 0;
      font-size: 16px;
      opacity: 0.9;
    }
    .text-content .meta {
      margin: 0;
      font-size: 12px;
      opacity: 0.7;
    }
    .arrow-container {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: white;
      color: #5B3BEB;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 1023px) {
      .content {
        flex-direction: row;
        align-items: center;
      }
      .text-content .meta {
        display: none;
      }
    }
  `]
})
export class HomeNewBillComponent {
  @Output() onNewBill = new EventEmitter<void>();
}
