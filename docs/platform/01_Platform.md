# 01_Platform.md

> **BizCopilot V1 Platform Specification**
>
> **Status:** Frozen Foundation
>
> This document defines the complete client-side platform infrastructure. It contains reusable technical capabilities only and **never** business rules.

---

# 1. Purpose

The Platform provides the reusable infrastructure that every business module depends on.

It is responsible for application lifecycle, identity, persistence, runtime services, synchronization infrastructure, migration, recovery, licensing, configuration and platform frameworks.

---

# 2. Design Goals

- Offline-first
- Local-first
- Interface-first
- SOLID
- Clean Architecture
- AI-agent friendly
- Testable
- Modular
- Upgrade-safe
- Rollback-safe
- Experience independent

---

# 3. Platform Responsibilities

Owns:

- Identity Service
- Authentication Service
- Sequence Service
- Repository Framework
- Runtime Engine
- Event Bus
- Configuration Provider
- Feature Manager
- License Manager
- Permission Manager
- Migration Framework
- Recovery Framework
- Rollback Framework
- Dashboard Framework
- Payment Infrastructure
- Logging Framework
- Health Framework
- Local Storage Manager
- Update Manager

Never owns:

- Billing
- Product
- Customer
- Offer
- Reports
- Business calculations

---

# 4. Dependency Rules

Experience
→ Application Contract
→ Business Engine
→ Integration
→ Platform
→ SQLite

Forbidden:

- UI → SQLite
- UI → Repository
- UI → Platform internals
- Platform → Business Modules

---

# 5. Identity Service & Multi-Device Strategy

Owns:

- ULID generation
- DeviceId generation
- BusinessCode generation
- OperationId generation

Business modules never generate identifiers.

**Multi-Device Identity Boundaries (V1 Rule):**
- **BusinessId:** Business entity identity
- **DeviceId:** Physical registered device (owns numbering)
- **UserId:** Employee identity (owns accountability)
- **SessionId:** Login session (owns authentication)
- **BillId:** Unique immutable identifier (owns synchronization)

EntityId = ULID

BusinessCode examples:

- Bill: TB01-000001 (Device Prefix + Sequence)
- Product: PRD-000001
- Customer: CUS-000001
- Offer: OFF-000001

OperationId = UUID for synchronization and idempotency.

---

# 6. Sequence Service

Provides sequential business numbering.

Responsibility:
- Number sequences belong strictly to **devices**. (e.g., Tablet 1 = TB01-000001, Tablet 2 = TB02-000001)
- User login never changes numbering.

Counters:
- Counter persistence
- Crash-safe allocation
- Continuous numbering
- Multi-device safe numbering
- Counters never reset daily.

Missing numbers are acceptable.
Duplicate numbers are prohibited.

---

# 7. Repository Framework

Responsibilities:

- CRUD
- Query abstraction
- Transactions
- Unit of Work
- SQLite access

Repositories contain persistence only.

Business logic belongs to Business Services.

---

# 8. Runtime Engine

Owns:

- Background Worker
- SyncQueue
- Retry Engine
- ACK Processor
- Connectivity Monitor
- Runtime Feature Evaluation
- Health Monitoring

Synchronization never blocks billing.

---

# 9. Migration Framework

Responsibilities:

- Schema versioning
- Compatibility validation
- Migration execution
- Validation
- Rollback integration

Always create a local safety backup before migration.

---

# 10. Recovery Framework

Startup algorithm:

1. Local DB exists → Use Local DB
2. Missing DB → Restore Cloud Backup (if available)
3. Restore completed → Run migration
4. No backup → Create new database

Recovery never overwrites an active local database.

---

# 11. Rollback Framework

Upgrade flow:

- Detect version
- Create local safety backup
- Execute migration
- Validate
- Launch

Failure:

- Restore safety backup
- Rollback schema
- Launch previous compatible version

---

# 12. Configuration Provider

Single access point for configuration.

Business modules never access settings storage directly.

Provides:

- Validation
- Caching
- Read-only configuration access

---

# 13. Feature Manager

Evaluates:

1. License
2. Configuration
3. Permission
4. Runtime State

Examples:

- AI
- Backup
- Printer
- Camera
- Barcode
- UPI
- WhatsApp Reports

---

# 14. License Manager

Responsibilities:

- Activation
- Offline cache
- Capability validation
- Grace period
- Read-only mode

Subscription enforcement is centralized here.

---

# 15. Permission Manager

Supports:

- Owner
- Employee
- Future roles

---

# 16. Event Framework

Supports:

- Publish
- Subscribe
- Loose coupling
- Domain events

Examples:

- BillCreated
- ProductUpdated
- TaxSettingsChanged
- FeatureEnabled

---

# 17. Dashboard Framework

Provides:

- Widget registration
- Widget provider
- Ordering
- Visibility
- Owner dashboard
- Employee dashboard

---

# 18. Payment Infrastructure

Reusable payment component.

Supports:

- Cash
- Card
- UPI
- Mixed Payment

V1:

- Static UPI QR using configured Merchant UPI ID.

V2:

- Dynamic QR
- Payment gateway integrations

---

# 19. Logging Framework

Supports:

- Application logs
- Audit logs
- Sync logs
- Migration logs
- Performance logs
- Error logs

---

# 20. Health Framework

Monitors:

- Application
- SQLite
- Runtime
- Sync Queue
- Internet
- Cloud
- License
- AI Connectivity

---

# 21. Local Storage Manager

Owns:

- SQLite location
- Backup folder
- Export folder
- Log folder
- Temporary files

Database location remains independent of application installation to support upgrades.

---

# 22. Startup Lifecycle

Configuration
→ Logging
→ Identity Service
→ SQLite
→ Recovery
→ Migration
→ License
→ Feature Manager
→ Permission Manager
→ Dashboard
→ Background Worker
→ Application Ready

---

# 23. Shutdown Lifecycle

- Stop Background Worker
- Flush SyncQueue
- Persist sequence counters
- Close SQLite
- Shutdown

---

# 24. AI Coding Rules

- Platform contains no business rules.
- Platform owns all infrastructure.
- Business modules request identifiers through Identity Service.
- Business modules request business codes through Sequence Service.
- Repository owns persistence only.
- Runtime owns synchronization.
- Configuration is accessed only through Configuration Provider.
- Every platform service must be interface-first and independently testable.
