# BizCopilot Documentation Guide

> **Read this document before reading any other documentation or writing any code.**
>
> This README is the onboarding guide for developers and AI coding agents.

---

# 1. Project Vision

BizCopilot is an **offline-first, local-first business platform** for small businesses.

Core principles:

- Fast billing
- Responsive UI (Mobile, Tablet, Desktop)
- One Business Engine
- Multiple UI Experiences
- Cloud is optional
- AI runs on the server only
- Upgrade-safe
- Rollback-safe

---

# 2. High-Level Architecture

```text
Experience (UI)
      │
      ▼
Application Contract
      │
      ▼
Business Engine
      │
      ▼
Platform
      │
      ▼
SQLite (Local Source of Truth)
      │
      ▼
Optional Cloud Services
```

Every layer communicates only with the layer directly below it.

---

# 3. Documentation Structure

```
docs/
│
├── README.md
├── architecture/
├── platform/
├── specifications/
├── experiences/
└── roadmap/
```

## architecture/

System constitution and cross-cutting architecture decisions.

## platform/

Reusable infrastructure shared by every business module.

## specifications/

Business modules and business behavior.

## experiences/

UI, UX, design system and reusable frontend components.

## roadmap/

Future ideas only.

**Never implement features from the roadmap unless they are promoted into specifications.**

---

# 4. Reading Order (Mandatory)

Every developer and AI coding agent must read documents in this order:

1. README.md
2. architecture/00_Architecture_Blueprint.md
3. platform/01_Platform.md
4. platform/02_Platform_Runtime_Engine.md
5. platform/03_Platform_Integration.md
6. specifications/Application_Contract.md
7. Relevant business specification(s)
8. experiences/demo/Demo_Experience.md
9. experiences/demo/Design_System.md
10. experiences/demo/Component_Catalog.md

---

# 5. Module Responsibilities

## Architecture

Defines system rules and constitutional decisions.

## Platform

Owns:

- Runtime
- Identity
- Sequence Service
- Repository
- Migration
- Rollback
- Recovery
- Configuration Provider
- Feature Manager
- License Manager
- Event Bus
- Logging

Contains **no business rules**.

## Application Contract

Only communication layer between UI and Business Engine.

## Business Specifications

Own business behavior only:

- Billing
- Product
- Customer
- Offer
- Report
- Backup
- Settings
- AI

## Experience

Owns presentation only.

Contains:

- Screens
- Layout
- Navigation
- Components
- UX

Contains **no business logic**.

---

# 6. Development Workflow

Every implementation should follow:

Requirement

↓

Architecture

↓

Platform

↓

Application Contract

↓

Business Specification

↓

Experience

↓

Testing

---

# 7. Module Reading Matrix

| Implementing | Read First |
|---------------|------------|
| Billing | Architecture → Platform → Runtime → App Contract → Billing |
| Product | Architecture → Platform → App Contract → Product |
| Customer | Architecture → Platform → App Contract → Customer |
| Offer | Architecture → Platform → App Contract → Offer |
| Report | Architecture → Platform → Billing → Offer → Report |
| Backup | Architecture → Platform → Runtime → Backup |
| Settings | Architecture → Platform → Settings |
| AI | Architecture → Platform → Report → AI |
| UI | Architecture → Platform → App Contract → Demo Experience → Design System → Component Catalog |

---

# 8. Coding Standards

Backend

- Java 21
- Spring Boot
- Package prefix: `com.bizcopilot.*`

Client

- Angular
- TypeScript
- Responsive
- Component-first

General

- SOLID
- Interface-first
- Clean Architecture
- Repository Pattern
- Event-driven where appropriate

---

# 9. Architectural Rules

Always:

- UI → Application Contract
- Application Contract → Business Engine
- Business Engine → Platform
- Platform → Repository → SQLite

Never:

- UI → SQLite
- UI → Repository
- UI → Business Service
- Business Module → Cloud directly

---

# 10. AI Coding Rules

Before implementing any feature:

1. Read this README.
2. Read the Architecture Blueprint.
3. Read Platform documents.
4. Read Application Contract.
5. Read the requested specification.
6. Read Experience documents if UI work is required.

Follow this precedence if documentation conflicts:

1. Architecture Blueprint
2. Platform
3. Application Contract
4. Business Specifications
5. Experience Documents
6. Roadmap

---

# 11. Common Mistakes to Avoid

Do not:

- Put business logic in UI.
- Generate identifiers inside business modules.
- Access SQLite outside repositories.
- Duplicate validation across layers.
- Call AI providers directly from the client.
- Implement roadmap features in V1.

---

# 12. V1 Scope

Implemented modules:

- Platform
- Billing
- Product
- Customer
- Offer
- Report
- Backup
- Settings
- AI

Future capabilities belong only in the roadmap.

---

# 13. Project Status

Architecture: Frozen

Platform: Frozen

Business Specifications: Frozen

Experience Specifications: Frozen

Roadmap: Reference Only

---

# 14. Final Principles

- Offline-first is mandatory.
- Local SQLite is the source of truth.
- Synchronization never blocks billing.
- AI executes only on the server.
- Platform owns infrastructure.
- Business Engine owns business rules.
- Experience owns presentation.
- Application Contract is the only communication bridge between UI and Business Engine.

When in doubt, follow the Architecture Blueprint.
