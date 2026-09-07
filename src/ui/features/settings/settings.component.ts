import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSettingsComponent } from './components/theme-settings/theme-settings.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ThemeSettingsComponent],
  template: `
    <div class="settings-page">
      <div class="settings-header">
        <div class="header-container">
          <span class="settings-badge">PREFERENCES</span>
          <h1 class="page-title">Settings</h1>
        </div>
      </div>
      <div class="settings-content">
        <app-theme-settings></app-theme-settings>
      </div>
    </div>
  `,
  styles: [`
    .settings-page {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: var(--color-bg-canvas);
    }
    .settings-header {
      padding: 24px 32px;
      background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-hover) 100%);
      border-bottom: 1px solid var(--color-border);
      border-left: 4px solid var(--color-primary);
      box-shadow: var(--shadow-sm);
    }
    .header-container {
      display: flex;
      flex-direction: column;
      gap: 4px;
      max-width: 800px;
      margin: 0 auto;
    }
    .settings-badge {
      font-size: 0.6875rem;
      font-weight: 700;
      letter-spacing: 1px;
      color: var(--color-primary);
    }
    .page-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.4px;
      color: var(--color-text-primary);
    }
    .settings-content {
      padding: 32px 24px;
      flex: 1;
      overflow-y: auto;
      max-width: 840px;
      margin: 0 auto;
      width: 100%;
    }
  `]
})
export class SettingsComponent {}
