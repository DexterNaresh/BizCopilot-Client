IMPORTANT — VISUAL SOURCE OF TRUTH

The attached images are the FROZEN visual references for BizCopilot V1 Billing.

The attached images take priority over any generic UI/UX assumptions.

Do NOT redesign, reinterpret, simplify, or replace the visual design.

Reproduce the same:
- layout
- component hierarchy
- spacing
- proportions
- colors
- typography
- border radius
- shadows
- icons
- product-card structure
- cart structure
- offer placement
- customer-selection flow
- navigation behavior

The written specification below defines the FUNCTIONAL behavior and responsive behavior that may not be completely visible in the screenshots.

If something is visually visible in the reference image, reproduce it.
If something is not visible but is explicitly defined in the specification, implement it according to the specification.

Do NOT invent additional UI.

The goal is NOT to create a similar Billing UI.

The goal is to reproduce the FROZEN BizCopilot Billing design and implement its defined behavior accurately.



# BizCopilot V1 — Billing Section
## Figma-Level UI/UX + Angular Implementation Specification

You are implementing the **Billing Section of BizCopilot V1**.

This specification is based on the already-frozen BizCopilot UI design and product requirements.

The Billing Section contains exactly these 4 connected experiences:

1. Billing / Product Catalog
2. Cart
3. Offers
4. Customer Selection

DO NOT redesign the product concept.
DO NOT introduce new billing workflows.
DO NOT add unnecessary navigation.

The core product principle is:

> FAST BILLING + LESS NAVIGATION + SIMPLE FOR CASHIER

The attached/reference screenshots are the visual source of truth.

---

# 1. ARCHITECTURE — NON-NEGOTIABLE

The existing application architecture is frozen.

UI flow:

Screen
  ↓
Facade
  ↓
Application Contract
  ↓
Domain / Runtime

The UI is responsible ONLY for:

- presentation
- responsive layout
- local UI state
- navigation
- animations
- accessibility
- displaying Facade state
- triggering Facade/Application actions

The UI MUST NOT contain:

- business rules
- pricing calculations
- offer calculations
- tax calculations
- discount calculations
- repository access
- SQLite access
- persistence logic
- inventory calculations

Never bypass the Facade/Application Contract.

Do not modify existing business logic merely to make the UI easier to implement.

---

# 2. IMPORTANT V1 BUSINESS RULE

## NO INVENTORY IN V1

BizCopilot V1 does NOT contain Inventory.

Therefore the Billing UI MUST NOT display:

- stock quantity
- low-stock indicators
- stock value
- dead stock
- inventory movement
- purchase quantity
- stock warnings

Product information shown during billing is limited to what is useful for selling:

- Product image
- Product name
- Product code where useful
- Selling price
- Add/+ action

---

# 3. VERY IMPORTANT — "ADD PRODUCT" MEANING

Billing does NOT have an "Add Product" management function.

The cashier is selecting an EXISTING product and adding it to the current bill.

Therefore:

GOOD:

[ + ]

or

[ + Add ]

BAD:

[ + Add Product ]

"Add Product" belongs to Product Management, not Billing.

---

# 4. BILLING FLOW

Normal cashier flow:

Billing
  ↓
Search/select existing product
  ↓
Tap +
  ↓
Product added to current bill
  ↓
Continue selecting products
  ↓
Cart
  ↓
Optional: Change Customer
  ↓
Optional: View/Apply Offer
  ↓
Proceed to Pay
  ↓
Payment

The cashier should NOT leave Billing unnecessarily.

---

# 5. FOUR BILLING EXPERIENCES

## SCREEN 1 — BILLING

Purpose:

Main cashier workspace for selecting products.

## SCREEN 2 — CART

Purpose:

Review and modify the current bill.

## SCREEN 3 — OFFERS

Purpose:

View/select applicable offers from the Cart.

## SCREEN 4 — CUSTOMER

Purpose:

Search/select an existing customer OR enter new customer details without navigating through a separate "Add Customer" page.

---

# 6. MOBILE VIEW

Viewport:

< 600px

Mobile has limited screen space.

Therefore:

- Billing = full screen
- Cart = bottom sheet
- Offers = sheet/full-screen focused view
- Customer = sheet/full-screen focused view
- Bottom navigation = visible

---

## MOBILE BILLING STRUCTURE

Use this structure as the layout reference:

┌───────────────────────────────┐
│ Billing              Scan  ⋮  │
├───────────────────────────────┤
│ Search product / code /       │
│ barcode                       │
├───────────────────────────────┤
│ All | Favourites | Top ...    │
├───────────────────────────────┤
│                               │
│ Product       Product         │
│ Name          Name            │
│ ₹620          ₹275       +    │
│                               │
│ Product       Product         │
│ Name          Name            │
│ ₹1,250        ₹48        +    │
│                               │
│ Product       Product         │
│ Name          Name            │
│ ₹210          ₹120       +    │
├───────────────────────────────┤
│ 🛒 3 Items     ₹1,398     →  │
├───────────────────────────────┤
│ Home Billing Products More    │
└───────────────────────────────┘

### Header

"Billing" is the screen title.

Right-side contextual actions:

- Scan
- More/context action

Do NOT add another navigation menu next to Billing.

Bottom navigation handles application-level navigation.

---

# 7. MOBILE PRODUCT CATALOG

Product grid:

- 2 columns
- touch-friendly cards
- white cards
- subtle border
- rounded corners
- product image
- product name
- product code if applicable
- selling price
- + action

Example:

┌─────────────────────┐
│                     │
│     PRODUCT IMAGE   │
│                     │
│ Sunflower Oil 1L    │
│ OIL001              │
│ ₹160             +  │
└─────────────────────┘

Tap +:

Product is added immediately to the bill.

DO NOT navigate to Cart.

The cashier remains on Billing.

---

# 8. MOBILE CART BAR

When at least one product exists in the cart:

┌───────────────────────────────┐
│ 🛒 3 Items       ₹1,398    → │
└───────────────────────────────┘

This bar:

- remains visible above bottom navigation
- updates item count immediately
- updates total immediately
- opens Cart when tapped

---

# 9. MOBILE CART

Cart opens as a bottom sheet.

Structure:

┌────────────────────────────────┐
│ Your Cart (4)               ×  │
├────────────────────────────────┤
│ Customer                       │
│ 👤 Walk-In Customer  Default   │
│                         Change │
├────────────────────────────────┤
│ Product                        │
│ ₹160             − 1 +  ₹160 │
│                         🗑     │
├────────────────────────────────┤
│ Product                        │
│ ₹62              − 2 +  ₹124 │
│                         🗑     │
├────────────────────────────────┤
│ Product                        │
│ ₹61              − 1 +   ₹61 │
│                         🗑     │
├────────────────────────────────┤
│ ... more items ...             │
├────────────────────────────────┤
│ Offers & Discounts             │
│ 1 applied           View all → │
│                                │
│ SAVE20                         │
│ 10% off above ₹500             │
│ You save ₹45.50      Applied   │
├────────────────────────────────┤
│ Subtotal              ₹455.00  │
│ Discount              -₹45.50  │
│                                │
│ Total                 ₹409.50  │
├────────────────────────────────┤
│       Proceed to Pay           │
└────────────────────────────────┘

---

# 10. CART QUANTITY

Every item must have:

[ − ] 1 [ + ]

Rules:

+ → increase quantity
− → decrease quantity
quantity reaches zero → remove item
trash → remove item

No additional screen should be required.

---

# 11. CART WITH 6+ ITEMS

The cart MUST support many products.

Example:

┌────────────────────────┐
│ Your Cart (8)          │
├────────────────────────┤
│ Item 1       − 2 +     │
│ Item 2       − 1 +     │
│ Item 3       − 3 +     │
│ Item 4       − 1 +     │
│ Item 5       − 2 +     │
│ Item 6       − 1 +     │
│ Item 7       − 2 +     │
│ Item 8       − 1 +     │
│                        │
│      SCROLLABLE        │
├────────────────────────┤
│ Offers                 │
│ Subtotal               │
│ Discount               │
│ Total                  │
│                        │
│ Proceed to Pay         │
└────────────────────────┘

Only the cart item list should scroll.

Keep these visible whenever possible:

- Offers
- Subtotal
- Discount
- Total
- Proceed to Pay

---

# 12. OFFERS IN CART

The Cart does NOT show every available offer.

Instead:

┌──────────────────────────────┐
│ Offers & Discounts   1 applied│
│                       View all│
├──────────────────────────────┤
│ SAVE20                       │
│ 10% off above ₹500           │
│ You save ₹45.50      Applied │
└──────────────────────────────┘

The cashier taps:

"View all"

to see available offers.

This is important for reducing visual clutter.

