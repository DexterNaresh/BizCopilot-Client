# BizCopilot V1 — Add Product Screen
## Figma-Level Responsive UI/UX Recreation Prompt

Recreate the finalized BizCopilot V1 Add Product screen exactly as specified below.

The screen must match the existing BizCopilot Product screen visual language, including typography, spacing system, colors, borders, corner radius, shadows, icons, buttons, input styling, and responsive behavior.

IMPORTANT:
This is a RESPONSIVE UI.

Do NOT implement the screen using static/fixed pixel dimensions for the form fields, modal/sheet width, input widths, columns, or layout proportions.

The layout must fluidly resize based on the available viewport.

Use:
- responsive percentages
- flexbox
- CSS grid
- max-width/min-width only where genuinely required
- fluid padding/spacing
- responsive breakpoints
- intrinsic content sizing
- clamp()/relative sizing where appropriate

Fields must shrink and enlarge naturally when the viewport changes.

Do not create separate hard-coded layouts for individual device resolutions.

--------------------------------------------------
1. SCREEN PURPOSE
--------------------------------------------------

Create the Add Product experience for BizCopilot's Product module.

Add Product must open as an overlay ABOVE the existing Products screen.

It must NOT navigate to a separate page.

The Products screen remains visible behind the overlay and retains its current state.

Flow:

Products Screen
      ↓
Dimmed Backdrop
      ↓
Add Product Overlay

The parent Products screen must not reload or lose:
- search
- filters
- pagination
- scroll position
- existing product data

--------------------------------------------------
2. RESPONSIVE DESIGN — HARD REQUIREMENT
--------------------------------------------------

The entire Add Product screen must be fluid.

When the browser/device viewport is resized:

- modal width must adapt
- fields must shrink/enlarge
- text areas must resize
- type cards must adapt
- buttons must adapt
- internal spacing must adapt
- content must remain usable
- no horizontal overflow
- no clipped fields
- no overlapping controls

Do NOT use fixed pixel widths such as:

width: 600px
width: 400px
width: 250px

for the main responsive form structure.

Instead use responsive constraints such as:

width: 100%
max-width: appropriate responsive constraint
width: min(...)
flex: 1
grid-template-columns using flexible tracks
clamp()
percentage-based sizing

Fixed dimensions may only be used for small visual elements where appropriate, such as icon sizes, touch-target minimums, borders, etc.

The design must respond continuously between breakpoints rather than only looking correct at one screenshot resolution.

--------------------------------------------------
3. VIEWPORT BEHAVIOR
--------------------------------------------------

Support:

Mobile
Tablet
Desktop

IMPORTANT:

Tablet and Mobile use the SAME sequential form structure.

Desktop also uses the SAME sequential form structure.

Do NOT create a two-column desktop/tablet form.

Do NOT rearrange fields based on device.

The field order is ALWAYS:

1. Product Image
2. Product Name
3. Type / Unit
4. Selling Price
5. Description
6. Barcode
7. Category
8. Actions

Only the container presentation and available space change.

--------------------------------------------------
4. MOBILE
--------------------------------------------------

Use a bottom-sheet style overlay.

The sheet:

- spans the available width
- has rounded top corners
- uses responsive height
- can expand to near/full viewport height when required
- has a scrollable content area
- keeps action buttons accessible

The sheet must not have a fixed height.

If content exceeds the viewport:

Content scrolls inside the sheet.

The underlying Products page remains dimmed.

--------------------------------------------------
5. TABLET
--------------------------------------------------

Use the SAME form as Mobile.

Do not switch to the desktop two-column layout.

Use a responsive centered/sheet-style overlay.

The form width should fluidly adapt to the available tablet viewport.

Fields should expand to use the available width while maintaining comfortable readable proportions.

As the tablet viewport becomes wider, the fields should naturally become wider.

As it becomes narrower, they should naturally shrink.

No horizontal scrolling.

--------------------------------------------------
6. DESKTOP
--------------------------------------------------

Use a centered modal overlay above the Products screen.

The modal must have:

- responsive width
- sensible maximum readable width
- responsive internal padding
- rounded corners
- soft shadow
- scrollable body when necessary

Do NOT hard-code a single modal width.

The modal should resize naturally when the desktop browser is resized.

Example behavior:

Wide desktop:
→ modal grows appropriately

