# BizCopilot — Hold Bills Section
## Master UI/UX Design & Functional Specification

Design the Hold Bills section for the BizCopilot Billing screen.

This is NOT a standalone navigation page. Hold Bills must work as an overlay/bottom-sheet interaction from the existing Billing screen.

The existing Billing screen, Product screen, Category screen, Offer screen, global UI components, typography, spacing, colors, buttons, cards, icons, and interaction patterns are already designed/frozen.

DO NOT redesign the global navigation, sidebar, bottom navigation, Product screen, Category screen, or Billing screen itself.

The Hold Bills UI must visually belong to the existing BizCopilot design system and look like it was designed as part of the same product.

==================================================
1. PRODUCT CONTEXT
==================================================

BizCopilot is a fast billing/business application for small businesses such as:

- Juice shops
- Cafes
- Grocery/general stores
- Hardware shops
- Small retail businesses

The primary users are:

- Owner
- Waiter

Billing is designed around:

- Fast billing
- Minimal navigation
- Large/touch-friendly controls
- Mobile-first operational workflow
- Tablet-friendly workflow
- Desktop support
- Offline-first billing
- Quick switching between customers/bills

The cashier must be able to temporarily move an active bill out of the way and return to it later without losing any information.

==================================================
2. PURPOSE OF HOLD BILL
==================================================

"Hold Bill" temporarily stores the current active bill so the cashier can start or continue another customer's bill.

Example:

Customer A is still deciding what they want.

The cashier can:

1. Add Customer A's products.
2. Click "Hold Bill".
3. Customer A's bill is stored.
4. The active billing session becomes empty.
5. Cashier can immediately bill Customer B.
6. Later click "Hold Bill".
7. Select Customer A's held bill.
8. Resume it.

Multiple bills can be held at the same time.

IMPORTANT:

Holding a bill must NEVER overwrite an existing held bill.

==================================================
3. BILLING HEADER
==================================================

The existing Billing screen already has:

- Hold Bill
- Recent Bills

The Hold Bill control displays the number of currently held bills.

Example:

Hold Bill  2

If there are no held bills:

Hold Bill

DO NOT display "0".

The badge/count represents the current number of held bills.

The count must update immediately.

==================================================
4. HOLD COUNT BEHAVIOR
==================================================

When active bill is held:

Held bill count = previous count + 1

Example:

0 → 1
1 → 2
2 → 3

When a held bill is resumed:

Held bill count = previous count - 1

When a held bill is deleted:

Held bill count = previous count - 1

When the user chooses:

"Hold Current & Resume"

the current active bill is moved into Hold Bills while the selected held bill is resumed.

Therefore the total count remains unchanged.

Example:

Before:

Active bill = Customer C
Held = 2

After "Hold Current & Resume":

Active = selected held bill
Held = 2

because the previous active bill replaced the resumed held bill.

==================================================
5. OVERLAY BEHAVIOR
==================================================

Clicking the "Hold Bill" button opens the Hold Bills UI.

This is an overlay.

DO NOT navigate to another application page.

The existing Billing screen remains underneath and is visually dimmed.

Use the same overlay philosophy as the already-frozen Offer overlay.

The overlay must have:

- Background scrim
- White surface
- Rounded corners
- Existing BizCopilot border radius
- Existing shadow/elevation
- Existing purple accent
- Existing typography
- Existing icon style

Clicking the X closes the overlay.

==================================================
6. DESKTOP VIEW
==================================================

Desktop uses a centered modal.

The modal should have a controlled maximum width.

Do NOT allow the modal to stretch unnecessarily on a large 4K display.

Recommended visual structure:

--------------------------------------------------
                    HELD BILLS (2)            X
                    Bills waiting to be resumed

--------------------------------------------------

[ Held Bill Card ]

[ Held Bill Card ]

--------------------------------------------------

[ optional informational tip ]

--------------------------------------------------

The modal should be vertically centered.

The Billing screen behind it remains visible but dimmed.

The modal must not create unnecessary page-level scrolling.

If the number of held bills becomes large, ONLY the held-bill list area may scroll.

The header and modal controls remain fixed.