---

# 13. OFFERS SCREEN

Offers are NOT reached from the main application navigation during billing.

Flow:

Cart
  ↓
Offers & Discounts
  ↓
View all
  ↓
Offers UI

Mobile:

- sheet/full-screen

Tablet:

- focused modal/panel

Desktop:

- focused dialog/panel

Structure:

┌──────────────────────────────────┐
│ Offers & Discounts             × │
├──────────────────────────────────┤
│ Available Offers                 │
│                                  │
│ ○ SAVE20                         │
│   10% off above ₹500             │
│   Save ₹45.50                    │
│                                  │
│ ● BUYMORE10                      │
│   10% off selected products      │
│   Save ₹30.00                    │
│                                  │
│ ○ FESTIVE50                      │
│   Flat ₹50 off                   │
│                                  │
├──────────────────────────────────┤
│           Apply Offer            │
└──────────────────────────────────┘

Offer applicability and discount calculation MUST come from the Application/Facade layer.

The UI only displays and selects.

---

# 14. CUSTOMER SELECTION

Customer selection is reached from:

Cart
  ↓
Customer
  ↓
Change

Walk-In Customer is selected by default.

Do NOT create:

Cart
 → Customer
 → Add Customer
 → Customer Form

That violates the fast-billing principle.

Instead the Customer screen directly provides:

1. Search existing customer
2. Enter customer details

---

# 15. CUSTOMER SCREEN STRUCTURE

┌────────────────────────────────────┐
│ ← Select Customer               ×  │
│   Search customer or enter details │
├────────────────────────────────────┤
│ Search Customer                    │
│ ┌────────────────────────────────┐ │
│ │ 🔍 Search by name / phone      │ │
│ └────────────────────────────────┘ │
│                                    │
│ Search results                     │
│                                    │
│ ◉ Ravi Kumar                       │
│   +91 9876543210                   │
│                                    │
│ ○ Priya Sharma                     │
│   +91 9988776655                   │
│                                    │
├────────────────────────────────────┤
│ OR                                 │
├────────────────────────────────────┤
│ Customer Details                   │
│                                    │
│ Name                               │
│ [____________________________]     │
│                                    │
│ Phone (Optional)                   │
│ [____________________________]     │
│                                    │
│ Notes (Optional)                   │
│ [____________________________]     │
├────────────────────────────────────┤
│ ◉ Walk-In Customer                 │
│   No customer information required │
├────────────────────────────────────┤
│          Use This Customer         │
└────────────────────────────────────┘

---

# 16. CUSTOMER SEARCH BEHAVIOR

When the cashier searches by:

- customer name
- phone number

show matching customers.

Example:

┌────────────────────────────────┐
│ ◉ Ravi Kumar                   │
│   +91 9876543210               │
└────────────────────────────────┘

The cashier must explicitly select the customer.

Use a radio-style selection state.

After selecting:

[ Use This Customer ]

confirms the customer for the current bill.

Do NOT automatically switch the customer merely because a search result appeared.

---

# 17. NEW CUSTOMER

There is NO separate:

"Add New Customer"

button.

The same Customer screen already contains:

- Customer Name
- Phone
- Notes

If the cashier enters customer information and taps:

[ Use This Customer ]

the Application Contract handles creation/selection.

---

# 18. WALK-IN CUSTOMER

Initial state:

◉ Walk-In Customer

Label:

"No customer information required"

This should remain the default unless the cashier explicitly chooses another customer.

---

# 19. TABLET VIEW

Viewport:

600px–1023px

Tablet is NOT a stretched mobile layout.

Use the additional screen width to reduce navigation.

## EMPTY CART

┌──────────────────────────────────────────────────────┐
│ Billing                              Scan       ⋮     │
├──────────────────────────────────────────────────────┤
│ Search product / code / barcode                      │
├──────────────────────────────────────────────────────┤
│ All | Favourites | Top Selling | Beverages | ...    │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Product Product Product Product Product              │
│                                                      │
│ Product Product Product Product Product              │
│                                                      │
│ Product Product Product Product Product              │
│                                                      │
└──────────────────────────────────────────────────────┘

---

# 20. TABLET — AFTER FIRST PRODUCT

Once the first product is added:

DO NOT navigate to another Cart screen.

The Cart becomes a side panel.

