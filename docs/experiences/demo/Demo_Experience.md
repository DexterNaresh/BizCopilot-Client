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

- Offline-first
- Touch-first
- Keyboard friendly
- Responsive
- Fast billing (3-click goal)
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
- Automatic offers
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
- Priority
- Stackable

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
