BIZCOPILOT — BILLING SCREEN MASTER FIGMA PROMPT

Design the BizCopilot Billing Screen exactly according to the frozen Billing design and interaction rules below.

The Product Screen and Category Screen are already frozen and are the visual source of truth for the BizCopilot design system.

Billing must use the same:
- Typography
- Purple primary color
- Card language
- Border treatment
- Corner radius
- Shadows
- Spacing rhythm
- Input styling
- Button styling
- Icon family
- Badge styling
- Green success states
- Red destructive states
- Responsive behavior

Do NOT redesign the concept.
Do NOT add unrelated features.
Do NOT introduce a second visual language.

The goal is to reproduce the approved Billing mock screens as closely as possible.

==================================================
1. BILLING SCREEN PURPOSE
==================================================

Billing is the fastest and most frequently used operational screen.

Optimize for:
- Fast billing
- Minimum navigation
- Minimum taps
- Large touch targets
- Fast product discovery
- Frequently used/favourite products
- Quick quantity/value entry
- Quick cart review
- Quick Hold Bill
- Quick Proceed to Pay
- Clear feedback
- No unnecessary information
- No unnecessary scrolling

The primary target users are small-business owners and staff using mobile and tablet, while desktop is fully supported.

The Billing screen should feel like a POS billing workspace, not an ecommerce shopping page.

==================================================
2. NAVIGATION
==================================================

The application navigation/menu is already designed.

DO NOT redesign the navigation menu.

Only design the Billing screen content area and its integration with the existing application shell.

==================================================
3. DESKTOP + TABLET
==================================================

Desktop and Tablet use the SAME fundamental Billing layout.

Do not create two unrelated designs.

Structure:

Billing Header
↓
Search + Scan
↓
Category/Favourite filters
↓
Product Catalog                 Cart
                                ↓
                                Customer
                                Cart Items
                                Offers
                                Totals
                                Actions

Desktop and Tablet MUST NOT show a compact bottom Cart summary.

There is only ONE Cart presentation on Desktop/Tablet:
the persistent right-side Cart panel.

==================================================
4. MOBILE
==================================================

Mobile uses a slightly different presentation because of limited width.

Main Billing screen:

- Billing header
- Hold Bill
- Recent Bills
- Search
- Scan
- Category/filter chips
- Product grid
- Pagination
- Compact sticky Cart summary
- Existing application navigation

The main Billing screen must NOT permanently display:
- Customer section
- Offers section
- Full cart item list

Those appear only when the Cart is expanded.

When Cart is clicked, open the Cart as a bottom-sheet overlay.

==================================================
5. BILLING HEADER
==================================================

Left:

Billing

Optional supporting text:

Fast billing. Happy business.

Right:

Hold Bill
Recent Bills

Use compact header actions consistent with Product and Category screens.

--------------------------------------------------
HOLD BILL
--------------------------------------------------

The Header Hold Bill is used to view currently held bills.

If there are held bills, display a count badge:

Hold Bill 1
Hold Bill 2
Hold Bill 3

The number means:

NUMBER OF CURRENTLY HELD BILLS

It does NOT mean:
- Product count
- Customer count
- Completed bills
- Bills created today

If there are no held bills:

Hold Bill

Clicking Header Hold Bill opens the Held Bills overlay.

For now, use a placeholder overlay.

--------------------------------------------------
RECENT BILLS
--------------------------------------------------

Recent Bills represents completed bills.

Clicking Recent Bills opens the Recent Bills overlay.

For now, use a placeholder overlay.

Held Bills and Recent Bills are separate concepts.

==================================================
6. SEARCH
==================================================

Use the same search component language as the frozen Product Screen.

Placeholder:

Search product / code / barcode

Search conceptually supports:
- Product name
- Product code/SKU
- Barcode

Place Scan next to the search field.

==================================================
7. SCAN
==================================================

Use a clear barcode/scan icon.

Label:

Scan

Use the same secondary/soft-purple styling as the existing BizCopilot design.

Scanning UI can remain a placeholder.

==================================================
8. CATEGORY / QUICK FILTERS
==================================================

Use horizontally arranged quick-filter chips.

Examples:

All
Favourites
Vegetables
Fruits
Grocery
Dairy
Beverages
More

All is selected by default.

Selected state uses primary purple.

Favourites MUST use the approved favourite icon.

DO NOT use a heart icon.

The filter row must never create page-level horizontal overflow.

==================================================
9. PRODUCT CARDS
==================================================

Product cards must visually match the frozen Product Screen.

Each Product Card contains:

- Product image
- Favourite icon
- Category label
- Product name
- Selling price
- Unit
- Add/action control or unit-specific entry control

Product images should maintain aspect ratio.

Favourite can be changed directly from Billing.

The user should NOT need to navigate to Product Management to mark a product as frequently used.

--------------------------------------------------
PRODUCT CARD EXAMPLE
--------------------------------------------------