┌────────────────────────────────────────────────────────────┐
│ Billing                                  Scan        ⋮      │
├───────────────────────────────────┬────────────────────────┤
│ Search                            │ Your Cart (4)        × │
├───────────────────────────────────┤────────────────────────┤
│ All | Favourite | Top Selling     │ Customer               │
├───────────────────────────────────┤ Walk-In Customer       │
│                                   │                        │
│ Product Product Product           │ Item          − 1 +    │
│                                   │                        │
│ Product Product Product           │ Item          − 2 +    │
│                                   │                        │
│ Product Product Product           │ Item          − 1 +    │
│                                   │                        │
│ Product Product Product           │                        │
│                                   │ Offers & Discounts     │
│ Product Product Product           │ 1 applied   View all → │
│                                   │                        │
│                                   │ Subtotal               │
│                                   │ Discount               │
│                                   │ TOTAL                  │
│                                   │                        │
│                                   │ [ Proceed to Pay ]     │
└───────────────────────────────────┴────────────────────────┘

The cashier can continue adding products without closing the Cart.

This is a core BizCopilot UX requirement.

---

# 21. TABLET CART

The Cart is visually a separate workspace/panel, not a navigation page.

The user should clearly understand:

Left = product catalog
Right = current bill

Cart should remain visible while browsing.

---

# 22. DESKTOP / POS

Viewport:

≥ 1024px

Desktop must be designed as a POS workspace.

It must NOT be a stretched mobile UI.

Structure:

┌───────────────────────────────────────────────────────────────────┐
│ Sidebar │ Billing                                  Scan   ⋮       │
│         ├──────────────────────────────────┬──────────────────────┤
│ Home    │ Search product / code / barcode  │ Your Cart (4)     × │
│ Billing ├──────────────────────────────────┤                      │
│ Products│ All | Favourite | Top Selling     │ Customer             │
│ Customer│                                    │ Walk-In Customer     │
│ Reports │ Product Product Product Product    │                      │
│ AI      │                                    │ Item      − 1 +      │
│ Offers  │ Product Product Product Product    │ Item      − 2 +      │
│ Settings│                                    │ Item      − 1 +      │
│         │ Product Product Product Product    │                      │
│         │                                    │ Offers               │
│         │ Product Product Product Product    │ View all →           │
│         │                                    │                      │
│         │                                    │ Subtotal             │
│         │                                    │ Discount             │
│         │                                    │ TOTAL                │
│         │                                    │                      │
│         │                                    │ [ Proceed to Pay ]   │
└─────────┴────────────────────────────────────┴──────────────────────┘

Recommended proportions:

Sidebar:
~220px

Product catalog:
~60–65%

Cart:
~35–40%

---

# 23. DESKTOP SIDEBAR

Primary application navigation:

BizCopilot

Home
Billing ← active
Products
Customers
Reports
AI Assistant
Offers
Settings
Help & Support

Do NOT duplicate this navigation inside the Billing header.

---

# 24. DESKTOP PRODUCT CARD

Desktop has sufficient space for a visible Add action.

Example:

┌──────────────────────┐
│      IMAGE           │
│                      │
│ Sunflower Oil 1L     │
│ OIL001               │
│ ₹160                 │
│                      │
│       [ + Add ]      │
└──────────────────────┘

Again:

"+ Add" means:

ADD EXISTING PRODUCT TO CURRENT BILL.

It does NOT create a product.

---

# 25. DESKTOP CART

The Cart should remain visible after the first item is added.

The cashier can:

- add products
- change quantities
- remove items
- change customer
- view offers
- apply offers
- see totals
- proceed to payment

without navigating away from Billing.

---

# 26. RESPONSIVE MATRIX

| Feature | Mobile | Tablet | Desktop |
|---|---|---|---|
| Catalog | Full screen | Main workspace | Main workspace |
| Cart | Bottom sheet | Right panel | Permanent right panel |
| Cart initially hidden | Yes | Yes | Yes |
| Cart appears after first item | Bottom cart bar | Side panel | Right panel |
| Product grid | 2 columns | 4–5 columns | 4–5+ columns |
| Offers | Sheet | Modal/panel | Dialog/panel |
| Customer | Sheet | Modal/panel | Dialog/panel |
| Bottom navigation | Yes | Yes | No |
| Sidebar | No | No | Yes |
| Inventory | Never | Never | Never |
| Product management | Not here | Not here | Not here |

---

# 27. VISUAL DESIGN SYSTEM

Use the frozen BizCopilot visual language.

Primary:

#5B3BEB

