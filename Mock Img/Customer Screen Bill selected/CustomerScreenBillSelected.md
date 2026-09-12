# BIZCOPILOT — CUSTOMER SCREEN
# PART 3 — BILL SELECTED / BILL DETAILS
# FIGMA-LEVEL UI/UX DESIGN PROMPT
# FINAL FROZEN WORKFLOW

Design the final production-ready BizCopilot Customer Screen — Part 3:
“Bill Selected / Bill Details”.

This is NOT a new standalone Bill/Transactions screen.

This screen is reached from:
Customer Dashboard
→ Select Customer
→ Customer Details
→ Select a Recent Bill
→ Bill Details

The purpose of this state is to let the user inspect one customer's complete historical bill quickly and clearly, while preserving the Customer Details context underneath.

Do NOT redesign Part 1 or Part 2.
Do NOT introduce a separate navigation flow.
Do NOT create a second customer panel.
Do NOT create unnecessary actions.

==================================================
1. CORE DESIGN PRINCIPLE
==================================================

Bill Details is a contextual detail layer above Customer Details.

The hierarchy is:

Customer Dashboard
        ↓
Customer Selected
        ↓
Customer Details
        ↓
Recent Bills
        ↓
Bill Selected
        ↓
Bill Details Overlay

IMPORTANT:

When Bill Details opens:

Desktop / Tablet:
- Customer list remains in the left-side area.
- Customer Details remains in the right-side panel.
- Bill Details opens ABOVE Customer Details as a centered overlay.
- Bill Details must NOT replace the Customer Details panel.
- Bill Details must NOT open as a second right-side panel.

Mobile:
- Customer Details is already open as a bottom overlay.
- Bill Details opens ABOVE the Customer Details layer as another bottom overlay.
- Bill Details should extend nearly to the top of the viewport.
- Leave a small visible top gap so the overlay does not feel permanently attached to the viewport.
- Underlying Customer Details remains preserved.

The user should be able to close Bill Details and immediately return to the same Customer Details state.

==================================================
2. VIEWPORT STRUCTURE
==================================================

DESKTOP
1024px+

Use the standard BizCopilot desktop workspace.

Structure:

┌─────────────────────────────────────────────────────────────────────┐
│ BizCopilot Header                                                   │
├───────────────┬───────────────────────────────────┬─────────────────┤
│               │                                   │                 │
│ Main          │ Customer List                     │ Customer        │
│ Navigation    │                                   │ Details         │
│ / Sidebar     │                                   │                 │
│               │                                   │                 │
│               │                                   │   ┌───────────┐ │
│               │                                   │   │ BILL      │ │
│               │                                   │   │ DETAILS   │ │
│               │                                   │   │ OVERLAY   │ │
│               │                                   │   │           │ │
│               │                                   │   └───────────┘ │
│               │                                   │                 │
└───────────────┴───────────────────────────────────┴─────────────────┘


IMPORTANT:
The Bill Details overlay is centered within the application workspace,
not attached to the Customer Details panel.

The underlying Customer Details panel remains visible/dimmed.

Use a subtle backdrop/dimming layer behind Bill Details to establish
modal hierarchy.

Do not make the entire application disappear.

==================================================
3. TABLET VIEWPORT
==================================================

600px–1023px

Tablet uses the same fundamental Customer workflow as Desktop.

Customer Dashboard:
- Same table structure as Desktop.
- Do NOT redesign the initial dashboard into a mobile card-only layout.

Customer Selected:
- Customer list remains on the left.
- Customer Details appears on the right.
- Customer list uses the frozen collapsed-column structure.

Bill Selected:
- Bill Details opens as a centered overlay.
- Do NOT open Bill Details as another side panel.
- Do NOT replace Customer Details.
- Underlying Customer Details remains visible behind the overlay.

Tablet overlay can be slightly wider than Desktop proportionally,
but must remain responsive and never cause horizontal overflow.

==================================================
4. MOBILE VIEWPORT
==================================================

0–599px

Mobile does NOT use the desktop split-screen layout.

Customer Details is displayed as a bottom overlay nearly reaching the
top of the viewport.

When the user taps a Recent Bill:

Open Bill Details as a new bottom overlay ABOVE Customer Details.

Structure:

┌─────────────────────────────┐
│ small top gap               │
├─────────────────────────────┤
│ BILL DETAILS          ×     │
│─────────────────────────────│
│ Bill Number / Status        │
│ Date / Time                 │
│ Customer                    │
│                             │
│ ITEMS                       │
│ ┌─────────────────────────┐ │
│ │ item                    │ │
│ │ qty × price             │ │
│ │ ...                     │ │
│ └─────────────────────────┘ │
│                             │
│ Subtotal                    │
│ Discount / Offer            │
│ Tax                         │
│ Total                       │
│                             │
│ Payment                     │
│                             │
│ Reprint Bill                │
└─────────────────────────────┘

Requirements:
- Bottom overlay nearly to the top.
- Small top spacing/gap.
- Rounded top corners consistent with BizCopilot bottom sheets.
- Fixed header.
- Fixed summary/payment/footer areas where appropriate.
- Only the Items section scrolls when the item list becomes long.
- Never make the complete Bill Details overlay/page scroll.
- Never create page-level scrolling just because a bill has many items.

==================================================
5. CUSTOMER LIST COLUMN COLLAPSE — REFERENCE
==================================================

This is important.

When no customer is selected, the Customer Dashboard uses the full
Desktop/Tablet table:

FULL CUSTOMER TABLE

┌─────┬──────────────┬──────────────┬───────┬─────────────┬────────────┬────────┬──────┬──────┬─────┐
│ Seq │ Customer     │ Phone        │ Bills │ Total Spent │ Last Visit │ Status │ Edit │ Trash│  →  │
└─────┴──────────────┴──────────────┴───────┴─────────────┴────────────┴────────┴──────┴──────┴─────┘

After selecting a customer, collapse the table:

COLLAPSED CUSTOMER TABLE

┌─────┬──────────────┬──────────────┬────────┬──────┬─────┐
│ Seq │ Customer     │ Phone        │ Status │ Trash│  →  │
└─────┴──────────────┴──────────────┴────────┴──────┴─────┘

REMOVE / HIDE:
- Bills
- Total Spent
- Last Visit
- Edit pencil

KEEP:
- Seq. No.
- Customer
- Phone
- Status + Toggle
- Deactivate / Trash
- Arrow

ASCII COLUMN COLLAPSE LOGIC:

INITIAL
Seq | Customer | Phone | Bills | Total Spent | Last Visit | Status | Edit | Trash | →

                    ↓ Customer selected

SELECTED
Seq | Customer | Phone | Status | Trash | →

                    ↓ Bill selected

SELECTED + BILL OVERLAY
Seq | Customer | Phone | Status | Trash | →
                         +
                  BILL DETAILS
                    OVERLAY

The customer list does NOT change again when a bill is selected.

The same collapsed customer-list structure remains underneath the
Bill Details overlay.

==================================================
6. BILL DETAILS OVERLAY — DESKTOP/TABLET
==================================================

Use a centered modal/overlay.

Recommended visual hierarchy:

                 ┌─────────────────────────────────────┐
                 │ Bill Details                    ×   │
                 ├─────────────────────────────────────┤
                 │                                     │
                 │ Bill #BC-20260818-0042              │
                 │ Completed                           │
                 │ 18 Aug 2026 • 7:42 PM               │
                 │                                     │
                 │ Customer                            │
                 │ Arun Kumar                           │
                 │ +91 98765 43210                     │
                 │                                     │
                 │ ─────────────────────────────────── │
                 │ ITEMS                               │
                 │                                     │
                 │ 01  Basmati Rice                    │
                 │     2 Qty × ₹120              ₹240  │
                 │                                     │
                 │ 02  Sugar                           │
                 │     1.5 Kg × ₹48              ₹72  │
                 │                                     │
                 │ 03  Cooking Oil                     │
                 │     0.750 L × ₹150             ₹112.50
                 │                                     │
                 │        [Items section scrolls]      │
                 │                                     │
                 │ ─────────────────────────────────── │
                 │ Subtotal                      ₹424.50
                 │ Discount                       -₹50
                 │ Offer                          -₹20
                 │ Tax                             ₹0
                 │                                     │
                 │ TOTAL                         ₹354.50
                 │                                     │
                 │ Payment                            │
                 │ UPI — ₹354.50                      │
                 │                                     │
                 │              [ Reprint Bill ]       │
                 └─────────────────────────────────────┘

