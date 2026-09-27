import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="banner-container">
      <div class="banner-content">
        <h1>Good morning, Naresh!</h1>
        <p class="subtitle">Here's your business at a glance.</p>
        <p class="business-name">Green Bites Café</p>
      </div>
      <button class="ai-btn">
        <span class="material-symbols-outlined">auto_awesome</span>
        Ask AI
      </button>
    </div>
  `,
  styles: [`
    .banner-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 32px;
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0) 100%), url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
      border-radius: 12px;
      margin-bottom: 24px;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);
    }
    .banner-content {
      max-width: 60%;
    }
    h1 {
      font-size: 32px;
      font-weight: 800;
      color: #111827;
      margin: 0 0 8px 0;
      line-height: 1.2;
    }
    .subtitle {
      font-size: 18px;
      color: #374151;
      margin: 0 0 4px 0;
    }
    .business-name {
      font-size: 14px;
      color: #6B7280;
      margin: 0;
      font-weight: 500;
    }
    .ai-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: #5B3BEB;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .ai-btn:hover {
      background-color: #4B2DC7;
    }
    @media (max-width: 599px) {
      .banner-container {
        padding: 24px 16px;
        background: white;
        flex-direction: column;
        gap: 16px;
      }
      .banner-content {
        max-width: 100%;
      }
      h1 {
        font-size: 24px;
      }
      .ai-btn {
        display: none; /* Mobile might move AI to bottom brief */
      }
    }
  `]
})
export class HomeBannerComponent {}
