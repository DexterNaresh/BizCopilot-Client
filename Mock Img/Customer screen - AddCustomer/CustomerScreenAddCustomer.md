# BIZCOPILOT — CUSTOMER SCREEN
# PART 4 — ADD CUSTOMER
# MASTER FIGMA-LEVEL UI/UX DESIGN PROMPT
# FINAL CUSTOMER SCREEN SECTION

Design the production-ready BizCopilot:

CUSTOMER → ADD CUSTOMER

This is the final missing workflow of the Customer section.

The Add Customer experience must be a short, fast, focused customer-creation
workflow designed for small-business owners, cashiers, and operators.

The user should be able to create a customer in a few seconds:

Customer Name
→ Phone (optional)
→ Notes (optional)
→ Save Customer

Do NOT turn this into a multi-step wizard.

Do NOT create a separate Add Customer page.

Do NOT introduce unnecessary customer fields.

Do NOT create a new navigation destination.

Use the existing BizCopilot Customer design system and visual language.

============================================================
1. CUSTOMER SCREEN WORKFLOW CONTEXT
============================================================

The complete Customer workflow is:

PART 1
Customer Dashboard / On Load
        ↓
PART 2
Customer Selected / Customer Details
        ↓
PART 3
Bill Selected / Bill Details
        ↓
PART 4
Add Customer

Add Customer is a contextual creation workflow launched from the
Customer Dashboard.

It is NOT another Customer Details screen.

============================================================
2. CORE PRODUCT PRINCIPLE
============================================================

BizCopilot is designed for fast business operations.

Add Customer must prioritize:

- Speed
- Clarity
- Minimal typing
- Minimal decisions
- Minimal navigation
- Immediate feedback
- Responsive behavior
- Offline-first operation

The operator should never feel like they are filling out a long CRM form.

The form should contain only the information required for the V1
customer creation workflow.

============================================================
3. FINAL FIELD SET — FREEZE THIS
============================================================

The Add Customer form contains exactly:

1. Customer Name *
2. Phone
3. Notes

Actions:

4. Cancel
5. Save Customer

Nothing else.

============================================================
4. DO NOT ADD FIELDS
============================================================

Do NOT add:

- Customer ID
- Customer Code
- Customer Number
- Address
- Email
- Date of Birth
- Gender
- GST Number
- PAN
- Credit Limit
- Opening Balance
- Loyalty Points
- Customer Type
- Customer Group
- Status selector
- Profile image
- Billing preference
- Payment preference
- Occupation
- Birthday
- Anniversary
- Tags
- Custom fields
- Marketing preferences
- Separate Notes editor
- Create Bill
- Save & Create Bill
- More Options
- Three-dot menu

If additional customer attributes are required in the future, they must
be introduced through a separate product decision and specification.

Do not invent fields.

============================================================
5. RESPONSIVE VIEWPORT STRATEGY
============================================================

The Add Customer workflow must behave differently according to viewport
while maintaining the same information architecture.

DESKTOP:
1024px+

→ Centered overlay

TABLET:
600px–1023px

→ Centered overlay

MOBILE:
0–599px

→ Bottom sheet / bottom overlay nearly to the top

Do NOT simply shrink the Desktop overlay for Mobile.

Mobile must use a responsive bottom-sheet composition.

============================================================
6. DESKTOP STRUCTURE
============================================================

Viewport:

1024px+

The Customer Dashboard remains underneath.

Open Add Customer as a centered overlay.

Structure:

┌────────────────────────────────────────────────────────────────────┐
│ Customer Dashboard                                                 │
│                                                                    │
│ Customer table/list remains visible underneath                     │
│                                                                    │
│                    ┌───────────────────────────────┐               │
│                    │ Add Customer              ×   │               │
│                    │───────────────────────────────│               │
│                    │                               │               │
│                    │ Customer Name *               │               │
│                    │ [_________________________]   │               │
│                    │                               │               │
│                    │ Phone                         │               │
│                    │ [+91 ▼][__________________]  │               │
│                    │                               │               │
│                    │ Notes                         │               │
│                    │ ┌───────────────────────────┐ │               │
│                    │ │                           │ │               │
│                    │ │                           │ │               │
│                    │ └───────────────────────────┘ │               │
│                    │                               │               │
│                    │ [Cancel]       [Save Customer]│               │
│                    └───────────────────────────────┘               │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘

