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

# 2. Project Roles

BizCopilot is built by a two-role team: a human architect and an AI developer agent.

---

## Senior Software Architect (Human)

**Authority:** Final decision maker on all architecture, design, and business rule questions.

### Responsibilities

- Define and freeze the system architecture
- Author and approve all specification documents
- Make architectural decisions when ambiguity exists
- Review and approve module implementations
- Define business rules and module boundaries
- Approve or reject changes to public contracts
- Control V1 scope — decide what enters V1 vs. roadmap
- Own the product vision and prioritization

### Required Skill Set

- System design and distributed architecture
- Clean Architecture, SOLID, Domain-Driven Design
- Offline-first and local-first system patterns
- Angular and TypeScript (client architecture)
- Java 21 and Spring Boot (server architecture)
- SQLite and relational data modeling
- Event-driven architecture and messaging patterns
- Mobile deployment (Capacitor) and desktop deployment (Tauri)
- API design and contract-first development
- Business domain understanding (small business operations, billing, POS)

---

## Lead Developer — AI Agent

**Authority:** Implements code and documentation changes within the boundaries set by the Architect. Never makes architectural or business rule decisions independently.

### Responsibilities

- Read and internalize all documentation before coding
- Implement modules exactly as specified
- Write production-ready code with full test coverage
- Follow the frozen architecture without deviation
- Flag ambiguity, contradictions, or missing specs — never guess
- Generate unit tests, integration tests, and offline tests
- Ensure code passes all architectural compliance checks
- Propose implementation plans for Architect review before coding
- Refactor only within approved boundaries (readability, duplication, performance)

### Required Skill Set

- Angular 17+ with standalone components, signals, and reactive patterns
- TypeScript (strict mode, type safety)
- RxJS and state management
- Clean Architecture implementation in Angular
- Repository pattern with SQLite (via sql.js or Capacitor SQLite plugin)
- Event bus patterns in TypeScript
- Responsive UI development (mobile-first)
- Jasmine/Karma unit testing and Cypress/Playwright integration testing
- Git workflows and atomic, reviewable commits
- Documentation comprehension and spec-driven development

---

## Decision Authority Matrix

| Decision Type | Who Decides |
|---|---|
| Architecture changes | Architect only |
| New business rules | Architect only |
| Module boundaries | Architect only |
| V1 scope changes | Architect only |
| Public contract changes | Architect only |
| Implementation approach | AI Agent proposes → Architect approves |
| Code structure within a module | AI Agent (within spec) |
| Test strategy within a module | AI Agent (within spec) |
| Refactoring (no behavior change) | AI Agent (within rules) |
| Bug fixes | AI Agent (within spec) |

---

## Escalation Protocol

When the AI Agent encounters:

1. **Missing specification** → Stop. List what is missing. Wait for Architect.
2. **Contradicting specifications** → Stop. Quote both sources. Present options. Wait for Architect.
3. **Ambiguous requirement** → Stop. Explain the ambiguity. Propose interpretations. Wait for Architect.
4. **Confidence below 95%** → Stop. Explain uncertainty. Wait for Architect.

The AI Agent must **never** guess, invent business rules, or make architectural assumptions.


# 3. High-Level Architecture

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

# 4. Documentation Structure

```
docs/
│
├── README.md
├── IMPLEMENTATION_WORKFLOW.md
├── architecture/
│   └── 00_Architecture_Blueprint.md
├── platform/
│   ├── 01_Platform.md
│   ├── 02_Platform_Runtime_Engine.md
│   ├── 03_Platform_Integration.md
│   └── 04_Authentication.md
├── specifications/
│   ├── Application_Contract.md
│   ├── Permission_Matrix.md
│   ├── Synchronization.md
│   ├── Billing.md
│   ├── Product.md
│   ├── Customer.md
│   ├── Offer.md
│   ├── Report.md
│   ├── Backup.md
│   ├── Settings.md
│   └── AI.md
├── experiences/
│   └── demo/
│       ├── Demo_Experience.md
│       ├── Design_System.md
│       ├── Component_Catalog.md
│       ├── UI_Blueprints.md
│       └── UI_UX_Enhancements.md
└── roadmap/
    └── Future_Roadmap_V2_V3.md
```

