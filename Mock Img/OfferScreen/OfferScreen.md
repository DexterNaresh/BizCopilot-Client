# BIZCOPILOT — OFFER SCREEN MASTER UI/UX PROMPT
## OFFER DASHBOARD / INITIAL LOAD ONLY
## FIGMA-LEVEL RESPONSIVE DESIGN SPECIFICATION

IMPORTANT:
Design ONLY the Offer Dashboard / Offer Management screen shown immediately when the user opens "Offers".

DO NOT design, describe, or generate:
- Create Offer page
- Create Offer configuration
- Offer type selection page
- Percentage configuration
- Flat discount configuration
- Buy X Get Y configuration
- Bundle configuration
- Offer review page
- Offer completion page
- Offer edit form
- Offer creation workflow

The "Create Offer" button is ONLY an entry point from this dashboard.
Do not design its destination.

============================================================
1. PRIMARY DESIGN OBJECTIVE
============================================================

The Offer screen is the business owner's central place to:

- See all existing offers
- Understand active vs inactive offers immediately
- Search offers
- Filter offers
- Sort offers
- Edit an existing offer
- Activate/deactivate an offer
- Delete/deactivate an offer according to the existing business behavior
- Start creating a new offer through the "Create Offer" CTA

The screen must feel:

- Premium
- Clean
- Fast
- Business-focused
- Extremely easy to scan
- Consistent with BizCopilot
- Minimal but information-rich
- Touch-friendly
- Responsive
- Suitable for real small-business operators

The screen must prioritize operational clarity over decoration.

Do NOT introduce unnecessary:
- cards
- menus
- navigation layers
- illustrations
- decorative graphics
- excessive whitespace
- complex filters
- redundant actions
- preview actions
- bulk-selection controls

============================================================
2. EXISTING BIZCOPILOT VISUAL LANGUAGE
============================================================

Use the same visual system already established across BizCopilot.

Brand:
- BizCopilot logo
- Deep navy typography
- Blue/cyan brand accent
- Purple/indigo primary action
- Soft blue-white page background
- White content surfaces
- Very subtle borders
- Soft shadows
- Rounded corners
- Clean modern SaaS/POS aesthetic

Typography:
- Strong dark navy headings
- Medium-weight secondary text
- Highly readable body text
- Clear hierarchy between:
  - page title
  - offer title
  - offer type
  - benefit
  - applies-to information
  - validity
  - status
  - actions

Do not use:
- random gradients
- excessive glassmorphism
- decorative illustrations
- oversized icons
- emoji
- mixed icon styles
- inconsistent corner radii
- excessive animation

Icons must use ONE consistent icon library/style.

============================================================
3. RESPONSIVE VIEWPORT STRATEGY
============================================================

This is NOT a desktop layout that is simply scaled down.

Use three deliberate compositions.

------------------------------------------------------------
MOBILE
0–599 px
------------------------------------------------------------

Use the attached mobile mock as the PRIMARY structural reference.

Mobile must be designed specifically for phone interaction.

Structure:

┌─────────────────────────────────────────┐
│ STATUS BAR                              │
├─────────────────────────────────────────┤
│ ☰  BizCopilot       Business ▼   Avatar │
├─────────────────────────────────────────┤
│                                         │
│ Offers                    + Create Offer│
│ Create and manage offers...             │
│                                         │
│ ┌────────────┐ ┌────────────┐ ┌────────┐│
│ │ 🏷 12      │ │ ● 8        │ │ ● 1    ││
│ │Total Offers│ │Active      │ │Inactive││
│ └────────────┘ └────────────┘ └────────┘│
│                                         │
│ ┌───────────────────────────────┐ ┌───┐ │
│ │ 🔍 Search offers...            │ │☷ │ │
│ └───────────────────────────────┘ └───┘ │
│                                         │
│ ┌────────────┐ ┌────────────┐ ┌────────┐│
│ │ All Types ▼│ │All Applies▼│ │All Stat▼│
│ └────────────┘ └────────────┘ └────────┘│
│                                         │
│ 12 Offers                  Sort by: Latest
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ 01  Juice Fest 20%        % 20% off │ │
│ │     Get 20% off...         Applies...│ │
│ │     [Percentage Off]       📅 dates │ │
│ │─────────────────────────────────────│ │
│ │ Active   [toggle]       Edit  Delete│ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ 02  Breakfast Combo       ₹120      │ │
│ │     Juice + Sandwich...    Applies...│ │
│ │     [Bundle / Combo]       📅 dates │ │
│ │─────────────────────────────────────│ │
│ │ Active   [toggle]       Edit  Delete│ │
│ └─────────────────────────────────────┘ │
│                                         │
│              ...more offers...          │
│                                         │
├─────────────────────────────────────────┤
│              BOTTOM NAVIGATION          │
└─────────────────────────────────────────┘