==================================================
7. TABLET VIEW
==================================================

Tablet follows the same interaction and visual structure as Desktop.

Use the same centered modal pattern.

Adapt width responsively to the available viewport.

Do not use a desktop-width modal that causes horizontal overflow.

Maintain generous touch targets.

Buttons must be comfortable for touch interaction.

The underlying Billing screen remains visible through the scrim.

No navigation.

==================================================
8. MOBILE VIEW
==================================================

Mobile uses a bottom-sheet overlay.

DO NOT use the desktop centered modal on mobile.

The bottom sheet should:

- Start near the bottom of the screen
- Have rounded top corners
- Have a drag handle at the top
- Have a close X
- Use the full available mobile width
- Respect device safe areas
- Be touch friendly

Example structure:

        ─────────

Held Bills (2)                         X
Bills waiting to be resumed

[ Held Bill ]

[ Held Bill ]

[ optional tip ]

The underlying Billing screen remains visible and dimmed above the sheet.

The bottom sheet can grow based on content but must respect the mobile viewport.

If many held bills exist, the LIST inside the sheet should scroll.

Do not create unnecessary body/page scrolling.

==================================================
9. HOLD BILL HEADER
==================================================

Header:

Held Bills (2)

Subtitle:

Bills waiting to be resumed

Right side:

X / Close icon

Mobile:

Include a small horizontal drag handle above the header.

Desktop/Tablet:

No drag handle required.

Typography must match the existing BizCopilot Billing/Offer overlays.

==================================================
10. HELD BILL CARD
==================================================

Each held bill is represented by a compact card.

The card should NOT display all product line items.

The purpose is to identify which bill should be resumed.

Show only the information required for fast identification.

Each card contains:

1. Bill number
2. Time
3. Customer
4. Number of items
5. Current bill total
6. Resume action
7. Delete action

Example:

Bill #1048                         10:42 AM
Ravi Kumar
4 items
₹776.25

                         [ Resume ]
                              🗑

Another:

Bill #1047                         10:35 AM
Walk-in Customer
2 items
₹240.00

                         [ Resume ]
                              🗑

==================================================
11. BILL NUMBER
==================================================

Use a clear bill number.

Example:

Bill #1048

Bill number should be visually prominent.

Use the existing BizCopilot purple accent.

Do not add unnecessary menus or three-dot controls.

There is NO three-dot menu on held bills.

==================================================
12. TIME
==================================================

Show the time the bill was placed on hold.

Example:

10:42 AM

Optionally show:

Today

when useful.

Do not clutter the card with excessive date/time information.

The primary purpose is quick identification.

==================================================
13. CUSTOMER
==================================================

Show the selected customer.

Example:

Ravi Kumar

If no customer was selected:

Walk-in Customer

Do not require customer information to hold a bill.

==================================================
14. ITEM COUNT
==================================================

Show the number of products/items in the bill.

Example:

4 items

This is the cart item count, not necessarily the total quantity.

Example:

Rice × 2
Oil × 1
Sugar × 1

should be represented as:

3 items

if there are three product line items.

==================================================
15. BILL TOTAL
==================================================

Show the current payable total of the held bill.

Example:

₹776.25

The value must represent the bill state at the time it was held.

If the bill had an applied offer/discount, the resumed bill must restore that state.

==================================================
16. RESUME BUTTON
==================================================

Resume is the primary action.

Use the existing BizCopilot primary/secondary button system.

Recommended:

[ Resume ]

Purple outline or the appropriate existing secondary action treatment.

Do NOT make Resume visually compete with the primary "Proceed to Pay" action on Billing.

Resume means:

"Load this held bill back into the active billing session."

==================================================
17. DELETE ACTION
==================================================

DELETE IS REQUIRED.

Held bills must not accumulate indefinitely.

Every held bill must provide a delete action.

Use the existing destructive/trash icon.

Prefer:

Trash icon

instead of a large "Delete" text button.

The delete icon must be clearly recognizable but visually secondary to Resume.

Use the existing destructive red treatment from the BizCopilot design system.

==================================================
18. DELETE CONFIRMATION
==================================================

