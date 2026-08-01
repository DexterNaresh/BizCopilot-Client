/**
 * Synchronization Domain Models & Interfaces
 * Specification: docs/specifications/Synchronization.md & 02_Platform_Runtime_Engine.md §7
 */

export type SyncOperationStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';

export interface SyncQueueItem {
  operationId: string; // UUID (client-generated idempotency key)
  operationType: 'CREATE' | 'UPDATE' | 'DELETE';
  entityType: 'BILL' | 'PRODUCT' | 'CUSTOMER' | 'OFFER' | 'SETTINGS';
  entityId: string; // Client-generated UUID (e.g. BillId)
  payload: any;
  status: SyncOperationStatus;
  retryCount: number;
  nextRetryAt?: string;
  lastAttemptAt?: string;
  lastError?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SyncStatusSummary {
  pendingCount: number;
  processingCount: number;
  failedCount: number;
  lastSyncTimestamp: string | null;
  isSyncing: boolean;
}
