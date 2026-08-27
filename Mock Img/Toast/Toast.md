# BizCopilot V1 — Global Feedback Components
# FINAL FROZEN UI / UX + FIGMA-LEVEL DESIGN SPECIFICATION
# MESSAGE TOAST + CONFIRM DIALOG
# Responsive Desktop + Tablet + Mobile

============================================================
1. PURPOSE
============================================================

Create two reusable global BizCopilot components:

1. Message Toast
2. Confirm Dialog

These are GLOBAL components.

They must NOT be designed separately for:

- Product
- Category
- Customer
- Billing
- Offers
- Reports
- Settings
- other modules

Every module must use the same components.

Only the content, semantic type, icon and action labels change.

============================================================
2. GLOBAL DESIGN PRINCIPLE
============================================================

Both components must follow the existing BizCopilot design system.

Match the already-frozen:

- Product screen
- Category screen
- Add Product
- Add Category
- navigation
- buttons
- inputs
- cards
- typography
- colors
- icon system
- spacing
- responsive behavior

Do NOT introduce a new visual language.

The components should immediately look like they belong to BizCopilot.

============================================================
3. RESPONSIVE DESIGN — NON-NEGOTIABLE
============================================================

The components must be responsive.

Support:

- Mobile
- Tablet
- Desktop
- 13-inch laptop
- large desktop
- 4K

Do NOT recreate the mockup using fixed screenshot coordinates.

Do NOT use fixed layout dimensions that only work on one viewport.

Use:

- Flexbox
- responsive containers
- intrinsic sizing
- clamp()
- min()
- max()
- percentage sizing
- responsive design tokens
- safe-area handling
- appropriate breakpoints

Only semantic minimum sizes may be fixed, such as:

- icon touch targets
- button minimum height
- border thickness

============================================================
4. ICON SYSTEM
============================================================

Use one consistent SVG outline icon family.

Preferred:

Lucide or equivalent.

NO emoji.

NO mixed icon families.

Message Toast icons:

Success:
CircleCheck

Information:
Info

Warning:
TriangleAlert

Error:
CircleX

Undo:
Undo2

Close:
X

Confirm Dialog:

Danger:
Trash2 / CircleAlert

Warning:
TriangleAlert

Info:
Info

Close:
X

============================================================
5. MESSAGE TOAST
============================================================

Purpose:

Lightweight temporary feedback after user actions.

Use for:

- successful save
- successful update
- successful delete
- information
- warning
- recoverable errors
- undo actions

Do NOT use Toast for important decisions that require confirmation.

Use Confirm Dialog for those.

============================================================
6. TOAST — BASIC STRUCTURE
============================================================

Structure:

┌──────────────────────────────────────────┐
│ ICON  Title                         X    │
│       Supporting message                │
│──────────────────────────────────────────│
│              progress indicator          │
└──────────────────────────────────────────┘

Anatomy:

1. Semantic icon
2. Main message/title
3. Optional supporting message
4. Close action
5. Optional progress/time indicator
6. Optional action such as Undo

============================================================
7. TOAST — SUCCESS
============================================================

Example:

✓  Product created successfully
   Cappuccino has been added to your catalog.

Use:

Green semantic treatment.

Icon:

CircleCheck

Example use:

Product created successfully.

Category saved successfully.

Changes saved successfully.

============================================================
8. TOAST — INFORMATION
============================================================

Example:

ⓘ  Information updated
   Product details have been updated.

Use:

Blue semantic treatment.

Icon:

Info

Use for neutral system information.

============================================================
9. TOAST — WARNING
============================================================

Example:

⚠  Low stock warning
   Only 5 items are left in inventory.

IMPORTANT:

Although Inventory is not part of V1, this Toast component must support
the generic Warning type for future modules.

Use:

Orange semantic treatment.

Icon:

TriangleAlert

============================================================
10. TOAST — ERROR
============================================================

Example:

×  Failed to save product
   Please check the details and try again.

Use:

Red semantic treatment.

Icon:

CircleX

Error Toast must remain readable and actionable.

============================================================
11. TOAST — UNDO
============================================================

Example:

↶  Product deleted
                           Undo    X

Use when an action can safely be reversed.

The Undo action must be visually clear.