Deleting a held bill is destructive.

Do NOT immediately delete without confirmation.

On delete:

Show the existing BizCopilot Confirm Dialog component.

Use:

Title:
Delete held bill?

Message:
This bill will be permanently removed from held bills.

Actions:

Cancel
Delete

Use the existing global Confirm Dialog design.

DO NOT invent a new confirmation component.

After successful deletion:

- Remove the bill from the list.
- Decrease Hold Bill count by 1.
- Update the Billing header immediately.

==================================================
19. SORT ORDER
==================================================

Held bills must be sorted:

MOST RECENTLY HELD → OLDEST

Example:

Bill #1051   10:48 AM
Bill #1050   10:45 AM
Bill #1049   10:39 AM

The newest held bill appears first.

This is important for a fast cashier workflow.

==================================================
20. EMPTY STATE
==================================================

If there are no held bills, clicking Hold Bill still opens the overlay.

Display:

Held Bills

No bills on hold

Bills you put on hold will appear here.

Use a simple lightweight icon.

Do NOT use a large decorative illustration.

Do NOT show unnecessary buttons.

Do NOT show "Create Bill".

Do NOT show navigation.

==================================================
21. RESUME — EMPTY ACTIVE CART
==================================================

If the current Billing cart is empty:

User clicks:

Resume

The held bill is immediately loaded.

NO confirmation is required.

Restore the entire billing state.

Restore:

- Products
- Product quantities
- Weight values
- Measurement values
- Customer
- Applied offer
- Discount
- Subtotal
- Total
- Other bill-level state

Then:

- Remove the selected bill from Held Bills.
- Decrease Hold Bill count by 1.
- Close the Hold Bills overlay.
- Display the resumed bill in Billing.

==================================================
22. RESUME — ACTIVE CART HAS PRODUCTS
==================================================

This scenario is extremely important.

If the current active Billing cart contains products and the cashier attempts to resume another held bill:

DO NOT overwrite the active bill.

DO NOT silently discard the active bill.

Show a confirmation/action dialog.

Message:

You have an active bill with 3 items.

What would you like to do?

Primary action:

Hold Current & Resume

Secondary action:

Cancel

==================================================
23. HOLD CURRENT & RESUME
==================================================

When the user selects:

Hold Current & Resume

perform the following sequence:

1. Current active bill is saved to Hold Bills.
2. Selected held bill is loaded as the active bill.
3. Selected held bill is removed from Hold Bills.
4. The previous active bill is added to Hold Bills.
5. Hold count remains unchanged.
6. Billing screen displays the selected resumed bill.

Example:

BEFORE:

Active:
Bill #1052
3 items
₹450

Held:
Bill #1051
₹780

Bill #1050
₹320

AFTER:

Active:
Bill #1051
₹780

Held:
Bill #1052
₹450

Bill #1050
₹320

Hold count:

2 → 2

==================================================
24. BILL STATE RESTORATION
==================================================

A held bill must preserve its exact billing state.

For example:

Product:
Carrot
0.500 Kg

Cooking Oil
0.750 L

Basmati Rice
2.000 Kg

Sugar
1.000 Kg

Electrical Wire
7.500 Meter

Coca Cola
2 Qty

When resumed, these exact values must be restored.

The same dynamic product measurement logic used in Billing applies.

IMPORTANT:

Qty / Pack products:

Use - / + controls.

Weight/measurement products:

Use the appropriate text field/value input.

There must NOT be -/+ controls for custom measurement products such as:

Kg
Ltr
Meter

The held bill simply restores whatever value existed when it was held.

==================================================
25. BILLING ↔ CART SYNCHRONIZATION
==================================================

The Billing product area and Cart are one shared billing state.

Any modification must reflect everywhere.

Examples:

Product card:

Rice → 2.000 Kg

Cart:

Rice → 2.000 Kg

If changed from Cart:

2.000 Kg → 1.500 Kg

Billing product state must immediately reflect:

1.500 Kg

Likewise:

Product card:
Coca Cola → 2 Qty

Cart:
Coca Cola → 2 Qty

Change Cart:

2 → 3

Billing product state becomes:

3 Qty