The actual values are examples only.
Use realistic demo data in the visual design.

==================================================
7. BILL HEADER
==================================================

At the top of Bill Details show:

- Bill Details title
- Close icon
- Bill number
- Bill status
- Date
- Time

Example:

Bill Details                         ×

#BC-20260818-0042
Completed
18 Aug 2026 • 7:42 PM

Use a compact status badge for the bill status.

Possible historical bill statuses:
- Completed
- Cancelled
- Voided
- Refunded
- Partially Refunded

Do not invent additional statuses.

The status must be visually obvious but not visually dominant.

==================================================
8. CUSTOMER INFORMATION
==================================================

Show the customer associated with this bill.

Example:

Customer
Arun Kumar
+91 98765 43210

Keep this section compact.

Do not add:
- Customer edit button
- Create Bill button
- Three-dot menu
- Customer navigation
- Separate customer editor

This is historical bill information.

The customer information displayed here is contextual information about
the selected bill.

==================================================
9. BILL ITEMS SECTION
==================================================

This is the primary content section.

Display every item included in the selected bill.

Each item should clearly show:

- Product name
- Quantity
- Unit
- Unit price
- Line total

Examples:

Basmati Rice
2 Qty × ₹120
₹240

Sugar
1.5 Kg × ₹48
₹72

Cooking Oil
0.750 L × ₹150
₹112.50

Wire
7.5 Meter × ₹25
₹187.50

Support units configured by the product/bill:

- Qty
- Pack
- Kg
- Ltr
- Meter

For measured quantities:
- Preserve decimal precision used by the bill.
- Do not round the displayed quantity into an integer.

For quantity/pack:
- Display integer quantity.

IMPORTANT:
Bill Details is historical.

Do not recalculate the bill based on the current Product configuration.

Display the historical bill/sale-line snapshot.

==================================================
10. ITEM SCROLLING — CRITICAL
==================================================

Only the BILL ITEMS container may scroll.

Example:

┌─────────────────────────────┐
│ Bill header                 │  fixed
│ Customer                    │  fixed
├─────────────────────────────┤
│ ITEMS                       │
│                             │
│ Item 1                      │
│ Item 2                      │
│ Item 3                      │
│ Item 4                      │
│ Item 5                      │
│ Item 6                      │
│ Item 7                      │
│       ↕ scroll              │
├─────────────────────────────┤
│ Subtotal                    │  fixed
│ Discount                    │  fixed
│ Tax                         │  fixed
│ TOTAL                       │  fixed
│ Payment                     │  fixed
│ Reprint Bill                │  fixed
└─────────────────────────────┘

NEVER:
- Scroll the entire overlay.
- Scroll the complete Customer screen.
- Scroll the browser page because of bill items.
- Make the footer disappear while inspecting items.
- Make the bill header disappear while scrolling.

If there are only a few items:
- No visible scrollbar should appear.

If there are many items:
- Only the Items section gets an internal scrollbar.

This rule applies to:
- Desktop
- Tablet
- Mobile

==================================================
11. BILL SUMMARY
==================================================

After the Items section show a compact financial summary:

Subtotal
Discount / Offer
Tax
Total

Example:

Subtotal                         ₹1,250.00
Discount                          -₹100.00
Offer                              -₹50.00
Tax                                 ₹0.00
────────────────────────────────────────
TOTAL                            ₹1,100.00

The Total must be visually prominent.

Do not add:
- Total savings KPI
- Profit
- Margin
- Inventory value
- Cost price
- Stock information

Those are outside this screen.

==================================================
12. OFFER / DISCOUNT DISPLAY
==================================================

If the bill contains an offer/discount:

Show the applied discount clearly.

Example:

Discount
Summer Offer                  -₹100.00

or

Offer
20% Off                       -₹200.00

The exact discount amount must come from the historical bill data.

Do not attempt to determine whether the offer is still active today.

Do not recalculate the historical promotion using the current Offer Engine.

This screen is for historical bill inspection.

==================================================
13. PAYMENT INFORMATION
==================================================

Show how the bill was paid.

Examples:

Payment
UPI
₹1,100.00

or:

Payment
Cash
Received                     ₹1,200.00
Change                          ₹100.00

For Card:

Payment
Card
₹1,100.00

For split payment:

Payment
Split Payment

