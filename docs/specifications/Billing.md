# BizCopilot V1 — Billing Engine

# 1. Purpose

The Billing Engine is the core transaction engine of BizCopilot V1.

Its responsibility is to provide a fast, reliable, offline-capable
billing experience for small businesses while keeping the cashier
interaction extremely simple.

V1 is designed around a **universal billing model**, not separate
billing engines for grocery, juice shops, cafés, hardware shops, etc.

The engine must support products sold by:

-   Qty
-   Kg
-   Ltr
-   Meter
-   Pack

The selected product type determines how quantity is entered during
billing.

> **Important:** V1 does not include Inventory. Billing must never
> depend on stock availability, stock deduction, stock valuation, dead
> stock, low-stock calculations, or inventory synchronization.

---

# 2. V1 Billing Philosophy

The system should hide business/technical complexity from the cashier.

The cashier should only need to answer:

1.  **What product?**
2.  **How much?**
3.  **How will the customer pay?**

The normal flow is:

``` text
Search / Scan / Select Product
        ↓
Add
        ↓
Enter / Adjust Quantity
        ↓
Cart Calculation
        ↓
Optional Customer / Offer / Discount
        ↓
Payment
        ↓
Completed Sale
        ↓
Print / Share
```

The Billing Engine may be sophisticated internally, but the normal
billing path must remain simple.

---

# 3. Product Quantity Model

## Product Type

The Product module stores a simple product `type`.

V1 supported types:

-   `QTY`
-   `KG`
-   `LTR`
-   `METER`
-   `PACK`

There is **no separate selling-configuration workflow**.

When creating a product, the owner provides:

-   Product name
-   Type
-   Selling price
-   Category
-   Optional product image
-   Optional additional information

The selected type determines billing behavior automatically.

### Product Form Simplicity

The V1 Add Product flow intentionally stays small:

- Product Name
- Type
- Selling Price
- Category
- Optional Product Image

Additional details are optional and collapsed/secondary.

There is no Product Preview requirement in the finalized Add Product UI.
The image action may be placed at the top or bottom of the form.

---

# 4. Quantity Behavior

V1 has only two quantity interaction models.

## Count-based products

Applies to:

-   Qty
-   Pack

Quantity is an integer.

Billing control:

``` text
[ - ] 2 [ + ]
```

Examples:

``` text
Bread Omelette
₹60 / Qty

[ - ] 2 [ + ]

Line Total = ₹120
```

``` text
Biscuits
₹20 / Pack

[ - ] 3 [ + ]

Line Total = ₹60
```

No quantity popup is required for count-based products.

The cashier can increase/decrease quantity directly from the product
card or cart.

---

## Measurement-based products

Applies to:

-   Kg
-   Ltr
-   Meter

Quantity is a decimal value.

Billing control:

``` text
[ 0.560 ] kg
```

or:

``` text
[ 0.750 ] Ltr
```

or:

``` text
[ 7.5 ] Meter
```

There is **no `+ / -` control** for measured quantities.

The quantity field itself is editable.

Tapping the quantity field opens a numeric input/keyboard.

Examples:

``` text
Carrot
₹40 / Kg

[ 0.560 ] Kg

Line Total = ₹22.40
```

``` text
Cooking Oil
₹150 / Ltr

[ 0.750 ] Ltr

Line Total = ₹112.50
```

``` text
Electrical Wire
₹75 / Meter

[ 7.5 ] Meter

Line Total = ₹562.50
```

---

# 5. Add-to-Cart Behavior

Every product initially displays:

``` text
[ Add ]
```

After the product is added, the product card transforms into the
appropriate live quantity control.

### QTY / PACK

``` text
[ - ] 1 [ + ]
```

### KG / LTR / METER

After Add, the measured quantity field starts with a default value of `1`.

``` text
[ 1.000 ] kg
```

The cashier can immediately tap the field and replace it with the required
quantity, for example `0.560`.

The same behavior applies to Ltr and Meter.

The product card and cart reference the **same sale-line quantity
state**.

There must not be separate product-card quantity and cart quantity
states.

If quantity changes in the product card, the cart updates immediately.

If quantity changes in the cart, the product card updates immediately.

---

# 6. Product Card and Cart Consistency

The same quantity interaction must be available in both places.

Example:

``` text
Product Card
Carrot
₹40 / Kg
[ 0.560 ] Kg
```

Cart:

``` text
Carrot
₹40 / Kg
[ 0.560 ] Kg
₹22.40
```

If the cashier changes the cart to `0.750 Kg`, the product card must
immediately show `0.750 Kg`.

This is a single sale-line state, not two independent values.

---

# 7. Pricing Model

V1 uses a simple:

> **One product → one selling price**

The price is associated with the selected product type.

Examples:

``` text
Carrot
₹40 / Kg
```

``` text
Cooking Oil
₹150 / Ltr
```

``` text
Electrical Wire
₹75 / Meter
```

``` text
Bread Omelette
₹60 / Qty
```

``` text
Biscuits
₹20 / Pack
```

The cashier does not configure pricing rules during normal billing.

V1 does not require:

-   Wholesale price lists
-   Customer-specific price lists
-   Tier pricing
-   Multiple selling-price levels
-   Time-based pricing

---

# 8. Product Availability

V1 supports a simple **Product Availability** state because a product may
temporarily not be sellable even though it still exists in the catalog.

A product may be marked unavailable for a simple duration such as:

- 1 day
- 1 week
- 1 month

When a product is unavailable:

- It must not be added to a new bill.
- It must remain visible in Product management according to its status.
- Existing drafts/held bills must not silently change their historical
  line data.
- The availability state must not be confused with Inventory or stock
  quantity.

Owner can manage product availability.

Waiter can perform the permitted availability action from Billing when the
product is temporarily unavailable.

No stock calculation is involved.

---

# 9. Sale Line Calculation

The fundamental calculation is:

``` text
Line Total = Quantity × Unit Price
```

Examples:

``` text
0.560 Kg × ₹40 = ₹22.40
```

``` text
0.750 Ltr × ₹150 = ₹112.50
```

``` text
7.5 Meter × ₹75 = ₹562.50
```

``` text
2 Qty × ₹60 = ₹120
```

``` text
3 Pack × ₹20 = ₹60
```

The calculation must be deterministic and produce the same result on
client and server.

This is especially important for offline billing.

---

# 10. Quantity and Money Precision

The Billing Engine must support decimal quantities.

Count-based types:

``` text
QTY
PACK
```

use integer quantity.

Measurement-based types:

``` text
KG
LTR
METER
```

use decimal quantity.

The UI should not expose technical precision configuration to the owner.

The system owns the supported precision/defaults.

Money calculations must use a safe decimal/money representation and must
not rely on binary floating-point arithmetic.

Rounding rules must be deterministic and shared by client and server.

---

# 11. Completed Sale Line Snapshot

A completed sale must preserve enough information to reproduce the
transaction later.

A sale line should conceptually contain:

``` text
productId
productName
productType
quantity
unitPrice
discount
tax
lineTotal
```

The completed transaction must not depend on the current Product record
to reconstruct historical pricing.

Example:

If Carrot was sold at:

``` text
₹40 / Kg
0.560 Kg
₹22.40
```

and the product price later changes to ₹50/Kg, the old bill must still
display:

``` text
0.560 Kg × ₹40 = ₹22.40
```

---

# 12. Cart Calculation

The cart must calculate:

``` text
Subtotal
- Line/Product Discounts
- Bill Discount
+ Tax
+/- Round-off (where applicable)
-------------------------------
Grand Total
```

The exact tax/rounding behavior must be deterministic.

The cart must update immediately when:

-   Product is added
-   Quantity changes
-   Product is removed
-   Promotion changes
-   Bill discount changes
-   Customer-specific applicable rules change
-   Tax calculation changes

---

# 13. Product / Promotion Discount

Product-level promotions remain separate from the Product definition.

Examples:

``` text
Coke 10% off
```

or:

``` text
Buy 2 Pack → discount
```

The Promotion Engine must operate on the sale line and must not assume
that quantity is always an integer.

V1 promotion types may include the finalized offer types such as:

- Percentage discount
- Fixed amount discount
- Buy One Get One (BOGO)
- Other simple promotional rules explicitly supported by the Promotion
  Engine

The Billing Engine consumes the promotion result; it does not own the
promotion configuration UI.

It must be capable of receiving:

``` text
product
type
quantity
unitPrice
lineAmount
```

and applying the applicable promotion.

---

