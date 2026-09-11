# BizCopilot V1 — Recent Bills
# MASTER FIGMA-LEVEL UI/UX DESIGN PROMPT
## Frozen Screen Specification — Design + Responsive + Interaction + Implementation Contract

---

# 0. INSTRUCTION TO THE DESIGN AGENT

Design and implement the **BizCopilot V1 — Recent Bills** screen exactly from this specification.

This is a **frozen screen specification**.

Do not:
- redesign the approved experience
- simplify the information architecture
- add new functionality
- remove approved functionality
- invent additional filters
- create unnecessary navigation
- introduce a new card-entry flow
- change the Desktop/Tablet split-screen model
- turn Mobile into a scaled-down Desktop layout
- introduce whole-page scrolling

Where this document gives a screen-specific rule, that rule takes precedence over generic responsive assumptions.

The objective is:

> **Reproduce the approved Recent Bills experience at Figma level while making it a real responsive application screen rather than a screenshot recreation.**

---

# 1. SCREEN PURPOSE

Recent Bills is the completed transaction-history experience of BizCopilot.

It allows the user to:

1. Find completed bills.
2. Search completed bills.
3. Filter completed bills.
4. Select a completed bill.
5. Inspect complete bill information.
6. Reprint a completed bill.

A completed bill is immutable.

## Allowed actions

- View
- Search
- Filter
- Reprint

## Explicitly NOT allowed

- Resume
- Edit
- Delete
- Rebill

Never expose those actions anywhere in the Recent Bills UI.

---

# 2. INFORMATION ARCHITECTURE

Recent Bills is part of the **Sales** area.

Existing major application navigation remains unchanged.

Relevant navigation:

- Dashboard
- Billing
- Sales
- Products
- Other existing BizCopilot modules

## Active navigation

**Sales**

## Important distinction

The application already has a dedicated **Billing** screen.

Billing is the cashier/order-entry experience.

Recent Bills is the completed transaction-history experience.

Do NOT create a new top-level navigation item named "Recent Bills".

Do NOT create date-navigation tabs such as:

- Today
- Yesterday
- This Week
- This Month

Those are **date-filter values only**.

---

# 3. SCREEN NAMING

## Page title

**Recent Bills**

## Subtitle

**View, search and reprint your recently completed bills**

Do not rename the page to:
- Bills
- Bill History
- Transactions
- Sales History

Use **Recent Bills**.

---

# 4. MASTER RESPONSIVE RULE

There are two intentional layout modes for this screen.

## MODE A — DESKTOP + TABLET

Desktop and Tablet share the same architecture:

> **Split-screen list + selected-bill details**

## MODE B — MOBILE

Mobile intentionally uses a different architecture:

> **Bill list → dedicated bill-details screen**

This is NOT a simple desktop layout scaled down.

---

# 5. GLOBAL VIEWPORT RULES

Use CSS viewport/container dimensions rather than physical-device assumptions.

### Primary design frames

Desktop:
- 1440 × 900

Tablet:
- 1024 × 768

Mobile:
- 390 × 844

### Additional validation sizes

Mobile:
- 320 × 568
- 375 × 667
- 430 × 932

Tablet:
- 600 × 800
- 768 × 1024
- 834 × 1194
- 1024 × 768

Desktop:
- 1280 × 720
- 1366 × 768
- 1440 × 900
- 1536 × 864
- 1920 × 1080
- 2560 × 1440
- 3840 × 2160

Short-height validation:
- 1280 × 600
- 1366 × 650
- 1440 × 700

Also validate intermediate widths.

---

# 6. DESKTOP VIEWPORT STRUCTURE

## Frame

**1440 × 900**

The application uses the existing BizCopilot application shell.

### High-level geometry

```text
┌─────────────────────────────────────────────────────────────────────┐
│                         APPLICATION VIEWPORT                        │
│                                                                     │
│ ┌──────────────┬──────────────────────────────────────────────────┐ │
│ │              │ HEADER                                           │ │
│ │              │ Recent Bills                         [Export]    │ │
│ │              │ View, search and reprint...                     │ │
│ │  GLOBAL      ├──────────────────────────────────────────────────┤ │
│ │  SIDEBAR     │ SEARCH       DATE              FILTER            │ │
│ │              ├──────────────────────────────────────────────────┤ │
│ │              │ 32 Bills Found                                   │ │
│ │              ├───────────────────────┬──────────────────────────┤ │
│ │              │ BILL LIST             │ SELECTED BILL DETAILS    │ │
│ │              │                       │                          │ │
│ │              │ Bill                  │ Bill Header              │ │
│ │              │ Bill                  │ Customer                  │ │
│ │              │ Bill                  │ Bill Items                │ │
│ │              │ Bill                  │ Summary                   │ │
│ │              │                       │ Payment Details           │ │
│ │              │                       │ Completion Notice         │ │
│ │              │                       │                          │ │
│ └──────────────┴───────────────────────┴──────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### Desktop shell

Use:
- Existing global sidebar.
- Existing top/application shell behavior.
- Recent Bills content in the main workspace.

Do not redesign the global navigation as part of this screen.

---

# 7. DESKTOP CONTENT GEOMETRY

The main workspace occupies the available width after the global sidebar.

Use fluid layout.

Recommended desktop proportions:

- Bill-list pane: approximately **35–42%**
- Detail pane: approximately **58–65%**

The exact split may flex with available width.

Do not hard-code a single screenshot width.

### Main vertical structure

```text
Main Workspace
│
├── Page Header
│   ├── Title
│   ├── Subtitle
│   └── Export
│
├── Search / Date / Filter Toolbar
│
├── Result Count
│
└── Split Content
    ├── Bill List
    └── Bill Details
