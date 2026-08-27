# BizCopilot V1 — Category Management Screen
# FINAL FROZEN UI / UX + FIGMA-LEVEL GENERATION SPECIFICATION
# Responsive Desktop + Tablet + Mobile
# Grid View + Table View
# Add Category + Edit Category Integration

IMPORTANT:
This is a FROZEN BizCopilot screen.

The Category screen must follow the existing BizCopilot design system
and must visually belong to the same application as the already-frozen
Product screen.

Do NOT invent a new design language.

Do NOT redesign the Category screen independently.

The Product screen and Category screen must feel like sibling screens.

============================================================
1. GLOBAL DESIGN SYSTEM
============================================================

Use the exact existing BizCopilot visual language.

Maintain consistency for:

- typography
- font family
- font weights
- purple primary color
- page background
- surface colors
- borders
- corner radius
- shadows
- buttons
- input fields
- search
- filters
- status badges
- toggles
- icon buttons
- pagination
- navigation
- overlays
- confirmation dialogs
- spacing
- responsive behavior

Category must look like the same product as Product.

Do not introduce:

- different card styles
- different button styles
- different icons
- different typography
- different spacing philosophy
- different responsive rules

============================================================
2. RESPONSIVE DESIGN — HARD REQUIREMENT
============================================================

The Category screen must be genuinely responsive.

Support:

- Desktop
- 13-inch laptop
- large desktop
- 4K
- Tablet portrait
- Tablet landscape
- Mobile portrait
- different mobile widths

The design must fluidly adapt to available space.

DO NOT recreate the mockup using static pixel coordinates.

Do NOT use screenshot-specific:

- fixed page width
- fixed card width
- fixed card height
- fixed image size
- fixed table row height
- absolute positioning for primary layout
- fixed content coordinates

Use:

- CSS Grid
- Flexbox
- responsive containers
- intrinsic sizing
- percentage sizing
- clamp()
- min()
- max()
- responsive design tokens
- aspect-ratio
- responsive breakpoints
- container queries where appropriate

Small fixed dimensions are acceptable only where semantically required,
such as icon stroke, border thickness, or minimum touch target.

============================================================
3. NAVIGATION
============================================================

DESKTOP:

Use the existing BizCopilot left sidebar.

TABLET:

Use the existing BizCopilot bottom navigation.

MOBILE:

Use the existing BizCopilot bottom navigation.

Desktop sidebar and mobile/tablet navigation must use the same
BizCopilot icon and typography system.

Products remains the parent navigation section because Categories is
part of Product Management.

The active navigation state must remain consistent with the existing
Product screen.

============================================================
4. PAGE HEADER
============================================================

Header:

Categories

Subtitle:

Manage your product categories and keep your catalog organized.

Primary action:

+ Add Category

The button uses the same primary button component as:

+ Add Product

Do not create a different button style.

============================================================
5. ADD CATEGORY BEHAVIOR
============================================================

When:

+ Add Category

is clicked:

DO NOT navigate to another page.

Open the existing BizCopilot Add Category overlay.

Desktop:
Centered modal overlay.

Tablet:
Responsive centered overlay.

Mobile:
Responsive bottom sheet / overlay consistent with the established
BizCopilot modal behavior.

The Category page underneath remains preserved.

No full-page router transition.

============================================================
6. EDIT CATEGORY BEHAVIOR
============================================================

When the Edit icon on a category card or table row is clicked:

DO NOT navigate to another page.

Open the SAME Add Category component.

Change the mode:

Add Category
→ Edit Category

Pre-populate the existing category information.

The underlying Category screen remains visible/preserved.

The component is reused.

============================================================
7. ADD CATEGORY / EDIT CATEGORY
============================================================

The Add Category screen is the single source for:

- creating category
- editing category

Add mode:

Title:
Add Category

Primary action:
Add Category

Edit mode:

Title:
Edit Category

Primary action:
Save Changes

Do NOT create separate visual designs for Add and Edit.

============================================================
8. CATEGORY FORM
============================================================

Use the previously established BizCopilot Add Category design.

Keep the form intentionally simple.

Category Name:
required

Category Icon:
use the existing BizCopilot category icon selection pattern.

Status:
Active / Inactive

Actions:

Cancel
Add Category

For Edit:

Cancel
Save Changes

Do NOT add inventory configuration.

Do NOT add product configuration.

Do NOT add supplier configuration.

Do NOT add unnecessary advanced settings.

============================================================
9. SEARCH + FILTER
============================================================

The search row must follow the Product screen.

Structure:

[ Search by category name... ] [ Filters ]

Search:

Search by category name...

Immediately beside Search:

Filters

Use the same Search component and Filter button as Product.

DO NOT place a separate category dropdown beside Search.

Category-specific filtering belongs inside Filters.

============================================================
10. FILTER PANEL
============================================================

Filters must contain:

Availability / Status:

- All
- Active
- Inactive

The filter UI must follow the same responsive pattern as Product.

Desktop:
popover / compact panel.

Tablet:
responsive popover or sheet.

Mobile:
bottom sheet.

Do NOT navigate to a filter page.

============================================================
11. QUICK STATUS FILTERS
============================================================

Below Search + Filters:

[ All Categories 24 ]
[ Active 20 ]
[ Inactive 4 ]

Selected:

BizCopilot purple background.

Unselected:

white/light surface with neutral border.

Active count:

semantic green.

Inactive count:

semantic red.

These are quick filters.

============================================================
12. CATEGORY COUNT
============================================================

Show:

24 categories

This updates dynamically according to the dataset/filter state.