Category:
Vegetables

Product:
Carrot

Price:
₹80.00 / Kg

Input:
0.500 Kg

The Product Card must remain visually consistent with the frozen Product Screen.

==================================================
10. PRODUCT UNIT RULES — CRITICAL
==================================================

Supported units:

- Qty
- Kg
- Ltr
- Meter
- Pack

The interaction must dynamically depend on the configured Product unit.

--------------------------------------------------
QTY
--------------------------------------------------

Use:

[ − ] [ 1 Qty ] [ + ]

No free-form text field.

--------------------------------------------------
PACK
--------------------------------------------------

Use:

[ − ] [ 1 Pack ] [ + ]

No free-form text field.

--------------------------------------------------
KG
--------------------------------------------------

Use a numeric text input.

Example:

[ 0.500 Kg ]

NO +/− controls.

--------------------------------------------------
LTR
--------------------------------------------------

Use a numeric text input.

Example:

[ 0.750 ]

NO +/− controls.

--------------------------------------------------
METER
--------------------------------------------------

Use a numeric text input.

Example:

[ 7.500 ]

NO +/− controls.

Do NOT introduce fixed-package/custom-package configuration.

For now, if a shop wants products such as:
Sugar 100g
Sugar 500g
Sugar 1kg

they can create separate products with their own name and price.

==================================================
11. PRODUCT ↔ CART SYNCHRONIZATION — NON-NEGOTIABLE
==================================================

The Product Catalog and Cart are NOT separate states.

They are TWO VISUAL REPRESENTATIONS OF THE SAME ACTIVE BILL.

There MUST be ONE shared source of truth for the current bill/cart.

Never maintain independent Product Card quantity/value state and Cart quantity/value state.

Every change made in either location must immediately reflect in the other.

--------------------------------------------------
ADD PRODUCT
--------------------------------------------------

If the user clicks Add on a Product Card:

Product Card
↓
Active Cart
↓
Product appears in Cart immediately
↓
Cart item count updates
↓
Cart total updates

--------------------------------------------------
REMOVE PRODUCT
--------------------------------------------------

If a product is removed from the Product Card:

Product Card
↓
Cart item removed immediately
↓
Cart count updates
↓
Subtotal updates
↓
Discount updates if applicable
↓
Final total updates

If Qty/Pack reaches zero, remove the product from the Cart.

--------------------------------------------------
QTY / PACK SYNCHRONIZATION
--------------------------------------------------

If the user changes Qty/Pack from the Product Card:

Example:

[ − ] [ 2 Qty ] [ + ]

The Cart must immediately show:

2 Qty

and recalculate:

- Line total
- Cart subtotal
- Discount
- Final total

If the user changes Qty/Pack inside the Cart:

Example:

[ − ] [ 3 Qty ] [ + ]

the corresponding Product Card MUST immediately show:

3 Qty

There must be no delay and no page reload.

--------------------------------------------------
KG / LTR / METER SYNCHRONIZATION
--------------------------------------------------

These units use text input.

Example Product Card:

Carrot
₹80 / Kg

[ 0.500 Kg ]

If the cashier changes:

0.500

to:

1.780

the Cart MUST immediately become:

1.780 Kg

and recalculate the line total and bill totals.

The reverse must also work.

If the cashier edits the Cart value:

1.780 Kg
→
2.250 Kg

the Product Card input MUST immediately update to:

2.250 Kg

Same behavior applies to:

Ltr
Meter

--------------------------------------------------
REMOVE FROM CART
--------------------------------------------------

If the cashier removes an item from the Cart:

Cart
↓
Item removed
↓
Corresponding Product Card returns to its Add/unselected state

--------------------------------------------------
ADD FROM PRODUCT CARD
--------------------------------------------------

If the cashier adds the same product again, update the existing active-cart item rather than creating duplicate product state.

--------------------------------------------------
IMPORTANT
--------------------------------------------------

The Product Grid and Cart must always remain synchronized:

Product Grid
↕
Shared Active Bill State
↕
Cart

Never:

Product Grid State
+
Separate Cart State

The active bill must have ONE source of truth.

==================================================
12. EXAMPLES OF DYNAMIC UNIT BEHAVIOR
==================================================

CARROT

₹80 / Kg

Product:
[ 0.500 Kg ]

Cart:
0.500 Kg    ₹40.00


COOKING OIL

₹180 / Ltr

Product:
[ 0.750 ]

Cart:
0.750 Ltr    ₹135.00


ELECTRICAL WIRE

₹45 / Meter

Product:
[ 7.500 ]

Cart:
7.500 Meter    ₹337.50


COCA COLA 500ML

₹35 / Qty

Product:
[ − ] [ 2 Qty ] [ + ]

Cart:
[ − ] [ 2 Qty ] [ + ]    ₹70.00


AMUL MILK 1L

₹61 / Pack

