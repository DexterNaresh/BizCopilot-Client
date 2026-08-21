# BizCopilot V1 — Product Screen
# FINAL FROZEN UI / UX GENERATION SPECIFICATION

Create the BizCopilot V1 Product Management screen exactly according to this specification.

IMPORTANT:
This is a FROZEN UI structure.

Do not invent new components.
Do not rearrange the information architecture.
Do not add additional product-management features.
Do not remove any finalized component.
Do not create a different visual language for different devices.

The goal is to reproduce the approved BizCopilot Product screen with
Figma-level visual precision while making the implementation genuinely
responsive and fluid.

============================================================
1. GLOBAL BIZCOPILOT DESIGN SYSTEM — HARD CONSTRAINT
============================================================

Every screen must belong to the same BizCopilot design system.

Use the same:

- typography
- font family
- font weights
- purple primary accent
- neutral backgrounds
- border treatment
- corner radius
- shadows
- cards
- buttons
- icons
- badges
- toggles
- search fields
- filters
- modal overlays
- navigation patterns
- spacing system
- interaction states

Do NOT redesign the Product screen as a separate application.

It must visually match the already approved:

- Category screen
- Add Category overlay
- Add Product overlay
- Billing screen
- other BizCopilot screens

============================================================
2. RESPONSIVE DESIGN — ABSOLUTE REQUIREMENT
============================================================

The UI must be genuinely responsive.

DO NOT recreate the screenshot using fixed pixel positioning.

DO NOT use:

- fixed page widths
- fixed card widths
- fixed modal widths
- fixed image widths
- fixed table widths
- absolute positioning for layout
- fixed vertical coordinates
- hard-coded spacing that only works at one resolution

Use:

- CSS Grid
- Flexbox
- fluid containers
- relative sizing
- responsive tokens
- clamp()
- min()
- max()
- percentage sizing
- intrinsic sizing
- responsive breakpoints
- container queries where useful

Fixed dimensions are allowed only for small visual elements where
fixed dimensions are genuinely required, such as:

- icon visual size
- border thickness
- minimum touch target
- small status indicators

Everything else must adapt.

============================================================
3. VIEWPORTS
============================================================

The screen must support:

DESKTOP
TABLET
MOBILE

Desktop:
- large desktop
- 13-inch laptop
- normal desktop
- 4K monitor

Tablet:
- portrait
- landscape

Mobile:
- narrow mobile
- standard mobile
- large mobile

The same components must adapt continuously.

Do not create a completely different Product screen for each resolution.

============================================================
4. NAVIGATION
============================================================

DESKTOP:

Use the existing BizCopilot left sidebar.

TABLET:

Use the existing BizCopilot bottom navigation.

MOBILE:

Use the existing BizCopilot bottom navigation.

Tablet and Mobile must NOT use the desktop left sidebar.

Bottom navigation:

Dashboard
Billing
Products
Customers
More

Products is the active item.

Use the existing BizCopilot navigation styling.

============================================================
5. PRODUCT PAGE STRUCTURE
============================================================

Desktop / Tablet / Mobile follow the same information hierarchy:

HEADER
↓
SEARCH + FILTER
↓
STATUS / CATEGORY FILTER CHIPS
↓
PRODUCT COUNT + VIEW SWITCH
↓
PRODUCT CONTENT
↓
PAGINATION

The right-side contextual panel exists on larger layouts where space
permits.

On smaller viewports it must collapse/reflow according to the existing
responsive design system rather than causing horizontal overflow.

============================================================
6. PAGE HEADER
============================================================

Header contains:

Products

Subtitle:

Manage your product catalog and keep up to date.

Primary action:

+ Add Product

The Add Product button opens the finalized Add Product overlay.

It must NOT navigate to a new page.

The underlying Products screen remains preserved.

============================================================
7. SEARCH + FILTER — FINAL CHANGE
============================================================

IMPORTANT:

Remove the separate category dropdown/filter from beside the search.

The search row must now contain:

[ Search ........................................ ] [ Filter ]

The Filter button is immediately next to the search field.

Use:

Search icon
Search input
Filter icon
Filters label

The Filter button opens the Product filter interface.

============================================================
8. CATEGORY FILTER MOVED INTO FILTER
============================================================

Category filtering is NO LONGER displayed as a separate control beside
the search.

Instead:

Search
+
Filter button

The Filter interface contains:

- Availability
- Category
- Favourites

Category selection happens inside the filter interface.

Do NOT display:

[ All Categories ▼ ]

as a separate control beside Search.

============================================================
9. FILTER INTERACTION
============================================================

Click:

[ Filters ]

Open a responsive filter popover / sheet consistent with BizCopilot.

Filter options:

Availability:
- All
- Available
- Unavailable

Category:
- All Categories
- category list

Favourite:
- All
- Favourites

The filter UI must be responsive:

Desktop:
popover / compact panel

Tablet:
responsive popover or sheet depending on available space

Mobile:
bottom sheet

Do not create a separate navigation page.

============================================================
10. STATUS FILTER CHIPS
============================================================

Below Search + Filter, retain the primary quick-access filters:

[ All Products 156 ]
[ Available 142 ]
[ Unavailable 14 ]
[ Favourites 28 ]

These are quick filters.

Category does NOT appear here as a separate chip.

Category is handled through Filters.

Selected state:

- BizCopilot purple background
- white text
- count badge integrated into chip

Unselected:

- white/light surface
- neutral border
- dark text

Availability uses semantic colors:

Available:
green

Unavailable:
red

Favourite:
yellow/gold star

============================================================
11. PRODUCT COUNT + VIEW SWITCH
============================================================

Show:

156 products

On the opposite side:

[ Grid View ] [ Table View ]

Selected view uses BizCopilot purple active styling.

Grid and Table are two representations of the same product collection.

Switching views must NOT reset:

- search
- filters
- pagination
- availability state
- favourite state

============================================================
12. GRID VIEW — FROZEN STRUCTURE
============================================================

Product cards must follow EXACTLY this structure:

IMAGE
↓
CATEGORY + FAVOURITE
↓
PRODUCT NAME
↓
PRICE + AVAILABILITY + TOGGLE

Visual structure:

┌───────────────────────────────┐
│ EDIT                       🗑 │
│                               │
│           IMAGE               │
│                               │
├───────────────────────────────┤
│ Category                 ☆    │
│                               │
│ Product Name                  │
│                               │
│ ₹120.00       Available  [●] │
└───────────────────────────────┘

============================================================
13. GRID CARD — IMAGE
============================================================

Image occupies the full available card width.

Use a consistent responsive aspect ratio.

Image must:

- preserve aspect ratio
- never stretch
- never distort
- scale with card width
- crop consistently when necessary

Do NOT hard-code image width.

Image height must derive from the responsive card width / aspect ratio.

============================================================
14. GRID CARD — EDIT / DELETE
============================================================

Edit:

small icon button in one top corner.

Delete:

small icon button in the opposite top corner.

No "..." menu.

No Actions dropdown.

No hidden action menu.

Edit and Delete are directly visible.

Edit icon:
pencil / edit outline icon.

Delete:
trash outline icon.

Maintain the same icon family used throughout BizCopilot.

============================================================
15. GRID CARD — CATEGORY + FAVOURITE
============================================================

Below image:

Category on the left.

Favourite icon on the right.

Example:

Beverages                         ☆

Favourite inactive:
outline star.

Favourite active:
filled gold/yellow star.

The favourite icon must remain visually aligned to the far right.

============================================================
16. GRID CARD — PRODUCT NAME
============================================================

Product Name receives the maximum available horizontal space.

This is important.

Do not artificially constrain the product name.

Do not create a narrow fixed-width name area.

Allow:

- long names
- wrapping when necessary
- natural text reflow

The card must adapt to longer names.

Do not allow the favourite icon or other elements to steal unnecessary
horizontal space from the product name.

============================================================
17. GRID CARD — PRICE + AVAILABILITY
============================================================

The bottom row MUST contain:

PRICE                    AVAILABILITY + TOGGLE

Example:

₹120.00                  Available [ ON ]

This is one horizontal row.

Do NOT place price on one line and availability on another line.

Do NOT place the toggle below the price.

Do NOT separate them into different sections.

Use flex/grid with flexible spacing.

============================================================
18. UNIT UNDER PRICE
============================================================

The Product card DOES NOT display:

"per Qty"

for normal quantity products.

However, for measurement-based products the unit must be shown under
the price where appropriate.

Examples:

₹120.00
Kg

₹70.00
Ltr

₹50.00
Meter

For Qty products:

₹120.00

Do not unnecessarily show:

per Qty

============================================================
19. AVAILABILITY
============================================================

Availability must appear directly beside the toggle.

Example:

Available [ ON ]

Unavailable [ OFF ]

The toggle controls Product Availability.

This is NOT Inventory.

It does not represent stock quantity.

Available means:

The product can currently be sold.

Unavailable means:

The product should not currently be sold.

============================================================
20. GRID COUNTS
============================================================

Default visible product count:

DESKTOP:
12 products

TABLET:
8 products

MOBILE:
4 products

These are DEFAULT CONTENT COUNTS for the viewport.

IMPORTANT:

Do NOT interpret this as:

"Make each card a fixed height so exactly 12 cards fit."

Instead:

The layout must calculate available viewport/content space.

The card dimensions remain fluid.

The number of visible products is controlled by responsive content
pagination.

============================================================
21. GRID RESPONSIVE LOGIC
============================================================

Desktop:

Default page size = 12 products.

Use a responsive multi-column grid.

The exact number of columns may adapt to available width.

Do not hard-code card widths.

4K monitor:

Cards can become larger because more horizontal space exists.

The grid must remain visually balanced.

13-inch laptop:

The same 12 products must fit into the intended viewport/content area
as defined by the responsive layout.

If vertical space becomes insufficient:

allow content scrolling.

Do NOT shrink the cards into unusable sizes merely to force 12 cards
into the viewport.

Tablet:

Default page size = 8 products.

Mobile:

Default page size = 4 products.

============================================================
22. TABLE VIEW — FROZEN STRUCTURE
============================================================

Table view does NOT use checkboxes.

Use sequence number.

Structure:

# | Product | Category | Price | Availability | Actions

No:

- checkbox
- Product Code
- Type/Unit column
- Created On
- Actions menu
- "..."

============================================================
23. TABLE ROW
============================================================

Example:

01 | [image] Cappuccino | Beverages | ₹120.00 | Available [ON] | ☆ ✎ 🗑

Product:

small responsive thumbnail
+
product name

Category:

category name

Price:

selling price

Measurement unit may appear under price when applicable.

Availability:

Available [ON]

Actions:

Favourite
Edit
Delete

============================================================
24. TABLE ACTION ORDER
============================================================

Actions MUST appear in this exact order:

1. Favourite
2. Edit
3. Delete

Favourite:

outline/filled star.

Edit:

pencil icon.

Delete:

trash icon.