Primary hover:

#4B2DC7

Canvas:

#F5F6FC

Surface:

#FFFFFF

Use purple for:

- active navigation
- selected filter
- primary CTA
- selected radio
- focused controls
- important interactive states

Use green for:

- applied offers
- savings
- successful states

Use red only for:

- destructive actions
- validation errors
- failures

Avoid excessive gradients.

---

# 28. TYPOGRAPHY

Use Inter or equivalent modern system sans-serif.

Suggested hierarchy:

Screen title:
22–24px / 600–700

Section title:
16–18px / 600

Product name:
14–16px / 600

Product code:
12–13px

Price:
14–16px / 600

Total:
20–24px / 700

Secondary text:
12–14px

Money values should have consistent numeric alignment.

---

# 29. COMPONENT STYLE

Cards:

- 16px radius
- white background
- subtle border
- subtle shadow

Inputs:

- 12px radius
- clear focus state
- comfortable touch height

Chips:

- pill shape
- approximately 20px radius

Primary buttons:

- purple
- rounded
- high contrast
- touch friendly

Minimum touch target:

44 × 44px wherever practical.

---

# 30. FIGMA COMPONENT SYSTEM

Create reusable components.

Billing:

- AppHeader
- SearchBar
- CategoryFilter
- ProductCard
- AddProductToBillButton
- CartBar

Cart:

- CartHeader
- CustomerSelector
- CartItem
- QuantityStepper
- DeleteButton
- OfferSummary
- PriceSummary
- ProceedButton

Offers:

- OfferCard
- OfferSelection
- ApplyOfferButton

Customer:

- CustomerSearch
- CustomerResult
- CustomerDetailsForm
- WalkInCustomerOption
- UseCustomerButton

Do not design duplicate versions of the same component unnecessarily.

---

# 31. FIGMA FRAMES

Create these responsive frames:

01 — Billing Mobile
02 — Cart Mobile
03 — Offers Mobile
04 — Customer Mobile

05 — Billing Tablet — Empty Cart
06 — Billing Tablet — Cart Open

07 — Offers Tablet
08 — Customer Tablet

09 — Billing Desktop — Empty Cart
10 — Billing Desktop — Cart Open

11 — Offers Desktop
12 — Customer Desktop

The logical UX remains the same.

Only presentation changes according to available viewport space.

---

# 32. DESIGN TOKENS

All visual values should be centralized.

Example:

:root {
  --color-primary: #5B3BEB;
  --color-primary-hover: #4B2DC7;
  --color-bg-canvas: #F5F6FC;
  --color-surface: #FFFFFF;
  --color-border: #EFF1F5;
  --color-text-primary: #111827;
  --color-text-secondary: #6B7280;
  --color-success: #059669;
  --color-error: #DC2626;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-card: 16px;
  --radius-pill: 24px;

  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}

Do not scatter magic values throughout component SCSS.

---

# 33. ASSETS

All product images, logos, icons and avatars must follow the existing project AssetService architecture.

Do not introduce:

- Base64 images
- arbitrary external image URLs
- hardcoded asset paths
- fake production assets

---

# 34. INTERACTION STATES

Design all important states:

Product:

- default
- pressed
- added

Cart:

- empty
- 1 item
- multiple items
- 6+ items
- loading
- error

Offer:

- available
- selected
- applied
- unavailable

Customer:

- Walk-In selected
- search
- result found
- result selected
- new customer details
- validation error

Buttons:

- default
- pressed
- disabled
- loading

---

# 35. IMPORTANT VISUAL RULE

The frozen screenshots are the visual source of truth.

Do NOT:

- redesign the UI
- change the purple branding
- add inventory
- add unnecessary pages
- add "Add Product" management actions to Billing
- add recent/frequent customer sections merely because they are common POS patterns
- create separate Add Customer navigation
- move Offers to main navigation for the billing workflow
- force tablet/desktop into mobile bottom-sheet behavior
- introduce unnecessary navigation

If the textual specification and screenshot appear visually inconsistent, preserve the frozen visual design unless an explicit functional requirement says otherwise.

---

# 36. ANGULAR IMPLEMENTATION

Use the existing Angular architecture.

Do not rewrite the application architecture.

Use existing:

- Facades
- Application Contracts
- Services
- Models
- Signals
- AssetService
- routing structure

Only modify what is required for the Billing UI.

The implementation must maintain 100% functional parity with the existing business/application contracts.