This same shared state must survive:

Hold → Resume

==================================================
26. OFFER STATE
==================================================

If a held bill has an applied offer:

Example:

BUYMORE10
10% off on orders above ₹500

the offer must remain attached to the held bill.

When resumed:

- Offer remains applied.
- Discount remains calculated.
- Subtotal remains correct.
- Total remains correct.

The Hold Bills list does NOT need to show the offer.

Offer details are restored when the bill is resumed.

==================================================
27. CUSTOMER STATE
==================================================

If the held bill has:

Ravi Kumar

the customer must be restored when the bill is resumed.

If the held bill uses:

Walk-in Customer

restore Walk-in Customer.

Customer selection must not be lost during Hold/Resume.

==================================================
28. BILLING SCREEN AFTER HOLD
==================================================

When the cashier holds the active bill:

Current bill is moved to Hold Bills.

The active Billing screen becomes an empty/new billing session.

The product catalog remains available.

The cashier can immediately add products for the next customer.

DO NOT navigate away from Billing.

The cashier should be able to continue billing immediately.

==================================================
29. MULTIPLE HELD BILLS
==================================================

The system must support multiple held bills.

Example:

Hold Bill 3

Held:

Bill #1051
Bill #1050
Bill #1049

Each is independent.

Holding a new bill must append it to the top of the list.

Never overwrite another held bill.

==================================================
30. MANY HELD BILLS
==================================================

If there are many held bills:

Desktop/Tablet:

Only the held-bill LIST becomes scrollable.

Header remains fixed.

Close action remains fixed.

Mobile:

Only the list inside the bottom sheet becomes scrollable.

Do NOT create a page-level scrollbar.

Do NOT make the underlying Billing screen scroll.

Do NOT allow the entire application to scroll unnecessarily.

==================================================
31. RESPONSIVE DESIGN RULE
==================================================

The UI must be genuinely responsive.

Do NOT design only for one fixed resolution.

Desktop, Tablet and Mobile must adapt to viewport size.

Do NOT create unnecessary scrollbars.

Example problem to avoid:

A 4K desktop should NOT show a pointless vertical scrollbar simply because a fixed-height container was used.

At large viewport sizes:

- Content should fit naturally.
- Modal should remain appropriately sized.
- No unnecessary scrolling.

At smaller desktop/laptop sizes:

- Modal may become constrained.
- Only the list may scroll if required.

At mobile:

- Bottom sheet adapts to viewport height.
- Only its list scrolls when necessary.

==================================================
32. TOUCH TARGETS
==================================================

Mobile and Tablet are major target platforms.

Controls must be comfortable for finger interaction.

Use appropriately sized touch targets for:

- Resume
- Delete
- Close
- Drag handle
- Confirmation actions

Avoid tiny desktop-style clickable areas.

==================================================
33. ICONOGRAPHY
==================================================

Use the same icon family already used throughout BizCopilot.

Required icons:

- Hold / clipboard icon
- Customer/person icon
- Items/package icon
- Clock icon
- Trash/delete icon
- Close/X icon
- Optional lightweight empty-state hold icon

DO NOT use decorative unrelated icons.

DO NOT introduce a different icon library/style.

Icons should have consistent:

- Stroke weight
- Size
- Alignment
- Visual language

with the existing Product, Category, Billing and Offer screens.

==================================================
34. VISUAL LANGUAGE
==================================================

Follow the existing BizCopilot visual system.

Use:

- White surfaces
- Very light neutral backgrounds
- Purple primary accent
- Dark navy text
- Green for positive/savings values where appropriate
- Red only for destructive actions
- Soft borders
- Subtle shadows
- Rounded cards
- Generous but efficient spacing

Do not introduce new colors.

Do not introduce gradients unless already part of the existing frozen design.

==================================================
35. TYPOGRAPHY
==================================================

Follow the typography used by the existing Billing, Product, Category and Offer screens.

Hierarchy:

Modal title:
Strong / large

Subtitle:
Muted / smaller

Bill number:
Strong / purple

Customer:
Medium/strong

Metadata:
Muted

Total:
Strong

Resume:
Clear actionable label