Cash                         ₹500.00
UPI                          ₹600.00

Total                       ₹1,100.00

Keep payment information concise and easy to scan.

Do not show unnecessary payment-processing controls.

This is a historical bill.

==================================================
14. REPRINT BILL
==================================================

Provide:

[ Reprint Bill ]

Use the standard BizCopilot print icon / Material Symbols Outlined icon.

Recommended icon:
print

The action must be visually available without opening another menu.

Do NOT use:
- Three-dot menu
- More menu
- Actions dropdown
- Share menu just for the sake of adding actions

Reprint is the primary useful action on historical Bill Details.

If print is unavailable/fails:
- Show the standard BizCopilot error/feedback state.
- Do not imply that the bill itself was changed.

==================================================
15. CLOSE BEHAVIOR
==================================================

Close icon:

Material Symbols Outlined:
close

When the user closes Bill Details:

Desktop/Tablet:
Bill Details overlay closes.
Customer Details remains exactly as it was.

Mobile:
Bill Details bottom overlay closes.
Customer Details remains open.

Do not navigate back to Customer Dashboard.

Do not reset the selected customer.

Do not clear the selected Recent Bills state.

==================================================
16. OVERLAY HIERARCHY
==================================================

The layering must be visually and structurally clear.

Desktop/Tablet:

Application
  ↓
Customer Dashboard
  ↓
Customer Selected / Customer Details
  ↓
Bill Details backdrop
  ↓
Bill Details overlay

Mobile:

Customer Dashboard
  ↓
Customer Details bottom sheet
  ↓
Bill Details backdrop
  ↓
Bill Details bottom sheet

Bill Details is always the top-most contextual layer.

Do not open:
Customer Details → Bill Details → another side panel.

Bill Details is always a focused detail overlay.

==================================================
17. BACKDROP
==================================================

When Bill Details is open:

- Dim the underlying Customer Details.
- Preserve enough visibility to communicate context.
- Do not completely hide the underlying UI.
- Avoid excessively dark backdrops.
- Clicking the backdrop may close the overlay if this matches the
  standard BizCopilot modal behavior.

Do not accidentally allow interaction with the underlying Customer
Details while Bill Details is active.

Focus should remain within Bill Details.

==================================================
18. ICON SYSTEM
==================================================

Use:

Material Symbols Outlined

Recommended icons:

Close:
close

Reprint:
print

Bill status:
Use a subtle status icon only if useful.

Customer:
person

Phone:
phone

Payment:
payments / account_balance / credit_card depending on payment method

Do NOT introduce random icon libraries.

Do NOT mix filled, outlined, emoji, and unrelated icon styles.

Keep icon sizes and stroke treatment consistent with the frozen
BizCopilot design system.

==================================================
19. TYPOGRAPHY
==================================================

Use the existing BizCopilot typography system.

Hierarchy:

Bill Details
→ strongest overlay heading

Bill Number
→ medium/high emphasis

Bill Status
→ compact badge

Section Labels
→ compact uppercase or medium-weight label

Product Name
→ readable and prominent

Quantity × Unit Price
→ secondary information

Line Total
→ strong numerical value

TOTAL
→ highest financial emphasis

Do not create oversized marketing-style typography.

The screen is a business utility, not a dashboard presentation.

==================================================
20. COLORS
==================================================

Follow the frozen BizCopilot design system.

Use:

- Neutral primary text
- Muted secondary text
- Light neutral borders
- Standard surface/background colors
- Existing BizCopilot accent color for primary interactive elements
- Semantic status colors only where appropriate

Status examples:

Completed:
standard positive status treatment

Cancelled / Voided:
standard destructive/negative status treatment

Refunded:
standard informational/appropriate status treatment

Do not use excessive colorful cards.

Do not use gradients.

Do not add decorative color blocks.

==================================================
21. SPACING
==================================================

Use a consistent 8px-based spacing rhythm.

Suggested structure:

Overlay outer padding:
20–24px Desktop/Tablet

Mobile:
16px

Section spacing:
16–24px

Item row spacing:
12–16px

Divider:
1px

Button height:
approximately 44px minimum touch target

Do not create huge empty areas.

Do not create excessive padding that causes important information to
fall below the fold.

The bill should feel dense enough for business use but still easy to scan.

==================================================
22. RESPONSIVE BEHAVIOR
==================================================