## architecture/

System constitution and cross-cutting architecture decisions.

## platform/

Reusable infrastructure shared by every business module.

## specifications/

Business modules, business behavior, and authorization rules.

## experiences/

UI, UX, design system and reusable frontend components.

## roadmap/

Future ideas only. See `roadmap/Future_Roadmap_V2_V3.md`.

**Never implement features from the roadmap unless they are promoted into specifications.**

---

# 5. Reading Order (Mandatory)

Every developer and AI coding agent must read documents in this order:

1. `README.md`
2. `architecture/00_Architecture_Blueprint.md`
3. `platform/01_Platform.md`
4. `platform/02_Platform_Runtime_Engine.md`
5. `platform/03_Platform_Integration.md`
6. `platform/04_Authentication.md`
7. `specifications/Application_Contract.md`
8. `specifications/Permission_Matrix.md`
9. `specifications/Synchronization.md`
10. Relevant business specification(s)
11. `experiences/demo/Demo_Experience.md`
12. `experiences/demo/Design_System.md`
13. `experiences/demo/Component_Catalog.md`
14. `experiences/demo/UI_Blueprints.md`
15. `experiences/demo/UI_UX_Enhancements.md` *(UI work only)*

For development workflow rules, also read: `IMPLEMENTATION_WORKFLOW.md`

---

# 6. Module Responsibilities

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

Authorization is enforced here via `specifications/Permission_Matrix.md`.

## Permission Matrix

Single source of truth for all role and permission definitions.

- Defines Owner and Employee roles
- Defines all permission keys
- Defines which Employee permissions are Owner-configurable
- See `specifications/Permission_Matrix.md`

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

# 7. Development Workflow

Every implementation should follow:

Requirement → Architecture → Platform → Application Contract → Business Specification → Experience → Testing

For the full step-by-step process, code review checklist, and freeze rules, see:
`IMPLEMENTATION_WORKFLOW.md`

---

# 8. Module Reading Matrix

| Implementing | Read First |
|---|---|
| Billing | Architecture → Platform → Runtime → App Contract → Permission Matrix → Billing |
| Product | Architecture → Platform → App Contract → Permission Matrix → Product |
| Customer | Architecture → Platform → App Contract → Permission Matrix → Customer |
| Offer | Architecture → Platform → App Contract → Permission Matrix → Offer |
| Report | Architecture → Platform → Billing → Offer → Permission Matrix → Report |
| Backup | Architecture → Platform → Runtime → Backup |
| Settings | Architecture → Platform → Permission Matrix → Settings |
| Synchronization | Architecture → Platform → Runtime → Auth → Sync |
| AI | Architecture → Platform → Report → Permission Matrix → AI |
| UI | Architecture → Platform → App Contract → Permission Matrix → Demo Experience → Design System → Component Catalog → UI Blueprints → UI UX Enhancements |

---

# 9. Coding Standards

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

# 10. Architectural Rules

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

# 11. AI Agent Coding Rules

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

# 12. Common Mistakes to Avoid

Do not:

- Put business logic in UI.
- Generate identifiers inside business modules.
- Access SQLite outside repositories.
- Duplicate validation across layers.
- Call AI providers directly from the client.
- Implement roadmap features in V1.

---

# 13. V1 Scope

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
- Permission Matrix

Future capabilities belong only in `roadmap/Future_Roadmap_V2_V3.md`.

---

# 14. Project Status

Architecture: Frozen

Platform: Frozen

Business Specifications: Frozen

Experience Specifications: Frozen

Roadmap: Reference Only

---

# 15. Final Principles

- Offline-first is mandatory.
- Local SQLite is the source of truth.
- Synchronization never blocks billing.
- AI executes only on the server.
- Platform owns infrastructure.
- Business Engine owns business rules.
- Experience owns presentation.
- Application Contract is the only communication bridge between UI and Business Engine.

When in doubt, follow the Architecture Blueprint.