No "..." menu.

No dropdown.

No additional action.

============================================================
25. EDIT PRODUCT BEHAVIOR
============================================================

IMPORTANT:

When Edit is clicked:

DO NOT navigate to another page.

DO NOT create a separate Edit Product design.

Open the SAME finalized Add Product screen used for creating products.

The Add Product overlay changes to:

Edit Product

and pre-populates all existing values.

Example:

Product image
Product name
Type
Selling price
Description
Barcode
Category

The same component is reused.

Therefore:

Add Product = same component
Edit Product = same component

Only:

Title
data
primary action label

change.

Primary action may become:

Save Changes

============================================================
26. ADD PRODUCT OVERLAY
============================================================

Use the previously frozen Add Product design.

It must open as:

Desktop:
centered overlay

Tablet:
responsive overlay

Mobile:
bottom sheet

Same sequential form:

Product Image
↓
Product Name
↓
Type / Unit
↓
Selling Price
↓
Description
↓
Barcode
↓
Category
↓
Cancel / Save

No More option.

No Preview.

No Inventory fields.

============================================================
27. DELETE BEHAVIOR
============================================================

Click Delete.

Open BizCopilot confirmation dialog.

Example:

Delete Product?

Are you sure you want to delete "Cappuccino"?

Actions:

Cancel
Delete Product

Delete action uses semantic danger styling.

Do not delete immediately without confirmation.

============================================================
28. TABLE PAGE SIZE
============================================================

Default rows per page:

DESKTOP:
12

TABLET:
10

MOBILE:
8

These are responsive defaults.

============================================================
29. TABLE RESPONSIVE ROW SIZING
============================================================

This is extremely important.

Do NOT use a fixed table row height.

Do NOT assume:

row-height = 70px

or any other fixed pixel value.

Rows must adapt to:

- viewport height
- available content height
- typography
- product image size
- device resolution
- responsive spacing

The table must calculate its available viewport/content area.

============================================================
30. 4K MONITOR BEHAVIOR
============================================================

On a 4K monitor:

Default:
12 rows.

Because the available viewport is large:

- table can use more vertical space
- row dimensions may be larger
- image thumbnails may scale appropriately
- typography may remain readable
- spacing can breathe more

Do NOT simply make the table tiny to force 12 rows into a small
fixed-height container.

============================================================
31. 13-INCH DESKTOP BEHAVIOR
============================================================

On a 13-inch laptop:

Default:
12 rows.

But available vertical space is smaller.

The table should remain readable.

If all 12 rows cannot fit:

ENABLE VERTICAL SCROLLING INSIDE THE TABLE CONTENT AREA.

The table header should remain visible where appropriate.

Do NOT shrink rows below usable dimensions.

Do NOT shrink typography unnaturally.

============================================================
32. SCROLLBAR RULE
============================================================

The application should NOT display unnecessary permanent scrollbars.

Use natural scrolling.

If content fits:
no scrollbar.

If content exceeds available viewport:
scrolling is allowed.

For table content on smaller vertical screens:

use an internal scrollable table body.

For the entire page:

avoid unnecessary nested scroll containers.

The scrollbar should only exist when content actually requires it.

============================================================
33. TABLE MOBILE BEHAVIOR
============================================================

Mobile default:

8 rows.

Do NOT force the full desktop table width onto mobile.

The table must remain readable.

Use responsive table layout.

If horizontal space becomes insufficient:

reflow the row into a compact mobile representation while preserving
the same information hierarchy.

Do NOT hide essential actions.

Favourite
Edit
Delete

must remain accessible.

============================================================
34. GRID / TABLE PAGINATION
============================================================

Pagination must reflect the responsive page size.

Desktop:

12 per page.

Tablet:

Grid:
8

Table:
10

Mobile:

Grid:
4

Table:
8

Pagination automatically recalculates total pages.

Example:

156 products / 12
→ 13 pages

156 / 8
→ 20 pages

156 / 4
→ 39 pages

============================================================
35. PAGINATION RESPONSIVENESS
============================================================

Desktop can display:

Previous
1
2
3
...
13
Next

Tablet:

compact pagination.

Mobile:

compact pagination.

Do not allow pagination controls to overflow horizontally.

Use responsive spacing.

============================================================
36. NO UNNECESSARY SCROLLBAR
============================================================

The Product screen should feel like a clean application workspace.

Avoid:

- permanent page scrollbar inside cards
- nested unnecessary scrollbars
- horizontal scrolling
- double vertical scroll areas

Scrolling is only introduced when the available viewport cannot
comfortably contain the content.

============================================================
37. RIGHT-SIDE PANEL
============================================================

Desktop:

Right contextual rail may contain:

Quick Actions

- Categories
- Import Products
- Export Products

Product Summary

- Total Products
- Available
- Unavailable
- Categories
- Favourites

Tips

Short useful product-management tips.

Upcoming V2 & V3

Future roadmap.

IMPORTANT:

Do NOT introduce Inventory V1 functionality into the current product
screen.

Roadmap items can reference future inventory functionality, but it
must remain clearly future functionality.

============================================================
38. TABLET RIGHT PANEL
============================================================

Tablet may retain the contextual right panel if sufficient horizontal
space exists.

If viewport becomes narrower:

the panel must responsively collapse/reflow.

Never cause:

- horizontal overflow
- squeezed product cards
- unreadable content

============================================================
39. MOBILE RIGHT PANEL
============================================================

Do NOT keep the desktop right rail beside the Product grid on mobile.

Move secondary contextual information into an appropriate responsive
pattern.

The core Product workflow must remain the priority.

============================================================
40. MOBILE NAVIGATION
============================================================

Use bottom navigation:

Dashboard
Billing
Products
Customers
More

Products active.

Keep it fixed/sticky to the bottom safe area.

Content must account for bottom navigation so the last product/card is
not hidden behind it.

============================================================
41. TABLET NAVIGATION
============================================================

Use the same bottom navigation.

Dashboard
Billing
Products
Customers
More

Products active.

Do not use the desktop left sidebar.

============================================================
42. DESKTOP NAVIGATION
============================================================

Use the existing BizCopilot left navigation.

Do not change the existing navigation structure.

============================================================
43. FILTERS
============================================================

Search field:

Search by product name or barcode...

Immediately next to it:

[ Filters ]

Do NOT show:

[ All Categories ▼ ]

beside search.

Category selection is inside Filters.

============================================================
44. FILTER SHEET CONTENT
============================================================

Filters:

Availability
- All
- Available
- Unavailable

Category
- All Categories
- dynamic categories

Favourite
- All
- Favourites

Apply
Reset

Use the appropriate existing BizCopilot interaction pattern.

============================================================
45. PRODUCT CARD STATES
============================================================

Every card supports:

Normal
Favourite
Unavailable
Hover
Focus
Pressed
Disabled where appropriate

Available:

green status
toggle ON

Unavailable:

red status
toggle OFF

Favourite:

gold star

============================================================
46. RESPONSIVE CARD WIDTH
============================================================

Cards must NEVER have a fixed width.

Use responsive grid tracks.

Conceptually:

repeat(auto-fit / auto-fill, minmax(...))

or equivalent responsive layout.

The actual minimum width must be derived from the BizCopilot design
system rather than arbitrary hard-coded screenshot dimensions.

Cards expand when more space is available.

Cards shrink when less space is available.

============================================================
47. RESPONSIVE IMAGE SIZE
============================================================

Image size is derived from card width.

Use aspect-ratio.

Do NOT set:

width: 180px
height: 120px

for all devices.

Instead:

image width = card width

image height = responsive aspect ratio.

============================================================
48. RESPONSIVE TYPOGRAPHY
============================================================

Use the existing BizCopilot typography tokens.

Typography should remain readable across:

- mobile
- tablet
- laptop
- desktop
- 4K

Use fluid typography where necessary.

Long names must wrap naturally.

Do not use excessive truncation.

============================================================
49. RESPONSIVE SPACING
============================================================

Spacing must use the existing BizCopilot spacing system.

Spacing should adapt between:

Mobile
Tablet
Desktop

Do not hard-code every gap in pixels.

Use responsive design tokens.

============================================================
50. COLORS
============================================================

Use the existing BizCopilot palette.

Primary:
BizCopilot Purple

Surface:
White / very light neutral

Border:
Soft neutral

Text:
Dark neutral

Muted:
Secondary gray

Available:
Green

Unavailable:
Red

Favourite:
Gold/Yellow

Delete:
Semantic danger red

Do not introduce unrelated colors.

============================================================
51. ICON SYSTEM
============================================================

Use one consistent outline icon family.

Preferred:

Lucide or equivalent.

Icons:

Search
Filter
Grid
Table
Star
Edit
Trash
Chevron
Plus
Dashboard
Billing
Products
Customers
More

Do not use emoji.

Do not mix icon families.

============================================================
52. Figma-Level COMPONENT STRUCTURE
============================================================

Create reusable components:

ProductPage
ProductHeader
SearchBar
FilterButton
FilterPanel
QuickFilterChip
ViewSwitcher
ProductGrid
ProductCard
ProductImage
ProductCategory
FavouriteButton
ProductPrice
AvailabilityBadge
AvailabilityToggle
ProductTable
ProductTableRow
ProductActions
Pagination
QuickActionsPanel
ProductSummary
TipsPanel
RoadmapPanel
BottomNavigation
SidebarNavigation
AddEditProductModal
DeleteConfirmationDialog

Components must use the same design tokens.

============================================================
53. COMPONENT STATES
============================================================

Every interactive component should define:

Default
Hover
Focus
Active
Selected
Disabled
Loading
Error where applicable

Buttons:

Default
Hover
Pressed
Disabled

Toggle:

ON
OFF
Disabled

Favourite:

Inactive
Active

Availability:

Available
Unavailable

============================================================
54. PRODUCT CARD EXACT HIERARCHY
============================================================

THIS STRUCTURE IS FROZEN.

Image

↓
Category ---------------- Favourite

↓
Product Name

↓
Price ------------------- Available + Toggle

Nothing else should be inserted between these elements.

============================================================
55. NO INVENTORY
============================================================

V1 Product screen MUST NOT show:

Stock
Current stock
Opening stock
Low stock
Reorder level
Inventory valuation
Warehouse
Supplier stock
Purchase stock

Product availability is NOT inventory.

============================================================
56. NO PRODUCT CODE
============================================================

Product Code such as:

PRD001

must NOT appear anywhere in the visible Product UI.

It may exist internally in the domain model.

============================================================
57. NO TYPE / UNIT IN TABLE
============================================================

Do not add:

Type
Unit
Qty
Kg
Ltr
Meter
Pack

as a separate table column.

The unit may only appear contextually under price where appropriate.

============================================================
58. VISUAL FIDELITY
============================================================

The generated result should visually reproduce the approved mock screen:

- same overall proportions
- same hierarchy
- same card style
- same purple accent
- same clean whitespace
- same rounded surfaces
- same icon treatment
- same search/filter placement
- same product card hierarchy
- same availability treatment
- same favourite treatment
- same edit/delete positioning
- same navigation style

Do not add decorative elements that are not present.

============================================================
59. RESPONSIVE ACCEPTANCE TEST
============================================================

Test the design continuously across:

320px mobile
375px mobile
430px mobile
600px tablet
768px tablet
834px tablet
1024px tablet
1280px laptop
1440px desktop
1920px desktop
2560px desktop
3840px 4K

Do NOT design only for these exact widths.

The UI must work between them.

============================================================
60. GRID ACCEPTANCE TEST
============================================================

Desktop:
default 12 products.

Tablet:
default 8 products.

Mobile:
default 4 products.

Cards must resize naturally.

Do not force fixed card dimensions.

============================================================
61. TABLE ACCEPTANCE TEST
============================================================

Desktop:
default 12 rows.

Tablet:
default 10 rows.

Mobile:
default 8 rows.

Rows must remain readable.

If viewport height cannot accommodate all default rows:

allow internal table scrolling.

Do not shrink rows into unusable dimensions.

============================================================
62. 4K ACCEPTANCE TEST
============================================================

At 4K:

12 table rows remain the default.

The table may use larger responsive row/image dimensions.

The Product grid may use larger cards.

Do not make the entire UI microscopic simply because the screen is large.

============================================================
63. 13-INCH ACCEPTANCE TEST
============================================================

At 13-inch desktop:

12 table rows remain the default page size.

If vertical space is insufficient:

table body scrolls.

Do not shrink typography excessively.

Do not hide information.

============================================================
64. EDIT ACCEPTANCE TEST
============================================================

Click Edit.

Expected:

Products screen remains underneath.

Add/Edit Product overlay opens.

Existing product data is populated.

Title:

Edit Product

Primary action:

Save Changes

The same Add Product component is reused.

============================================================
65. DELETE ACCEPTANCE TEST
============================================================

Click Delete.

Expected:

Confirmation dialog.

No immediate deletion.

Actions:

Cancel
Delete Product

============================================================
66. PERFORMANCE / UX PRINCIPLE
============================================================

The Product screen must feel:

Fast
Clean
Premium
Simple
Business-focused

The UI must not feel like an ERP.

Do not add unnecessary configuration.

============================================================
67. FINAL FROZEN STRUCTURE
============================================================

PRODUCT PAGE

Header
↓
Search + Filters
↓
Quick Status Filters
↓
Product Count + Grid/Table
↓
Product Content
↓
Pagination

GRID CARD

Image
↓
Category + Favourite
↓
Product Name
↓
Price + Availability + Toggle

TABLE

Sequence
↓
Product
↓
Category
↓
Price
↓
Availability + Toggle
↓
Favourite + Edit + Delete

============================================================
68. FINAL NON-NEGOTIABLE RULE
============================================================

The screenshot/mockup is a VISUAL REFERENCE.

Do NOT reproduce it using static coordinates.

Reproduce the DESIGN SYSTEM and the RESPONSIVE RULES.

The implementation must remain visually consistent while the viewport
changes.

Images must resize.
Cards must resize.
Fonts must adapt.
Spacing must adapt.
Containers must adapt.
Fields must adapt.
Table rows must adapt.
Navigation must adapt.
Pagination must adapt.

No unnecessary scrollbar.

But scrolling MUST be available when the viewport cannot contain the
required content.

The application must never sacrifice usability simply to force a fixed
number of elements into a fixed-height screenshot.

============================================================
69. FINAL OUTPUT REQUIREMENT
============================================================

Generate the Product screen with:

DESKTOP:
Grid = 12
Table = 12

TABLET:
Grid = 8
Table = 10

MOBILE:
Grid = 4
Table = 8

Search + Filter:
Filter immediately beside Search.

Category:
inside Filter panel.

Grid card:
Image
Category + Favourite
Product Name
Price + Availability + Toggle

Actions:
Edit + Delete directly visible.

Table:
Sequence number
Product
Category
Price
Availability + Toggle
Favourite
Edit
Delete

Edit:
opens Add Product screen in Edit Product mode.

No:
checkbox
Product Code
Type/Unit table column
...
inventory fields
unnecessary scrollbar
fixed pixel layout

This is the FINAL FROZEN Product screen specification.

============================================================
ICON SYSTEM — FIGMA LEVEL
============================================================

Use ONE consistent icon library throughout BizCopilot.

Preferred icon family:
Lucide Icons or an equivalent clean outline SVG icon family.

All icons must use the same visual language:
- outline style
- consistent stroke weight
- rounded stroke caps/joins
- no mixed icon families
- no emoji
- no filled decorative icons unless explicitly specified
- icons must be semantically recognizable

ICON MAPPING

Global Navigation:
Dashboard       → House
Billing         → Receipt / Shopping Cart
Products        → Package / Box
Customers       → Users
More            → Grid 2x2 / MoreHorizontal

Page Header:
Add Product     → Plus
Back            → ArrowLeft where applicable

Search / Filter:
Search          → Search
Filter          → SlidersHorizontal / Filter
Dropdown        → ChevronDown
Close           → X

View Switch:
Grid View       → LayoutGrid
Table View      → List / TableProperties

Product Card:
Edit            → Pencil
Delete          → Trash2
Favourite       → Star

Product Category:
Use the existing BizCopilot category icon system.
Category icons must remain visually consistent with the Category screen.

Availability:
Available       → no separate icon required
Unavailable     → no separate icon required
Toggle          → native/custom BizCopilot switch component

Pagination:
Previous        → ChevronLeft
Next            → ChevronRight
More pages      → Ellipsis

Filter Panel:
Availability    → CircleCheck / appropriate semantic icon
Category        → Tags / Folder / existing category icon
Favourite       → Star

Quick Actions:
Categories      → Folder / Tags
Import          → Upload
Export          → Download

Product Summary:
Use minimal icons only where already established by the
BizCopilot design system.

============================================================
ICON DIMENSION RULES
============================================================

Do NOT hard-code icon dimensions independently for every screen.

Use the existing BizCopilot icon-size tokens.

Icons must scale appropriately with their component.

Typical hierarchy:

Navigation icons:
→ medium

Primary action icons:
→ medium

Card action icons:
→ compact

Inline icons:
→ small

Do not make icons disproportionately large compared with text.

============================================================
ICON PLACEMENT
============================================================

Product Card:

Edit:
top-left corner of image area.

Delete:
top-right corner of image area.

Category:
below image, aligned left.

Favourite:
same row as Category, aligned right.

Availability:
status label and toggle aligned together in the
bottom-right portion of the card.

Price:
bottom-left portion of the same row.

============================================================
ICON STATES
============================================================

Favourite inactive:
outline Star

Favourite active:
filled Star
BizCopilot gold/yellow semantic color

Edit:
neutral/purple icon

Delete:
semantic danger/red icon

Search:
neutral icon

Filter:
neutral icon

Selected navigation:
BizCopilot purple

Unselected navigation:
neutral/dark muted

Selected Grid/Table:
BizCopilot purple

Unselected Grid/Table:
neutral

============================================================
ICON ACCESSIBILITY
============================================================

Every icon-only button MUST have an accessible label.

Examples:

Edit:
"Edit product"

Delete:
"Delete product"

Favourite:
"Add to favourites"
or
"Remove from favourites"

Search:
"Search products"

Filter:
"Filter products"

Grid:
"Grid view"

Table:
"Table view"

Previous:
"Previous page"

Next:
"Next page"

Icons must never be the only visual indication for critical states.

============================================================
PRODUCT SCREEN — COMPLETE UI STRUCTURE
============================================================

The Product screen MUST follow the exact same BizCopilot visual
language and structural pattern as the Category screen.

Product and Category are sibling management screens.

Do NOT create a separate design language for Products.

============================================================
1. OVERALL PAGE STRUCTURE
============================================================

The Product screen follows this hierarchy:

PAGE HEADER
↓
SEARCH + FILTER
↓
QUICK STATUS FILTERS
↓
CONTENT HEADER + VIEW SWITCH
↓
PRODUCT CONTENT
↓
PAGINATION

Desktop may additionally display the existing contextual right rail.

Tablet and Mobile use the responsive navigation pattern.

============================================================
2. DESKTOP STRUCTURE
============================================================

Desktop:

┌────────────────────────────────────────────────────────────────────┐
│ LEFT SIDEBAR │ Products                              + Add Product │
│              │ Manage your product catalog...                     │
│              │                                                     │
│              │ Search by product name or barcode... [ Filters ]    │
│              │                                                     │
│              │ [All Products] [Available] [Unavailable] [Favourites]│
│              │                                                     │
│              │ 156 products                    [Grid] [Table]      │
│              │                                                     │
│              │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │
│              │ │ Card │ │ Card │ │ Card │ │ Card │ │ Card │      │
│              │ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘      │
│              │                                                     │
│              │ Pagination                                          │
└────────────────────────────────────────────────────────────────────┘

The exact dimensions must be fluid.

The ASCII layout is structural only.

============================================================
3. TABLET STRUCTURE
============================================================

Tablet:

┌───────────────────────────────────────────────────────┐
│ Products                              + Add Product   │
│ Manage your product catalog...                       │
│                                                       │
│ Search........................ [ Filters ]            │
│                                                       │
│ [All Products] [Available] [Unavailable] [Favourites]│
│                                                       │
│ 156 products                    [Grid] [Table]        │
│                                                       │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│ │ Product│ │ Product│ │ Product│ │ Product│           │
│ └────────┘ └────────┘ └────────┘ └────────┘           │
│                                                       │
│ Pagination                                           │
│                                                       │
│                 BOTTOM NAVIGATION                    │
└───────────────────────────────────────────────────────┘

Tablet uses bottom navigation.

The desktop sidebar must NOT appear.

============================================================
4. MOBILE STRUCTURE
============================================================

Mobile:

┌───────────────────────────────┐
│ Products              +       │
│ Manage your product catalog  │
│                               │
│ Search.............. Filters  │
│                               │
│ [All] [Available] [Unavailable]│
│ [Favourites]                  │
│                               │
│ 156 products          [Grid]  │
│                               │
│ ┌────────┐ ┌────────┐         │
│ │Product │ │Product │         │
│ │ Card   │ │ Card   │         │
│ └────────┘ └────────┘         │
│                               │
│ Pagination                    │
│                               │
│       BOTTOM NAVIGATION       │
└───────────────────────────────┘

The exact mobile arrangement must adapt naturally to available width.

Do NOT reproduce the ASCII dimensions literally.

============================================================
5. PAGE HEADER
============================================================

Title:

Products

Subtitle:

Manage your product catalog and keep up to date.

Primary action:

+ Add Product

Use the same primary button component as Category:

+ Add Category

The Add Product button opens the frozen Add/Edit Product overlay.

It does NOT navigate to a separate page.

============================================================
6. SEARCH + FILTER
============================================================