Medium desktop:
→ modal becomes narrower

Small desktop:
→ modal continues shrinking without breaking the layout

--------------------------------------------------
7. BACKDROP
--------------------------------------------------

When the Add Product modal is open:

- dim the Products screen
- retain visual context of the parent screen
- prevent interaction with the parent
- keep overlay above all parent content

Use a subtle neutral/dark translucent backdrop.

--------------------------------------------------
8. MODAL HEADER
--------------------------------------------------

Header:

Add Product

Subtitle:

Enter basic details to add a new product.

Top-right:

X close icon.

Use a clean outline icon such as Lucide X.

The header should remain visually separated from the form.

--------------------------------------------------
9. PRODUCT IMAGE
--------------------------------------------------

First field:

Product Image (Optional)

Use a responsive dashed-border upload area.

Empty state:

Add Image

JPG, PNG or WebP
Max size 2MB.

Use an outline camera/image icon.

The image area must resize with the available form width.

Do not give it a rigid fixed width.

Interaction:

Tap/click Add Image.

Allow:
- file/gallery selection
- camera capture where supported

After image selection:

- show the selected image inside the same area
- allow replace/remove
- do not open a separate preview screen

Product image is optional.

--------------------------------------------------
10. PRODUCT NAME
--------------------------------------------------

Label:

Product Name *

Input placeholder:

Enter product name

Maximum:

100 characters

Show live counter:

0 / 100

The input must use the full available responsive width.

Do not assign a fixed width.

Required validation:

- empty = error
- whitespace-only = error
- valid name = accepted

--------------------------------------------------
11. TYPE / UNIT
--------------------------------------------------

Label:

Type / Unit *

Helper:

How do you sell this product?

Display five selectable type cards:

Qty
Kg
Ltr
Meter
Pack

The cards must form a responsive layout.

They must NOT have hard-coded widths that break at smaller sizes.

Use flexible layout behavior.

Possible responsive behavior:

- wide available space → cards fit in one row
- narrower available space → cards shrink proportionally
- if necessary → cards wrap cleanly

Do not allow clipping or horizontal overflow.

--------------------------------------------------
12. TYPE OPTIONS
--------------------------------------------------

Qty

Icon:
numeric/hash/123 style icon

Label:
Qty

Supporting:
By Quantity

Kg

Icon:
Weight / scale icon

Label:
Kg

Supporting:
By Weight

Ltr

Icon:
Droplets icon

Label:
Ltr

Supporting:
By Volume

Meter

Icon:
Ruler icon

Label:
Meter

Supporting:
By Length

Pack

Icon:
Package/box icon

Label:
Pack

Supporting:
By Pack

Use one consistent outline icon family.

Preferred:
Lucide or equivalent SVG outline icons.

Do NOT use emoji icons.

--------------------------------------------------
13. TYPE SELECTION
--------------------------------------------------

Default:

Qty

Selected state:

- BizCopilot purple accent border
- subtle purple background
- check indicator
- stronger label

Unselected:

- neutral border
- neutral background
- normal text

Only one option may be selected.

--------------------------------------------------
14. TYPE HELPER MESSAGE
--------------------------------------------------

When Qty is selected:

Use this helper:

Use this option for items sold as count (e.g., 1, 2, 3...)

When Kg:

Quantity will be entered as weight, e.g. 0.560 kg.

When Ltr:

Quantity will be entered as volume, e.g. 0.750 Ltr.

When Meter:

Quantity will be entered as length, e.g. 7.5 Meter.

When Pack:

Quantity will be entered as whole packs.

Keep the helper compact.

--------------------------------------------------
15. SELLING PRICE
--------------------------------------------------

Label:

Selling Price *

Responsive input:

₹
Enter selling price
per Qty

The suffix dynamically changes based on Type.

Qty:
per Qty

Kg:
per Kg

Ltr:
per Ltr

Meter:
per Meter

Pack:
per Pack

Helper text must dynamically update.

Qty:

Enter the selling price for 1 Qty

Kg:

Enter the selling price for 1 Kg

Ltr:

Enter the selling price for 1 Ltr

Meter:

Enter the selling price for 1 Meter

Pack:

Enter the selling price for 1 Pack

Price must be positive.

Use ₹ currency symbol.

--------------------------------------------------
16. DESCRIPTION
--------------------------------------------------

