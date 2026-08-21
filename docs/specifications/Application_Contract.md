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
- Evaluate Offers
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

1. Validate Request (shape, required fields)
2. Feature Check (Feature Manager — is the feature enabled?)
3. Permission Check (Permission Manager — see `Permission_Matrix.md`)
4. Execute Business Engine
5. Commit Transaction
6. Publish Event
7. Trigger Sync
8. Return Response

> **Permission Rule:** Steps 2 and 3 must both pass before Step 4 is invoked.
> The Business Engine must never be reached if a feature or permission check fails.
> See [Permission_Matrix.md](./Permission_Matrix.md) for all role and permission definitions.

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

All operations use typed Request DTOs and Response DTOs.

### Standard Response Envelope

Every Application Service method returns a standardized response:

```typescript
// Success
{
  success: true,
  data: { ...operationSpecificResult }
}

// Failure
{
  success: false,
  error: {
    code: string,      // machine-readable error code (see Section 13)
    message: string,   // human-readable message for the UI
    field?: string     // optional: the field that caused a validation error
  }
}
```

Rules:
- `data` is only present when `success: true`.
- `error` is only present when `success: false`.
- The UI must never assume success without checking the `success` flag.

## 10. Versioning

Application Contract is the stable public API.

## 11. Experience Independence

Future Experiences require only:
- Application_Contract.md
- Their own Experience specification

## 12. AI Coding Rules

- UI uses only Application Services. Never call Business modules or Repositories directly.
- Never bypass Feature Manager.
- Never bypass Permission Manager.
- Always check Feature and Permission before invoking the Business Engine.
- Return `PERMISSION_DENIED` error code when a permission check fails.
- Return `FEATURE_DISABLED` error code when a feature check fails.
- Keep business orchestration here. Keep business rules in Business modules.
- Every Application Service method must return the standard response envelope.

---

## 13. Error Code Registry

All error codes returned by the Application Contract:

| Code | Triggered When |
|---|---|
| `PERMISSION_DENIED` | User role does not have the required permission |
| `FEATURE_DISABLED` | The requested feature is not enabled |
| `VALIDATION_ERROR` | Request shape or required field is invalid |
| `PRODUCT_NOT_FOUND` | Referenced product does not exist |
| `PRODUCT_UNAVAILABLE` | Product is temporarily unavailable |
| `PRODUCT_ARCHIVED` | Product is archived and cannot be billed |
| `BILL_NOT_FOUND` | Referenced bill does not exist |
| `BILL_ALREADY_COMPLETED` | Operation attempted on an already-completed bill |
| `BILL_ALREADY_VOIDED` | Operation attempted on an already-voided bill |
| `CUSTOMER_NOT_FOUND` | Referenced customer does not exist |
| `CUSTOMER_ARCHIVED` | Referenced customer is archived |
| `OFFER_NOT_FOUND` | Referenced offer does not exist |
| `PAYMENT_INSUFFICIENT` | Payment amount does not cover bill total |
| `PAYMENT_METHOD_DISABLED` | Selected payment method is disabled in Settings |
| `AI_UNAVAILABLE` | AI feature requires internet or is not licensed |
| `BACKUP_UNAVAILABLE` | Backup feature is not licensed or cloud is unreachable |
| `DUPLICATE_BARCODE` | Barcode already assigned to another product |
| `DUPLICATE_PHONE` | Phone number already assigned to another customer |
| `UNKNOWN_ERROR` | Unexpected error — see logs for details |

---

## 14. Permission Enforcement

Authorization for every Application Contract operation is defined in:

[Permission_Matrix.md](./Permission_Matrix.md)

The Permission Matrix is the **single source of truth** for:
- Which roles can perform which operations.
- Which Employee permissions are configurable by the Owner.
- The enforcement flow and error behavior.

Every developer and AI coding agent implementing an Application Service must:
1. Identify the required permission key from `Permission_Matrix.md`.
2. Call `PermissionManager.check(userId, permissionKey)` before invoking the Business Engine.
3. Return `PERMISSION_DENIED` immediately if the check fails.