------------------------------------------------------------
TABLET
600–1023 px
------------------------------------------------------------

Tablet should retain the desktop information model while remaining
touch-friendly.

Suggested structure:

┌──────────────────────────────────────────────────────┐
│ BizCopilot Header / Business / User                   │
├──────────────────────────────────────────────────────┤
│ Offers                              + Create Offer    │
│ Create and manage offers...                           │
│                                                      │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐         │
│ │Total Offers│ │Active      │ │Inactive    │         │
│ └────────────┘ └────────────┘ └────────────┘         │
│                                                      │
│ ┌──────────────────────────────────────────┐ ┌────┐  │
│ │ Search offers...                         │ │ ⚙  │  │
│ └──────────────────────────────────────────┘ └────┘  │
│                                                      │
│ [All Types ▼] [All Applies To ▼] [All Status ▼]      │
│                                                      │
│ 12 Offers                         Sort by: Latest ▼   │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │ Seq │ Offer │ Type │ Benefit │ Status │ Actions │ │
│ │ 01  │ ...   │ ...  │ ...     │ Active │ ✎ 🗑    │ │
│ │ 02  │ ...   │ ...  │ ...     │ Active │ ✎ 🗑    │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│                     Pagination                       │
└──────────────────────────────────────────────────────┘


------------------------------------------------------------
DESKTOP
1024 px+
------------------------------------------------------------

Use the established BizCopilot desktop shell.

Structure:

┌──────────────┬──────────────────────────────────────────────┐
│              │ TOP HEADER                                  │
│ BizCopilot   │ Business Selector   Notifications   Profile │
│              ├──────────────────────────────────────────────┤
│ Dashboard    │                                              │
│ Billing      │ Offers                         + Create Offer│
│ Products     │ Create and manage offers to grow your...     │
│ Offers       │                                              │
│ Customers    │ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│ Reports      │ │Total     │ │Active    │ │Inactive  │      │
│ Settings     │ │Offers    │ │Offers    │ │Offers    │      │
│              │ └──────────┘ └──────────┘ └──────────┘      │
│              │                                              │
│              │ Search offers...                     Filters │
│              │                                              │
│              │ All Types ▼  All Applies To ▼  All Status ▼ │
│              │                                              │
│              │ 12 Offers                  Sort by: Latest ▼ │
│              │                                              │
│              │ ┌──────────────────────────────────────────┐ │
│              │ │ Seq │ Offer │ Type │ Benefit │ Status...│ │
│              │ │─────┼───────┼──────┼─────────┼─────────│ │
│              │ │ 01  │ ...   │ ...  │ ...     │ Active  │ │
│              │ │ 02  │ ...   │ ...  │ ...     │ Active  │ │
│              │ │ 03  │ ...   │ ...  │ ...     │Inactive │ │
│              │ └──────────────────────────────────────────┘ │
│              │                                              │
│              │ Pagination                                   │
└──────────────┴──────────────────────────────────────────────┘

Desktop uses:
- Persistent left navigation
- Full-width page workspace
- Table/list presentation
- No need to convert desktop into cards
- No unnecessary detail panel
- No row preview interaction

============================================================
4. MOBILE HEADER — EXACT STRUCTURE
============================================================

The mobile header must follow the attached mock.

Top area:

LEFT:
- Hamburger menu icon
- BizCopilot logo/wordmark

CENTER/RIGHT:
- Business selector
- Business icon
- Business name
- Down chevron

FAR RIGHT:
- Circular user/avatar
- Initials if that is the established system

Example from reference:

☰   BizCopilot        [Business Icon  Green Bites Café ▼] [NK]

Header:
- White background
- Bottom divider
- Fixed/stable height
- Comfortable touch targets
- No unnecessary header actions

Do not add:
- notification icon unless it already exists in the established mobile shell
- search icon in header
- extra page menu
- breadcrumb

============================================================
5. MOBILE PAGE HEADER
============================================================

Immediately below the application header:

LEFT:
Offers

Below title:
Create and manage offers to grow your business

RIGHT:
[ + Create Offer ]

The Create Offer button should remain prominent.

Mobile reference behavior:
- Title aligned left
- CTA aligned to the right
- CTA uses BizCopilot primary purple
- Rounded rectangle
- Plus icon
- White text

Do NOT turn Create Offer into:
- floating action button
- icon-only button
- overflow menu

============================================================
6. SUMMARY CARDS — MOBILE
============================================================

The mobile mock explicitly uses THREE HORIZONTAL SUMMARY CARDS.

Keep this structure.