Label:

Description (Optional)

Textarea placeholder:

Enter product description

Maximum:

250 characters

Live counter:

0 / 250

Textarea must grow/shrink with the responsive form width.

Do not assign a rigid fixed width.

Description is optional.

--------------------------------------------------
17. BARCODE
--------------------------------------------------

Label:

Barcode (Optional)

Input:

Enter barcode

Trailing icon:

Barcode scanner icon.

Preferred:
Lucide ScanBarcode or equivalent.

Example:

Enter barcode                       [scanner]

Manual entry supported.

Scanner supported where platform capability exists.

Barcode is optional.

--------------------------------------------------
18. CATEGORY
--------------------------------------------------

Label:

Category *

Responsive select field:

[ Category icon ] Select category [ Chevron Down ]

Category is required.

Use categories from the existing Category module.

Do not create category management inside Add Product.

Do not add an Add Category button inside this form unless separately approved.

--------------------------------------------------
19. FOOTER
--------------------------------------------------

Bottom actions:

Cancel
Save Product

Cancel:
secondary/outlined button.

Save Product:
primary BizCopilot purple button.

Buttons must remain accessible on mobile and tablet.

The footer must adapt fluidly to available width.

Do not use fixed button widths.

Buttons may grow/shrink naturally while maintaining comfortable touch targets.

On small mobile widths, ensure both actions remain usable without horizontal overflow.

--------------------------------------------------
20. SAVE BEHAVIOR
--------------------------------------------------

Click Save Product.

Validate:

Required:
- Product Name
- Type
- Selling Price
- Category

Optional:
- Product Image
- Description
- Barcode

Invalid:

- keep modal open
- show field-level error
- preserve entered values
- scroll to the relevant field if necessary

Valid:

Save Product
↓
Create Product
↓
Close overlay
↓
Return to Products
↓
Update product list

Do not perform a full-page route transition.

--------------------------------------------------
21. CANCEL / CLOSE
--------------------------------------------------

Cancel and X both close the overlay.

If the user has entered data, use the application's standard unsaved-change confirmation behavior.

Do not silently discard meaningful user input.

--------------------------------------------------
22. ICON SYSTEM
--------------------------------------------------

Use one consistent outline icon family.

Preferred:

Lucide Icons or equivalent SVG outline icon library.

Use:

X
ImagePlus / Camera
Hash / numeric
Weight
Droplets
Ruler
Package
Info
ScanBarcode
ShoppingBasket
ChevronDown
Save

Do not mix different icon styles.

Do not use emoji.

Icons should support labels rather than replace them.

--------------------------------------------------
23. VISUAL STYLE
--------------------------------------------------

Use the existing BizCopilot light theme.

Primary:
BizCopilot purple.

Use purple for:

- primary button
- selected type
- focus states
- active borders
- important action icons

Background:
white/light neutral.

Borders:
soft neutral gray.

Text:
dark neutral.

Secondary text:
muted gray.

Error:
semantic red.

Success:
semantic green.

Keep the UI premium, clean and modern.

Avoid excessive gradients.

Avoid unnecessary decoration.

--------------------------------------------------
24. TYPOGRAPHY
--------------------------------------------------

Follow the existing BizCopilot typography system.

Modal title:
strong/semibold.

Subtitle:
muted.

Field labels:
medium/semibold.

Input text:
normal.

Helper text:
small and muted.

Do not use oversized typography.

Typography must also resize/reflow naturally where necessary.

--------------------------------------------------
25. RESPONSIVE SPACING
--------------------------------------------------

Spacing must be fluid/responsive.

Do NOT define the entire design using a fixed px spacing system.

Use the project's responsive spacing tokens.

Where fluid interpolation is needed, use responsive CSS techniques such as:

clamp()

relative units

responsive design tokens

The form should become more compact on small screens and breathe more on larger screens.

--------------------------------------------------
26. SCROLLING
--------------------------------------------------

Desktop:

If modal content exceeds available viewport height:

Only the modal body scrolls.

Tablet:

Same.

Mobile:

The bottom sheet content scrolls.

The action area should remain accessible.

Do not allow the entire background Products page to scroll when the modal is open.

--------------------------------------------------
27. PRODUCT FORM STRUCTURE
--------------------------------------------------

Final structure:

