import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="banner-container">
      <div class="banner-content">
        <div class="store-badge">
          <span class="material-symbols-outlined store-icon">storefront</span>
          <span class="store-name">{{ businessName }}</span>
          <span class="status-dot"></span>
          <span class="status-text">Online POS</span>
        </div>
        <h1>{{ greetingPrefix }}, {{ userName }}!</h1>
        <p class="subtitle">Here's your business at a glance.</p>
      </div>
      <button class="ai-btn" (click)="onAskAi.emit()" role="button" aria-label="Ask AI Assistant">
        <span class="material-symbols-outlined icon">auto_awesome</span>
        <span>Ask AI</span>
      </button>
    </div>
  `,
  styles: [`
    .banner-container {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: clamp(20px, 3vw, 28px) clamp(24px, 4vw, 36px);
      background: linear-gradient(135deg, #FFFFFF 0%, #F5F3FF 50%, #EEF2FF 100%);
      border-radius: var(--radius-card, 16px);
      border: 1px solid rgba(226, 232, 240, 0.9);
      box-shadow: var(--shadow-card, 0 4px 12px rgba(15, 23, 42, 0.05));
      overflow: hidden;
      gap: 16px;
    }

    .banner-container::before {
      content: '';
      position: absolute;
      top: -50px;
      right: -50px;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(91, 59, 235, 0.08) 0%, rgba(255, 255, 255, 0) 70%);
      pointer-events: none;
    }

    .banner-content {
      display: flex;
      flex-direction: column;
      gap: 6px;
      max-width: 70%;
    }

    .store-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid #E2E8F0;
      border-radius: var(--radius-full, 999px);
      font-size: 12px;
      font-weight: 500;
      color: #475569;
      width: fit-content;
      margin-bottom: 2px;
    }

    .store-icon {
      font-size: 16px;
      color: var(--color-primary, #5B3BEB);
    }

    .store-name {
      font-weight: 600;
      color: #0F172A;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--color-success, #10B981);
    }

    .status-text {
      font-size: 11px;
      color: #64748B;
    }

    h1 {
      font-size: clamp(22px, 2.5vw, 30px);
      font-weight: 800;
      color: #0F172A;
      margin: 0;
      line-height: 1.25;
      letter-spacing: -0.02em;
    }

    .subtitle {
      font-size: clamp(13px, 1.2vw, 15px);
      color: #475569;
      margin: 0;
      font-weight: 400;
    }

    .ai-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--gradient-primary, linear-gradient(135deg, #5B3BEB 0%, #4B2DC7 100%));
      color: #FFFFFF;
      border: none;
      padding: 10px 20px;
      border-radius: var(--radius-btn, 10px);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(91, 59, 235, 0.25);
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      white-space: nowrap;
      height: 42px;
    }

    .ai-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(91, 59, 235, 0.35);
      background: linear-gradient(135deg, #4B2DC7 0%, #3B1DB7 100%);
    }

    .ai-btn:active {
      transform: translateY(0);
    }

    .ai-btn .icon {
      font-size: 18px;
    }

    @media (max-width: 599px) {
      .banner-container {
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
      }

      .banner-content {
        max-width: 100%;
      }

      .ai-btn {
        width: 100%;
        justify-content: center;
        margin-top: 4px;
      }
    }
  `]
})
export class HomeBannerComponent {
  @Input() userName = 'Owner';
  @Input() businessName = 'Green Bites Café';
  @Input() greetingPrefix = 'Good morning';
  @Output() onAskAi = new EventEmitter<void>();
}

