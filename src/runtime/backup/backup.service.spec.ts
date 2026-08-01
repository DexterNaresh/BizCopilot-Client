import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { BackupService } from './backup.service';
import { IEventBus } from '@shared/abstractions/event-bus';
import { BACKUP_EVENT_TYPES } from './backup-events';

describe('BackupService', () => {
  let service: BackupService;
  let eventBus: IEventBus;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [BackupService, { provide: IEventBus, useClass: EventBusService }]
    });
    service = TestBed.inject(BackupService);
    eventBus = TestBed.inject(IEventBus);
  });

  it('should initialize with default local-only backup mode', () => {
    const health = service.getBackupHealth();
    expect(health.backupEnabled).toBeFalse();
    expect(health.mode).toBe('LOCAL_ONLY');
  });

  it('should enable backup and emit BackupEnabled event', (done) => {
    eventBus.on(BACKUP_EVENT_TYPES.BACKUP_ENABLED).subscribe((payload: any) => {
      expect(payload.mode).toBe('BACKUP_PLUS_AI');
      expect(service.getBackupHealth().backupEnabled).toBeTrue();
      done();
    });

    service.enableBackup('BACKUP_PLUS_AI');
  });

  it('should refuse cloud restore if active local DB exists', () => {
    expect(() => service.restoreFromCloud('backup-123', true)).toThrowError(
      /Cannot overwrite an active local database/
    );
  });

  it('should permit cloud restore if local DB is missing', () => {
    const result = service.restoreFromCloud('backup-123', false);
    expect(result.restored).toBeTrue();
    expect(result.databaseCreated).toBeTrue();
  });
});