Add Product
↓
Product Image (Optional)
↓
Product Name *
↓
Type / Unit *
↓
Selling Price *
↓
Description (Optional)
↓
Barcode (Optional)
↓
Category *
↓
Cancel / Save Product

This order is frozen.

Do not rearrange fields for desktop, tablet or mobile.

--------------------------------------------------
28. PRODUCT MODEL
--------------------------------------------------

The Add Product screen creates:

Product
├── Name
├── Type
│   ├── Qty
│   ├── Kg
│   ├── Ltr
│   ├── Meter
│   └── Pack
├── Selling Price
├── Category
├── Image (Optional)
├── Description (Optional)
└── Barcode (Optional)

There is NO separate selling configuration.

Do NOT add:

- quantity precision
- quantity increment
- base unit
- conversion configuration
- wholesale price
- customer-specific price
- stock
- low stock
- inventory valuation
- supplier
- warehouse

--------------------------------------------------
29. BILLING RELATIONSHIP
--------------------------------------------------

The selected Type controls Billing automatically.

Qty / Pack:

integer quantity

Billing:

[ − ] 1 [ + ]

Kg / Ltr / Meter:

decimal quantity

Billing:

[ 1.000 ] kg

The Add Product screen does NOT contain billing quantity controls.

--------------------------------------------------
30. NO INVENTORY
--------------------------------------------------

Inventory is NOT part of V1.

Do not show:

- stock
- opening stock
- current stock
- reorder level
- low stock
- inventory valuation
- warehouse

The product is simply configured as a sellable product.

--------------------------------------------------
31. CATEGORY SCREEN
--------------------------------------------------

Do not modify the finalized Category screen.

The Product Type belongs to Product + Billing.

Category remains responsible for:

- category name
- category status
- product association
- category management

--------------------------------------------------
32. RESPONSIVE ACCEPTANCE TEST
--------------------------------------------------

The implementation must be tested by continuously resizing the viewport.

Test:

Very narrow mobile
↓
Normal mobile
↓
Large mobile
↓
Tablet portrait
↓
Tablet landscape
↓
Small desktop
↓
Medium desktop
↓
Large desktop

At every width:

- no field is clipped
- no field overlaps another
- no horizontal scrolling
- labels remain readable
- type cards remain usable
- buttons remain usable
- modal remains centered/sheet-aligned correctly
- content remains scrollable
- fields expand/shrink naturally
- parent Products screen remains correctly dimmed

IMPORTANT:

Do NOT optimize only for one screenshot.

The screenshot is a visual reference.

The responsive rules are the implementation requirement.

--------------------------------------------------
33. FINAL DESIGN PRINCIPLE
--------------------------------------------------

The screen should communicate:

Name
→
How do you sell it?
→
Price
→
Optional details
→
Category
→
Save

The user should be able to add a normal product in seconds.

Keep the UI premium but extremely simple.

The underlying Billing Engine can be sophisticated.

The Add Product screen must not feel sophisticated.

--------------------------------------------------
34. FINAL FROZEN CHECKLIST
--------------------------------------------------

[ ] Overlay above Products screen
[ ] Products page remains visible/dimmed
[ ] No full-page navigation
[ ] Mobile = bottom sheet
[ ] Tablet = same sequential form as Mobile
[ ] Desktop = centered responsive modal
[ ] No separate tablet layout
[ ] No fixed modal width
[ ] No fixed field widths
[ ] Fields fluidly resize
[ ] Layout works continuously while viewport is resized
[ ] Product Image first
[ ] Product Image optional
[ ] No Product Preview
[ ] No More Details option
[ ] Product Name *
[ ] Type / Unit *
[ ] Qty
[ ] Kg
[ ] Ltr
[ ] Meter
[ ] Pack
[ ] Qty selected by default
[ ] Selling Price *
[ ] Dynamic price suffix
[ ] Description optional
[ ] Barcode optional
[ ] Barcode scanner icon
[ ] Category *
[ ] Cancel
[ ] Save Product
[ ] Consistent Lucide-style icons
[ ] No Inventory fields
[ ] No advanced selling configuration
[ ] Same field order on all devices
[ ] Same behavior on all devices
[ ] Responsive scrolling
[ ] Responsive footer
[ ] Field-level validation
[ ] Preserve entered data on validation failure
[ ] Save updates Products without full-page navigation

