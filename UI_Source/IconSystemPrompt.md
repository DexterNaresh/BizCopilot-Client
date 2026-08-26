# BIZCOPILOT V1 — FROZEN SCREENS

# ICON SYSTEM, ICON PLACEMENT & ASSET SPECIFICATION

# FIGMA-LEVEL DESIGN STANDARD

==================================================

1. PURPOSE
   ==================================================

This document defines the icon system for ALL currently
designed/frozen BizCopilot V1 screens.

The purpose is to ensure:

* Same icon family everywhere
* Same visual weight
* Same optical size
* Same placement
* Same color behavior
* Same interaction behavior
* No emoji icons in the actual UI
* No randomly generated AI icons
* No mixing of icon libraries

This specification applies to:

1. Startup / First Run
2. PIN Login
3. Navigation Shell
4. Billing
5. Cart
6. Offers
7. Customer Selection

It must also become the baseline icon system for all
future BizCopilot V1 screens.

==================================================
2. MASTER ICON FAMILY
=====================

Use:

GOOGLE MATERIAL SYMBOLS OUTLINED

Preferred style:

Material Symbols Outlined

Do NOT mix:

* Font Awesome
* Bootstrap Icons
* Heroicons
* Lucide
* random SVG libraries
* emoji
* AI-generated icons

The official Google Material Design Icons repository
contains the Material Symbols assets and icon definitions.

Official source:

https://github.com/google/material-design-icons

Google Material Symbols codepoint definitions:

https://github.com/google/material-design-icons/blob/master/variablefont/MaterialSymbolsOutlined%5BFILL%2CGRAD%2Copsz%2Cwght%5D.codepoints

The Material Symbols set is the SOURCE OF TRUTH.

==================================================
3. WHERE TO GET THE ICONS
=========================

PRIMARY SOURCE:

Google Material Design Icons repository:

https://github.com/google/material-design-icons

Use the Material Symbols Outlined family.

For development, prefer SVG assets when individual icons
are required.

Do NOT download icons from:

* Google Image Search
* random PNG websites
* random icon download sites
* screenshots
* AI-generated images

If an icon is available in Google Material Symbols,
use that icon rather than creating a custom replacement.

==================================================
4. ICON ASSET STRATEGY
======================

For the Angular application, prefer individual SVG assets
for the icons actually used by BizCopilot.

Recommended project structure:

src/
└── assets/
└── icons/
├── navigation/
├── startup/
├── authentication/
├── billing/
├── cart/
├── offers/
└── customer/

Example:

src/assets/icons/billing/scan.svg
src/assets/icons/billing/search.svg
src/assets/icons/billing/more-vert.svg

All local assets must be loaded through:

AssetService

Do NOT use:

* Base64
* hardcoded external image URLs
* screenshots as icons
* inline duplicated SVG markup throughout components

==================================================
5. GLOBAL ICON STYLE
====================

Default:

Family:
Material Symbols Outlined

Fill:
0

Weight:
400

Grade:
0

Optical size:
24

Default canvas:
24 × 24

Icons must visually align to a 24px grid.

Do not change icon family from screen to screen.

==================================================
6. ICON SIZE SCALE
==================

Use these standard sizes:

16px
Small contextual icon

18px
Small secondary action

20px
Compact action

22px
Navigation / secondary action

24px
DEFAULT application icon

28px
Important feature/action icon

32px
Hero/feature icon

40–48px
Large security/success illustration where required

Do not use 30px, 26px, 21px etc. unless there is a
specific optical reason.

==================================================
7. ICON COLOR TOKENS
====================

Primary:

#5B3BEB

Primary hover:

#4B2DC7

Primary light:

rgba(91, 59, 235, 0.08)

Primary text:

#111827

Secondary:

#6B7280

Muted:

#9CA3AF

Border:

#EAECEF

Success:

#16A34A

Error:

#DC2626

Warning:

#D97706

White:

#FFFFFF

==================================================
8. ICON COLOR RULE
==================

PRIMARY ACTION:

Purple

SECONDARY ACTION:

Neutral gray

ACTIVE NAVIGATION:

Purple

DISABLED:

Muted gray

SUCCESS:

Green

ERROR / DELETE:

Red

WARNING:

Amber/orange

Do not color every icon purple.

Purple must communicate:

* active
* primary
* selected
* important action

==================================================
9. STARTUP SCREEN ICONS
=======================

Startup / First Run currently contains:

1. Business Details
2. Create Owner PIN
3. Setup Complete

---

## BUSINESS DETAILS

Recommended icon:

store

Use:

Material Symbols Outlined:
store

Placement:

Centered above the Business Details heading,
inside the setup card or hero area according to the
frozen design.

Size:

32–40px

Color:

#5B3BEB

Do not use an emoji storefront.

Example:

[ store icon ]

Welcome to BizCopilot

---

## CREATE OWNER PIN

Icon:

lock

Placement:

Centered above:

Create Owner PIN

Size:

32–40px

Color:

#5B3BEB

---

## SETUP COMPLETE

Icon:

check_circle

Placement:

Centered above:

Setup Complete!

Size:

40–48px

Color:

#16A34A

Use a subtle green success treatment.

Do not use a large celebration illustration.

==================================================
10. STARTUP PROGRESS ICON RULE
==============================

The progress indicator is primarily a STEP INDICATOR.

Do not use large icons inside every step unless the frozen
design specifically shows them.

Recommended:

1
2
3

inside circles.

Active/completed:

#5B3BEB

Upcoming:

#9CA3AF / neutral

The progress indicator should remain visually lightweight.

==================================================
11. PIN LOGIN ICONS
===================

PIN Login currently uses:

1. Security hero
2. Help
3. Backspace
4. Fingerprint
5. Security reassurance

---

## SECURITY HERO

Icon:

lock

Preferred visual:

lock inside a soft circular/lavender background.

Size:

40–48px

Color:

#5B3BEB

Do not use an emoji lock.

---

## HELP

Icon:

help_outline

or the current Material Symbols equivalent:

help

Placement:

Top-right of the Login header.

Structure:

BizCopilot                         [ ? ] Help

Icon:

18–20px

Color:

#6B7280

---

## BACKSPACE

Icon:

backspace

Placement:

Bottom-left keypad action.

Size:

22–24px

Color:

#5B3BEB

---

## FINGERPRINT

Icon:

fingerprint

Placement:

Inside the biometric login row.

Structure:

[ fingerprint ] Use Fingerprint >

Icon:

24–28px

Color:

#5B3BEB

---

## SECURITY MESSAGE

Icon:

verified_user

or:

shield

Placement:

Before:

Your data is 100% secure and private.

Size:

16–18px

Color:

#16A34A or neutral depending on the frozen design.

Do not make the security icon visually dominant.

==================================================
12. NAVIGATION ICONS
====================

Navigation Shell uses Material Symbols Outlined.

---

## HOME

Icon:

home

Size:

22–24px

---

## BILLING

Icon:

receipt_long

Size:

22–24px

---

## PRODUCTS

Icon:

inventory_2

Size:

22–24px

---

## CUSTOMERS

Icon:

group

Size:

22–24px

---

## MORE

Icon:

more_horiz

Size:

22–24px

---

## OFFERS

Icon:

local_offer

Size:

22–24px

---

## REPORTS

Icon:

bar_chart

Size:

22–24px

---

## BILLS

Icon:

receipt_long

or:

description

Choose ONE and use it consistently.

---

## AI ASSISTANT

Icon:

smart_toy

Size:

22–24px

---

## BACKUP & SYNC

Icon:

cloud_sync

Size:

22–24px

---

## SETTINGS

Icon:

settings

Size:

22–24px

---

## BUSINESS PROFILE

Icon:

store

Size:

22–24px

---

## LOGOUT

Icon:

logout

Size:

22–24px

Color:

#DC2626

==================================================
13. BILLING SCREEN ICONS
========================

Billing is the primary operational screen.

Required icons:

---

## SEARCH

Icon:

search

Placement:

Inside the product search field.

Size:

20–22px

Color:

#6B7280

---

## SCAN / BARCODE

Icon:

qr_code_scanner

or:

barcode_scanner

Use:

qr_code_scanner

if the frozen design represents scanner access
generically.

Use:

barcode_scanner

