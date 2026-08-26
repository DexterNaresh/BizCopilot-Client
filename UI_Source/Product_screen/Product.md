# BizCopilot V1 — PRODUCT SCREEN
# FINAL FUNCTIONAL IMPLEMENTATION PROMPT
#
# IMPORTANT:
# The Product Facade already exists.
# Do NOT create a new Product Facade.
# Do NOT redesign the Product screen.
# Do NOT implement the Add Product screen in this task.
#
# The existing Product HTML + TypeScript are provided separately.
# Implement ONLY the actual Product screen functionality.

============================================================
1. FIRST — UNDERSTAND THE APPLICATION CONTRACT
============================================================

Before modifying any Product code:

READ AND UNDERSTAND:

- Application Contract MD
- Architecture / project rules MD
- Product-related MD files
- Category-related MD files
- Existing Product Facade
- Existing ProductService
- Existing ProductEntity
- Existing Category Facade / Service / ViewModel
- Existing shared UI components
- Existing navigation implementation

The Application Contract MD is the authoritative application-level
contract.

Do NOT invent behavior that conflicts with the contract.

Do NOT create a new architecture when the contract and existing project
already define one.

Follow the project's existing:

- naming conventions
- state management
- service boundaries
- facade pattern
- error handling
- API contracts
- TypeScript conventions
- Angular conventions
- shared component usage

============================================================
2. SCOPE OF THIS TASK
============================================================

IMPLEMENT:

✓ Product data loading/display
✓ Product mapping required by UI
✓ Category relationship/display
✓ Product images display/fallback
✓ Favourite state/interaction
✓ Availability state/interaction
✓ Search
✓ Filters
✓ Category filter
✓ Favourite filter
✓ Availability filter
✓ Quick filters
✓ Grid/Table switching
✓ Pagination
✓ Rows-per-page behavior
✓ Responsive page-size behavior
✓ Grid scrolling behavior
✓ Table-body-only scrolling
✓ Edit trigger placeholder
✓ Delete flow
✓ Confirmation Dialog
✓ Message Toast
✓ Loading state
✓ Error state
✓ Empty state
✓ Existing navigation integration only

DO NOT IMPLEMENT:

✗ Add Product form
✗ Edit Product form UI
✗ Product image upload UI
✗ Product creation form
✗ Product edit form
✗ New Product Facade
✗ New ProductService
✗ New navigation system

============================================================
3. ADD PRODUCT PLACEHOLDER
============================================================

The Add Product screen will be implemented AFTER the Product screen.

Therefore:

+ Add Product

must have a clean placeholder interaction.

When clicked:

open the existing placeholder/modal mechanism OR use a clearly isolated
TODO handler according to the project's existing pattern.

Do NOT implement the Add Product form.

Do NOT invent fields.

Do NOT create Add Product UI in this task.

Keep the integration point ready for the future Add Product implementation.

Example:

openAddProduct(): void {
  // Placeholder only.
  // Add Product screen will be implemented in the next task.
}

Use the project's existing conventions rather than necessarily using
this exact implementation.

============================================================
4. EDIT PRODUCT PLACEHOLDER
============================================================

Edit functionality also depends on the Add/Edit Product screen, which
will be implemented later.

Therefore:

When Edit is clicked:

- identify the Product
- preserve the Product ID/context
- invoke the existing placeholder integration point
- do NOT build the Add/Edit Product UI

Example conceptual behavior:

openEditProduct(productId)

The implementation must be ready for the future Add/Edit Product screen.

============================================================
5. PRODUCT DATA SOURCE
============================================================

Use the EXISTING Product Facade.

Do NOT create another facade.

Do NOT bypass the facade unless the existing architecture explicitly
requires direct ProductService usage.

Expected conceptual flow:

ProductService
    ↓
Existing Product Facade
    ↓
Product Screen
    ↓
Product UI

Use the facade's existing state and methods wherever available.

If a required method/state does not exist:

extend the EXISTING facade only if necessary and consistent with the
Application Contract.

Do not create duplicate state outside the existing architecture.

============================================================
6. PRODUCT ENTITY
============================================================

Use the actual ProductEntity defined by the application.

Do NOT assume fields.

Read the Application Contract MD and ProductEntity before implementation.

Map only the fields that actually exist.

If the frozen UI requires a property that does not exist in ProductEntity,
handle it through the appropriate existing ViewModel/facade/UI state
boundary.

Do NOT modify the domain model merely to satisfy the UI.

============================================================
7. PRODUCT VIEW DATA
============================================================

The UI needs to display:

- Product ID
- Product Name
- Category
- Price
- Unit/Type where applicable
- Availability
- Favourite
- Image

Use the application's existing ViewModel/mapper if one exists.