```

---

# 8. DESKTOP HEIGHT BEHAVIOR

The screen is designed to fit within the application viewport.

Do NOT allow the browser/page to become the scrolling container.

The split content must use the remaining available height.

Conceptually:

```text
RecentBillsShell
  height: 100%

  Header
  Toolbar
  ResultCount

  Content
    height: remaining space

    BillList
    BillDetails
```

The detail panel must itself NOT become a general scrolling container.

---

# 9. TABLET VIEWPORT STRUCTURE

## Frame

**1024 × 768**

Tablet uses the same fundamental Desktop architecture.

```text
┌────────────────────────────────────────────────────────────┐
│ SIDEBAR │ Recent Bills                         Export       │
│         │ Subtitle                                         │
│         ├───────────────────────────────────────────────────┤
│         │ Search               Date              Filter      │
│         ├───────────────────────────────────────────────────┤
│         │ 32 Bills Found                                    │
│         ├──────────────────┬────────────────────────────────┤
│         │ BILL LIST        │ BILL DETAILS                    │
│         │                  │                                 │
│         │                  │                                 │
│         └──────────────────┴────────────────────────────────┘
└────────────────────────────────────────────────────────────┘
```

## Tablet rules

- Same list/detail split.
- Same interaction model.
- Same search.
- Same date control.
- Same filter control.
- Same selected-bill details.
- Same Bill Items-only scrollbar rule.
- Same payment information.
- Same reprint action.

Tablet MUST NOT:
- switch to mobile
- open a separate details route merely because the viewport is narrower
- collapse into cards-only navigation
- introduce page scrolling

Spacing and proportions may compress intelligently.

---

# 10. MOBILE VIEWPORT STRUCTURE

## Primary frame

**390 × 844**

Mobile is a separate composition.

There is NO simultaneous list + detail split.

---

# 11. MOBILE — INITIAL / ON-LOAD SCREEN

```text
┌───────────────────────────────┐
│ Recent Bills           Export │
│ View, search and reprint...   │
├───────────────────────────────┤
│ Search by Bill No. /          │
│ Customer / Phone              │
├───────────────────────────────┤
│ [ Date ]              [Filter]│
├───────────────────────────────┤
│ 32 Bills Found                │
├───────────────────────────────┤
│ BILL CARD                     │
├───────────────────────────────┤
│ BILL CARD                     │
├───────────────────────────────┤
│ BILL CARD                     │
├───────────────────────────────┤
│ ...                           │
├───────────────────────────────┤
│ Pagination                    │
├───────────────────────────────┤
│ Fixed Mobile Bottom Navigation│
└───────────────────────────────┘
```

### Mobile layout rules

- Single column.
- Full-width content.
- Search is full width.
- Date and Filter remain separate controls.
- Bill results use stacked bill cards.
- Pagination stays above the fixed bottom navigation.
- Bottom navigation remains fixed.
- Sales is active.

---

# 12. MOBILE — SELECTED BILL SCREEN

When the user taps a bill:

> Open the dedicated Mobile Bill Details screen.

Do not show the bill list alongside it.

```text
┌───────────────────────────────┐
│ ←  Bill #B-1048      Reprint  │
│                     [ Paid ]  │
├───────────────────────────────┤
│ CUSTOMER / BILL METADATA      │
│ Ravi Kumar                    │
│ 98765 43210                   │
│ Today, 02:42 PM               │
├───────────────────────────────┤
│ BILL ITEMS                    │
│                               │
│ item                  amount  │
│ item                  amount  │
│ item                  amount  │
│        ONLY THIS AREA SCROLLS │
│                               │
├───────────────────────────────┤
│ SUMMARY                       │
│ Subtotal              ₹...    │
│ Discount              ₹...    │
│ Tax                   ₹...    │
│ Total Paid            ₹...    │
├───────────────────────────────┤
│ PAYMENT DETAILS               │
│ UPI / Cash / Card / Mixed     │
├───────────────────────────────┤
│ COMPLETED BILL NOTICE         │
├───────────────────────────────┤
│ Fixed Mobile Bottom Navigation│
└───────────────────────────────┘
```

Back:
- Returns to Recent Bills list.
- Preserve the previous search/filter/list context where appropriate.

---

# 13. GLOBAL SCROLL CONTRACT — ABSOLUTE

This is one of the most important frozen rules.

## The following MUST NEVER scroll:

- Entire page.
- Entire selected-bill detail panel.
- Customer metadata.
- Summary.
- Payment Details.
- Completion notice.
- Desktop/tablet workspace.
- Mobile selected-bill screen.

## ONLY this region can scroll:

**Bill Items**

---

# 14. BILL ITEMS SCROLL MODEL

### Short bill

If all Bill Items fit:

- No scrollbar.
- Do not reserve a visible scrollbar unnecessarily.

### Long bill

If Bill Items exceed the available height:

- Constrain the Bill Items region.
- Enable internal vertical scrolling.
- Display scrollbar only inside Bill Items.

Conceptual implementation:

```text
DetailPanel
  overflow: hidden

  Header
  CustomerMetadata

  BillItemsContainer
      overflow-y: auto
      min-height: 0

  Summary
  PaymentDetails
  CompletionNotice