---

# 37. BUILD / VERIFICATION

After implementation:

Run the existing Angular build.

Example:

npm run build

Also verify:

- TypeScript compilation
- template compilation
- responsive behavior
- existing tests

Do not remove tests simply to make the build pass.

---

# 38. VISUAL VERIFICATION

Render the implementation at:

Mobile:
390 × 844

Tablet:
use the target tablet viewport

Desktop:
1440 × 900

Compare against the frozen references.

Check:

✓ Header
✓ Search
✓ Filters
✓ Product cards
✓ Product images
✓ Prices
✓ Add buttons
✓ Cart appearance
✓ Quantity steppers
✓ Delete controls
✓ Offer summary
✓ View all offers
✓ Customer selector
✓ Walk-In default
✓ Customer search
✓ Customer confirmation
✓ Totals
✓ Proceed to Pay
✓ Bottom navigation
✓ Desktop sidebar
✓ Responsive spacing
✓ Typography
✓ Purple color
✓ Borders
✓ Radius
✓ Shadows
✓ Scrolling

If differences exist, fix the visual implementation.

Do NOT redesign the UI during the correction pass.

---

# 39. FINAL UX TEST

The following should be possible with minimum navigation:

Cashier opens Billing
    ↓
Search/select product
    ↓
Tap +
    ↓
Product appears in Cart
    ↓
Continue selecting products
    ↓
Open Cart if necessary
    ↓
Change Customer if necessary
    ↓
View All Offers if necessary
    ↓
Apply offer if necessary
    ↓
Review Total
    ↓
Proceed to Pay

MOBILE:
Use Cart Bottom Sheet.

TABLET:
Keep Cart beside Catalog.

DESKTOP:
Keep Cart permanently visible beside Catalog.

This distinction is critical.

The larger the viewport, the more of the billing workflow should remain visible simultaneously.

---

# FINAL PRODUCT PRINCIPLE

BizCopilot is not trying to imitate a complicated traditional POS.

The Billing experience should feel:

FAST
SIMPLE
TOUCH FRIENDLY
MINIMAL
CLEAR
LOW NAVIGATION
CASHIER FRIENDLY

Every UI decision must support:

> "Can the cashier complete the bill faster with fewer taps?"




# OVERLAY BEHAVIOR — NON-NEGOTIABLE

Offers and Customer are contextual Billing actions.

They MUST NOT behave as normal navigation pages during the billing workflow.

## MOBILE

Billing
  ↓
Cart Bottom Sheet
  ↓
Offers → overlay/sheet on top of Cart
OR
Customer → overlay/sheet on top of Cart

## TABLET

Billing Catalog + Cart Side Panel remain visible.

When the cashier selects:

Cart → View all Offers

open Offers as a modal/overlay ABOVE the existing Billing + Cart workspace.

Do NOT navigate away from Billing.
Do NOT replace the Cart.
Do NOT close or reset the Cart.

After applying/selecting an offer:
    close overlay
    return to the same Billing + Cart state.

When the cashier selects:

Cart → Change Customer

open Customer Selection as a modal/overlay ABOVE the existing Billing + Cart workspace.

Do NOT navigate away from Billing.
Do NOT replace the Cart.
Do NOT close or reset the Cart.

After selecting/confirming the customer:
    close overlay
    return to the same Billing + Cart state.

## DESKTOP / POS

Billing Catalog + Permanent Cart remain visible.

Offers:
    Cart → View all
    → centered modal/dialog overlay
    → select/apply offer
    → close overlay
    → return to Billing + Cart.

Customer:
    Cart → Change
    → centered modal/dialog overlay
    → search/select/enter customer
    → confirm
    → close overlay
    → return to Billing + Cart.

The underlying Billing Catalog and Cart MUST remain mounted and preserve their current state while the overlay is open.

The overlay is contextual to the current bill, NOT a new navigation destination.

### IMPORTANT UX PRINCIPLE

The cashier must never lose the current bill because they opened:

- Offers
- Customer Selection

These are temporary contextual interactions over the active Billing workspace.

This is specifically designed to maintain:

FAST BILLING + LESS NAVIGATION.







==================================================
NAVIGATION SHELL INTEGRATION
==================================================

Billing is a PRIMARY application destination.

The Billing screen MUST use the shared BizCopilot
Navigation Shell.

Do NOT create a Billing-specific navigation system.

--------------------------------------------------
MOBILE
--------------------------------------------------