Product:
[ − ] [ 1 Pack ] [ + ]

Cart:
[ − ] [ 1 Pack ] [ + ]    ₹61.00

==================================================
13. PAGINATION
==================================================

Billing uses pagination.

DO NOT use:
- View More
- Load More
- Infinite scrolling

Use the same pagination philosophy as the frozen Product Screen.

Mobile:
approximately 8 products/page

Tablet:
approximately 10 products/page

Desktop:
approximately 12 products/page

Rows per page must be changeable.

Example:

Showing 1–8 of 96 products

Pagination:

‹ 1 2 3 … 12 ›

Pagination must adapt to the available viewport.

==================================================
14. DESKTOP/TABLET PRODUCT CATALOG
==================================================

Desktop and Tablet display a responsive Product Grid.

The grid must use available horizontal space efficiently while maintaining usable card sizes.

Do not force a desktop-sized grid into a narrow tablet.

The Cart occupies the right side.

The Product Catalog remains the primary workspace.

==================================================
15. DESKTOP/TABLET CART
==================================================

The Cart is a persistent right-side panel.

Example structure:

Your Cart (6)
Add items, review and proceed to pay

Customer
Walk-In Customer
Default Customer                         Change

------------------------------------------------

Cart Items

Product image
Product name
Unit/price
Dynamic quantity/value control
Line total
Remove icon

------------------------------------------------

Offers & Discounts              1 applied
                                View all

Applied Offer:

BUYMORE10
10% off on orders above ₹500
You save ₹86.25
✓ Applied

------------------------------------------------

Subtotal                         ₹862.50

Discount                         -₹86.25

Total                            ₹776.25

[ Hold Bill ] [ Proceed to Pay ]

IMPORTANT:

DO NOT create a second compact Cart at the bottom on Desktop or Tablet.

==================================================
16. CUSTOMER
==================================================

Customer belongs inside the Cart.

Default:

Customer

Walk-In Customer
Default Customer                         Change

Click Change:

→ Customer overlay placeholder.

Do not design the full Customer overlay yet.

==================================================
17. OFFERS & DISCOUNTS
==================================================

Offers belong inside the Cart.

Do NOT permanently display Offers on the main Billing Product Catalog.

If an offer is applied:

Offers & Discounts       1 applied
                         View all

Applied offer:

BUYMORE10
10% off on orders above ₹500
You save ₹86.25
✓ Applied

Use:
- Green success treatment
- Applied indicator
- Offer name
- Description
- Savings

Click View all:

→ Offer List overlay placeholder.

The full Offer List screen will be designed later.

==================================================
18. TOTALS
==================================================

Show only:

Subtotal
Discount
Total

DO NOT add a separate Total Savings summary.

Savings can be displayed inside the applied offer context.

==================================================
19. CART ACTIONS
==================================================

Hold Bill and Proceed to Pay MUST be on the same line.

[ Hold Bill ] [ Proceed to Pay → ]

Hold Bill:
Secondary/outlined style.

Proceed to Pay:
Primary purple filled style.

Proceed to Pay is visually stronger.

Do NOT add:
- Print
- Share
- More
- Online status
- Extra payment actions
- Total Savings

==================================================
20. HOLD BILL FUNCTION
==================================================

The bottom Hold Bill action is different from the Header Hold Bill action.

BOTTOM HOLD BILL:

Moves the CURRENT ACTIVE BILL to Held Bills.

Then:

Current Bill
↓
Hold Bill
↓
Bill moves to Held Bills
↓
Current billing workspace becomes a new empty bill

Multiple bills can be held.

Example:

Bill A → Hold
Bill B → Hold

Header:

Hold Bill 2

The badge indicates two currently held bills.

The held bills must never overwrite each other.

==================================================
21. HELD BILL RESUME
==================================================

Clicking the HEADER Hold Bill:

→ Opens Held Bills overlay.

The user can select:

Resume

The selected held bill becomes the active bill.

That held bill is removed from the Held Bills collection.

If the current active bill contains products, never silently overwrite it.

Protect the active bill with the agreed confirmation workflow.

Actual Held Bills UI is a placeholder for now.

==================================================
22. RECENT BILLS
==================================================

Recent Bills represents completed bills.

Held Bills represents unfinished bills.

Keep these completely separate.

Recent Bills overlay is a placeholder for now.

==================================================
23. PROCEED TO PAY
==================================================

Proceed to Pay opens the future Payment Screen.

Payment is a separate screen.

For this iteration:

Use a placeholder interaction only.

Do NOT design the Payment Screen yet.

==================================================
24. MOBILE COLLAPSED CART
==================================================

When products have been added, show the compact sticky Cart summary at the bottom.

Approved structure:

Cart icon + item count
Items
Total price
Expand arrow

Second line:

[ Hold Bill ] [ Proceed to Pay → ]

Example:

6 Items                         ₹776.25
You save ₹86.25

