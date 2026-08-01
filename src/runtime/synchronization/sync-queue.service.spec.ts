import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { SyncQueueService } from './sync-queue.service';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { IQueueStorage } from '@shared/abstractions/queue-storage';

describe('SyncQueueService', () => {
  let service: SyncQueueService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        SyncQueueService,
        { provide: IIdentityService, useClass: IdentityService },
        { provide: IQueueStorage, useClass: QueueStorage }
      ]
    });
    service = TestBed.inject(SyncQueueService);
  });

  it('should enqueue items with client-generated OperationId', () => {
    const item = service.enqueue('CREATE', 'BILL', 'bill-uuid-101', { totalAmount: 500 });
    expect(item.operationId).toBeDefined();
    expect(item.status).toBe('PENDING');
    expect(service.getSyncSummary().pendingCount).toBe(1);
  });

  it('should process queue and remove items only after successful ACK', async () => {
    service.enqueue('CREATE', 'BILL', 'bill-uuid-101', { totalAmount: 500 });
    const result = await service.processQueue(5);

    expect(result.processed).toBe(1);
    expect(result.succeeded).toBe(1);
    expect(service.getSyncSummary().pendingCount).toBe(0);
  });
});


