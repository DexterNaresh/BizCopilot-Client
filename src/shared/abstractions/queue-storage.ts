import { SyncQueueItem } from '@runtime/synchronization/sync.model';

export abstract class IQueueStorage {
  abstract getQueue(): SyncQueueItem[];
  abstract getLastSyncTimestamp(): string | null;
  abstract setLastSyncTimestamp(timestamp: string): void;
  abstract enqueue(item: SyncQueueItem): void;
  abstract removeItem(operationId: string): void;
  abstract updateItem(item: SyncQueueItem): void;
}