[ Hold Bill ] [ Proceed to Pay → ]

Keep the collapsed Cart compact.

Do NOT show:
- Customer
- Cart items
- Offer details
- Subtotal
- Discount

in the collapsed state.

==================================================
25. MOBILE EXPANDED CART
==================================================

When the Cart arrow/Cart summary is clicked:

Open the Cart as a bottom-sheet overlay.

Dim the Billing screen behind it.

Bottom sheet contains:

Your Cart (6)
Add items, review and proceed to pay

Customer
Walk-In Customer                         Change

Cart Items

Offers & Discounts
1 applied

Applied Offer

Subtotal
Discount
Total

[ Hold Bill ] [ Proceed to Pay → ]

Use:
- Rounded top corners
- Drag handle
- Overlay/dimmed background
- Large touch targets

This is an overlay, NOT a new page.

==================================================
26. MOBILE PRODUCT GRID
==================================================

Use the approved Product Card language.

Target approximately 3 columns where viewport width permits.

Cards must remain:
- Readable
- Touch-friendly
- Compact
- Visually consistent

Do not force desktop card dimensions.

==================================================
27. MOBILE PAGINATION
==================================================

Use pagination.

NO:
- View More
- Load More
- Infinite scrolling

Use the frozen Product Screen pagination philosophy.

Example:

Showing 1–8 of 96 products

‹ 1 2 3 … 12 ›

Rows per page remains accessible.

==================================================
28. RESPONSIVE DESIGN — NON-NEGOTIABLE
==================================================

The Billing screen must be genuinely responsive.

DO NOT design a fixed desktop canvas and shrink it.

The screen must work correctly on:

- 4K monitor
- Large desktop
- 13-inch laptop
- Tablet
- Mobile

The same conceptual design must remain visually consistent.

Only necessary responsive adaptations are allowed.

--------------------------------------------------
4K MONITOR
--------------------------------------------------

Use available space naturally.

Do not create unnecessary fixed-height regions.

Do not introduce a scrollbar merely because the design was created for a smaller display.

--------------------------------------------------
13-INCH LAPTOP
--------------------------------------------------

The layout must contract naturally.

Adapt:
- Card sizes
- Grid columns
- Spacing
- Content regions

Do not introduce artificial scrolling.

--------------------------------------------------
TABLET
--------------------------------------------------

Use the same Desktop/Tablet structure.

Adjust dimensions and grid density responsively.

--------------------------------------------------
MOBILE
--------------------------------------------------

Switch to the approved mobile Product Grid + sticky Cart design.

==================================================
29. SCROLL RULES
==================================================

Only content that genuinely exceeds the available viewport should scroll.

Avoid:
- Horizontal page scrolling
- Double scrollbars
- Nested unnecessary scrolling
- Fixed-height overflow
- Application-level scrolling caused by incorrect sizing
- Scrollbars caused by desktop dimensions being preserved

Desktop/Tablet:
- Product catalog may scroll independently.
- Cart remains available.

Mobile:
- Product catalog scrolls.
- Sticky Cart remains accessible.
- Expanded Cart may have its own scrollable content area if required.

==================================================
30. PRODUCT SCROLL
==================================================

Prioritize scrolling the Product Catalog rather than the entire application shell.

Desktop/Tablet:

Header
Search
Filters
Product Catalog ↕
Pagination

Cart remains independently usable.

Mobile:

Header
Search
Filters
Product Catalog ↕
Pagination
Sticky Cart
Existing Navigation

==================================================
31. TOUCH TARGETS
==================================================

Especially on Mobile and Tablet, use comfortable touch targets for:

- Hold Bill
- Recent Bills
- Search
- Scan
- Filter chips
- Favourite
- Add
- Qty controls
- Numeric fields
- Cart
- Customer Change
- View all
- Proceed to Pay
- Pagination

Do not create tiny desktop-style controls.

==================================================
32. TYPOGRAPHY
==================================================

Use the existing BizCopilot typography hierarchy.

Page title:
Strong and prominent.

Product name:
Bold and easy to scan.

Price:
Highly visible.

Unit:
Secondary but clear.

Supporting text:
Muted but readable.

Do not use excessive font sizes.

==================================================
33. ICONS
==================================================

Use the same icon family as Product and Category screens.

Required concepts:

- Billing
- Hold/Pause
- Recent/history
- Search
- Scan
- Favourite
- Customer
- Offer/tag/discount
- Delete
- Minus
- Plus
- Expand/collapse
- Proceed arrow

Favourite MUST use the approved favourite icon.

DO NOT use a heart.

Maintain consistent icon stroke weight and style.

==================================================
34. EMPTY CART
==================================================

If Cart is empty:

Your Cart (0)

Your cart is empty
Add products to start billing.

Proceed to Pay must be disabled/non-actionable.

Hold Bill should not create an empty held bill.

