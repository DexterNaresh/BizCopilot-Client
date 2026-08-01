# Customer.md

> **BizCopilot V1 – Customer Specification**
>
> **Status:** Frozen (V1)

## 1. Purpose

The Customer module manages customer information required to support sales.

It is not a CRM system.

---

## 2. Responsibilities

Owns:
- Customer master
- Customer profile
- Customer search
- Customer status
- Walk-In Customer seed
- Customer events

Never owns:
- Loyalty
- Credit
- Rewards
- Membership
- Marketing
- Analytics

---

## 3. Scope (V1)

Included:
- Create Customer
- Update Customer
- Archive Customer
- Search Customer
- Attach Customer to Bill
- Quick Customer
- Walk-In Customer (system-seeded)

Future:
- Loyalty
- Credit
- Membership
- Wallet
- Addresses
- GST Profile

---

## 4. Customer Model

- CustomerId (UUIDv7 or ULID)
- CustomerCode (immutable, e.g. `CUS-000001`)
- Name
- Phone (optional, UNIQUE)
- Email (optional)
- Status (`ACTIVE` | `ARCHIVED`)
- IsSystem (boolean)
- CreatedAt
- UpdatedAt

---

## 5. Customer Lifecycle

Create → Active → Archived

Rules:
- Never physically delete customers.
- Archived customers cannot be used for new bills.
- Historical bills remain unchanged.
- System-generated customers cannot be archived, edited, or deleted.

---

## 6. Walk-In Customer

### Definition

The Walk-In Customer is a **system-seeded customer record** created by the Platform during the first application startup.

It represents any transaction where the business does not capture customer details.

### Properties

| Field | Value |
|---|---|
| CustomerCode | `CUS-000000` |
| Name | `Walk-In Customer` |
| IsSystem | `true` |
| Status | `ACTIVE` (permanent) |

### Rules

- Seeded once by the Platform on first startup.
- Cannot be edited.
- Cannot be deleted.
- Cannot be archived.
- Hidden from normal Customer Management screens and search results.
- Visible in reports to represent anonymous transactions.

### Customer Capture Flow

```
Bill Created
    ↓
CustomerId = Walk-In Customer (default)
    ↓
Cashier optionally enters customer details
    ├── No details entered
    │       ↓
    │   Bill completed with Walk-In CustomerId
    │
    └── Details entered
            ↓
        New Customer record created
            ↓
        Bill.CustomerId replaced with new CustomerId
            ↓
        Walk-In Customer record remains unchanged
```

> **Critical Rule:** The Walk-In Customer record is never modified. Only `Bill.CustomerId` is replaced when a customer is captured during a sale.

### Why System-Seeded (Not Nullable)

- Eliminates NULL foreign keys in the Bills table.
- Consistent reporting — every bill references a real customer record.
- Simplifies SQL queries — no special NULL handling.
- Referential integrity preserved at all times.
- AI and BI context always has a valid customer reference.

### Customer Identity & Phone Updates
- `CustomerId` must be generated locally using a globally unique algorithm (UUID v7 or ULID). Sequential IDs are prohibited to avoid offline collisions.
- `PhoneNumber` is the business identifier, but NOT a foreign key. All relations (bills, loyalty) use `CustomerId`.
- If a customer changes their phone number, only `Customer.PhoneNumber` is updated. `CustomerId` never changes.

---

## 7. Quick Customer

Minimum details:
- Name (required)
- Phone (optional)

Designed for fast billing when the customer is known but no prior record exists.

---

## 8. Search

Supports:
- Customer Code
- Name
- Phone

Rules:
- Phone must be unique if provided.
- Walk-In Customer does not appear in search results.

---

## 9. Customer Capture Policy

Configured in Settings (`CustomerCaptureSettingsChanged` event).

Modes:
- `NEVER` — Walk-In Customer is always used. No customer UI shown during billing.
- `OPTIONAL` — Cashier may select or create a customer during billing.
- `ALWAYS` — Future V2 feature.

---

## 10. Business Rules

- Customer selection is optional in the UI.
- The database never stores a NULL CustomerId on a bill.
- If no customer is selected, Billing automatically assigns the Walk-In Customer.
- Name is required for any new customer record.
- Phone is optional.
- Duplicate names are allowed.
- Phone must be unique if provided.
- Archived customers cannot be selected for new bills.
- System-generated customers are immutable.

---

## 11. Events

- `CustomerCreated`
- `CustomerUpdated`
- `CustomerArchived`

Note: The Walk-In Customer never generates events. It is seeded silently at startup.

---

## 12. Dependencies

Referenced by:
- Billing
- Report
- AI (future)

Depends only on Platform abstractions.

---

## 13. Extension Points

- Loyalty
- Credit
- Membership
- Wallet
- Customer Groups
- Marketing Preferences
- GST Profile (future — customer-level GST for B2B billing)

---

## 14. AI Coding Rules

- Keep Customer lightweight.
- Never implement CRM in V1.
- Customer Capture Policy belongs to Settings.
- Never allow NULL CustomerId in a Bill — always use Walk-In Customer as the fallback.
- Never expose Walk-In Customer in customer management UI.
- Never modify the Walk-In Customer record. Replace `Bill.CustomerId` only.
- The Walk-In Customer seed runs once at Platform startup before the application becomes ready.