# 14. Bill-Level Discount

V1 supports a separate bill-level discount.

Examples:

``` text
Subtotal = ₹2,000
Bill Discount = ₹100
Total = ₹1,900
```

or:

``` text
Subtotal = ₹2,000
Bill Discount = 5%
Total = ₹1,900
```

Bill discount is distinct from product/promotion discount.

Permissions must be respected for who can apply or modify a bill-level
discount.

---

# 15. Price Override

V1 supports controlled price override.

The configured product price and applied transaction price are distinct
concepts.

Example:

``` text
Configured price = ₹75 / Meter
Applied price = ₹70 / Meter
```

The override must be permission-controlled.

Existing role rule:

> Waiter/Cashier must not arbitrarily edit product price.

Owner may perform permitted price overrides.

The transaction should preserve the applied price and, where required,
the original configured price for auditability.

---

# 16. Billing Permissions

V1 has two primary billing roles:

### Owner

The Owner can perform all permitted billing actions, including:

- Normal billing
- Product availability changes
- Bill-level discounts
- Permitted price overrides
- Hold/resume
- Reprint
- Return/refund
- Void
- Register operations

### Waiter

The Waiter can perform normal billing/order-entry actions and any other
actions explicitly permitted by the role.

The finalized V1 rule remains:

> **Waiter cannot edit the product selling price.**

Sensitive actions such as price override, unrestricted refund, and void
must be permission-controlled.

The exact permission matrix belongs to the Platform/Role module. The
Billing Engine must enforce authorization supplied by that layer.

---

# 17. Customer Association

A sale may be associated with:

-   Walk-in Customer
-   Existing Customer

Customer information is optional for normal fast billing.

The system must not force customer creation before completing a normal
sale.

V1 supports basic customer association and bill history.

Credit/receivables are outside the core V1 Billing Engine unless
separately enabled by the finalized Customer/Credit scope.

---

# 18. Bill Notes

V1 supports an optional bill note.

Examples:

``` text
Customer will collect tomorrow.
```

``` text
Deliver to nearby shop.
```

Notes do not affect billing calculation.

---

# 19. Barcode Billing

V1 supports:

``` text
Scan Barcode
    ↓
Find Product
    ↓
Add to Cart
```

Barcode must not create a separate billing flow.

The product still follows its configured type:

``` text
Barcode → Carrot → KG → Quantity field
```

or:

``` text
Barcode → Coke → QTY → - / +
```

---

# 20. Variable-Weight Barcode Readiness

The Billing Engine should be designed so a future barcode can provide
both:

-   Product
-   Weight/quantity

Conceptually:

``` text
Variable-weight Barcode
        ↓
Product + 0.560 Kg
        ↓
Sale Line
        ↓
₹22.40
```

The physical scale/label integration itself is not required for the
initial V1 implementation if the integration is not yet available.

---

# 21. Weighing Scale Readiness

The normal V1 flow is manual:

``` text
[ 0.560 ] Kg
```

The architecture should permit future:

``` text
Weighing Scale
      ↓
0.560 Kg
      ↓
Product Sale Line
```

The scale should supply quantity; Billing remains responsible for
calculation.

---

# 22. Bill Lifecycle

The Billing Engine must explicitly model the lifecycle of a bill.

Conceptual states:

``` text
DRAFT
HELD
PENDING_PAYMENT
COMPLETED
CANCELLED
VOIDED
REFUNDED
PARTIALLY_REFUNDED
```

Not every UI action needs to expose every state.

The state machine must prevent invalid transitions.

---

# 23. Draft Bill

A draft is an unfinished bill saved for later.

It may be resumed and edited.

A draft is not a completed sale and must not appear as a finalized sale
in sales reporting.

---

# 24. Hold / Park Bill

Hold is a fast counter operation.

Example:

``` text
Customer A
₹1,850
     ↓
Hold
     ↓
Serve Customer B
     ↓
Retrieve Customer A
```

A held bill is not completed and must remain editable.

The underlying persistence mechanism may share infrastructure with
Draft, but the business meaning/state should remain distinguishable.

---

# 25. Payment

V1 payment methods:

-   Cash
-   UPI
-   Card
-   Other

The Billing Engine must not mark a bill as completed merely because a
payment method was selected.

Payment must have an explicit outcome/status.

Conceptually:

``` text
PENDING
SUCCESS
FAILED
CANCELLED
```

A sale becomes `COMPLETED` only after the required payment has
successfully completed.

---

# 26. Cash Payment and Change

Cash payment must support received amount and automatic change
calculation.

Example:

``` text
Bill Total = ₹483
Cash Received = ₹500
Change = ₹17
```

The cashier must not manually calculate change.

Exact payment:

``` text
Total = ₹483
Received = ₹483
Change = ₹0
```

---

# 27. Split Payment

V1 supports multiple payment methods in one bill.

Example:

``` text
Total = ₹1,000

Cash = ₹400
UPI  = ₹600

Remaining = ₹0
```

The Billing Engine must ensure:

``` text
Sum of successful payment allocations
=
Amount due
```

before completing the sale.

Partial/failed payment attempts must not accidentally complete the bill.

---

# 28. UPI Payment

V1 supports the UPI billing/payment workflow.

The payment state must clearly distinguish:

``` text
Waiting for Payment
Payment Successful
Payment Failed
Payment Cancelled
```

A payment method selection alone is not proof of payment.

Future payment-provider integrations must plug into the payment layer
without changing Sale/Cart calculation rules.

---

# 29. Completed Sale

After successful payment:

``` text
PENDING_PAYMENT
       ↓
COMPLETED
```

The completed sale becomes immutable from the normal editing flow.

It can be:

-   Printed
-   Shared
-   Viewed
-   Reprinted
-   Returned/refunded according to permissions and rules

It must not be silently edited.

---

# 30. Recent Bills

V1 provides a Recent Bills/history entry point for completed transactions.

A recent-bill record should expose enough information to identify the
transaction quickly, such as:

- Bill number
- Date/time
- Customer (when present)
- Grand total
- Payment status

Available actions may include:

- View
- Reprint
- Return/Refund
- Share

Recent Bills must distinguish completed sales from drafts/held bills.

It must never treat a reprint or viewing operation as a new sale.

---

# 31. Reprint

A completed bill can be reprinted.

Reprint must:

-   Use the original sale
-   Use the original bill number
-   Use the original transaction values
-   Never create another sale
-   Never create another bill number
-   Never affect sales totals

---

# 32. Cancel Bill

Before completion, an unfinished bill may be cancelled.

Cancellation must not appear as a completed sale.

A completed transaction must not be changed into a normal draft
cancellation.

Completed transactions use Void/Return/Refund workflows.

---

# 33. Void

Void is a controlled post-completion operation.

It must be permission-controlled and auditable.

Void must not silently modify historical transaction data.

The final reporting treatment must be consistent across Sales and
Reports modules.

---

# 34. Return / Refund

V1 supports returns/refunds against an original completed sale.

Flow:

``` text
Completed Sale
      ↓
Select Items
      ↓
Select Return Quantity
      ↓
Calculate Refund
      ↓
Refund Payment
```

Example:

Original:

``` text
Coke × 3
₹40 each
Total = ₹120
```

Returned:

``` text
Coke × 1
Refund = ₹40
```

V1 does not restore inventory because Inventory is explicitly outside
V1.

The return must still correctly reverse the sales/financial impact.

---

# 35. Partial Return

A completed bill may be partially returned.

The system must track:

``` text
Original Quantity
Returned Quantity
Remaining Returnable Quantity
```

A user must not be able to return more quantity than the original
returnable quantity.

---

# 36. Register / Day Session

V1 includes the foundation for a daily billing/register session.

Conceptual flow:

``` text
Open Register
      ↓
Billing During Day
      ↓
Close Register
```

Opening register may capture:

``` text
Opening Cash
```

During the session the system can aggregate:

``` text
Cash Sales
UPI Sales
Card Sales
Cash In
Cash Out
```

Closing can calculate:

``` text
Expected Cash
Actual Cash
Difference
```

Register/session workflows belong outside the core Product/Cart UI but
integrate with Billing and Payment.

---

# 37. Cash In / Cash Out

V1 supports register cash movements separately from sales.

Examples:

``` text
Cash In
₹1,000
```

``` text
Cash Out
₹500
```

These are register movements and must not be incorrectly recorded as
sales.

This does not introduce a full Expense/Inventory workflow into V1.

---

# 38. Output / Receipt

After a completed sale, the system may trigger output operations:

-   Print
-   Share
-   Digital receipt

Output failure must not roll back a successful sale.

For example:

``` text
Sale completed
      ↓
Print
      ↓
Printer unavailable
```

The sale remains completed.

The receipt can be retried/reprinted later.

---

# 39. Offline-First Billing

Billing must work offline.

The client must be capable of completing the business-critical
transaction without server availability.

For payment methods that require external confirmation (for example UPI),
the system must not invent a successful payment result while offline.
Offline support means the transaction/payment state can be safely persisted
and synchronized according to the payment integration's confirmed result.

Offline-capable operations include:

-   Product search
-   Product selection
-   Add to cart
-   Quantity entry
-   Price calculation
-   Applicable locally available promotions
-   Customer selection from local data
-   Bill creation
-   Payment recording
-   Receipt generation
-   Draft/hold
-   Reprint of locally available completed bills

The server remains the source of truth after synchronization.

---

# 40. Offline Transaction Identity

Every sale/operation must use client-generated identifiers where
required by the existing offline architecture.

The established synchronization model remains:

``` text
Client
  ↓
Create transaction
  ↓
OperationId / Idempotency key
  ↓
Local persistence
  ↓
Sync Queue
  ↓
Server
  ↓
ACK
```

The server must preserve client-generated entity identifiers where the
architecture requires it.

Duplicate synchronization must not create duplicate sales.

---

# 41. Idempotency

Billing operations that can be retried must be idempotent.

Especially:

-   Create sale
-   Payment operation
-   Return/refund
-   Void where applicable
-   Sync operations

A network retry must not create:

``` text
Two bills
Two payments
Two refunds
```

from one logical client operation.

---

# 42. Client and Server Calculation Consistency

The client needs enough business logic to complete billing offline.

The server must validate/recalculate authoritative transaction results
when synchronization occurs.

Client and server must use the same calculation rules for:

-   Quantity
-   Unit price
-   Discounts
-   Promotions
-   Tax
-   Rounding
-   Total

AI must never own or override core billing calculations.

---

# 43. AI Boundary

AI does not calculate or own the billing transaction.

AI may consume completed business intelligence later for:

-   Sales summaries
-   Business questions
-   Suggestions
-   Reports

But:

``` text
AI ≠ Billing Rule Engine
AI ≠ Pricing Authority
AI ≠ Payment Authority
AI ≠ Transaction Authority
```

Core billing must remain deterministic.

---

# 44. V1 Explicit Exclusions

The following remain outside the V1 Billing Engine:


## Category UI Boundary

The finalized Category screen does **not** change because of the universal
billing quantity model.

Category remains responsible for category management and product
association. Qty/Kg/Ltr/Meter/Pack behavior belongs to Product + Billing.

## Inventory

No:

-   Stock quantity
-   Low stock
-   Dead stock
-   Stock adjustment
-   Inventory valuation
-   Stock deduction
-   Stock restoration on return

## Medical-specific billing

No:

-   Tablet/strip conversion
-   Box/strip/tablet hierarchy
-   Batch
-   Expiry
-   Prescription workflow
-   Pharmacy-specific calculation

Medical products may still be billed using normal Qty/Pack behavior if
used as generic products.

## Area

No area-based billing in V1.

## Restaurant tables

No:

-   Tables
-   KOT
-   Kitchen workflow
-   Table transfer
-   Dine-in table management

## Advanced pricing

No:

-   Wholesale price lists
-   Customer-specific price lists
-   Tier pricing
-   Multiple price levels

These can be added later without changing the core universal billing
concept.

---

# 45. V1 Target Business Coverage

The Billing Engine is designed to support common small businesses such
as:

-   Grocery / Kirana
-   Fruits and vegetables
-   Juice shops
-   Cafés
-   Bakeries
-   Dairy shops
-   Sweet shops
-   Beverage shops
-   Grain/rice shops
-   General retail
-   Hardware
-   Electrical
-   Stationery
-   Clothing/general count-based retail
-   Other small retail businesses using Qty, Kg, Ltr, Meter or Pack

The product does not use separate industry billing engines.

---

# 46. Core Domain Principle

The Billing Engine should be generic at the transaction level and simple
at the user level.

