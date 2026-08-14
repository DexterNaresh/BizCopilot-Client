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

---

# 19. Component Contracts & ViewModel Definitions

All components must strictly adhere to the following contract structure:
- **Inputs (`@Input`)**: Must only accept ViewModels or primitives. Domain Entities (e.g., `Product`) must never be passed directly to UI components.
- **Outputs (`@Output`)**: Must emit standard semantic events (e.g., `(itemAdded)`, `(checkoutInitiated)`) rather than raw DOM events.
- **ViewModels**: Must be readonly and flattened. (e.g., `export interface ProductViewModel { id: string; displayPrice: string; stockBadge: string; }`).

---

# 20. Angular Signals Usage

BizCopilot V1 relies entirely on Angular Signals for reactive state:
- **UI State**: Use `signal()` for local component state (e.g., `isExpanded = signal(false)`).
- **Derived State**: Use `computed()` for values derived from Facades or local signals (e.g., `cartTotal = computed(() => this.cart().reduce(...))`).
- **Facade State**: Facades must expose readonly Signals to the UI, never BehaviorSubjects or raw Observables.

---

# 21. Interaction & Animation Specifications

- **Micro-interactions**: Use `150ms ease-in-out` for hover states and button presses.
- **Drawer / Bottom Sheets**: Use `300ms cubic-bezier(0.4, 0, 0.2, 1)` for slide-in animations.
- **Feedback**: Emit haptic feedback (via browser API if available) on primary actions (Add to Cart, Pay).

---

# 22. Accessibility (A11y) & Keyboard Specs

- **Focus Management**: Focus must be trapped inside active Dialogs and Bottom Sheets.
- **ARIA Labels**: All icon-only buttons must have `aria-label` attributes.
- **Keyboard Shortcuts**: 
  - `Ctrl + /` (or `/` outside inputs): Focus global search.
  - `Escape`: Close active dialog or sheet.
  - `Enter`: Confirm primary action in forms.
