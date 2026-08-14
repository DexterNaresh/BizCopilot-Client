# BizCopilot V1 — UI/UX Implementation Plan (Revised)

> **Aligned with:** Final UI/UX Architecture Freeze (Source of Truth)
>
> **Core Principle:** FASTEST BILLING EXPERIENCE WITH LESS NAVIGATION

---

## Corrections Applied

All decisions from the **Final UI/UX Architecture Freeze** have been incorporated. Key changes from the previous plan:

| Area | Previous Plan | Freeze Correction |
|------|--------------|-------------------|
| Theme | Dark-mode-first `#6C63FF` | **Light-first** `#5B3BEB`, canvas `#F5F6FC` |
| Dark Mode | Theme toggle, light+dark | **No dark mode in V1** |
| Role Naming | Generic "Employee" | **Waiter / Cashier** |
| Startup (Waiter) | Employee Dashboard | **Direct to Billing** |
| AI Access | Bottom nav item | **Floating button on Owner Dashboard only** |
| Breakpoints | 768px tablet | **0–599 / 600–1023 / 1024+** |
| Customer Flow | Separate navigation step | **Inline in Cart** |
| Offer Flow | Bottom sheet at payment | **Selection from Cart** |
| Payment | Inside cart panel | **Focused step after Cart** |
| Cart (Mobile) | Adaptive heights | **Bottom sheet, scrollable items, fixed summary** |
| Cart (Desktop) | Right panel | **Permanent 35% panel** |
| Visual Style | Glassmorphism, gradients | **Clean, minimal, professional** |
| Font | Inter + JetBrains Mono | **Inter** with tabular nums |
| Icons | Open question | **Material Symbols Rounded** |
| Profit/Inventory | Some dashboard metrics | **Explicitly removed** |
| Bills Screen | Missing | **Added** |
| More Menu | Missing | **Added with defined structure** |
| Theme Files | 5 files | **6 files** (added breakpoints, material-overrides) |

---

## Phase 1: Design Foundation & App Shell

Build the design token system, responsive app shell, and navigation infrastructure.

---

### Theme System — `src/ui/theme/`

#### [NEW] [_variables.scss](file:///d:/Project/BizCopilot-Client/src/ui/theme/_variables.scss)

CSS custom properties for all design tokens:

```scss
// Colors (Light-first, purple brand)
--color-primary: #5B3BEB;
--color-primary-hover: #4B2DC7;
--color-canvas: #F5F6FC;
--color-surface: #FFFFFF;
--color-text-primary: #111827;
--color-text-secondary: #6B7280;
--color-border: #EAECEF;
--color-success: #16A34A;
--color-warning: #F59E0B;
--color-danger: #DC2626;

// Spacing (8px grid)
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 40px;
--spacing-3xl: 48px;

// Radius
--radius-sm: 8px;      // small controls
--radius-input: 12px;  // inputs
--radius-card: 16px;   // cards
--radius-chip: 20px;   // chips
--radius-pill: 24px;   // pills, bottom sheets top corners

// Shadows
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-card: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
--shadow-elevated: 0 4px 12px rgba(0,0,0,0.1);
--shadow-float: 0 8px 24px rgba(0,0,0,0.12);

// Z-index
--z-nav: 100;
--z-cart-bar: 200;
--z-bottom-sheet: 300;
--z-dialog: 400;
--z-toast: 500;
```

#### [NEW] [_typography.scss](file:///d:/Project/BizCopilot-Client/src/ui/theme/_typography.scss)

Font import: Inter from Google Fonts. Type scale:
- Page Title: 24px / 700
- Section Title: 18px / 600
- Card Title: 16px / 600
- Body: 14px / 400
- Secondary: 13px / 400
- Caption: 12px / 400
- Button: 14px / 500
- Numeric/Money: 14–24px / 600, `font-variant-numeric: tabular-nums`

Fallback stack: `Inter, Roboto, system-ui, sans-serif`

#### [NEW] [_mixins.scss](file:///d:/Project/BizCopilot-Client/src/ui/theme/_mixins.scss)

Utility mixins: touch-target (min 44×44), card-base, truncate-text, visually-hidden (a11y).

#### [NEW] [_breakpoints.scss](file:///d:/Project/BizCopilot-Client/src/ui/theme/_breakpoints.scss)