Do not use excessively large typography on mobile.

==================================================
36. DESKTOP CARD LAYOUT
==================================================

Recommended structure:

┌────────────────────────────────────────────────────┐
│ [Bill Icon]  Bill #1048                 10:42 AM  │
│             Ravi Kumar                  Today     │
│             4 items                               │
│             ₹776.25                  🗑 [Resume]  │
└────────────────────────────────────────────────────┘

The exact alignment can adapt to available modal width.

The card must feel compact and operational.

==================================================
37. MOBILE CARD LAYOUT
==================================================

Mobile should prioritize readability and touch.

Recommended:

┌──────────────────────────────────────────┐
│ Bill #1048                 10:42 AM      │
│ Ravi Kumar                               │
│ 4 items                    🗑             │
│ ₹776.25                    [ Resume ]    │
└──────────────────────────────────────────┘

Do not squeeze everything into one horizontal line.

Maintain comfortable spacing.

==================================================
38. OVERLAY SCRIM
==================================================

When Hold Bills opens:

Dim the Billing screen underneath.

The overlay must visually communicate:

"Billing is temporarily paused while selecting a held bill."

Use the same scrim treatment as the frozen Offer overlay.

Do not make the background completely invisible.

==================================================
39. NO NAVIGATION
==================================================

Hold Bills is NOT a navigation destination.

Do not add:

- Sidebar navigation
- Bottom navigation
- Breadcrumbs
- Back page
- Page-level tabs

It is an overlay interaction launched from Billing.

==================================================
40. NO UNNECESSARY ACTIONS
==================================================

Do NOT add:

- Print
- Share
- Export
- More menu
- New Bill button
- Recent Bills
- Payment
- Product search
- Customer creation
- Offer controls

Those belong to other Billing interactions.

Hold Bills has only:

- Resume
- Delete
- Close

plus the required confirmation dialog.

==================================================
41. ACCESSIBILITY
==================================================

Ensure:

- Clear contrast
- Touch-friendly controls
- Meaningful button labels
- Delete is visually destructive
- Resume is visually primary
- Close is clearly identifiable
- Information is not communicated by color alone

==================================================
42. ERROR / EDGE CASES
==================================================

If a held bill cannot be resumed because of an unexpected state:

Do not silently lose it.

Show an appropriate error Message Toast using the existing global Message Toast component.

The held bill should remain available unless successfully resumed.

Do not invent new error UI.

==================================================
43. LOADING STATE
==================================================

If loading is required:

Use the existing BizCopilot loading/skeleton patterns.

Do not introduce a new loading style.

For normal local/offline Hold Bills operation, the interaction should feel immediate.

==================================================
44. OFFLINE-FIRST BEHAVIOR
==================================================

Hold Bill is part of the client-side billing workflow.

Holding and resuming an active bill must be possible without requiring a network round trip.

The local billing runtime should preserve the held bill state.

Synchronization with the server should follow the existing offline-first architecture.

Do not make the cashier wait for network confirmation to resume a locally available held bill.

==================================================
45. PERFORMANCE
==================================================

The Hold interaction is part of FAST BILLING.

Target behavior:

Click Hold Bill
→ immediate overlay

Click Resume
→ immediate bill restoration

Click Hold Current & Resume
→ immediate state switch

Avoid unnecessary animations.

Use short, subtle transitions only.

==================================================
46. ANIMATION
==================================================

Desktop/Tablet:

Modal should appear with a subtle fade/scale transition.

Mobile:

Bottom sheet should slide upward smoothly.

Do not use excessive animation.

The cashier should prioritize speed over visual effects.

==================================================
47. FINAL DESKTOP STRUCTURE
==================================================

Billing screen underneath:

DIMMED

Centered modal:

Held Bills (2)
Bills waiting to be resumed                         X

────────────────────────────────────────────

Bill #1048                         10:42 AM
Ravi Kumar
4 items
₹776.25

                           🗑    Resume

────────────────────────────────────────────

Bill #1047                         10:35 AM
Walk-in Customer
2 items
₹240.00

                           🗑    Resume

────────────────────────────────────────────