Requirements:

- Center overlay within the application workspace.
- Use a subtle backdrop.
- Preserve the underlying Customer Dashboard state.
- Do not navigate away.
- Do not create page-level scrolling.
- Keep overlay compact.
- Avoid excessive whitespace.
- Keep form visually balanced.
- Save Customer is the primary action.
- Cancel is secondary.

============================================================
7. TABLET STRUCTURE
============================================================

Viewport:

600px–1023px

Use the same fundamental overlay architecture as Desktop.

Do NOT convert Tablet into the Mobile bottom-sheet layout.

Structure:

┌───────────────────────────────────────────────────────────────┐
│                       Customer Dashboard                      │
│                                                               │
│              ┌─────────────────────────────────┐              │
│              │ Add Customer                ×  │              │
│              │─────────────────────────────────│              │
│              │                                 │              │
│              │ Customer Name *                 │              │
│              │ [____________________________]  │              │
│              │                                 │              │
│              │ Phone                           │              │
│              │ [+91 ▼][_____________________] │              │
│              │                                 │              │
│              │ Notes                           │              │
│              │ [____________________________] │              │
│              │ [____________________________] │              │
│              │                                 │              │
│              │ Cancel       Save Customer      │              │
│              └─────────────────────────────────┘              │
│                                                               │
└───────────────────────────────────────────────────────────────┘

The overlay width must be fluid.

Do not use a hard-coded layout that breaks at different tablet widths.

============================================================
8. MOBILE STRUCTURE
============================================================

Viewport:

0–599px

Use a bottom sheet nearly to the top.

Leave a small amount of visible background above the sheet.

Structure:

┌────────────────────────────────┐
│                                │
│       underlying screen        │
│       small visible gap        │
├────────────────────────────────┤
│ Add Customer               ×   │
│────────────────────────────────│
│                                │
│ Customer Name *                │
│ ┌────────────────────────────┐ │
│ │ Enter customer name        │ │
│ └────────────────────────────┘ │
│                                │
│ Phone                          │
│ ┌───────┬────────────────────┐ │
│ │ +91 ▼ │ Enter phone number │ │
│ └───────┴────────────────────┘ │
│                                │
│ Notes                          │
│ ┌────────────────────────────┐ │
│ │ Add a note (optional)      │ │
│ │                            │ │
│ └────────────────────────────┘ │
│                                │
│ ┌──────────┐ ┌───────────────┐ │
│ │ Cancel   │ │ Save Customer │ │
│ └──────────┘ └───────────────┘ │
└────────────────────────────────┘

Requirements:

- Full available mobile width.
- Rounded top corners.
- Small top gap.
- Fixed sheet header.
- Form content should fit comfortably.
- Bottom actions remain accessible.
- Keyboard must not hide the active field or Save button.
- Do not create horizontal scrolling.
- Do not create browser/page scrolling.
- If vertical space becomes constrained by the keyboard, allow the
  form content area to adapt without moving the entire application.

============================================================
9. MOBILE BOTTOM-SHEET BEHAVIOR
============================================================

When Add Customer opens:

- Animate upward using the existing BizCopilot sheet behavior.
- Keep animation subtle and fast.
- Respect reduced-motion preferences.
- Focus Customer Name automatically when appropriate.
- Open the keyboard naturally on mobile if this matches the existing
  BizCopilot interaction pattern.

The bottom sheet should feel like a focused task, not a separate page.

============================================================
10. HEADER
============================================================

Header:

Add Customer

Close:

Material Symbols Outlined:
close

Desktop/Tablet:

┌─────────────────────────────────────────┐
│ Add Customer                         ×  │
└─────────────────────────────────────────┘

Mobile:

┌─────────────────────────────────────────┐
│ Add Customer                         ×  │
└─────────────────────────────────────────┘

The header should remain visible while the form is being used.

Do not add:

- Back button
- Breadcrumbs
- Three-dot menu
- Help icon
- Extra navigation
- Secondary action

Close is sufficient.