Immediately below the page header:

[ Search by product name or barcode... ] [ Filters ]

Search includes:

Search icon
+
text input

Filter includes:

Filter icon
+
Filters label

The Filter button is immediately next to Search.

DO NOT display:

[ All Categories ▼ ]

as a separate control beside Search.

============================================================
7. FILTER CONTENT
============================================================

The Filter panel contains:

Availability:

All
Available
Unavailable

Category:

All Categories
Category list

Favourite:

All
Favourites

The Category filter belongs INSIDE Filters.

Desktop:

popover.

Tablet:

responsive popover/sheet.

Mobile:

bottom sheet.

Use the same filter component pattern as Category.

============================================================
8. QUICK FILTERS
============================================================

Below Search + Filters:

[ All Products 156 ]
[ Available 142 ]
[ Unavailable 14 ]
[ Favourites 28 ]

Selected:

BizCopilot purple.

Unselected:

white/light surface with neutral border.

Availability:

Available → green semantic styling.

Unavailable → red semantic styling.

Favourite:

gold/yellow star.

============================================================
9. CONTENT HEADER
============================================================

Display:

156 products

On the opposite side:

[ Grid View ] [ Table View ]

Use the same ViewSwitcher component as Category.

Selected view:

BizCopilot purple.

Unselected view:

neutral/light.

============================================================
10. PRODUCT GRID — FROZEN CARD STRUCTURE
============================================================

The Product card structure is ABSOLUTELY FROZEN.

┌──────────────────────────────┐
│ ✎                         🗑 │
│                              │
│            IMAGE             │
│                              │
│ Category                 ☆   │
│                              │
│ Product Name                 │
│                              │
│ ₹120.00     Available [ON] │
└──────────────────────────────┘

Exact hierarchy:

1. Product image
2. Category + Favourite
3. Product name
4. Price + Availability + Toggle

============================================================
11. PRODUCT CARD — ACTIONS
============================================================

Edit:

Top-left corner of the image area.

Delete:

Top-right corner of the image area.

Use:

Edit → Pencil
Delete → Trash2

No:

- ...
- Actions menu
- dropdown
- bottom arrow
- hidden action menu

Both actions are always directly visible.

============================================================
12. PRODUCT CARD — IMAGE
============================================================

Image occupies the available card width.

Use responsive aspect-ratio.

Image must:

- scale with card width
- preserve aspect ratio
- never distort
- use consistent object-fit behavior

Do NOT use fixed image width/height.

============================================================
13. PRODUCT CARD — CATEGORY
============================================================

Below the image:

Category

Category is left aligned.

Favourite is right aligned on the SAME row.

Example:

Beverages                         ☆

Use the same category icon system established for Products.

============================================================
14. PRODUCT CARD — FAVOURITE
============================================================

Favourite:

right side of the Category row.

Inactive:

outline Star.

Active:

filled gold/yellow Star.

Favourite is directly clickable.

Do not place Favourite elsewhere on the card.

============================================================
15. PRODUCT CARD — PRODUCT NAME
============================================================

Product Name receives the maximum available width.

This is important.

The name must NOT be unnecessarily constrained.

Long product names must wrap naturally.

Do not allow the favourite control or other metadata to unnecessarily
reduce the product-name area.

Do not use aggressive truncation.

============================================================
16. PRODUCT CARD — PRICE + AVAILABILITY
============================================================

The final row is ONE horizontal row:

Price                         Available [Toggle]

Example:

₹120.00                       Available [ON]

Price:

left aligned.

Availability + Toggle:

right aligned.

Do NOT put Availability on another line.

Do NOT put the Toggle underneath.

============================================================
17. PRODUCT CARD — MEASUREMENT UNIT
============================================================

For measurement-based products, show the relevant unit underneath
the price where applicable.

Examples:

₹120.00
Kg

₹70.00
Ltr

₹50.00
Meter

For normal quantity products:

₹120.00

Do NOT show:

per Qty

for normal quantity products.

============================================================
18. PRODUCT AVAILABILITY
============================================================

Availability is NOT inventory.

Available:

green semantic state
+
toggle ON

Unavailable:

red semantic state
+
toggle OFF

The toggle controls whether the product can currently be sold.

It does NOT represent:

stock
quantity
inventory level
reorder level

============================================================
19. PRODUCT TYPE / UNIT
============================================================

Product creation determines the selling measurement.

Examples:

Bread Omelette:
Qty

Carrot:
Kg

Milk:
Ltr

Wire:
Meter

This information is configured when creating the Product.

There is NO separate unit configuration screen.

============================================================
20. BILLING QUANTITY BEHAVIOR
============================================================

The Product's configured type determines the billing control.

For:

Qty

use:

[ − ] 1 [ + ]

The default quantity after adding is:

1

For measurement products such as:

Kg
Ltr
Meter

use a text-entry field for the measurement.

Examples:

0.560 kg
1.500 ltr
2.000 meter

The user can enter the measurement directly.

Do NOT use + / − controls for Kg/Ltr/Meter.

The same measurement-entry interaction is available where required
in the Product Card / Billing flow according to the frozen Billing UI.

============================================================
21. PRODUCT CREATION
============================================================

Click:

+ Add Product

opens the frozen Add Product overlay.

The form contains:

Product Image
Product Name
Type / Unit
Selling Price
Description
Barcode
Category

No separate configuration is required for:

Qty
Kg
Ltr
Meter

The selected Type / Unit determines the billing behavior.

============================================================
22. EDIT PRODUCT
============================================================

Click Edit from Grid or Table.

Open the SAME Add Product component.

Mode:

Edit Product

Pre-populate:

Image
Name
Type / Unit
Price
Description
Barcode
Category

Primary action:

Save Changes

Do NOT create a separate Edit Product screen.

============================================================
23. DELETE PRODUCT
============================================================

Click Delete.

Open confirmation dialog:

Delete Product?

Are you sure you want to delete "Cappuccino"?

Actions:

Cancel
Delete Product

No immediate deletion.

============================================================
24. PRODUCT GRID PAGE SIZE
============================================================

DEFAULT:

Desktop:
12 products

Tablet:
8 products

Mobile:
4 products

These values control pagination.

They do NOT define fixed card dimensions.

============================================================
25. PRODUCT GRID RESPONSIVENESS
============================================================

Use responsive CSS Grid.

Cards must be fluid.

Do NOT hard-code:

card width
card height
image width
image height

The number of columns adapts to available width.

The card hierarchy remains unchanged.

============================================================
26. PRODUCT GRID SCROLL RULE
============================================================

Default page size:

NO unnecessary internal scrollbar.

If the user explicitly selects a larger page size:

Example:

8 → 20

then:

- page size becomes 20
- pagination recalculates
- current page resets to 1
- cards remain usable
- scrolling appears only when required

Do NOT shrink cards excessively.

============================================================
27. PRODUCT TABLE VIEW
============================================================

Product Table View:

# | Product | Category | Price | Availability | Actions

No checkbox.

No Product Code.

No Type / Unit column.

No Created On.

No unnecessary columns.

============================================================
28. PRODUCT TABLE — PRODUCT COLUMN
============================================================

Product column contains:

Responsive thumbnail
+
Product Name

Example:

[image] Cappuccino

Do not display Product Code.

============================================================
29. PRODUCT TABLE — CATEGORY
============================================================

Category name.

Use the same category naming and typography system as Grid View.

============================================================
30. PRODUCT TABLE — PRICE
============================================================

Display:

₹120.00

For measurement-based products, the relevant unit may appear
contextually beneath the price.

Do NOT create a separate Type/Unit column.

============================================================
31. PRODUCT TABLE — AVAILABILITY
============================================================

Display:

Available [ON]

or:

Unavailable [OFF]

Use the same availability toggle as Grid View.

============================================================
32. PRODUCT TABLE — ACTIONS
============================================================

Exact action order:

Favourite
Edit
Delete

Favourite:

Star

Edit:

Pencil

Delete:

Trash2

No:

- ...
- action dropdown
- checkbox
- hidden action menu

============================================================
33. PRODUCT TABLE DEFAULT PAGE SIZE
============================================================

Desktop:
12 rows

Tablet:
10 rows

Mobile:
8 rows

============================================================
34. PRODUCT TABLE SCROLL RULE
============================================================

At default page size:

NO unnecessary internal scrollbar.

If the user explicitly selects a larger page size:

Example:

12 → 25

then:

- pagination recalculates
- current page resets to 1
- table body becomes scrollable if required

NON-NEGOTIABLE:

ONLY THE TABLE BODY / ROWS SCROLL.

THE TABLE HEADER REMAINS FIXED.

Pagination remains outside the scrollable table body.

============================================================
35. PRODUCT TABLE HEADER
============================================================

Fixed header:

# | Product | Category | Price | Availability | Actions

When rows scroll:

the header remains visible.

============================================================
36. PRODUCT TABLE ROW HEIGHT
============================================================

Do NOT use a globally fixed row height.

Rows adapt to:

- viewport
- thumbnail size
- typography
- available width
- content
- responsive spacing

Do not compress rows below usable dimensions.

============================================================
37. PRODUCT PAGINATION
============================================================

Pagination recalculates from:

Total Products
÷
Selected page size

Examples:

156 products / 12
→ 13 pages

156 / 8
→ 20 pages

156 / 4
→ 39 pages

Pagination resets to page 1 when page size changes.

============================================================
38. SEARCH / FILTER + PAGINATION
============================================================

Search/filter changes the result count.

Pagination recalculates.

Example:

156 products
↓
Available filter
↓
142 products
↓
Desktop 12/page
↓
12 pages

If the current page becomes invalid:

reset to page 1.

============================================================
39. PAGE-SIZE CONTROL
============================================================

Use the existing BizCopilot page-size component.

Desktop:

Rows per page: [12 ▼]

Tablet:

Rows per page: [8 / 10 ▼]

Mobile:

compact responsive control.

Possible larger values:

8
10
12
20
25
50

The selected page size must be respected until changed.

============================================================
40. RIGHT-SIDE CONTEXTUAL PANEL
============================================================

Desktop may display:

Quick Actions:

Categories
Import Products
Export Products

Product Summary:

Total Products
Available
Unavailable
Categories
Favourites

Tips:

Use search or filters to quickly find products.
Mark favourites to show in billing faster.
Keep your product catalog updated.

Upcoming V2 & V3:

Future functionality only.

IMPORTANT:

Do NOT introduce V1 Inventory functionality.

Do NOT show:

Stock
Low Stock
Reorder Level
Inventory Value

============================================================
41. ADD PRODUCT IS NOT A QUICK ACTION
============================================================

Add Product belongs ONLY in the page header:

+ Add Product

Do NOT duplicate it inside Quick Actions.

============================================================
42. TABLET CONTEXTUAL PANEL
============================================================

If sufficient horizontal space exists:

Contextual panel may remain.

If insufficient:

collapse/reflow.

Never cause horizontal overflow.