Undo uses:

Undo2

The Undo button uses a compact secondary/outline style.

============================================================
12. TOAST TITLE
============================================================

Toast title:

Semibold.

Short.

Action/result focused.

Examples:

Product created successfully

Category deleted

Changes saved

Failed to save product

Avoid long titles.

============================================================
13. TOAST SUPPORTING MESSAGE
============================================================

Optional.

Use to provide additional context.

Example:

Product created successfully

Cappuccino has been added to your catalog.

The supporting message uses smaller muted typography.

============================================================
14. TOAST CLOSE
============================================================

Every Toast can have:

X

Close icon.

Icon-only button.

Accessible label:

Dismiss notification

Clicking X dismisses immediately.

============================================================
15. TOAST AUTO DISMISS
============================================================

Default:

Auto-dismiss after approximately 4 seconds.

The duration must be configurable by Toast type where appropriate.

Critical errors may remain longer or require manual dismissal.

Do NOT make important error messages disappear too quickly.

============================================================
16. TOAST PROGRESS INDICATOR
============================================================

Display a subtle progress indicator when auto-dismiss is active.

The progress indicates remaining display time.

The progress indicator must use the semantic color of the Toast.

Do not make it visually dominant.

============================================================
17. TOAST PAUSE BEHAVIOR
============================================================

Optional but preferred:

Clicking/hovering the Toast can pause the auto-dismiss timer.

On interaction:

pause countdown.

After interaction ends:

resume countdown.

Mobile may use touch interaction.

============================================================
18. TOAST STACKING
============================================================

Multiple Toasts must stack vertically.

Example:

┌─────────────────────────────┐
│ ✓ Product created        X  │
└─────────────────────────────┘

┌─────────────────────────────┐
│ ⓘ Information updated    X  │
└─────────────────────────────┘

┌─────────────────────────────┐
│ ⚠ Warning                X  │
└─────────────────────────────┘

Maximum visible Toasts:

3

If more notifications exist:

queue them.

Do NOT allow unlimited Toasts to cover the application.

============================================================
19. TOAST SPACING
============================================================

Stacked Toasts use consistent vertical spacing.

Use shared BizCopilot spacing tokens.

Do NOT use arbitrary per-screen spacing.

============================================================
20. TOAST POSITION — DESKTOP
============================================================

Default placement:

Top-right.

Position:

Below the page/application header area.

Do NOT cover:

- primary page title
- primary Add button
- important navigation
- modal controls

Toast remains within the application viewport.

============================================================
21. TOAST POSITION — TABLET
============================================================

Use top-right where sufficient width exists.

Toast width adapts to available viewport width.

Do not cause horizontal overflow.

If the responsive layout requires it:

move toward a centered/top-safe position while maintaining visual
consistency.

============================================================
22. TOAST POSITION — MOBILE
============================================================

Use a mobile-friendly top placement below the header/safe area.

Toast width:

responsive.

Do NOT make the Toast wider than the usable viewport.

Respect:

- notch
- status area
- safe-area inset
- application header

============================================================
23. TOAST WIDTH
============================================================

Desktop:

Comfortable readable width.

Tablet:

Fluid within available space.

Mobile:

Use available width with safe horizontal margins.

Do NOT use one fixed width across every viewport.

Do NOT allow Toast to become excessively wide on 4K.

============================================================
24. TOAST RESPONSIVE TEXT
============================================================

Text must wrap naturally.

Do NOT truncate important feedback.

Long error messages can increase Toast height.

The layout must remain stable when text wraps.

============================================================
25. TOAST INTERACTION
============================================================

Toast is not a page navigation component.

Do not add unnecessary buttons.

Supported actions:

- close
- undo
- optional contextual action when genuinely required

============================================================
26. TOAST ACCESSIBILITY
============================================================

Toast must use appropriate accessible notification semantics.

Success/info:

polite announcement.

Critical errors:

appropriate assertive announcement when necessary.

Every close button:

Dismiss notification.

Undo:

Undo action.

Do not rely only on color to communicate type.

============================================================
27. TOAST COLORS
============================================================

SUCCESS:

Green semantic color.

INFORMATION:

Blue semantic color.

WARNING:

Orange semantic color.

ERROR:

Red semantic color.