==================================================
35. EMPTY PRODUCT RESULT
==================================================

If search/filter produces no products:

No products found

Try another product name, code or barcode.

Keep the empty state clean.

==================================================
36. LOADING STATE
==================================================

Use skeleton/loading states consistent with Product Screen.

Avoid layout shifts.

==================================================
37. ERROR STATE
==================================================

Unable to load products

Please try again.

[ Retry ]

Do not expose technical backend errors.

==================================================
38. PLACEHOLDER OVERLAYS
==================================================

For this iteration, create placeholder interactions for:

Customer
→ Customer overlay placeholder

Offers / View all
→ Offer List overlay placeholder

Header Hold Bill
→ Held Bills overlay placeholder

Recent Bills
→ Recent Bills overlay placeholder

Proceed to Pay
→ Payment Screen placeholder

Do not design the internal screens yet.

==================================================
39. EXCLUDED FEATURES
==================================================

DO NOT add:

- Inventory stock
- Low-stock warnings
- Expenses
- Profit
- Kitchen order status
- Delivery status
- Print
- Share
- More actions inside Cart
- Online status
- Separate Total Savings
- View More Products
- Infinite scrolling
- Permanent Customer section on Billing catalog
- Permanent Offers section on Billing catalog
- Payment method UI
- Full Held Bills UI
- Full Recent Bills UI
- Full Customer overlay
- Full Offer overlay
- Full Payment screen

==================================================
40. FINAL DESKTOP/TABLET STRUCTURE
==================================================

Billing Header
→ Search + Scan
→ Filter chips
→ Product Grid
→ Pagination

Right-side persistent Cart:
→ Customer
→ Cart Items
→ Offers
→ Subtotal
→ Discount
→ Total
→ Hold Bill + Proceed to Pay

NO bottom Cart.

==================================================
41. FINAL MOBILE STRUCTURE
==================================================

Billing Header
→ Hold Bill + Recent Bills
→ Search + Scan
→ Filter chips
→ Product Grid
→ Pagination
→ Sticky compact Cart
→ Hold Bill + Proceed to Pay
→ Existing application navigation

Tap Cart:
→ Dimmed Billing background
→ Cart bottom sheet
→ Customer
→ Cart Items
→ Offers
→ Totals
→ Hold Bill + Proceed to Pay

==================================================
42. MOST IMPORTANT FUNCTIONAL RULE
==================================================

The Product Catalog and Cart are two visual representations of ONE active bill.

ONE shared active-bill/cart state must drive both.

All of these MUST synchronize in BOTH directions:

Product Add
↔ Cart Item

Product Remove
↔ Cart Item Removal

Qty
↔ Cart Qty

Pack
↔ Cart Pack

Kg input
↔ Cart Kg input

Ltr input
↔ Cart Ltr input

Meter input
↔ Cart Meter input

Line total
↔ Cart line total

Subtotal
↔ Cart subtotal

Discount
↔ Cart discount

Final total
↔ Cart final total

Any change in the Product Grid must immediately update the Cart.

Any change in the Cart must immediately update the Product Grid.

No page reload.
No duplicate state.
No stale values.
No delayed synchronization.

==================================================
43. FINAL DESIGN PRINCIPLE
==================================================

The Billing Screen must feel like:

“A cashier can search, select a product, enter the required quantity/value, review the cart, hold the bill, or proceed to payment with the minimum possible interaction.”

The interface must be optimized for real small-business usage.

The frozen Product and Category screens are the visual source of truth.

The approved Billing mocks are the structural source of truth.

Replicate the approved visual hierarchy, component relationships, spacing, card design, icon treatment, pagination, cart behavior, responsive behavior, and interaction model as closely as possible.


__________

# BILLING SCREEN — INITIAL / EMPTY STATE ADDENDUM

Add this section to the existing BizCopilot Billing Screen master prompt.

This defines the exact Billing Screen state BEFORE the cashier adds any product.

==================================================
INITIAL BILLING STATE — NO PRODUCTS
==================================================

The initial Billing Screen must be designed as a ready-to-bill empty state.

The Product Catalog is fully available and usable.

The Cart exists, but contains zero products.

Do NOT make the entire Billing screen an empty-state screen.

The product catalog must remain visible immediately so the cashier can start billing without any additional action.

==================================================
DESKTOP / TABLET — INITIAL STATE
==================================================

Desktop and Tablet use the same layout.

The screen contains:

Billing Header
→ Search + Scan
→ Category/Favourite filters
→ Product Grid
→ Pagination
→ Persistent Right-side Cart

The right-side Cart is already visible even when empty.

Example structure:

Billing
Fast billing. Happy business.

[ Search product / code / barcode ]       [ Scan ]

[ All ] [ Favourites ] [ Vegetables ] [ Fruits ]
[ Grocery ] [ Dairy ] [ Beverages ] [ More ]