Desktop:
- Centered Bill Details overlay.
- Comfortable width.
- Customer Details visible underneath.
- Items section internally scrollable when needed.

Tablet:
- Centered Bill Details overlay.
- Responsive width.
- Same content structure.
- No horizontal overflow.
- Items section internally scrollable when needed.

Mobile:
- Bottom sheet nearly to top.
- Small top gap.
- Compact header.
- Full available width.
- Items section internally scrollable.
- Financial summary remains visible.
- Reprint action remains accessible.

Do NOT simply scale the Desktop modal down to Mobile.

Mobile is a responsive composition, not a shrunken desktop.

==================================================
23. ACCESSIBILITY
==================================================

Ensure:

- Close button has accessible label: "Close Bill Details"
- Reprint button has accessible label: "Reprint Bill"
- Status is communicated by text, not color alone.
- Sufficient contrast.
- Touch targets approximately 44×44px minimum.
- Keyboard focus moves into Bill Details when opened.
- Keyboard focus does not escape into the underlying Customer Details.
- Escape closes the Bill Details overlay on Desktop/Tablet if supported.
- Screen reader can identify Bill Details as a dialog/modal.
- Scrollable Items region has an accessible label such as:
  "Bill items".

==================================================
24. INTERACTION STATES
==================================================

Design the following states:

DEFAULT:
Bill Details open with normal completed bill.

LONG BILL:
Many items.
Only Items section scrolls.

CANCELLED:
Bill status shows Cancelled.
Historical information remains visible.
Do not offer normal payment/edit actions.

VOIDED:
Bill status shows Voided.
Historical information remains unchanged.

REFUNDED:
Show refund-related historical state appropriately.

PARTIALLY REFUNDED:
Show bill details and relevant historical refund information if supported
by the existing bill data.

REPRINT:
User taps Reprint Bill.
Show standard BizCopilot feedback/toast according to existing toast system.

ERROR:
If reprint fails, show error feedback.
Do not alter bill data.

==================================================
25. DO NOT ADD
==================================================

Do NOT add:

- Edit Bill
- Edit Customer
- Edit Notes
- Independent Notes editor
- Create Bill
- Duplicate Bill
- Delete Bill
- Three-dot menu
- Actions menu
- Inventory information
- Stock quantity
- Low-stock indicator
- Product current availability
- Product editing
- Offer editing
- Recalculate Offer
- Apply Offer
- Change Payment
- Change Customer
- Profit
- Margin
- Cost price
- Inventory valuation
- Business analytics dashboard
- AI recommendations
- AI-generated explanation
- New navigation screen
- Separate Bill Details right panel
- Full-page scrolling
- Multiple competing primary actions

This is a historical bill inspection screen.

==================================================
26. CUSTOMER NOTES RULE
==================================================

Customer Notes belong to Customer Details, not Bill Details.

Do NOT add a Notes editor here.

If Customer Notes are visible in the underlying Customer Details state,
they remain read-only in this phase.

Editing Notes belongs to the separate existing Edit Customer workflow.

Do not create an independent Notes editing experience.

==================================================
27. DATA / IMPLEMENTATION BOUNDARY
==================================================

The UI must display historical bill data.

Do not place business calculations in the Figma/UI design.

The UI should consume a Bill Details view model containing information
such as:

- Bill number
- Bill status
- Date
- Time
- Customer
- Items
- Quantity
- Unit
- Unit price
- Line total
- Subtotal
- Discount
- Offer
- Tax
- Total
- Payment details
- Reprint availability

The UI must not calculate:
- discounts
- offer applicability
- taxes
- totals
- historical pricing

Historical sale-line values must be displayed as stored in the bill
snapshot.

==================================================
28. FINAL SCREEN COMPOSITION
==================================================

DESKTOP / TABLET:

┌────────────────────────────────────────────────────────────────────────────┐
│                         CUSTOMER WORKSPACE                                 │
│                                                                            │
│  ┌──────────────────────┐   ┌───────────────────────────────────────────┐ │
│  │ COLLAPSED CUSTOMER   │   │ CUSTOMER DETAILS                         │ │
│  │ LIST                 │   │                                           │ │
│  │                      │   │  Arun Kumar                               │ │
│  │ Seq | Customer       │   │  +91 98765 43210                          │ │
│  │ 01  | Arun Kumar     │   │                                           │ │
│  │ 02  | Priya          │   │  Summary                                  │ │
│  │                      │   │  Recent Bills                             │ │
│  │ Phone                │   │  • Bill #...                              │ │
│  │ Status               │   │  • Bill #...                              │ │
│  │ Trash | →            │   │                                           │ │
│  └──────────────────────┘   └───────────────────────────────────────────┘ │
│                                  ╲                                        │
│                                   ╲  BILL DETAILS OVERLAY                 │
│                                    ╲                                      │
│                              ┌───────────────────────────────┐             │
│                              │ Bill Details              ×  │             │
│                              │                               │             │
│                              │ Bill #BC-...                  │             │
│                              │ Completed                     │             │
│                              │ Date / Time                   │             │
│                              │                               │             │
│                              │ Customer                      │             │
│                              │ Arun Kumar                    │             │
│                              │                               │             │
│                              │ ITEMS                         │             │
│                              │ ┌───────────────────────────┐ │             │
│                              │ │ Item 1                    │ │             │
│                              │ │ Item 2                    │ │             │
│                              │ │ Item 3                    │ │             │
│                              │ │      ↕ internal scroll    │ │             │
│                              │ └───────────────────────────┘ │             │
│                              │                               │             │
│                              │ Subtotal                     │             │
│                              │ Discount                     │             │
│                              │ Tax                          │             │
│                              │ TOTAL                        │             │
│                              │                               │             │
│                              │ Payment                      │             │
│                              │                               │             │
│                              │       [ Reprint Bill ]       │             │
│                              └───────────────────────────────┘             │
└────────────────────────────────────────────────────────────────────────────┘


MOBILE:

┌──────────────────────────────────┐
│ small top gap                    │
├──────────────────────────────────┤
│ Bill Details                  ×  │
├──────────────────────────────────┤
│ #BC-20260818-0042                │
│ Completed                        │
│ 18 Aug 2026 • 7:42 PM            │
│                                  │
│ Customer                         │
│ Arun Kumar                       │
│ +91 98765 43210                  │
│                                  │
│ ITEMS                            │
│ ┌──────────────────────────────┐ │
│ │ Basmati Rice                 │ │
│ │ 2 Qty × ₹120          ₹240   │ │
│ │                              │ │
│ │ Sugar                        │ │
│ │ 1.5 Kg × ₹48          ₹72    │ │
│ │                              │ │
│ │ Cooking Oil                  │ │
│ │ 0.750 L × ₹150       ₹112.50 │ │
│ │                              │ │
│ │          ↕ scroll            │ │
│ └──────────────────────────────┘ │
│                                  │
│ Subtotal                  ₹424.50│
│ Discount                  -₹50.00│
│ Offer                     -₹20.00│
│ Tax                         ₹0.00│
│ ──────────────────────────────── │
│ TOTAL                     ₹354.50│
│                                  │
│ Payment                          │
│ UPI                       ₹354.50│
│                                  │
│ [       Reprint Bill        ]    │
└──────────────────────────────────┘


==================================================
29. FINAL FIGMA OUTPUT REQUIREMENT
==================================================

Create the actual Bill Details UI as a polished, production-ready
BizCopilot screen.

Generate responsive variants:

1. Desktop — Bill Selected
2. Tablet — Bill Selected
3. Mobile — Bill Selected

Maintain the same visual design language across all three.

Desktop and Tablet must preserve the same Customer Selected split-screen
architecture.

Mobile must use the bottom-overlay architecture.

The Bill Details overlay must remain visually dominant while the
underlying Customer Details context remains recognizable.

The ONLY scrolling area is the Bill Items section.

Use realistic sample data to demonstrate:

- Multiple products
- Qty product
- Kg product
- Ltr product
- Decimal measured quantities
- Discount / offer
- Tax
- Payment method
- Total
- Reprint action

Do not add features that are not explicitly specified above.

The final result should feel:

FAST
CLEAN
PREMIUM
BUSINESS-FIRST
CONSISTENT
LOW-NAVIGATION
EASY TO SCAN

The user should immediately understand:

“What bill am I looking at?”
“When was it created?”
“Who was it for?”
“What was purchased?”
“How much was the bill?”
“How was it paid?”
“Can I reprint it?”

without navigating anywhere else.