UNDO:

BizCopilot Purple / neutral treatment.

Use soft semantic backgrounds with stronger semantic icon/accent colors.

Avoid excessive saturated fills.

============================================================
28. TOAST VISUAL STYLE
============================================================

Toast:

- white/light surface
- subtle border
- soft shadow
- rounded corners
- compact but readable
- premium BizCopilot appearance

Do NOT use a full-screen notification.

Do NOT use a solid saturated rectangle as the entire Toast.

============================================================
29. CONFIRM DIALOG
============================================================

Purpose:

Confirm important actions before execution.

Especially:

- delete
- deactivate
- discard
- destructive changes
- irreversible actions
- important state changes

The component must be generic.

============================================================
30. CONFIRM DIALOG STRUCTURE
============================================================

Structure:

┌──────────────────────────────────────┐
│ ICON    TITLE                    X   │
│                                      │
│         Description                  │
│                                      │
│    Optional warning/context box      │
│                                      │
│                    Cancel  Confirm   │
└──────────────────────────────────────┘

Anatomy:

1. Semantic icon
2. Title
3. Description
4. Optional contextual warning
5. Cancel action
6. Confirm action
7. Close action

============================================================
31. CONFIRM VARIANTS
============================================================

Support:

1. Danger / Destructive
2. Warning
3. Info / Neutral

Do NOT create separate dialog components.

Use one:

ConfirmationDialog

with variants.

============================================================
32. DANGER VARIANT
============================================================

Use for:

Delete
Remove
Permanent destructive action

Icon:

Trash2 / CircleAlert

Primary action:

Danger red.

Example:

Delete “Beverages”?

============================================================
33. WARNING VARIANT
============================================================

Use for:

Deactivate
important state change
action with consequences

Icon:

TriangleAlert

Primary action:

Warning/orange semantic treatment.

Example:

Deactivate “Cappuccino”?

============================================================
34. INFO VARIANT
============================================================

Use for:

neutral confirmation
non-destructive action

Icon:

Info

Primary action:

BizCopilot Purple.

Example:

Clear all filters?

============================================================
35. CONFIRM TITLE
============================================================

Short, action-oriented.

Examples:

Delete “Beverages”?

Deactivate “Cappuccino”?

Discard changes?

Clear all filters?

Avoid long titles.

============================================================
36. CONFIRM MESSAGE
============================================================

Explain the consequence.

Example:

This category has 12 products assigned to it.
All 12 products will be moved to “Unassigned”.
Your products will not be deleted.

The message should answer:

"What will happen if I confirm?"

============================================================
37. OPTIONAL WARNING / CONTEXT BLOCK
============================================================

For actions with significant consequences, display an additional
context block.

Example:

┌────────────────────────────────────────┐
│ ⚠  Unassigned is a system category    │
│    and cannot be deleted.              │
└────────────────────────────────────────┘

Use this only when genuinely useful.

Do NOT show warning blocks for every confirmation.

============================================================
38. CATEGORY DELETE — FINAL EXAMPLE
============================================================

Title:

Delete “Beverages”?

Message:

This category has 12 products assigned to it.
All 12 products will be moved to “Unassigned”.
Your products will not be deleted.

Actions:

Cancel
Delete Category

Variant:

Danger.

Icon:

Trash2.

============================================================
39. CATEGORY DELETE BUSINESS RULE
============================================================

If a category contains products:

The category may be deleted after confirmation.

Products are NOT deleted.

All products associated with the deleted category are moved to:

Unassigned

Unassigned is a system category.

============================================================
40. UNASSIGNED CATEGORY
============================================================

Unassigned:

- system-managed
- cannot be deleted
- cannot be renamed
- cannot be deactivated
- available as a fallback category

It is not treated as a normal user-created category.

============================================================
41. CATEGORY DELETE — EMPTY CATEGORY
============================================================

If category has zero products:

Use a simpler confirmation.

Example:

Delete “Desserts”?

This category has no products assigned to it.

Actions:

Cancel
Delete Category

No additional warning block is necessary.

============================================================
42. PRODUCT DELETE
============================================================

Example:

Delete “Cappuccino”?

This product will be permanently deleted.
This action cannot be undone.

Actions:

Cancel
Delete Product