Cards:

1. Total Offers
   Example:
   12
   Total Offers

2. Active Offers
   Example:
   8
   Active Offers

3. Inactive Offers
   Example:
   1
   Inactive Offers

Layout:
- Three cards in one horizontal row
- Cards must fit inside mobile viewport
- Compact but readable
- Equal visual importance
- Horizontal spacing consistent
- No wrapping into vertical cards unless viewport becomes physically too narrow

Each card contains:
- Small semantic icon
- Large numeric value
- Label

Visual treatment:
- White card
- Soft rounded corners
- Very subtle shadow/border
- Soft circular icon background

Icons:
Total Offers → tag/offer icon
Active Offers → green status dot
Inactive Offers → red status dot

Do not add:
- revenue
- scheduled offers
- drafts
- upcoming offers
- conversion rate
- usage metrics

These three are sufficient.

============================================================
7. SEARCH AREA — MOBILE
============================================================

The mobile reference has:

SEARCH FIELD + SEPARATE FILTER BUTTON

Structure:

┌───────────────────────────────────────┐ ┌────┐
│ 🔍 Search offers by name or keyword...│ │ ☷  │
└───────────────────────────────────────┘ └────┘

Search:
- Large touch-friendly input
- Search icon on left
- Placeholder:
  "Search offers by name or keyword..."
- Rounded border
- White/light surface

Filter button:
- Separate square/near-square button
- Filter/sliders icon
- Same height as search
- No text required
- Clearly tappable

Do not combine the filter button inside the search field.

============================================================
8. FILTER ROW — MOBILE
============================================================

Immediately below search:

Three filters:

[ All Types ▼ ]
[ All Applies To ▼ ]
[ All Status ▼ ]

These must visually match the attached mobile mock.

Each:
- Rounded rectangle
- White/light background
- Thin subtle border
- Dark text
- Chevron on right
- Equal/near-equal width
- Touch-friendly height

Filters:

1. All Types
Possible offer types are based on the existing Offer model.

2. All Applies To
Examples:
- Entire Bill
- Selected Products
- Category

3. All Status
Only:
- Active
- Inactive

Do not introduce:
- Draft
- Scheduled
- Upcoming
- Expired as a status
unless explicitly supported by the existing business specification.

Validity/schedule is separate from Status.

============================================================
9. OFFER COUNT + SORT ROW — MOBILE
============================================================

Below filters:

LEFT:
"12 Offers"

RIGHT:
"Sort by: Latest"
Chevron
Sort/list icon

The count and sort control must occupy the SAME horizontal row.

Example:

12 Offers                         Sort by: Latest ▼   ≡

Use:
- Strong count typography
- Compact sort control
- No oversized toolbar
- No extra filter chips

Possible sorting options should only be meaningful offer-list sorting options.

Do not add arbitrary sorting dimensions.

============================================================
10. MOBILE OFFER CARD — PRIMARY COMPONENT
============================================================

THIS IS THE MOST IMPORTANT MOBILE STRUCTURE.

Do NOT convert the desktop table into a tiny table.

Each offer becomes a large, clean card.

The card has TWO PRIMARY INFORMATION COLUMNS.

------------------------------------------------------------
TOP INFORMATION AREA
------------------------------------------------------------

LEFT SIDE:

[01]

Offer Name:
Juice Fest 20%

Description:
Get 20% off on all juices

Offer Type Badge:
[ Percentage Off ]

RIGHT SIDE:

Offer Benefit:
%    20% off (Max ₹200)

Applies To:
▣    Applies to: Juices

Validity:
▣    01 Sep 2026 – 30 Sep 2026

There is a subtle vertical divider between
the left and right information areas.

------------------------------------------------------------
BOTTOM ACTION AREA
------------------------------------------------------------

Separate with a horizontal divider.

LEFT:
[ Active ] [ Toggle ]

RIGHT:
[ Edit ]   [ Delete ]

This bottom action row is part of the card.

============================================================
11. MOBILE OFFER CARD — EXACT CONTENT PRIORITY
============================================================

For every offer card show:

1. Sequence number
2. Offer name
3. Short description
4. Offer type badge
5. Benefit
6. Applies To
7. Validity
8. Status
9. Status toggle
10. Edit
11. Delete/deactivate action

Do not add:
- preview
- checkbox
- three-dot menu
- duplicate View action
- unnecessary metadata
- creator information
- creation timestamp unless explicitly required
- inventory information

============================================================
12. OFFER CARD EXAMPLES
============================================================

Use realistic examples matching the reference.

CARD 01:

01

Juice Fest 20%

Get 20% off on all juices

[ Percentage Off ]

