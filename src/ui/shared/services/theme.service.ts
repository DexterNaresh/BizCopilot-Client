import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ColorTheme = 'purple' | 'blue' | 'green' | 'indigo';
export type FontSize = 'small' | 'medium' | 'large';

interface ThemePreferences {
  colorTheme: ColorTheme;
  darkMode: boolean;
  fontSize: FontSize;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'biz-theme-prefs';
  
  private prefs: ThemePreferences = {
    colorTheme: 'purple',
    darkMode: false,
    fontSize: 'medium'
  };

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.applyStoredPreferences();
  }

  getPreferences(): ThemePreferences {
    return { ...this.prefs };
  }

  setColorTheme(theme: ColorTheme) {
    this.prefs.colorTheme = theme;
    this.applyToDocument();
    this.savePreferences();
  }

  setDarkMode(enabled: boolean) {
    this.prefs.darkMode = enabled;
    this.applyToDocument();
    this.savePreferences();
  }

  setFontSize(size: FontSize) {
    this.prefs.fontSize = size;
    this.applyToDocument();
    this.savePreferences();
  }

  private applyStoredPreferences() {
    if (!this.isBrowser) return;

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.prefs = { ...this.prefs, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.error('Failed to load theme preferences', e);
    }
    
    this.applyToDocument();
  }

  private savePreferences() {
    if (!this.isBrowser) return;

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.prefs));
    } catch (e) {
      console.error('Failed to save theme preferences', e);
    }
  }

  private applyToDocument() {
    if (!this.isBrowser) return;

    const html = document.documentElement;
    
    // Remove old theme classes
    html.className = html.className
      .replace(/\btheme-\w+\b/g, '')
      .replace(/\bfont-size-\w+\b/g, '')
      .trim();

    // Add new theme classes
    html.classList.add(`theme-${this.prefs.colorTheme}`);
    html.classList.add(`font-size-${this.prefs.fontSize}`);
    
    // Toggle dark mode class
    html.classList.toggle('dark', this.prefs.darkMode);
  }
}
