import { BackupMode, BackupRestoreResult } from './backup.model';

export const BACKUP_EVENT_TYPES = {
  BACKUP_ENABLED: 'BackupEnabled',
  BACKUP_DISABLED: 'BackupDisabled',
  RESTORE_COMPLETED: 'RestoreCompleted',
  RECOVERY_COMPLETED: 'RecoveryCompleted'
} as const;

export interface BackupEnabledPayload {
  mode: BackupMode;
  timestamp: string;
}

export interface BackupDisabledPayload {
  timestamp: string;
}

export interface RestoreCompletedPayload {
  result: BackupRestoreResult;
}

export interface RecoveryCompletedPayload {
  result: BackupRestoreResult;
}
