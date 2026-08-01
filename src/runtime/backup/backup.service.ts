import { BusinessException } from '@shared/exceptions/business.exception';
import { Injectable } from '@angular/core';
import { IEventBus } from '@shared/abstractions/event-bus';
import { BackupHealth, BackupMode, BackupRestoreResult } from './backup.model';
import { BACKUP_EVENT_TYPES } from './backup-events';

@Injectable({
  providedIn: 'root'
})
export class BackupService {
  private mode: BackupMode = 'LOCAL_ONLY';
  private backupEnabled = false;
  private lastSuccessfulSyncAt: string | null = null;
  private pendingQueueCount = 0;
  private cloudStatus: 'ONLINE' | 'OFFLINE' | 'SYNCING' | 'ERROR' = 'OFFLINE';
  private recoveryPointAvailable = false;

  constructor(private readonly eventBus: IEventBus) {
    this.loadFromStorage();
  }

  getBackupHealth(): BackupHealth {
    return {
      backupEnabled: this.backupEnabled,
      mode: this.mode,
      lastSuccessfulSyncAt: this.lastSuccessfulSyncAt,
      pendingQueueCount: this.pendingQueueCount,
      cloudStatus: this.cloudStatus,
      recoveryPointAvailable: this.recoveryPointAvailable
    };
  }

  enableBackup(mode: BackupMode): void {
    this.backupEnabled = true;
    this.mode = mode;
    this.cloudStatus = 'ONLINE';
    this.recoveryPointAvailable = true;
    this.persist();

    this.eventBus.publish(BACKUP_EVENT_TYPES.BACKUP_ENABLED, {
      mode,
      timestamp: new Date().toISOString()
    });
  }

  disableBackup(): void {
    this.backupEnabled = false;
    this.mode = 'LOCAL_ONLY';
    this.cloudStatus = 'OFFLINE';
    this.persist();

    this.eventBus.publish(BACKUP_EVENT_TYPES.BACKUP_DISABLED, {
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Cloud restore algorithm:
   * Rule: Cloud restore is only permitted when no active local business database exists.
   * If active Local DB exists, throws an exception per Backup.md §5 & §11.
   */
  restoreFromCloud(backupId: string, activeLocalDbExists: boolean): BackupRestoreResult {
    if (activeLocalDbExists) {
      throw new BusinessException('BACKUP_UNAVAILABLE', 'Cannot overwrite an active local database. Cloud restore is only permitted when local database is missing.');
    }

    const result: BackupRestoreResult = {
      restored: true,
      databaseCreated: true,
      restoredAt: new Date().toISOString(),
      restoredVersion: '1.0.0'
    };

    this.eventBus.publish(BACKUP_EVENT_TYPES.RESTORE_COMPLETED, { result });
    return result;
  }

  updateSyncMetrics(lastSync: string, pendingCount: number, status: 'ONLINE' | 'OFFLINE' | 'SYNCING' | 'ERROR'): void {
    this.lastSuccessfulSyncAt = lastSync;
    this.pendingQueueCount = pendingCount;
    this.cloudStatus = status;
  }

  private persist(): void {
    localStorage.setItem('bizcopilot_backup_config', JSON.stringify({
      enabled: this.backupEnabled,
      mode: this.mode
    }));
  }

  private loadFromStorage(): void {
    const raw = localStorage.getItem('bizcopilot_backup_config');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        this.backupEnabled = parsed.enabled ?? false;
        this.mode = parsed.mode ?? 'LOCAL_ONLY';
        this.cloudStatus = this.backupEnabled ? 'ONLINE' : 'OFFLINE';
      } catch {
        this.backupEnabled = false;
        this.mode = 'LOCAL_ONLY';
      }
    }
  }
}
