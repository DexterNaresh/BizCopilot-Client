# IMPLEMENTATION_WORKFLOW.md

> **BizCopilot V1 – AI Implementation Workflow**
>
> **Status:** Mandatory Development Process
>
> This workflow governs how the Senior Software Architect and Lead Developer (AI Agent) collaborate.
> See `README.md` Section 2 for full role definitions.

---

# 1. Objectives

- Preserve the frozen architecture.
- Implement one module at a time.
- Keep business logic isolated.
- Prevent architectural drift.
- Deliver production-ready code.

---

# 2. Development Principles

- Architecture First
- Platform First
- One Module at a Time
- Small Pull Requests
- Test Before Merge
- Freeze After Approval

---

# 3. Mandatory Reading Order

Before coding any feature:

1. README.md
2. architecture/00_Architecture_Blueprint.md
3. platform/01_Platform.md
4. platform/02_Platform_Runtime_Engine.md
5. platform/03_Platform_Integration.md
6. platform/04_Authentication.md
7. specifications/Application_Contract.md
8. specifications/Permission_Matrix.md
9. specifications/Synchronization.md
10. Target specification (Billing, Product, etc.)
11. experiences/demo/Demo_Experience.md
12. experiences/demo/Design_System.md
13. experiences/demo/Component_Catalog.md
14. experiences/demo/UI_Blueprints.md

Do not skip steps.

---

# 4. Module Development Lifecycle

| Step | Owner | Description |
|---|---|---|
| 1. Requirement | Architect | Define what to build |
| 2. Read Documentation | AI Agent | Read all docs per reading order |
| 3. Architecture Validation | AI Agent proposes → Architect approves | Confirm approach fits architecture |
| 4. Implementation | AI Agent | Write production-ready code |
| 5. Unit Tests | AI Agent | Full test coverage |
| 6. Integration Tests | AI Agent | Cross-module and offline scenarios |
| 7. Architecture Review | Architect | Verify no violations |
| 8. Bug Fixes | AI Agent | Fix issues found in review |
| 9. Approval | Architect | Accept the module |
| 10. Freeze | Architect | Mark module as frozen |

---

# 5. Module Scope Rules

Implement only the requested module.

Do not:
- Modify unrelated modules.
- Introduce V2/V3 features.
- Redesign architecture.
- Change public contracts.

---

# 6. AI Agent Implementation Checklist

Before coding, the AI Agent must confirm:

- [ ] Architecture understood (Blueprint read)
- [ ] Platform understood (Platform + Runtime + Integration read)
- [ ] Application Contract understood
- [ ] Permission Matrix understood
- [ ] Target module specification understood
- [ ] UI references understood (if applicable)
- [ ] Role boundaries understood (see `README.md` Section 2)
- [ ] Implementation plan proposed and approved by Architect

If anything is unclear, stop and ask the Architect.

---

# 7. Coding Standards

- Java 21 (Server)
- Angular + TypeScript (Client)
- Package prefix: com.bizcopilot.*
- Interface-first
- SOLID
- Repository Pattern
- Clean Architecture
- Dependency Injection

---

# 8. Layer Rules

UI
→ Application Contract
→ Business Engine
→ Platform
→ Repository
→ SQLite

Forbidden:
- UI → SQLite
- UI → Repository
- UI → Business Services
- Business Modules → Cloud directly

---

# 9. Testing Requirements

Each module must include:

- Unit Tests
- Integration Tests
- Offline scenarios
- Error handling
- Permission checks
- Feature flag validation

---

# 10. Code Review Checklist

Verify:

- Architecture compliance
- Platform compliance
- Module boundaries
- Naming consistency
- Error handling
- Logging
- Tests passing
- No duplicated business logic

---

# 11. Refactoring Rules

Allowed:
- Improve readability
- Remove duplication
- Improve performance without changing behavior

Not Allowed:
- Change architecture
- Break contracts
- Introduce new features

---

# 12. Definition of Done

A module is complete when:

- Specification implemented
- Tests pass
- UI (if applicable) matches Experience documents
- No architecture violations
- Documentation comments added
- Code reviewed
- Approved

---

# 13. Freeze Rules

After approval:

- Treat module as frozen.
- Maintain backward compatibility.
- Future changes require explicit approval.

---

# 14. AI Prompt Template

Use this workflow for every task:

1. Read README.md.
2. Follow the documented reading order.
3. Implement only the requested module.
4. Do not invent business rules.
5. If documentation is ambiguous, stop and list questions.
6. Generate production-ready code with tests.

---

# 15. Review Prompt

Review implementation against:

- Architecture
- Platform
- Application Contract
- Target Specification
- Experience Documents

Report only violations. Do not redesign.

---

# 16. Final Principles

- Offline-first is mandatory.
- Platform owns infrastructure.
- Business Engine owns business rules.
- Experience owns presentation.
- Application Contract is the only bridge.
- Small, reviewable increments are preferred over large changes.

---

# 17. Role Assignments Per Stage

| Stage | Architect | AI Agent |
|---|---|---|
| Vision & Scope | Defines | Reads |
| Architecture | Defines & Freezes | Reads & Follows |
| Specifications | Authors & Approves | Reads & Implements |
| Implementation Plan | Reviews & Approves | Proposes |
| Coding | Reviews | Executes |
| Testing | Reviews results | Writes & Runs |
| Code Review | Performs | Responds to feedback |
| Approval & Freeze | Decides | Awaits |
| Documentation Changes | Approves | Proposes |
| Bug Fixes | Assigns | Fixes |
| Refactoring | Approves scope | Executes within scope |

The AI Agent never proceeds to Implementation without Architect approval of the plan.