%   20% off (Max ₹200)
▣   Applies to: Juices
▣   01 Sep 2026 – 30 Sep 2026

Active   [ON]          Edit      Delete


CARD 02:

02

Breakfast Combo

Juice + Sandwich at special price

[ Bundle / Combo ]

₹   ₹120 (Combo Price)
▣   Applies to: Selected Products
▣   01 Sep 2026 – 30 Sep 2026

Active   [ON]          Edit      Delete


CARD 03:

03

Buy 1 Get 1 Sugar

Buy 1 Kg Sugar, Get 500 gm Free

[ Buy X Get Y ]

▣   Buy 1 Get 1 (500 gm Free)
▣   Applies to: Sugar
▣   01 Sep 2026 – 30 Sep 2026

Active   [ON]          Edit      Delete


CARD 04:

04

Spend ₹500 Save 10%

Get 10% off on bill above ₹500

[ Spend & Save ]

%   10% off (Min bill ₹500)
▣   Applies to: Entire Bill
▣   01 Sep 2026 – 30 Sep 2026

Active   [ON]          Edit      Delete


CARD 05:

05

Flat ₹500 Off

Get ₹500 off on bill above ₹2,000

[ Flat Discount ]

₹   ₹500 off (Min bill ₹2,000)
▣   Applies to: Entire Bill
▣   05 Sep 2026 – 15 Sep 2026

Active   [ON]          Edit      Delete

============================================================
13. MOBILE OFFER CARD DIMENSIONS
============================================================

Use the following as design guidance rather than rigid pixel
values.

Card:
- Full available content width
- Horizontal margins approximately 12–16px
- Rounded corners approximately 16–20px
- Comfortable internal padding
- No excessive empty space

Sequence badge:
- Compact rounded pill/soft square
- Two-digit number
- Easy to scan

Offer title:
- Strong
- Dark navy
- One-line when possible
- Two-line allowed when required

Description:
- Secondary navy/blue-gray
- Smaller than title

Offer type badge:
- Compact
- Rounded
- Semantic accent
- No oversized pill

Right information:
- Clearly separated from title section
- Use icons consistently
- Do not use giant decorative icons

Bottom action area:
- Clear divider
- Status on left
- Edit/Delete on right
- Touch targets >= approximately 44px

============================================================
14. MOBILE CARD ACTIONS
============================================================

EDIT:

Use pencil/edit icon.

Label:
Edit

Behavior:
Opens the existing offer editing workflow.

Do not show a separate View/Preview action.

DELETE / DEACTIVATE:

Use the existing trash/delete visual language.

Label:
Delete

Important business behavior:
If the existing Offer business logic defines this action as
deactivation rather than destructive historical deletion,
preserve that behavior.

Do not imply that completed historical bills are deleted.

STATUS:

Status is:
- Active
- Inactive

Use:
- status pill
- toggle

The toggle is immediately next to the status.

Do not create:
- Scheduled status
- Draft status
- Upcoming status

Schedule/validity is separate information.

============================================================
15. OFFER TYPE ICON SYSTEM
============================================================

Use semantic icons consistently.

Percentage Off:
- Percent icon %

Flat Discount:
- Currency ₹

Buy X Get Y:
- Gift / exchange style icon

Quantity Discount:
- Cart / quantity icon

Spend & Save:
- Bill / wallet / spend icon

Tiered Offer:
- Ascending levels / bars

Bundle / Combo:
- Package / box

Icons must:
- Be from one icon family
- Use consistent stroke weight
- Have consistent visual size
- Be recognizable at small size

Do NOT use:
- emoji
- random custom illustrations
- mixed icon libraries
- oversized decorative icons

============================================================
16. DESKTOP OFFER TABLE
============================================================

Desktop uses a table/list rather than cards.

Primary columns:

Seq.
Offer
Type
Benefit
Applies To
Validity
Status
Actions

Recommended hierarchy:

Seq:
01

Offer:
Juice Fest 20%
Get 20% off on all juices

Type:
Percentage Off

Benefit:
20% off
Max ₹200

Applies To:
Juices

Validity:
01 Sep 2026 – 30 Sep 2026

Status:
Active + toggle

Actions:
Edit
Delete/Deactivate

Desktop must maximize useful information without becoming dense.

============================================================
17. TABLET OFFER TABLE
============================================================

Tablet should preserve table semantics where width permits.

Prioritize:

Seq
Offer
Type
Benefit
Status
Actions

Secondary information such as:
- Applies To
- Validity

may be visually compressed into the Offer/Benefit area when needed.

Do not allow:
- page-level horizontal scrolling
- clipped action buttons
- hidden status
- inaccessible edit/delete

If the available width becomes too constrained,
recompose intelligently rather than shrinking text to unreadable sizes.