```

The scrollbar MUST NOT appear on the complete page.

The scrollbar MUST NOT appear around the complete detail panel.

This rule applies to:
- Desktop.
- Tablet.
- Mobile.

---

# 15. PAGE HEADER

## Desktop/tablet

Left:
- Recent Bills
- Subtitle

Right:
- Export button

### Title

**Recent Bills**

### Subtitle

**View, search and reprint your recently completed bills**

### Export

Secondary/outlined action.

Icon:
- Material Symbols Outlined `file_upload` / appropriate existing export icon from the shared icon system.

Use the actual shared BizCopilot icon component.

Do not invent an icon.

---

# 16. SEARCH CONTROL

## Placeholder

**Search by Bill No. / Customer / Phone**

Search supports:
- Bill number.
- Customer name.
- Customer phone.

### Desktop/tablet

Search is part of the toolbar.

### Mobile

Search is full width.

### Search states

1. Empty.
2. Focused.
3. Typing.
4. Results.
5. No results.
6. Cleared.

Do not introduce a separate search-results page.

---

# 17. DATE CONTROL

Date is a separate control.

Default:

**Today**

Structure:

```text
[ calendar icon ] Today [ chevron ]
```

Available values:

- Today
- Yesterday
- This Week
- This Month
- Last Month
- Custom Date Range

### Critical rule

Date is NOT part of the generic Filter panel.

Do not merge them.

Do not create separate date navigation tabs.

---

# 18. FILTER CONTROL

Filter button:

```text
[ funnel icon ] Filter
```

The Filter panel contains ONLY the approved filters.

## Payment Method

- All
- Cash
- UPI
- Card
- Mixed

## Customer

- All
- Walk-In
- Named Customer

## Billed By

- All
- Owner
- Waiter

## Bill Amount

- All
- Custom Range

### Filter actions

- Reset
- Apply

### Do NOT add

- Date
- Product
- Category
- Offer
- Inventory
- Profit
- Tax
- Branch
- BI metrics

---

# 19. RESULT COUNT

Display the dynamic result count.

Example:

**32 Bills Found**

Place it after the search/date/filter controls.

Do not make it a separate navigation element.

---

# 20. BILL LIST — DESKTOP/TABLET

Each bill row/card must clearly communicate:

- Bill number.
- Paid status.
- Customer or Walk-In.
- Phone when available.
- Date/time.
- Item count.
- Payment method.
- Total.
- Chevron.

Example:

```text
#B-1048                         Paid
Ravi Kumar
98765 43210
Today, 02:42 PM
3 items • UPI                  ₹776.25       >
```

Walk-In example:

```text
#B-1047                         Paid
Walk-In Customer
Today, 02:31 PM
5 items • Cash                 ₹1,240.00     >
```

---

# 21. BILL LIST SELECTED STATE

When a bill is selected on Desktop/Tablet:

- Highlight the selected bill.
- Use BizCopilot purple accent.
- Use subtle light-purple selected background.
- Use clear border/accent.
- Do not make selection visually aggressive.

The right details pane updates immediately.

---

# 22. MOBILE BILL CARD

Mobile card is optimized for touch.

Required information:

- Bill number.
- Paid status.
- Customer/Walk-In.
- Phone when available.
- Date/time.
- Item count.
- Payment method.
- Total.
- Chevron.

Example:

```text
#B-1048                 Paid
Ravi Kumar
98765 43210
Today, 02:42 PM
3 items • UPI          ₹776.25   >
```

Use comfortable touch targets.

The entire bill card/list item can be clickable.

---

# 23. BILL DETAIL HEADER

Desktop/tablet detail pane:

```text
Bill #B-1048                  [Paid] [Reprint]
```

Mobile:

```text
[Back]  Bill #B-1048       [Reprint]
                     [Paid]
```

### Paid badge

Use success styling.

Reference:
- Success: `#168A3A`
- Success background: `#E8F7EC`

### Reprint

Use:
- Printer icon.
- Secondary/outlined action treatment.
- Clear touch target.

Do not expose Edit/Resume/Delete/Rebill.

---

# 24. CUSTOMER / BILL METADATA

Show:

- Customer icon.
- Customer name.
- Phone when available.
- Date/calendar icon.
- Date/time.
- Bill type where applicable.

Named customer:

```text
Ravi Kumar
98765 43210
```

Walk-in:

```text
Walk-In Customer
```

Never fabricate customer information.

Never fabricate phone numbers.

---

# 25. BILL ITEMS SECTION

Heading:

**Bill Items (3)**

The count is dynamic.

## Desktop/tablet table structure

```text
Item                    Quantity / Unit       Rate             Total
---------------------------------------------------------------------
Orange Juice            1 Ltr                 ₹120/Ltr         ₹120
Apple Juice             2 Ltr                 ₹120/Ltr         ₹240
Veg Sandwich            2 Qty                 ₹150/Qty         ₹300
```

---

# 26. UNIT PRESERVATION — CRITICAL

Never assume all products use "Qty".

Products can use:

- Qty
- Kg
- g
- Ltr
- ml
- Other configured units

Examples:

```text
1 Qty
2 Qty
1 Kg
1.5 Kg
2 Ltr
750 ml
500 g
```

Never transform:

```text
1 Kg → 1 Qty
2 Ltr → 2 Qty
```

The actual unit from the completed bill must be displayed.

---

# 27. BILL ITEM VISUAL HIERARCHY

Each item should visually distinguish:

1. Product name.
2. Quantity + unit.
3. Rate.
4. Line total.

Total should be visually stronger than metadata.

Do not clutter each row with unnecessary controls.

Completed bill items are read-only.

---

# 28. BILL SUMMARY

Show:

- Subtotal.
- Applied offer/discount only when applicable.
- Taxes when applicable.
- Total Paid.

