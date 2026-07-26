# Application_Contract.md

> BizCopilot V1 - Application Contract
>
> Status: Frozen (Public Client API)

## 1. Purpose

The Application Contract is the only public API exposed by the Business Engine.

Every Experience (Juice Shop, Cafe, Hardware, etc.) communicates exclusively through this layer.

## 2. Responsibilities

Owns:
- Request validation
- Workflow orchestration
- Feature checks
- Permission checks
- Transaction boundaries
- Response mapping
- Error mapping
- Event publishing
- Synchronization trigger

Never owns:
- Business rules
- Repository access
- SQLite access
- Cloud implementation

## 3. Architecture

Experience
→ Application Contract
→ Business Engine
→ Integration Layer
→ Platform

Forbidden:
- UI → Business Module
- UI → Repository
- UI → SQLite
- UI → Platform

## 4. Application Services

SalesApplication
- Complete Sale
- Cancel Sale
- Reprint Bill

ProductApplication
- Create
- Update
- Delete
- Search

CustomerApplication
- Create
- Update
- Search

OfferApplication
- Apply
- Validate
- Manage

ReportApplication
- Reports
- Export

SettingsApplication
- Business
- Printer
- AI
- Backup
- Sync

AIApplication
- Submit Question
- Return Response
- Internet detection

## 5. Workflow

Typical flow:

1. Validate Request
2. Feature Check
3. Permission Check
4. Execute Business Engine
5. Commit Transaction
6. Publish Event
7. Trigger Sync
8. Return Response

## 6. Validation

All input validation occurs before entering the Business Engine.

## 7. Transaction Boundary

Application Contract owns transaction scope.

## 8. Events

Business completion publishes events.

Example:

Complete Sale
→ BillCreatedEvent
→ Runtime Engine
→ SyncQueue

## 9. Request / Response

Use Request DTOs and Response DTOs.

Return standardized responses.

## 10. Versioning

Application Contract is the stable public API.

## 11. Experience Independence

Future Experiences require only:
- Application_Contract.md
- Their own Experience specification

## 12. AI Coding Rules

- UI uses only Application Services.
- Never call repositories directly.
- Never bypass Feature Manager.
- Keep orchestration here.
- Keep business rules in Business modules.
