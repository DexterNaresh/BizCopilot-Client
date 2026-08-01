# Architecture Update — Platform Identity Standard (Frozen Decision)

## Objective
Establish the standard identity model for all business entities across the BizCopilot platform.
This decision is considered **Architecture Freeze** and must be followed by all current and future implementations.

---

## 1. Dual Identity Pattern
Every business entity shall have **two identifiers**:
1. Technical Identifier
2. Business Identifier
These serve different purposes and must never be confused.

---

## 2. Technical Identifier (e.g., ProductId)
The immutable technical identifier.

Characteristics:
- Primary Key
- Generated on the client
- Globally unique
- Never visible to business users
- Never changes
- Used by all relationships
- Synchronization-safe
- Offline-safe

Recommended algorithm:
- UUID v7 (Preferred)
- ULID (Acceptable)

Do NOT generate sequential Technical Identifiers.

---

## 3. Business Identifier (e.g., ProductCode)
The immutable business identifier.

Characteristics:
- Human readable
- Printed on reports
- Used for search
- Used by business users
- Never changes after creation
- Unique within the business

Do NOT generate Business Identifiers using UUID or ULID.

---

## 4. Sequence Table
Business Identifiers shall be generated using the shared Sequence table.

Example:
```text
Sequence
--------------------------------------
SequenceName      NextValue
BILL_NUMBER       1258
PRODUCT_CODE      351
PURCHASE_NUMBER   45
SUPPLIER_CODE     18
```
Do NOT create a separate sequence mechanism. Reuse the shared platform Sequence table.

---

## 5. Creation Flow
Entity creation must execute inside a single SQLite transaction to ensure atomicity.

Flow:
1. `BEGIN TRANSACTION`
2. Read `<ENTITY>_CODE` sequence
3. Generate Business Identifier (e.g. `PRD-000351`)
4. Generate Technical Identifier (UUID v7)
5. Insert Entity
6. Increment `<ENTITY>_CODE` sequence
7. `COMMIT`

If the transaction fails, the sequence update must also roll back.

---

## 6. Relationships
Every relationship throughout the platform must reference the Technical Identifier (e.g. `ProductId`, `CustomerId`, `BillId`).
Never store Business Identifiers as foreign keys.

---

## 7. Business Identifier Immutability
Once created, a Business Identifier must never change. Even if the entity name, category, price, or taxes change, the Business Identifier remains unchanged.

---

## 8. Offline Synchronization
Because Technical Identifiers are globally unique:
- Multiple devices can create entities offline.
- Synchronization will not create ID collisions.
- Relationships remain stable.
- Business Identifiers remain business-facing identifiers only.

---

## 9. Entity Standard Examples

| Entity | Technical Identifier | Business Identifier |
|---|---|---|
| Customer | CustomerId (UUID v7) | PhoneNumber |
| Product | ProductId (UUID v7) | ProductCode (Sequence) |
| Bill | BillId (UUID v7) | BillNumber (Sequence) |
| Purchase | PurchaseId (UUID v7) | PurchaseNumber (Sequence) |
| Supplier | SupplierId (UUID v7) | SupplierCode (Sequence) |
| Employee (Future) | EmployeeId (UUID v7) | EmployeeCode (Sequence) |

This identity pattern is now considered the platform standard and must be consistently followed across all current and future BizCopilot modules.
