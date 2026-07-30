# Permission_Matrix.md

> **BizCopilot V1 – Permission Matrix**
>
> **Status:** Frozen (V1)
>
> This document is the **single source of truth** for all authorization decisions in BizCopilot V1.
> Every Application Contract operation must validate permissions against this matrix before executing.

---

## 1. Purpose

Define which roles can perform which operations, and which Employee permissions the Owner can configure.

---

## 2. Roles (V1)

### Owner

- Full access to all operations.
- Can configure Employee permissions.
- Cannot be restricted.

### Employee

- Limited by default permissions.
- Owner may grant additional configurable permissions.
- Owner may revoke configurable permissions.

> **V2 Note:** A Manager role is planned but not part of V1. Do not implement it.

---

## 3. Permission Enforcement Rule

```
UI
  ↓
Application Contract
  ↓
Permission Manager (enforce here)
  ↓
Business Engine (assumes permission already validated)
```

Rules:
- The UI may **hide** actions based on role as a UX improvement.
- The UI is **not** a security boundary. Actions can be attempted directly.
- The Application Contract is the **only enforcement point**.
- The Business Engine **never** performs permission validation.
- A denied operation returns a standardized error: `PERMISSION_DENIED`.

---

## 4. Permission Definitions

| Permission Key | Description |
|---|---|
| `BILL_CREATE` | Start a new bill / add items |
| `BILL_COMPLETE` | Complete and finalize a bill |
| `BILL_VOID` | Void a completed bill |
| `BILL_REPRINT` | Reprint a completed bill receipt |
| `BILL_VIEW` | View bill history |
| `PRICE_OVERRIDE` | Override a product's price on a bill line |
| `CUSTOMER_CREATE` | Create a new customer record |
| `CUSTOMER_UPDATE` | Update an existing customer record |
| `CUSTOMER_ARCHIVE` | Archive a customer |
| `CUSTOMER_VIEW` | Search and view customers |
| `PRODUCT_CREATE` | Create a new product |
| `PRODUCT_UPDATE` | Update a product's details or price |
| `PRODUCT_ARCHIVE` | Archive a product |
| `PRODUCT_VIEW` | Search and view products |
| `PRODUCT_AVAILABILITY` | Mark a product as temporarily unavailable |
| `OFFER_CREATE` | Create a new offer/promotion |
| `OFFER_UPDATE` | Edit an existing offer |
| `OFFER_ACTIVATE` | Activate or deactivate an offer |
| `OFFER_VIEW` | View offers |
| `REPORT_VIEW` | Access sales, billing and product reports |
| `SETTINGS_VIEW` | View application settings |
| `SETTINGS_EDIT` | Modify application settings |
| `AI_CHAT` | Use the AI chat feature |
| `BACKUP_VIEW` | View backup status |
| `BACKUP_MANAGE` | Enable/disable backup and trigger restore |

---

## 5. Permission Matrix

`✅ Always` — role always has this permission, not configurable.
`🔧 Configurable` — denied by default, Owner may grant to Employee.
`❌ Never` — role cannot perform this action in V1.

