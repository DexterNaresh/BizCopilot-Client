# Product.md

> **BizCopilot V1 – Product Specification**
>
> **Status:** Frozen (V1)

---

# 1. Purpose

The Product module manages the business product catalog.

It owns only product master information. It does **not** own inventory, purchase, suppliers, stock, profit, or sales analytics.

---

# 2. Responsibilities

Owns:

- Product master
- Categories
- Selling price
- Product type
- Unit of measure
- Barcode
- Product code
- Product availability
- Product status
- Display order
- Product image (optional)
- Product events

Never owns:

- Inventory
- Stock quantity
- Supplier
- Purchase
- Cost price
- Profit calculation
- Offers
- Billing

---

# 3. Scope (V1)

Included

- Create product
- Update product
- Archive product
- Search product
- Product availability
- Categories
- Barcode support

Future (V2)

- Inventory
- Purchase
- Supplier
- Cost price
- Multi-location stock

---

# 4. Product Model

Core attributes:

- ProductId
- ProductCode (immutable)
- Name
- CategoryId
- ProductType
- UnitOfMeasure
- SellingPrice
- Barcode (optional)
- Image (optional)
- DisplayOrder
- Status
- Availability
- CreatedAt
- UpdatedAt

---

# 5. Category Model

Fields

- CategoryId
- Name
- Description (optional)
- DisplayOrder

Categories organize products only.

---

# 6. Product Type

Defines how Billing accepts quantity and how it is represented in the UI.

Supported V1:

- QTY (Count-based, integer)
- PACK (Count-based, integer)
- KG (Measurement-based, decimal)
- LTR (Measurement-based, decimal)
- METER (Measurement-based, decimal)

Examples

- Water Bottle → QTY
- Sugar → KG
- Milk → LTR
- Cable → METER
- Soap Bundle → PACK

---

# 7. Unit of Measure

Examples:

- Piece (Maps to QTY)
- Kg (Maps to KG)
- Gram (Maps to KG, input as decimal)
- Litre (Maps to LTR)
- ml (Maps to LTR, input as decimal)
- Box (Maps to PACK)

Future units may be added without changing Billing.

---

# 8. Product Lifecycle

Create
→ Active
→ Archived

Rules

- Archived products cannot be sold.
- Archived products remain available for historical bills.
- Products are never physically deleted.

---

# 9. Product Availability

Availability is different from Status.

Status:
- Active
- Archived

Availability:
- Available
- Temporarily Unavailable

Owner may configure:

- Today
- Tomorrow
- One Week
- Custom Date

Employees may mark products unavailable if permitted.

---

# 10. Pricing

Product owns only the selling price.

Billing owns:

- Discounts
- Taxes
- Final price
- Grand total

Price changes never modify historical bills because Billing stores product snapshots.

---

# 11. Barcode

Supports:

- Manual barcode entry
- Scanner lookup
- Optional barcode usage

Rules

- Duplicate barcodes are not allowed.
- Barcode is optional.

---

# 12. Product Code

Every product receives an immutable ProductCode.

Purpose:

- Internal reference
- Imports
- Exports
- Debugging
- Future integrations

ProductCode never changes.

---

# 13. Display Order

Owner controls product ordering.

Purpose:

- Faster billing
- Better category layout
- Business-specific arrangement

Future AI suggestions may recommend ordering but never overwrite owner preference automatically.

---

# 14. Search

Supported searches:

- Product name
- Product code
- Barcode
- Category

Popularity and recent sales are supplied by Reports, not Product.

---

# 15. Business Rules

- Product name is required.
- Selling price must be greater than zero.
- Duplicate product codes are not allowed.
- Duplicate barcodes are not allowed.
- Archived products cannot be billed.
- Temporarily unavailable products cannot be added to a bill.
- Historical bills always use stored product snapshots.
- **Master Data Sync (V1):** Only the Owner may modify products. If modified offline, changes save locally immediately. The UI must show a "Pending Sync" warning to the Owner. Employee devices will receive the price updates eventually upon next sync.

---

# 16. Events

Publishes:

- ProductCreated
- ProductUpdated
- ProductArchived
- ProductAvailabilityChanged

No synchronization logic exists inside Product.

---

# 17. Dependencies

Depends only on Platform abstractions.

Referenced by:

- Billing
- Offer
- Report
- AI (future)
- Inventory (V2)

---

# 18. Extension Points

Future extensions:

- Inventory
- Purchase
- Supplier
- Cost price
- Batch/lot
- Expiry
- Multi-branch stock

---

# 19. AI Coding Rules

- Never add inventory logic.
- Never calculate stock.
- Never calculate profit.
- Never perform billing.
- Keep Product independent of business domain.
