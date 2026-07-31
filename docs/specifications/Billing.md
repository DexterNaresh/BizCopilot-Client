# Billing.md

> **BizCopilot V1 – Billing Specification**
>
> **Status:** Frozen (V1)

---

# 1. Purpose

Billing is responsible for creating and managing sales transactions.

Billing contains business rules related to sales only. It never owns UI, synchronization, repositories, printing, licensing, or cloud communication.

---

# 2. Responsibilities

Owns:

- Bill lifecycle
- Bill items
- Product snapshot
- Pricing
- Discounts (using Offer module)
- Tax calculation
- Payment processing
- Bill numbering
- Bill status
- Billing events

Does NOT own:

- Reports
- Inventory (V2)
- Printing
- Sync
- AI
- Dashboard
- Settings
- Platform

---

# 3. Scope (V1)

Included

- Create Bill
- Draft Bill
- Resume Draft
- Complete Bill
- Void Bill
- Reprint Bill
- Search Bills

Future

- Credit Sales
- Partial Payments
- Refunds
- Inventory deduction

---

# 4. Bill Lifecycle

Draft
→ Completed
→ Voided

Rules

- Drafts may be resumed.
- Completed bills are immutable.
- Bills are never deleted.
- Voided bills remain available for audit.

---

# 5. Bill Model

Bill

- BillId (Globally unique client-generated UUID for synchronization)
- Bill Number (Business-visible invoice number)
- Date/Time
- CustomerId (always populated — never null)
- DeviceId (Device that generated the bill)
- CreatedByUserId (Employee)
- SessionId (Login session)
- Payment
- Totals
- Status

Customer Assignment Rule

Customer selection is optional in the UI.
Billing always assigns a valid CustomerId.
If no customer is selected, Billing automatically applies the Walk-In Customer.

Bill Item Snapshot

- Product Id
- Product Name
- Unit Price
- Quantity
- Discount
- Applied Offer Code
- Applied Offer Description
- Tax
- Final Line Total

Snapshots preserve historical accuracy.

---

# 6. Sales Calculation Pipeline

1. Validate request
2. Load product snapshot
3. Validate availability
4. Calculate line totals
5. Apply offers
6. Calculate tax
7. Calculate grand total
8. Validate payment
9. Generate bill
10. Publish BillCreated event

---

# 7. Pricing Rules

- Quantity must be greater than zero.
- Negative quantities are not allowed.
- Pricing uses product snapshot.
- Completed bill prices never change.

---

# 8. Offer Integration

Billing never calculates offer logic.

Flow

Billing
→ Offer Module
→ OfferResult (per category)
→ Billing applies selected offers

**Same Category:** System auto-applies the highest customer benefit. No operator input.

**Different Categories:** Billing displays an **Applicable Offers** popup. The operator selects which offers to apply (one, many, or none) before bill completion.

UI displays applied offers returned by Billing.

---

# 9. Tax Rules

Tax configuration comes from Settings.

Settings define:

- GST Enabled
- GST Number
- Tax Percentage
- Inclusive / Exclusive mode

Billing consumes these settings when calculating totals.

---

# 10. Payment Engine

Payment is an internal Billing component.

Supported Methods

- Cash
- UPI
- Card
- Mixed

Payment strategies return a common PaymentResult.

Mixed payment stores free-text notes in V1.

---

# 11. UPI

Merchant information is configured in Settings.

- Merchant Name
- Merchant UPI ID
- QR Enabled

Billing requests a dynamic UPI QR.

Customer scans the QR.

Amount and merchant are pre-filled.

Customer only enters the UPI PIN.

Payment confirmation is manual in V1.

Automatic verification is a V2 feature.

---

# 12. Price Override

Owner may override prices.

Employees may override prices only if enabled by the owner.

Every override should capture:

- Original price
- New price
- User
- Timestamp
- Reason (optional V1)

Reports and dashboard should expose override statistics.

---

# 13. Bill Numbering (Device-Based)

Requirements

- Bill Number is NOT the synchronization identifier (BillId is).
- Bill Number is for display and legal compliance only.
- Number sequences belong to **devices**, not users.
- Every registered device maintains its own sequence (e.g., Tablet 1 = TB01-000001, Tablet 2 = TB02-000001).
- User login never changes numbering.
- Locally generated and offline safe.
- Unique within the business.
- Future multi-branch compatible.

---

# 14. Business Rules

- Customer selection is optional in the UI. The database never stores a NULL CustomerId.
- If no customer is selected, Billing automatically assigns the Walk-In Customer.
- The Walk-In Customer record is never modified by Billing. Only `Bill.CustomerId` is assigned.
- Unavailable products cannot be billed.
- Completed bills cannot be edited.
- Reprint is always allowed.
- Bills are never physically deleted.
- Void bills appear in reports.
- Billing never synchronizes directly.

---

# 15. Events

Billing publishes

- BillCreated
- BillVoided

Runtime Engine manages synchronization through SyncQueue.

---

# 16. Dependencies

Billing depends on:

- Product
- Offer
- Settings

Billing uses Platform through abstractions only.

---

# 17. Extension Points

V2

- Inventory
- Credit Sales
- Partial Payments
- Automatic Payment Verification
- Refunds
- Loyalty

---

# 18. AI Coding Rules

- No UI logic.
- No synchronization logic.
- No repository access from UI.
- Publish events instead of invoking Runtime.
- Keep payment strategies separate from billing rules.
