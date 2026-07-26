# 02_Platform_Runtime_Engine.md

> **BizCopilot Runtime Engine Specification (V1)**
>
> Defines how the client application behaves while running. This document contains no business rules.

---

# 1. Purpose

The Runtime Engine guarantees:

- Offline-first execution
- Reliable synchronization
- Crash recovery
- Graceful shutdown
- Background processing
- Startup recovery

---

# 2. Runtime Components

- Application Lifecycle Manager
- Background Worker Manager
- Synchronization Engine
- Sync Queue
- Network Monitor
- Retry Scheduler
- Health Monitor

---

# 3. Application Startup

Sequence:

1. Load configuration
2. Initialize logging
3. Open SQLite
4. Execute pending migrations
5. Validate license
6. Initialize Feature Manager
7. Initialize Permission Manager
8. Restore pending SyncQueue items
9. Start Background Worker
10. UI Ready

Startup must never wait for cloud synchronization.

---

# 4. Graceful Shutdown

On normal application exit:

1. Stop accepting new operations
2. Finish active SQLite transaction
3. Persist configuration/settings
4. Flush logs
5. Optionally attempt a short synchronization (time limited)
6. Close SQLite
7. Exit

Failure to synchronize must never block shutdown.

---

# 5. Unexpected Shutdown

Examples:

- Power failure
- OS restart
- Task Manager kill
- Battery drain

Recovery rules:

- No committed business transaction may be lost.
- SyncQueue is stored in SQLite.
- Pending queue resumes automatically on next startup.

---

# 6. Synchronization Engine

Synchronization is asynchronous.

Business modules never call cloud APIs directly.

Flow:

Business Module
→ Event
→ SyncQueue
→ Background Worker
→ Cloud API
→ ACK
→ Queue Cleanup

---

# 7. SyncQueue Table

Suggested fields:

- OperationId
- OperationType
- EntityType
- EntityId
- Payload
- Status
- RetryCount
- NextRetryAt
- LastAttemptAt
- LastError
- CreatedAt
- UpdatedAt

Queue is persisted in SQLite.

---

# 8. Queue State Machine

Pending
→ Processing
→ Completed

Failure path:

Pending
→ Processing
→ Failed
→ Retry Scheduled
→ Pending

Queue entries are removed only after server acknowledgement.

---

# 9. OperationId & Idempotency

Every synchronization request has a globally unique OperationId.

Rules:

- Client generates OperationId.
- Server processes each OperationId once.
- Duplicate requests return ACK without duplicating data.

---

# 10. Background Worker

Responsibilities:

- Process SyncQueue
- Retry failed operations
- Monitor connectivity
- Perform lightweight maintenance
- Future license refresh
- Future update checks

Business modules never create background threads.

---

# 11. Retry Policy

Recommended exponential backoff:

- 30 seconds
- 1 minute
- 5 minutes
- 15 minutes
- 30 minutes
- 1 hour

Retry scheduling uses NextRetryAt.

---

# 12. Offline Strategy

Application must remain fully functional without internet.

Examples:

- Billing
- Product management
- Customer management
- Printing
- Reports

Synchronization resumes automatically when connectivity returns.

---

# 13. One Week Offline Scenario

Operational data continues to accumulate locally.

When connectivity returns:

- Background Worker resumes
- Queue processed in batches
- Server acknowledges each operation
- Completed entries removed

No business data is lost.

---

# 14. Batch Synchronization

Recommendations:

- Configurable batch size
- Sequential ACK validation
- Continue from last successful item
- Never delete unacknowledged records

---

# 15. Runtime Error Handling

Synchronization failures must never interrupt billing.

Errors are:

- Logged
- Queued for retry
- Visible to owner dashboard if needed

---

# 16. Health Monitoring

Monitor:

- SQLite availability
- Queue size
- Last successful sync
- Internet connectivity
- Background worker state
- Disk availability

---

# 17. Design Principles

- Offline-first
- Event-driven
- Persistent queue
- Idempotent synchronization
- Crash-safe
- Eventually consistent
- Non-blocking UI

---

# 18. AI Coding Rules

AI agents must:

- Never synchronize directly from business modules.
- Never bypass SyncQueue.
- Never delete queue entries before ACK.
- Never block UI during synchronization.
- Never perform cloud operations on the UI thread.
