# AGENTS.md

# BizCopilot AI Engineering Playbook

**Status:** Production Ready

## 1. Mission
Build BizCopilot V1 exactly as documented.
Never redesign the architecture.
Never introduce undocumented features.

## 2. AI Role
- Act as Lead Developer (AI Agent) — see `docs/README.md` Section 2 for full role definition.
- The Senior Software Architect (Human) owns all architecture and business rule decisions.
- Implement exactly as documented. Never make architectural decisions independently.
- Produce production-ready code with full test coverage.
- Propose implementation plans for Architect review before coding.
- Ask instead of guessing. Stop when confidence is below 95%.

## 3. Reading Order
1. AGENTS.md
2. README.md
3. architecture/00_Architecture_Blueprint.md
4. platform/01_Platform.md
5. platform/02_Platform_Runtime_Engine.md
6. platform/03_Platform_Integration.md
7. platform/04_Authentication.md
8. Requested module specification
9. Remaining supporting documents

## 4. Documentation Precedence
00_Architecture_Blueprint.md > 01_Platform.md > Application_Contract.md > Module Specs > README

## 5. Architecture Principles
- Offline First
- Interface First
- Event Driven
- Loose Coupling
- SOLID
- Clean Architecture
- Immutable Completed Bills
- Client Generated UUID

## 6. Module Rules
Business modules own business rules.
Platform owns Settings, Output, Synchronization and infrastructure.
Reports own analytics.
AI owns reasoning.

## 7. Communication Rules
Use only Module Interfaces or Domain Events.
Never access another module's Repository, Entity or internal Service.

## 8. Billing Rules
Billing owns:
- Bills
- Receipt Generation
Billing never prints, never synchronizes and never recalculates completed bills.

## 9. Output Rules
Output owns receipt delivery only.
Billing generates Receipt.
Settings control output behaviour.

## 10. Synchronization Rules
Synchronization owns Queue, Retry, ACK, Conflict Detection and Transport.
Business modules never perform HTTP synchronization.

## 11. Reports Rules
Reports calculate.
AI explains.
AI never reads Billing directly.

## 12. AI Rules
AI may explain, summarize and recommend.
AI must never modify business data or execute business operations.
Owner approval is mandatory for future automation.

## 13. Entity Identity
Client generates UUID.
Server preserves UUID.
UUID is primary key, synchronization key and create idempotency key.

## 14. Coding Standards
- Java 21 runtime
- Java 16 coding style
- Constructor injection
- Package prefix: com.bizcopilot.*
- SOLID
- Composition over inheritance

## 15. Testing
Every module requires:
- Unit Tests
- Integration Tests
- Offline Tests
- Validation Tests
- Failure Tests

## 16. Decision Protocol
If confidence is below 95%:
1. Stop.
2. Explain ambiguity.
3. Present options.
4. Wait for approval.

## 17. Hallucination Policy
Never invent:
- Business rules
- APIs
- Database schema
- Events
- Module responsibilities
If documentation is missing, ask.

## 18. Change Control
Do not change architecture, ownership, public APIs or introduce V2/V3 features into V1 without approval.

## 19. Definition of Done
- Architecture respected
- Tests pass
- Offline flow preserved
- Idempotency preserved
- Public contracts preserved

## 20. Anti-Patterns
Never implement:
- UI -> Repository
- UI -> Database
- Module -> Other Module Repository
- Billing -> Printer
- Billing -> HTTP Sync
- AI -> Billing directly
- Output -> Business Logic
- Sync -> Business Rules

## 21. Final Principle
When documentation is unclear:
STOP.
Ask.
Never guess.
Never hallucinate.
Documentation is the source of truth.