FINAL RULE:

The Add Product screen must be implemented as a genuinely responsive,
fluid component.

Never recreate the screenshot by hard-coding pixel positions or fixed
field dimensions.

The visual reference must be reproduced through responsive layout rules,
not through static sizing.-

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
ADD PRODUCT / EDIT PRODUCT SCREEN
COMPLETE UI STRUCTURE + FIGMA-LEVEL RESPONSIVE SPECIFICATION
============================================================

The Add Product screen is a reusable form component used for:

1. Add Product
2. Edit Product

There must be ONE shared component.

Do NOT create separate Add Product and Edit Product designs.

============================================================
1. OPENING BEHAVIOR
============================================================

When:

+ Add Product

is clicked from the Product screen:

Open the Add/Edit Product overlay.

Do NOT navigate to a separate page.

The Product screen remains visible behind the overlay.

When:

Edit

is clicked from a Product Grid card or Table row:

Open the SAME Add/Edit Product overlay.

Existing product data is pre-populated.

============================================================
2. MODES
============================================================

ADD MODE

Title:

Add Product

Supporting text:

Add a product to your catalog

Primary action:

Save


EDIT MODE

Title:

Edit Product

Supporting text:

Update product information

Primary action:

Save Changes

The visual structure remains identical.

Only:

- title
- supporting text
- pre-populated values
- primary action label

change.

============================================================
3. COMPLETE FORM STRUCTURE
============================================================

The form follows this exact vertical hierarchy:

HEADER
↓
PRODUCT IMAGE
↓
PRODUCT NAME
↓
TYPE / UNIT
↓
SELLING PRICE
↓
DESCRIPTION
↓
BARCODE
↓
CATEGORY
↓
FORM ACTIONS

Do NOT introduce a separate "More" section.

Do NOT create tabs.

Do NOT hide Description or Barcode behind another menu.

Description and Barcode are directly available in the form.

============================================================
4. DESKTOP STRUCTURE
============================================================

Desktop:

Use a centered overlay/modal.

Underlying Product screen remains visible.

Structure:

┌──────────────────────────────────────────────┐
│ Add Product                              X  │
│ Add a product to your catalog                │
│                                              │
│ Product Image                                │
│                                              │
│              [ Image / Add Image ]           │
│                                              │
│ Product Name *                               │
│ [ Enter product name                    ]    │
│                                              │
│ Type / Unit *                                │
│ [ Qty ▼ ]                                    │
│                                              │
│ Selling Price *                              │
│ [ ₹ Enter selling price                ]    │
│                                              │
│ Description                                  │
│ [ Enter description...                 ]    │
│ [                                        ]  │
│                                              │
│ Barcode                                      │
│ [ Enter or scan barcode                ]    │
│                                              │
│ Category *                                   │
│ [ Select category ▼ ]                        │
│                                              │
│                         Cancel     Save      │
└──────────────────────────────────────────────┘

The ASCII dimensions are structural only.

Do NOT reproduce these dimensions literally.

============================================================
5. MOBILE / TABLET STRUCTURE
============================================================

Use the same form hierarchy.

Do NOT redesign the fields.

Mobile:

single-column layout.

Tablet:

same single-column logical flow.

Desktop:

same logical vertical flow.

The fields may become wider/narrower based on available space.

============================================================
6. PRODUCT IMAGE
============================================================

Product Image is optional.

Display the image area near the top of the form.

Provide:

Add Image

Use an image/upload icon.

The user can:

- select an image
- replace an existing image
- remove an existing image

Edit mode:

existing product image is shown.

Do NOT create a separate Preview section.

Do NOT create a separate image-management page.

============================================================
7. PRODUCT NAME
============================================================

Label:

Product Name *

Required.

Placeholder:

Enter product name

Use the same BizCopilot input component as Category.

Validation:

- required
- cannot contain only spaces
- maximum reasonable product-name length

Long names must be supported.

============================================================
8. TYPE / UNIT
============================================================

Label:

Type / Unit *

This field determines how the product is handled during billing.

Available values include:

Qty
Kg
Ltr
Meter

The exact supported values must come from the V1 billing/product
domain.

IMPORTANT:

There is NO separate configuration screen for measurement behavior.

The user selects the Type / Unit here.

That selection automatically determines the billing interaction.