============================================================
43. MOBILE CONTEXTUAL PANEL
============================================================

Do not place the desktop right rail beside the Product content.

Secondary information must collapse/reflow according to the established
BizCopilot mobile pattern.

Core billing/product-management workflow has priority.

============================================================
44. DESKTOP NAVIGATION
============================================================

Use the existing BizCopilot left sidebar.

Products is active.

Do not redesign the sidebar.

============================================================
45. TABLET / MOBILE NAVIGATION
============================================================

Use the existing BizCopilot bottom navigation.

Items:

Dashboard
Billing
Products
Customers
More

Products is active.

Bottom navigation respects safe areas.

============================================================
46. ICON SYSTEM
============================================================

Use one consistent outline SVG icon family.

Preferred:

Lucide or equivalent.

Required:

Search
Filter
Grid
Table
Plus
Star
Pencil
Trash2
ChevronLeft
ChevronRight
Ellipsis
X

No emoji.

No mixed icon families.

============================================================
47. ICON PLACEMENT
============================================================

Grid Card:

Edit → top-left
Delete → top-right

Category → below image, left

Favourite → same row, right

Price → bottom-left

Availability + Toggle → same bottom row, right

Table:

Favourite → first action
Edit → second
Delete → third

============================================================
48. ACCESSIBILITY
============================================================

Icon-only controls require accessible labels.

Examples:

Edit product
Delete product
Add to favourites
Remove from favourites
Search products
Filter products
Grid view
Table view
Previous page
Next page
Activate product
Deactivate product

============================================================
49. RESPONSIVE BREAKPOINTS
============================================================

Support:

Mobile:
< 768px

Tablet:
768px–1023px

Desktop:
≥ 1024px

These are layout modes only.

The UI must remain fluid between breakpoints.

============================================================
50. RESPONSIVE DESIGN
============================================================

ONE Product screen.

Do NOT design three unrelated screens.

Desktop / Tablet / Mobile use the same:

- component hierarchy
- card structure
- table structure
- typography
- colors
- icons
- controls
- behavior

Only adapt:

- dimensions
- spacing
- grid columns
- navigation
- contextual panel
- typography scaling
- page-size defaults
- pagination density
- scrolling

============================================================
51. NO STATIC PIXEL LAYOUT
============================================================

Do NOT implement the screenshot using:

- absolute coordinates
- fixed card widths
- fixed card heights
- fixed image dimensions
- fixed row heights
- fixed modal dimensions

Use:

CSS Grid
Flexbox
fluid containers
intrinsic sizing
clamp()
min()
max()
aspect-ratio
responsive tokens

============================================================
52. TYPOGRAPHY
============================================================

Use the same BizCopilot typography system as Category.

Page title:

strong heading.

Subtitle:

secondary text.

Product name:

medium/semibold.

Price:

strong readable text.

Status:

compact semantic text.

============================================================
53. COLORS
============================================================

Primary:

BizCopilot Purple.

Available:

Green.

Unavailable:

Red.

Favourite:

Gold/Yellow.

Delete:

Danger Red.

Background:

White / very light neutral.

Border:

Soft neutral.

Text:

Dark neutral.

Muted:

Secondary neutral.

============================================================
54. PRODUCT SCREEN — FINAL FLOW
============================================================

HEADER
↓
Products
↓
Manage your product catalog and keep up to date.
↓
+ Add Product

SEARCH
↓
Search by product name or barcode...
+
Filters

QUICK FILTERS
↓
All Products
Available
Unavailable
Favourites

CONTENT HEADER
↓
156 products
+
Grid / Table

GRID:

Edit + Delete
↓
Image
↓
Category + Favourite
↓
Product Name
↓
Price + Available + Toggle

TABLE:

#
Product
Category
Price
Availability + Toggle
Favourite
Edit
Delete

PAGINATION

Rows per page
+
Page navigation

============================================================
55. FINAL FROZEN PRODUCT CARD
============================================================

┌──────────────────────────────┐
│ ✎                         🗑 │
│                              │
│            IMAGE             │
│                              │
│ Category                 ☆   │
│                              │
│ Product Name                 │
│                              │
│ ₹120.00     Available [ON] │
└──────────────────────────────┘

This structure MUST remain unchanged across:

Desktop
Tablet
Mobile

Only dimensions and spacing adapt.

============================================================
56. PRODUCT + CATEGORY CONSISTENCY
============================================================

Product and Category screens must share:

- Page header
- Search
- Filters
- Quick filters
- View switcher
- Card treatment
- Table treatment
- Page-size selector
- Pagination
- Navigation
- Typography
- Colors
- Icons
- Responsive behavior
- Scroll behavior
- Modal behavior

Do NOT introduce a new interaction pattern on Product.

============================================================
57. FINAL ACCEPTANCE TEST
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

✓ Product structure unchanged
✓ Product card hierarchy unchanged
✓ Image responsive
✓ Product name gets maximum usable space
✓ Price + availability remain on same row
✓ Favourite remains beside category
✓ Edit/Delete remain directly visible
✓ No "..." menu
✓ No unnecessary table columns
✓ No Type/Unit table column
✓ Search + Filter arrangement correct
✓ Category filter is inside Filters
✓ Correct page-size defaults
✓ No unnecessary scrollbar
✓ Larger page size enables scrolling when required
✓ Table header remains fixed
✓ Only table rows scroll
✓ Pagination remains outside table body
✓ Pagination recalculates
✓ Add Product opens Add/Edit Product overlay
✓ Edit opens the same Add Product component
✓ Delete opens confirmation
✓ Desktop uses sidebar
✓ Tablet/Mobile use bottom navigation
✓ No horizontal overflow
✓ No static screenshot-specific layout

============================================================
FINAL PRODUCT SCREEN
============================================================

The Product screen is a responsive management screen with:

Header
↓
Search + Filters
↓
Quick Status Filters
↓
Product Count + Grid/Table Switch
↓
Product Grid/Table
↓
Pagination

GRID CARD:

Image
↓
Category + Favourite
↓
Product Name
↓
Price + Available + Toggle

TABLE:

Sequence
↓
Product
↓
Category
↓
Price
↓
Availability + Toggle
↓
Favourite + Edit + Delete

ADD:

+ Add Product
↓
Add/Edit Product overlay

EDIT:

Edit
↓
Same Add/Edit Product overlay
↓
Edit mode
↓
Save Changes

DELETE:

Delete
↓
Confirmation

This is the FINAL FROZEN PRODUCT SCREEN STRUCTURE.

============================================================
PRODUCT SCREEN — COMPLETE UI STRUCTURE
============================================================

The Product screen MUST follow the exact same BizCopilot visual
language and structural pattern as the Category screen.

Product and Category are sibling management screens.

Do NOT create a separate design language for Products.

============================================================
1. OVERALL PAGE STRUCTURE
============================================================

The Product screen follows this hierarchy:

PAGE HEADER
↓
SEARCH + FILTER
↓
QUICK STATUS FILTERS
↓
CONTENT HEADER + VIEW SWITCH
↓
PRODUCT CONTENT
↓
PAGINATION

Desktop may additionally display the existing contextual right rail.

Tablet and Mobile use the responsive navigation pattern.

============================================================
2. DESKTOP STRUCTURE
============================================================

Desktop:

┌────────────────────────────────────────────────────────────────────┐
│ LEFT SIDEBAR │ Products                              + Add Product │
│              │ Manage your product catalog...                     │
│              │                                                     │
│              │ Search by product name or barcode... [ Filters ]    │
│              │                                                     │
│              │ [All Products] [Available] [Unavailable] [Favourites]│
│              │                                                     │
│              │ 156 products                    [Grid] [Table]      │
│              │                                                     │
│              │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │
│              │ │ Card │ │ Card │ │ Card │ │ Card │ │ Card │      │
│              │ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘      │
│              │                                                     │
│              │ Pagination                                          │
└────────────────────────────────────────────────────────────────────┘

The exact dimensions must be fluid.

The ASCII layout is structural only.

============================================================
3. TABLET STRUCTURE
============================================================

Tablet:

┌───────────────────────────────────────────────────────┐
│ Products                              + Add Product   │
│ Manage your product catalog...                       │
│                                                       │
│ Search........................ [ Filters ]            │
│                                                       │
│ [All Products] [Available] [Unavailable] [Favourites]│
│                                                       │
│ 156 products                    [Grid] [Table]        │
│                                                       │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│ │ Product│ │ Product│ │ Product│ │ Product│           │
│ └────────┘ └────────┘ └────────┘ └────────┘           │
│                                                       │
│ Pagination                                           │
│                                                       │
│                 BOTTOM NAVIGATION                    │
└───────────────────────────────────────────────────────┘

Tablet uses bottom navigation.

The desktop sidebar must NOT appear.

============================================================
4. MOBILE STRUCTURE
============================================================

Mobile:

┌───────────────────────────────┐
│ Products              +       │
│ Manage your product catalog  │
│                               │
│ Search.............. Filters  │
│                               │
│ [All] [Available] [Unavailable]│
│ [Favourites]                  │
│                               │
│ 156 products          [Grid]  │
│                               │
│ ┌────────┐ ┌────────┐         │
│ │Product │ │Product │         │
│ │ Card   │ │ Card   │         │
│ └────────┘ └────────┘         │
│                               │
│ Pagination                    │
│                               │
│       BOTTOM NAVIGATION       │
└───────────────────────────────┘

The exact mobile arrangement must adapt naturally to available width.

Do NOT reproduce the ASCII dimensions literally.

============================================================
5. PAGE HEADER
============================================================

Title:

Products

Subtitle:

Manage your product catalog and keep up to date.

Primary action:

+ Add Product

Use the same primary button component as Category:

+ Add Category

The Add Product button opens the frozen Add/Edit Product overlay.

It does NOT navigate to a separate page.

============================================================
6. SEARCH + FILTER
============================================================

Immediately below the page header:

[ Search by product name or barcode... ] [ Filters ]

Search includes:

Search icon
+
text input

Filter includes:

Filter icon
+
Filters label

The Filter button is immediately next to Search.

DO NOT display:

[ All Categories ▼ ]

as a separate control beside Search.

============================================================
7. FILTER CONTENT
============================================================

The Filter panel contains:

Availability:

All
Available
Unavailable

Category:

All Categories
Category list

Favourite:

All
Favourites

The Category filter belongs INSIDE Filters.

Desktop:

popover.

Tablet:

responsive popover/sheet.

Mobile:

bottom sheet.

Use the same filter component pattern as Category.

============================================================
8. QUICK FILTERS
============================================================

Below Search + Filters:

[ All Products 156 ]
[ Available 142 ]
[ Unavailable 14 ]
[ Favourites 28 ]

Selected:

BizCopilot purple.

Unselected:

white/light surface with neutral border.

Availability:

Available → green semantic styling.

Unavailable → red semantic styling.

Favourite:

gold/yellow star.