============================================================
11. CUSTOMER NAME FIELD
============================================================

Label:

Customer Name *

Placeholder:

Enter customer name

This is REQUIRED.

Behavior:

- Normal text input.
- Trim leading/trailing whitespace before save.
- Reject empty/whitespace-only values.
- Auto-focus when Add Customer opens where appropriate.
- Support normal keyboard text entry.
- Preserve entered text when validation fails.

Validation:

If empty:

Customer name is required

Do not show an error before the user has meaningfully interacted with
the field unless Save is pressed.

Invalid state:

┌─────────────────────────────────────────┐
│ Customer Name *                         │
│ [                                   ]   │
│ Customer name is required               │
└─────────────────────────────────────────┘

Use the standard BizCopilot error treatment.

Do not over-validate names.

Do not require:

- First name
- Last name
- Middle name

A single Customer Name field is intentional.

============================================================
12. PHONE FIELD
============================================================

Label:

Phone

Phone is OPTIONAL.

Structure:

┌─────────┬──────────────────────────────┐
│ +91 ▼   │ Enter phone number           │
└─────────┴──────────────────────────────┘

Default country code:

+91

The country selector should visually appear as a compact prefix control.

Do not make the phone field unnecessarily large.

Behavior:

- User may leave it empty.
- If supplied, validate according to the application's supported
  phone-number rules.
- Preserve the input if validation fails.
- Do not require phone just to create a customer.

Invalid example:

Enter a valid phone number

Do not display excessive validation messaging.

============================================================
13. PHONE COUNTRY CODE
============================================================

The UI should visually support:

+91

with a dropdown/selector indicator.

For the current Indian V1 experience:

- Default = +91.

If the underlying implementation already supports multiple countries,
the selector may expose supported country codes.

Do NOT invent a giant country-selection workflow in the mock.

Keep it compact.

============================================================
14. DUPLICATE CUSTOMER HANDLING
============================================================

If the entered phone number already belongs to an existing customer:

Do NOT silently create a duplicate customer.

The UI should support a clear duplicate state.

Example:

┌──────────────────────────────────────────┐
│ Customer already exists                  │
│                                          │
│ Arun Kumar                               │
│ +91 98765 43210                          │
│                                          │
│ Review existing customer                 │
└──────────────────────────────────────────┘

The exact duplicate resolution workflow belongs to the Customer
application/domain layer.

The UI must not invent a destructive or confusing duplicate behavior.

Do not automatically overwrite an existing customer.

============================================================
15. NOTES FIELD
============================================================

Label:

Notes

Placeholder:

Add a note (optional)

Use a multiline textarea.

Example notes:

Usually visits in the evening.

Prefers UPI.

Wholesale customer.

Notes are OPTIONAL.

Do not make Notes required.

Do not create an independent Notes editor.

============================================================
16. IMPORTANT NOTES WORKFLOW RULE
============================================================

This distinction is FINAL:

ADD CUSTOMER:

Notes are editable because the user is creating the customer.

CUSTOMER DETAILS:

Notes are READ ONLY in this phase.

EDIT CUSTOMER:

Customer Notes can be edited through the separate Edit Customer
workflow when that workflow is implemented.

Do NOT add:

Edit Notes
Pencil icon beside Notes
Inline Notes editor
Notes popup
Separate Notes modal

inside Customer Details.

The Add Customer workflow is the correct place to initially enter Notes.

============================================================
17. STATUS
============================================================

Do NOT show an Active/Inactive status selector in Add Customer.

A newly created customer should be created as Active by default.

The existing Customer Dashboard/Customer Details workflow handles
customer status and deactivation.

Do not add:

[ Active ▼ ]

or

Active / Inactive toggle

to this form.

============================================================
18. ACTION AREA
============================================================

Bottom action row:

Cancel
Save Customer

Desktop/Tablet:

[ Cancel ]          [ Save Customer ]

Mobile:

[ Cancel ]          [ Save Customer ]

Save Customer is the PRIMARY action.

Cancel is the SECONDARY action.

Use the existing BizCopilot button styles.

Do not introduce:

- Save & New
- Save & Create Bill
- Save and Add Another
- Apply
- Submit
- Done
- Continue