------------------------------------------------------------
PRODUCT GRID                         | YOUR CART (0)
                                     |
[ Product ] [ Product ] [ Product ]  | Add items, review
                                     | and proceed to pay.
[ Product ] [ Product ] [ Product ]  |
                                     |       🛒
[ Product ] [ Product ] [ Product ]  | Your cart is empty
                                     | Add products to
Showing 1–12 of 96 products          | start billing.
Pagination                            |
                                     |
                                     | No Customer section
                                     | No Offers section
                                     | No Totals
                                     | No Payment action
------------------------------------------------------------

The empty Cart should be visually clean and lightweight.

Do NOT display unnecessary information inside an empty Cart.

==================================================
EMPTY CART CONTENT
==================================================

Show:

Your Cart (0)

Supporting text:

Add items, review and proceed to pay.

Empty state:

Your cart is empty

Add products to start billing.

Do NOT display:

- Customer
- Offers & Discounts
- Subtotal
- Discount
- Total
- Savings
- Hold Bill action inside Cart
- Proceed to Pay action inside Cart
- Product line items

The Cart should communicate that it is ready to receive products.

==================================================
MOBILE — INITIAL STATE
==================================================

Mobile uses the approved mobile Billing design.

The main Billing screen contains:

Billing Header
→ Hold Bill
→ Recent Bills
→ Search + Scan
→ Filter/category chips
→ Product Grid
→ Pagination
→ Compact sticky Cart summary
→ Existing application navigation

The Product Grid remains fully visible and usable.

Do NOT show a full Cart panel on mobile initially.

Do NOT show Customer or Offers sections on the Billing screen.

==================================================
MOBILE EMPTY CART SUMMARY
==================================================

Before any product is added, show a compact Cart summary at the bottom:

[ Cart icon ]  0 Items                         ₹0.00
                                              ↑/Chevron

Keep this state compact.

The empty Cart should NOT occupy unnecessary vertical space.

The main Product Catalog must remain the focus.

IMPORTANT:

Do NOT show active-looking Hold Bill or Proceed to Pay actions when there is no product in the bill.

There is nothing to hold and nothing to pay.

Therefore, in the initial empty state:

- Hold Bill bottom action = hidden or disabled
- Proceed to Pay bottom action = hidden or disabled

Preferred design:

Show ONLY the compact:

Cart icon
0 Items
₹0.00
Expand/collapse indicator

Once the first product is added, the Cart summary expands into the approved active-cart state.

==================================================
MOBILE EMPTY CART EXAMPLE
==================================================

------------------------------------------------
|                                             |
| Product Grid                                |
|                                             |
| Product Product Product                     |
| Product Product Product                     |
| Product Product Product                     |
|                                             |
| Showing 1–8 of 96 products                  |
| Pagination                                  |
|                                             |
| 🛒   0 Items                         ₹0.00 ˄ |
|                                             |
| Existing Application Navigation             |
------------------------------------------------

The Cart summary must not cover pagination or product cards.

Respect safe-area and bottom-navigation spacing.

==================================================
WHEN FIRST PRODUCT IS ADDED
==================================================

The empty state must transition immediately into the active Cart state.

Example:

User taps + Add on:

Carrot

₹80.00 / Kg

with:

0.500 Kg

Immediately update:

PRODUCT CARD
→
0.500 Kg

and:

CART
→
Carrot
0.500 Kg
₹40.00

Cart count:

0 Items
→
1 Item

Cart total:

₹0.00
→
₹40.00

Mobile Cart changes from:

🛒 0 Items      ₹0.00

to:

🛒 1 Item       ₹40.00
You save ₹0.00

[ Hold Bill ] [ Proceed to Pay → ]

Desktop/Tablet Cart changes from the empty state to the full active Cart.

==================================================
INITIAL STATE — FUNCTIONAL RULE
==================================================

The empty Billing Screen is NOT a separate page.

It is the normal Billing Screen with an empty active bill.

The Product Catalog remains fully functional.

The cashier should be able to immediately:

- Search
- Scan
- Select a category
- Select Favourites
- Add a product
- Enter Kg/Ltr/Meter value
- Increase Qty/Pack
- Open Hold Bills
- Open Recent Bills

without first creating a "New Bill".

Do NOT add a "New Bill" button.

Do NOT require a separate bill creation step.

The Billing Screen itself represents the current active bill.

==================================================
HEADER ACTIONS IN EMPTY STATE
==================================================

The Header Hold Bill and Recent Bills actions remain visible.

Header Hold Bill:

Used to access existing Held Bills.

It does NOT mean "hold the empty current bill".

Recent Bills:

Opens the Recent Bills overlay placeholder.

These actions remain available regardless of whether the current bill is empty.

==================================================
EMPTY STATE + PAGINATION
==================================================

Pagination remains available in the empty-cart state.

The Product Catalog is not empty.

Only the Cart is empty.

Therefore:

Product results:
VISIBLE

Pagination:
VISIBLE

Cart:
EMPTY

This distinction is important.

Do NOT show:

"No products available"

unless the actual product catalog contains zero products or a search/filter returns no results.

==================================================
RESPONSIVE REQUIREMENT
==================================================

The initial empty state must follow the same responsive rules as the rest of Billing.

4K:
- Use available space naturally.
- No artificial scrollbars.
- No oversized fixed-width Cart.
- Product grid scales naturally.

13-inch:
- Same visual design.
- Responsive grid and spacing.
- No unnecessary vertical page scrollbar.
- No horizontal scrollbar.

Tablet:
- Same Desktop/Tablet layout.
- Persistent right-side Cart.
- No bottom Cart summary.

Mobile:
- Product grid.
- Pagination.
- Compact sticky empty Cart summary.
- Existing application navigation.

==================================================
FINAL INITIAL-STATE RULE
==================================================

FREEZE THE FOLLOWING:

DESKTOP/TABLET:

Product Catalog + Pagination
+
Persistent Right-side Empty Cart

MOBILE:

Product Catalog + Pagination
+
Compact Sticky Empty Cart

No Customer.
No Offers.
No Totals.
No Payment action.
No bottom Cart on Desktop/Tablet.
No full Cart panel on Mobile until the Cart is opened.
No "New Bill" button.
No "View More".
No unnecessary scrolling.

The initial state must feel immediately ready for the cashier to start billing.


_______________

==================================================
PRODUCT CARD — INITIAL vs ADDED STATE — CRITICAL
==================================================

Before a product is added to the current bill:

EVERY PRODUCT CARD MUST SHOW ONLY:

- Product Image
- Favourite Icon
- Category
- Product Name
- Selling Price / Unit
- + Add Cart action

Example:

┌──────────────────────────┐
│                    ☆     │
│                          │
│         IMAGE            │
│                          │
│ Vegetables               │
│ Carrot                   │
│ ₹80.00 / Kg              │
│                          │
│        [ + Add ]         │
└──────────────────────────┘

IMPORTANT:

Do NOT show a quantity control before the product is added.

Do NOT show:
- − / + controls
- Quantity text field
- Kg input
- Ltr input
- Meter input
- Pack quantity
- Qty quantity
- Line total

The card remains in this simple Add state.

==================================================
AFTER PRODUCT IS ADDED
==================================================

Only the Product Card that has been added to the current bill changes
from the Add state to its active quantity/value state.

All other products continue showing:

[ + Add ]

The active Product Card dynamically changes according to its configured
Product Unit.

--------------------------------------------------
QTY
--------------------------------------------------

Before adding:

[ + Add ]

After adding:

[ − ] [ 1 Qty ] [ + ]

--------------------------------------------------
PACK
--------------------------------------------------

Before adding:

[ + Add ]

After adding:

[ − ] [ 1 Pack ] [ + ]

--------------------------------------------------
KG
--------------------------------------------------

Before adding:

[ + Add ]

After adding:

[ 0.500 Kg ]

NO +/− controls.

--------------------------------------------------
LTR
--------------------------------------------------

Before adding:

[ + Add ]

After adding:

[ 0.750 ]

NO +/− controls.

--------------------------------------------------
METER
--------------------------------------------------

Before adding:

[ + Add ]

After adding:

[ 7.500 ]

NO +/− controls.

==================================================
IMPORTANT VISUAL RULE
==================================================

The quantity/value control MUST NOT appear on every product card.

It appears ONLY on products currently present in the active Cart.

Example:

Product A — not added
→ [ + Add ]

Product B — added
→ [ − ] [ 2 Qty ] [ + ]

Product C — not added
→ [ + Add ]

Product D — added
→ [ 0.750 Kg ]

Product E — not added
→ [ + Add ]

This keeps the Product Catalog visually clean and makes it immediately
obvious which products are currently part of the bill.

==================================================
PRODUCT ↔ CART STATE
==================================================

The Product Card's active state and Cart state must always be synchronized.

If Product A is added:

Product A:
[ + Add ]
↓
[ − ] [ 1 Qty ] [ + ]

Cart:
Product A
Qty 1

If Product A is removed from Cart:

Cart:
Product A removed

Product A Card:
[ − ] [ 1 Qty ] [ + ]
↓
[ + Add ]

If the quantity changes in the Product Card:

Product Card:
[ − ] [ 2 Qty ] [ + ]

Cart:
Qty 2

If quantity changes in Cart:

Cart:
Qty 3

Product Card:
[ − ] [ 3 Qty ] [ + ]

For Kg/Ltr/Meter, the same two-way synchronization applies to the
numeric value.

There must always be ONE shared active-bill/cart state.

-----

==================================================
CART SCROLL BEHAVIOR — CRITICAL
==================================================

The Cart panel has a fixed/sticky structure.

