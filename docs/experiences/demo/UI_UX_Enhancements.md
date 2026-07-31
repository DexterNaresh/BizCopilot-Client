# 15_UI_UX_Enhancements.md

> BizCopilot V1 – Approved UI & UX Enhancements

This document extends the frozen UI specifications (Demo_Experience.md, Design_System.md, Component_Catalog.md and UI_Blueprints.md) with approved usability improvements.

## Billing
- Adaptive cart: compact (0–3 items), half-height bottom sheet (4–10), 80% expandable sheet (10+).
- Sticky payment footer.
- Independent cart scrolling.
- Product grid always remains accessible.
- Resume draft from dashboard.
- Auto-focus search after adding a product.
- **Fast Billing Offers:**
  - Same-category offers apply automatically (highest benefit) with no popup or interruption.
  - Different-category offers show a lightweight bottom sheet *only* upon tapping Pay.
  - Operator applies one/many/none and returns immediately to payment.
- Automatic offer and tax calculation.
- Immediate static UPI QR after selecting UPI.
- Payment success returns to new bill with search focused.

## Search
- Local SQLite search.
- 150–250 ms debounce.
- Search by name, code and barcode.
- Results ranked: Favorites → Frequently Sold → Exact → Starts With → Contains.
- Empty search shows Favorites, Recent and Top Selling.
- Enter adds highlighted product.

## Dashboard
- Continue Draft.
- New Bill.
- Today's Sales.
- Pending Sync.
- AI Insight.
- Business Health.
- Quick Actions.

## Product
- Optional image.
- Placeholder icon.
- Favourite indicator.
- Availability badge.
- Grey unavailable products.

## Customer
- Quick customer.
- Walk-in customer.
- Recent customers.
- Fast search.

## User Management & Authentication
- Immutable UserId (ULID).
- Friendly Display Name.
- Display Name must be unique within the business.
- Display name shown in reports and dashboards.
- **Startup:** Show `Continue Billing` and `Switch User` (do not force full login if session is active).
- **Switch User:** Maximum two taps plus 4-digit or 6-digit PIN entry to resume billing quickly.

## Settings
- Grouped sections: Business, Payments, Printing, Reports, Backup, AI, License, Appearance and About.
- Search inside settings.

## Navigation
- Mobile bottom navigation.
- FAB where appropriate.
- Tablet split layout.
- Desktop sidebar.

## Sync & Offline
- Small sync badge.
- Pending queue count.
- Offline badge.
- Billing never blocked while syncing.

## Payment
- Cash, Card, UPI and Mixed.
- UPI immediately displays merchant QR and amount.
- Mixed payment supports optional note.

## Micro UX
- Inline quantity controls.
- Toast notifications.
- Skeleton loading.
- Highlight recently added product.
- Sticky search.
- Sticky pay button.

## Accessibility
- 44px minimum touch targets.
- Keyboard shortcuts on desktop.
- High contrast.

## Performance
- SQLite search.
- Lazy loading.
- Virtual scrolling.
- Cached recent data.
- Non-blocking sync.

## UX Rules
Prefer:
- Inline editing.
- Bottom sheets (especially for Applicable Offers).
- One-tap actions.
- Auto-save where safe.
- **Asking for decisions as late as possible** (e.g., deferring offer selection to payment).
- **Invisible automatic decisions** (e.g., auto-resolving same-category offers).

Avoid:
- Unnecessary dialogs.
- Blocking popups.
- Hidden sync status.

## References
Read with:
- Demo_Experience.md
- Design_System.md
- Component_Catalog.md
- UI_Blueprints.md