Use the same typography hierarchy as:

156 products

on the Product screen.

============================================================
13. VIEW SWITCH
============================================================

Provide:

[ Grid View ] [ Table View ]

Grid View selected:
BizCopilot purple active styling.

Table View selected:
BizCopilot purple active styling.

Switching views must preserve:

- search
- filters
- selected page size
- current dataset
- category status
- pagination context where possible

============================================================
14. CATEGORY GRID VIEW — FROZEN
============================================================

The Category card structure is FROZEN.

Do not change it.

Exact structure:

┌──────────────────────────────┐
│ ✎                         🗑 │
│                              │
│            ICON              │
│                              │
│        Category Name         │
│                              │
│        48 Products           │
│                              │
│        Active  [●]           │
└──────────────────────────────┘

============================================================
15. CATEGORY CARD — ACTIONS
============================================================

Edit:

Top-left corner.

Use:

Pencil / Edit outline icon.

Delete:

Top-right corner.

Use:

Trash / Trash2 outline icon.

No:

- "..."
- action menu
- bottom arrow
- hidden action menu

Both actions are directly visible.

============================================================
16. CATEGORY CARD — ICON
============================================================

Category icon is centered.

Use the existing BizCopilot category icon system.

The icon should be displayed inside a subtle circular/pastel icon
container consistent with the approved mockup.

The icon container must scale responsively.

Do NOT hard-code a fixed card-relative position.

Use centered flex/grid alignment.

============================================================
17. CATEGORY CARD — CATEGORY NAME
============================================================

Category name is centered below the icon.

Examples:

Beverages
Food
Snacks
Desserts

Use the same typography hierarchy as Product Name on Product cards.

Long category names must wrap naturally.

Do not unnecessarily truncate category names.

============================================================
18. CATEGORY CARD — PRODUCT COUNT
============================================================

Product count is centered.

Example:

48 Products

This is a separate centered line.

IMPORTANT:

Do NOT place Product Count on the same row as Status.

The final frozen layout is:

Category Name

↓

48 Products

↓

Active [Toggle]

============================================================
19. CATEGORY CARD — STATUS
============================================================

Status is centered.

Example:

Active  [ ON ]

or:

Inactive  [ OFF ]

Status and toggle are horizontally grouped and centered.

Active:

green status badge
toggle ON

Inactive:

red status badge
toggle OFF

The toggle directly represents Category availability/status.

============================================================
20. CATEGORY CARD — NO ARROW
============================================================

There must be NO arrow on the bottom-right of the category card.

Do not use:

>

→

ChevronRight

or any navigation indicator.

Category cards are management cards, not navigation cards.

============================================================
21. CATEGORY CARD — NO EXTRA CONTENT
============================================================

Do not add:

- category description
- created date
- product code
- inventory
- stock
- supplier
- revenue
- sales
- profit
- category type
- subcategory
- extra metadata

unless explicitly introduced in a future version.

============================================================
22. GRID PAGE SIZE
============================================================

DEFAULT GRID PAGE SIZE:

Desktop:
12 categories

Tablet:
8 categories

Mobile:
4 categories

These are pagination defaults.

They are NOT fixed visual-height requirements.

============================================================
23. GRID RESPONSIVE BEHAVIOR
============================================================

Desktop:

Default page size:
12 categories.

Tablet:

Default:
8 categories.

Mobile:

Default:
4 categories.

Cards must resize fluidly.

Do NOT make card dimensions fixed.

The grid must adapt its columns according to available width.

Use responsive CSS Grid.

============================================================
24. GRID SCROLL RULE
============================================================

At the default page size:

NO unnecessary internal scrollbar.

Example:

Tablet:
8 categories

→ clean grid
→ no internal scrollbar

Mobile:
4 categories

→ clean grid
→ no internal scrollbar

Desktop:
12 categories

→ clean grid
→ no unnecessary internal scrollbar

============================================================
25. LARGER GRID PAGE SIZE
============================================================

If the user explicitly changes:

Rows per page

from the default to a larger value:

Example:

8 → 20

then:

- page size becomes 20
- pagination recalculates
- current page resets to page 1
- cards retain usable dimensions
- scrolling appears only if required by available space

Do NOT shrink cards excessively just to fit 20 categories.

============================================================
26. GRID PAGE SIZE CONTROL
============================================================

Use the existing BizCopilot:

Rows per page:
[ 8 ▼ ]

or:

[ 12 ▼ ]

depending on viewport.

Possible options:

8
10
12
20
25
50

Use responsive control sizing.

Do not introduce a different page-size component.

============================================================
27. PAGINATION
============================================================

Pagination recalculates automatically based on:

Total categories
÷
selected page size

Example:

24 categories.

Desktop default:

12/page

→ 2 pages.

Tablet default:

8/page

→ 3 pages.

Mobile default:

4/page

→ 6 pages.

If user selects:

20/page

→ 2 pages.

============================================================
28. PAGE RESET
============================================================

When page size changes:

Reset current page to:

Page 1

This prevents invalid page numbers.

============================================================
29. TABLE VIEW — FROZEN
============================================================

Category Table View must follow the same table design system as Product.

No checkbox.

Use sequence number.

Structure:

# | Category | Products | Status | Actions

Do NOT add:

- Product Code
- Type
- Unit
- Created On
- Inventory
- extra columns

============================================================
30. CATEGORY TABLE ROW
============================================================

Example:

01 | [icon] Beverages | 48 products | Active [ON] | ✎ 🗑

Category:

icon + category name.

Products:

product count.

Status:

Active / Inactive + toggle.

Actions:

Edit
Delete