Responsive breakpoint mixins using the **freeze-approved values**:
```scss
$bp-mobile-max: 599px;
$bp-tablet-min: 600px;
$bp-tablet-max: 1023px;
$bp-desktop-min: 1024px;

@mixin mobile { @media (max-width: $bp-mobile-max) { @content; } }
@mixin tablet { @media (min-width: $bp-tablet-min) and (max-width: $bp-tablet-max) { @content; } }
@mixin desktop { @media (min-width: $bp-desktop-min) { @content; } }
@mixin tablet-up { @media (min-width: $bp-tablet-min) { @content; } }
```

#### [NEW] [_animations.scss](file:///d:/Project/BizCopilot-Client/src/ui/theme/_animations.scss)

Subtle, 150–250ms transitions. Keyframes: `fadeIn`, `slideUp`, `slideRight`, `pulse` (for sync indicator). No excessive animations.

#### [NEW] [_material-overrides.scss](file:///d:/Project/BizCopilot-Client/src/ui/theme/_material-overrides.scss)

Override Angular Material defaults so the app looks like **BizCopilot**, not default Material. Override: button styles, form field appearance, dialog radius, snackbar, bottom sheet radius (24px top corners), card elevation.

#### [MODIFY] [styles.scss](file:///d:/Project/BizCopilot-Client/src/styles.scss)

Import all theme partials. Global reset, box-sizing, body defaults (`background: var(--color-canvas)`), custom scrollbar, Angular Material custom theme configuration using the purple primary.

---

### App Shell & Navigation

#### [NEW] [app-shell.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/layouts/app-shell/app-shell.component.ts)

Responsive layout container:
- **Mobile (0–599):** Top bar + Full workspace + Bottom navigation
- **Tablet (600–1023):** Compact sidebar (icons) + Top bar + Workspace
- **Desktop (1024+):** Persistent sidebar (240px) + Top bar + Workspace

Uses Angular CDK `BreakpointObserver` with the approved breakpoints.

#### [NEW] [sidebar.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/navigation/sidebar/sidebar.component.ts)

Desktop/tablet left navigation. Role-aware:

**Owner menu:**
- Dashboard
- Billing
- Products
- Customers
- Offers
- Bills
- Reports
- Settings
- Backup & Sync
- AI Assistant

**Waiter/Cashier menu:**
- Billing
- Products
- More

Active route highlighting. BizCopilot logo at top. Feature-flag-aware visibility.

#### [NEW] [bottom-nav.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/navigation/bottom-nav/bottom-nav.component.ts)

Mobile-only bottom navigation (hidden on desktop). **Role-aware tabs per freeze:**

**Owner:** Home | Billing | Products | Reports | More

**Waiter/Cashier:** Billing | Products | More

AI is **NOT** a tab. Active indicator animation.

#### [NEW] [top-bar.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/navigation/top-bar/top-bar.component.ts)

Top app bar: Business name (left), contextual title, sync badge + offline indicator + user avatar (right). Responsive — compact on mobile.

#### [NEW] [status-bar.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/navigation/status-bar/status-bar.component.ts)

Desktop-only bottom status bar: sync status, pending queue, version, connectivity. Secondary to billing — subtle design.

#### [MODIFY] [app.routes.ts](file:///d:/Project/BizCopilot-Client/src/ui/app/app.routes.ts)

Lazy-loaded routes:
```
/login         → LoginPage
/              → AppShell (wrapper) with children:
  /dashboard   → DashboardPage (Owner only)
  /billing     → BillingPage
  /products    → ProductPage
  /customers   → CustomerPage
  /offers      → OfferPage
  /bills       → BillsPage
  /reports     → ReportPage
  /settings    → SettingsPage
  /backup      → BackupPage
  /ai          → AIChatPage
  /more        → MorePage
```
Default redirect: Owner → `/dashboard`, Waiter → `/billing` (per freeze §5).
Auth guard protects all routes except `/login`.

#### [MODIFY] [app.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/app/app.component.ts)

Minimal — `<router-outlet>` only. No theme toggle (no dark mode in V1).

#### [MODIFY] [app.config.ts](file:///d:/Project/BizCopilot-Client/src/ui/app/app.config.ts)

Add `provideAnimations()` for Angular Material animations. Existing providers remain unchanged.

---

## Phase 2: Common Components

Build every reusable component before building screens. Components accept **ViewModels only**, never domain entities.

---

#### [NEW] [search-bar.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/search-box/search-bar.component.ts)

White rounded pill on purple header. Debounced 150–250ms. Placeholder: "Search product by name / code". Input: `placeholder`, `autofocus`. Output: `(searchChanged)`. Supports name, product code, barcode. Clean, minimal design — no glassmorphism.