if the action explicitly means barcode scanning.

Size:

22–24px

Color:

White or purple depending on button treatment.

Do NOT use crop_free for the final icon if the intended
meaning is barcode/QR scanning.

---

## TOP-RIGHT MORE

Icon:

more_vert

Placement:

Billing header, top-right.

Size:

22–24px

Color:

White if header is purple.

IMPORTANT:

This is a SCREEN CONTEXT ACTION.

It is NOT application navigation.

Do not confuse:

more_vert

with:

more_horiz

Bottom Navigation More = more_horiz

Billing Header More = more_vert

---

## ADD PRODUCT

Icon:

add

or:

add_circle

Preferred:

add

Placement:

On the Add Product control where applicable.

Size:

20–22px

The Billing screen itself must NOT display Add Product.

Billing only displays already-added products.

==================================================
14. PRODUCT CARD ICONS
======================

Billing product cards should remain visually clean.

Do NOT place unnecessary icons on every product card.

The card primarily contains:

Product Image
Product Name
Price
Add control

If the product is added:

Use:

add

or quantity control.

Do not use decorative icons.

==================================================
15. CART SCREEN ICONS
=====================

Required:

1. Back / close
2. Clear cart
3. Quantity minus
4. Quantity plus
5. Delete
6. Customer
7. Offers
8. Proceed to Pay

---

## BACK

Icon:

arrow_back

Mobile:

Top-left.

Size:

22–24px.

---

## CLEAR CART

Preferred icon:

delete_sweep

or text-only "Clear Cart".

Because the frozen design uses:

Clear Cart

as a textual action, retain text if that is what the
reference shows.

Do NOT unnecessarily replace the text with an icon.

---

## MINUS

Icon:

remove

Size:

18–20px

---

## PLUS

Icon:

add

Size:

18–20px

---

## DELETE ITEM

Icon:

delete_outline

Size:

20–22px

Color:

#DC2626

Do not use filled red trash icons unless required by
the frozen reference.

---

## CUSTOMER

Icon:

person

or:

person_outline

Preferred:

person

Use inside the Customer selection control.

Size:

20–22px

---

## OFFERS

Icon:

local_offer

Size:

20–22px

Use next to the Offers entry/action.

---

## PAY

Icon:

arrow_forward

or:

chevron_right

Only use an icon if the frozen design includes one.

The primary CTA should remain text-first:

Proceed to Pay

==================================================
16. CART CUSTOMER SELECTION ICONS
=================================

Customer selection screen/overlay requires:

Search:

search

Customer:

person

Walk-in:

person_outline

Selected:

radio_button_checked

Unselected:

radio_button_unchecked

Confirm:

check

Back:

arrow_back

Clear/search close:

close

New customer information fields should use minimal
supporting icons.

Do NOT place an icon inside every input field unless
it materially improves usability.

==================================================
17. CUSTOMER SELECTION — IMPORTANT RULE
=======================================

The frozen Customer UX prioritizes:

SEARCH
+
CUSTOMER INFORMATION
+
RADIO SELECTION
+
CONFIRM

Do NOT introduce:

Recent
Frequent
Top Customers

as primary navigation.

The billing person may not remember whether the customer
is a frequent/top customer.

The interaction must be search-first.

==================================================
18. OFFERS SCREEN ICONS
=======================

Required:

Offer:

local_offer

Selection:

radio_button_checked

radio_button_unchecked

Close:

close

Back:

arrow_back

View All:

arrow_forward
or
chevron_right

Applied:

check_circle

Discount:

sell
or
local_offer

Preferred:

local_offer

==================================================
19. OFFER CARD ICON RULE
========================

Do NOT put multiple decorative icons inside every offer.

Offer card should prioritize:

Offer Name
Offer Description
Eligibility
Discount / Benefit
Selection state

Example:

[radio] SAVE20
20% OFF
Selected

The radio state communicates selection.

==================================================
20. CUSTOMER SCREEN ICONS
=========================

Required:

Search:

search

Customer avatar:

person

Phone:

phone

Selected:

radio_button_checked

Unselected:

radio_button_unchecked

Confirm:

check

Close:

close

Back:

arrow_back

Do not use colorful emoji avatars.

