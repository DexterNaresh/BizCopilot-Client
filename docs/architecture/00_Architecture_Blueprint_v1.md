# 00_Architecture_Blueprint.md

> **BizCopilot V1 Architecture Blueprint**
>
> **Status:** Architecture Constitution (Frozen Foundation)

---

# 1. Purpose

This document is the architectural constitution for BizCopilot V1.

Every implementation document (`Platform.md`, `Application_Contract.md`, `Billing.md`, `Product.md`, `Customer.md`, `Offer.md`, `Report.md`, `Backup.md`, `Settings.md`, `AI.md`) must comply with this blueprint.

---

# 2. Product Vision

BizCopilot is a **local-first, offline-first business platform** for small businesses.

The client must continue operating without internet access.

Cloud services are optional value-added capabilities including:

- Synchronization
- Backup
- Licensing
- Business Intelligence
- AI
- Notifications

---

# 3. Core Principles

- Local First
- Offline First
- One Responsive Angular Experience
- Business logic resides on the client
- Cloud never performs operational billing
- Interface-first architecture
- Event-driven communication
- Repository pattern
- Modular architecture
- AI-ready
- Replaceable UI Experiences

---

# 4. Deployment Targets

Single Angular codebase deployed as:

- Windows (.exe) using Tauri
- Android Phone using Capacitor
- Android Tablet using Capacitor
- Future: macOS using Tauri
- Future: iOS/iPadOS using Capacitor
- Future: Browser

Deployment wrappers change. Business logic does not.

---

# 5. Layered Architecture

```text
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
```

Layers communicate only through adjacent layers.

---

# 6. Layer Responsibilities

## Experience

Owns:
- Navigation
- Responsive layout
- Forms
- Dialogs
- Widgets
- User interaction

Never owns:
- Business rules
- Database access
- Repository
- Cloud communication
- Platform services

## Application Contract

Public API between the Experience and Business Engine.

Responsibilities:

- Request validation
- Workflow orchestration
- Permission checks
- Feature checks
- Transaction boundaries
- Error mapping
- Response mapping
- Event publishing
- Synchronization trigger

Contains **no business rules**.

## Business Engine

Domain-independent modules:

- Billing
- Product
- Customer
- Offer
- Report
- Backup
- Settings
- AI Gateway

Business modules never know business type (Cafe, Juice Shop, Hardware, etc.).

## Integration Layer

Adapters for:

- Printing
- Barcode
- Local Storage
- Cloud API
- Future integrations

## Platform

Cross-cutting services:

- Repository Framework
- Migration Framework
- Event Bus
- Configuration Manager
- License Manager
- Permission Manager
- Feature Manager
- Dashboard Framework
- Printing Framework
- Barcode Framework
- Local Storage Manager
- Logging
- Health
- Update Manager

---

# 7. Client Responsibilities

The client owns:

- Billing
- Product
- Customer
- Offer
- Reports
- Dashboard
- Printing
- Barcode
- Local SQLite
- Offline Queue
- Synchronization Queue
- Settings
- Feature Manager

The client must remain fully operational without internet.

---

# 8. Cloud Responsibilities

Cloud owns:

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
- Performs operational billing

---

# 9. AI Architecture

No AI execution exists on the client.

Client contains:

- AI Chat screen
- AI Gateway

Flow:

Experience → Application Contract → AI Gateway → Cloud API → Spring Boot → Business Intelligence → LLM → Response

Internet is required for AI chat.

---

# 10. Feature Manager

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
- Synchronization
- WhatsApp Reports
- Email Reports

---

# 11. Settings

Settings are configured locally and synchronized when applicable.

Examples:

- Business profile
- Printer
- Barcode
- Daily/Weekly/Monthly reports
- WhatsApp number
- Email
- AI enable/disable
- Backup
- Synchronization
- Theme
- Language

---

# 12. Synchronization

The client is the system of record.

Synchronization uploads operational data and required settings.

Cloud uses synchronized data for:

- Business calculations
- Business intelligence
- AI
- Notifications

Cloud never modifies operational client data directly.

---

# 13. Coding Standards

## Cloud

- Java 21
- Package prefix: `com.bizcopilot.*`

## Client

- Angular
- TypeScript
- SOLID
- Clean Architecture
- Interface-first
- Repository Pattern

---

# 14. Documentation Structure

```text
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
    Settings.md
    AI.md

experiences/
    JuiceShop.md
    Cafe.md
    Hardware.md
    Medical.md
```

---

# 15. V2 Roadmap

Future modules (reference only):

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

# 16. Constitutional Rules

1. UI never contains business logic.
2. UI communicates only through the Application Contract.
3. Business Engine remains domain independent.
4. Platform contains no business rules.
5. Client is fully functional offline.
6. Cloud provides optional intelligence and services.
7. Experiences integrate only through `Application_Contract.md`.
8. Public contracts should remain backward compatible whenever practical.