Use the same action styling as Product.

============================================================
31. TABLE ACTIONS
============================================================

Actions:

Edit
Delete

No:

- ...
- action dropdown
- arrow

Use:

Pencil

Trash2

in the existing BizCopilot icon style.

============================================================
32. TABLE PAGE SIZE
============================================================

DEFAULT TABLE PAGE SIZE:

Desktop:
12 rows

Tablet:
10 rows

Mobile:
8 rows

============================================================
33. TABLE DEFAULT SCROLL
============================================================

At the default page size:

NO unnecessary internal scrollbar.

Desktop:
12 rows

Tablet:
10 rows

Mobile:
8 rows

The table should remain clean.

============================================================
34. TABLE LARGER PAGE SIZE
============================================================

If the user selects:

12 → 25

or:

10 → 25

or:

8 → 25

then:

- pagination recalculates
- page resets to 1
- table body can become scrollable
- rows remain readable

============================================================
35. TABLE HEADER — FIXED
============================================================

NON-NEGOTIABLE.

When the table body scrolls:

THE TABLE HEADER MUST REMAIN FIXED.

Only the table rows/body scroll.

Structure:

┌────────────────────────────────┐
│ FIXED TABLE HEADER             │
├────────────────────────────────┤
│ Row 1                          │
│ Row 2                          │
│ Row 3                          │
│ Row 4                          │
│       ↕ SCROLLABLE             │
│ Row 24                         │
│ Row 25                         │
└────────────────────────────────┘

Do NOT scroll the table header.

============================================================
36. TABLE PAGINATION POSITION
============================================================

Pagination stays outside the scrollable table body.

Structure:

Table Header
↓
Scrollable Rows
↓
Pagination

Pagination must remain accessible.

============================================================
37. TABLE ROW HEIGHT
============================================================

Do NOT hard-code a universal pixel row height.

Rows must respond to:

- viewport
- typography
- image/icon size
- available width
- content wrapping

Do not make rows microscopic on large screens.

Do not compress rows to unusable sizes on small screens.

If content exceeds available space:

scroll.

============================================================
38. RESPONSIVE TABLE
============================================================

Desktop:

Full table.

Tablet:

Responsive table.

Mobile:

Compact responsive representation while preserving the same information
hierarchy.

Do not simply force a desktop-width table onto mobile.

Avoid horizontal overflow.

Essential information and actions must remain accessible.

============================================================
39. NAVIGATION RESPONSIVENESS
============================================================

Desktop:

Left sidebar.

Tablet:

Bottom navigation.

Mobile:

Bottom navigation.

The Product and Category screens must use identical navigation
behavior.

============================================================
40. RIGHT-SIDE CONTEXTUAL PANEL
============================================================

Desktop may display:

Quick Actions

- Import Categories
- Export Categories

Category Summary

- Total Categories
- Active
- Inactive
- Total Products

Tips

Useful category-management guidance.

Upcoming V2 & V3

Future roadmap.

IMPORTANT:

Add Category must NOT appear inside Quick Actions.

The primary:

+ Add Category

button is located in the page header.

============================================================
41. TABLET RIGHT PANEL
============================================================

If sufficient width exists:

Contextual right panel may remain.

If not:

collapse/reflow according to responsive layout.

Never cause horizontal overflow.

============================================================
42. MOBILE RIGHT PANEL
============================================================

Do not place the desktop right rail beside the mobile content.

Secondary information should collapse/reflow according to the
established BizCopilot mobile pattern.

The Category management workflow takes priority.

============================================================
43. MOBILE CATEGORY CARD
============================================================

Same frozen structure.

Do NOT redesign the card.

Responsive adaptation:

Edit                     Delete

        ICON

     Category Name

     48 Products

     Active [ON]

The card width, icon, typography and spacing adapt to available mobile
width.

The information hierarchy does NOT change.

============================================================
44. TABLET CATEGORY CARD
============================================================

Same exact Category card structure.

Only:

- card width
- icon size
- typography scaling
- spacing
- grid columns

adapt fluidly.

Do not create a separate Tablet card design.

============================================================
45. DESKTOP CATEGORY CARD
============================================================

Same exact Category card structure.

Larger available space may allow larger responsive dimensions.

Do not introduce additional information.

============================================================
46. SEARCH BEHAVIOR
============================================================

Search category names.

Search must update the displayed result set.

Pagination recalculates based on filtered results.

If current page becomes invalid:

reset to page 1.

============================================================
47. FILTER BEHAVIOR
============================================================

Filter:

All
Active
Inactive

Category does not need a separate category selector because the current
screen already IS the Category management screen.

Use the same filter component pattern as Product.

============================================================
48. STATUS TOGGLE
============================================================

Category status toggle:

ON:
Active

OFF:
Inactive

Changing the toggle updates the category state.

The toggle must use the existing BizCopilot switch component.

Do not create a different toggle design.

============================================================
49. DELETE BEHAVIOR
============================================================

Click:

Delete

Open confirmation dialog.

Example:

Delete Category?

Are you sure you want to delete "Beverages"?

Actions:

Cancel
Delete Category

Do not delete immediately.

Use semantic danger styling.

============================================================
50. EDIT BEHAVIOR
============================================================

Click:

Edit

Expected:

Category page remains underneath.

Add Category overlay opens.

Mode:

Edit Category

Existing category data is populated.

Primary action:

Save Changes

No navigation.

============================================================
51. ADD CATEGORY BEHAVIOR
============================================================

Click:

+ Add Category

Expected:

Add Category overlay.

Underlying Category page remains.

Primary action:

Add Category