Use neutral avatar/icon treatment.

==================================================
21. PAYMENT-RELATED ICONS
=========================

Payment has not yet been fully frozen, but the planned
payment methods are:

Cash
Card
UPI / QR
Mixed Payment

Recommended Material Symbols:

Cash:

payments

Card:

credit_card

UPI / QR:

qr_code_2

Mixed:

account_balance_wallet

Selection:

radio_button_checked
radio_button_unchecked

Proceed/collect:

arrow_forward

IMPORTANT:

These are recommendations until the Payment screen is
visually frozen.

Do not treat them as final if the Payment reference design
later specifies different icons.

==================================================
22. ICON PLACEMENT RULE
=======================

Icons should be aligned to the LEFT of text when they
represent an action/menu item.

Example:

[icon] Customers

For right-side navigation:

Customers                  >

For header actions:

Billing             Search  Scan  More

For input fields:

[search] Search product...

For destructive actions:

[trash] Delete

Avoid placing icons randomly above or below labels.

==================================================
23. ICON + TEXT SPACING
=======================

Default:

Icon → 8px → Text

For larger navigation:

Icon → 10–12px → Text

Right chevron:

Text → flexible space → chevron

Do not manually align icons using spaces.

Use flex/grid alignment.

==================================================
24. ICON TOUCH TARGET
=====================

Even when the icon itself is 20–24px,

the interactive area must be:

Minimum:
44 × 44px

Recommended:
48 × 48px

This applies to:

* Search
* Scan
* More
* Back
* Delete
* Plus
* Minus
* Close
* Fingerprint
* Navigation items

==================================================
25. ICON OPTICAL ALIGNMENT
==========================

Do not align icons only by mathematical bounding box.

Visually align:

* Icon center
* Text baseline
* Row center

Material Symbols have different visual weights and
bounding shapes.

Use optical alignment where required.

==================================================
26. ACTIVE NAVIGATION ICON
==========================

Inactive:

Material Symbols Outlined
Weight:
400
Color:
#6B7280

Active:

Material Symbols Outlined
Color:
#5B3BEB

If using the variable font:

FILL:
0

Do NOT switch the entire icon family to filled icons
for active state.

A subtle weight/fill adjustment is acceptable only if
it remains consistent across the navigation system.

==================================================
27. BUTTON ICON RULE
====================

Primary buttons:

Text should remain dominant.

Example:

[ Proceed to Pay ]

If an icon is included:

[ Proceed to Pay → ]

Do not create:

[ huge icon ]
[ text ]

unless the control is specifically designed as an
icon-first action.

==================================================
28. DESTRUCTIVE ICONS
=====================

Use red only for genuinely destructive actions:

Delete item
Logout
Remove

Preferred:

#DC2626

Do not use red for:

Search
Back
Close
Cancel
Normal secondary actions

==================================================
29. SUCCESS ICONS
=================

Use:

check
check_circle
verified

Color:

#16A34A

Use for:

Setup Complete
Applied Offer
Successful Payment
Successful Customer Selection

Only use where semantically appropriate.

==================================================
30. LOADING ICONS
=================

Do NOT use a static loading icon as decoration.

For loading:

Use an appropriate spinner/progress indicator.

Do not replace the entire screen with a giant spinner.

==================================================
31. NO EMOJI RULE
=================

The following examples:

🏠
🧾
📦
👥
🎁
📊
🤖
⚙️
🔒
🛒
🛡

are ONLY conceptual representations in documentation.

They MUST NOT appear as actual UI icons.

The real UI must use Google Material Symbols Outlined.

==================================================
32. ICON NAMING MAP
===================

Use this canonical map.

Navigation:

Home              → home
Billing           → receipt_long
Products          → inventory_2
Customers         → group
More              → more_horiz
Reports           → bar_chart
Bills             → receipt_long
Offers            → local_offer
AI Assistant      → smart_toy
Backup & Sync     → cloud_sync
Settings          → settings
Business Profile  → store
Logout            → logout

Common:

Search            → search
Back              → arrow_back
Close             → close
More Context      → more_vert
Next              → arrow_forward
Chevron            → chevron_right
Add               → add
Remove            → remove
Delete            → delete_outline
Check             → check
Success           → check_circle
Help              → help
Lock              → lock
Fingerprint       → fingerprint
Security          → verified_user
Person            → person
Phone             → phone
Offer             → local_offer
Scanner           → qr_code_scanner
Barcode           → barcode_scanner
QR                → qr_code_2
Payments          → payments
Card              → credit_card

==================================================
33. FIGMA ICON COMPONENT
========================

Create a reusable:

Icon / Material Symbols

Figma component.

Variants:

* 16
* 18
* 20
* 22
* 24
* 28
* 32
* 40
* 48

Properties:

Icon Name
Size
Color
State

Do NOT create separate manually-drawn icon components
for every screen.

==================================================
34. FIGMA ICON INSTANCE RULE
============================

Every screen must use the shared icon component.

Example:

Billing Header
├── Search
├── Scanner
└── More

Cart
├── Back
├── Delete
├── Minus
├── Plus
├── Customer
└── Offers

Customer
├── Search
├── Person
├── Radio
└── Confirm

Offers
├── Offer
├── Radio
├── Applied
└── Close

==================================================
35. ASSET DOWNLOAD / DEVELOPMENT RULE
=====================================

Preferred official source:

Google Material Design Icons repository:

https://github.com/google/material-design-icons

Use the Material Symbols Outlined family.

The official repository exposes Material Symbols definitions
including the Outlined variable font/codepoint set.

For the actual application, download/use only the icons
BizCopilot requires.

Do NOT download the entire icon collection into the
application assets unless there is a technical reason.

==================================================
36. LICENSE
===========

Verify the license of the exact Material Symbols release
used in the project before production release.

Google's Material Design Icons repository is the authoritative
source for the assets.

Keep the relevant license/notice information with the
project if required by the chosen distribution method.

==================================================
37. AI IMAGE GENERATION RULE
============================

When generating BizCopilot UI screenshots with Gemini,
Claude, or another image model:

DO NOT instruct the model to draw custom icons.

Instead specify:

"Use Google Material Symbols Outlined style."

For important icons, explicitly provide the icon name.

Example:

"Use Material Symbols Outlined:
receipt_long"

This reduces icon inconsistency.

==================================================
38. GEMINI REFERENCE RULE
=========================

When generating a new screen:

Provide:

1. Frozen reference image
2. Screen-specific UI prompt
3. This Icon System specification

The image model must preserve the same:

* Icon family
* Icon visual weight
* Icon size
* Icon placement
* Icon color
* Icon semantics

Do not allow the model to invent a new icon family.

==================================================
39. FROZEN SCREEN ICON CHECKLIST
================================

Before approving each screen verify:

[ ] Correct Material Symbols family
[ ] Correct icon name
[ ] Correct icon placement
[ ] Correct icon size
[ ] Correct icon color
[ ] Correct active/inactive state
[ ] Correct touch target
[ ] Correct alignment
[ ] No emoji icons
[ ] No random SVG icons
[ ] No mixed icon families
[ ] No unnecessary decorative icons
[ ] Icons match previously frozen screens

==================================================
40. CURRENT SCREEN COVERAGE
===========================

This icon specification applies immediately to:

✓ Startup
✓ PIN Login
✓ Navigation Shell
✓ Billing
✓ Cart
✓ Offers
✓ Customer Selection

It should be reused for:

→ Products
→ Product Details
→ Bills
→ Dashboard
→ Reports
→ AI Assistant
→ Settings
→ Business Profile
→ Payment

Future screens must not introduce another icon family
without explicitly revising this design system.

==================================================
41. FINAL SOURCE OF TRUTH
=========================

Visual source of truth:

Frozen BizCopilot screen references

Icon source of truth:

Google Material Symbols Outlined

Implementation source of truth:

AssetService
+
src/assets/icons/

Design principle:

ONE ICON SYSTEM
+
ONE VISUAL LANGUAGE
+
CONSISTENT PLACEMENT
+
NO RANDOM ICONS

The objective is for a user to move from:

Startup
→ Login
→ Home
→ Billing
→ Cart
→ Offers
→ Customer

without ever feeling that the icons came from different
applications.

END OF ICON SYSTEM SPECIFICATION