If it does not exist, create the smallest appropriate UI mapping layer
consistent with the Application Contract.

Do not duplicate domain models unnecessarily.

============================================================
8. PRODUCT CATEGORY
============================================================

Categories come from the EXISTING Category architecture.

Do NOT create a local hard-coded category list.

Use:

Existing Category Facade
or
Existing Category Service
or
Existing Category ViewModel

according to the project contract.

Product relationship:

Product.categoryId
        ↓
Category
        ↓
Category.name

Display:

categoryName

in the Product UI.

============================================================
9. CATEGORY FILTER
============================================================

The Product Filters must obtain available categories from the existing
Category data.

When the user selects a category:

filter Products using categoryId.

Do NOT compare category display names where IDs are available.

If Product has no category:

treat it as:

Unassigned

according to the application contract.

============================================================
10. PRODUCT IMAGE
============================================================

The Product card requires an image.

First inspect the existing application contract and Product model for
image support.

If an image source already exists:

use it.

If Product currently does not have persisted image support:

do NOT invent an API.

Use the existing ViewModel/UI fallback mechanism.

If no image is available:

display the existing BizCopilot Product image fallback.

Do NOT use random external image URLs.

Do NOT implement image upload in this task.

============================================================
11. FAVOURITE
============================================================

The Product UI requires Favourite.

First inspect the existing Product contract.

If Favourite is already supported:

use the existing implementation.

If Favourite is NOT currently supported by the backend:

maintain it through the appropriate existing UI/facade state mechanism.

Do NOT invent a backend endpoint.

The UI must support:

Not Favourite
    ↓
Favourite
    ↓
Not Favourite

The Product card and table must immediately reflect the state.

Favourite count and Favourite filter must also update.

============================================================
12. AVAILABILITY
============================================================

Availability is the Product's billing availability.

It is NOT inventory.

Do not introduce:

- stock
- low stock
- reorder level
- inventory quantity

Availability behavior:

Available
    ↓
Toggle OFF
    ↓
Unavailable

Unavailable
    ↓
Toggle ON
    ↓
Available

Use the existing Product availability contract.

If persistence is supported:

use the existing facade/service method.

Do not invent a new API.

============================================================
13. SEARCH
============================================================

Search must support:

Product Name
Barcode

Search is:

- case-insensitive
- whitespace-safe
- responsive

When search changes:

1. update search state
2. filter Products
3. reset page to 1
4. recalculate pagination
5. update displayed count

If the existing Product Facade already provides search functionality,
use it.

Do not duplicate search logic.

============================================================
14. FILTERS
============================================================

Product filters:

Availability:
- All
- Available
- Unavailable

Category:
- All Categories
- individual categories

Favourite:
- All
- Favourites

All filters must work together.

Example:

Available
+
Beverages
+
Favourite

must return only Products matching all three conditions.

============================================================
15. QUICK FILTERS
============================================================

Quick filters:

All Products
Available
Unavailable
Favourites

These must update the SAME Product filter state.

Do not implement separate filtering logic for quick filters.

============================================================
16. FILTER RESET
============================================================

Reset/Clear filters:

- availability → All
- category → All
- favourite → All

Reset current page:

1

Recalculate:

- filtered Products
- count
- pagination

Do not unnecessarily reload Product data from the server.

============================================================
17. GRID VIEW
============================================================

Grid view uses the frozen Product card.

Exact hierarchy:

Image
↓
Category + Favourite
↓
Product Name
↓
Price + Available + Toggle

Card actions:

Edit → top-left
Delete → top-right

No:

- ...
- action menu
- arrow
- hidden actions

============================================================
18. PRODUCT CARD
============================================================

Product card must display:

Image

Category                         Favourite

Product Name

Price                     Available [Toggle]

Product name receives maximum usable width.

Price and Availability remain on the SAME row.

Do not move Availability to another row.

Do not introduce additional Product metadata.

============================================================
19. TABLE VIEW
============================================================

Table columns:

Sequence
Product
Category
Price
Availability
Actions

Actions:

Favourite
Edit
Delete

Do NOT add:

- checkbox
- Type
- Unit
- ...
- action dropdown
- unnecessary metadata columns

============================================================
20. VIEW SWITCH
============================================================

Grid/Table switch only changes presentation.

Do NOT reload Product data.

Do NOT reset filters.

Do NOT reset search.

Do NOT reset page unless required by the existing implementation.

Preserve the current Product screen state.

============================================================
21. GRID PAGE SIZE
============================================================

Default:

Desktop = 12
Tablet = 8
Mobile = 4

These are page-size defaults.

They do NOT represent fixed card dimensions.

============================================================
22. TABLE PAGE SIZE
============================================================

Default:

Desktop = 12
Tablet = 10
Mobile = 8

These are page-size defaults.