After successful creation:

close overlay
refresh/update category list
update count
update pagination if necessary

============================================================
52. ICON SYSTEM
============================================================

Use one consistent outline icon library.

Preferred:

Lucide Icons or equivalent.

No emoji.

No mixed icon families.

Category screen icons:

Search:
Search

Filter:
SlidersHorizontal / Filter

Grid:
LayoutGrid

Table:
Table / List

Add:
Plus

Edit:
Pencil

Delete:
Trash2

Active:
no mandatory icon

Inactive:
no mandatory icon

Favourite is NOT required for Category cards.

Pagination:

ChevronLeft
ChevronRight
Ellipsis

Close:

X

All icons must use the existing BizCopilot visual style.

============================================================
53. ICON STATES
============================================================

Edit:

neutral/purple.

Delete:

semantic danger red.

Grid selected:

BizCopilot purple.

Table selected:

BizCopilot purple.

Active:

green status.

Inactive:

red status.

Toggle:

ON/OFF according to status.

============================================================
54. ACCESSIBILITY
============================================================

Every icon-only button must have an accessible label.

Edit:

Edit category

Delete:

Delete category

Toggle:

Activate category
or
Deactivate category

Search:

Search categories

Filter:

Filter categories

Grid:

Grid view

Table:

Table view

Previous:

Previous page

Next:

Next page

============================================================
55. TYPOGRAPHY
============================================================

Use the same BizCopilot typography system as Product.

Page title:
strong primary heading.

Subtitle:
secondary text.

Category name:
prominent medium/semibold.

Product count:
secondary supporting text.

Status:
compact readable label.

Do not introduce a new font.

Do not use arbitrary font sizes.

Use responsive typography tokens.

============================================================
56. IMAGES / ICON CONTAINERS
============================================================

Category icons are vector icons.

Icon containers must:

- preserve aspect ratio
- scale responsively
- remain centered
- never distort
- maintain consistent visual weight

============================================================
57. SPACING
============================================================

Use the same BizCopilot spacing tokens as Product.

Maintain consistent relationships:

Header
↓
Search
↓
Filters
↓
Category count
↓
View switch
↓
Grid/Table
↓
Pagination

Do not use screenshot-specific coordinate values.

============================================================
58. COLORS
============================================================

Use existing BizCopilot palette.

Primary:
BizCopilot Purple

Background:
light neutral / white

Surface:
white

Text:
dark neutral

Secondary text:
muted neutral

Border:
soft neutral

Active:
green

Inactive:
red

Delete:
danger red

Do not introduce unrelated colors.

============================================================
59. CARD STYLING
============================================================

Use the same Product card design language:

- rounded corners
- subtle border
- subtle shadow
- clean white surface
- generous whitespace
- consistent hover state

Do not create an unrelated Category card style.

The Category card may be structurally different from Product because its
content is different, but the visual component language must remain
identical.

============================================================
60. RESPONSIVE PAGE SIZE MATRIX
============================================================

CATEGORY GRID:

Desktop → 12
Tablet → 8
Mobile → 4

CATEGORY TABLE:

Desktop → 12
Tablet → 10
Mobile → 8

These are defaults.

============================================================
61. SCROLL RULE
============================================================

DEFAULT:

No unnecessary internal scrollbar.

LARGER PAGE SIZE SELECTED:

Scrollbar appears only if the selected content exceeds the available
responsive space.

Grid:

Scrollable content area when necessary.

Table:

ONLY BODY/ROWS scroll.

Header remains fixed.

Pagination remains outside the scrollable body.

============================================================
62. 4K BEHAVIOR
============================================================

4K monitor:

Default Grid:
12 categories.

Default Table:
12 rows.

Do not make the UI microscopic.

Cards and spacing may scale with available space.

Table rows remain readable.

============================================================
63. 13-INCH BEHAVIOR
============================================================

Default Grid:
12 categories.

Default Table:
12 rows.

If vertical space is insufficient:

allow appropriate scrolling.

Do not shrink the design excessively.

============================================================
64. TABLET BEHAVIOR
============================================================

Grid:
8 categories default.

Table:
10 rows default.

Bottom navigation.

Same Category card.

Same typography system.

Same controls.

Same hierarchy.

Only dimensions/layout adapt.

============================================================
65. MOBILE BEHAVIOR
============================================================

Grid:
4 categories default.

Table:
8 rows default.

Bottom navigation.

Same Category card.

Same information hierarchy.

Responsive dimensions.

No horizontal overflow.

============================================================
66. PAGINATION EXAMPLE
============================================================

24 categories.

Desktop:

12/page
→ 2 pages

Tablet:

8/page
→ 3 pages

Mobile:

4/page
→ 6 pages

If user selects 20:

24/20
→ 2 pages

Pagination updates automatically.

============================================================
67. FILTER + SEARCH + PAGINATION
============================================================

Search/filter changes the result count.

Pagination must recalculate.

Example:

24 categories

Filter:
Active

Result:
20 categories

Tablet:
8/page

→ 3 pages.

If user changes:

8 → 20

→ 1 page.

Reset current page to page 1.

============================================================
68. NO STATIC PIXEL IMPLEMENTATION
============================================================

The generated design must NOT rely on:

- fixed page dimensions
- fixed card width
- fixed card height
- fixed image dimensions
- fixed table row height
- absolute coordinates
- screenshot-specific spacing

The screenshot is a visual reference.

The responsive rules are the implementation specification.

============================================================
69. FIGMA COMPONENT STRUCTURE
============================================================

Create reusable components:

CategoryPage
CategoryHeader
AddCategoryButton
SearchBar
FilterButton
FilterPanel
StatusFilterChip
ViewSwitcher
CategoryGrid
CategoryCard
CategoryIcon
CategoryName
ProductCount
CategoryStatus
StatusToggle
CategoryTable
CategoryTableHeader
CategoryTableRow
CategoryActions
Pagination
PageSizeSelector
QuickActionsPanel
CategorySummaryPanel
TipsPanel
RoadmapPanel
AddEditCategoryModal
DeleteConfirmationDialog
DesktopSidebar
MobileBottomNavigation

============================================================
70. COMPONENT STATES
============================================================

Category Card:

Default
Hover
Focus

Edit:

Default
Hover
Pressed
Focus

Delete:

Default
Hover
Pressed
Focus

Toggle:

Active
Inactive
Disabled

Status:

Active
Inactive

Grid/Table:

Selected
Unselected

Pagination:

Default
Selected
Disabled

============================================================
71. MODAL RESPONSIVENESS
============================================================

Add/Edit Category:

Desktop:
centered modal.

Tablet:
responsive modal.

Mobile:
bottom sheet / responsive overlay.

The modal must resize fluidly.

No fixed desktop-only modal width.

The form must remain usable at narrow widths.

============================================================
72. NO PAGE ROUTER TRANSITION
============================================================

Add Category:

overlay.

Edit Category:

same overlay in Edit mode.

Delete:

confirmation dialog.

No unnecessary full-page navigation.

============================================================
73. VISUAL FIDELITY
============================================================

The final generated screen must reproduce the approved Category mockup:

- same overall hierarchy
- same BizCopilot purple
- same search/filter arrangement
- same quick filter chips
- same Grid/Table switch
- same Category card structure
- same icon placement
- same edit/delete placement
- same centered category name
- same centered product count
- same centered status + toggle
- no bottom-right arrow
- no ... menu
- no Add Category in Quick Actions
- same pagination
- same responsive behavior

============================================================
74. FINAL CATEGORY CARD — ABSOLUTE SOURCE OF TRUTH
============================================================

┌──────────────────────────────┐
│ ✎                         🗑 │
│                              │
│            ICON              │
│                              │
│        Category Name         │
│                              │
│        48 Products           │
│                              │
│        Active  [●]           │
└──────────────────────────────┘

This structure MUST NOT change.

============================================================
75. FINAL TABLE — ABSOLUTE SOURCE OF TRUTH
============================================================

# | Category | Products | Status | Actions

Status:

Active [ON]
Inactive [OFF]

Actions:

Edit
Delete

No checkbox.

No "...".

No arrow.

No unnecessary columns.

============================================================
76. FINAL ADD / EDIT RELATIONSHIP
============================================================

Add Category button
        ↓
Add Category overlay

Edit icon
        ↓
Same Add Category overlay
        ↓
Edit Category mode
        ↓
Pre-populated data

Both use the same component.

============================================================
77. FINAL ACCEPTANCE TEST
============================================================

Test:

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

✓ same design system
✓ same card structure
✓ responsive card sizing
✓ responsive typography
✓ responsive icons
✓ no horizontal overflow
✓ no unnecessary scrollbar
✓ default page size correct
✓ larger page size triggers scrolling only when needed
✓ pagination recalculates
✓ current page resets when appropriate
✓ table header stays fixed
✓ table body alone scrolls
✓ pagination remains outside table scroll area
✓ Add Category opens overlay
✓ Edit opens same Add Category component
✓ Delete opens confirmation
✓ no Add Category inside Quick Actions
✓ no bottom-right arrow
✓ no "..." menu
✓ no unnecessary fields
✓ Desktop/Tablet/Mobile remain visually consistent

============================================================
78. FINAL DESIGN PRINCIPLE
============================================================

DO NOT DESIGN THREE DIFFERENT CATEGORY SCREENS.

Design ONE BizCopilot Category screen.

Then make it responsive.

Desktop
Tablet
Mobile

must be the same product experience.

Only:

- available space
- component dimensions
- navigation placement
- grid columns
- typography scaling
- spacing
- page-size defaults
- scrolling behavior

adapt.

The visual language and information hierarchy remain unchanged.

============================================================
FINAL FROZEN CATEGORY SCREEN
============================================================

HEADER
↓
Search + Filters
↓
All Categories / Active / Inactive
↓
Category Count + Grid/Table
↓
Category Content
↓
Pagination

GRID:

Edit
Delete
↓
Centered Icon
↓
Category Name
↓
Centered Product Count
↓
Centered Active/Inactive + Toggle

TABLE:

Sequence
Category
Products
Status + Toggle
Edit
Delete

ADD:

+ Add Category
↓
Add Category Overlay

EDIT:

Edit
↓
Same Add Category Overlay
↓
Edit Category Mode

DELETE:

Delete
↓
Confirmation Dialog

This is the FINAL FROZEN Category Screen specification.

============================================================
CATEGORY SCREEN — COMPLETE UI STRUCTURE
============================================================

The Category screen MUST follow the same visual language, component
patterns and responsive behavior as the already-frozen Product screen.

Do NOT create a different layout philosophy for Categories.

The Category screen is a sibling management screen to Products.

============================================================
1. PAGE STRUCTURE
============================================================

Overall structure:

DESKTOP:

┌─────────────────────────────────────────────────────────────────┐
│ LEFT SIDEBAR │ PAGE HEADER                                     │
│              │                                                 │
│              │ Categories                         + Add Category│
│              │ Manage your product categories...               │
│              │                                                 │
│              │ Search........................ [Filters]        │
│              │                                                 │
│              │ [All Categories] [Active] [Inactive]             │
│              │                                                 │
│              │ 24 categories             [Grid] [Table]         │
│              │                                                 │
│              │ ┌──────┐ ┌──────┐ ┌──────┐                     │
│              │ │Card  │ │Card  │ │Card  │                     │
│              │ └──────┘ └──────┘ └──────┘                     │
│              │                                                 │
│              │ Pagination                                      │
└─────────────────────────────────────────────────────────────────┘


TABLET:

┌───────────────────────────────────────────────────────┐
│                    PAGE HEADER                         │
│                                                       │
│ Categories                              + Add Category│
│ Manage your product categories...                     │
│                                                       │
│ Search........................ [Filters]              │
│                                                       │
│ [All Categories] [Active] [Inactive]                  │
│                                                       │
│ 24 categories                  [Grid] [Table]         │
│                                                       │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐          │
│ │ Card   │ │ Card   │ │ Card   │ │ Card   │          │
│ └────────┘ └────────┘ └────────┘ └────────┘          │
│                                                       │
│ Pagination                                           │
│                                                       │
│             BOTTOM NAVIGATION                         │
└───────────────────────────────────────────────────────┘


MOBILE:

┌───────────────────────────────┐
│ ☰       Categories       🔔  │
│                               │
│ Manage your product           │
│ categories                    │
│                               │
│       + Add Category          │
│                               │
│ Search.............. Filters  │
│                               │
│ [All] [Active] [Inactive]     │
│                               │
│ 24 categories       [Grid]    │
│                               │
│ ┌────────┐ ┌────────┐         │
│ │ Card   │ │ Card   │         │
│ └────────┘ └────────┘         │
│                               │
│ Pagination                    │
│                               │
│       BOTTOM NAVIGATION       │
└───────────────────────────────┘

The exact visual dimensions must be responsive and must NOT be
implemented using the ASCII dimensions above.

============================================================
2. DESKTOP NAVIGATION
============================================================

Desktop uses the existing BizCopilot left sidebar.

Navigation must remain consistent with the Product screen.

Do NOT create a new Category-specific navigation.

Products is the active parent section.

The sidebar remains visually identical to the existing BizCopilot
navigation system.

============================================================
3. TABLET / MOBILE NAVIGATION
============================================================

Tablet and Mobile use the existing BizCopilot bottom navigation.

Items:

Dashboard
Billing
Products
Customers
More

Products is active.

Do NOT display the desktop sidebar on Tablet or Mobile.

The bottom navigation must respect device safe areas.

============================================================
4. PAGE HEADER
============================================================

Header contains:

Title:

Categories

Subtitle:

Manage your product categories and keep your catalog organized.

Primary action:

+ Add Category

The button must use the exact same primary button component used by:

+ Add Product

Do not create a new button style.

============================================================
5. ADD CATEGORY BUTTON
============================================================

Position:

Desktop:
right side of page header.

Tablet:
right side where sufficient space exists.

Mobile:
responsive placement that does not cause header overflow.

Icon:

Plus

Label:

Add Category

Clicking it opens the frozen Add Category component.

It does NOT navigate to another page.

============================================================
6. SEARCH + FILTER ROW
============================================================

Immediately below the header:

[ Search by category name... ] [ Filters ]

Search:

Search icon
+
Search input

Filter:

Filter icon
+
Filters

The Filter button is immediately adjacent to Search.

DO NOT display:

[ All Categories ▼ ]

as a separate dropdown.

============================================================
7. FILTER PANEL
============================================================

Filter opens the existing BizCopilot filter component.

Category screen filters:

Status:

All
Active
Inactive

The filter component must use the same design and behavior as Product.

Desktop:
popover.

Tablet:
responsive popover/sheet.

Mobile:
bottom sheet.

============================================================
8. QUICK STATUS FILTERS
============================================================

Below Search + Filters:

[ All Categories 24 ]
[ Active 20 ]
[ Inactive 4 ]

Selected:

BizCopilot purple.

Unselected:

white/light surface with border.

Active count:

green semantic styling.

Inactive count:

red semantic styling.

These are quick-access filters.

============================================================
9. CATEGORY COUNT
============================================================

Display:

24 categories

The count updates according to the current result set where
appropriate.

Use the same visual hierarchy as Product:

156 products

============================================================
10. VIEW SWITCHER
============================================================

Provide:

[ Grid View ] [ Table View ]

Grid selected:

BizCopilot purple active state.

Table selected:

BizCopilot purple active state.

Use the same ViewSwitcher component as Product.

============================================================
11. GRID VIEW — FROZEN CATEGORY CARD
============================================================

This structure is ABSOLUTELY FROZEN.

┌──────────────────────────────┐
│ ✎                         🗑 │
│                              │
│            ICON              │
│                              │
│        Category Name         │
│                              │
│        48 Products           │
│                              │
│        Active  [●]           │
└──────────────────────────────┘

Exact hierarchy:

1. Edit — top-left
2. Delete — top-right
3. Category icon — centered
4. Category name — centered
5. Product count — centered
6. Active/Inactive + Toggle — centered

============================================================
12. GRID CARD — ACTIONS
============================================================

Edit:

Top-left.

Icon:

Pencil

Delete:

Top-right.

Icon:

Trash2

No:

- ...
- action menu
- dropdown
- bottom arrow
- navigation chevron

Actions are always directly visible.

============================================================
13. GRID CARD — CATEGORY ICON
============================================================

Category icon:

Centered horizontally.

Use the selected icon from Add/Edit Category.

