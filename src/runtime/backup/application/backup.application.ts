import { Injectable } from '@angular/core';
import { BackupService } from '@runtime/backup/backup.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ApplicationResponse } from '@runtime/billing/application/dto/sales.dto';
import { BackupHealth, BackupMode, BackupRestoreResult } from '@runtime/backup/backup.model';

@Injectable({
  providedIn: 'root'
})
export class BackupApplication {
  constructor(
    private readonly backupService: BackupService,
    private readonly IPermissionService: IPermissionService,
    private readonly ISessionService: ISessionService
  ) {}

  getBackupHealth(userId: string): ApplicationResponse<BackupHealth> {
    return this.executeWithPermission(userId, 'BACKUP_VIEW', () => {
      return this.backupService.getBackupHealth();
    });
  }

  enableBackup(userId: string, mode: BackupMode): ApplicationResponse<BackupHealth> {
    return this.executeWithPermission(userId, 'BACKUP_MANAGE', () => {
      this.backupService.enableBackup(mode);
      return this.backupService.getBackupHealth();
    });
  }

  disableBackup(userId: string): ApplicationResponse<BackupHealth> {
    return this.executeWithPermission(userId, 'BACKUP_MANAGE', () => {
      this.backupService.disableBackup();
      return this.backupService.getBackupHealth();
    });
  }

  restoreFromCloud(userId: string, backupId: string, activeLocalDbExists: boolean): ApplicationResponse<BackupRestoreResult> {
    return this.executeWithPermission(userId, 'BACKUP_MANAGE', () => {
      return this.backupService.restoreFromCloud(backupId, activeLocalDbExists);
    });
  }

  private executeWithPermission<T>(userId: string, permission: any, operation: () => T): ApplicationResponse<T> {
    try {
      const currentUser = this.ISessionService.getCurrentUser();
      if (!currentUser || currentUser.id !== userId) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'Invalid session or user mismatch.'
          }
        };
      }

      if (!this.IPermissionService.hasPermission(currentUser.role, permission)) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'You do not have permission to perform this action.'
          }
        };
      }

      const result = operation();
      return {
        success: true,
        data: result
      };
    } catch (error: any) {
      const message = error.message || 'Unknown error occurred.';
      const code = message.startsWith('BACKUP_UNAVAILABLE') ? 'BACKUP_UNAVAILABLE' : 'UNKNOWN_ERROR';
      return {
        success: false,
        error: {
          code,
          message
        }
      };
    }
  }
}