============================================================
9. CONTENT HEADER
============================================================

Display:

156 products

On the opposite side:

[ Grid View ] [ Table View ]

Use the same ViewSwitcher component as Category.

Selected view:

BizCopilot purple.

Unselected view:

neutral/light.

============================================================
10. PRODUCT GRID — FROZEN CARD STRUCTURE
============================================================

The Product card structure is ABSOLUTELY FROZEN.

┌──────────────────────────────┐
│ ✎                         🗑 │
│                              │
│            IMAGE             │
│                              │
│ Category                 ☆   │
│                              │
│ Product Name                 │
│                              │
│ ₹120.00     Available [ON] │
└──────────────────────────────┘

Exact hierarchy:

1. Product image
2. Category + Favourite
3. Product name
4. Price + Availability + Toggle

============================================================
11. PRODUCT CARD — ACTIONS
============================================================

Edit:

Top-left corner of the image area.

Delete:

Top-right corner of the image area.

Use:

Edit → Pencil
Delete → Trash2

No:

- ...
- Actions menu
- dropdown
- bottom arrow
- hidden action menu

Both actions are always directly visible.

============================================================
12. PRODUCT CARD — IMAGE
============================================================

Image occupies the available card width.

Use responsive aspect-ratio.

Image must:

- scale with card width
- preserve aspect ratio
- never distort
- use consistent object-fit behavior

Do NOT use fixed image width/height.

============================================================
13. PRODUCT CARD — CATEGORY
============================================================

Below the image:

Category

Category is left aligned.

Favourite is right aligned on the SAME row.

Example:

Beverages                         ☆

Use the same category icon system established for Products.

============================================================
14. PRODUCT CARD — FAVOURITE
============================================================

Favourite:

right side of the Category row.

Inactive:

outline Star.

Active:

filled gold/yellow Star.

Favourite is directly clickable.

Do not place Favourite elsewhere on the card.

============================================================
15. PRODUCT CARD — PRODUCT NAME
============================================================

Product Name receives the maximum available width.

This is important.

The name must NOT be unnecessarily constrained.

Long product names must wrap naturally.

Do not allow the favourite control or other metadata to unnecessarily
reduce the product-name area.

Do not use aggressive truncation.

============================================================
16. PRODUCT CARD — PRICE + AVAILABILITY
============================================================

The final row is ONE horizontal row:

Price                         Available [Toggle]

Example:

₹120.00                       Available [ON]

Price:

left aligned.

Availability + Toggle:

right aligned.

Do NOT put Availability on another line.

Do NOT put the Toggle underneath.

============================================================
17. PRODUCT CARD — MEASUREMENT UNIT
============================================================

For measurement-based products, show the relevant unit underneath
the price where applicable.

Examples:

₹120.00
Kg

₹70.00
Ltr

₹50.00
Meter

For normal quantity products:

₹120.00

Do NOT show:

per Qty

for normal quantity products.

============================================================
18. PRODUCT AVAILABILITY
============================================================

Availability is NOT inventory.

Available:

green semantic state
+
toggle ON

Unavailable:

red semantic state
+
toggle OFF

The toggle controls whether the product can currently be sold.

It does NOT represent:

stock
quantity
inventory level
reorder level

============================================================
19. PRODUCT TYPE / UNIT
============================================================

Product creation determines the selling measurement.

Examples:

Bread Omelette:
Qty

Carrot:
Kg

Milk:
Ltr

Wire:
Meter

This information is configured when creating the Product.

There is NO separate unit configuration screen.

============================================================
20. BILLING QUANTITY BEHAVIOR
============================================================

The Product's configured type determines the billing control.

For:

Qty

use:

[ − ] 1 [ + ]

The default quantity after adding is:

1

For measurement products such as:

Kg
Ltr
Meter

use a text-entry field for the measurement.

Examples:

0.560 kg
1.500 ltr
2.000 meter

The user can enter the measurement directly.

Do NOT use + / − controls for Kg/Ltr/Meter.

The same measurement-entry interaction is available where required
in the Product Card / Billing flow according to the frozen Billing UI.

============================================================
21. PRODUCT CREATION
============================================================

Click:

+ Add Product

opens the frozen Add Product overlay.

The form contains:

Product Image
Product Name
Type / Unit
Selling Price
Description
Barcode
Category

No separate configuration is required for:

Qty
Kg
Ltr
Meter

The selected Type / Unit determines the billing behavior.

============================================================
22. EDIT PRODUCT
============================================================

Click Edit from Grid or Table.

Open the SAME Add Product component.

Mode:

Edit Product

Pre-populate:

Image
Name
Type / Unit
Price
Description
Barcode
Category

Primary action:

Save Changes

Do NOT create a separate Edit Product screen.

============================================================
23. DELETE PRODUCT
============================================================

Click Delete.

Open confirmation dialog:

Delete Product?

Are you sure you want to delete "Cappuccino"?

Actions:

Cancel
Delete Product

No immediate deletion.

============================================================
24. PRODUCT GRID PAGE SIZE
============================================================

DEFAULT:

Desktop:
12 products

Tablet:
8 products

Mobile:
4 products

These values control pagination.

They do NOT define fixed card dimensions.

============================================================
25. PRODUCT GRID RESPONSIVENESS
============================================================

Use responsive CSS Grid.

Cards must be fluid.

Do NOT hard-code:

card width
card height
image width
image height

The number of columns adapts to available width.

The card hierarchy remains unchanged.

============================================================
26. PRODUCT GRID SCROLL RULE
============================================================

Default page size:

NO unnecessary internal scrollbar.

If the user explicitly selects a larger page size:

Example:

8 → 20

then:

- page size becomes 20
- pagination recalculates
- current page resets to 1
- cards remain usable
- scrolling appears only when required

Do NOT shrink cards excessively.

============================================================
27. PRODUCT TABLE VIEW
============================================================

Product Table View:

# | Product | Category | Price | Availability | Actions

No checkbox.

No Product Code.

No Type / Unit column.

No Created On.

No unnecessary columns.

============================================================
28. PRODUCT TABLE — PRODUCT COLUMN
============================================================

Product column contains:

Responsive thumbnail
+
Product Name

Example:

[image] Cappuccino

Do not display Product Code.

============================================================
29. PRODUCT TABLE — CATEGORY
============================================================

Category name.

Use the same category naming and typography system as Grid View.

============================================================
30. PRODUCT TABLE — PRICE
============================================================

Display:

₹120.00

For measurement-based products, the relevant unit may appear
contextually beneath the price.

Do NOT create a separate Type/Unit column.

============================================================
31. PRODUCT TABLE — AVAILABILITY
============================================================

Display:

Available [ON]

or:

Unavailable [OFF]

Use the same availability toggle as Grid View.

============================================================
32. PRODUCT TABLE — ACTIONS
============================================================

Exact action order:

Favourite
Edit
Delete

Favourite:

Star

Edit:

Pencil

Delete:

Trash2

No:

- ...
- action dropdown
- checkbox
- hidden action menu

============================================================
33. PRODUCT TABLE DEFAULT PAGE SIZE
============================================================

Desktop:
12 rows

Tablet:
10 rows

Mobile:
8 rows

============================================================
34. PRODUCT TABLE SCROLL RULE
============================================================

At default page size:

NO unnecessary internal scrollbar.

If the user explicitly selects a larger page size:

Example:

12 → 25

then:

- pagination recalculates
- current page resets to 1
- table body becomes scrollable if required

NON-NEGOTIABLE:

ONLY THE TABLE BODY / ROWS SCROLL.

THE TABLE HEADER REMAINS FIXED.

Pagination remains outside the scrollable table body.

============================================================
35. PRODUCT TABLE HEADER
============================================================

Fixed header:

# | Product | Category | Price | Availability | Actions

When rows scroll:

the header remains visible.

============================================================
36. PRODUCT TABLE ROW HEIGHT
============================================================

Do NOT use a globally fixed row height.

Rows adapt to:

- viewport
- thumbnail size
- typography
- available width
- content
- responsive spacing

Do not compress rows below usable dimensions.

============================================================
37. PRODUCT PAGINATION
============================================================

Pagination recalculates from:

Total Products
÷
Selected page size

Examples:

156 products / 12
→ 13 pages

156 / 8
→ 20 pages

156 / 4
→ 39 pages

Pagination resets to page 1 when page size changes.

============================================================
38. SEARCH / FILTER + PAGINATION
============================================================

Search/filter changes the result count.

Pagination recalculates.

Example:

156 products
↓
Available filter
↓
142 products
↓
Desktop 12/page
↓
12 pages

If the current page becomes invalid:

reset to page 1.

============================================================
39. PAGE-SIZE CONTROL
============================================================

Use the existing BizCopilot page-size component.

Desktop:

Rows per page: [12 ▼]

Tablet:

Rows per page: [8 / 10 ▼]

Mobile:

compact responsive control.

Possible larger values:

8
10
12
20
25
50

The selected page size must be respected until changed.

============================================================
40. RIGHT-SIDE CONTEXTUAL PANEL
============================================================

Desktop may display:

Quick Actions:

Categories
Import Products
Export Products

Product Summary:

Total Products
Available
Unavailable
Categories
Favourites

Tips:

Use search or filters to quickly find products.
Mark favourites to show in billing faster.
Keep your product catalog updated.

Upcoming V2 & V3:

Future functionality only.

IMPORTANT:

Do NOT introduce V1 Inventory functionality.

Do NOT show:

Stock
Low Stock
Reorder Level
Inventory Value

============================================================
41. ADD PRODUCT IS NOT A QUICK ACTION
============================================================

Add Product belongs ONLY in the page header:

+ Add Product

Do NOT duplicate it inside Quick Actions.

============================================================
42. TABLET CONTEXTUAL PANEL
============================================================

If sufficient horizontal space exists:

Contextual panel may remain.

If insufficient:

collapse/reflow.

Never cause horizontal overflow.

============================================================
43. MOBILE CONTEXTUAL PANEL
============================================================

Do not place the desktop right rail beside the Product content.

Secondary information must collapse/reflow according to the established
BizCopilot mobile pattern.

Core billing/product-management workflow has priority.

============================================================
44. DESKTOP NAVIGATION
============================================================

Use the existing BizCopilot left sidebar.

Products is active.

Do not redesign the sidebar.

============================================================
45. TABLET / MOBILE NAVIGATION
============================================================

Use the existing BizCopilot bottom navigation.

Items:

Dashboard
Billing
Products
Customers
More

Products is active.

Bottom navigation respects safe areas.

============================================================
46. ICON SYSTEM
============================================================

Use one consistent outline SVG icon family.

Preferred:

Lucide or equivalent.

Required:

Search
Filter
Grid
Table
Plus
Star
Pencil
Trash2
ChevronLeft
ChevronRight
Ellipsis
X

No emoji.

No mixed icon families.

============================================================
47. ICON PLACEMENT
============================================================

Grid Card:

Edit → top-left
Delete → top-right