============================================================
9. TYPE / UNIT BEHAVIOR
============================================================

If:

Type / Unit = Qty

Billing uses:

−   1   +

Default quantity:

1

Example:

Bread Omelette
Qty

Billing:

[ − ] 2 [ + ]

The quantity is an integer.

============================================================
10. MEASUREMENT PRODUCT BEHAVIOR
============================================================

If:

Type / Unit = Kg

or:

Ltr

or:

Meter

Billing uses direct numeric/text entry.

Do NOT use + / − controls for these measurement types.

Examples:

Carrot:
0.560 Kg

Milk:
1.500 Ltr

Wire:
2.500 Meter

The user enters the measurement directly.

The product configuration controls this behavior automatically.

============================================================
11. SELLING PRICE
============================================================

Label:

Selling Price *

Required.

Use currency:

₹

Example:

₹120.00

Price must support decimal values where appropriate.

Do not add:

Purchase Price
Cost Price
Profit
Margin
Stock Value

These are NOT part of the V1 Product form.

============================================================
12. DESCRIPTION
============================================================

Label:

Description

Optional.

Display directly in the form.

Do NOT hide it under:

More

Advanced

Additional Info

Use a responsive multiline textarea.

Placeholder:

Enter product description (optional)

Character limit may use the existing BizCopilot form pattern.

============================================================
13. BARCODE
============================================================

Label:

Barcode

Optional.

Display directly in the form.

Placeholder:

Enter or scan barcode

Barcode input may support:

- manual entry
- scanner integration where available

Do NOT create a separate barcode configuration screen.

============================================================
14. CATEGORY
============================================================

Label:

Category *

Required.

Use the existing BizCopilot category selector.

Example:

[ Select category ▼ ]

The selector displays existing categories.

Do NOT allow category creation directly inside the Product form unless
explicitly added later.

If no category is available:

show the appropriate empty state/action according to the global
BizCopilot pattern.

============================================================
15. FORM ORDER — NON-NEGOTIABLE
============================================================

The fields MUST appear in this order:

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
Cancel + Save

Do not rearrange fields for different devices.

============================================================
16. DESKTOP RESPONSIVENESS
============================================================

Desktop:

Centered modal.

Use a fluid responsive modal width.

Do NOT hard-code screenshot-specific modal dimensions.

The modal must remain comfortably readable on:

- 13-inch laptops
- standard desktops
- large monitors
- 4K monitors

On very large screens:

Do NOT make the modal unnecessarily huge.

Keep a readable maximum content width.

============================================================
17. TABLET RESPONSIVENESS
============================================================

Tablet:

Same Add Product component.

Responsive centered modal.

All fields stretch according to available width.

No desktop sidebar interaction inside the modal.

Use the same typography and spacing tokens.

Do NOT create a separate Tablet form design.

============================================================
18. MOBILE RESPONSIVENESS
============================================================

Mobile:

Use the established BizCopilot bottom-sheet/modal pattern.

The form becomes a single-column layout.

Respect:

- safe areas
- device home indicator
- top/bottom spacing

The content can scroll vertically if the form exceeds available
viewport height.

Do NOT shrink fields to unusable sizes.

============================================================
19. MODAL SCROLLING
============================================================

Normal desktop:

No internal scrollbar if all content fits.

Small viewport:

If form content exceeds available height:

the form content becomes scrollable.

The modal/header/action structure should remain usable.

Do NOT show an unnecessary scrollbar when the content fits.

============================================================
20. ACTION AREA
============================================================

Bottom action area:

Cancel
Save

Add mode:

Cancel
Save

Edit mode:

Cancel
Save Changes

Primary:

BizCopilot purple.

Secondary:

neutral/outline.

Use the same button components as Category.

============================================================
21. ACTION POSITION
============================================================

Desktop:

Actions aligned according to the established BizCopilot modal pattern,
normally toward the bottom-right.

Tablet:

same alignment.

Mobile:

actions remain easy to reach.

If the mobile modal uses a sticky action area, ensure it respects the
safe area.

Do not allow Save to disappear below the viewport.

============================================================
22. SAVE BEHAVIOR
============================================================

Click:

Save

Validate required fields.

If invalid:

- keep modal open
- highlight invalid fields
- show validation messages
- focus the first invalid field where appropriate

If valid:

- create product
- update Product screen
- update counts
- update pagination if necessary
- close modal

============================================================
23. EDIT SAVE BEHAVIOR
============================================================

Edit mode:

Click:

Save Changes

Validate.

Update product.

Update the underlying Product screen.

Preserve:

- search context
- filters
- view mode
- page context where possible

Close modal after successful save.

============================================================
24. LOADING STATE
============================================================

During save:

Primary button becomes:

Saving...

or:

Saving Changes...

Prevent duplicate submission.

Do not close the modal before successful completion.

============================================================
25. IMAGE BEHAVIOR
============================================================

Add mode:

No image initially.

Display:

Add Image

After selection:

show selected image.

Edit mode:

show existing image.

Actions:

Replace
Remove

Use the established BizCopilot image-control pattern.

============================================================
26. IMAGE RESPONSIVENESS
============================================================

Image container must be responsive.

Do NOT use fixed image dimensions.

Use:

aspect-ratio

or equivalent responsive sizing.

Image:

- preserves aspect ratio
- uses object-fit
- never stretches
- scales with available form width

============================================================
27. FORM INPUT SYSTEM
============================================================

All inputs use the same BizCopilot input component.

Consistent:

- border
- radius
- focus state
- placeholder
- typography
- padding
- error state
- disabled state

Focus:

BizCopilot purple.

Error:

semantic red.

============================================================
28. TYPE / UNIT SELECTOR
============================================================

Use the same dropdown/select component as the rest of BizCopilot.

Options:

Qty
Kg
Ltr
Meter

The selector must clearly show the currently selected type.

Example:

Type / Unit *

[ Qty                     ▼ ]

============================================================
29. PRICE INPUT
============================================================

Price input should clearly communicate currency.

Example:

₹ | 120.00

Use appropriate numeric input behavior.

Avoid browser-default number controls if they conflict with BizCopilot
design.

============================================================
30. BARCODE INPUT
============================================================

Barcode:

[ Enter or scan barcode ]

Optional scan icon may be displayed if scanner support is available.

Use the existing BizCopilot icon system.

Do not make the scanner mandatory for V1.

============================================================
31. CATEGORY SELECTOR
============================================================

Category selector:

[ Select category ▼ ]

Selected:

[ Beverages ▼ ]

Use the existing BizCopilot dropdown styling.

============================================================
32. TYPOGRAPHY
============================================================

Use the same typography system as:

Product
Category
Add Category

Modal title:

strong.

Supporting text:

muted.

Labels:

medium/semibold.

Input:

normal.

Helper/error:

small.

No new font.

============================================================
33. ICON SYSTEM
============================================================

Use one consistent outline SVG icon family.

Preferred:

Lucide or equivalent.

Icons:

Close → X
Add Image → ImagePlus
Replace → RefreshCw / Image
Remove → Trash2
Dropdown → ChevronDown
Barcode → ScanBarcode
Currency → Indian Rupee where appropriate

No emoji.

No mixed icon families.

============================================================
34. ACCESSIBILITY
============================================================

Every icon-only control requires an accessible label.

Examples:

Add product image
Replace product image
Remove product image
Close
Open category selector
Open type selector
Scan barcode

All fields have accessible labels.

Visible focus states are required.

============================================================
35. VALIDATION
============================================================

Required:

Product Name
Type / Unit
Selling Price
Category

Optional:

Product Image
Description
Barcode

Validation must be immediate where appropriate and on Save.

Do not allow invalid products to be saved.

============================================================
36. PRODUCT TYPE VALIDATION
============================================================

Qty:

quantity is an integer during billing.

Kg/Ltr/Meter:

measurement supports decimal values.

The Add Product form only configures the type.

The billing engine uses that configuration to determine the correct
billing input behavior.

============================================================
37. NO INVENTORY FIELDS
============================================================

V1 Add Product MUST NOT contain:

Stock
Opening Stock
Low Stock
Reorder Level
Purchase Price
Supplier
Warehouse
Inventory Value
Stock Alert

Inventory belongs to a future version.

============================================================
38. NO EXTRA CONFIGURATION
============================================================

Do NOT add:

Advanced Settings
More
Additional Information
Product Variants
Pricing Rules
Promotions
Tax Configuration

unless explicitly added to V1 later.

The form must remain simple.