ONLY THE CART ITEM LIST IS SCROLLABLE.

The following sections MUST remain fixed and always visible:

1. Cart Header
   - Your Cart count
   - Close/expand control

2. Customer Section
   - Customer
   - Selected customer
   - Change action

3. Offers & Discounts Section
   - Offers heading
   - Applied offer
   - View all

4. Cart Summary / Totals
   - Subtotal
   - Discount
   - Total

5. Cart Actions
   - Hold Bill
   - Proceed to Pay

ONLY the individual product/cart-item area between Customer and Offers
is allowed to scroll vertically.

Example:

┌──────────────────────────────┐
│ Your Cart (6)          ✕     │ ← FIXED
├──────────────────────────────┤
│ Customer                     │ ← FIXED
│ Walk-In Customer      Change │
├──────────────────────────────┤
│                              │
│ CART ITEMS                    │
│                              │
│ Carrot                       │
│ Cooking Oil                  │
│ Basmati Rice                 │
│ Sugar                        │
│ Electrical Wire              │
│ Coca Cola                    │
│                              │
│          ↕ SCROLL            │
│                              │
├──────────────────────────────┤
│ Offers & Discounts            │ ← FIXED
│ BUYMORE10     ✓ Applied      │
│ View all                     │
├──────────────────────────────┤
│ Subtotal              ₹862.50│ ← FIXED
│ Discount              -₹86.25│
│ Total                 ₹776.25│
├──────────────────────────────┤
│ [ Hold Bill ] [ Proceed Pay ]│ ← FIXED
└──────────────────────────────┘

IMPORTANT:

Do NOT make the entire Cart panel scroll.

Do NOT allow Customer to scroll away.

Do NOT allow Offers & Discounts to scroll away.

Do NOT allow Totals to scroll away.

Do NOT allow Hold Bill / Proceed to Pay to scroll away.

The cashier must always be able to see:
- Current customer
- Applied offer
- Current total
- Hold Bill
- Proceed to Pay

while scrolling through cart items.

Only the Cart Item List receives overflow-y scrolling.

The Cart panel itself must remain fixed within the Billing layout.

The same principle applies to Desktop and Tablet.

For Mobile expanded Cart bottom-sheet:
- Cart header remains fixed.
- Customer section remains fixed.
- Cart item list is the primary scrollable region.
- Offers section remains fixed where viewport space permits.
- Totals and Hold/Proceed actions remain fixed/sticky at the bottom.
- If content exceeds the available mobile height, only the appropriate middle
  content region should scroll; never create a second unnecessary page-level
  scrollbar.

There must be NO horizontal scrolling anywhere in the Cart.

==================================================
RESPONSIVE CART HEIGHT
==================================================

The Cart must dynamically calculate its available height based on the
viewport.

Do NOT use a fixed pixel height that works only on one monitor.

On a 4K monitor:
- Cart uses available height naturally.
- Item list may have plenty of visible space.
- No unnecessary scrollbar should appear if all items fit.

On a 13-inch laptop:
- Cart adapts to the smaller viewport.
- Only the Cart Item List becomes scrollable when required.
- Customer, Offers, Totals and Actions remain visible.

On Tablet:
- Same principle.
- Only Cart Items scroll.

On Mobile:
- Expanded Cart is a bottom-sheet.
- Only the designated content region scrolls.
- Fixed/sticky sections remain accessible.

NEVER create:
- Whole-page vertical scrolling because of Cart content
- Nested unnecessary scrollbars
- Horizontal scrollbar
- Cart scrollbar that causes Customer/Offers/Totals to disappear
- A scrollbar on the entire Billing screen merely because the Cart contains
  many products
__________

FINAL NON-NEGOTIABLE RULES:

1. No duplicate Cart on Desktop/Tablet.
2. Mobile uses compact sticky Cart + expanded Cart bottom sheet.
3. Product Grid and Cart share ONE active-bill state.
4. Product ↔ Cart synchronization works in BOTH directions.
5. Qty and Pack use +/−.
6. Kg, Ltr and Meter use manual numeric input with NO +/−.
7. Changes must immediately synchronize.
8. No View More.
9. No unnecessary scrollbars.
10. No horizontal page overflow.
11. No permanent Customer or Offers section on main Billing catalog.
12. No separate Total Savings section.
13. Hold Bill and Proceed to Pay are side-by-side.
14. Header Hold Bill opens Held Bills.
15. Bottom Hold Bill moves the current bill to Held Bills.
16. Recent Bills is separate from Held Bills.
17. Proceed to Pay opens the future Payment Screen.
18. Desktop and Tablet use the same fundamental layout.
19. Mobile uses the approved mobile layout.
20. Do not redesign the existing navigation.
21. The screen must remain responsive from 4K monitor to 13-inch laptop, tablet and mobile without artificial fixed-layout scrolling.
22. Replicate the frozen mock design as closely as possible.