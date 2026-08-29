BIZCOPILOT — OFFER & DISCOUNTS SCREEN
MASTER FIGMA DESIGN PROMPT
========================================

IMPORTANT:
This is the FINAL / FROZEN design specification for the BizCopilot
Offer & Discounts screen.

The screen must be designed consistently with the already-frozen
BizCopilot Product, Category, and Billing screens.

Do NOT redesign, reinterpret, simplify, or introduce additional
navigation patterns.

The objective is to reproduce the approved mock design as closely as
possible while making the screen fully responsive across Desktop,
Tablet, and Mobile.

==================================================
1. PURPOSE
==================================================

Create the "Offers & Discounts" selection screen used from the Billing
screen.

The screen allows the billing user to:

- View offers applicable to the current bill/cart.
- Understand the saving provided by each offer.
- Identify the currently applied offer.
- Select another offer.
- Apply the selected offer.
- View all offers in a single list.
- Compare offers based primarily on the amount the customer can save.

This is NOT the Offer Management / Offer Creation screen.

This is strictly the offer-selection experience during billing.

==================================================
2. IMPORTANT FROZEN UX DECISIONS
==================================================

The following decisions are FINAL:

1. No navigation menu is required inside this screen.

2. Desktop and Tablet:
   - Open Offers & Discounts as an overlay/modal over the Billing screen.
   - The Billing screen remains visible behind the overlay.
   - Background Billing screen is dimmed using a translucent overlay.
   - The overlay is centered.
   - It must visually match the approved desktop mock.

3. Mobile:
   - Open Offers & Discounts as a bottom-sheet style overlay.
   - It comes from the bottom.
   - It uses the mobile-friendly sheet layout already established in
     BizCopilot.
   - It should occupy most of the available screen height when the
     offer list requires it.

4. All offers are displayed in ONE continuous list.

5. Do NOT divide offers into:
   - Applicable Offers
   - Other Offers
   - Recommended Offers
   - Categories
   - Tabs
   - Sections

   The final mobile design uses a single list.

6. Offers must be ordered from:
   MOST CUSTOMER SAVINGS → LEAST CUSTOMER SAVINGS.

7. Do NOT show:
   - Minimum Bill Amount as a separate summary field.
   - Discount Amount as a separate summary field.
   - Unnecessary offer statistics.
   - Additional navigation.
   - Extra actions unrelated to selecting an offer.

8. The user should immediately understand:
   - Which offer is selected/applied.
   - How much the customer saves.
   - What the offer condition is.
   - Whether the offer can be applied.

==================================================
3. OFFER TYPES SUPPORTED
==================================================

The UI must support different offer rules without changing the overall
visual structure.

Examples include:

A. Percentage discount based on bill amount

Example:
"10% off on orders above ₹500"

B. Higher percentage discount based on a higher bill amount

Example:
"20% off on orders above ₹1,000"

C. Flat amount discount based on bill amount

Example:
"₹500 off when bill amount is ₹2,000 or more"

IMPORTANT:

Amount-based offers are supported.

For example:

Condition:
Bill Amount >= ₹2,000

Benefit:
₹500 OFF

The UI must represent this naturally as an offer without introducing
additional fields such as "Min Bill Amount" or "Discount Amount"
summary blocks.

D. Other future offer types may exist.

The component should therefore be structured so the offer description
can change dynamically while the visual hierarchy remains consistent.

==================================================
4. DESKTOP / TABLET OVERLAY STRUCTURE
==================================================

Desktop and Tablet use the same overall design language.

Open the screen as a centered modal overlay.

BACKGROUND:

- Existing Billing screen remains visible.
- Apply a dark/translucent scrim over the entire Billing screen.
- Background should appear disabled but still recognizable.
- Do not modify the underlying Billing screen.

MODAL:

Approximate structure:

--------------------------------------------------
| Offers & Discounts                         X  |
|                                              |
| [offer list]                                 |
|                                              |
|                                              |
| Cancel                     Apply Offer       |
--------------------------------------------------

The modal should have:

- White background.
- Rounded corners.
- Subtle elevation/shadow.
- Clean BizCopilot spacing.
- Purple primary action styling.
- Green visual treatment for savings/applied state.
- Close icon in the top-right corner.