The icon must use the BizCopilot colorful category icon system.

The icon is displayed inside a soft pastel circular/icon container.

The icon scales responsively.

============================================================
14. GRID CARD — CATEGORY NAME
============================================================

Centered.

Example:

Beverages

Food

Vegetables

Long category names must wrap naturally.

Do NOT unnecessarily truncate important names.

============================================================
15. GRID CARD — PRODUCT COUNT
============================================================

Centered.

Example:

48 Products

This is its own row.

Do NOT place it beside the status.

============================================================
16. GRID CARD — STATUS
============================================================

Centered.

Example:

Active [ON]

or:

Inactive [OFF]

Status and toggle are grouped together.

Active:

green semantic state.

Inactive:

red semantic state.

Toggle:

existing BizCopilot toggle component.

============================================================
17. NO CARD ARROW
============================================================

Category cards are NOT navigation cards.

Therefore:

NO arrow.

NO ChevronRight.

NO bottom-right navigation indicator.

============================================================
18. GRID DEFAULT PAGE SIZE
============================================================

Desktop:

12 categories.

Tablet:

8 categories.

Mobile:

4 categories.

These values control pagination.

They do NOT define fixed card dimensions.

============================================================
19. GRID RESPONSIVE LAYOUT
============================================================

Use CSS Grid / responsive layout.

Cards must have fluid width.

Do NOT hard-code card width.

Desktop:

12 categories by default.

Tablet:

8 categories by default.

Mobile:

4 categories by default.

Column count adapts to available width.

The card structure remains identical.

============================================================
20. GRID SCROLL BEHAVIOR
============================================================

At default page size:

NO unnecessary internal scrollbar.

If user explicitly selects a larger page size:

Example:

8 → 20

then:

- page size changes to 20
- pagination recalculates
- current page resets to page 1
- cards retain usable dimensions
- scrolling appears only if required

Do NOT shrink cards just to fit all selected categories.

============================================================
21. TABLE VIEW
============================================================

Use the same Table View component pattern as Product.

Category table columns:

# | Category | Products | Status | Actions

No checkbox.

No Type.

No Unit.

No Product Code.

No Created On.

No unnecessary columns.

============================================================
22. TABLE PRODUCT COUNT
============================================================

Products column displays:

48 Products

or simply:

48

depending on the established Product table visual style.

Maintain consistency across Product and Category tables.

============================================================
23. TABLE STATUS
============================================================

Status column:

Active [ON]

Inactive [OFF]

Use the same status/toggle component as Grid View.

============================================================
24. TABLE ACTIONS
============================================================

Actions:

Edit
Delete

Order:

Edit → Delete

No:

...

dropdown

navigation arrow

hidden action menu

============================================================
25. TABLE DEFAULT PAGE SIZE
============================================================

Desktop:

12 rows.

Tablet:

10 rows.

Mobile:

8 rows.

============================================================
26. TABLE SCROLL BEHAVIOR
============================================================

At default page size:

NO unnecessary internal scrollbar.

If the user explicitly selects a larger page size:

Example:

10 → 25

then:

- pagination recalculates
- current page resets to 1
- table body may scroll

IMPORTANT:

ONLY THE TABLE BODY / ROW AREA SCROLLS.

The table header MUST remain fixed.

Pagination remains outside the scrollable body.

Structure:

Fixed Header
↓
Scrollable Rows
↓
Pagination

============================================================
27. TABLE HEADER
============================================================

Header remains visible when rows scroll.

Header:

# | Category | Products | Status | Actions

Do NOT allow the header to scroll away.

============================================================
28. PAGINATION
============================================================

Pagination is shared with Product.

Controls:

Previous
Page numbers
Ellipsis where required
Next

Page-size selector:

Rows per page

Pagination must be responsive.

Desktop:

full pagination.

Tablet:

compact pagination.

Mobile:

compact pagination.

No horizontal overflow.

============================================================
29. PAGE-SIZE CHANGE
============================================================

When user changes page size:

1. Update selected page size.
2. Recalculate total pages.
3. Reset current page to 1.
4. Display the new page-size dataset.
5. Introduce scrolling only if required.

Example:

24 categories.

Tablet default:

8/page

→ 3 pages.

User selects:

20/page

→ 2 pages.

============================================================
30. SEARCH / FILTER + PAGINATION
============================================================

Search/filter changes result count.

Pagination recalculates.

If current page becomes invalid:

reset to page 1.

Example:

24 categories
↓
Active filter
↓
20 categories
↓
Tablet default 8/page
↓
3 pages

============================================================
31. RIGHT-SIDE PANEL — DESKTOP
============================================================

Desktop may include the existing contextual rail.

Quick Actions:

Import Categories
Export Categories

IMPORTANT:

DO NOT include:

Add Category

in Quick Actions.

Add Category exists only as the primary page-header action.

Category Summary:

Total Categories
Active
Inactive
Total Products

Tips:

Short category-management guidance.

Use the same panel/card styling as Product.

============================================================
32. TABLET CONTEXTUAL PANEL
============================================================

If sufficient horizontal space exists:

show the contextual rail.

If insufficient:

collapse/reflow it.

Never cause:

- horizontal overflow
- squeezed cards
- unreadable text

============================================================
33. MOBILE CONTEXTUAL PANEL
============================================================

Do not place the desktop right rail beside the main content.

Secondary information may collapse into an appropriate responsive
pattern.

Core category management remains the priority.

============================================================
34. ADD CATEGORY INTEGRATION
============================================================

Click:

+ Add Category

opens:

AddEditCategoryModal

Mode:

Add Category