unless explicitly added in a future product decision.

============================================================
19. SAVE BUTTON INITIAL STATE
============================================================

When Customer Name is empty:

Save Customer should be visually disabled OR remain enabled and trigger
standard validation when pressed, depending on the existing BizCopilot
form convention.

Prefer the existing global form convention.

Do not invent a new interaction pattern.

If disabled:

Save Customer
     disabled

Once a valid Customer Name is entered:

Save Customer
     enabled / primary

Phone and Notes are optional and must not control Save availability.

============================================================
20. SAVE BEHAVIOR
============================================================

When user taps:

Save Customer

Perform:

Validate
↓
Create Customer
↓
Persist locally
↓
Update Customer state
↓
Close Add Customer
↓
Show Success Toast

Success message:

Customer added successfully

The customer should immediately become available in the Customer
Dashboard.

Do not force the user to refresh the page.

Do not navigate to Customer Details automatically unless that behavior
already exists in the application specification.

The Add Customer workflow itself ends after successful creation.

============================================================
21. OFFLINE-FIRST BEHAVIOR
============================================================

BizCopilot is offline-first.

Creating a customer must work while offline.

Do NOT show:

"No internet connection — cannot save customer."

Instead:

Save Customer
↓
Local persistence
↓
Customer available immediately
↓
Sync later when connectivity is available

The UI should not expose synchronization complexity unless the existing
global application design requires a status indicator.

Customer creation must feel immediate.

============================================================
22. SAVE LOADING STATE
============================================================

While saving:

Save Customer
↓
Saving...

Prevent duplicate submissions.

The user must not be able to accidentally create:

Customer A
Customer A
Customer A

from multiple rapid taps.

Disable the relevant action while the create request is processing.

Do not lock the entire interface unnecessarily.

============================================================
23. SAVE SUCCESS STATE
============================================================

After successful creation:

1. Save customer.
2. Close Add Customer.
3. Return to the previous Customer Dashboard state.
4. Show standard Success Toast.

Example:

✓ Customer added successfully

Do not open another modal.

Do not automatically navigate to a different screen.

============================================================
24. SAVE FAILURE STATE
============================================================

If customer creation fails:

Keep the Add Customer overlay open.

Keep all user-entered values.

Show:

Unable to save customer. Please try again.

Do NOT clear:

- Customer Name
- Phone
- Notes

The user should be able to retry.

============================================================
25. CLOSE / CANCEL BEHAVIOR
============================================================

Close icon:

Material Symbols Outlined:
close

Cancel button:

Cancel

If the form has not been changed:

Close immediately.

If the user has entered meaningful information:

Show the standard BizCopilot destructive/discard confirmation.

Example:

┌─────────────────────────────────────────┐
│ Discard customer?                       │
│                                         │
│ Your entered information will be lost.  │
│                                         │
│ Cancel              Discard             │
└─────────────────────────────────────────┘

Do not create a custom confirmation design if BizCopilot already has a
global confirmation dialog.

Use the existing confirmation component.

============================================================
26. BACKDROP BEHAVIOR
============================================================

Desktop/Tablet:

When Add Customer opens:

- Add subtle backdrop.
- Dim underlying Customer Dashboard.
- Prevent interaction with underlying screen.
- Preserve enough visual context to understand where the user came from.

Mobile:

The underlying Customer Dashboard remains behind the bottom sheet.

The sheet is the active layer.

Do not allow accidental interaction with the background.

============================================================
27. OVERLAY HIERARCHY
============================================================

Desktop:

Customer Dashboard
        ↓
Backdrop
        ↓
Add Customer Overlay

Tablet:

Customer Dashboard
        ↓
Backdrop
        ↓
Add Customer Overlay

Mobile:

Customer Dashboard
        ↓
Backdrop
        ↓
Add Customer Bottom Sheet

Do NOT place another Customer Details panel underneath Add Customer.

Add Customer is launched from the Customer Dashboard.

============================================================
28. SCROLLING RULE
============================================================

The Add Customer form is intentionally short.

At normal viewport sizes:

NO SCROLLBAR should be visible.

Do NOT create:

- Page scrollbar
- Overlay scrollbar
- Horizontal scrollbar