``` text
Product
  ↓
Type
  ↓
Quantity
  ↓
Unit Price
  ↓
Discount / Promotion
  ↓
Tax
  ↓
Total
  ↓
Payment
  ↓
Completed Sale
```

The most important V1 simplification is:

``` text
COUNT
  QTY / PACK
  → integer
  → - / +

MEASUREMENT
  KG / LTR / METER
  → decimal
  → editable quantity field
```

There must be no need for the cashier to understand the underlying
billing engine.

---

# 47. Architecture Constraints

The implementation must preserve the existing BizCopilot architecture
decisions:

-   Offline-first
-   Client business runtime for offline-critical operations
-   Server as source of truth
-   ACK-based synchronization
-   Client-generated identifiers for offline-created entities
-   OperationId/idempotency
-   Interface-based architecture
-   Platform adapters
-   Event-driven communication where appropriate
-   AI consumes Business Intelligence
-   AI never owns business rules
-   No Inventory in V1
-   All packages start with `com.bizcopilot.*`

The Billing Engine must remain independent of UI implementation.

---

# 48. Implementation Rule

Do not create separate billing implementations such as:

``` text
GroceryBillingEngine
CafeBillingEngine
HardwareBillingEngine
```

Instead, use the common Billing Engine with the product type:

``` text
QTY
KG
LTR
METER
PACK
```

The UI derives its quantity control from the product type.

This is the core of BizCopilot's universal billing approach.

---

# 49. Acceptance Criteria

A V1 implementation is considered correct when all of the following
work:

### Count

``` text
Bread Omelette
₹60 / Qty
2 Qty
= ₹120
```

### Weight

``` text
Carrot
₹40 / Kg
0.560 Kg
= ₹22.40
```

### Volume

``` text
Oil
₹150 / Ltr
0.750 Ltr
= ₹112.50
```

### Length

``` text
Wire
₹75 / Meter
7.5 Meter
= ₹562.50
```

### Pack

``` text
Biscuits
₹20 / Pack
3 Pack
= ₹60
```

And:

-   Product card and cart quantities remain synchronized.
-   Count products use direct `- / +`.
-   Measured products use direct editable quantity fields.
-   Product starts with `Add`.
-   Adding a product changes the control to the appropriate quantity
    control.
-   Cart totals update immediately.
-   Discounts and promotions calculate deterministically.
-   Payment supports Cash, UPI, Card and Other.
-   Split payment works.
-   Cash change is calculated automatically.
-   Hold/Draft/Resume works.
-   Completed bills can be reprinted.
-   Returns/refunds reference the original sale.
-   Duplicate sync cannot create duplicate sales.
-   Offline billing can complete the core transaction.
-   Inventory is never required to complete a sale.

---

# 50. Final V1 Verification Checklist

Before considering the Billing Engine V1 complete, verify:

- No separate selling-configuration workflow exists.
- Product setup is Name + Type + Price + Category, with optional image.
- Qty/Pack use integer quantity and direct `- / +`.
- Kg/Ltr/Meter use an editable decimal field and no `- / +`.
- Measured quantity starts at default `1` after Add.
- Tapping measured quantity opens the numeric input/keyboard.
- Product Card and Cart share the same sale-line quantity.
- Product Card starts with `Add`.
- Completed sale lines preserve product/type/quantity/unit price/discount/tax/
  total snapshots.
- Product availability can prevent new billing without introducing Inventory.
- Hold and Draft are supported.
- Recent Bills, Reprint, Return/Refund and Void are supported.
- Cash, UPI, Card and Other payments are supported.
- Cash change is calculated automatically.
- Split payment is supported.
- Payment confirmation is explicit; the system never invents UPI success.
- Printer/output failure never rolls back a completed sale.
- Offline billing is deterministic and idempotent.
- Client/server calculations use the same rules.
- Owner/Waiter permissions are enforced.
- Inventory, medical-specific calculation, Area and Restaurant Tables remain
  outside V1.

---

# 51. Final V1 Principle

> **Make the engine capable of handling different ways a small shop
> sells, but make the cashier experience look almost the same
> everywhere.**

A grocery cashier can enter:

``` text
0.560 Kg
```

A café cashier can tap:

``` text
- 2 +
```

A hardware cashier can enter:

``` text
7.5 Meter
```

A general retailer can tap:

``` text
- 3 +
```

The underlying Billing Engine handles all four using the same
deterministic transaction model.