Breakpoint:
< 600px

Use the shared Mobile Bottom Navigation:

┌────────────────────────────────┐
│                                │
│        BILLING WORKSPACE       │
│                                │
├────────────────────────────────┤
│ Home │ Billing │ Products │ More │
└────────────────────────────────┘

Billing is the ACTIVE navigation item.

Active:
- Google Material Symbols Outlined icon
- Purple icon
- Purple label
- Existing Navigation Shell active-state styling

Inactive:
- Neutral gray icon
- Neutral gray label

The Billing screen MUST NOT add another bottom navigation.

--------------------------------------------------
TABLET
--------------------------------------------------

Breakpoint:
600px – 1023px

Use the SAME shared Tablet Navigation Shell:

┌──────────────────────────────────────────┐
│              BILLING WORKSPACE           │
│                                          │
│ Product Catalog        │ Cart             │
│ Product Product        │ Customer         │
│ Product Product        │ Items            │
│ Product Product        │ Offers           │
│                        │ Total            │
├──────────────────────────────────────────┤
│ Home │ Billing │ Products │ More           │
└──────────────────────────────────────────┘

Billing remains the ACTIVE navigation item.

The Cart is part of the Billing workspace.

Cart is NOT a navigation destination.

--------------------------------------------------
DESKTOP / POS
--------------------------------------------------

Breakpoint:
≥ 1024px

Use the shared Desktop Navigation Shell.

The persistent left sidebar contains:

Home
Billing
Products
Customers
...

Billing is the ACTIVE sidebar item.

Structure:

┌──────────────┬──────────────────────────────────────┐
│ BizCopilot   │ Billing                              │
│              │                                      │
│ Home         │ Product Catalog       │ CART         │
│ Billing  ←   │                       │              │
│ Products     │ Product Product       │ Customer     │
│ Customers    │ Product Product       │ Items        │
│ ...          │ Product Product       │ Offers       │
│              │                       │ Total        │
└──────────────┴──────────────────────────────────────┘

Do NOT display Bottom Navigation on Desktop.

--------------------------------------------------
SCREEN HEADER
--------------------------------------------------

The Billing header is a SCREEN HEADER, not navigation.

Example:

Billing                         Scan   ⋮

The word "Billing" identifies the current screen.

It MUST NOT duplicate or replace the shared Navigation Shell.

Do NOT add:

- Home menu
- Billing menu
- Products menu
- Customers menu
- More menu

inside the Billing header.

--------------------------------------------------
CART NAVIGATION RULE
--------------------------------------------------

Cart is part of the Billing workflow.

Mobile:

Billing
 ↓
Cart View

Tablet:

Billing + permanent Cart Panel

Desktop:

Billing + permanent Cart Panel

Do NOT add Cart to:

- Bottom Navigation
- More menu
- Desktop Sidebar

--------------------------------------------------
CUSTOMER / OFFER RULE
--------------------------------------------------

Customer selection and Offers are Billing workflow
overlays.

They MUST NOT navigate away from Billing.

Mobile:

Billing
 ↓
Cart
 ↓
Customer / Offers Bottom Sheet

Tablet:

Billing + Cart
 ↓
Customer / Offers Modal

Desktop:

Billing + Cart
 ↓
Customer / Offers Dialog

Closing the overlay returns the user directly to
the same Billing + Cart state.

--------------------------------------------------
NAVIGATION SOURCE OF TRUTH
--------------------------------------------------

Navigation behavior, icons, colors, active states,
responsive breakpoints, accessibility, animation,
and role-based visibility are defined by:

BizCopilot V1 — Navigation Shell

The Billing screen MUST consume those shared rules.

Do NOT redefine navigation tokens locally.

--------------------------------------------------
ICON RULE
--------------------------------------------------

Use Google Material Symbols Outlined as defined by
the Navigation Shell.

Billing navigation icon:

receipt_long

Do NOT use emoji or randomly generated icons.

--------------------------------------------------
FINAL RULE
--------------------------------------------------

Billing owns the BILLING WORKSPACE.

Navigation Shell owns APPLICATION NAVIGATION.

Therefore:

Navigation Shell
        ↓
     Billing
        ↓
 ┌──────┼─────────┐
 │      │         │
Products Cart   Header Actions
          │
      ┌───┴────┐
      │        │
   Customer  Offers
    Overlay   Overlay

Never mix application navigation with Billing workflow
controls.