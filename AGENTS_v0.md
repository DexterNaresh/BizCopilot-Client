# AGENTS.md

> **BizCopilot AI Agent Instructions**
>
> **Purpose:** This file is the operational guide for any AI coding agent working on the BizCopilot codebase.

---

# Mission

Build BizCopilot V1 exactly as documented.

Do not redesign the architecture.

Do not introduce undocumented features.

Implement one module at a time.

---

# Before Writing Code

Read these documents in order:

1. docs/README.md
2. docs/IMPLEMENTATION_WORKFLOW.md
3. docs/architecture/00_Architecture_Blueprint.md
4. docs/platform/01_Platform.md
5. docs/platform/02_Platform_Runtime_Engine.md
6. docs/platform/03_Platform_Integration.md
7. docs/specifications/Application_Contract.md
8. The requested business specification
9. docs/experiences/demo/Demo_Experience.md
10. docs/experiences/demo/Design_System.md
11. docs/experiences/demo/Component_Catalog.md
12. docs/experiences/demo/UI_Blueprints.md

Never skip the reading order.

---

# Documentation Precedence

If two documents conflict, follow this order:

1. Architecture Blueprint
2. Platform
3. Application Contract
4. Business Specifications
5. Experience Documents
6. Roadmap

---

# Architecture Rules

Always follow:

UI
→ Application Contract
→ Business Engine
→ Platform
→ Repository
→ SQLite

Never:

- UI → SQLite
- UI → Repository
- UI → Business Services
- Business Modules → Cloud directly

---

# Module Boundaries

Platform owns:

- Runtime
- Identity
- Sequence Service
- Repository
- Migration
- Recovery
- Rollback
- Configuration
- Licensing
- Feature Management

Business modules own business rules only.

Experience owns presentation only.

---

# Implementation Rules

- Implement only the requested module.
- Do not modify unrelated modules.
- Do not implement V2/V3 roadmap features.
- Use interface-first design.
- Follow SOLID and Clean Architecture.
- Keep public contracts backward compatible.

---

# UI Rules

- Responsive by default.
- Mobile, tablet and desktop supported.
- Use Design_System.md.
- Reuse Component_Catalog.md.
- Follow UI_Blueprints.md.
- No business logic in UI.

---

# AI Rules

- AI execution is server-side only.
- Client provides chat UI only.
- Never call an LLM directly from the client.

---

# Testing Rules

Every module should include:

- Unit tests
- Integration tests
- Offline scenarios
- Error handling
- Feature flag validation
- Permission validation

---

# If Documentation Is Unclear

Stop coding.

List the ambiguity.

Request clarification.

Do not invent business rules.

---

# Definition of Done

A task is complete only when:

- Architecture is respected.
- Module specification is implemented.
- Tests pass.
- No architecture violations exist.
- UI matches the Experience documents (if applicable).

---

# Final Principle

Preserve the architecture.

Prefer small, reviewable changes.

When in doubt, follow the documentation rather than assumptions.
