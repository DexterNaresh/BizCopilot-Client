# 01_Platform.md

> **BizCopilot Platform Specification (V1)**
>
> Status: Frozen (Client Platform)

## 1. Purpose

The Platform provides reusable infrastructure and framework services for the Business Engine.

It contains **no business rules**.

Business modules depend on the Platform, but the Platform never depends on business modules.

## 2. Goals

- Reusable
- Offline-first
- Interface-first
- Event-driven
- Extensible
- Testable
- AI-agent friendly

## 3. Responsibilities

Owns:
- Repository Framework
- Event Framework
- Migration Framework
- Configuration Manager
- Feature Manager
- License Manager
- Permission Manager
- Dashboard Framework
- Logging Framework
- Health Framework
- Local Storage Manager

Never owns:
- Billing
- Product
- Customer
- Offer
- Report
- Business calculations

## 4. Dependency Rules

Experience
→ Application Contract
→ Business Engine
→ Integration Layer
→ Platform
→ SQLite

Forbidden:
- UI → Repository
- UI → SQLite
- UI → Platform
- Platform → Business Modules

## 5. Repository Framework

Responsibilities:
- Generic CRUD
- Transactions
- Query abstraction
- SQLite access

Rules:
- Business modules never access SQLite directly.
- Repository interfaces are injected.

## 6. Event Framework

Responsibilities:
- Publish events
- Subscribe to events
- Loose coupling

Examples:
- BillCreated
- ProductUpdated
- CustomerCreated
- SettingsChanged

## 7. Migration Framework

Responsibilities:
- Schema versioning
- Startup migration
- Rollback support
- Backup before migration

## 8. Configuration Manager

Technical configuration only.

Examples:
- Database path
- Log path
- Cloud endpoint
- Environment

Business settings belong to Settings.md.

## 9. Feature Manager

Evaluation order:
1. License
2. Configuration
3. Permission
4. Runtime State

Example:
FeatureManager.isEnabled("AI_CHAT")

## 10. License Manager

- Activation
- Offline validation
- Renewal
- Grace period
- Read-only mode

## 11. Permission Manager

Supports:
- Owner
- Employee
- Future roles

## 12. Dashboard Framework

Provides:
- Widget registration
- Ordering
- Visibility
- Refresh

## 13. Logging Framework

- Application logs
- Audit logs
- Performance logs
- Error logs

## 14. Health Framework

Monitors:
- Application
- SQLite
- Disk
- Memory

## 15. Local Storage Manager

Owns:
- SQLite location
- Backup folder
- Export folder
- Log folder
- Temporary files

## 16. Startup Sequence

1. Configuration
2. Logging
3. SQLite
4. Migration
5. License
6. Feature Manager
7. Permission Manager
8. Dashboard
9. Application Ready

Runtime behavior is specified in Platform_Runtime_Engine.

## 17. AI Coding Rules

- No business logic in Platform.
- No direct SQLite access from UI.
- Use repositories.
- Use Feature Manager.
- Depend on interfaces.
