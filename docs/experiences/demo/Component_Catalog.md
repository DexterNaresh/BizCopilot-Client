# 13_Component_Catalog.md

> **BizCopilot V1 – Component Catalog**
>
> **Status:** Frontend Component Constitution

---

# 1. Purpose

Defines every reusable UI component used by BizCopilot.

Components contain presentation and interaction only.

Business rules remain inside the Business Engine through the Application Contract.

---

# 2. Component Standards

Every component shall define:

- Purpose
- Inputs (Props)
- Outputs (Events)
- Application Contract interaction
- Feature Flag behaviour
- Permission behaviour
- Responsive behaviour
- Loading state
- Empty state
- Error state
- Accessibility

---

# 3. Layout Components

## App Shell
Hosts navigation, workspace and status bar.

## Sidebar
Navigation, role-aware menu, feature-aware visibility.

## Top App Bar
Business name, search, notifications, profile.

## Status Bar
Internet, Sync, Backup, License, Version.

---

# 4. Billing Components

## Product Search
- Search products
- Barcode entry
- Camera entry (feature flag)

## Product Grid
- Favorites
- Recent
- Categories
- Availability

## Cart
- Items
- Quantity
- Offer display
- Tax summary

## Bill Summary
- Subtotal
- Discount
- Tax
- Grand Total

## Payment Panel
- Cash
- Card
- UPI
- Mixed Payment

## UPI QR Panel
- Display configured merchant QR
- Amount display
- Payment instructions

## Draft Panel
- Save draft
- Resume draft

---

# 5. Product Components

- Product Card
- Product Form
- Category Selector
- Availability Badge
- Barcode Display
- Product Image

---

# 6. Customer Components

- Customer Search
- Customer Card
- Quick Customer
- Customer Form
- Walk-in Customer Tile

---

# 7. Offer Components

- Offer Builder
- Rule Builder
- Schedule Picker
- Priority Selector
- Simulation Panel
- Offer Preview

---

# 8. Report Components

- Report Filter Panel
- Date Range Picker
- Report Table
- Dashboard Dataset Card
- Export Panel
- Saved Report Card

---

# 9. Dashboard Components

- Sales Widget
- Product Widget
- Offer Widget
- Backup Widget
- Sync Widget
- AI Insight Widget
- Health Widget

Widgets support reorder and resize.

---

# 10. Backup Components

- Backup Status Card
- Sync Queue Card
- Recovery Status
- Restore Dialog

---

# 11. AI Components

- AI Chat Window
- Suggested Questions
- Conversation Panel
- AI Response Card
- Loading Indicator

---

# 12. Settings Components

- Section Card
- Feature Toggle
- Printer Settings
- Payment Settings
- Report Settings
- Business Profile Form

---

# 13. Common Components

- Search Bar
- Money Input
- Quantity Selector
- Status Badge
- Offline Badge
- Sync Badge
- Confirmation Dialog
- Delete Dialog
- Progress Dialog
- Empty State
- Error State
- Loading Skeleton
- Toast
- Snackbar

---

# 14. Responsive Behaviour

Mobile:
- Single column

Tablet:
- Two column

Desktop:
- Multi-column

Component behaviour remains consistent.

---

# 15. Feature Awareness

Components react to:

- Feature Flags
- Permissions
- License Capabilities
- Connectivity

Unavailable functionality is hidden or read-only.

---

# 16. Accessibility

- Keyboard navigation
- Touch-friendly targets
- Screen reader labels
- Visible focus
- High contrast compatibility

---

# 17. Application Contract Mapping

Every interactive component communicates only through the Application Contract.

Components never access repositories, SQLite or Platform services directly.

---

# 18. AI Coding Rules

- Build reusable components before screens.
- One responsibility per component.
- Never duplicate business widgets.
- Use composition over duplication.
- Keep components stateless where practical.
- Business logic belongs outside the UI.