Example:

```text
Subtotal                         ₹660.00
Offer (SUMMER10)                -₹50.00
CGST (2.5%)                      ₹16.25
SGST (2.5%)                      ₹16.25
----------------------------------------
Total Paid                      ₹776.25
```

## Rules

If no offer was applied:
- Do not show an empty Offer row.

Do not invent discount values.

Total Paid must have the strongest visual emphasis.

---

# 29. PAYMENT DETAILS

Heading:

**Payment Details**

Supported payment methods:

- Cash
- UPI
- Card
- Mixed

---

# 30. CASH PAYMENT

Show completed cash information.

Possible information:

- Cash icon.
- Cash.
- Amount received.
- Change returned.
- Payment date/time.

This is historical information.

Do not turn it into the active payment-entry UI.

---

# 31. UPI PAYMENT

Show:

- UPI icon.
- UPI.
- Amount.
- Transaction/reference ID when available.
- Payment date/time.

## QR rule

The QR generation belongs to the active Payment workflow.

The QR is generated using the owner's configured bank/payment information.

Recent Bills displays completed payment information.

Do NOT create a new QR-generation flow inside Recent Bills.

---

# 32. CARD PAYMENT

Show:

- Card icon.
- Card.
- Paid amount.
- Transaction/reference information when available.
- Payment date/time.

## Critical

Never request:
- Card number.
- Card expiry.
- CVV.
- Cardholder information.

Card payment in BizCopilot does NOT require entering card information.

Recent Bills is history, not payment entry.

---

# 33. MIXED PAYMENT

Show:

- Mixed payment indicator.
- Every payment component.
- Amount for each component.
- Total.
- Note when available.
- Exact split.

Example:

```text
Mixed Payment

Cash                     ₹500.00
UPI                      ₹276.25
-------------------------------
Total Paid               ₹776.25

Note:
Customer paid remaining amount through UPI.
```

Do not request card details if Card is one of the mixed components.

---

# 34. COMPLETED BILL NOTICE

Use a subtle informational/success card.

Example:

**This bill is completed.**

Supporting text:

**You can reprint the bill, but cannot modify or resume it.**

Purpose:
- Reinforce completed state.
- Explain Reprint.
- Reinforce immutable transaction behavior.

Do not show destructive actions.

---

# 35. SEARCH — NO RESULTS

Show a clean empty state.

Example:

**No bills found**

Supporting:

**Try a different bill number, customer, phone, date or filter.**

Do not create a fixed-width empty-state panel that breaks on mobile.

---

# 36. SEARCH — MULTIPLE RESULTS

When multiple bills match:

- Display all matching bills.
- Preserve the normal list hierarchy.
- Allow normal selection.

Desktop/tablet:
- Selecting one updates the right details pane.

Mobile:
- Selecting one opens its dedicated details screen.

---

# 37. DATE FILTER BEHAVIOR

Date selector supports:

### Today
Current business date.

### Yesterday
Previous business date.

### This Week
Current week.

### This Month
Current month.

### Last Month
Previous month.

### Custom Date Range
Start and end date.

Do not add navigation tabs for these values.

---

# 38. FILTER OPEN STATE

The filter UI must clearly group the four approved filter categories:

```text
FILTER

Payment Method
○ All
○ Cash
○ UPI
○ Card
○ Mixed

Customer
○ All
○ Walk-In
○ Named Customer

Billed By
○ All
○ Owner
○ Waiter

Bill Amount
○ All
○ Custom Range

[Reset]                         [Apply]
```

Use the existing BizCopilot overlay/popover/sheet language.

Do not make Filter full-screen on Desktop/Tablet unless required by available space.

On Mobile, use an appropriate touch-friendly filter presentation that remains consistent with the application overlay language.

---

# 39. DATE SELECTOR OPEN STATE

Show:

```text
Date

Today
Yesterday
This Week
This Month
Last Month
Custom Date Range
```

Custom Date Range must provide appropriate start/end date controls.

Do not duplicate the same date controls inside Filter.

---

# 40. PAGINATION

Where pagination is used, provide:

- Previous.
- Page numbers.
- Ellipsis when necessary.
- Next.
- Rows per page.

Example:

```text
‹   1   2   3   …   8   ›     10 / page
```

## Mobile

Pagination must stay above the fixed bottom navigation.

Never allow it to be hidden behind the navigation bar.

---

# 41. RESPONSIVE BEHAVIOR

Use responsive CSS/layout behavior.

Prefer:
- CSS Grid.
- Flexbox.
- Fluid widths.
- `width: 100%`.
- `min-width` only where semantically necessary.
- `max-width`.
- `clamp()`.
- Container-aware sizing.

Do not implement the screen as a fixed screenshot.

Do not use device-specific hacks.

---

# 42. BREAKPOINT BEHAVIOR

Use the project's existing responsive breakpoints.

Baseline layout modes:

- Mobile: `< 768px`
- Tablet: `768px–1023px`
- Desktop: `>= 1024px`

The screen-specific rule is:

### Desktop
Split list/details.

### Tablet
Split list/details.

### Mobile
List screen → dedicated details screen.

Intermediate widths must transition naturally.

---

# 43. CONTINUOUS RESIZE

Test:

```text
1440
↓
1366
↓
1280
↓
1150
↓
1024
↓
900
↓
768
↓
600
↓
430
```

At every stage verify:

- no overlap
- no clipping
- no lost controls
- no horizontal overflow
- no accidental page scrollbar
- no detail-panel scrollbar
- Bill Items remains the only scrolling region
- search remains usable
- filter remains usable
- bill list remains usable
- selected bill remains visible
- hierarchy remains intact