| Permission | Owner | Employee (Default) | Employee (If Granted) |
|---|---|---|---|
| `BILL_CREATE` | ✅ Always | ✅ Always | — |
| `BILL_COMPLETE` | ✅ Always | ✅ Always | — |
| `BILL_REPRINT` | ✅ Always | ✅ Always | — |
| `BILL_VIEW` | ✅ Always | ✅ Always | — |
| `BILL_VOID` | ✅ Always | ❌ Denied | 🔧 Configurable |
| `PRICE_OVERRIDE` | ✅ Always | ❌ Denied | 🔧 Configurable |
| `CUSTOMER_CREATE` | ✅ Always | ✅ Always | — |
| `CUSTOMER_UPDATE` | ✅ Always | ❌ Denied | 🔧 Configurable |
| `CUSTOMER_ARCHIVE` | ✅ Always | ❌ Denied | ❌ Never |
| `CUSTOMER_VIEW` | ✅ Always | ✅ Always | — |
| `PRODUCT_CREATE` | ✅ Always | ❌ Denied | 🔧 Configurable |
| `PRODUCT_UPDATE` | ✅ Always | ❌ Denied | 🔧 Configurable |
| `PRODUCT_ARCHIVE` | ✅ Always | ❌ Denied | ❌ Never |
| `PRODUCT_VIEW` | ✅ Always | ✅ Always | — |
| `PRODUCT_AVAILABILITY` | ✅ Always | ❌ Denied | 🔧 Configurable |
| `OFFER_CREATE` | ✅ Always | ❌ Denied | ❌ Never |
| `OFFER_UPDATE` | ✅ Always | ❌ Denied | ❌ Never |
| `OFFER_ACTIVATE` | ✅ Always | ❌ Denied | ❌ Never |
| `OFFER_VIEW` | ✅ Always | ❌ Denied | 🔧 Configurable |
| `REPORT_VIEW` | ✅ Always | ❌ Denied | 🔧 Configurable |
| `SETTINGS_VIEW` | ✅ Always | ❌ Denied | ❌ Never |
| `SETTINGS_EDIT` | ✅ Always | ❌ Denied | ❌ Never |
| `AI_CHAT` | ✅ Always | ❌ Denied | 🔧 Configurable |
| `BACKUP_VIEW` | ✅ Always | ❌ Denied | ❌ Never |
| `BACKUP_MANAGE` | ✅ Always | ❌ Denied | ❌ Never |

---

## 6. Configurable Employee Permissions

The Owner may grant or revoke the following Employee permissions via Settings:

| Permission Key | Label in Settings UI |
|---|---|
| `BILL_VOID` | Allow employee to void bills |
| `PRICE_OVERRIDE` | Allow employee to override product prices |
| `CUSTOMER_UPDATE` | Allow employee to update customer records |
| `PRODUCT_CREATE` | Allow employee to create new products |
| `PRODUCT_UPDATE` | Allow employee to update product details |
| `PRODUCT_AVAILABILITY` | Allow employee to mark products unavailable |
| `OFFER_VIEW` | Allow employee to view offers |
| `REPORT_VIEW` | Allow employee to view business reports |
| `AI_CHAT` | Allow employee to use AI chat |

All other permissions are fixed and cannot be configured.

---

## 7. Permission Evaluation Flow

```
Request arrives at Application Contract
    ↓
Identify current user role (Owner / Employee)
    ↓
Identify required permission key for the operation
    ↓
Query Permission Manager
    ↓
Owner?     → Allow
    ↓
Employee?  → Check default permission
              ✅ Always → Allow
              ❌ Never  → PERMISSION_DENIED
              🔧 Configurable → Check Owner-granted config
                  Granted?  → Allow
                  Not granted? → PERMISSION_DENIED
```

---

## 8. Error Response

When a permission check fails, the Application Contract returns:

```json
{
  "success": false,
  "error": {
    "code": "PERMISSION_DENIED",
    "message": "You do not have permission to perform this action."
  }
}
```

The UI must handle `PERMISSION_DENIED` gracefully and not expose internal permission logic.

---

## 9. Business Rules

- Permission validation always occurs before the Business Engine is invoked.
- The Business Engine never performs permission checks.
- The UI may use role information to hide unavailable actions, but this is UX only.
- Employee configurable permissions are stored in Settings and loaded at startup.
- Permission state changes take effect immediately after the Owner saves the configuration.
- A `FeatureEnabled` / `FeatureDisabled` event is published for feature-flag-driven permissions (e.g., AI, Backup).

---

## 10. Extension Points (V2)

- Manager role (subset of Owner permissions)
- Branch-level permissions
- Time-restricted permissions (e.g., Employee can only bill between 9am–9pm)
- Audit trail of permission-denied events

---

## 11. AI Coding Rules

- Never implement permission checks inside a Business module.
- Never skip permission validation in the Application Contract.
- Always use the Permission Manager — never hardcode role comparisons.
- Return `PERMISSION_DENIED` for any unauthorized action.
- Never reveal what permission was missing in the error message returned to the client (security).
