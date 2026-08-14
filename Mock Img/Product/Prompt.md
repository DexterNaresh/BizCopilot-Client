# BIZCOPILOT V1

# PRODUCT + CATEGORY MODULE

## FIGMA-LEVEL FROZEN UI / UX SPECIFICATION

---

# 0. ROLE OF THIS DOCUMENT

You are implementing the **Product + Category module** of BizCopilot.

This document is the implementation source of truth for:

* Product List
* Product Grid
* Product Table/List
* Add Product
* Edit Product
* Product actions
* Category Management
* Add Category
* Edit Category
* Category actions
* Responsive behavior
* Navigation integration
* Icon system
* Asset structure
* Angular component architecture

The following BizCopilot screens have already been frozen:

1. Startup / Setup
2. Login PIN
3. Navigation Shell
4. Billing
5. Product
6. Category

The supplied approved screenshots are visual references.

**Do not redesign the approved UI.**

If you believe another layout is better, do not change it.

If an implementation decision is unclear, preserve the frozen visual language and information hierarchy.

---

# 1. CORE PRODUCT PRINCIPLE

BizCopilot is designed for small businesses.

The Product module must therefore be:

* Fast
* Simple
* Premium
* Easy to scan
* Touch-friendly
* Low navigation
* Consistent with Billing

The user should be able to:

1. Search a product
2. Filter a product
3. Quickly identify availability
4. Quickly identify favourites
5. Add/edit a product
6. Manage categories

without unnecessary navigation.

---

# 2. V1 PRODUCT SCOPE

Product V1 supports:

* Product creation
* Product editing
* Product viewing
* Product deletion
* Product search
* Product filtering
* Product categories
* Product favourites
* Available / Unavailable status
* Product image
* Selling price
* Unit
* Barcode
* Description
* Import
* Export
* Grid View
* Table/List View
* Pagination

---

# 3. V1 PRODUCT BOUNDARY — IMPORTANT

There is **NO INVENTORY in V1**.

Do not show:

* Stock quantity
* Available stock
* Low stock
* Dead stock
* Stock movement
* Purchase stock
* Supplier stock
* Inventory valuation
* Warehouse
* Batch
* Stock adjustment
* Reorder level

The Product availability state means only:

> Can this product currently be sold?

Available:

Product can be selected for a new bill.

Unavailable:

Product remains in the catalog but cannot be selected for a new bill.

---

# 4. FUTURE V2 / V3 ROOM

Architecture must allow future expansion without redesigning the current Product model unnecessarily.

Potential V2:

* Inventory
* Purchase
* Supplier
* Cost/stock intelligence
* Product variants
* Multi-branch

Potential V3:

* Advanced pricing
* Advanced product intelligence
* AI recommendations
* Stock alerts
* AI agents

Do not implement those features now.

Do not add future fields to the visible V1 UI merely because they may exist later.

---

# 5. GLOBAL VISUAL LANGUAGE

Product and Category must visually match:

* Startup
* Login
* Navigation
* Billing

Use the existing BizCopilot design tokens.

Visual character:

* Premium
* Minimal
* Clean
* Modern
* Spacious
* Business-oriented

Avoid:

* generic admin-dashboard appearance
* excessive gradients
* excessive shadows
* glassmorphism
* excessive colors
* huge text
* tiny controls
* inconsistent cards
* inconsistent icon styles

---

# 6. COLOR SYSTEM

Use the **existing frozen BizCopilot purple** as the primary color.

Do not invent a new purple.

Semantic colors:

### Primary

BizCopilot Purple

Used for:

* Primary CTA
* Selected filter
* Active navigation
* Selected view
* Important interactive state

### Success

Green

Used for:

* Available
* Active
* Success

### Danger

Red

Used for:

* Unavailable
* Delete
* Destructive confirmation

### Favourite

Warm yellow/gold

Used for:

* Favourite star

### Surface

White

### Background

Very light neutral

### Primary Text

Dark navy / near-black

### Secondary Text

Muted gray / navy

---

# 7. FIGMA DESIGN TOKENS

Use these as the baseline if the existing global design tokens do not already define exact values.

## Spacing

Base unit:

`4px`

Common:

```text id="k1c8c4"
4px
8px
12px
16px
20px
24px
32px
40px
48px
```

Desktop page padding:

`24–32px`

Tablet:

`20–24px`

Mobile:

`16–20px`

---

# 8. BORDER RADIUS

Inputs:

`10–12px`

Buttons:

`10–12px`

Product cards:

`12–16px`

Table containers:

`12–16px`

Modals:

`16–20px`

Badges:

`999px` / pill

Do not introduce a different radius system.

---

# 9. BORDERS

Default:

`1px`

Use a very light neutral border.

Avoid heavy dark borders.

Inputs:

* subtle border
* purple focus state

Cards:

* subtle border
* soft shadow

---

# 10. SHADOWS

Use extremely subtle shadows.

Example baseline:

```text id="j7x2q8"
0 2px 8px rgba(...)
```

Do not make cards look floating excessively.