---

# 44. SHORT HEIGHT RESPONSIVENESS

The screen must work in short desktop heights.

Validate:

- 1280 × 600
- 1366 × 650
- 1440 × 700

The UI must not assume a tall viewport.

When vertical space becomes limited:

- Do not create page scrolling.
- Do not scroll the complete detail panel.
- Keep Bill Items as the internal scroll container.
- Preserve header, metadata, summary and payment visibility.

---

# 45. MOBILE SAFE AREA

Mobile layout must respect:

- device safe-area insets
- fixed bottom navigation
- browser/application viewport

Do not allow:
- pagination behind bottom navigation
- buttons behind bottom navigation
- content hidden under device safe areas

---

# 46. DESIGN SYSTEM

Use the existing BizCopilot design language.

Characteristics:

- Premium POS.
- Clean.
- Modern.
- Minimal.
- Fast to scan.
- High information density without clutter.
- Strong numeric hierarchy.
- White/light surfaces.
- Deep navy text.
- Purple/indigo primary accent.
- Green success states.
- Light purple selected states.
- Subtle borders.
- Soft rounded cards.
- Minimal shadows.
- No unnecessary gradients.
- No decorative noise.

---

# 47. COLOR TOKENS

Use the established BizCopilot colors.

Primary Purple:
`#4B20E6`

Primary Navy:
`#11164A`

Secondary Text:
`#5F628F`

Border:
`#E4E4F0`

Surface:
`#FFFFFF`

Secondary Surface:
`#F7F5FF`

Success:
`#168A3A`

Success Background:
`#E8F7EC`

Do not introduce unrelated accent colors.

---

# 48. TYPOGRAPHY

Use the existing BizCopilot typography system.

The established direction uses:

**Inter**
- Main UI typography.

**JetBrains Mono**
- Monetary/numeric values where the existing application uses the numeric style.

Hierarchy:

- Page title: large / bold.
- Subtitle: regular / muted.
- Section title: semibold.
- Bill number: semibold/bold.
- Total amount: strongest numeric emphasis.
- Metadata: regular / muted.
- Paid badge: medium/semibold.

Maintain consistent line-height.

Use the existing project typography tokens rather than inventing screen-specific fonts.

---

# 49. SPACING SYSTEM

Use the BizCopilot 8px spacing grid.

Reference scale:

- 4px — micro spacing.
- 8px — icon/text and compact spacing.
- 12px — compact component spacing.
- 16px — normal component gap.
- 24px — section gap.
- 32px — major layout gap.

Responsive horizontal padding:

Desktop:
- approximately 24–32px.

Tablet:
- approximately 20–24px.

Mobile:
- approximately 16px.

Do not use arbitrary spacing when an existing token applies.

---

# 50. RADIUS / SURFACES

Reference:

- Inputs/buttons: approximately 10–12px.
- Cards/panels: approximately 12–16px.
- Pills/badges: fully rounded.
- Selected states: same radius as base component.
- Subtle shadows only where existing BizCopilot components use them.

Do not over-round every element.

---

# 51. ICON SYSTEM

Use the established BizCopilot icon system.

Source family:

**Google Material Symbols Outlined**

Default:
- Fill: 0.
- Weight: 400.
- Grade: 0.
- Optical size: 24.
- Canvas: 24 × 24.

Standard sizes:
- 16px
- 18px
- 20px
- 22px
- 24px
- 28px
- 32px
- 40px
- 48px

Do not mix icon families.

Do not use:
- Font Awesome.
- Bootstrap Icons.
- Heroicons.
- Lucide.
- Random SVGs.
- Emoji.
- AI-generated icons.

Use shared icon components.

---

# 52. ICON MAP FOR RECENT BILLS

Use Material Symbols Outlined equivalents.

Navigation:
- Sales → existing shared Sales icon.

Search:
- `search`

Back:
- `arrow_back`

Chevron:
- `chevron_right`

Date:
- `calendar_month` or existing shared calendar icon.

Filter:
- `filter_alt`

Customer:
- `person`

Phone:
- `phone`

Bill:
- `receipt_long`

Reprint:
- `print`

Cash/payment:
- `payments`

Card:
- `credit_card`

UPI/QR:
- existing shared UPI/QR payment icon system.

Mixed:
- `account_balance_wallet` / existing payment split icon according to the shared icon system.

Export:
- existing shared export icon.

Do not manually draw replacement icons.

---

# 53. COMPONENT SYSTEM

Create reusable components rather than screenshot-specific elements.

## Screen components

```text
RecentBillsPage
RecentBillsHeader
RecentBillsToolbar
SearchField
DateSelector
FilterButton
FilterPanel
BillCount
BillList
BillListItem
BillDetailsPanel
BillMetadata
BillItems
BillItemsScrollableContainer
BillSummary
PaymentDetails
CompletionNotice
ReprintButton
```

## Mobile components

```text
MobileRecentBills
MobileBillCard
MobileBillDetails
MobileBillItems
```

## Shared

```text
PaidStatusBadge
Icon
Pagination
MobileBottomNavigation
```

Use shared components for repeated patterns.

---

# 54. FIGMA COMPONENT REQUIREMENTS

Create component variants for:

## Search

Variants:
- Default.
- Focused.
- Filled.
- Disabled.
- No-results context.

## Bill item/card

Variants:
- Default.
- Hover.
- Pressed.
- Selected.
- Focused.

## Paid badge

Variants:
- Default/paid.

## Date selector

