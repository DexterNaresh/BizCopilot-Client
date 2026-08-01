/**
 * Backup Domain Models & Interfaces
 * Specification: docs/specifications/Backup.md
 */

export type BackupMode = 'LOCAL_ONLY' | 'BACKUP' | 'BACKUP_PLUS_AI';

export interface BackupHealth {
  backupEnabled: boolean;
  mode: BackupMode;
  lastSuccessfulSyncAt: string | null;
  pendingQueueCount: number;
  cloudStatus: 'ONLINE' | 'OFFLINE' | 'SYNCING' | 'ERROR';
  recoveryPointAvailable: boolean;
  lastRecoveryPointDate?: string;
}

export interface BackupRestoreRequest {
  backupId: string;
  userId: string;
}

export interface BackupRestoreResult {
  restored: boolean;
  databaseCreated: boolean;
  restoredAt: string;
  restoredVersion: string;
}
