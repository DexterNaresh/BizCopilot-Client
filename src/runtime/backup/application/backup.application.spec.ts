import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { BackupApplication } from './backup.application';
import { BackupService } from '@runtime/backup/backup.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { IEventBus } from '@shared/abstractions/event-bus';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { UserRole } from '@shared/models/user.model';

describe('BackupApplication', () => {
  let appContract: BackupApplication;
  let sessionService: ISessionService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        BackupApplication,
        BackupService,
        { provide: IPermissionService, useClass: PermissionManager },
        { provide: ISessionService, useClass: SessionService },
        { provide: IEventBus, useClass: EventBusService },
        { provide: IIdentityService, useClass: IdentityService }
      ]
    });

    appContract = TestBed.inject(BackupApplication);
    sessionService = TestBed.inject(ISessionService);

    // Mock active owner session
    sessionService.startSession({
      id: 'owner-user-1',
      name: 'Owner User',
      role: UserRole.OWNER
    });
  });

  it('should get backup health when user has permission', () => {
    const currentUser = sessionService.getCurrentUser()!;
    const response = appContract.getBackupHealth(currentUser.id);
    expect(response.success).toBeTrue();
    expect(response.data?.backupEnabled).toBeFalse();
  });

  it('should enable backup through contract', () => {
    const currentUser = sessionService.getCurrentUser()!;
    const response = appContract.enableBackup(currentUser.id, 'BACKUP');
    expect(response.success).toBeTrue();
    expect(response.data?.backupEnabled).toBeTrue();
    expect(response.data?.mode).toBe('BACKUP');
  });

  it('should return error code BACKUP_UNAVAILABLE if attempting restore while active DB exists', () => {
    const currentUser = sessionService.getCurrentUser()!;
    const response = appContract.restoreFromCloud(currentUser.id, 'backup-1', true);
    expect(response.success).toBeFalse();
    expect(response.error?.code).toBe('BACKUP_UNAVAILABLE');
  });
});