Variants:
- Default.
- Open.
- Selected.

## Filter

Variants:
- Default.
- Open.
- Filters applied.

## Reprint

Variants:
- Default.
- Hover.
- Pressed.
- Disabled where applicable.

## Pagination

Variants:
- First page.
- Middle page.
- Last page.
- Disabled previous/next.

---

# 55. DESKTOP BILL LIST DETAIL RELATIONSHIP

Desktop/tablet:

```text
Bill List
   │
   │ select
   ▼
Selected Bill
   │
   └── updates Detail Pane
```

Do not navigate away from the screen when selecting a bill.

The list remains visible.

The detail pane changes.

---

# 56. MOBILE BILL LIST DETAIL RELATIONSHIP

Mobile:

```text
Bill List
   │
   │ tap
   ▼
Bill Details Screen
   │
   │ back
   ▼
Bill List
```

Do not display a split panel.

Preserve list/search/filter context when returning.

---

# 57. OFFLINE-FIRST BEHAVIOR

BizCopilot is offline-first.

Recent Bills should be able to display:

- locally available completed bills
- synchronized completed bills

Do not assume permanent internet connectivity.

Do not introduce a cloud-only dependency for the UI.

The screen must remain a normal part of the offline-first application runtime.

---

# 58. COMPLETED BILL DATA

A completed bill should preserve/display the relevant information:

```text
Bill ID
Bill Number
Date/Time
Customer / Walk-In
Customer Phone when available

Items:
  Product Name
  Quantity
  Unit
  Rate
  Line Total

Subtotal
Applied Offer/Discount
Taxes when applicable
Final Total

Payment Method
Payment Amounts
Mixed Payment Split
Payment Reference when available
Payment Note when available
Billed By
```

The UI must never invent missing data.

---

# 59. CUSTOMER SCENARIOS

## Named customer

Display:
- Customer name.
- Phone when available.

Example:
```text
Ravi Kumar
98765 43210
```

## Walk-In customer

Display:
```text
Walk-In Customer
```

Do not force a phone number.

---

# 60. OFFER SCENARIOS

## Offer applied

Show:
- Actual offer/discount.
- Correct amount.

## No offer

Do not show an empty Offer row.

Recent Bills must reflect the completed bill exactly.

---

# 61. PAYMENT SCENARIO MATRIX

| Payment | Display | Card data entry | Mixed split |
|---|---|---|---|
| Cash | Cash details | No | N/A |
| UPI | UPI details | No | N/A |
| Card | Card payment details | **Never** | Possible |
| Mixed | Every component | **Never** | **Yes** |

Recent Bills is a historical view.

Do not convert any payment type into active payment-entry UI.

---

# 62. MOBILE BOTTOM NAVIGATION

Use the existing BizCopilot mobile bottom navigation.

It is:
- Mobile only.
- Fixed to the bottom.
- Touch friendly.
- Consistent with the global app shell.

Sales context must remain clear.

The bottom navigation must never overlap:
- bill cards
- pagination
- selected-bill content

Use safe-area-aware bottom padding where necessary.

---

# 63. BROWSER / APPLICATION WINDOW SCENARIOS

Test:

- Maximized browser.
- Half-screen browser.
- Side-by-side browser.
- Resized browser.
- Small laptop window.

The screen must respond to available CSS viewport dimensions.

Do not assume maximized browser.

---

# 64. ACCESSIBILITY

Maintain:

- readable contrast
- keyboard navigation
- visible focus
- semantic structure
- logical tab order
- screen-reader labels
- touch accessibility
- minimum approximately 44–48px touch targets

Do not sacrifice accessibility for visual density.

---

# 65. INTERACTION STATES

Every interactive component needs appropriate:

- Default.
- Hover.
- Focus.
- Pressed.
- Selected.
- Disabled where applicable.

Desktop hover must not be required for functionality.

Mobile must not depend on hover.

---

# 66. LOADING STATE

If loading state is represented:

- Use skeletons matching the actual responsive component shape.
- Desktop/tablet skeleton follows split layout.
- Mobile skeleton follows mobile card layout.
- Do not show desktop-sized skeletons on mobile.

---

# 67. ERROR STATE

If an error occurs:

- Keep error message inside the current responsive layout.
- Text must wrap.
- Retry/action remains visible.
- Never create horizontal overflow.

---

# 68. FROZEN FIGMA FRAMES TO CREATE

Create the following explicit Figma frames.

## FRAME 01
**Recent Bills — Desktop — 1440×900 — Selected Bill**

Must show:
- Global sidebar.
- Recent Bills header.
- Subtitle.
- Export.
- Search.
- Date.
- Filter.
- Result count.
- Left bill list.
- Selected bill.
- Right detail pane.
- Customer.
- Bill Items.
- Summary.
- Payment.
- Completion notice.
- No page scrollbar.

---

## FRAME 02
**Recent Bills — Desktop — Long Bill Items**

Same as Frame 01, but with enough bill items to overflow.

Must visibly demonstrate:

> scrollbar ONLY inside Bill Items.

No scrollbar:
- page
- detail panel
- summary
- payment section

---

## FRAME 03
**Recent Bills — Tablet — 1024×768 — Selected Bill**

Must use the same split architecture.

---

## FRAME 04
**Recent Bills — Mobile — 390×844 — Initial**

Must show:
- Header.
- Export.
- Search.
- Date.
- Filter.
- Result count.
- Multiple bill cards.
- Pagination.
- Fixed bottom navigation.

---

## FRAME 05
**Recent Bills — Mobile — Selected Bill**

