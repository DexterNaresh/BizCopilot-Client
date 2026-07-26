# 00_Architecture_Blueprint.md

> **BizCopilot Architecture Blueprint (V1)**
>
> This document is the **constitution** of BizCopilot. Every specification (`Platform.md`, `Application_Contract.md`, `Billing.md`, etc.) must comply with this blueprint.

---

# 1. Product Vision

BizCopilot is a **local-first, offline-first Business Platform** for small businesses.

The client is fully functional without the internet.

Cloud services are optional and provide:

- Synchronization
- Backup
- Licensing
- Business Intelligence
- AI
- Notifications

---

# 2. Core Principles

- Local First
- Offline First
- One Responsive Angular UI
- Business logic lives on the Client
- Cloud never owns operational business logic
- Interface-first architecture
- Event-driven communication
- Repository pattern
- AI-ready
- Modular
- Replaceable UI experiences

---

# 3. Deployment Targets

Single Angular application deployed as:

- Windows (.exe) via Tauri
- Android Phone via Capacitor
- Android Tablet via Capacitor
- Future: macOS (Tauri)
- Future: iOS/iPadOS (Capacitor)
- Future: Browser

The deployment wrapper changes—not the application.

---

# 4. Layered Architecture

Experience (Responsive Angular UI)

↓

Application Contract

↓

Business Engine

↓

Integration Layer

↓

Platform

↓

SQLite

↓

Optional Cloud Services

Communication may only flow downward through adjacent layers.

---

# 5. Layer Responsibilities

## Experience

Owns:
- Navigation
- Responsive layouts
- Dialogs
- Forms
- Widgets
- User interaction

Never owns:
- Business rules
- Repository
- SQLite
- Platform
- Cloud

Communicates only through the Application Contract.

## Application Contract

Public API exposed to every Experience.

Responsibilities:
- Request validation
- Workflow orchestration
- Permission checks
- Feature checks
- Transaction boundary
- Response mapping
- Error mapping
- Synchronization trigger
- Event publishing

Contains no business rules.

## Business Engine

Domain-independent modules:

- Billing
- Product
- Customer
- Offer
- Report
- Backup
- AI Gateway
- Settings

Never knows:
- Juice Shop
- Cafe
- Hardware
- Medical

## Integration Layer

External adapters:

- Printing
- Barcode
- Local Storage
- Cloud API
- Future integrations

Business Engine depends on interfaces only.

## Platform

Cross-cutting infrastructure:

- Repository Framework
- Migration Framework
- Event Bus
- License Manager
- Permission Manager
- Configuration Manager
- Feature Manager
- Dashboard Framework
- Printing Framework
- Barcode Framework
- Local Storage Manager
- Logging
- Health
- Update Manager

No business rules.

---

# 6. Client Responsibilities

- Billing
- Product
- Customer
- Offers
- Reports
- Printing
- Barcode
- Dashboard
- Settings
- Offline Queue
- Synchronization Queue
- SQLite
- Feature Manager
- Permission Manager

Client must continue operating without internet.

---

# 7. Cloud Responsibilities

Cloud owns only:

- Authentication
- Licensing
- Synchronization
- Backup
- Business Calculator
- Business Intelligence
- AI Engine
- Notification Engine

Cloud never:
- Creates bills
- Calculates offers
- Performs billing

---

# 8. AI Boundary

No AI execution on the client.

Client contains:
- AI Chat UI
- AI Gateway

Flow:

Experience → Application Contract → AI Gateway → Cloud API → Spring Boot → Business Intelligence → LLM → Response

Internet is required for AI Chat.

---

# 9. Feature Management

Feature Manager evaluates:

- License
- Configuration
- Permission
- Runtime State

Examples:
- AI
- Backup
- Printer
- Barcode
- WhatsApp Reports
- Email
- Synchronization

---

# 10. Settings

Configured locally.

Examples:

- Business Profile
- Printer
- Barcode
- Reports
- Daily/Weekly/Monthly schedules
- WhatsApp number
- Email
- AI enable/disable
- Backup
- Synchronization
- Theme
- Language

Settings synchronize to the cloud when applicable.

---

# 11. Synchronization

Client is the system of record.

Synchronization uploads operational data and required settings.

Cloud uses synchronized data for:

- Business calculations
- Business Intelligence
- AI
- Notifications

Cloud never directly modifies operational client data.

---

# 12. Coding Standards

Cloud:
- Java 21
- Package prefix: `com.bizcopilot.*`

Client:
- Angular
- TypeScript
- Interface-first
- SOLID
- Clean Architecture
- Repository Pattern

---

# 13. Documentation Structure

```
docs/

architecture/
    00_Architecture_Blueprint.md

specifications/
    Platform.md
    Application_Contract.md
    Billing.md
    Product.md
    Customer.md
    Offer.md
    Report.md
    Backup.md
    AI.md
    Settings.md

experiences/
    JuiceShop.md
    Cafe.md
    Hardware.md
    Medical.md
```

---

# 14. V2 Roadmap

Future modules only:

- Inventory
- Purchase
- Supplier
- Multi Branch
- Expenses
- Loyalty
- Credit
- CRM
- Workflow
- Analytics

---

# 15. Constitutional Rules

1. UI never contains business logic.
2. UI communicates only through the Application Contract.
3. Business Engine is domain independent.
4. Platform contains no business rules.
5. Client is fully functional offline.
6. Cloud provides optional intelligence and services.
7. New Experiences must integrate only through Application_Contract.md.
8. Public contracts should remain backward compatible whenever practical.