============================================================
18. DESKTOP/TABLET SEARCH + FILTER
============================================================

Search:
- Search offers by name or keyword

Filters:
- All Types
- All Applies To
- All Status

Desktop/tablet may place them in a horizontal toolbar.

Example:

[ Search offers...                         ] [Filter]

[ All Types ▼ ] [ All Applies To ▼ ] [ All Status ▼ ]

Maintain generous but controlled spacing.

Do not create an advanced filter system unless the existing
Offer specification explicitly requires it.

============================================================
19. SUMMARY CARDS — DESKTOP/TABLET
============================================================

Use:

Total Offers
Active Offers
Inactive Offers

The visual system should match the mobile cards.

Desktop:
- Three balanced cards
- More horizontal space
- Larger content area

Tablet:
- Three cards if width permits
- Keep them compact
- Do not create excessive whitespace

Do not add:
- Draft
- Scheduled
- Upcoming
- Expired
- Revenue
- Conversion
- Redemption metrics

unless explicitly defined elsewhere.

============================================================
20. CREATE OFFER CTA
============================================================

The dashboard contains:

[ + Create Offer ]

This is the primary page action.

Use:
- Primary BizCopilot purple
- Plus icon
- Strong contrast
- Rounded corners
- Clear label

Placement:
Desktop:
Top-right of page header.

Tablet:
Top-right of page header.

Mobile:
Top-right of page header, matching the attached mobile reference.

The CTA is an ENTRY POINT ONLY.

Do not design its destination in this task.

============================================================
21. ROW/CARD INTERACTION RULE
============================================================

Offer rows/cards are NOT clickable for preview.

Do not make the entire row/card behave like a hidden button.

Explicit actions only:

- Edit
- Status Toggle
- Delete/Deactivate

This avoids accidental navigation and keeps the screen operationally predictable.

============================================================
22. NO CHECKBOXES
============================================================

Do NOT add checkboxes to offer rows/cards.

No bulk selection.

No:
- Select all
- Bulk deactivate
- Bulk delete
- Bulk edit

Keep V1 operationally simple.

============================================================
23. NO THREE-DOT MENU
============================================================

Do not use a three-dot overflow menu.

Actions are already visible:

Edit
Delete/Deactivate
Status Toggle

Do not hide important business actions behind an additional menu.

============================================================
24. LIST SCROLLING
============================================================

IMPORTANT RESPONSIVE RULE:

The entire application page must NOT become one giant scrolling container
just because there are many offers.

The OFFER LIST/TABLE owns its scrolling.

Desktop:
- Header/toolbar remain stable where appropriate
- Offer list area scrolls vertically

Tablet:
- Offer list owns vertical scrolling

Mobile:
- Offer cards list owns the long-content scrolling behavior
- Bottom navigation must never cover the final offer content
- Provide sufficient bottom safe-area/padding

Never create:
- nested unnecessary scrollbars
- horizontal page scrolling
- clipped offer cards
- hidden action buttons

============================================================
25. MOBILE BOTTOM NAVIGATION
============================================================

Use the existing BizCopilot mobile navigation.

The Offer screen must remain compatible with it.

The bottom navigation must:
- remain visible
- not cover content
- have safe-area spacing
- preserve enough bottom padding after the final offer card

Do not add a separate Offer-specific navigation bar.

============================================================
26. EMPTY STATE
============================================================

Design a clean empty state for when no offers exist.

Structure:

Offers

No offers yet

Create your first offer to attract customers
and grow your business.

[ + Create Offer ]

Keep it minimal.

Do not use a giant illustration.

If search/filter produces zero results:

No matching offers

Try changing your search or filters.

Do not show:
- misleading total counts
- broken table structures
- unnecessary cards

============================================================
27. LOADING STATE
============================================================

Loading should preserve the final layout structure.

Use:
- skeleton rows on desktop/tablet
- skeleton offer cards on mobile

Skeleton should represent:
- sequence
- title
- description
- type
- benefit
- applies-to
- validity
- status/actions

Avoid full-page blocking loaders unless absolutely necessary.

============================================================
28. ERROR STATE
============================================================

If offer loading fails:

Unable to load offers

Please try again.

[ Retry ]

Keep the page shell and header available.

Do not destroy the entire page structure.

============================================================
29. RESPONSIVE RECOMPOSITION RULE
============================================================

DO NOT simply scale the desktop layout.

Transformation:

DESKTOP:
Table

↓

TABLET:
Compact Table

↓

MOBILE:
Offer Cards

The content remains semantically equivalent,
but the layout is recomposed for the viewport.

Desktop prioritizes:
- information density
- comparison
- fast scanning