Must show:
- Back.
- Bill number.
- Paid.
- Reprint.
- Customer.
- Metadata.
- Bill Items.
- Summary.
- Payment.
- Completion notice.
- Bottom navigation.
- No page scroll.

---

## FRAME 06
**Recent Bills — Mobile — Selected Bill — Long Items**

Must prove:

> ONLY Bill Items scroll.

---

## FRAME 07
**Recent Bills — No Results**

Must show the approved empty state.

---

## FRAME 08
**Recent Bills — Filter Open**

Must show:
- Payment Method.
- Customer.
- Billed By.
- Bill Amount.
- Reset.
- Apply.

Date remains outside Filter.

---

## FRAME 09
**Recent Bills — Date Selector Open**

Must show:
- Today.
- Yesterday.
- This Week.
- This Month.
- Last Month.
- Custom Date Range.

---

# 69. FIGMA PAGE ORGANIZATION

Recommended:

```text
Recent Bills
│
├── 01 Desktop
│   ├── Selected
│   └── Long Items
│
├── 02 Tablet
│   └── Selected
│
├── 03 Mobile
│   ├── Initial
│   ├── Selected
│   └── Selected - Long Items
│
├── 04 States
│   ├── No Results
│   ├── Filter Open
│   └── Date Open
│
└── 05 Components
    ├── Search
    ├── Date
    ├── Filter
    ├── Bill Card
    ├── Paid Badge
    ├── Reprint
    ├── Pagination
    └── Payment Details
```

Use Auto Layout.

Use reusable components and variants.

---

# 70. LAYOUT IMPLEMENTATION RULE

Do not reproduce the mock using absolute coordinates.

Avoid:

```text
left: 713px
top: 247px
width: 428px
```

for normal layout.

Use:

- Auto Layout in Figma.
- CSS Grid.
- Flexbox.
- Responsive containers.
- Intrinsic sizing.

Absolute positioning is acceptable only for intentional overlays/anchored elements.

---

# 71. DETAIL PANEL LAYOUT MODEL

Use a vertical flex structure.

Conceptually:

```text
DetailPanel
  display: flex
  flex-direction: column
  height: 100%
  overflow: hidden

  DetailHeader
  CustomerMetadata

  BillItemsSection
      min-height: 0
      overflow-y: auto

  Summary
  PaymentDetails
  CompletionNotice
```

This is important.

Do not put `overflow-y: auto` on DetailPanel.

Do not put `overflow-y: auto` on the page.

Only BillItemsSection receives scrolling.

---

# 72. MOBILE DETAIL LAYOUT MODEL

Use the same principle.

```text
MobileDetails
  height: available viewport
  overflow: hidden

  Header
  CustomerMetadata

  BillItems
      min-height: 0
      overflow-y: auto

  Summary
  Payment
  CompletionNotice

  BottomNavigation
```

The mobile bottom navigation remains fixed according to the global shell.

Do not make the whole mobile details page scroll.

---

# 73. PERFORMANCE

Responsive behavior should primarily use:

- CSS media queries.
- CSS Grid.
- Flexbox.
- Container queries where appropriate.
- Responsive design tokens.

Avoid expensive JavaScript resize calculations.

Do not continuously re-render the whole Recent Bills screen on every resize.

---

# 74. STATE PRESERVATION DURING RESPONSIVE CHANGES

When the viewport changes:

Preserve:
- search text
- selected date
- applied filters
- selected bill where possible
- current list state
- navigation context

Responsive changes should be presentation changes, not unexpected application-state changes.

---

# 75. NO DEVICE-SPECIFIC HACKS

Never implement rules like:

```text
if Dell laptop
if 13-inch laptop
if 1366 exactly
if 4K exactly
```

Responsive behavior must depend on:
- viewport
- container
- available space
- layout requirements

---

# 76. VISUAL REGRESSION REQUIREMENT

Compare the implementation against the approved Recent Bills mock screens.

Check:

- overall hierarchy
- split proportions
- spacing
- alignment
- typography
- icons
- card proportions
- selected state
- colors
- button placement
- bill information
- payment information
- scrolling
- mobile layout
- responsive transitions

Do not change the approved Desktop design merely to make Mobile easier.

---

# 77. CRITICAL "DO NOT" LIST

DO NOT:

- Add a Recent Bills primary navigation item.
- Add Today/Yesterday/Week/Month navigation tabs.
- Put Date inside Filter.
- Add unrelated filters.
- Show Edit.
- Show Delete.
- Show Resume.
- Show Rebill.
- Request card information.
- Generate a new QR workflow inside Recent Bills.
- Assume all quantities are Qty.
- Remove Kg/Ltr/ml/g units.
- Make the entire page scroll.
- Make the entire detail panel scroll.
- Make Summary scroll.
- Make Payment Details scroll.
- Make Customer metadata scroll.
- Turn Tablet into Mobile.
- Turn Mobile into a scaled Desktop.
- Hide pagination behind mobile navigation.
- Invent customer information.
- Invent payment references.
- Invent offers/discounts.
- Mix icon families.
- Use emoji icons.
- Use screenshot-specific absolute positioning.

---

# 78. FINAL FROZEN DESIGN DECISIONS