Variant:

Danger.

============================================================
43. DEACTIVATE PRODUCT
============================================================

Example:

Deactivate “Cappuccino”?

This product will no longer be available for billing.

Actions:

Cancel
Deactivate

Variant:

Warning.

============================================================
44. DISCARD CHANGES
============================================================

Example:

Discard changes?

Your unsaved changes will be lost.

Actions:

Cancel
Discard Changes

Variant:

Warning or Info depending on the action context.

============================================================
45. CLEAR FILTERS
============================================================

Example:

Clear all filters?

This will reset all active filters and show all products.

Actions:

Cancel
Clear Filters

Variant:

Info.

============================================================
46. CONFIRM BUTTON ORDER
============================================================

Always:

Cancel → Confirm

Cancel:

secondary/outline.

Confirm:

semantic primary action.

Examples:

Cancel    Delete Category

Cancel    Delete Product

Cancel    Deactivate

Cancel    Discard Changes

Cancel    Clear Filters

============================================================
47. CONFIRM DIALOG — DESKTOP
============================================================

Desktop:

Centered modal.

Background:

existing application screen.

Overlay:

subtle dark/translucent backdrop.

Dialog:

white/light surface.

Do not navigate away.

============================================================
48. CONFIRM DIALOG — TABLET
============================================================

Tablet:

Responsive centered dialog.

Width adapts to viewport.

Maintain readable content.

Buttons remain touch-friendly.

============================================================
49. CONFIRM DIALOG — MOBILE
============================================================

Mobile:

Use the established BizCopilot responsive modal/bottom-sheet pattern.

Respect safe areas.

Buttons must remain accessible.

Long messages may scroll if necessary.

Do NOT make the dialog wider than the usable viewport.

============================================================
50. DIALOG WIDTH
============================================================

Use responsive sizing.

Desktop:

comfortable readable max-width.

Tablet:

fluid width.

Mobile:

nearly full available width with safe margins.

Do NOT hard-code screenshot-specific width.

============================================================
51. DIALOG HEIGHT
============================================================

Content-driven.

Do NOT force a fixed height.

If content exceeds viewport:

dialog content can scroll.

Do NOT permanently show a scrollbar.

============================================================
52. DIALOG BACKDROP
============================================================

Use a subtle translucent dark overlay.

The underlying screen remains visible enough to establish context.

The background page must not be interactive while the dialog is open.

============================================================
53. CLOSE BEHAVIOR
============================================================

Close via:

X

or:

Cancel.

For destructive confirmations:

clicking the backdrop should NOT confirm the action.

Depending on global interaction policy, backdrop click may close only
for non-destructive dialogs.

Escape:

close dialog without confirming.

============================================================
54. DESTRUCTIVE ACTION SAFETY
============================================================

NEVER execute destructive action by clicking:

- backdrop
- X
- Escape

Only the explicit destructive button confirms.

Examples:

Delete Category
Delete Product
Deactivate

must require explicit confirmation.

============================================================
55. LOADING STATE
============================================================

When Confirm is clicked:

button enters loading state.

Example:

Deleting...

Saving...

Deactivating...

Prevent duplicate submissions.

Do not close dialog until action succeeds or returns an error.

============================================================
56. ERROR DURING CONFIRMATION
============================================================

If the action fails:

Keep dialog open when appropriate.

Show an error message.

Example:

Unable to delete category.
Please try again.

Do not falsely show a success Toast.

============================================================
57. SUCCESS FLOW
============================================================

After successful action:

1. Execute action.
2. Close Confirm Dialog.
3. Update underlying screen.
4. Display Message Toast.

Example:

Delete Category
↓
Confirmation
↓
Delete succeeds
↓
Dialog closes
↓
Category screen updates
↓
Toast:

Category deleted successfully

============================================================
58. COMPONENT API — MESSAGE TOAST
============================================================

Reusable component concept:

MessageToast

Properties:

type
title
message
action
duration
dismissible
onClose
onAction

Type:

success
info
warning
error
undo

============================================================
59. COMPONENT API — CONFIRM DIALOG
============================================================

Reusable component concept:

ConfirmationDialog

Properties:

variant
icon
title
message
warningMessage
cancelLabel
confirmLabel
onCancel
onConfirm
loading
closable

