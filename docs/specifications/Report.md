# Report.md

> **BizCopilot V1 – Report Specification**
>
> **Status:** Frozen (V1)

---

# 1. Purpose

The Report module provides business visibility.

It aggregates, filters, summarizes and exports business data.

Reports never own business rules or calculations.

---

# 2. Responsibilities

Owns:

- Report generation
- Aggregation
- Filtering
- Grouping
- Export
- Dashboard datasets
- Saved report definitions

Never owns:

- Sales calculations
- Offer calculations
- Tax calculations
- Profit calculations (V2)
- AI analysis

---

# 3. Scope (V1)

Supports:

- Daily
- Weekly
- Monthly
- Yearly
- Custom Date Range

Export:

- PDF
- Excel
- CSV

---

# 4. Report Categories

## Sales Reports

- Today
- Yesterday
- Weekly
- Monthly
- Yearly
- Custom

## Billing Reports

- Completed Bills
- Draft Bills
- Voided Bills
- Reprinted Bills

## Product Reports

- Top Selling
- Least Selling
- Unavailable Products
- Archived Products

## Customer Reports

- New Customers
- Returning Customers
- Walk-in Customers

## Offer Reports

- Offer Usage
- Discount Given
- Offer Performance

## Payment Reports

- Cash
- UPI
- Card
- Mixed

---

# 5. Report Filters

Supports filtering by:

- Date Range
- Product
- Category
- Customer
- Offer
- Payment Method
- Bill Status

Future:

- Employee
- Branch

---

# 6. Report Builder

Reports support:

- Filters
- Sorting
- Grouping
- Export

Avoid hardcoded report implementations whenever possible.

---

# 7. Dashboard Datasets

Reports provide datasets only.

Dashboard widgets consume those datasets.

Dashboard presentation logic does not belong here.

---

# 8. Saved Reports

Owners may save frequently used report configurations.

Examples:

- Daily Closing
- Weekly Sales
- Offer Performance

---

# 9. Scheduled Reports

Owner configures in Settings:

- Enable / Disable
- Schedule
- WhatsApp Number
- Email (future)

Client synchronizes business data.

Server responsibilities:

- Aggregate data
- Execute Business Intelligence
- Execute AI (if enabled)
- Generate report
- Send WhatsApp / future channels

---

# 10. Export

Supported:

- PDF
- Excel
- CSV

Future:

- JSON

---

# 11. Business Rules

- Reports are read-only.
- Reports never modify business data.
- Historical reports remain unchanged.
- Voided bills remain visible.
- Walk-in customers are included.
- Archived products appear in historical reports.

---

# 12. Events

Publishes:

- ReportExported

Consumes business data from other modules.

---

# 13. Dependencies & Data Access (Read Layer)

The Report module owns its own read layer to avoid coupling with other modules' repositories.

**Architecture Flow:**
Report Module → Report Read Repository → Read-only SQL → SQLite

**Rules:**
- Report module owns dedicated read-only repositories.
- Report repositories may join multiple tables.
- SQLite Views may be used as an implementation optimization but are optional.
- Report module **never** uses BillingRepository, ProductRepository, or any other business module's repository.
- Report module **never** writes data.

No module depends on Reports for business logic.

---

# 14. Extension Points

Future:

- Profit Reports
- Inventory Reports
- Purchase Reports
- Expense Reports
- Branch Comparison
- Employee Reports

---

# 15. Business Intelligence Boundary

Reports answer:

"What happened?"

Business Intelligence answers:

"Why did it happen?"

AI answers:

"What should I do next?"

---

# 16. AI Coding Rules

- Never calculate business rules.
- Never modify business data.
- Aggregate and present only.
- Keep report generation independent from AI.