Modal shadow may be stronger than standard cards.

---

# 11. TYPOGRAPHY

Use the existing BizCopilot typography.

Preferred font:

Inter or the existing project font.

Baseline:

### Page title

Desktop:

`28–32px`

Tablet:

`24–28px`

Mobile:

`22–24px`

Weight:

`600–700`

### Page subtitle

`14–16px`

Muted.

### Product name

`14–16px`

Semibold.

### Category

`12–14px`

Muted.

### Price

`14–16px`

Semibold.

### Status

`11–12px`

Medium/semibold.

### Table

Header:

`12–13px`

Body:

`13–14px`

Do not create viewport-specific typography styles unless necessary.

---

# 12. ICON SYSTEM — FROZEN

Use:

**Google Material Symbols Rounded**

Do not mix icon libraries.

Do not use emojis.

Do not use random SVG icons.

Official Material Symbols supports a large icon library and variable axes including fill, weight, grade and optical size. Google provides the icons through Google Fonts, downloadable SVG/PNG assets and the Material Design repository.

Official icon browser:

[Google Material Symbols Library](https://fonts.google.com/icons?utm_source=chatgpt.com)

Official implementation guide:

[Google Material Symbols Guide](https://developers.google.com/fonts/docs/material_symbols?hl=en&utm_source=chatgpt.com)

Official repository:

[Google Material Design Icons GitHub](https://github.com/google/material-design-icons?utm_source=chatgpt.com)

Material Symbols are available under Apache License 2.0.

---

# 13. ICON STYLE

Preferred:

**Material Symbols Rounded**

Use consistent:

* weight
* fill
* grade
* optical size

For normal action icons:

* outlined/unfilled appearance

For active Favourite:

* filled star

For active navigation:

* use the frozen Navigation Shell state

Do not randomly change icon weight between screens.

---

# 14. ICON SIZE

Desktop:

* Standard icon: `20–24px`
* Page/action icon: `24px`
* Navigation: `20–22px`

Tablet:

* Standard: `22–24px`
* Navigation: `22–24px`

Mobile:

* Standard: `22–24px`
* Bottom navigation: `24px`

Touch target:

`44px minimum` where practical.

The icon can be smaller than the clickable container.

---

# 15. PRODUCT ICON MAP

Use these Material Symbols names.

```text id="8y1f2c"
Product              inventory_2
Category             category
Search               search
Add                  add
Edit                 edit
Delete               delete_outline
Favourite active     star
Favourite inactive   star_outline
Available            check_circle
Unavailable          block
More                 more_vert
Grid                 grid_view
Table                view_list
Import               upload
Export               download
Sort                 swap_vert
Dropdown             expand_more
Close                close
Back                 arrow_back
Save                 save
Image                photo_camera
Barcode              barcode_scanner
Previous             chevron_left
Next                 chevron_right
```

If the exact symbol is unavailable in the installed Material Symbols version, choose the closest official Material Symbol while preserving the same visual meaning.

---

# 16. ICON ASSET LOCATION

If self-hosting Material Symbols:

```text id="hkg4am"
src/
└── assets/
    └── fonts/
        └── material-symbols/
```

Example:

```text id="n7y7su"
src/assets/fonts/material-symbols/
└── MaterialSymbolsRounded.woff2
```

If individual SVG assets are required:

```text id="9at5c8"
src/assets/icons/material/
```

Example:

```text id="t4i4eg"
src/assets/icons/material/
├── inventory_2.svg
├── category.svg
├── search.svg
├── add.svg
├── edit.svg
├── delete_outline.svg
├── star.svg
├── star_outline.svg
├── check_circle.svg
├── block.svg
├── more_vert.svg
├── grid_view.svg
├── view_list.svg
├── upload.svg
├── download.svg
├── swap_vert.svg
├── expand_more.svg
├── close.svg
├── arrow_back.svg
├── save.svg
├── photo_camera.svg
└── barcode_scanner.svg
```

Do not download icons from random websites.

---

# 17. PRODUCT IMAGE ASSETS

Product images are content assets, not icons.

Recommended:

```text id="v0s4uo"
src/assets/images/products/
```

Example:

```text id="x6f4q2"
src/assets/images/products/
├── cappuccino.webp
├── chocolate-cake.webp
├── veg-burger.webp
├── orange-juice.webp
├── cold-coffee.webp
└── ...
```

Use optimized formats.

Provide fallback image treatment.

---

# 18. NAVIGATION SHELL

Product uses the global Navigation Shell.

Never create Product-specific navigation.

---

# 19. DESKTOP NAVIGATION

Desktop:

```text id="0kgyo6"
┌────────────────────────────┐
│ BizCopilot                 │
│                            │
│ Home                       │
│ Billing                    │
│ Products       ← ACTIVE    │
│ Customers                  │
│ Offers                     │
│ Reports                    │
│ AI Assistant               │
│                            │
│ MANAGEMENT                 │
│ Settings                   │
│ Backup & Sync              │
│                            │
│ Online                     │
└────────────────────────────┘
```

Product must use the exact active-navigation visual treatment from the frozen Navigation Shell.

---

# 20. TABLET NAVIGATION

Tablet:

```text id="yspnps"
┌─────────────────────────────────────────────┐
│ Home │ Billing │ Products │ Customers │ More │
└─────────────────────────────────────────────┘
```

Products active.

Persistent bottom navigation.

No desktop sidebar.

---

# 21. MOBILE NAVIGATION

Mobile:

```text id="d2gk0o"
┌─────────────────────────────────────────────┐
│ Home │ Billing │ Products │ Customers │ More │
└─────────────────────────────────────────────┘
```

Products active.

`More` opens the global navigation drawer/menu.

Do not create a Product-specific menu.

---

# 22. PRODUCT DESKTOP VIEWPORT

Desktop is the information-rich layout.

```text id="5b1j5y"
┌──────────────────────────────────────────────────────────────┐
│ Sidebar │ Products                            [Add Product]  │
│         │                                                      │
│         │ Manage your product catalog                         │
│         │                                                      │
│         │ Search                                               │
│         │                                                      │
│         │ All Products | Available | Unavailable               │
│         │                                                      │
│         │ Favourites | All Categories | Grid | Table           │
│         │                                                      │
│         │ Product Catalog                                      │
│         │                                                      │
│         │ Product Product Product Product                      │
│         │ Product Product Product Product                      │
│         │                                                      │
│         │ Pagination                                           │
└──────────────────────────────────────────────────────────────┘
```

Desktop can have approved supporting cards on the right.

---

# 23. PRODUCT HEADER

Left:

```text id="tqih4h"
Products

Manage your product catalog and keep it up to date.
```

Right:

```text id="2yrq7n"
[ + Add New Product ]
```

Primary button:

* Purple
* White text
* Add icon
* 10–12px radius
* Comfortable height
* Clear hover/focus states

---

# 24. PRODUCT SEARCH

Search field:

```text id="x4u6gl"
┌─────────────────────────────────────────────┐
│ 🔍  Search by product name or barcode...   │
└─────────────────────────────────────────────┘
```

Supports:

* Product name
* Barcode

Height:

Approximately `44–48px`.

IMPORTANT:

There is **NO Filter button next to Search**.

This is frozen for:

* Desktop
* Tablet
* Mobile

---

# 25. PRODUCT PRIMARY FILTERS

```text id="s4b6px"
[ All Products 156 ]
[ Available 142 ]
[ Unavailable 14 ]
```

Selected:

Purple background.

Unselected:

White/light surface.

Available count:

Green.

Unavailable count:

Red.

All Products selected by default.

---

# 26. PRODUCT SECONDARY CONTROLS

```text id="p5aq0h"
[ ★ Favourites 28 ]
[ All Categories ▼ ]
[ Grid View ]
[ Table View ]
```

No separate Filter button.

`All Categories` is the category filter.

Grid/Table controls switch presentation.

---

# 27. PRODUCT GRID CARD — FIGMA STRUCTURE

Each card:

```text id="s1h0kq"
┌──────────────────────────────────────┐
│                                      │
│          PRODUCT IMAGE               │
│                                      │
├──────────────────────────────────────┤
│ Product Name                      ⋮ │
│ Category              Available      │
│ ₹120.00                         ★    │
└──────────────────────────────────────┘
```

Product image:

* fixed aspect ratio
* rounded top corners
* object-fit: cover
* fallback image if missing

---

# 28. PRODUCT CARD INFORMATION HIERARCHY — FINAL

This is one of the most important frozen decisions.

### Row 1

```text id="l9j6t2"
Product Name                              ⋮
```

### Row 2

```text id="y6r5lq"
Category                    Available / Unavailable
```

### Row 3

```text id="z4t7ob"
₹ Selling Price                         ★ / ☆
```

Availability:

**Complete right side of Row 2.**

Favourite:

**Complete right side of Row 3.**

Do NOT move them.

Do NOT put availability above price.

Do NOT put Favourite beside Category.

---

# 29. PRODUCT CARD STATUS

Available:

```text id="5v94w6"
Available
```

Soft green pill.

Unavailable:

```text id="u8s4qk"
Unavailable
```

Soft red pill.

Keep badge compact.

---

# 30. PRODUCT FAVOURITE

Inactive:

`star_outline`

Active:

`star`

Active color:

Warm gold/yellow.

Favourite must have:

* clear state
* accessible label
* touch target

---

# 31. PRODUCT MORE MENU

Use:

`more_vert`

Menu:

```text id="jq6e6v"
Edit Product
Mark Available / Unavailable
Add to Favourite / Remove from Favourite
Delete Product
```

Use a compact contextual menu.

Do not place all actions directly on card.

---

# 32. PRODUCT TABLE — DESKTOP

Use:

```text id="0r6z3q"
┌──────────────────────────────────────────────────────────────┐
│ Product ↕ │ Category ↕ │ Status ↕ │ Price ↕ │ ★ │ Actions   │
├──────────────────────────────────────────────────────────────┤
│ Product   │ Category    │ Available │ ₹120   │ ★ │ ⋮        │
│ Product   │ Category    │ Available │ ₹80    │ ☆ │ ⋮        │
└──────────────────────────────────────────────────────────────┘
```

Sortable:

* Product
* Category
* Status
* Price

Not sortable:

* Favourite
* Actions

---

# 33. PRODUCT CODE

Product Code is NOT displayed in the Product UI.

Do not add it to:

* grid
* table
* mobile list
* header
* product card

Barcode remains optional and belongs inside Product data/form.

---

# 34. TABLET PRODUCT VIEW

Tablet uses:

* bottom navigation
* more horizontal space
* touch-friendly controls

Table view may show:

```text id="q8l9b1"
Product
Category
Status
Price
Favourite
Actions
```

Do not use desktop sidebar.

---

# 35. MOBILE PRODUCT VIEW

Mobile uses:

* bottom navigation
* compact header
* two-column product grid
* compact responsive list/table

Structure:

```text id="1n9m5w"
┌────────────────────────────────────┐
│ Products              + Add        │
│ Manage your product catalog        │
├────────────────────────────────────┤
│ Search                             │
├────────────────────────────────────┤
│ All Products | Available | Unavailable│
├────────────────────────────────────┤
│ Favourites | All Categories | View │
├────────────────────────────────────┤
│ Product       Product              │
│ Product       Product              │
│ Product       Product              │
├────────────────────────────────────┤
│ Home Billing Products Customers More│
└────────────────────────────────────┘
```

---

# 36. MOBILE PRODUCT CARD

Same information hierarchy:

```text id="u2c6d0"
Product Name                         ⋮

Category                    Available

₹120.00                              ★
```

Do not redesign the hierarchy for mobile.

---

# 37. MOBILE TABLE/LIST VIEW

Do NOT force desktop table horizontally.

Use:

```text id="e8n7z5"
┌──────────────────────────────────┐
│ [image] Cappuccino             ⋮ │
│         Beverages    Available   │
│         ₹120.00              ★   │
├──────────────────────────────────┤
│ [image] Chocolate Cake         ⋮ │
│         Desserts     Available   │
│         ₹80.00               ☆   │
└──────────────────────────────────┘
```

---

# 38. PRODUCT PAGINATION

Desktop/tablet:

```text id="kq8xg0"
Rows per page [12 ▼]

1–12 of 156

[←] [1] [2] [3] ... [13] [→]
```

Mobile:

Compact responsive pagination.

No horizontal overflow.

---

# 39. PRODUCT QUICK ACTIONS

Desktop:

```text id="8j4k7n"
Quick Actions

[ + Add New Product ]

[ Categories ]

[ Import Products ]

[ Export Products ]
```

Important distinction:

Quick Actions = operations.

Filter controls = discovery.

Do not mix them.

---

# 40. CATEGORIES ENTRY

Click:

```text id="q0r4r1"
Categories
```

opens:

**Category Management screen**

Categories is a Product sub-module.

---

# 41. CATEGORY DESKTOP VIEW

```text id="8y8x1m"
┌──────────────────────────────────────────────────────────────┐
│ Sidebar │ Categories                         [Add Category]  │
│         │                                                      │
│         │ Organize your products with categories              │
│         │                                                      │
│         │ Search categories by name...                         │
│         │                                                      │
│         │ All Status ▼                                         │
│         │                                                      │
│         │ Category Name ↕ │ Products ↕ │ Status ↕ │ Created On ↕│
│         │                                                      │
│         │ Beverages        │ 32 │ Active │ 15 May │ ✎ 🗑      │
│         │ Desserts         │ 18 │ Active │ 15 May │ ✎ 🗑      │
│         │ Food             │ 45 │ Active │ 14 May │ ✎ 🗑      │
│         │                                                      │
│         │ Pagination                                           │
└──────────────────────────────────────────────────────────────┘
```

---

# 42. CATEGORY HEADER

Title:

Categories

Subtitle:

Organize your products with categories.

Primary:

[ + Add New Category ]

Purple.

---

# 43. CATEGORY SEARCH

```text id="3x3x3x"
[ 🔍 Search categories by name... ]
```

Height:

44–48px.

No Filter button beside it.

---

# 44. CATEGORY STATUS

```text id="5h5h5h"
[ All Status ▼ ]
```

Used to filter:

* All
* Active
* Inactive

---

# 45. CATEGORY TABLE

Columns:

```text id="1f1f1f"
Category Name ↕
Products ↕
Status ↕
Created On ↕
Actions
```

Sortable:

* Category Name
* Products
* Status
* Created On

Not sortable:

* Actions

---

# 46. CATEGORY MOBILE LIST

Do not force the desktop table.

Use:

```text id="2k2k2k"
┌──────────────────────────────────┐
│ ☕ Beverages                 ⋮   │
│ 32 Products      Active          │
│ Created 15 May 2025              │
│                           ✎ 🗑    │
└──────────────────────────────────┘
```

---

# 47. CATEGORY TABLET

Tablet can use the table.

Use:

* larger row height
* comfortable columns
* touch-friendly actions
* bottom navigation

Products remains active in navigation because Categories belongs to Product management.

---

# 48. ADD PRODUCT — OVERLAY RULE

THIS IS FROZEN.

Add Product is an **OVERLAY**, not a normal navigation page.

When:

```text id="r3r3r3"
+ Add New Product
```

is clicked:

Open Add Product above the current Product screen.

The Product screen remains underneath.

---

# 49. DESKTOP ADD PRODUCT OVERLAY

```text id="4m4m4m"
┌──────────────────────────────────────────────────────┐
│ PRODUCT SCREEN                                       │
│                                                      │
│       ┌──────────────────────────────────┐           │
│       │ Add New Product                  │           │
│       │                                  │           │
│       │ Product Image                    │           │
│       │ Product Name                     │           │
│       │ Category                         │           │
│       │ Selling Price                    │           │
│       │ Unit                             │           │
│       │ Barcode                          │           │
│       │ Availability                     │           │
│       │ Description                      │           │
│       │                                  │           │
│       │ [Cancel] [Save Product]          │           │
│       └──────────────────────────────────┘           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

Backdrop:

* semi-transparent
* dims parent screen

Modal:

* white
* rounded
* soft shadow
* internal scroll
* centered

---

# 50. TABLET ADD PRODUCT OVERLAY

Tablet:

* centered responsive overlay
* parent screen remains visible
* touch-friendly
* internal scroll

Do not automatically use full screen.

---

# 51. MOBILE ADD PRODUCT OVERLAY

Mobile:

Use responsive full-height modal/sheet presentation.

Must support:

* safe-area
* internal scroll
* sticky actions where appropriate
* touch-friendly inputs

It remains an overlay conceptually.

---

# 52. ADD PRODUCT STATE PRESERVATION

Before opening overlay, preserve:

* search
* selected filter
* category
* favourite filter
* view mode
* current page
* scroll position where practical

After closing:

Restore the parent screen.

After save:

* close overlay
* update list
* new product follows current filter/sort rules

---

# 53. ADD PRODUCT FORM — FIGMA LEVEL

## Product Image

Optional.

Upload area:

* dashed border
* rounded corners
* image placeholder
* camera/image icon

## Product Name

Required.

Text field.

## Category

Required.

Dropdown.

Values come from Category master.

## Selling Price

Required.

Currency prefix:

₹

## Cost Price

Only if already approved in the frozen form.

Do not introduce inventory calculations.

## MRP

Optional.

## Unit

Required.

Dropdown.

## Availability

Available / Unavailable.

## Description

Optional.

## Barcode

Optional.

Scanner-compatible.

---

# 54. ADD PRODUCT ACTION BAR

Bottom of form:

```text id="9v9v9v"
[ Cancel ]                    [ Save Product ]
```

Save:

Purple.

Cancel:

Outlined/secondary.

Mobile:

Prefer sticky action area if the form scrolls.

---

# 55. ADD CATEGORY — OVERLAY RULE

Add Category is also an overlay.

Click:

```text id="0q0q0q"
+ Add New Category
```

opens overlay above Categories.

Parent screen remains visible.

---

# 56. ADD CATEGORY FORM

Fields:

### Category Name

Required.

### Description

Optional.

### Category Icon

Optional.

Material Symbol.

### Status

Active / Inactive.

Actions:

```text id="8z8z8z"
[ Cancel ] [ Save Category ]
```

---

# 57. ADD CATEGORY OVERLAY — DESKTOP

* Centered
* White
* Rounded
* Shadow
* Backdrop
* Parent visible

---

# 58. ADD CATEGORY OVERLAY — TABLET

* Responsive centered modal
* Parent visible
* Touch-friendly

---

# 59. ADD CATEGORY OVERLAY — MOBILE

* Full-height/sheet-style
* Safe-area
* Internal scrolling
* Sticky actions if required

---

# 60. CATEGORY STATE PRESERVATION

Preserve:

* search
* status
* sorting
* current page
* scroll position

After save:

* close overlay
* update category list

---

# 61. CREATE CATEGORY FROM PRODUCT

If there are no categories:

```text id="4x4x4x"
Category

[ Select Category ▼ ]

No categories yet?

[ + Create Category ]
```

Clicking Create Category:

1. Opens Add Category overlay.
2. User creates category.
3. Category is saved.
4. Return to Add Product.
5. Preserve all entered Product data.
6. Newly created category becomes selectable.
7. Preferably auto-select it.

No unnecessary navigation.

---

# 62. PRODUCT → BILLING

Products created in Product module appear in Billing.

Billing uses:

* Product name
* Product image
* Selling price
* Category
* Favourite
* Availability

Unavailable products cannot be newly selected.

---

# 63. HISTORICAL BILL PROTECTION

Product master changes must not modify completed bills.

Example:

Current:

Cappuccino — ₹120

Later:

Cappuccino — ₹130

Historical bill remains:

Cappuccino — ₹120

The sale must use historical snapshot information.

---

# 64. PRODUCT DATA MODEL

Minimum UI model:

```text id="3v3v3v"
id
name
category
sellingPrice
image
availability
favourite
barcode
unit
description
createdAt
updatedAt
```

---

# 65. CATEGORY DATA MODEL

Minimum:

```text id="6x6x6x"
id
name
description
icon
status
productCount
createdAt
updatedAt
```

---

# 66. ANGULAR PROJECT STRUCTURE

Use feature-based architecture.

```text id="7m7m7m"
src/app/
│
├── core/
│
├── shared/
│   ├── components/
│   ├── directives/
│   ├── pipes/
│   └── ui/
│
├── layout/
│   └── navigation/
│
└── features/
    └── products/
        │
        ├── pages/
        │   ├── product-list/
        │   └── categories/
        │
        ├── components/
        │   ├── product-card/
        │   ├── product-table/
        │   ├── product-list-item/
        │   ├── product-filters/
        │   ├── product-actions/
        │   ├── product-form/
        │   ├── category-table/
        │   ├── category-list-item/
        │   ├── category-form/
        │   ├── delete-confirmation/
        │   └── ...
        │
        ├── models/
        ├── services/
        └── state/
```

---

# 67. REUSABLE COMPONENTS

Create reusable components for:

* Search field
* Filter chips
* Status badge
* Favourite button
* Product card
* Product table
* Product list item
* Category table
* Category list item
* Pagination
* Dropdown
* Modal
* Confirmation dialog
* Primary button
* Secondary button
* Navigation

Do not duplicate components unnecessarily.

---

# 68. RESPONSIVE IMPLEMENTATION

Do NOT build:

* separate desktop business logic
* separate tablet business logic
* separate mobile business logic

Use shared state and data.

Only presentation changes.

Use:

* CSS Grid
* Flexbox
* responsive breakpoints
* reusable Angular components

---

# 69. RESPONSIVE BREAKPOINT PHILOSOPHY

Desktop:

Information-rich.

Tablet:

Balanced.

Mobile:

Compact and touch-friendly.

Do not simply scale everything down.

---

# 70. OFFLINE-FIRST

Product follows global BizCopilot offline architecture.

Use:

* Client-generated IDs
* OperationId
* Idempotency
* Offline queue
* ACK-based synchronization
* Server as source of truth

Do not create Product-specific synchronization logic.

---

# 71. LOADING STATE

Use the existing global skeleton/loading system.

Product:

* card skeleton
* table skeleton

Category:

* table/list skeleton

Do not introduce a different loading style.

---

# 72. EMPTY STATES

Product:

```text id="0a0a0a"
No products found
```

Category:

```text id="0b0b0b"
No categories yet
```

Search:

```text id="0c0c0c"
No products match your search
```

Category search:

```text id="0d0d0d"
No categories match your search
```

Keep empty states visually consistent.

---

# 73. ERROR STATE

Use:

```text id="0e0e0e"
Something went wrong.

Please try again.
```

Use global error component.

---

# 74. OFFLINE STATE

Use the global BizCopilot offline indicator.

Do not invent a Product-specific offline UI.

---

# 75. ACCESSIBILITY

All icon-only buttons require accessible labels.

Examples:

* Add to favourites
* Remove from favourites
* Product actions
* Edit product
* Delete product
* Edit category
* Delete category
* Grid view
* Table view
* Search products
* Search categories
* Close modal
* Back

Maintain sufficient contrast.

Do not use color alone to communicate state.

---

# 76. TOUCH TARGETS

Mobile/tablet:

Minimum approximately `44px`.

Especially:

* Add
* Favourite
* More
* Dropdown
* Grid/Table
* Pagination
* Edit
* Delete
* Navigation

---

# 77. CATEGORY DELETE RULE

If category has products:

Do not silently delete.

Show:

```text id="0f0f0f"
This category is used by 32 products.

Reassign the products before deleting this category.
```

Follow backend domain rules.

---

# 78. PRODUCT DELETE RULE

Delete requires confirmation.

```text id="0g0g0g"
Delete Product?

Are you sure you want to delete Cappuccino?

[ Cancel ] [ Delete ]
```

Delete is red.

Historical bills remain unchanged.

---

# 79. FINAL FROZEN RULE — SEARCH

There is NO Filter button beside Search.

Correct:

```text id="0h0h0h"
Search

All Products
Available
Unavailable

Favourites
All Categories
Grid / Table
```

Incorrect:

```text id="0i0i0i"
Search    [Filter]
```

Never implement the second version.

---

# 80. FINAL FROZEN RULE — PRODUCT CARD

Always:

```text id="0j0j0j"
Row 1:
Name                                  ⋮

Row 2:
Category                  Available / Unavailable

Row 3:
₹ Price                              ★
```

This is consistent across:

* Desktop
* Tablet
* Mobile

---

# 81. FINAL FROZEN RULE — NAVIGATION

```text id="0k0k0k"
Desktop
→ Left Sidebar

Tablet
→ Bottom Navigation

Mobile
→ Bottom Navigation
→ More opens global menu
```

---

# 82. FINAL FROZEN RULE — OVERLAYS

Add Product:

```text id="0l0l0l"
Product screen
      ↓
Add Product
      ↓
Overlay
      ↓
Parent remains underneath
      ↓
Save
      ↓
Overlay closes
      ↓
Product screen updates
```

Add Category:

```text id="0m0m0m"
Category screen
      ↓
Add Category
      ↓
Overlay
      ↓
Parent remains underneath
      ↓
Save
      ↓
Overlay closes
      ↓
Category screen updates
```

Parent state must be preserved.

---

# 83. FIGMA IMPLEMENTATION NOTES

When translating the reference screenshots into Figma/component specifications:

Define:

### Components

* ProductCard
* ProductTable
* ProductListItem
* CategoryTable
* CategoryListItem
* SearchField
* StatusFilter
* CategoryFilter
* FavouriteButton
* ViewToggle
* PrimaryButton
* SecondaryButton
* StatusBadge
* Modal
* ConfirmationDialog
* Pagination
* BottomNavigation
* SidebarNavigation

### Component variants

ProductCard:

```text id="0n0n0n"
Default
Favourite
Unavailable
Menu Open
Image Missing
```

Status:

```text id="0o0o0o"
Available
Unavailable
Active
Inactive
```

Button:

```text id="0p0p0p"
Primary
Secondary
Danger
Disabled
Loading
```

View:

```text id="0q0q0q"
Grid
Table
```

---

# 84. PRODUCT CARD STATES

Must support:

### Default

Available + not favourite.

### Favourite

Available + favourite.

### Unavailable

Unavailable + not favourite.

### Unavailable Favourite

Unavailable + favourite.

### Image Missing

Fallback image.

### Loading

Skeleton.

---

# 85. FORM STATES

Inputs must support:

* Default
* Focus
* Filled
* Error
* Disabled
* Read-only where required

Error example:

```text id="0r0r0r"
Product Name

[                       ]

Product name is required.
```

Error:

* red border
* red helper text
* accessible error state

---

# 86. MODAL STATES

Modal:

* Opening
* Open
* Saving
* Success
* Error
* Closing

During save:

```text id="0s0s0s"
[ Saving... ]
```

Prevent accidental duplicate submission.

---

# 87. RESPONSIVE MODAL WIDTH

Baseline:

Desktop:

Approximately `560–720px` depending on form length.

Tablet:

Approximately `70–85%` viewport width, constrained by max-width.

Mobile:

Approximately full viewport width with safe horizontal margins, or full-height sheet where appropriate.

Do not make mobile forms tiny.

---

# 88. Z-INDEX / LAYERING

Use a consistent application layering system.

Recommended conceptual order:

```text id="0t0t0t"
Base content
↓
Sticky navigation
↓
Dropdown / popover
↓
Modal backdrop
↓
Modal
↓
Confirmation dialog
↓
Toast
```

Do not randomly assign z-index values throughout the Product feature.

Use shared tokens.

---

# 89. ANIMATION

Keep animations subtle.

Recommended:

* modal fade/slide
* dropdown transition
* button state transition
* favourite state transition

Avoid:

* excessive product-card animations
* large page transitions
* distracting effects

Animations must not slow billing/product workflows.

---

# 90. PERFORMANCE

Product screens may contain many products.

Use:

* lazy image loading
* optimized images
* reusable components
* pagination
* efficient change detection
* avoid unnecessary DOM duplication

Do not render multiple hidden copies of the Product grid/table just to support responsive layouts unless required.

---

# 91. PRODUCT → BILLING CONSISTENCY

Product data must use the same product identity referenced by Billing.

Do not create a separate Product object specifically for Billing.

Billing should consume the canonical Product domain representation according to the existing architecture.

---

# 92. CATEGORY MASTER DATA

Category created in Category Management becomes available to:

* Add Product
* Edit Product
* Category filtering
* Product catalog

Category should not be duplicated as arbitrary free text in Product.

---

# 93. IMPORT / EXPORT

Import and Export are Product actions.

They are NOT placed beside Search.

They are NOT primary header actions.

They may be accessed through:

```text id="0u0u0u"
Quick Actions
    ↓
Import Products
Export Products
```

The exact import/export workflow can be implemented separately while preserving the same visual language.

---

# 94. MOBILE QUICK ACTIONS

Do not create a large Quick Actions sidebar on mobile.

Use an appropriate compact menu/action sheet.

The primary mobile action remains:

[ + Add Product ]

---

# 95. TABLET QUICK ACTIONS

Use a compact action area or menu appropriate to the tablet layout.

Do not consume excessive horizontal space.

---

# 96. CATEGORY QUICK ACTIONS

The primary Category action is:

[ + Add New Category ]

Other actions are contextual.

Do not add unnecessary top-level buttons.

---

# 97. SECURITY / ROLE EXPECTATION

Product management actions are owner-level management operations.

Waiter should not receive unrestricted product management controls.

The frontend must respect the application's global role/permission model.

Do not hard-code role logic only inside Product UI.

Use the global authorization mechanism.

---

# 98. V1 ROLE BEHAVIOR

Owner:

Can:

* View Products
* Add Product
* Edit Product
* Delete Product
* Manage Categories
* Import
* Export
* Favourite
* Change availability

Waiter:

Product management capabilities should follow the global role rules.

Do not expose owner-only management actions to Waiter unless explicitly authorized.

---

# 99. FINAL DESIGN QUALITY

The finished Product + Category module must feel:

**Premium**

**Simple**

**Fast**

**Professional**

**Modern**

**Touch-friendly**

**Business-focused**

It must NOT feel like:

* a generic ERP
* a complex enterprise dashboard
* a developer admin panel
* a stock-management application

This is a fast SMB business application.

---

# 100. FINAL ACCEPTANCE CHECKLIST

## Product Screen

* [ ] Desktop matches frozen reference
* [ ] Tablet matches frozen reference
* [ ] Mobile matches frozen reference
* [ ] Search works
* [ ] No Filter button beside Search
* [ ] All Products works
* [ ] Available works
* [ ] Unavailable works
* [ ] Favourites works
* [ ] Category filter works
* [ ] Grid View works
* [ ] Table/List View works
* [ ] Pagination works
* [ ] Product cards use frozen 3-row hierarchy
* [ ] Availability is right-aligned on Row 2
* [ ] Favourite is right-aligned on Row 3
* [ ] Product Code is not displayed
* [ ] More menu works
* [ ] Add Product works
* [ ] Edit Product works
* [ ] Delete Product works
* [ ] Favourite toggle works
* [ ] Availability toggle works
* [ ] Import exists in Quick Actions
* [ ] Export exists in Quick Actions

## Category Screen

* [ ] Desktop matches frozen reference
* [ ] Tablet matches frozen reference
* [ ] Mobile matches frozen reference
* [ ] Search works
* [ ] All Status works
* [ ] Category Name sorting works
* [ ] Products sorting works
* [ ] Status sorting works
* [ ] Created On sorting works
* [ ] Actions are not sortable
* [ ] Add Category works
* [ ] Edit Category works
* [ ] Delete Category works
* [ ] Product count works
* [ ] Status works
* [ ] Pagination works

## Add Product

* [ ] Opens as overlay
* [ ] Does not replace Product screen
* [ ] Parent screen remains visible
* [ ] Parent screen is dimmed
* [ ] Parent state is preserved
* [ ] Form scrolls internally
* [ ] Mobile layout works
* [ ] Tablet layout works
* [ ] Desktop layout works
* [ ] Save works
* [ ] Cancel works
* [ ] Validation works
* [ ] New product appears correctly

## Add Category

* [ ] Opens as overlay
* [ ] Does not replace Category screen
* [ ] Parent screen remains visible
* [ ] Parent state is preserved
* [ ] Form works on desktop
* [ ] Form works on tablet
* [ ] Form works on mobile
* [ ] Save works
* [ ] Cancel works
* [ ] Validation works
* [ ] New category appears in Product category dropdown

## Billing Integration

* [ ] Product appears in Billing
* [ ] Favourite integrates with Billing
* [ ] Availability integrates with Billing
* [ ] Unavailable product cannot be newly billed
* [ ] Historical bills remain unchanged

## Navigation

* [ ] Desktop uses sidebar
* [ ] Tablet uses bottom navigation
* [ ] Mobile uses bottom navigation
* [ ] More opens global menu
* [ ] Product is active
* [ ] Category remains under Product context

## Icon / Asset

* [ ] Material Symbols Rounded used
* [ ] No emoji icons
* [ ] No random icon library
* [ ] Correct icon states
* [ ] Correct icon sizing
* [ ] Assets stored in correct folders
* [ ] Product images stored separately from UI icons

## Architecture

* [ ] Feature-based Angular structure
* [ ] Shared components
* [ ] Shared navigation
* [ ] Shared design tokens
* [ ] Responsive implementation
* [ ] Offline-first architecture
* [ ] Idempotency
* [ ] OperationId
* [ ] ACK synchronization
* [ ] Server remains source of truth

---

# 101. FINAL SOURCE OF TRUTH

The following are authoritative:

1. Approved frozen reference screenshots
2. This Product + Category specification
3. Existing BizCopilot global design tokens
4. Existing Navigation Shell
5. Existing Billing design

Do not override the frozen UI because of personal design preference.

Do not introduce:

* new navigation
* new filters
* Product Code
* inventory
* stock
* supplier
* purchase
* V2/V3 features

The final Product + Category implementation must look like it was designed as part of the SAME BizCopilot product from day one.

**Implement the UI at Figma-level visual precision, preserve the approved information hierarchy, and maintain exact consistency across Desktop, Tablet and Mobile.**