#### [NEW] [product-card.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/product-card/product-card.component.ts)

**Simple per freeze §21.** Shows: product image, product name, selling price. Optional: available/unavailable badge. **Does NOT show:** stock quantity, low stock, inventory data. Tap adds to cart immediately. Greyed out if unavailable.

#### [NEW] [quantity-selector.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/quantity-selector/quantity-selector.component.ts)

`[−]` quantity `[+]` inline controls. Min 1. 44px touch targets. Compact design for cart items.

#### [NEW] [money-input.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/money-input/money-input.component.ts)

Currency-formatted input. Numeric keypad on mobile. Prefix ₹ from Settings. `font-variant-numeric: tabular-nums`.

#### [NEW] [status-badge.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/status-badge/status-badge.component.ts)

Small pill badge. Variants: Online (green), Offline (red), Syncing (amber pulse), Pending (blue), Sync Failed (red). Secondary to billing — subtle.

#### [NEW] [loading-skeleton.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/loading-skeleton/loading-skeleton.component.ts)

Shimmer animation skeleton. Shapes: card, row, circle, text.

#### [NEW] [empty-state.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/empty-state/empty-state.component.ts)

Centered icon + title + subtitle + optional CTA. Clean illustration style.

#### [NEW] [confirmation-dialog.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/confirmation-dialog/confirmation-dialog.component.ts)

Reusable confirm/cancel dialog. Angular Material Dialog with BizCopilot styling. Variants: normal, danger.

#### [NEW] [toast.service.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/toast/toast.service.ts)

Snackbar notifications. Variants: success, error, warning, info. Auto-dismiss.

#### [NEW] [customer-card.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/customer-card/customer-card.component.ts)

Input: `CustomerViewModel` (name, phone, code). Clean list-item style.

#### [NEW] [dashboard-widget.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/dashboard-widget/dashboard-widget.component.ts)

Card container for dashboard metrics. Input: title, icon, value, trend. White surface card with subtle shadow. **No profit/inventory metrics.**

#### [NEW] [floating-cart-bar.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/components/floating-cart-bar/floating-cart-bar.component.ts)

**Mobile-only** floating purple cart bar above bottom nav (freeze §23):
```
3 Items       ₹1,398       Cart >
```
Rounded pill, elevated shadow, high contrast. Tap opens Cart bottom sheet. Hidden when cart is empty.

---

## Phase 3: Core Screens — Login, Dashboard, Billing

The three most critical screens.

---

### Login

#### [NEW] [login-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/auth/login-page/login-page.component.ts)

**Active Session Startup:**
- Current user name
- "Continue Billing" (primary CTA)
- "Switch User" (secondary)

**Switch User:**
- User tiles (Owner, Cashier, Waiter)
- 4-digit or 6-digit PIN entry with large numpad
- Animated PIN dots
- Auto-submit on last digit
- Error shake animation
- Max 2 taps + PIN to resume

**First Run / No Session:**
- BizCopilot logo
- User selection + PIN

**Role-based redirect (freeze §5):**
- Owner → `/dashboard`
- Waiter/Cashier → `/billing`

Connects via: `AuthFacade` → `AuthApplication` → `ISessionService`

---

### Dashboard

#### [NEW] [dashboard-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/dashboard/dashboard-page/dashboard-page.component.ts)

**Owner Dashboard only** (freeze §31). Waiter/Cashier never sees this.

Content:
- Greeting: "Good [Morning/Afternoon], [Name]"
- **Quick Actions:** New Bill, Add Product
- **Metrics:** Today's Sales, Today's Bills, Average Bill, Sales Trend
- **Top Selling Products** (carousel/list)
- **Recent Bills** (last 10)
- **Pending Sync** indicator
- **AI Insight** card (feature-flag-aware)

**Floating AI Chat Button** — visible on dashboard, launches AI Assistant (freeze §32).

**Explicitly NOT shown:** Inventory, Stock, Low Stock, Dead Stock, Profit, COGS, Inventory Value.

Connects via: `DashboardFacade` → `ReportApplication`

#### [NEW] [dashboard.facade.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/dashboard/dashboard.facade.ts)

Exposes readonly Signals: `todaysSales`, `todaysBills`, `averageBill`, `topProducts`, `recentBills`, `pendingSync`, `aiInsight`.

---

### Billing (Highest Priority — Freeze §19)

#### [NEW] [billing-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/billing/billing-page/billing-page.component.ts)

**The hero screen.** Responsive layout per freeze:

**Mobile (0–599):**
```
┌──────────────────────────┐
│ Purple Header (Menu, "Billing", Scanner, More) │
├──────────────────────────┤
│ Search (white rounded pill)                     │
├──────────────────────────┤
│ Category Chips (horizontal scroll)              │
├──────────────────────────┤
│ 2-column Product Grid                           │
│  ┌─────┐  ┌─────┐                              │
│  │ Img │  │ Img │                              │
│  │Name │  │Name │                              │
│  │₹120 │  │₹85  │                              │
│  └─────┘  └─────┘                              │
├──────────────────────────┤
│ ┌──────────────────────┐ │ ← Floating Cart Bar
│ │ 3 Items  ₹1,398  Cart>│ │   (purple pill, elevated)
│ └──────────────────────┘ │
├──────────────────────────┤
│ Bottom Navigation                               │
└──────────────────────────┘
```

**Desktop (1024+):**
```
┌───────┬────────────────────────────┬──────────────┐
│Sidebar│        65% Catalog         │  35% Cart    │
│       │ Search + Category Chips    │  Customer    │
│       │ Product Grid (3-4 cols)    │  Items       │
│       │                            │  Qty ± Del   │
│       │                            │  Offers      │
│       │                            │  Subtotal    │
│       │                            │  Discount    │
│       │                            │  Total       │
│       │                            │  [Proceed]   │
└───────┴────────────────────────────┴──────────────┘
```

**Key behaviors:**
- Tap product → adds to cart immediately (freeze §22). If exists, increment quantity.
- Immediate visual feedback: cart count + total update
- Search auto-focused. Re-focused after adding product.
- Unavailable products greyed, not tappable
- Barcode/Scanner: feature-flag-aware
- Offline banner: subtle, never blocks billing
- Sync indicator: always visible, secondary

#### [NEW] [billing.facade.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/billing/billing.facade.ts)

Facade exposing **readonly Signals**:
- `products: Signal<ProductViewModel[]>`
- `categories: Signal<CategoryViewModel[]>`
- `cart: Signal<CartItemViewModel[]>`
- `cartCount: Signal<number>`
- `cartTotal: Signal<CartTotals>`
- `selectedCustomer: Signal<CustomerViewModel>`
- `applicableOffers: Signal<OfferViewModel[]>`

Methods: `addToCart()`, `removeFromCart()`, `updateQuantity()`, `searchProducts()`, `selectCustomer()`, `completeSale()`, `saveDraft()`, `resumeDraft()`

All methods call through `SalesApplication` / `ProductApplication` / `OfferApplication`. **No business logic in UI.**

#### [NEW] [product-grid.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/billing/components/product-grid/product-grid.component.ts)

Grid of ProductCards. Category filtering via chips. Search integration. 2-col mobile, 3-col tablet, 3–4-col desktop.

#### [NEW] [cart-panel.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/billing/components/cart-panel/cart-panel.component.ts)

**Mobile:** Bottom sheet (tap floating cart bar to open).
**Desktop:** Permanent right panel (35% width).

Contents per freeze §24-§26:
- Customer section: "Walk-In Customer" default, "Change" link → inline search
- Cart items: image, name, unit price, `[−] qty [+]`, subtotal, delete
- Independently scrollable item list for many items
- Fixed summary at bottom: Subtotal, Discount, Total
- Primary action: "Proceed to Pay"
- Applied same-category offers shown inline (green "SAVE ₹45" badge)

#### [NEW] [customer-selector.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/billing/components/customer-selector/customer-selector.component.ts)

**Inline** customer selection (freeze §27). Shows current customer with "Change" link. Expanding inline panel: search by phone, recent customers, new quick customer. Returns to cart immediately after selection. **Never navigates away from Billing.**

#### [NEW] [offer-selection.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/billing/components/offer-selection/offer-selection.component.ts)

**Shown from Cart** when multiple different-category offers are applicable (freeze §28). Radio-style list:
```
Available Offers
○ SAVE20 — Save ₹62
○ BUYMORE10 — Save ₹48
```
Operator selects one/many/none. Returns to Cart. **UI never calculates discount** — `OfferApplication` owns the business rule.

#### [NEW] [payment-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/billing/components/payment-page/payment-page.component.ts)

**Focused step after Cart** (freeze §30). Not inside cart.

Flow: Cart → "Proceed to Pay" → Payment screen

