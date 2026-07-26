# 12_Design_System.md

> **BizCopilot V1 – Design System**
>
> **Status:** Frontend Design Constitution

---

# 1. Purpose

Defines the visual language, reusable UI components and interaction standards used across every BizCopilot experience.

Business logic never belongs in the Design System.

---

# 2. Design Principles

- Fast before fancy
- Touch-first
- Responsive by default
- Accessible
- Consistent
- Minimal clicks
- Offline-first feedback
- Reusable components only

---

# 3. Design Tokens

## Colors

- Primary
- Secondary
- Success
- Warning
- Error
- Info
- Background
- Surface
- Border
- Disabled

Support:

- Light Theme
- Dark Theme

---

# 4. Typography

- Display
- Heading 1–6
- Body
- Caption
- Label
- Numeric (monospace for money)

---

# 5. Spacing

Use an 8px spacing grid.

Allowed spacing:

- 4
- 8
- 16
- 24
- 32
- 48
- 64

---

# 6. Responsive Breakpoints

- Mobile
- Tablet
- Desktop
- Large Desktop

Layout changes only.

Business functionality remains identical.

---

# 7. Navigation

Desktop:

- Left Sidebar
- Top App Bar
- Workspace
- Status Bar

Tablet:

- Compact Sidebar

Mobile:

- Bottom Navigation
- Floating Action Button

---

# 8. Component Library

Core Components:

- Button
- Icon Button
- Card
- Dialog
- Drawer
- Tabs
- Accordion
- Badge
- Chip
- Tooltip
- Snackbar
- Progress Indicator

Business Components:

- Product Card
- Customer Card
- Bill Item
- Money Input
- Quantity Selector
- Payment Panel
- QR Panel
- Dashboard Widget
- Report Card
- Sync Status
- Offline Badge

---

# 9. Form Standards

- Floating labels
- Inline validation
- Required indicator
- Numeric keypad for quantity & amount
- Keyboard navigation
- Auto focus where appropriate

---

# 10. Tables & Lists

Support:

- Search
- Sort
- Filter
- Pagination
- Infinite scroll (future)

---

# 11. Icons

Use a single icon library.

Icons should clearly represent actions.

Avoid decorative icons.

---

# 12. Buttons

Variants:

- Primary
- Secondary
- Success
- Danger
- Text
- Icon

States:

- Default
- Hover
- Focus
- Disabled
- Loading

---

# 13. Dialog Standards

Reusable dialogs:

- Confirmation
- Delete
- Payment
- Print
- Backup
- AI
- Settings

Avoid unnecessary modal dialogs during billing.

---

# 14. Feedback

Display:

- Toasts
- Snackbars
- Progress bars
- Skeleton loaders
- Success animations

---

# 15. Offline Experience

Always display:

- Offline badge
- Sync status
- Pending queue count
- Last successful sync

Offline users must continue working without interruption.

---

# 16. Accessibility

- Keyboard accessible
- Large touch targets
- High contrast support
- Visible focus indicators
- Screen reader friendly

---

# 17. Dashboard Widgets

Widgets must be:

- Resizable
- Reorderable
- Refreshable
- Feature-flag aware

---

# 18. Screen States

Every screen supports:

- Loading
- Empty
- Ready
- Offline
- Syncing
- Error
- Permission Denied

---

# 19. Animations

Keep animations short and purposeful.

Use animations for:

- Navigation
- Success
- Loading
- Expansion
- Error indication

Avoid distracting motion.

---

# 20. Feature Awareness

Components must react to:

- Feature Flags
- Permissions
- License Capabilities
- Connectivity

Hide unavailable features instead of showing broken actions.

---

# 21. Experience Consistency

All future experiences (Juice Shop, Cafe, Hardware, etc.) must reuse:

- Design Tokens
- Components
- Navigation
- Layout principles

Only branding and workflow optimizations may differ.

---

# 22. AI Coding Rules

- Build reusable components first.
- Never duplicate UI components.
- Separate presentation from business logic.
- Consume Application Contract only.
- Use responsive layouts by default.
- Respect Feature Flags and Permissions.
- Maintain visual consistency across all experiences.