If an unusually small viewport or mobile keyboard reduces available
space, adapt the internal content naturally according to the global
responsive rules.

Do not make the normal Add Customer experience scroll.

============================================================
29. RESPONSIVE FORM LAYOUT
============================================================

Desktop:

Comfortable compact form width.

Fields are full width within the overlay.

Phone:

Country code + phone input in one row.

Tablet:

Same structure.

Mobile:

Full-width fields.

Phone remains:

[+91] [Phone]

Buttons adapt fluidly.

Do not use hard-coded pixel positions.

Do not absolutely position form elements.

Use responsive constraints so the UI behaves correctly across:

- Small phones
- Large phones
- Small tablets
- Large tablets
- 13-inch laptops
- Large desktop monitors
- 4K displays

============================================================
30. DESIGN SYSTEM
============================================================

Use the existing BizCopilot visual system.

Visual characteristics:

- Clean
- Calm
- Premium
- Business-first
- Minimal
- High clarity
- Fast interaction
- Consistent with Customer Dashboard
- Consistent with Product and Category screens

Do NOT redesign the brand language.

============================================================
31. COLORS
============================================================

Use the existing BizCopilot theme tokens.

Primary:

Existing BizCopilot accent color.

Use accent primarily for:

- Save Customer
- Active/focused input state
- Important interactive elements

Neutral:

- Main text
- Secondary text
- Borders
- Surface backgrounds

Error:

Existing semantic error color.

Success:

Existing semantic success color.

Do NOT hard-code random colors.

Do NOT introduce gradients.

Do NOT use excessive colorful cards.

============================================================
32. TYPOGRAPHY
============================================================

Use the existing BizCopilot typography system.

Hierarchy:

Add Customer
→ overlay heading

Field labels
→ medium/normal emphasis

Input text
→ strong readable body text

Placeholder
→ muted secondary text

Validation
→ compact error text

Button labels
→ medium emphasis

Do not use oversized typography.

Do not make the form look like a marketing page.

============================================================
33. INPUT DESIGN
============================================================

All inputs must:

- Have visible labels.
- Have clear focus state.
- Have readable placeholder text.
- Have consistent height.
- Have sufficient touch target.
- Have clear error state.
- Preserve entered content.

Recommended minimum touch target:

approximately 44px.

Mobile text inputs should use a comfortable mobile text size and must
not cause browser zoom behavior.

============================================================
34. MATERIAL ICONS
============================================================

Use:

Material Symbols Outlined

Required:

Close:
close

Optional:

Phone:
phone

Do not add unnecessary icons.

Do not mix icon libraries.

Do not use emoji as UI icons.

============================================================
35. ACCESSIBILITY
============================================================

Provide:

Customer Name:
accessible label "Customer Name"

Phone:
accessible label "Phone number"

Country selector:
accessible label "Country code"

Notes:
accessible label "Customer notes"

Close:
"Close Add Customer"

Cancel:
"Cancel"

Save:
"Save Customer"

Requirements:

- Visible labels.
- Keyboard accessible.
- Focus states.
- Sufficient contrast.
- Minimum comfortable touch targets.
- Error messages associated with their inputs.
- Do not communicate validation only through color.
- Modal/sheet semantics should be accessible.
- Focus should remain inside the active overlay.
- Escape closes the overlay on Desktop/Tablet where supported.

============================================================
36. KEYBOARD BEHAVIOR
============================================================

Desktop:

Tab order:

Customer Name
↓
Country Code
↓
Phone
↓
Notes
↓
Cancel
↓
Save Customer

Mobile:

Keyboard should move naturally between fields.

Use the appropriate keyboard/input type:

Customer Name:
text

Phone:
numeric / telephone keyboard

Notes:
multiline text

Do not unnecessarily open a numeric keyboard for Customer Name or Notes.

============================================================
37. MOBILE KEYBOARD BEHAVIOR
============================================================

When keyboard appears:

- Active input must remain visible.
- Save action must remain reachable.
- Bottom sheet must adapt to available viewport.
- Avoid content being hidden behind the keyboard.
- Do not create horizontal overflow.
- Do not move the sheet into an awkward full-screen page unless required
  by the existing global bottom-sheet behavior.