Content:
- Final amount prominently displayed
- Payment method tabs: Cash | Card | UPI/QR | Mixed
- Cash: amount input, change calculation display
- UPI: static QR display (merchant name, amount, UPI ID from Settings), manual confirm
- Card: amount display, manual confirm
- Mixed: split input with optional note
- Primary CTA: "Collect Payment"
- Success: animated checkmark → auto-return to fresh Billing with search focused

#### [NEW] [upi-qr-panel.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/billing/components/upi-qr-panel/upi-qr-panel.component.ts)

Static QR code with merchant name, amount, UPI ID. Manual confirm button.

---

## Phase 4: Management Screens — Products, Customers, Offers, Bills

---

### Products (Freeze §33–§34)

#### [NEW] [product-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/product/product-page/product-page.component.ts)

Search + Category filter + Availability filter. Product grid/list. Add Product FAB.

Shows: image, name, selling price, available/unavailable.

**Does NOT show:** stock quantity, inventory data.

Role-aware per Permission Matrix.

#### [NEW] [product-form.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/product/components/product-form/product-form.component.ts)

Create/edit form. Mobile: full-screen. Desktop: dialog or side panel.

Fields: Name, Category, Selling Price, Barcode (optional), UoM, Product Type, Image (optional), Display Order, Availability toggle.

#### [NEW] [product.facade.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/product/product.facade.ts)

Signals: `products`, `categories`, `selectedProduct`. Methods: `create()`, `update()`, `archive()`, `toggleAvailability()`, `search()`.

---

### Customers (Freeze §35)

#### [NEW] [customer-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/customer/customer-page/customer-page.component.ts)

Management screen (NOT part of checkout nav). Search, customer list (name, phone), Add Customer button. Walk-In Customer hidden from list per spec.

#### [NEW] [customer-form.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/customer/components/customer-form/customer-form.component.ts)

Create/edit: Name (required), Phone (optional, unique), Email (optional).

#### [NEW] [customer.facade.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/customer/customer.facade.ts)

---

### Offers (Freeze §36)

#### [NEW] [offer-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/offer/offer-page/offer-page.component.ts)

**Owner-only** management screen. Active/inactive offers. Create, edit, enable/disable, priority, preview, simulator. Offer calculations belong to `OfferApplication`.

#### [NEW] [offer-builder.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/offer/components/offer-builder/offer-builder.component.ts)

Visual rule builder: IF [condition] THEN [reward]. Schedule picker. Simulation preview.

#### [NEW] [offer.facade.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/offer/offer.facade.ts)

---

### Bills (Freeze §37)

#### [NEW] [bills-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/billing/bills-page/bills-page.component.ts)

Invoice history. Tabs: All | Paid | Draft. Search. Bill detail view (bottom sheet mobile, side panel desktop). Reprint. Share where supported. Does NOT invent additional invoice workflows.

#### [NEW] [bill-detail.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/billing/components/bill-detail/bill-detail.component.ts)

Bill summary: number, date, customer, items, totals, payment method, status. Reprint button.

---

## Phase 5: Supporting Screens — Reports, Settings, Backup, AI, More

---

### Reports (Freeze §38)

#### [NEW] [report-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/report/report-page/report-page.component.ts)

Sales-focused reports. Sales Summary, Sales Trend, Top Products, Category Performance, Recent Bills. Export where supported. **No inventory analytics. No profit analytics.**

#### [NEW] [report.facade.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/report/report.facade.ts)

---

### Settings (Freeze §40)

#### [NEW] [settings-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/settings/settings-page/settings-page.component.ts)

Grouped sections per freeze: Business, Billing, Printing, Backup & Sync, Users, AI, Preferences, About. Left sidebar (desktop) / accordion (mobile) with right content panel.

Owner-only. Only expose settings supported by finalized Application Contracts.

#### [NEW] [settings.facade.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/settings/settings.facade.ts)

---

### Backup & Sync

#### [NEW] [backup-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/more/backup-page/backup-page.component.ts)

Backup status, last sync, pending queue, cloud health, recovery status. Restore with confirmation.

---

### AI Assistant (Freeze §32)

#### [NEW] [ai-chat-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/ai-assistant/ai-chat-page/ai-chat-page.component.ts)

**Owner-only.** Entry: floating AI button on Owner Dashboard.

Content: conversation panel, suggested questions chips, message input + send, loading animation, server response cards, internet-required indicator.

UI does NOT interpret business data — `AIApplication` owns the interaction.

#### [NEW] [ai-fab.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/ai-assistant/ai-fab/ai-fab.component.ts)

Floating action button on Owner Dashboard. Visible but non-obstructive. Routes to `/ai`.