Tablet prioritizes:
- touch
- compact comparison
- readable columns

Mobile prioritizes:
- card readability
- touch actions
- clear hierarchy
- one-handed operation

============================================================
30. CONTENT PRIORITY
============================================================

Desktop priority:

1. Offer Name
2. Offer Type
3. Benefit
4. Applies To
5. Validity
6. Status
7. Actions

Tablet priority:

1. Offer Name
2. Offer Type
3. Benefit
4. Status
5. Actions
6. Applies To / Validity as secondary information

Mobile priority:

1. Offer Name
2. Benefit
3. Applies To
4. Validity
5. Offer Type
6. Status
7. Actions

Never sacrifice:
- offer name
- benefit
- status
- edit
- deactivate/delete

============================================================
31. FIGMA FRAME STRUCTURE
============================================================

Create the following Figma frames:

Offers/
│
├── 01_Offer_Dashboard_Desktop
│
├── 02_Offer_Dashboard_Tablet
│
├── 03_Offer_Dashboard_Mobile
│
├── 04_Offer_Dashboard_Empty
│
├── 05_Offer_Dashboard_No_Search_Result
│
├── 06_Offer_Dashboard_Loading
│
├── 07_Offer_Dashboard_Error
│
└── Components/
    ├── OfferSummaryCard
    ├── OfferTable
    ├── OfferTableRow
    ├── OfferMobileCard
    ├── OfferTypeBadge
    ├── OfferStatus
    ├── OfferStatusToggle
    ├── OfferSearch
    ├── OfferFilter
    ├── OfferSort
    ├── OfferActions
    └── EmptyState

============================================================
32. FIGMA AUTO LAYOUT
============================================================

Use Auto Layout everywhere practical.

Desktop:
- Main content uses flexible width
- Sidebar fixed
- Table fills available width
- Action column remains stable

Tablet:
- Content width adapts
- Columns redistribute
- No clipping

Mobile:
- Full-width content container
- Fixed horizontal page padding
- Cards fill available width
- Internal card sections use flexible columns
- Bottom action row distributes controls correctly

Use reusable components and variants.

============================================================
33. COMPONENT VARIANTS
============================================================

Offer Status:

Variant:
- Active
- Inactive

Toggle:
- On
- Off
- Disabled if required by permission/loading state

Offer Type Badge:
- Percentage Off
- Flat Discount
- Buy X Get Y
- Quantity Discount
- Spend & Save
- Tiered Offer
- Bundle / Combo

Card:
- Default
- Pressed
- Loading
- Disabled if applicable

Button:
- Default
- Hover
- Pressed
- Disabled

============================================================
34. ACCESSIBILITY
============================================================

All interactive controls must have:

- minimum comfortable touch target
- visible focus state
- sufficient contrast
- meaningful accessible labels
- keyboard accessibility on desktop
- clear disabled state

Do not depend only on color.

Active vs inactive should be understandable from:
- label
- toggle state
- visual styling

============================================================
35. BUSINESS LOGIC BOUNDARY
============================================================

The UI is responsible for:

- displaying offers
- search input
- filter selection
- sorting selection
- status interaction
- navigation/action initiation
- rendering returned offer data

The UI must NOT own:

- discount calculation
- tax calculation
- offer applicability calculation
- pricing calculation
- final bill calculation
- promotion resolution
- eligibility rules

Those belong to the appropriate business/application engines.

The Offer screen simply displays the persisted offer definition and
returned status/data.

============================================================
36. DATA DISPLAY RULES
============================================================

Each offer may expose:

Offer:
- Name
- Short description

Type:
- Offer type

Benefit:
- Human-readable configured benefit

Applies To:
- Entire Bill
- Selected Products
- Category
- other values supported by the existing Offer specification

Validity:
- Start date
- End date
- optional schedule information where relevant

Status:
- Active
- Inactive

Do not invent additional business fields.

============================================================
37. STATUS VS VALIDITY
============================================================

IMPORTANT:

STATUS and VALIDITY are different concepts.

Status:
- Active
- Inactive

Validity:
- Start date
- End date
- optional schedule/time/day configuration

Do not display:

Scheduled

as a status.

Do not create:

Draft
Upcoming
Expired

as dashboard statuses unless explicitly defined by the existing
Offer specification.

============================================================
38. VISUAL DENSITY
============================================================

The previous design must NOT become overly spacious.

The attached mobile mock demonstrates the desired principle:

- compact page header
- compact summary cards
- compact search/filter controls
- clear offer count
- dense but readable offer cards
- information split into logical regions
- action row integrated into the card

Use available viewport space efficiently.