Category → below image, left

Favourite → same row, right

Price → bottom-left

Availability + Toggle → same bottom row, right

Table:

Favourite → first action
Edit → second
Delete → third

============================================================
48. ACCESSIBILITY
============================================================

Icon-only controls require accessible labels.

Examples:

Edit product
Delete product
Add to favourites
Remove from favourites
Search products
Filter products
Grid view
Table view
Previous page
Next page
Activate product
Deactivate product

============================================================
49. RESPONSIVE BREAKPOINTS
============================================================

Support:

Mobile:
< 768px

Tablet:
768px–1023px

Desktop:
≥ 1024px

These are layout modes only.

The UI must remain fluid between breakpoints.

============================================================
50. RESPONSIVE DESIGN
============================================================

ONE Product screen.

Do NOT design three unrelated screens.

Desktop / Tablet / Mobile use the same:

- component hierarchy
- card structure
- table structure
- typography
- colors
- icons
- controls
- behavior

Only adapt:

- dimensions
- spacing
- grid columns
- navigation
- contextual panel
- typography scaling
- page-size defaults
- pagination density
- scrolling

============================================================
51. NO STATIC PIXEL LAYOUT
============================================================

Do NOT implement the screenshot using:

- absolute coordinates
- fixed card widths
- fixed card heights
- fixed image dimensions
- fixed row heights
- fixed modal dimensions

Use:

CSS Grid
Flexbox
fluid containers
intrinsic sizing
clamp()
min()
max()
aspect-ratio
responsive tokens

============================================================
52. TYPOGRAPHY
============================================================

Use the same BizCopilot typography system as Category.

Page title:

strong heading.

Subtitle:

secondary text.

Product name:

medium/semibold.

Price:

strong readable text.

Status:

compact semantic text.

============================================================
53. COLORS
============================================================

Primary:

BizCopilot Purple.

Available:

Green.

Unavailable:

Red.

Favourite:

Gold/Yellow.

Delete:

Danger Red.

Background:

White / very light neutral.

Border:

Soft neutral.

Text:

Dark neutral.

Muted:

Secondary neutral.

============================================================
54. PRODUCT SCREEN — FINAL FLOW
============================================================

HEADER
↓
Products
↓
Manage your product catalog and keep up to date.
↓
+ Add Product

SEARCH
↓
Search by product name or barcode...
+
Filters

QUICK FILTERS
↓
All Products
Available
Unavailable
Favourites

CONTENT HEADER
↓
156 products
+
Grid / Table

GRID:

Edit + Delete
↓
Image
↓
Category + Favourite
↓
Product Name
↓
Price + Available + Toggle

TABLE:

#
Product
Category
Price
Availability + Toggle
Favourite
Edit
Delete

PAGINATION

Rows per page
+
Page navigation

============================================================
55. FINAL FROZEN PRODUCT CARD
============================================================

┌──────────────────────────────┐
│ ✎                         🗑 │
│                              │
│            IMAGE             │
│                              │
│ Category                 ☆   │
│                              │
│ Product Name                 │
│                              │
│ ₹120.00     Available [ON] │
└──────────────────────────────┘

This structure MUST remain unchanged across:

Desktop
Tablet
Mobile

Only dimensions and spacing adapt.

============================================================
56. PRODUCT + CATEGORY CONSISTENCY
============================================================

Product and Category screens must share:

- Page header
- Search
- Filters
- Quick filters
- View switcher
- Card treatment
- Table treatment
- Page-size selector
- Pagination
- Navigation
- Typography
- Colors
- Icons
- Responsive behavior
- Scroll behavior
- Modal behavior

Do NOT introduce a new interaction pattern on Product.

============================================================
57. FINAL ACCEPTANCE TEST
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

✓ Product structure unchanged
✓ Product card hierarchy unchanged
✓ Image responsive
✓ Product name gets maximum usable space
✓ Price + availability remain on same row
✓ Favourite remains beside category
✓ Edit/Delete remain directly visible
✓ No "..." menu
✓ No unnecessary table columns
✓ No Type/Unit table column
✓ Search + Filter arrangement correct
✓ Category filter is inside Filters
✓ Correct page-size defaults
✓ No unnecessary scrollbar
✓ Larger page size enables scrolling when required
✓ Table header remains fixed
✓ Only table rows scroll
✓ Pagination remains outside table body
✓ Pagination recalculates
✓ Add Product opens Add/Edit Product overlay
✓ Edit opens the same Add Product component
✓ Delete opens confirmation
✓ Desktop uses sidebar
✓ Tablet/Mobile use bottom navigation
✓ No horizontal overflow
✓ No static screenshot-specific layout

============================================================
FINAL PRODUCT SCREEN
============================================================

The Product screen is a responsive management screen with:

Header
↓
Search + Filters
↓
Quick Status Filters
↓
Product Count + Grid/Table Switch
↓
Product Grid/Table
↓
Pagination

GRID CARD:

Image
↓
Category + Favourite
↓
Product Name
↓
Price + Available + Toggle

TABLE:

Sequence
↓
Product
↓
Category
↓
Price
↓
Availability + Toggle
↓
Favourite + Edit + Delete

ADD:

+ Add Product
↓
Add/Edit Product overlay

EDIT:

Edit
↓
Same Add/Edit Product overlay
↓
Edit mode
↓
Save Changes

DELETE:

Delete
↓
Confirmation

This is the FINAL FROZEN PRODUCT SCREEN STRUCTURE.

# BizCopilot V1 — Generic Responsive Pagination & Scroll Behavior
# Applies to Product + Category Screens
# FINAL UI/UX BEHAVIOR SPECIFICATION

============================================================
1. PURPOSE
============================================================

Define the common responsive pagination, page-size, scrolling, and
layout behavior for:

- Product Screen
- Category Screen

This specification is shared by both screens.

The implementation must use the same BizCopilot design system and
responsive behavior.

Do not create different pagination/scrolling rules for Product and
Category unless explicitly specified.

============================================================
2. CORE UX PRINCIPLE
============================================================

DEFAULT VIEW = CLEAN, NO INTERNAL SCROLLBAR.

When the user opens Product or Category:

→ Use the viewport's default page size.
→ Display the default number of items.
→ Do NOT show an internal content scrollbar merely because the content
  area has a fixed height.

A scrollbar should appear ONLY when:

1. The user explicitly changes "Rows per page" / "Items per page"
   to a value greater than the default for that viewport/view.

OR

2. The content genuinely exceeds the available responsive viewport
   after applying the selected page size.

The default experience should feel clean and uncluttered.

============================================================
3. DEFAULT PAGE SIZES
============================================================

PRODUCT SCREEN

GRID:

Desktop → 12 products
Tablet → 8 products
Mobile → 4 products

TABLE:

Desktop → 12 rows
Tablet → 10 rows
Mobile → 8 rows


CATEGORY SCREEN

GRID:

Desktop → 12 categories
Tablet → 8 categories
Mobile → 4 categories

TABLE:

Desktop → 12 rows
Tablet → 10 rows
Mobile → 8 rows

These are DEFAULT page sizes.

============================================================
4. IMPORTANT DISTINCTION
============================================================

"Rows per page" is NOT the same as:

"Number of items that must visually fit inside a fixed-height container."

The page size determines how many records belong to the current page.

The responsive layout determines how those records are displayed.

Do NOT shrink cards, fonts, images, or table rows unnaturally just to
force the selected number into a viewport.

============================================================
5. DEFAULT STATE
============================================================

When the screen initially loads:

Use the viewport's default page size.

Example:

Desktop Product Grid:
12 products

Tablet Product Grid:
8 products

Mobile Product Grid:
4 products

Desktop Product Table:
12 rows

Tablet Product Table:
10 rows

Mobile Product Table:
8 rows

Category follows the same rules.

DEFAULT STATE:

- no unnecessary internal scrollbar
- no forced fixed-height content area
- natural responsive layout
- clean whitespace
- pagination visible where appropriate

============================================================
6. ROWS / ITEMS PER PAGE CONTROL
============================================================

The existing BizCopilot page-size control remains:

Rows per page:
[ 12 ▼ ]

or:

Rows per page:
[ 10 ▼ ]

or the responsive equivalent.

The available options may include larger values, for example:

8
10
12
20
25
50

Use the existing BizCopilot design system.

Do not introduce a separate control design for Product and Category.

============================================================
7. WHEN USER SELECTS A LARGER PAGE SIZE
============================================================

Example:

Desktop default:

12 rows

User selects:

25 rows

Expected behavior:

→ page size becomes 25
→ pagination recalculates
→ content area remains responsive
→ if 25 rows cannot comfortably fit in the available viewport,
  scrolling is introduced

IMPORTANT:

Do NOT shrink the UI just to fit 25 rows.

Do NOT make typography microscopic.

Do NOT reduce row height below the usable design-system minimum.

Use scrolling instead.

============================================================
8. PAGINATION RECALCULATION
============================================================

Pagination MUST recalculate whenever page size changes.

Example:

156 products.

Default desktop:

12 per page

156 / 12 = 13 pages

If user selects:

20 per page

156 / 20 = 8 pages

If user selects:

50 per page

156 / 50 = 4 pages

The same rule applies to Categories.

Pagination must always reflect:

Total records
÷
Selected page size

rounded up.

============================================================
9. CURRENT PAGE BEHAVIOR
============================================================

When page size changes:

Recommended behavior:

Reset to page 1.

Example:

User is on:

Page 5

and changes:

Rows per page
12 → 25

Then:

Current page → 1

Pagination recalculates.

This avoids invalid page numbers.

============================================================
10. GRID VIEW — SCROLL RULE
============================================================

Grid View:

Do NOT create an internal vertical scrollbar at the default page size.

Example:

Desktop:
12 products

Tablet:
8 products

Mobile:
4 products

The grid should naturally display those items.

If the user explicitly selects a larger page size:

Example:

12 → 24

then:

→ grid continues to use responsive card sizing
→ cards do NOT become artificially tiny
→ content may extend vertically
→ scrolling becomes available if required

============================================================
11. GRID RESPONSIVE BEHAVIOR
============================================================

Grid cards must remain fluid.

Never use:

fixed card width
fixed card height
fixed image dimensions

Use:

CSS Grid
Flexbox
responsive columns
aspect-ratio
fluid sizing
responsive spacing

Example concept:

Desktop:

12 items
→ responsive multi-column grid

Tablet:

8 items
→ responsive grid

Mobile:

4 items
→ responsive grid

The exact number of columns may adapt to available width.

============================================================
12. GRID PAGE SIZE DOES NOT FORCE CARD SIZE
============================================================

Example:

Desktop default:
12 cards

A 4K monitor has a huge viewport.

Do NOT make 12 cards microscopic.

Cards may become larger because more horizontal/vertical space is
available.

Likewise:

13-inch laptop:
12 cards remain the page size.

If there is insufficient vertical space:

allow natural page scrolling or appropriate content scrolling.

