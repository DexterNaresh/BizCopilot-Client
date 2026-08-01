import { Injectable } from '@angular/core';
import { IConfigProvider } from '@shared/abstractions/config-provider';

@Injectable()
export class ConfigProviderService implements IConfigProvider {
  private cache: Map<string, any> = new Map();

  constructor() {
    this.loadAll();
  }

  get<T>(key: string): T | null {
    if (this.cache.has(key)) {
      return this.cache.get(key) as T;
    }
    return null;
  }

  set<T>(key: string, value: T): void {
    this.cache.set(key, value);
    this.persistAll();
  }

  private persistAll(): void {
    const obj = Object.fromEntries(this.cache);
    localStorage.setItem('bizcopilot_generic_config', JSON.stringify(obj));
  }

  private loadAll(): void {
    const raw = localStorage.getItem('bizcopilot_generic_config');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        for (const key of Object.keys(parsed)) {
          this.cache.set(key, parsed[key]);
        }
      } catch {
        this.cache.clear();
      }
    }
  }
}
