export interface StoragePaths {
  databasePath: string;
  backupPath: string;
  exportPath: string;
  logPath: string;
}

export abstract class ILocalStorageService {
  abstract getStoragePaths(): StoragePaths;
  abstract getDatabaseFileName(): string;
  abstract getItem(key: string): string | null;
  abstract setItem(key: string, value: string): void;
  abstract removeItem(key: string): void;
}