Optional lightweight informational tip.

==================================================
48. FINAL MOBILE STRUCTURE
==================================================

Billing screen underneath:

DIMMED

Bottom sheet:

          ─────

Held Bills (2)                              X
Bills waiting to be resumed

────────────────────────────────────

Bill #1048                    10:42 AM
Ravi Kumar
4 items

₹776.25                       🗑
                              [ Resume ]

────────────────────────────────────

Bill #1047                    10:35 AM
Walk-in Customer
2 items

₹240.00                       🗑
                              [ Resume ]

────────────────────────────────────

Optional lightweight tip.

Only the bill list should scroll if required.

==================================================
49. CONFIRMED USER FLOWS
==================================================

FLOW A — Hold first bill

Active bill
→ Hold Bill
→ Bill moves to Held Bills
→ Hold count = 1
→ Billing becomes empty
→ Cashier continues billing

FLOW B — Hold second bill

Active bill
→ Hold Bill
→ Existing held bill remains
→ New bill added
→ Hold count = 2

FLOW C — Resume with empty cart

Hold Bill
→ Select Resume
→ Bill immediately restored
→ Held count decreases by 1

FLOW D — Resume with active cart

Hold Bill
→ Select Resume
→ Current cart contains items
→ Show confirmation
→ Hold Current & Resume
→ Current bill goes to Hold
→ Selected held bill becomes active
→ Hold count remains unchanged

FLOW E — Delete

Hold Bill
→ Delete
→ Confirm Dialog
→ Delete
→ Held bill removed
→ Hold count decreases by 1

FLOW F — Cancel delete

Delete
→ Confirm Dialog
→ Cancel
→ Nothing changes

==================================================
50. DESIGN CONSISTENCY RULE
==================================================

The Hold Bills section must look like a natural extension of the already-frozen BizCopilot UI.

Match the existing:

- Product card styling
- Billing cart styling
- Offer overlay styling
- Customer overlay styling
- Button styling
- Confirm Dialog
- Message Toast
- Iconography
- Typography
- Border radius
- Spacing
- Colors
- Responsive behavior

Do not redesign existing components.

Reuse existing components wherever possible.

==================================================
51. IMPORTANT FINAL CONSTRAINTS
==================================================

DO NOT:

- Add navigation
- Add unnecessary actions
- Show all products inside held bill cards
- Overwrite an active bill
- Overwrite another held bill
- Silently delete a held bill
- Require network access to resume a locally held bill
- Add unnecessary scrollbars
- Make the entire page scroll when only the list needs scrolling
- Use desktop modal on mobile
- Use mobile bottom sheet on desktop
- Introduce a new visual design language
- Add unrelated billing functionality

DO:

- Support multiple held bills
- Show held bill count
- Show newest held bill first
- Provide Resume
- Provide Delete
- Confirm destructive deletion
- Protect an active bill when resuming another bill
- Support "Hold Current & Resume"
- Restore exact billing state
- Restore product quantities/measurements
- Restore customer
- Restore offers/discounts
- Keep Billing ↔ Cart state synchronized
- Keep mobile fast and touch friendly
- Keep Desktop and Tablet consistent
- Make Mobile a bottom sheet
- Make Desktop/Tablet a centered modal
- Keep scrolling limited to the held-bill list
- Maintain the frozen BizCopilot visual language

==================================================
52. DESIGN DELIVERABLE
==================================================

Create the following states:

DESKTOP:
1. Hold Bills overlay with 2 held bills
2. Empty Hold Bills state
3. Delete confirmation state
4. Resume-with-active-cart confirmation state

TABLET:
1. Hold Bills overlay with 2 held bills
2. Empty Hold Bills state
3. Delete confirmation state
4. Resume-with-active-cart confirmation state

MOBILE:
1. Hold Bills bottom sheet with 2 held bills
2. Empty Hold Bills bottom sheet
3. Delete confirmation state
4. Resume-with-active-cart confirmation state
5. Many-held-bills scroll state

Use realistic BizCopilot sample data.

The final UI should feel fast, clean, professional, touch-friendly, and consistent with the already frozen Billing/Product/Category/Offer designs.