The modal should be large enough to comfortably display multiple offers
without feeling cramped.

Do not make it unnecessarily full-screen on Desktop.

==================================================
5. MOBILE STRUCTURE
==================================================

Mobile uses a bottom-sheet layout.

The underlying Billing screen remains behind the sheet.

BOTTOM SHEET:

- White surface.
- Large rounded top-left and top-right corners.
- Small drag handle at the top.
- Header below the drag handle.
- Offers displayed vertically.
- Bottom action area remains accessible.

Header:

Left:
"Offers & Discounts"

Optional supporting text:
"Choose the best offer for your cart"

Right:
Close (X) icon.

Do not add a navigation bar.

Do not add a back navigation hierarchy.

This is an overlay launched from Billing.

==================================================
6. OFFER LIST
==================================================

All offers appear in one list.

SORT ORDER:

Sort by customer savings in descending order.

Example:

1. SAVE20
   20% off on orders above ₹1,000
   Customer saves ₹XX

2. BUYMORE10
   10% off on orders above ₹500
   Customer saves ₹XX

3. FRESH5
   Flat ₹5 off
   Customer saves ₹5

The offer with the highest actual saving should appear first.

Do NOT simply sort by percentage.

The sorting should be based on the actual saving applicable to the
current bill.

==================================================
7. OFFER CARD
==================================================

Each offer is represented by a clean card/list row.

The card should contain:

LEFT:

- Selection radio button.
- Offer icon where appropriate.

CENTER:

- Offer code/name.
- Offer description.
- Supporting status label if required.

RIGHT:

- Saving amount.
- Applied/selected indicator.

Example:

[radio]   BUYMORE10
          10% off on orders above ₹500
          You save ₹45.50                         ✓ Applied

The visual hierarchy should prioritize:

1. Offer name/code
2. Offer rule
3. Customer saving
4. Applied/selection state

==================================================
8. APPLIED OFFER STATE
==================================================

If an offer is currently applied:

- Use a subtle green-tinted background/border.
- Show green "Applied" state.
- Show a green check icon.
- Clearly display:
  "You save ₹XX"

The applied offer should visually stand out from unselected offers,
but should NOT look overly bright or distracting.

Example:

┌──────────────────────────────────────────────┐
│  [offer icon]  BUYMORE10                     │
│                10% off on orders above ₹500  │
│                                              │
│                You save ₹45.50       ✓ Applied│
└──────────────────────────────────────────────┘

Use green only for:
- Savings
- Applied state
- Success/check indication

Do not turn the entire UI green.

==================================================
9. UNSELECTED OFFER STATE
==================================================

For an offer that is available but not currently applied:

- White card.
- Neutral/light border.
- Empty radio button.
- Normal dark text.
- Saving amount visible.
- No green applied indicator.

Example:

[○]  SAVE20
     20% off on orders above ₹1,000

                         - ₹XX

The user can select the offer by clicking/tapping anywhere on the
offer row/card.

==================================================
10. OFFER SELECTION
==================================================

Only one offer should be selected/applied at a time unless the business
rules later explicitly support multiple combinable offers.

For the current design:

Use single-selection radio-button behavior.

When the user selects another offer:

- Previous offer becomes unselected.
- New offer becomes selected.
- Saving value updates.
- Applied state moves to the newly selected offer after confirmation.

Do not introduce checkboxes.

==================================================
11. OFFER DESCRIPTION
==================================================

Descriptions must be human-readable.

Examples:

"10% off on orders above ₹500"

"20% off on orders above ₹1,000"

"₹500 off on orders above ₹2,000"

Avoid technical rule representations such as:

discountType=PERCENTAGE
minAmount=500
discountValue=10

The customer-facing UI must always use natural language.

==================================================
12. AMOUNT-BASED OFFER
==================================================

IMPORTANT NEW REQUIREMENT:

Support offers where the discount is a fixed amount based on the bill
amount.

Example:

Offer Code:
BIGSAVE500

Description:
"₹500 off on bills above ₹2,000"

If the current bill is ₹2,000 or more:

Display the offer as applicable.

The saving displayed should be:

"You save ₹500"

Do NOT create separate UI fields saying:

Minimum Bill Amount: ₹2,000
Discount Amount: ₹500

Those separate fields are NOT part of the frozen design.

The condition and benefit should be communicated naturally through the
offer description.

==================================================
13. BEST SAVINGS
==================================================

The offer list should make it easy for the billing user to identify the
best saving.

The highest-saving applicable offer should appear first.

If the system automatically identifies the best saving, it may use a
small badge such as:

"Best Savings"

or

"Best Offer"

Use this sparingly.

The applied offer should remain visually obvious.

==================================================
14. BOTTOM ACTION AREA
==================================================

Desktop / Tablet:

Use a bottom action area inside the modal.

Left:
Cancel

Right:
Apply Offer

Primary action:
Purple BizCopilot button.

Secondary:
Light/white button with purple/dark text.

Mobile:

Keep the action area fixed/sticky at the bottom of the bottom sheet.

Example:

---------------------------------------------
1 offer selected
You save ₹45.50

[ Cancel ]        [ Apply Offer ]
---------------------------------------------

The action area must not scroll away with the offer list.

==================================================
15. SCROLLING BEHAVIOR
==================================================

IMPORTANT:

The overall page must NOT unnecessarily scroll.

Desktop / Tablet:

- Modal has a controlled maximum height.
- If the offer list is longer than the available modal height,
  ONLY the offer list area scrolls.
- Header remains fixed.
- Bottom action area remains fixed.

Mobile:

- Bottom sheet may occupy most of the viewport.
- ONLY the offer list/content area should scroll when required.
- Header remains accessible.
- Bottom action area remains fixed/sticky.

Do not create nested unnecessary scrollbars.

Do not show a scrollbar merely because the display is 4K.

The UI must be responsive to viewport height and width.

==================================================
16. RESPONSIVE DESIGN
==================================================

DESKTOP:

- Centered modal.
- Comfortable width.
- Multiple offers visible.
- Existing Billing UI visible behind scrim.
- Desktop spacing and typography.

TABLET:

- Same modal concept.
- Slightly reduced width/margins as required.
- Touch-friendly controls.
- Same visual hierarchy as Desktop.

MOBILE:

- Bottom sheet.
- Full/near-full width.
- Large touch targets.
- Single-column offer list.
- Sticky action area.
- No desktop-style centered modal.

Do not simply scale the Desktop UI down.

Mobile must be intentionally designed for touch and fast billing.

==================================================
17. SPACING
==================================================

Use a consistent 8-point spacing system.

Recommended values:

4px  — micro spacing
8px  — compact spacing
12px — small spacing
16px — standard spacing
20px — section spacing
24px — major spacing
32px — large spacing

Offer cards should have enough padding to allow easy touch interaction
without wasting screen space.

==================================================
18. TYPOGRAPHY
==================================================

Use the same typography system as the frozen BizCopilot Product,
Category, and Billing screens.

Hierarchy:

Screen title:
Strong / semibold

Offer code/name:
Semibold

Offer description:
Regular

Saving:
Medium/semibold

Applied:
Medium/semibold

Buttons:
Medium/semibold

Avoid excessive font sizes.

The screen should feel premium, clean and business-focused.

==================================================
19. COLORS
==================================================

Follow the already-frozen BizCopilot visual language.

PRIMARY:

BizCopilot purple for:

- Primary buttons
- Selected radio
- Primary actions
- Important interactive elements

SUCCESS:

Green for:

- Applied offer
- Savings
- Checkmark
- Positive saving indicators

NEUTRAL:

White/light gray for:

- Cards
- Backgrounds
- Borders
- Secondary information

TEXT:

Use the same dark navy/purple-black text used throughout Product,
Category and Billing.

Do not introduce a new color palette.

==================================================
20. ICONS
==================================================

Use clean outline icons consistent with the existing BizCopilot UI.

Required icons:

- Close / X
- Radio selected
- Radio unselected
- Check
- Offer / discount tag
- Optional offer-specific icon

Icon style:

- Simple
- Modern
- Outline-based
- Consistent stroke weight
- Touch-friendly on mobile

