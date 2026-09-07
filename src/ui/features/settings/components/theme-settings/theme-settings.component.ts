import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ColorTheme, FontSize } from '../../../../shared/services/theme.service';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-theme-settings',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent implements OnInit {
  colorThemes: { id: ColorTheme; name: string; color: string }[] = [
    { id: 'purple', name: 'Purple', color: '#5B3BEB' },
    { id: 'blue', name: 'Blue', color: '#2563EB' },
    { id: 'green', name: 'Green', color: '#16A34A' },
    { id: 'indigo', name: 'Indigo', color: '#4F46E5' }
  ];

  fontSizes: { id: FontSize; name: string }[] = [
    { id: 'small', name: 'Small' },
    { id: 'medium', name: 'Medium' },
    { id: 'large', name: 'Large' }
  ];

  currentTheme: ColorTheme = 'purple';
  isDarkMode = false;
  currentFontSize: FontSize = 'medium';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    const prefs = this.themeService.getPreferences();
    this.currentTheme = prefs.colorTheme;
    this.isDarkMode = prefs.darkMode;
    this.currentFontSize = prefs.fontSize;
  }

  setTheme(theme: ColorTheme) {
    this.currentTheme = theme;
    this.themeService.setColorTheme(theme);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }

  setFontSize(size: FontSize) {
    this.currentFontSize = size;
    this.themeService.setFontSize(size);
  }
}