Do NOT distort the design to force all cards into a fixed screenshot
height.

============================================================
13. TABLE VIEW — CORE RULE
============================================================

Table View has a special scrolling behavior.

The TABLE HEADER must remain fixed/visible.

ONLY THE TABLE BODY / ROWS AREA SCROLLS.

Structure:

┌─────────────────────────────────────────────┐
│ TABLE HEADER                                │
│ # | Product | Category | Price | Actions    │
├─────────────────────────────────────────────┤
│ Row 1                                       │
│ Row 2                                       │
│ Row 3                                       │
│ Row 4                                       │
│ Row 5                                       │
│ Row 6                                       │
│             ↕ SCROLLABLE ROW AREA           │
│ Row 20                                      │
│ Row 21                                      │
└─────────────────────────────────────────────┘

The header does NOT scroll away.

============================================================
14. TABLE HEADER
============================================================

Table header remains visually fixed while the table body scrolls.

Header contains the existing screen-specific columns.

PRODUCT:

#
Product
Category
Price
Availability
Actions

CATEGORY:

#
Category
Products
Status
Actions

Do not modify the previously frozen column structures.

============================================================
15. TABLE BODY SCROLL
============================================================

Only:

<tbody>

or the equivalent table-body container

becomes scrollable.

Do NOT make the entire page/table wrapper scroll horizontally or
vertically unnecessarily.

The table header remains visible.

============================================================
16. DEFAULT TABLE STATE
============================================================

At the default page size:

Desktop:
12 rows

Tablet:
10 rows

Mobile:
8 rows

Do NOT force a scrollbar simply because the table exists.

If those default rows naturally fit:

No internal table-body scrollbar.

============================================================
17. LARGER TABLE PAGE SIZE
============================================================

Example:

Desktop default:
12 rows

User selects:
25 rows

Then:

→ table remains responsive
→ header stays fixed
→ body becomes scrollable if required
→ rows retain usable dimensions
→ pagination recalculates

Example:

┌───────────────────────────────────────┐
│ FIXED TABLE HEADER                    │
├───────────────────────────────────────┤
│ Row 1                                 │
│ Row 2                                 │
│ Row 3                                 │
│ Row 4                                 │
│ Row 5                                 │
│ Row 6                                 │
│ Row 7                                 │
│ Row 8                                 │
│ ↕                                     │
│ Row 24                                │
│ Row 25                                │
└───────────────────────────────────────┘

============================================================
18. TABLE ROW HEIGHT
============================================================

Do NOT use one globally fixed pixel row height.

Row dimensions must be responsive.

Consider:

- viewport width
- viewport height
- image thumbnail
- typography
- line wrapping
- spacing tokens
- touch target requirements

The row must remain readable.

If content cannot fit:

scroll.

Do NOT compress the UI beyond usability.

============================================================
19. 4K MONITOR
============================================================

Example:

3840 × 2160

Default:

12 table rows.

The table can use more available space.

Rows/images/spacing may scale responsively.

Do NOT make everything tiny simply because the screen is large.

The same rule applies to Grid View.

============================================================
20. 13-INCH LAPTOP
============================================================

Example:

13-inch laptop.

Default:

12 table rows.

If the available vertical space is insufficient:

→ table body can scroll
→ header remains fixed
→ row remains readable

Do NOT reduce font size excessively.

Do NOT hide information.

Do NOT force the entire table into the viewport.

============================================================
21. TABLET
============================================================

Tablet defaults:

Grid:
8 items

Table:
10 rows

Use bottom navigation.

The layout must remain fluid.

If a larger page size is selected:

scroll only when required.

============================================================
22. MOBILE
============================================================

Mobile defaults:

Grid:
4 items

Table:
8 rows

Use bottom navigation.

Cards/table content must remain usable.

No horizontal overflow.

If a larger page size is selected:

content may scroll naturally.

For Table View:

ONLY the row area scrolls vertically.

The table header remains visible.

============================================================
23. CATEGORY SCREEN
============================================================

Apply all rules in this document to Category.

Default:

Desktop Grid:
12 categories

Tablet Grid:
8 categories

Mobile Grid:
4 categories

Desktop Table:
12 rows

Tablet Table:
10 rows

Mobile Table:
8 rows

No separate pagination architecture.

============================================================
24. PRODUCT SCREEN
============================================================

Apply all rules in this document to Product.

Default:

Desktop Grid:
12 products

Tablet Grid:
8 products

Mobile Grid:
4 products

Desktop Table:
12 rows

Tablet Table:
10 rows

Mobile Table:
8 rows

No separate pagination architecture.

============================================================
25. FILTER + PAGINATION INTERACTION
============================================================

When filters/search change the result set:

Pagination must recalculate.

Example:

156 products

Filter:
Available

Result:
142 products

Desktop page size:
12

Pages:

ceil(142 / 12)

If page size changes:

12 → 25

recalculate again.

Reset to page 1 when necessary.

Same behavior for Category.

============================================================
26. SORTING / FILTERING
============================================================

Changing:

- Search
- Filter
- Category
- Availability
- Favourite

must preserve the selected page-size preference for the current
viewport/view unless there is a strong UX reason to reset it.

If the result count becomes smaller than the current page:

reset to page 1.

============================================================
27. RESPONSIVE PAGE-SIZE DEFAULT
============================================================

The default page size is determined by:

Screen
+
Viewport class
+
View mode

Example:

Product + Desktop + Grid = 12

Product + Tablet + Grid = 8

Product + Mobile + Grid = 4

Product + Desktop + Table = 12

Product + Tablet + Table = 10

Product + Mobile + Table = 8

Category follows exactly the same matrix.

============================================================
28. RESIZE BEHAVIOR
============================================================

If the user resizes the browser:

The UI must adapt.

Example:

Desktop → Tablet width

The default page-size behavior should transition to the appropriate
responsive mode.

Do not leave a desktop-specific fixed layout at tablet width.

Likewise:

Tablet → Mobile

Grid columns, cards, typography, spacing and navigation adapt.

============================================================
29. IMPORTANT: PAGE SIZE VS VIEWPORT
============================================================

The page size is a DATA/PAGINATION decision.

Viewport size is a LAYOUT decision.

Do not mix these concepts.

Example:

User selects 50 products.

The application does NOT need to display all 50 simultaneously.

Instead:

50 products belong to the current page.

The responsive layout determines how many are visible at once.

Scrolling handles the remainder.

Pagination still represents the 50-item page size.

============================================================
30. NO FORCED SCROLLBAR
============================================================

Do NOT show:

- permanent scrollbar
- empty scrollbar track
- unnecessary internal scrolling
- nested scrolling everywhere

Only introduce scrolling when content actually exceeds the available
space or when the selected page size requires it.

============================================================
31. TABLE HEADER SCROLL LOCK
============================================================

This is NON-NEGOTIABLE.

When Table View body scrolls:

HEADER DOES NOT MOVE.

The following remain visible:

#
Product / Category
Category / Products
Price
Availability / Status
Actions

Only the data rows move.

============================================================
32. TABLE BODY SCROLL CONTAINER
============================================================

Conceptually:

Table Container
│
├── Fixed Header
│
└── Scrollable Body
      ├── Row
      ├── Row
      ├── Row
      └── Row

Do NOT:

Table Container
└── Entire table scrolls

The second implementation is NOT allowed.

============================================================
33. PAGINATION POSITION
============================================================

Pagination remains outside the scrollable table body.

Structure:

Table Header
↓
Scrollable Table Body
↓
Pagination

Pagination itself must remain accessible.

It should not disappear inside the scrolling rows.

============================================================
34. GRID PAGINATION POSITION
============================================================

Grid:

Grid
↓
Pagination

If grid content requires scrolling:

the grid content can scroll naturally.

Pagination remains accessible according to the existing page layout.

============================================================
35. FIGMA-LEVEL RESPONSIVE SPECIFICATION
============================================================

Every implementation must define:

FRAME
- viewport behavior
- max content width
- responsive margins
- safe areas

LAYOUT
- grid/flex behavior
- columns
- gaps
- alignment

COMPONENTS
- exact component hierarchy
- states
- interaction

TYPOGRAPHY
- font family
- weight
- hierarchy
- responsive scaling

ICONS
- consistent Lucide-style outline family
- semantic icon mapping
- responsive sizing

IMAGES
- responsive aspect ratio
- object-fit behavior
- no distortion

SPACING
- shared BizCopilot design tokens
- responsive spacing

CONTROLS
- buttons
- toggles
- filters
- page-size selector
- pagination

SCROLLING
- when scrolling appears
- which container scrolls
- which container remains fixed

============================================================
36. NO STATIC PIXEL LAYOUT
============================================================

Do NOT implement the design as a screenshot recreation using:

position: absolute
fixed width
fixed height
fixed card dimensions
fixed row height
fixed image dimensions
fixed modal dimensions

Use responsive layout rules.

The screenshot is the visual reference.

The responsive behavior is the implementation specification.

============================================================
37. VISUAL CONSISTENCY
============================================================

Product and Category must feel like two screens of the SAME application.

They must share:

- search
- filter button
- quick filters
- page-size selector
- pagination
- view switch
- card system
- table system
- status badges
- toggles
- edit/delete controls
- navigation
- typography
- colors
- spacing
- icons
- responsive rules
- scrolling behavior

Do not redesign pagination or scrolling independently for either screen.

============================================================
38. ACCEPTANCE TEST
============================================================

Test both Product and Category at:

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

For every viewport:

✓ Correct default page size
✓ Responsive layout
✓ No unnecessary scrollbar
✓ Larger page size triggers scrolling when required
✓ Pagination recalculates
✓ Current page resets appropriately
✓ No horizontal overflow
✓ No clipped content
✓ No distorted images
✓ No unreadable typography
✓ Table header remains fixed
✓ Only table rows scroll
✓ Pagination remains outside scrollable body
✓ Product and Category behave consistently

============================================================
39. FINAL BEHAVIOR MATRIX
============================================================

                 GRID       TABLE

DESKTOP          12          12
TABLET            8          10
MOBILE            4           8

Default:
NO unnecessary internal scrollbar.

User selects larger page size:
→ Recalculate pagination
→ Preserve readable component sizes
→ Introduce scrolling only when required

TABLE VIEW:
→ Header fixed
→ Body rows scroll
→ Pagination outside body

GRID VIEW:
→ Responsive grid
→ Cards remain fluid
→ Larger page sizes may require scrolling

============================================================
40. FINAL RULE
============================================================

DO NOT interpret "responsive" as:

"make the screenshot smaller."

Responsive means:

The same BizCopilot design system continuously adapts to the available
space.

Cards resize.
Images resize.
Typography adapts.
Spacing adapts.
Columns adapt.
Rows adapt.
Navigation adapts.
Pagination adapts.

The UI remains visually consistent.

Scrolling is introduced only when necessary.

The user should NEVER feel that the application was designed for one
specific screen resolution.