The experience should remain comfortable on small phones.

============================================================
38. FORM VALIDATION STATES
============================================================

Design these states:

STATE 1:
Fresh form

Customer Name empty
Phone empty
Notes empty

STATE 2:
Customer Name entered

Name valid
Phone empty
Notes empty

STATE 3:
Complete form

Name
Phone
Notes

STATE 4:
Name validation error

Customer name is required

STATE 5:
Phone validation error

Enter a valid phone number

STATE 6:
Duplicate customer

Customer already exists

STATE 7:
Saving

Saving...

STATE 8:
Save failure

Unable to save customer. Please try again.

STATE 9:
Discard confirmation

Discard customer?

Do not create separate screens for these states.

They are states of the Add Customer overlay.

============================================================
39. VISUAL DENSITY
============================================================

Do not waste space.

The form should feel:

Compact
Professional
Easy to scan
Fast to complete

Avoid:

- Giant modal
- Huge header
- Excessive vertical gaps
- Decorative illustrations
- Large empty areas
- Multiple cards around each field
- Unnecessary sections

The user should immediately see all three fields and the actions.

============================================================
40. NO NESTED CARDS
============================================================

Do not place every field inside a separate card.

Preferred:

Overlay surface
    ↓
Header
    ↓
Fields
    ↓
Action row

Use borders and field styling to establish structure.

Do not create:

┌───────────────┐
│ Name Card     │
└───────────────┘

┌───────────────┐
│ Phone Card    │
└───────────────┘

┌───────────────┐
│ Notes Card    │
└───────────────┘

This creates unnecessary visual complexity.

============================================================
41. CUSTOMER DASHBOARD PRESERVATION
============================================================

When Add Customer opens:

The underlying Customer Dashboard must remain in the same state.

If the user had:

- Search text
- Filters
- Customer selection state
- Table position

do not unnecessarily reset it when Add Customer is closed.

After successful creation, return to the previous dashboard context.

============================================================
42. DESKTOP OVERLAY DIMENSIONS
============================================================

Do NOT hard-code a single pixel width.

Use responsive constraints.

The overlay should be:

- Compact
- Wide enough for comfortable fields
- Narrow enough to remain a focused task

Recommended conceptual sizing:

Desktop:
approximately 420–520px visual width depending on available space.

Tablet:
responsive width with appropriate side margins.

Mobile:
full available width with safe horizontal margins/padding.

These are layout intentions, not fixed implementation dimensions.

============================================================
43. MOBILE SAFE AREA
============================================================

Respect device safe areas.

Especially:

- Bottom action area
- Home indicator area
- Keyboard area

Buttons must never become unreachable.

Use the existing BizCopilot mobile safe-area behavior.

============================================================
44. BUTTON RESPONSIVENESS
============================================================

Desktop/Tablet:

Buttons can use natural content width.

Mobile:

Buttons should provide comfortable touch targets.

Preferred:

Cancel
+
Save Customer

Keep Save Customer visually dominant.

Do not create tiny text-only controls.

============================================================
45. NO "ADD ANOTHER" CHECKBOX
============================================================

Do NOT include:

☐ Add another customer

The user should finish one focused customer creation workflow at a time.

If a future workflow needs rapid multi-customer entry, it should be
designed separately.

============================================================
46. NO CREATE BILL ACTION
============================================================

Do NOT include:

Save & Create Bill

or:

Create Bill

Customer creation is independent from billing.

If the customer is needed during Billing, Billing has its own
customer-selection/create-customer workflow.

Do not merge the two workflows in this screen.

============================================================
47. BILLING CUSTOMER CREATION RELATIONSHIP
============================================================

The dedicated Customer screen Add Customer and the Billing customer
creation workflow may share the same underlying customer creation
model and form principles.

However:

Do not redesign Billing here.

Do not add Billing navigation.

Do not add cart.

Do not add bill information.

This screen is only Customer → Add Customer.

============================================================
48. DATA / IMPLEMENTATION BOUNDARY
============================================================

The UI should submit customer information:

Customer Name
Phone
Notes

The application layer is responsible for:

- Validation enforcement
- Customer creation
- Duplicate handling
- Persistence
- Offline behavior
- Synchronization
- Response mapping