Do NOT mix random icon styles.

Do NOT use oversized decorative icons.

==================================================
21. OFFER EXAMPLE DATA
==================================================

Use realistic examples for the mock:

BUYMORE10
"10% off on orders above ₹500"
"You save ₹45.50"

SAVE20
"20% off on orders above ₹1,000"
"You save ₹XX"

BIGSAVE500
"₹500 off on bills above ₹2,000"
"You save ₹500"

FRESH5
"Flat ₹5 off on eligible orders"
"You save ₹5"

The actual saving values should be calculated according to the current
cart in a real implementation.

For Figma mockups, realistic static values may be used.

==================================================
22. BILLING INTEGRATION
==================================================

This screen is opened from the Billing screen when the user clicks:

"View all" under Offers & Discounts.

When the user applies an offer:

- Close the Offer overlay.
- Return to Billing.
- Billing cart must immediately reflect the selected offer.
- Discount amount must update.
- Total must update.
- Applied offer card in Billing must update.

The Offer screen must not own billing calculations.

The Billing/business logic remains responsible for applying the actual
offer.

The UI simply displays the calculated result.

==================================================
23. RESPONSIVENESS / VIEWPORT RULE
==================================================

The design must be genuinely responsive.

Do NOT create a fixed canvas that only works at the mockup resolution.

For large monitors:

- Modal remains visually balanced.
- No unnecessary page scrollbar.
- No huge empty areas.

For smaller laptop screens:

- Modal adapts to available height.
- Offer list becomes scrollable.
- Header and action area remain visible.

For tablets:

- Touch-friendly layout.
- Same visual language as Desktop.

For mobile:

- Bottom sheet.
- Touch-first layout.
- Fixed/sticky action area.
- Offer list scroll only when necessary.

==================================================
24. DO NOT ADD
==================================================

Do NOT add:

- Navigation menu
- Sidebar
- Bottom navigation
- Offer management controls
- Create Offer
- Edit Offer
- Delete Offer
- Search
- Filters
- Offer categories
- Tabs
- Minimum Bill Amount summary
- Discount Amount summary
- Unnecessary statistics
- Print
- Share
- More menu
- Extra billing controls
- Customer controls
- Payment controls

This screen is ONLY for selecting/applying an offer during billing.

==================================================
25. VISUAL RELATIONSHIP WITH BILLING
==================================================

The Offer overlay must feel like a natural extension of the frozen
Billing screen.

Maintain:

- Same purple primary color.
- Same border radius.
- Same card treatment.
- Same typography.
- Same icon style.
- Same spacing rhythm.
- Same button style.
- Same success/savings treatment.

When displayed over Billing, the user should immediately recognize that
this is part of the same BizCopilot billing workflow.

==================================================
26. FINAL DESIGN PRINCIPLE
==================================================

The experience should answer three questions immediately:

1. What offers can I use?
2. Which offer saves the customer the most?
3. Which offer is currently applied?

The user should be able to select and apply an offer in seconds.

The design must prioritize:

FAST
CLEAR
TOUCH-FRIENDLY
LOW NAVIGATION
LOW COGNITIVE LOAD
CONSISTENT BIZCOPILOT UI

==================================================
FINAL INSTRUCTION TO FIGMA / DESIGN AGENT
==================================================

Generate the Offers & Discounts screen exactly according to this
specification.

Treat all decisions marked as FINAL / FROZEN as non-negotiable.

Do not invent additional UI.

Do not add unnecessary sections.

Do not redesign the approved structure.

Maintain pixel-level visual consistency with the already-frozen
BizCopilot Product, Category, and Billing screens.

Create responsive Desktop, Tablet and Mobile variants.

Desktop + Tablet:
Centered overlay/modal over Billing.

Mobile:
Bottom-sheet overlay from the bottom.

Single offer list:
Highest actual customer saving → lowest saving.

Include percentage-based and flat amount-based bill offers.

Do not show separate Minimum Bill Amount or Discount Amount fields.

Keep header and action area fixed while only the offer list scrolls when
necessary.

The final result should look like a production-ready premium POS/billing
application, not a generic e-commerce offer screen.