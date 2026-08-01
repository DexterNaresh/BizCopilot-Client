import { Injectable } from '@angular/core';
import { ILocalStorageService, StoragePaths } from '@shared/abstractions/storage.service';

@Injectable()
export class LocalStorageService implements ILocalStorageService {
  private readonly DB_NAME = 'bizcopilot.db';

  getDatabaseFileName(): string {
    return this.DB_NAME;
  }

  /**
   * Returns storage locations resolved based on runtime environment
   */
  getStoragePaths(): StoragePaths {
    // In Web/Wasm mode, files reside in indexedDB/localStorage virtual paths
    return {
      databasePath: `appData/${this.DB_NAME}`,
      backupPath: 'appData/backups/',
      exportPath: 'appData/exports/',
      logPath: 'appData/logs/'
    };
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