The underlying Category screen remains visible.

============================================================
35. EDIT INTEGRATION
============================================================

Click:

Edit

from Grid or Table.

Open:

SAME AddEditCategoryModal.

Mode:

Edit Category

Pre-populate:

Category Name
Description
Icon
Status

Primary action:

Save Changes

Do NOT navigate away.

============================================================
36. DELETE INTEGRATION
============================================================

Click:

Delete

opens confirmation dialog.

Example:

Delete Category?

Are you sure you want to delete "Beverages"?

Actions:

Cancel
Delete Category

Use semantic danger styling.

============================================================
37. RESPONSIVE BREAKPOINTS
============================================================

Support:

Mobile:
< 768px

Tablet:
768px – 1023px

Desktop:
≥ 1024px

These are layout modes, NOT fixed canvas sizes.

The design must work between breakpoints as well.

============================================================
38. RESPONSIVE DESIGN RULE
============================================================

ONE CATEGORY SCREEN.

Do NOT design:

one desktop screen
+
one tablet screen
+
one mobile screen

as unrelated layouts.

Instead:

Create ONE responsive component system.

Only these adapt:

- width
- height
- spacing
- typography
- grid columns
- navigation placement
- contextual panel placement
- pagination density
- page-size defaults
- scrolling

Information hierarchy remains unchanged.

============================================================
39. NO STATIC PIXEL DESIGN
============================================================

Do NOT use screenshot-specific:

- fixed card width
- fixed card height
- fixed icon position
- fixed image/icon dimensions
- fixed table row height
- absolute coordinates

Use:

Grid
Flexbox
fluid sizing
responsive tokens
aspect-ratio
clamp()
min()
max()
intrinsic sizing

============================================================
40. TYPOGRAPHY
============================================================

Use the same typography system as Product.

Page title:

strong heading.

Subtitle:

secondary text.

Category name:

medium/semibold.

Product count:

supporting text.

Status:

compact semantic text.

Do NOT introduce a new font.

============================================================
41. ICON SYSTEM
============================================================

Use the same icon family as Product.

Preferred:

Lucide / equivalent outline SVG icon system.

Icons:

Search
Filter
Grid
Table
Plus
Pencil
Trash2
ChevronLeft
ChevronRight
Ellipsis
X

No emoji.

No mixed icon families.

============================================================
42. COLORS
============================================================

Primary:

BizCopilot Purple.

Active:

Green.

Inactive:

Red.

Delete:

Danger Red.

Background:

White / very light neutral.

Borders:

Soft neutral.

Text:

Dark neutral.

Muted:

Secondary neutral.

Category icons:

Use the predefined colorful icon palette.

============================================================
43. ACCESSIBILITY
============================================================

All icon-only buttons must have accessible labels.

Examples:

Edit category
Delete category
Search categories
Filter categories
Grid view
Table view
Previous page
Next page
Activate category
Deactivate category

Keyboard focus must be visible.

Touch targets must remain usable on Tablet and Mobile.

============================================================
44. VISUAL CONSISTENCY
============================================================

The Category screen must match the Product screen in:

- page header
- search
- filter
- status chips
- view switch
- card styling
- table styling
- pagination
- page-size selector
- navigation
- typography
- colors
- spacing
- icon style
- modal behavior
- responsive behavior

Do NOT create a Category-specific design language.

============================================================
45. FINAL CATEGORY SCREEN FLOW
============================================================

HEADER
↓
Categories
↓
Manage your product categories...
↓
+ Add Category

SEARCH
↓
Search by category name...
+
Filters

QUICK FILTERS
↓
All Categories
Active
Inactive

CONTENT HEADER
↓
24 categories
+
Grid / Table

GRID:

Edit + Delete
↓
Icon
↓
Category Name
↓
Product Count
↓
Active/Inactive + Toggle

TABLE:

#
Category
Products
Status + Toggle
Edit
Delete

PAGINATION
↓
Rows per page
↓
Page navigation

============================================================
46. FINAL FROZEN GRID CARD
============================================================

┌──────────────────────────────┐
│ ✎                         🗑 │
│                              │
│            ICON              │
│                              │
│        Category Name         │
│                              │
│        48 Products           │
│                              │
│        Active  [●]           │
└──────────────────────────────┘

This exact hierarchy MUST remain unchanged across:

Desktop
Tablet
Mobile

Only dimensions and spacing adapt.

============================================================
47. FINAL CATEGORY SCREEN ACCEPTANCE TEST
============================================================

Verify at:

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

✓ same visual design
✓ same card structure
✓ same hierarchy
✓ responsive cards
✓ responsive typography
✓ responsive icon sizing
✓ correct navigation
✓ correct page-size defaults
✓ no unnecessary scrollbar
✓ larger page size enables scrolling when required
✓ pagination recalculates
✓ table header remains fixed
✓ only table rows scroll
✓ pagination remains outside scroll area
✓ Add Category opens Add Category modal
✓ Edit opens the same modal in Edit mode
✓ Delete opens confirmation
✓ no Add Category inside Quick Actions
✓ no arrow on Category card
✓ no "..." action menu
✓ no unnecessary fields
✓ no horizontal overflow

============================================================
48. FINAL DESIGN PRINCIPLE
============================================================

The Category screen must be:

Simple
Fast
Clean
Premium
Consistent
Responsive

The user should immediately understand:

What categories exist
How many products belong to each
Whether the category is active
How to activate/deactivate it
How to edit it
How to delete it
How to add a category

No unnecessary complexity.

This is the FINAL FROZEN CATEGORY SCREEN STRUCTURE.