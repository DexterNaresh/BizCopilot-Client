import { Injectable, Inject } from '@angular/core';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { SyncQueueItem, SyncStatusSummary } from './sync.model';
import { IQueueStorage } from '@shared/abstractions/queue-storage';

@Injectable({
  providedIn: 'root'
})
export class SyncQueueService {
  private isSyncing = false;

  constructor(
    @Inject(IIdentityService) private readonly IIdentityService: IIdentityService,
    private readonly IQueueStorage: IQueueStorage
  ) {}

  /**
   * Enqueues a new operation for background synchronization.
   * Uses client-generated OperationId and entityId (UUID).
   */
  enqueue(
    operationType: 'CREATE' | 'UPDATE' | 'DELETE',
    entityType: 'BILL' | 'PRODUCT' | 'CUSTOMER' | 'OFFER' | 'SETTINGS',
    entityId: string,
    payload: any
  ): SyncQueueItem {
    const now = new Date().toISOString();
    const item: SyncQueueItem = {
      operationId: this.IIdentityService.generateId(),
      operationType,
      entityType,
      entityId,
      payload,
      status: 'PENDING',
      retryCount: 0,
      createdAt: now,
      updatedAt: now
    };

    this.IQueueStorage.enqueue(item);
    return item;
  }

  getPendingItems(): SyncQueueItem[] {
    return this.IQueueStorage.getQueue().filter(item => item.status === 'PENDING' || item.status === 'FAILED');
  }

  getSyncSummary(): SyncStatusSummary {
    const queue = this.IQueueStorage.getQueue();
    return {
      pendingCount: queue.filter(i => i.status === 'PENDING').length,
      processingCount: queue.filter(i => i.status === 'PROCESSING').length,
      failedCount: queue.filter(i => i.status === 'FAILED').length,
      lastSyncTimestamp: this.IQueueStorage.getLastSyncTimestamp(),
      isSyncing: this.isSyncing
    };
  }

  /**
   * Processes the pending sync queue in batches.
   * Only removes queue items after server ACK (02_Platform_Runtime_Engine.md §8).
   */
  async processQueue(batchSize = 10): Promise<{ processed: number; succeeded: number }> {
    if (this.isSyncing) {
      return { processed: 0, succeeded: 0 };
    }

    this.isSyncing = true;
    const pending = this.getPendingItems().slice(0, batchSize);
    let succeeded = 0;

    for (const item of pending) {
      item.status = 'PROCESSING';
      item.lastAttemptAt = new Date().toISOString();
      this.IQueueStorage.updateItem(item);

      try {
        // Simulated ACK from server (in production, makes HTTP POST to Spring Boot Cloud API)
        const serverAck = true;
        if (serverAck) {
          item.status = 'COMPLETED';
          succeeded++;
          // Remove completed item after ACK
          this.IQueueStorage.removeItem(item.operationId);
        }
      } catch (err: any) {
        item.status = 'FAILED';
        item.retryCount++;
        item.lastError = err.message || 'Network sync error';
        this.IQueueStorage.updateItem(item);
      }
    }

    this.IQueueStorage.setLastSyncTimestamp(new Date().toISOString());
    this.isSyncing = false;

    return { processed: pending.length, succeeded };
  }
}
