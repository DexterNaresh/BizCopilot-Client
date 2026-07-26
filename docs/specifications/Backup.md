# Backup.md

> **BizCopilot V1 – Backup (Cloud Synchronization & Recovery)**
>
> **Status:** Frozen (V1)

---

# 1. Purpose

Backup provides optional cloud synchronization and recovery for locally owned business data.

The local SQLite database is always the primary business database.

Cloud storage provides recovery, migration and AI-enabled services.

---

# 2. Responsibilities

Owns:

- Cloud synchronization
- Cloud recovery
- Device migration
- Backup health
- Restore workflows

Never owns:

- Billing
- Business rules
- AI execution
- Synchronization engine
- License enforcement

---

# 3. Backup Modes

## Local Only

SQLite only.

No cloud communication.

## Backup

SQLite
→ Runtime SyncQueue
→ Spring Boot
→ PostgreSQL

## Backup + AI

SQLite
→ SyncQueue
→ Spring Boot
→ PostgreSQL
→ Business Intelligence
→ AI

---

# 4. Synchronization

Synchronization follows the Runtime Engine specification.

Backup never communicates directly with business modules.

Runtime Engine owns:

- SyncQueue
- Retry
- ACK
- Background Worker

---

# 5. Recovery Strategy

Startup algorithm:

1. Local SQLite exists
   - Use local database.
   - Start background synchronization.

2. Local SQLite missing
   - Check cloud recovery.
   - Restore latest backup.
   - Create local SQLite.
   - Execute required migrations.
   - Start application.

3. No cloud backup
   - Create a new business database.

Cloud restore is only permitted when no active local business database exists.

---

# 6. Device Migration

Supported workflow:

- Install BizCopilot
- Activate license
- Detect local database
- If missing, restore from cloud
- Execute migrations if required
- Continue billing

No business data should be lost.

---

# 7. Upgrade & Rollback

Before every application upgrade:

1. Detect existing database
2. Create local safety backup
3. Execute database migration
4. Validate migration

If migration fails:

- Restore local safety backup
- Roll back schema
- Launch previous compatible version

Rollback is owned by the Platform Migration Framework.

Backup guarantees a recovery point exists.

---

# 8. Subscription Behaviour

Subscription status is validated by the License Framework.

If Backup subscription expires:

- 30-day grace period
- User notifications
- After grace period:
  - Application enters Read-Only mode
  - New billing disabled
  - Reports and exports remain available

---

# 9. Backup Health

Display:

- Backup Enabled
- Last Successful Sync
- Pending Queue Count
- Cloud Status
- Recovery Point Available

---

# 10. Security

- HTTPS communication
- Authenticated cloud access
- Encrypted transport
- Customer owns local SQLite

---

# 11. Business Rules

- Local database is always the source of truth.
- Cloud never blocks billing.
- Cloud restore never overwrites an active local database.
- Recovery always recreates the local SQLite database first.
- Backup depends on Runtime synchronization.

---

# 12. Events

Publishes:

- BackupEnabled
- BackupDisabled
- RestoreCompleted
- RecoveryCompleted

---

# 13. Dependencies

Depends on:

- Platform Runtime Engine
- Platform Integration
- Migration Framework
- License Framework
- Settings

---

# 14. Extension Points

Future:

- Multi-device synchronization
- Incremental restore
- Branch recovery
- Cloud archive
- Live synchronization

---

# 15. AI Coding Rules

- Never synchronize directly from business modules.
- Never bypass SyncQueue.
- Never overwrite an active local database.
- Always restore to local SQLite before application startup.
- Keep rollback responsibilities inside the Migration Framework.