============================================================
23. PAGE SIZE CHANGE
============================================================

When Rows Per Page changes:

1. update pageSize
2. reset currentPage = 1
3. recalculate totalPages
4. update displayed Products
5. determine whether scrolling is required

Do not reset Search or Filters.

============================================================
24. PAGINATION
============================================================

Support:

Previous
Next
Page numbers
Ellipsis where required
Rows per page

When Search/Filter changes:

currentPage = 1

When page size changes:

currentPage = 1

When a Product is deleted and the current page becomes invalid:

move to the last valid page.

Never leave the user on an empty invalid page.

============================================================
25. GRID SCROLLING
============================================================

Default page size:

No unnecessary internal scrollbar.

If the user selects a page size larger than the default:

allow scrolling only when required.

Do NOT shrink Product cards excessively to avoid scrolling.

Cards remain responsive.

============================================================
26. TABLE SCROLLING
============================================================

CRITICAL:

ONLY THE TABLE BODY/ROWS SCROLL.

The table header MUST remain visible.

Structure:

Table Header
    ↓
Scrollable Table Body
    ↓
Pagination

Pagination must remain outside the scrollable body.

Do NOT make the entire Product page scroll because of additional rows.

============================================================
27. RESPONSIVE BEHAVIOR
============================================================

Use the existing responsive architecture.

Do NOT hard-code screenshot dimensions.

Product must work across:

Mobile
Tablet
Desktop
13-inch laptop
4K

Do not change the frozen UI structure between viewports.

Only dimensions/layout density adapt.

============================================================
28. RESPONSIVE PAGE SIZE
============================================================

Determine initial default page size from viewport:

GRID:

Mobile → 4
Tablet → 8
Desktop → 12

TABLE:

Mobile → 8
Tablet → 10
Desktop → 12

If the user manually changes Rows Per Page:

preserve the selected value.

Do not continuously overwrite the user's choice during resize.

============================================================
29. LOADING STATE
============================================================

When Product data is loading:

use the existing application loading/skeleton component.

Do not invent a new loading design.

Distinguish:

Loading
Empty
Error

============================================================
30. ERROR STATE
============================================================

If Product loading fails:

show the existing application error state.

If an individual Product action fails:

show the global MessageToast.

Never show a success Toast when an operation failed.

============================================================
31. EMPTY STATE
============================================================

If Product loading succeeds but no Products exist:

show the appropriate Product empty state.

The empty state may provide:

Add Product

but Add Product itself remains a placeholder in this task.

If Search/Filters produce zero results:

show a filtered-results empty state rather than the initial empty state.

============================================================
32. ADD PRODUCT
============================================================

Add Product screen is OUT OF SCOPE.

Only implement the integration point.

When:

+ Add Product

is clicked:

call the placeholder handler.

Do not create:

- form
- modal
- fields
- image picker
- validation
- save API

Those will be implemented in the next task.

============================================================
33. EDIT PRODUCT
============================================================

Edit Product screen is OUT OF SCOPE.

Only implement:

Edit click
    ↓
Product ID/context
    ↓
placeholder integration

Do not build the Edit Product form.

============================================================
34. DELETE PRODUCT
============================================================

Delete is fully functional.

When Delete is clicked:

open the GLOBAL ConfirmationDialog.

Do not delete immediately.

Dialog:

Delete "<Product Name>"?

Show the appropriate consequence message.

Buttons:

Cancel
Delete Product

============================================================
35. DELETE SUCCESS
============================================================

When Delete Product is confirmed:

1. call existing Product deletion functionality
2. wait for successful result
3. remove Product from UI state
4. recalculate counts
5. recalculate pagination
6. correct current page if required
7. close ConfirmationDialog
8. show global MessageToast

Example Toast:

Product deleted successfully

============================================================
36. DELETE FAILURE
============================================================

If delete fails:

- do not remove Product permanently from UI state
- close/retain dialog according to existing error pattern
- show global error Toast

Example:

Failed to delete product
Please try again.

============================================================
37. FAVOURITE TOGGLE
============================================================

When Favourite is clicked:

1. identify Product
2. toggle state
3. update Product UI
4. update Favourite count
5. update Favourite filter
6. show Toast only if consistent with existing application feedback rules

Do not reload the entire Product list unnecessarily.

============================================================
38. AVAILABILITY TOGGLE
============================================================

When Availability toggle is clicked:

1. identify Product
2. call existing availability functionality
3. update state after success
4. update counts
5. update active filter result
6. show Toast

If existing architecture supports optimistic update:

use it safely.

If not:

wait for successful result before changing persisted state.

============================================================
39. PRODUCT REFRESH
============================================================

Do not blindly reload the entire Product list after every UI action.

Prefer existing facade/state update mechanisms.

Refresh only when required by the existing architecture.