Variant:

danger
warning
info

============================================================
60. FIGMA COMPONENT STRUCTURE
============================================================

MESSAGE TOAST:

MessageToast
 ├── SemanticIcon
 ├── Content
 │    ├── Title
 │    └── Message
 ├── OptionalAction
 ├── CloseButton
 └── ProgressIndicator

CONFIRM DIALOG:

ConfirmationDialog
 ├── DialogHeader
 │    ├── SemanticIcon
 │    ├── Title
 │    └── CloseButton
 ├── Message
 ├── OptionalWarningBlock
 └── DialogActions
      ├── CancelButton
      └── ConfirmButton

============================================================
61. COMPONENT STATES
============================================================

TOAST:

Success
Information
Warning
Error
Undo

Each supports:

Default
Hover
Focus
Dismiss
Auto-dismiss

CONFIRM:

Danger
Warning
Info

Each supports:

Default
Focus
Confirm loading
Error
Disabled

============================================================
62. TYPOGRAPHY
============================================================

Use existing BizCopilot typography.

Toast title:

Semibold.

Toast message:

Regular / muted.

Dialog title:

Semibold.

Dialog message:

Regular.

Warning block:

Regular with emphasized key information.

Buttons:

Medium/Semibold.

Do NOT introduce a new font.

============================================================
63. SPACING
============================================================

Use existing BizCopilot spacing tokens.

Maintain consistent:

- icon-to-content spacing
- title-to-message spacing
- message-to-action spacing
- card padding
- dialog padding
- button gap
- toast stack gap

Do NOT use arbitrary screenshot-specific spacing.

============================================================
64. BORDER RADIUS
============================================================

Use the same BizCopilot radius system.

Toast:

rounded card.

Dialog:

larger rounded modal surface.

Buttons:

same radius as existing BizCopilot buttons.

Do not create a unique radius system.

============================================================
65. SHADOWS
============================================================

Toast:

subtle elevated shadow.

Dialog:

stronger modal elevation.

Backdrop:

translucent overlay.

Match existing BizCopilot elevation tokens.

============================================================
66. COLOR SYSTEM
============================================================

SUCCESS:

Green.

INFO:

Blue.

WARNING:

Orange.

DANGER / ERROR:

Red.

PRIMARY:

BizCopilot Purple.

TEXT PRIMARY:

Dark neutral.

TEXT SECONDARY:

Muted neutral.

BACKGROUND:

White / very light neutral.

BORDER:

Soft neutral.

Do not use arbitrary colors.

============================================================
67. ACCESSIBILITY
============================================================

Message Toast:

Use appropriate notification semantics.

Confirm Dialog:

Use accessible dialog semantics.

Dialog must:

- trap focus while open
- restore focus after closing
- support keyboard navigation
- support Escape
- expose title and description
- provide accessible labels for icon-only buttons

Toast:

close and action buttons must have accessible labels.

Do not rely only on color.

============================================================
68. MOBILE TOUCH TARGETS
============================================================

Interactive controls must remain comfortably touchable.

Applies to:

- Toast close
- Undo
- Dialog close
- Cancel
- Confirm

Do not create tiny icon buttons.

============================================================
69. NO HORIZONTAL OVERFLOW
============================================================

At all supported viewport sizes:

No horizontal scrolling.

Long text must wrap.

Buttons must remain visible.

Dialog must fit within viewport.

Toast must fit within viewport.

============================================================
70. 4K BEHAVIOR
============================================================

4K:

Do not make Toast or Dialog excessively large.

Maintain readable max-width.

Maintain comfortable typography.

Keep Toast near its intended top-right location.

Keep Dialog centered.

============================================================
71. 13-INCH LAPTOP BEHAVIOR
============================================================

The components must adapt to reduced viewport dimensions.

Dialog may become vertically scrollable if necessary.

Toast must remain within visible safe area.

Do not shrink text below usable size.

============================================================
72. TABLET BEHAVIOR
============================================================

Toast:

responsive width.

Dialog:

responsive centered modal.

Touch-friendly actions.

============================================================
73. MOBILE BEHAVIOR
============================================================

Toast:

responsive top placement.

Dialog:

responsive bottom-sheet/modal pattern.

Safe-area aware.

No horizontal overflow.

============================================================
74. TOAST + DIALOG RELATIONSHIP
============================================================

Use:

Toast

for:

"Something happened."

Use:

Confirm Dialog

for:

"Are you sure you want to do this?"

Example:

Save Product
→ Toast

Delete Product
→ Confirm Dialog
→ successful deletion
→ Toast

============================================================
75. GLOBAL USAGE
============================================================

The same components must be reused across:

Products
Categories
Customers
Billing
Offers
Reports
Settings
Platform
Future modules

Do NOT create:

ProductToast
CategoryToast
ProductDeleteDialog
CategoryDeleteDialog

Instead:

MessageToast
ConfirmationDialog

with configuration.

============================================================
76. VISUAL CONSISTENCY
============================================================

Toast and Confirm Dialog must match:

- Add Product
- Add Category
- Product
- Category

in:

- typography
- purple
- borders
- radius
- shadows
- icons
- spacing
- buttons
- responsive behavior

============================================================
77. FINAL TOAST EXAMPLES
============================================================

SUCCESS:

✓ Product created successfully
  Cappuccino has been added to your catalog.

INFO:

ⓘ Information updated
  Product details have been updated.

WARNING:

⚠ Warning
  Please review the selected information.

ERROR:

× Failed to save product
  Please try again.

UNDO:

↶ Product deleted
                     Undo    X

============================================================
78. FINAL CONFIRM EXAMPLES
============================================================

DELETE CATEGORY:

Delete “Beverages”?

This category has 12 products assigned to it.
All 12 products will be moved to “Unassigned”.
Your products will not be deleted.

Cancel     Delete Category


DELETE PRODUCT:

Delete “Cappuccino”?

This product will be permanently deleted.
This action cannot be undone.

Cancel     Delete Product


DEACTIVATE:

Deactivate “Cappuccino”?

This product will no longer be available for billing.

Cancel     Deactivate


DISCARD:

Discard changes?

Your unsaved changes will be lost.

Cancel     Discard Changes


CLEAR FILTERS:

Clear all filters?

This will reset all active filters and show all products.

Cancel     Clear Filters

============================================================
79. FINAL ACCEPTANCE TEST
============================================================

Test at:

320px
375px
430px
600px
768px
834px
1024px
1280px
1440px
1920px
2560px
3840px

Verify:

✓ Toast responsive
✓ Dialog responsive
✓ No horizontal overflow
✓ Correct semantic colors
✓ Correct icons
✓ Correct button order
✓ Correct stacking
✓ Toast auto-dismiss works
✓ Toast can be dismissed
✓ Undo works where configured
✓ Maximum visible Toasts = 3
✓ Dialog blocks background interaction
✓ Destructive actions require explicit confirmation
✓ Dialog supports loading state
✓ Dialog supports error state
✓ Success action closes dialog
✓ Success action generates Toast
✓ Mobile safe area respected
✓ No unnecessary scrollbar
✓ Long content wraps correctly
✓ Same component reused across modules
✓ No module-specific Toast/Dialog designs

============================================================
80. FINAL FROZEN COMPONENTS
============================================================

GLOBAL COMPONENT 1:

MessageToast

Variants:

Success
Information
Warning
Error
Undo


GLOBAL COMPONENT 2:

ConfirmationDialog

Variants:

Danger
Warning
Info


MESSAGE TOAST:

Action result
↓
Temporary feedback
↓
Auto dismiss / Close


CONFIRM DIALOG:

User initiates important action
↓
Confirmation Dialog
↓
Cancel OR Confirm
↓
Action executes
↓
Dialog closes
↓
Success Toast

============================================================
FINAL DESIGN PRINCIPLE
============================================================

ONE GLOBAL TOAST COMPONENT.

ONE GLOBAL CONFIRMATION COMPONENT.

Use configuration to change:

- message
- title
- icon
- semantic type
- action label
- supporting information

Do NOT create separate components for individual modules.

The components must be visually consistent, responsive, accessible,
safe for destructive actions, and reusable throughout the entire
BizCopilot application.

THIS IS THE FINAL FROZEN MESSAGE TOAST + CONFIRM DIALOG SPECIFICATION.