---

### More Menu (Freeze §39)

#### [NEW] [more-page.component.ts](file:///d:/Project/BizCopilot-Client/src/ui/features/more/more-page/more-page.component.ts)

Structured per freeze:

**Business:**
- Customers
- Offers
- Reports

**Administration:**
- Settings
- Backup & Sync

**AI:**
- AI Assistant

**Other:**
- Support
- Logout

---

## Facade Architecture (Freeze §6)

```
┌─────────────────────┐
│    UI Component      │  ← Signals, ViewModels
│    (Presentation)    │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│    Feature Facade    │  ← Maps DTOs ↔ ViewModels
└──────────┬──────────┘
           │ Application Contract
┌──────────▼──────────┐
│  Application Service │  ← Permission + Feature checks
└──────────┬──────────┘
           │ Business Engine
┌──────────▼──────────┐
│   Runtime Service    │  ← Business rules
└──────────┬──────────┘
           │ Repository
┌──────────▼──────────┐
│      SQLite          │
└─────────────────────┘
```

| Facade | Screen | Application Contract |
|--------|--------|---------------------|
| `AuthFacade` | Login | AuthApplication |
| `DashboardFacade` | Dashboard | ReportApplication |
| `BillingFacade` | Billing, Cart, Payment | SalesApplication, ProductApplication, OfferApplication |
| `ProductFacade` | Products | ProductApplication |
| `CustomerFacade` | Customers | CustomerApplication |
| `OfferFacade` | Offers | OfferApplication |
| `BillsFacade` | Bills | SalesApplication |
| `ReportFacade` | Reports | ReportApplication |
| `SettingsFacade` | Settings | SettingsApplication |
| `BackupFacade` | Backup | BackupApplication |
| `AIChatFacade` | AI Chat | AIApplication |

---

## Screen States (All Screens)

| State | Visual |
|-------|--------|
| Loading | Skeleton shimmer |
| Ready | Normal content |
| Empty | Icon + message + CTA |
| Offline | Subtle amber indicator, billing continues |
| Syncing | Animated sync icon |
| Error | Error card + retry |
| Permission Denied | Lock icon + message |

---

## Assets Strategy (Freeze §44)

All static images under `src/assets/`:
```
src/assets/
  demo/products/     ← product images
  demo/avatars/      ← user avatars
  branding/          ← logo, icons
  illustrations/     ← empty states, onboarding
```
**Never:** base64, external URLs, hardcoded filenames in templates.

---

## Responsive Summary

| Breakpoint | Layout | Navigation | Cart | Billing Grid |
|-----------|--------|------------|------|-------------|
| Mobile (0–599) | Single column | Bottom nav | Bottom sheet via floating cart bar | 2 columns |
| Tablet (600–1023) | Split | Compact sidebar | Adaptive panel | 3 columns |
| Desktop (1024+) | Sidebar + Workspace | Persistent sidebar | Permanent 35% right panel | 3–4 columns |

---

## File Count Estimate

| Category | New Files | Modified Files |
|----------|-----------|---------------|
| Theme/Design System | 6 | 1 (styles.scss) |
| Layout Components | 2 | 0 |
| Navigation Components | 4 | 0 |
| Common Components | 13 | 0 |
| Feature Facades | 11 | 0 |
| Feature Pages | 13 | 0 |
| Feature Sub-Components | ~30 | 0 |
| Routing & Config | 0 | 3 (routes, config, app.component) |
| Assets | placeholder files | 0 |
| **Total** | **~82** | **4** |

---

## Verification Plan

### Automated Tests
```bash
ng test       # Existing 90 tests must remain passing
ng build      # Production build with zero errors
```

### Manual Verification
- All screens render at mobile (375px), tablet (768px), desktop (1280px)
- **Billing flow:** Search → Add to cart → Cart bar updates → Open cart → Customer inline → Offers inline → Proceed to Pay → Payment → Success → Back to Billing
- **Role redirect:** Owner login → Dashboard. Waiter login → Billing.
- **Role nav:** Waiter sees only Billing, Products, More in bottom nav
- **Offline:** Billing continues without interruption when offline
- **Feature flags:** AI hidden when disabled. Barcode hidden when disabled.
- Cart usable with 1, 5, 10+ items (scrollable items, fixed summary)
- Touch targets ≥ 44px
- Keyboard: desktop billing supports keyboard-first workflow
- No inventory, profit, stock data anywhere in UI
- All colors from design tokens, no raw hex in component SCSS