============================================================
40. STATE PRESERVATION
============================================================

After:

Delete
Favourite
Availability

preserve:

- Search
- Filters
- Grid/Table mode
- current page where valid

After deletion:

if current page is no longer valid:

move to previous valid page.

============================================================
41. GLOBAL MESSAGE TOAST
============================================================

Use the already-frozen global MessageToast.

Do NOT create ProductToast.

Possible messages:

Product deleted successfully
Availability updated
Added to favourites
Removed from favourites
Failed to update availability
Failed to delete product

Use the existing global Toast API/component.

============================================================
42. GLOBAL CONFIRMATION DIALOG
============================================================

Use the already-frozen global ConfirmationDialog.

Do NOT create ProductDeleteDialog.

Configure it with:

variant
title
message
confirmLabel

according to the action.

============================================================
43. PERFORMANCE
============================================================

Do not perform filtering, mapping or counting repeatedly inside HTML.

Use the existing facade's:

computed state
signals
observables
selectors

according to the application architecture.

Do not introduce unnecessary subscriptions.

Clean up subscriptions according to the existing Angular pattern.

============================================================
44. TYPE SAFETY
============================================================

Use existing project types.

Do not use:

any

unless absolutely unavoidable and justified by the existing contract.

Use:

Product
ProductViewModel
ProductFilterState
ProductViewMode
ProductUnit

or the project's actual equivalent types.

============================================================
45. FUNCTION RESPONSIBILITY
============================================================

Use existing facade methods where they already exist.

Only add missing Product-screen-specific functions required for:

Search
Filter
View switch
Pagination
Favourite
Availability
Delete
Toast/Dialog integration
Responsive page size

Do NOT duplicate methods already provided by the Product Facade.

============================================================
46. NAVIGATION
============================================================

Navigation is ALREADY DESIGNED.

Do not modify navigation.

Only ensure:

Product

is included in the existing navigation menu and uses the existing active
navigation state.

Do not:

- add new navigation items
- change icons
- change order
- redesign sidebar
- redesign bottom navigation

============================================================
47. ADD PRODUCT FUTURE PLACEHOLDER
============================================================

Leave a clean integration point for the next implementation task.

Conceptually:

Add Product
    ↓
Product Add/Edit component placeholder

The next task will replace the placeholder with the real Add Product
screen.

Do not implement it now.

============================================================
48. EDIT PRODUCT FUTURE PLACEHOLDER
============================================================

Same rule:

Edit
    ↓
Product ID
    ↓
Add/Edit Product component placeholder

The next task will implement the actual Add/Edit Product form.

============================================================
49. WHAT MUST NOT BE CHANGED
============================================================

Do NOT change the frozen:

- Product card structure
- Product table structure
- Search placement
- Filter placement
- Category filter concept
- Favourite placement
- Availability toggle placement
- Edit/Delete placement
- pagination design
- rows-per-page behavior
- responsive structure
- navigation
- typography
- icon system
- spacing
- colors

This task is FUNCTIONAL implementation only.

============================================================
50. FINAL PRODUCT FUNCTIONAL FLOW
============================================================

LOAD:

Product Facade
↓
Product data
↓
Category data
↓
Map/resolve UI data
↓
Apply state
↓
Render

SEARCH:

Search
↓
Filter name/barcode
↓
Reset page
↓
Pagination

FILTER:

Availability
+
Category
+
Favourite
↓
Combined filtering
↓
Reset page
↓
Pagination

GRID/TABLE:

Same Product state
↓
Different presentation

FAVOURITE:

Click Star
↓
Toggle state
↓
Update count/filter

AVAILABILITY:

Click Toggle
↓
Existing Product availability operation
↓
Update state
↓
Update count/filter

DELETE:

Delete
↓
ConfirmationDialog
↓
Confirm
↓
Existing Product delete operation
↓
Update state
↓
Pagination correction
↓
MessageToast

ADD:

+ Add Product
↓
PLACEHOLDER ONLY

EDIT:

Edit
↓
Product ID
↓
PLACEHOLDER ONLY

============================================================
51. FINAL IMPLEMENTATION RULE
============================================================

READ THE APPLICATION CONTRACT MD FIRST.

READ THE EXISTING PRODUCT FACADE FIRST.

READ THE EXISTING PRODUCT HTML + TS FIRST.

Then implement ONLY the Product screen functionality described here.

Reuse the existing facade.

Reuse existing services.

Reuse existing shared components.

Reuse existing models.

Reuse existing navigation.

Do not create duplicate architecture.

Do not implement Add Product yet.

Do not implement Edit Product yet.

Do not redesign anything.

The result must make the CURRENT frozen Product screen fully functional
while leaving a clean integration point for the upcoming Add Product /
Edit Product implementation.