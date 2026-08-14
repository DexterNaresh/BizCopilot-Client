# 11_Demo_Experience.md

> **BizCopilot V1 – Demo Experience**
>
> **Status:** Frontend Experience Constitution

---

# 1. Purpose

This document defines the complete reference user experience for BizCopilot.

It demonstrates every V1 feature without being tied to a specific business domain.

Future experiences (Juice Shop, Cafe, Hardware, etc.) reuse the same Business Engine through the Application Contract.

---

# 2. Experience Principles

- **Fastest billing experience with the least navigation** (Core Principle)
- Optimize for repetition
- Automatic decisions should remain invisible
- Ask for decisions as late as possible
- Never interrupt billing unless user input is genuinely required
- Administrative complexity must never affect billing speed
- Offline-first
- Touch-first
- Keyboard friendly
- Responsive
- Zero duplicated business logic
- Feature flag driven
- Role aware (Owner / Employee)

---

# 3. Communication Architecture

UI
→ Application Contract
→ Business Engine
→ Platform
→ SQLite

Rules:

- Never access SQLite directly.
- Never call Business Services directly.
- Never bypass Application Contract.
- UI receives ViewModels and sends Commands/Queries only.

---

# 4. Screen Inventory

- Login
- Dashboard
- Billing
- Product
- Customer
- Offer
- Reports
- Settings
- Backup
- AI Chat
- About

---

# 5. Layout

Desktop:
- Left navigation
- Top toolbar
- Main workspace
- Right contextual panel
- Bottom status bar

Tablet:
- Compact navigation
- Split workspace

Mobile:
- Bottom navigation
- Floating primary action
- Full-screen forms

---

# 6. Dashboard

Owner:
- Today's Sales
- Recent Bills
- Top Products
- Offer Summary
- Sync Status
- Backup Status
- AI Insight
- Health Status

Employee:
- Quick Billing
- Recent Bills
- Sync Status

Widgets are provided by Platform Dashboard Framework.

---

# 7. Billing Experience

Features:

- Product search
- Favorites
- Recent products
- Barcode scanner (feature flag)
- Camera scanner (feature flag)
- Cart
- Quantity editor
- **Automatic offers (Same category auto-applied)**
- **Applicable offers popup (Different categories, shown only on payment)**
- Tax calculation
- Cash payment
- Card payment
- UPI payment
- Static QR display
- Mixed payment
- Draft bills
- Resume draft
- Print
- Reprint
- Void bill
- Offline indicator
- Sync indicator

Bill Number:
Generated through Platform Identity & Sequence Service.

---

# 8. Product Experience

- Search
- Filter
- Category
- Product image
- Availability
- Product code
- Display order
- Archive
- Barcode support

---

# 9. Customer Experience

- Quick customer
- Walk-in customer
- Search
- Customer history
- Phone optional
- Customer code

---

# 10. Offer Experience

- Rule builder
- Schedule
- Date/time validation
- Preview
- Simulation
- Enable/Disable
- Priority (Removed in V1, auto-resolves highest benefit for same category)
- Stackable (Different categories handled at payment)

# 10.1 Authentication & Startup Experience

**Startup:**
- Defaults to: `Current User | Continue Billing | Switch User`
- No unnecessary full login screens

**Switch User:**
- Tap "Switch User"
- Select role (Owner, Cashier, Waiter, Manager)
- Enter 4-digit or 6-digit PIN
- Return to billing immediately (max two taps + PIN)

---

# 11. Reports Experience

- Daily
- Weekly
- Monthly
- Yearly
- Custom
- Export
- Saved reports
- Dashboard datasets

---

# 12. Backup Experience

Displays:

- Backup enabled
- Last sync
- Pending queue
- Recovery status
- Cloud health

Restore workflow is initiated from here.

---

# 13. Settings Experience

Business:
- Profile
- GST
- Payment
- Printer
- Reports

Platform:
- Backup
- AI
- License
- Device
- Version

User:
- Dashboard
- Theme
- Language

---

# 14. AI Chat Experience

Owner only.

Supports:
- Suggested questions
- Free-form questions
- Chat history
- Loading indicator
- Server response

All AI processing occurs on the server.

---

# 15. Common Components

Reusable components:

- Search Bar
- Product Card
- Customer Card
- Bill Item
- Money Input
- Quantity Selector
- Payment Panel
- QR Panel
- Dashboard Widget
- Status Badge
- Offline Badge
- Sync Badge
- Loading Skeleton
- Empty State
- Error State
- Confirmation Dialog

---

# 16. Screen States

Every screen supports:

- Loading
- Ready
- Empty
- Offline
- Syncing
- Error
- Permission Denied

---

# 17. Feature Flags

Hide or disable UI based on Platform Feature Manager:

- AI
- Backup
- Printer
- Barcode
- Camera
- UPI
- Reports

---

# 18. Owner vs Employee

Owner:
- Full access
- Dashboard
- Reports
- Settings
- Backup
- AI

Employee:
- Billing
- Drafts
- Customer selection
- Product search

Additional permissions are controlled by Application Contract.

---

# 19. Responsive Rules

Same functionality across:

- Mobile
- Tablet
- Desktop

Only layout changes.

---

# 20. UX Standards

- Large touch targets
- Instant feedback
- Non-blocking sync
- Minimal dialogs
- Consistent navigation
- Keyboard shortcuts where appropriate
- Clear offline indicators

---

# 21. Application Contract Mapping

Every UI action communicates only through the Application Contract.

Examples:

Billing → Billing Contract
Product → Product Contract
Customer → Customer Contract
Offer → Offer Contract
Report → Report Contract
Backup → Backup Contract
Settings → Settings Contract
AI → AI Contract

---

# 22. AI Coding Rules

- UI contains no business logic.
- Use reusable components.
- Consume Commands, Queries and ViewModels only.
- Respect Feature Flags and Permissions.
- Keep business modules independent of UI.
- Future business-specific experiences must reuse this architecture.

---

# 23. Mobile UI Visual Reference

## Purpose

The mobile UI reference images define the intended visual language for BizCopilot V1. They serve as the primary design reference for developers and AI coding agents to ensure a premium, modern, and visually consistent experience.

---

## Design Principles

- **Fastest Billing Experience**: Streamlined workflows with zero friction.
- **Less Navigation**: Flattened hierarchies to keep the user focused.
- **Touch-First Design**: Large touch targets suitable for POS environments.
- **Offline First**: Always available and functional without an internet connection.
- **AI Assisted**: Intelligent insights and operations available on demand.
- **Progressive Disclosure**: Advanced features only appear when necessary.
- **Material-inspired, custom branded UI**: Built on modern SaaS enterprise standards.
- **Mobile-first architecture**: Optimized for one-hand usage and smaller screens.

---

## Screen Mapping

The visual reference screens map directly to the underlying Runtime modules as follows:

| Screen          | Runtime Module      |
| --------------- | ------------------- |
| First Run Setup | Platform / Settings |
| Login           | Authentication      |
| Dashboard       | Reports             |
| Billing         | Billing             |
| Products        | Product             |
| Customers       | Customer            |
| Offers          | Offer               |
| Reports         | Reports             |
| AI Assistant    | AI                  |
| Settings        | Settings            |

---

## Navigation Flow

1. **First Run Setup** → **PIN Setup** → **Login**
2. **Login** → **Dashboard** (Owner) or **Billing** (Employee)
3. **Dashboard** → **Billing** / **Products** / **More Menu**
4. **Billing** ↔ **Cart** (Bottom Sheet) ↔ **Payment** ↔ **Offer Selection**
5. **More Menu (Drawer)** → **Reports**, **Customers**, **Offers**, **Settings**, **Backup**, **AI Assistant**
6. **Global** → **AI Chat** (Floating Drawer/FAB)

---

## Responsive Notes

While these references depict the **mobile** experience, the exact same UI architecture adapts fluidly across devices:
- **Mobile**: Bottom navigation, bottom sheets, full-screen forms.
- **Tablet**: Split workspaces, compact navigation bars.
- **Desktop**: Left sidebar navigation, right contextual panels.
- *Deployment*: APK and Windows EXE remain the primary targets.

---

## Component References

Consistent visual language is achieved by reusing core components:

- **Search Bar**: Used in Billing, Products, Customers.
- **Product Card**: Grid display with image, price, and code.
- **Bottom Sheet**: Used for Cart summary and Offer selection.
- **Status Badge**: Offline, Sync, and System Health indicators.
- **Cart Summary**: Sticky panel summarizing totals and discounts.
- **AI Drawer**: Slide-out panel for chat and insights.
- **Dashboard Cards**: Key metrics (Sales, Profit, Trends).
- **Floating Action Button (FAB)**: Primary contextual actions (Add Product, AI).

---

## Developer Notes

> [!IMPORTANT]
> These images are **visual references only**.
> 
> Business logic must continue to reside exclusively in the Runtime layer through the approved Application Contracts. The UI implementation must never infer business rules from the mockups. Design references dictate *form*, while the Application Contract dictates *function*.