1. Recent Bills is under Sales.
2. Billing remains the main billing/cashier screen.
3. Recent Bills is completed transaction history.
4. Completed bills are immutable.
5. Reprint is allowed.
6. Resume is not allowed.
7. Edit is not allowed.
8. Delete is not allowed.
9. Rebill is not allowed.
10. Desktop uses split screen.
11. Tablet uses the same split screen.
12. Mobile uses a separate list screen.
13. Mobile bill selection opens a dedicated detail screen.
14. Search supports Bill No./Customer/Phone.
15. Date is a separate control.
16. Date is not part of Filter.
17. Date values include Today, Yesterday, This Week, This Month, Last Month and Custom Date Range.
18. Filter contains Payment Method, Customer, Billed By and Bill Amount.
19. Payment methods include Cash, UPI, Card and Mixed.
20. Card never requests card details.
21. Mixed payment shows exact component split and can include a note.
22. UPI QR is generated from owner-configured payment/bank information in the active Payment workflow.
23. Recent Bills displays completed payment information.
24. Actual product units must be preserved.
25. Units can include Qty, Kg, g, Ltr, ml and other configured units.
26. Offer/discount is shown only when applied.
27. Walk-In customer is supported.
28. Named customer is supported.
29. Phone is shown only when available.
30. Pagination must stay above mobile bottom navigation.
31. No whole-page scrollbar.
32. No whole-detail-panel scrollbar.
33. ONLY Bill Items can scroll.
34. Short Bill Items have no scrollbar.
35. Long Bill Items have an internal scrollbar.
36. Desktop and Tablet share the same visual architecture.
37. Mobile is intentionally a different composition.
38. Existing BizCopilot visual language must be maintained.
39. Existing Material Symbols Outlined icon system must be maintained.
40. The UI must be responsive, not a screenshot recreation.

---

# 79. FINAL QA MATRIX

| Requirement | Desktop | Tablet | Mobile |
|---|---:|---:|---:|
| Split-screen | ✓ | ✓ | ✗ |
| Dedicated detail screen | ✗ | ✗ | ✓ |
| Bill list visible with detail | ✓ | ✓ | ✗ |
| Search | ✓ | ✓ | ✓ |
| Date separate from Filter | ✓ | ✓ | ✓ |
| Filter | ✓ | ✓ | ✓ |
| Export | ✓ | ✓ | ✓ |
| Reprint | ✓ | ✓ | ✓ |
| Cash payment display | ✓ | ✓ | ✓ |
| UPI payment display | ✓ | ✓ | ✓ |
| Card payment display | ✓ | ✓ | ✓ |
| Card information entry | ✗ | ✗ | ✗ |
| Mixed payment display | ✓ | ✓ | ✓ |
| Mixed note | ✓ | ✓ | ✓ |
| Quantity + actual unit | ✓ | ✓ | ✓ |
| Walk-In | ✓ | ✓ | ✓ |
| Named customer | ✓ | ✓ | ✓ |
| Offer when applied | ✓ | ✓ | ✓ |
| Whole-page scrolling | ✗ | ✗ | ✗ |
| Whole-detail scrolling | ✗ | ✗ | ✗ |
| Bill Items internal scrolling | ✓ | ✓ | ✓ |
| Fixed mobile bottom navigation | ✗ | ✗ | ✓ |
| Pagination above bottom nav | N/A | N/A | ✓ |

---

# 80. FINAL ACCEPTANCE CRITERIA

The Recent Bills design is considered correct only when all of the following are true:

### Viewport
- Desktop 1440×900 matches the frozen split-screen concept.
- Tablet 1024×768 uses the same split-screen concept.
- Mobile 390×844 uses list → details.
- Mobile is not a compressed Desktop.
- Intermediate widths do not break.

### Navigation
- Sales is the relevant active navigation.
- Recent Bills is not a new primary navigation item.
- Billing remains Billing.

### Search / Filters
- Search supports Bill No./Customer/Phone.
- Date is separate.
- Filter does not contain Date.
- Filter has only approved categories.
- No redundant date navigation.

### Bill list
- Bill number visible.
- Paid status visible.
- Customer/Walk-In visible.
- Phone shown when available.
- Date/time visible.
- Item count visible.
- Payment method visible.
- Total visible.
- Selection works.

### Bill details
- Customer metadata.
- Bill Items.
- Quantity.
- Actual units.
- Rate.
- Line total.
- Summary.
- Offer only when applied.
- Taxes when applicable.
- Total Paid.
- Payment Details.
- Completed notice.
- Reprint.

### Payments
- Cash.
- UPI.
- Card.
- Mixed.
- Card has no card-entry fields.
- Mixed shows exact split.
- Mixed note is supported.
- UPI QR remains part of active Payment workflow.

### Scrolling
- No page scrollbar.
- No complete detail-panel scrollbar.
- Bill Items is the only scroll container.
- Short bill = no scrollbar.
- Long bill = Bill Items-only scrollbar.

### Mobile
- Single-column list.
- Dedicated selected-bill details.
- Back works.
- Reprint visible.
- Bottom navigation fixed.
- Pagination not hidden.
- No whole-screen scrolling.

### Visual
- BizCopilot purple.
- BizCopilot navy.
- Established typography.
- Material Symbols Outlined.
- Consistent 8px spacing system.
- Consistent radii.
- Consistent card/button language.
- Premium POS appearance.
- Accessible touch targets.
- No unnecessary decoration.

---

# 81. FINAL DESIGN PRINCIPLE

> **Design once. Adapt everywhere.**

For Recent Bills specifically:

> **Desktop + Tablet = split-screen completed-bill workspace.**

> **Mobile = dedicated list → bill-details experience.**

And the most important technical visual rule:

> **The page never scrolls. The selected-bill detail panel never scrolls. Only Bill Items scroll when the number of items exceeds the available space.**

This is the frozen Recent Bills design contract. Do not deviate from it without an explicit design decision.