============================================================
39. RESPONSIVE FIELD WIDTH
============================================================

All fields must stretch/shrink according to available modal width.

Do NOT use:

width: 400px

or any screenshot-specific fixed field width.

Use:

width: 100%

inside responsive containers.

The modal controls the available width.

============================================================
40. RESPONSIVE SPACING
============================================================

Use shared BizCopilot spacing tokens.

Spacing adapts between:

Desktop
Tablet
Mobile

Do not create arbitrary device-specific spacing values.

============================================================
41. RESPONSIVE BREAKPOINTS
============================================================

Support:

Mobile:
< 768px

Tablet:
768px–1023px

Desktop:
≥ 1024px

These are layout modes, not fixed canvas sizes.

The form must also work naturally between breakpoints.

============================================================
42. COMPONENT STRUCTURE
============================================================

Reusable components:

AddEditProductModal
ModalHeader
ProductImagePicker
ProductNameField
ProductTypeSelector
SellingPriceField
ProductDescriptionField
BarcodeField
CategorySelector
ModalActions

Each component must support:

Default
Focus
Filled
Error
Disabled
Loading

where applicable.

============================================================
43. ADD / EDIT COMPONENT RELATIONSHIP
============================================================

Product screen:

+ Add Product
        ↓
AddEditProductModal
        ↓
Add Product mode
        ↓
Save

Product Grid/Table:

Edit
        ↓
AddEditProductModal
        ↓
Edit Product mode
        ↓
Save Changes

ONE COMPONENT.

TWO MODES.

============================================================
44. FINAL VISUAL HIERARCHY
============================================================

HEADER

Add Product
Add a product to your catalog
Close

↓

PRODUCT IMAGE

Add Image

↓

PRODUCT NAME

↓

TYPE / UNIT

↓

SELLING PRICE

↓

DESCRIPTION

↓

BARCODE

↓

CATEGORY

↓

CANCEL + SAVE

============================================================
45. FINAL FROZEN FORM
============================================================

ADD MODE:

Add Product

Product Image
[ Add Image ]

Product Name *
[ Enter product name ]

Type / Unit *
[ Qty ▼ ]

Selling Price *
[ ₹ Enter selling price ]

Description
[ Enter product description (optional) ]

Barcode
[ Enter or scan barcode ]

Category *
[ Select category ▼ ]

Cancel
Save


EDIT MODE:

Edit Product

Product Image
[ Existing Image ]

Product Name *
[ Existing Name ]

Type / Unit *
[ Existing Type ]

Selling Price *
[ Existing Price ]

Description
[ Existing Description ]

Barcode
[ Existing Barcode ]

Category *
[ Existing Category ]

Cancel
Save Changes

============================================================
46. BILLING ENGINE RELATIONSHIP
============================================================

The Product Type / Unit selected here controls the billing UI.

Qty:

Product Card / Billing:

− 1 +

Default:
1

Kg/Ltr/Meter:

Direct measurement text input.

Example:

0.560 Kg

No + / − control for measurement-based products.

This behavior must NOT require another product configuration screen.

============================================================
47. RESPONSIVE ACCEPTANCE TEST
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

✓ same form hierarchy
✓ same fields
✓ same icon system
✓ responsive modal
✓ responsive inputs
✓ responsive image area
✓ responsive icon controls
✓ no horizontal overflow
✓ no clipped content
✓ no unnecessary scrollbar
✓ modal scrolls only when required
✓ mobile safe area respected
✓ Save remains accessible
✓ Add and Edit use same component
✓ existing values populate in Edit mode
✓ Type/Unit correctly drives billing behavior

============================================================
48. FINAL DESIGN PRINCIPLE
============================================================

Do NOT create separate Add Product designs for:

Desktop
Tablet
Mobile

Create ONE AddEditProduct component.

Desktop:
Centered modal.

Tablet:
Responsive centered modal.

Mobile:
Responsive bottom sheet.

Same:

- fields
- hierarchy
- controls
- typography
- icons
- colors
- behavior

Only the layout dimensions and container presentation adapt.

============================================================
FINAL FROZEN ADD PRODUCT STRUCTURE
============================================================

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
Cancel + Save

EDIT:

Same component
+
pre-populated values
+
Save Changes

This is the FINAL FROZEN BizCopilot Add Product / Edit Product
screen structure.