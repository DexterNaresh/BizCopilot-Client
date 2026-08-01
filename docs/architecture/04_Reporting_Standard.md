# Architecture Update — Reporting Standard (Frozen Decision)

## Objective
Define the mandatory API structure for all reports (Sales, Products, Customers, Offers, Payments, etc.) within the BizCopilot offline-first architecture. This establishes a consistent paradigm for read-only analytics.

## 1. Reporting Archetypes
The Reporting module shall support both aggregated summaries and time-series trends as distinct, separate service methods.

### A. Summary Service
Returns a single aggregated object for the requested filter/date range.
- Examples: `totalBills`, `totalRevenue`, `totalDiscount`, `averageBillValue`, `cancelledBills`

### B. Trend Service
Returns a time-series collection suitable for charts and analytics.
- Grouping Support: `DAY`, `WEEK`, `MONTH`
- Data Points: Each object must include the `period`/`date`, `revenue`, `bills`, `discount`, and `averageBillValue`.

## 2. Separation of Concerns
Do NOT merge the summary and trend into a single response. They represent completely different reporting use cases and must be segregated into distinct API methods (e.g., `getSalesSummary` vs `getSalesTrend`).

## 3. Filtering Consistency
Both services must accept and apply identical filtering capabilities (e.g., date ranges, branch, payment method) where applicable.

## 4. Offline First & Dedicated Read Layer
All calculations must be performed directly on the local SQLite database. The Reporting module MUST use its own dedicated repositories and never invoke the business repositories of other modules. There is absolutely no dependency on remote APIs or synced data for report execution.