Do not put business/domain logic into the visual design.

The Figma design should represent UI states, not implement business rules.

============================================================
49. SUCCESS TOAST
============================================================

Use the existing BizCopilot toast system.

Success:

✓ Customer added successfully

Do not create a custom toast design.

Do not show multiple simultaneous messages.

============================================================
50. ERROR TOAST
============================================================

If a system-level failure occurs:

Unable to save customer. Please try again.

Use the existing BizCopilot Error Toast.

Field validation errors should appear near their respective fields.

Do not use a generic toast for a simple field validation problem.

============================================================
51. LOADING STATE
============================================================

Saving state:

Save Customer → Saving...

The button should communicate that the action is processing.

Prevent repeated submission.

Do not use a full-screen loading spinner.

Do not block the entire application unnecessarily.

============================================================
52. ANIMATION
============================================================

Desktop/Tablet:

Subtle overlay fade/scale according to existing BizCopilot modal behavior.

Mobile:

Subtle bottom-sheet slide-up.

Keep animations:

- Fast
- Professional
- Non-distracting

Respect:

prefers-reduced-motion

If reduced motion is enabled:

Use minimal/no movement while preserving state clarity.

============================================================
53. FOCUS MANAGEMENT
============================================================

When opened:

Focus Customer Name.

When validation fails:

Move focus to the first invalid field where appropriate.

When closed:

Return focus to the element that launched Add Customer.

Do not allow keyboard focus to accidentally move behind the modal.

============================================================
54. FORM RESET
============================================================

When a new Add Customer workflow is opened:

Start with:

Customer Name = empty
Phone = empty
Notes = empty

After successful save and close:

The next Add Customer action should open a clean form.

If the user cancels/discards:

Clear the abandoned form state.

Do not accidentally carry the previous customer's information into the
next Add Customer operation.

============================================================
55. EXACT DESKTOP REFERENCE
============================================================

Create this visual relationship:

┌──────────────────────────────────────────────────────────────────────┐
│ BizCopilot Header                                                    │
├──────────────┬───────────────────────────────────────────────────────┤
│ Sidebar      │ Customers                                             │
│              │                                                       │
│              │ Search                              [+ Add Customer]  │
│              │                                                       │
│              │ Customer Table                                        │
│              │                                                       │
│              │                                                       │
│              │               BACKDROP                                │
│              │                                                       │
│              │          ┌─────────────────────────────┐              │
│              │          │ Add Customer             × │              │
│              │          │─────────────────────────────│              │
│              │          │                             │              │
│              │          │ Customer Name *             │              │
│              │          │ [________________________] │              │
│              │          │                             │              │
│              │          │ Phone                       │              │
│              │          │ [+91][___________________] │              │
│              │          │                             │              │
│              │          │ Notes                       │              │
│              │          │ [________________________] │              │
│              │          │ [________________________] │              │
│              │          │                             │              │
│              │          │ Cancel   Save Customer      │              │
│              │          └─────────────────────────────┘              │
└──────────────┴───────────────────────────────────────────────────────┘

============================================================
56. EXACT MOBILE REFERENCE
============================================================

Create this visual relationship:

┌────────────────────────────────┐
│ Customers                      │
│                                │
│ underlying Customer Dashboard  │
│                                │
│                                │
│        dimmed background       │
├────────────────────────────────┤
│                                │
│ Add Customer                ×  │
│────────────────────────────────│
│                                │
│ Customer Name *                │
│ [ Enter customer name        ] │
│                                │
│ Phone                          │
│ [+91] [ Enter phone number   ] │
│                                │
│ Notes                          │
│ [ Add a note (optional)      ] │
│ [                            ] │
│                                │
│ [ Cancel ] [ Save Customer  ]  │
│                                │
└────────────────────────────────┘

No device mockup.

The Figma output should represent the actual mobile viewport UI.

============================================================
57. DESKTOP/TABLET/MOBILE COMPARISON
============================================================

DESKTOP:

Customer Dashboard
+
Centered Add Customer Overlay

TABLET:

Customer Dashboard
+
Centered Add Customer Overlay

MOBILE:

Customer Dashboard
+
Bottom Add Customer Sheet

The information architecture remains identical.

Only the presentation changes.

============================================================
58. RESPONSIVE PRINCIPLE
============================================================

Never use:

"Desktop design scaled down."

Instead:

Desktop:
Focused centered overlay

Tablet:
Focused centered overlay with responsive dimensions

Mobile:
Focused bottom sheet optimized for touch and keyboard

All three must feel like the same BizCopilot product.

============================================================
59. NO PAGE SCROLL
============================================================

The Customer page must not suddenly gain:

- X scrollbar
- Y scrollbar

because Add Customer is opened.

The overlay must remain contained within the viewport.

No content should overflow horizontally.

No layout should shift unexpectedly.

============================================================
60. NO BACKGROUND INTERACTION
============================================================

While Add Customer is open:

Underlying Customer Dashboard is visually present but inactive.

Do not allow:

- Clicking table rows
- Clicking search
- Clicking filters
- Clicking another action

until Add Customer is closed.

============================================================
61. FINAL ACCEPTANCE CHECKLIST
============================================================

Before finalizing the Figma design verify:

[ ] Desktop uses centered overlay.
[ ] Tablet uses centered overlay.
[ ] Mobile uses bottom sheet nearly to top.
[ ] Small top gap exists on mobile.
[ ] No phone/device mockup is used for the actual mobile design.
[ ] Customer Name is required.
[ ] Phone is optional.
[ ] Notes are optional.
[ ] +91 is the default phone country code.
[ ] Notes are editable during Add Customer.
[ ] Customer Details Notes remain read-only in this phase.
[ ] Edit Customer remains a separate workflow.
[ ] No Status selector.
[ ] New customer is Active by default.
[ ] No Create Bill.
[ ] No Save & Create Bill.
[ ] No Add Another.
[ ] No three-dot menu.
[ ] No unnecessary fields.
[ ] No nested cards.
[ ] No excessive whitespace.
[ ] No page-level scrolling.
[ ] No horizontal overflow.
[ ] Save Customer is primary.
[ ] Cancel is secondary.
[ ] Validation is clear.
[ ] Duplicate customer state is represented.
[ ] Saving state is represented.
[ ] Save failure preserves entered data.
[ ] Success closes the overlay and shows success feedback.
[ ] Offline creation is supported conceptually.
[ ] Existing Customer Dashboard state is preserved.
[ ] Keyboard behavior is considered.
[ ] Focus management is considered.
[ ] Touch targets are comfortable.
[ ] Material Symbols Outlined are used.
[ ] Existing BizCopilot colors and typography are maintained.
[ ] Responsive behavior works across viewport sizes.
[ ] No invented features are introduced.

============================================================
62. FINAL DESIGN QUALITY BAR
============================================================

The finished Add Customer experience should look and feel like a
production feature of BizCopilot, not a generic SaaS form.

TARGET EXPERIENCE:

OPEN
↓
Immediately see Add Customer
↓
Name field already focused
↓
Type name
↓
Optional phone
↓
Optional note
↓
Save Customer
↓
Immediate success
↓
Back to Customer Dashboard

The entire interaction should feel:

FAST
SIMPLE
PREMIUM
CALM
RESPONSIVE
TOUCH-FRIENDLY
BUSINESS-FIRST

The operator should never need to ask:

"Where do I enter this?"
"Why is there another page?"
"Why do I need to fill this field?"
"Where did my customer list go?"

Everything necessary should be visible immediately.

============================================================
63. FINAL FIGMA OUTPUT
============================================================

Generate production-quality responsive UI for:

1. Desktop — Add Customer
2. Tablet — Add Customer
3. Mobile — Add Customer

Show the actual functional visual states necessary to communicate the
workflow.

The design must use the existing BizCopilot Customer Dashboard as the
background/context.

Do NOT redesign the Customer Dashboard.

Do NOT redesign Customer Details.

Do NOT redesign Bill Details.

Only design:

CUSTOMER → ADD CUSTOMER

This is the final missing Customer screen workflow.

Maintain complete consistency with the previously established BizCopilot
Customer design system, interaction model, overlays, typography,
spacing, icons, colors, responsive rules, and business-first philosophy.