Avoid:
- giant empty areas
- oversized cards with little information
- excessive section margins
- unnecessarily tall rows
- oversized headings

However, do not make the interface cramped.

The target is:
COMPACT + PREMIUM + READABLE.

============================================================
39. MOBILE CARD INFORMATION ARCHITECTURE
============================================================

Every mobile card should visually follow:

┌───────────────────────────────────────────────┐
│ [01]   OFFER NAME                BENEFIT      │
│        Description                % / ₹        │
│        [Offer Type]               Applies To   │
│                                   Validity     │
│───────────────────────────────────────────────│
│ Active  [ON]                    Edit   Delete │
└───────────────────────────────────────────────┘

The exact content may wrap based on viewport width,
but the information hierarchy must remain.

This structure is intentional.

Do NOT replace it with:

Offer Name
Type
Benefit
Applies To
Validity
Status
Actions

as one long vertical stack.

The two-column upper information structure is required on mobile
where the viewport allows it.

============================================================
40. MOBILE VIEWPORT BEHAVIOR
============================================================

At narrow phone widths:

- Preserve card structure
- Reduce internal spacing
- Allow text wrapping
- Keep actions accessible
- Do not force horizontal scrolling

If the right information column becomes too narrow,
recompose the internal card intelligently while preserving
the same information priority.

Never:
- clip text
- overlap icons
- hide actions
- create horizontal page scroll

============================================================
41. DESKTOP PAGE SHELL
============================================================

Use the established BizCopilot desktop application shell:

LEFT SIDEBAR:
- Dashboard
- Billing
- Products
- Offers
- Customers
- Reports
- Settings

Offers is highlighted as the current section.

TOP HEADER:
- Business selector
- Notification area if part of the existing shell
- User/profile
- Role information if already established

MAIN CONTENT:
- Offers heading
- Description
- Create Offer
- Summary
- Search/filter
- Offer list/table

Do not redesign the global shell.

============================================================
42. TABLET PAGE SHELL
============================================================

Tablet should use the established BizCopilot tablet shell.

If the sidebar is collapsed:
- use existing collapsed navigation behavior
- do not invent another navigation model

Offer content remains the primary focus.

============================================================
43. MOBILE PAGE SHELL
============================================================

Use the attached mobile reference as the structural source.

Top:

Status bar

↓

Application header

Hamburger | BizCopilot | Business selector | Avatar

↓

Offers header

Offers
Create and manage offers to grow your business

Create Offer

↓

Summary cards

Total | Active | Inactive

↓

Search + filter

↓

Three filters

↓

Offer count + sort

↓

Offer cards

↓

Bottom navigation

This ordering is important.

Do not move:
- filters above summary
- summary below offers
- sort into a separate toolbar
- Create Offer into the bottom navigation

============================================================
44. INTERACTION DETAILS
============================================================

Search:
- updates offer list based on offer name/keyword
- use sensible debounce behavior if search is live

Filter:
- Type
- Applies To
- Status

Sort:
- user selects meaningful sort order

Toggle:
- Active → Inactive
- Inactive → Active
- use confirmation only if required by existing business rules
- avoid unnecessary confirmation for harmless state changes

Edit:
- explicit pencil action

Delete/Deactivate:
- explicit destructive-looking action
- preserve the existing business meaning
- do not silently destroy historical bill information

============================================================
45. DO NOT ADD THESE
============================================================

ABSOLUTELY DO NOT ADD:

❌ Preview action
❌ Entire-row clickable preview
❌ Checkbox
❌ Bulk actions
❌ Three-dot menu
❌ Draft status
❌ Scheduled status
❌ Upcoming status
❌ Offer images
❌ Decorative illustrations
❌ Inventory information
❌ Stock information
❌ Low-stock indicators
❌ Revenue analytics
❌ Redemption analytics
❌ Complex campaign analytics
❌ Duplicate View action
❌ Create Offer configuration on this page
❌ Multi-step creation UI on this page
❌ Offer preview panel
❌ Unnecessary modal on initial load

============================================================
46. FINAL DESKTOP STRUCTURE
============================================================

Desktop:

Sidebar
  ↓
Top Header
  ↓
Offers Page Header
  ├── Offers
  ├── Description
  └── Create Offer
  ↓
Summary
  ├── Total Offers
  ├── Active Offers
  └── Inactive Offers
  ↓
Search / Filters
  ├── Search
  ├── Type
  ├── Applies To
  └── Status
  ↓
List Toolbar
  ├── Offer Count
  └── Sort
  ↓
Offer Table
  ├── Seq
  ├── Offer
  ├── Type
  ├── Benefit
  ├── Applies To
  ├── Validity
  ├── Status
  └── Actions
  ↓
Pagination


