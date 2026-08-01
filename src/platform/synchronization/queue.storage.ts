import { Injectable } from '@angular/core';
import { SyncQueueItem } from '@runtime/synchronization/sync.model';
import { IQueueStorage } from '@shared/abstractions/queue-storage';

@Injectable()
export class QueueStorage implements IQueueStorage {
  private queue: SyncQueueItem[] = [];
  private lastSyncTimestamp: string | null = null;

  constructor() {
    this.loadFromStorage();
  }

  getQueue(): SyncQueueItem[] {
    return this.queue;
  }

  getLastSyncTimestamp(): string | null {
    return this.lastSyncTimestamp;
  }

  setLastSyncTimestamp(timestamp: string): void {
    this.lastSyncTimestamp = timestamp;
    this.persist();
  }

  enqueue(item: SyncQueueItem): void {
    this.queue.push(item);
    this.persist();
  }

  removeItem(operationId: string): void {
    this.queue = this.queue.filter(q => q.operationId !== operationId);
    this.persist();
  }

  updateItem(item: SyncQueueItem): void {
    const index = this.queue.findIndex(q => q.operationId === item.operationId);
    if (index !== -1) {
      this.queue[index] = item;
      this.persist();
    }
  }

  private persist(): void {
    localStorage.setItem('bizcopilot_sync_queue', JSON.stringify({
      queue: this.queue,
      lastSyncTimestamp: this.lastSyncTimestamp
    }));
  }

  private loadFromStorage(): void {
    const raw = localStorage.getItem('bizcopilot_sync_queue');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        this.queue = parsed.queue || [];
        this.lastSyncTimestamp = parsed.lastSyncTimestamp || null;
      } catch {
        this.queue = [];
      }
    }
  }
}
