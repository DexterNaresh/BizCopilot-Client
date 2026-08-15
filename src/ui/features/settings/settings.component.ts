import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="placeholder-screen"></div>',
  styles: ['.placeholder-screen { width: 100%; height: 100%; background-color: var(--color-surface); }']
})
export class SettingsComponent {}