============================================================
47. FINAL TABLET STRUCTURE
============================================================

Tablet:

Top Header
  ↓
Offers Page Header
  ├── Offers
  ├── Description
  └── Create Offer
  ↓
Summary
  ├── Total
  ├── Active
  └── Inactive
  ↓
Search + Filter
  ↓
Filter Row
  ├── Type
  ├── Applies To
  └── Status
  ↓
Offer Count + Sort
  ↓
Compact Offer Table
  ↓
Pagination


============================================================
48. FINAL MOBILE STRUCTURE
============================================================

THIS IS THE REQUIRED MOBILE COMPOSITION.

Status Bar
  ↓
Mobile Application Header
  ├── Hamburger
  ├── BizCopilot
  ├── Business Selector
  └── Avatar
  ↓
Page Header
  ├── Offers
  ├── Description
  └── + Create Offer
  ↓
THREE SUMMARY CARDS
  ├── Total Offers
  ├── Active Offers
  └── Inactive Offers
  ↓
SEARCH ROW
  ├── Search Field
  └── Filter Button
  ↓
FILTER ROW
  ├── All Types
  ├── All Applies To
  └── All Status
  ↓
OFFER TOOLBAR
  ├── "12 Offers"
  └── Sort by: Latest + Sort Icon
  ↓
OFFER CARD LIST
  ├── Offer Card 01
  ├── Offer Card 02
  ├── Offer Card 03
  ├── Offer Card 04
  └── Offer Card 05...
  ↓
Bottom Safe Area
  ↓
Mobile Bottom Navigation


============================================================
49. MOBILE CARD STRUCTURE — FINAL
============================================================

For implementation/design reference:

┌─────────────────────────────────────────────────┐
│                                                 │
│  [01]   Juice Fest 20%          %  20% off      │
│         Get 20% off on all       Applies to:    │
│         juices                  Juices          │
│                                                 │
│         [Percentage Off]         📅 01 Sep –    │
│                                  30 Sep 2026     │
│─────────────────────────────────────────────────│
│                                                 │
│  Active   [ ON ]                 ✎ Edit   🗑 Delete
│                                                 │
└─────────────────────────────────────────────────┘

The divider between the left and right information areas should
be subtle and only used where it improves readability.

The bottom divider clearly separates information from actions.

============================================================
50. DESIGN VALIDATION CHECKLIST
============================================================

Before considering the Offer Dashboard complete, verify:

MOBILE:
□ Application header matches BizCopilot mobile shell
□ Hamburger exists
□ Business selector exists
□ Avatar exists
□ Offers title is visible
□ Description is visible
□ Create Offer is visible
□ Three summary cards are horizontal
□ Search and filter button are separate
□ Three filter dropdowns exist
□ Offer count and sort share one row
□ Cards are used instead of a table
□ Cards use two-column information structure
□ Bottom action row exists
□ Status + toggle exists
□ Edit exists
□ Delete/deactivate exists
□ No preview action
□ No checkbox
□ No three-dot menu
□ No horizontal scrolling
□ Bottom navigation does not cover content

TABLET:
□ BizCopilot shell retained
□ Create Offer visible
□ Three summary cards
□ Search
□ Filters
□ Count + sort
□ Compact table
□ Status visible
□ Actions visible
□ No page-level horizontal overflow

DESKTOP:
□ Persistent sidebar
□ Offers highlighted
□ Header and business selector
□ Create Offer CTA
□ Three summary cards
□ Search/filter
□ Count + sort
□ Full offer table
□ Status + toggle
□ Edit
□ Delete/deactivate
□ Pagination
□ Offer list owns scrolling

ALL VIEWPORTS:
□ Same visual language
□ Same data model
□ Same business semantics
□ Responsive recomposition
□ No unnecessary decoration
□ No invented business logic
□ No inventory dependency
□ No create-offer workflow included
□ No preview workflow
□ No draft status
□ No scheduled status
□ No unnecessary navigation

============================================================
51. FINAL DESIGN PRINCIPLE
============================================================

Design the Offer Dashboard as a real operational POS/business
management screen, not as a marketing campaign page.

The user should be able to open Offers and understand within
seconds:

1. How many offers exist
2. How many are active
3. How many are inactive
4. What each offer does
5. Where it applies
6. When it is valid
7. Whether it is active
8. How to edit it
9. How to deactivate/delete it
10. How to create a new offer

The mobile reference is the authoritative structural direction
for the mobile dashboard.

Desktop and tablet should preserve the same information architecture
while using the appropriate table-based composition shown by the
existing BizCopilot design language.

DO NOT DESIGN THE CREATE OFFER PAGE.

END OF OFFER DASHBOARD MASTER PROMPT