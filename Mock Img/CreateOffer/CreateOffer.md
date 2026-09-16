============================================================
BIZCOPILOT — CREATE OFFER
COMPLETE MASTER FIGMA / UI-UX DESIGN PROMPT
============================================================

ROLE
============================================================

Act as a senior UI/UX designer, senior product designer,
responsive design architect, and POS/business application designer.

Design the complete BizCopilot Create Offer experience.

The design must be production-quality, responsive, consistent with
the existing BizCopilot application, and optimized for small-business
owners.

The user should be able to create promotions without understanding
complex promotion-engine terminology.

The design must prioritize:

- simplicity
- clarity
- speed
- low cognitive load
- minimal navigation
- predictable behavior
- clean information hierarchy
- touch-friendly controls
- desktop efficiency
- tablet usability
- mobile usability
- consistent components
- responsive behavior

============================================================
MOST IMPORTANT RESPONSIVE RULE
============================================================

There are TWO DIFFERENT CREATE-OFFER EXPERIENCES.

------------------------------------------------------------
DESKTOP + TABLET
------------------------------------------------------------

Desktop and Tablet use a SINGLE-PAGE CREATE OFFER FORM.

All six configuration sections exist on the same page:

1. Basic Information
2. Select Offer Type
3. Offer Configuration
4. Applies To
5. Conditions (Optional)
6. Schedule

There is NO step-by-step navigation on Desktop or Tablet.

Do NOT create:

- Step 1 page
- Step 2 page
- Step 3 page
- Next buttons
- Previous buttons
- desktop wizard
- tablet wizard

The user selects an Offer Type in Section 2.

ONLY Section 3 — Offer Configuration changes.

Sections 1, 2, 4, 5 and 6 remain part of the same page.

The Offer Summary is shown on the right side on Desktop.

------------------------------------------------------------
MOBILE
------------------------------------------------------------

Mobile uses a COMPLETELY DIFFERENT guided workflow.

One screen at a time:

1. Basic Information
2. Select Offer Type
3. Offer Configuration
4. Applies To
5. Conditions
6. Schedule
7. Review
8. Complete

The mobile design must follow the previously approved/frozen
BizCopilot mobile Create Offer design.

Do NOT convert mobile into the desktop single-page form.

Do NOT show all six configuration sections together on mobile.

============================================================
CREATE OFFER — GLOBAL PAGE STRUCTURE
============================================================

DESKTOP:

------------------------------------------------------------
BizCopilot Header
------------------------------------------------------------
Left:
BizCopilot logo

Right:
Business selector
Notifications
User/profile

------------------------------------------------------------
Application Sidebar
------------------------------------------------------------

Dashboard
Billing
Products
Offers
Customers
Reports
Settings

Offers is active.

------------------------------------------------------------
Main Content
------------------------------------------------------------

← Back to Offers

Create Offer

Create a new offer to attract customers and grow your business.

Then:

┌─────────────────────────────────────────────┬───────────────┐
│                                             │               │
│ Main Configuration                          │ Offer Summary │
│                                             │               │
│ Section 1                                   │               │
│ Section 2                                   │               │
│ Section 3                                   │               │
│ Section 4                                   │               │
│ Section 5                                   │               │
│ Section 6                                   │               │
│                                             │               │
└─────────────────────────────────────────────┴───────────────┘

Bottom:
Cancel                              Save Offer

============================================================
DESKTOP — SECTION 1
BASIC INFORMATION
============================================================

Always visible.

Section number:
1

Title:
Basic Information

Fields:

Offer Name *
[________________________________]

Short Description (Optional)
[________________________________]

Desktop:
Place fields side-by-side when space allows.

Example:

Offer Name *
[ Juice Fest 20% ]

Short Description (Optional)
[ Get 20% off on all juices ]

Rules:
- Offer Name is required.
- Description is optional.
- Use normal text input.
- Preserve entered data.
- Inline validation.
- Do not create a separate screen.

============================================================
DESKTOP — SECTION 2
SELECT OFFER TYPE
============================================================

Always visible.

Section number:
2

Title:
Select Offer Type

Supporting text:
Choose the promotion type for this offer.

Display exactly these 7 offer types:

1. Percentage Off
2. Flat Discount
3. Buy X Get Y
4. Quantity Discount
5. Spend & Save
6. Tiered Offer
7. Bundle / Combo

Use selectable cards.

Example:

┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│ %             │ │ ₹             │ │ Gift          │
│ Percentage    │ │ Flat Discount │ │ Buy X Get Y   │
│ Off           │ │               │ │               │
└───────────────┘ └───────────────┘ └───────────────┘

┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│ Quantity      │ │ Spend & Save  │ │ Tiered Offer  │
│ Discount      │ │               │ │               │
└───────────────┘ └───────────────┘ └───────────────┘

┌─────────────────────┐
│ Bundle / Combo      │
└─────────────────────┘

Each type can have:
- meaningful icon
- title
- short description

Do not use product/category images.

Only ONE offer type can be selected.

Selected card:
- highlighted border
- subtle background
- clear selected state

Selecting the card does NOT navigate.

It updates Section 3.

============================================================
SECTION 3 IS DYNAMIC
============================================================

THIS IS THE MOST IMPORTANT SECTION.

Section 3 uses ONE reusable visual component.

The component's:
- position
- spacing
- typography
- borders
- card style
- field style
- responsive behavior

remain consistent.

ONLY the configuration fields change.

The seven configurations are defined below.

============================================================
3A — PERCENTAGE OFF
============================================================

MASTER VISUAL REFERENCE.

Use the previously approved Percentage Off design as the visual
master for every other Offer Type.

Title:

3  [ % icon ] Percentage Off

Supporting text:
Set the discount details for Percentage Off

Configuration:

Discount Percentage *
[ 20                         % ]

Helper:
Enter discount percentage (e.g. 20 for 20%)

Maximum Discount (Optional)
[ ₹ 200 ]

Helper:
Maximum discount amount per bill

No other unrelated fields.

============================================================
3B — FLAT DISCOUNT
============================================================

Title:

3  [ ₹ icon ] Flat Discount

Supporting text:
Set the discount details for Flat Discount

Configuration:

Discount Amount *
[ ₹ 500 ]

If a minimum bill amount condition is supported by the Offer model,
it belongs in the Conditions section rather than duplicating it here.

Do NOT create a duplicate Minimum Bill Amount field inside
Configuration if the same condition is already represented by
Section 5.

The configuration itself is the discount amount.

Example:

Discount Amount *
[ ₹ 500 ]

============================================================
3C — BUY X GET Y
============================================================

Title:

3  [ Buy/Get icon ] Buy X Get Y

Supporting text:
Configure what the customer buys and what they get.

Configuration must visually represent:

BUY

Quantity *
[ 1 ]

Item/Product/Category
[ Select ]

GET

Quantity *
[ 1 ]

Item/Product/Category
[ Select ]

The exact selectable entity should follow the supported Offer model.

Example concept:

Buy:
1
Apple Juice

Get:
1
Orange Juice

OR where the configured offer supports it:

Buy:
1 Kg Sugar

Get:
500 gm Sugar

Keep the interface simple.

Do not introduce:
- coupons
- loyalty
- customer groups
- stacking rules
- redemption limits
- unrelated campaign settings

unless explicitly supported by the actual domain model.

============================================================
3D — QUANTITY DISCOUNT
============================================================

Title:

3  [ Quantity icon ] Quantity Discount

Supporting text:
Set discounts based on quantity.

Use a compact tier editor.

Example:

Quantity Tiers

┌──────────────┬──────────────┐
│ Quantity     │ Discount     │
├──────────────┼──────────────┤
│ 2+ units     │ 5%           │
│ 5+ units     │ 10%          │
│ 10+ units    │ 15%          │
└──────────────┴──────────────┘

[ + Add Tier ]

Each tier should support editing.

On desktop:
A compact two-column tier structure is preferred.

On tablet:
Use the same structure but allow the fields to stack if necessary.

Do not create a separate page.

============================================================
3E — SPEND & SAVE
============================================================

Title:

3  [ Spend icon ] Spend & Save

Supporting text:
Set a minimum bill amount and discount.

Configuration:

Minimum Bill Amount *
[ ₹ 500 ]

Discount *
[ 10                         % ]

The relationship is:

Minimum Bill Amount
+
Discount

Example:

Bill ≥ ₹500
→ 10% Off

Do not add unnecessary configuration.

============================================================
3F — TIERED OFFER
============================================================

Title:

3  [ Tier icon ] Tiered Offer

Supporting text:
Set multiple levels of discount.

Configuration:

Spend Tiers

┌──────────────────┬──────────────┐
│ Minimum Spend    │ Reward       │
├──────────────────┼──────────────┤
│ ₹500             │ 10%          │
│ ₹2,500           │ 15%          │
│ ₹5,000           │ 20%          │
└──────────────────┴──────────────┘

[ + Add Tier ]

The owner can:
- add tier
- edit tier
- remove tier

Keep the tier editor compact.

Do not create a separate screen.

============================================================
3G — BUNDLE / COMBO
============================================================

Title:

3  [ Bundle icon ] Bundle / Combo

Supporting text:
Configure the products that form the bundle.

Use the existing product selection pattern.

Example:

Bundle Items

[ Apple Juice                         × ]
[ Sandwich                             × ]

[ + Add Product ]

Bundle Reward
[ Configure reward ]

The exact reward controls must follow the actual Offer model.

Do not invent advanced bundle mechanics.

Do not add:
- coupon codes
- loyalty
- customer groups
- bank offers
- cashback

unless explicitly supported by the domain.

============================================================
DYNAMIC SECTION 3 BEHAVIOR
============================================================

Example:

User initially selects:

Percentage Off

Section 3:

Discount Percentage
Maximum Discount

Then user changes to:

Flat Discount

Section 3 immediately becomes:

Discount Amount

Everything else stays where it was.

The following do NOT change:

Section 1 Basic Information
Section 2 Offer Type
Section 4 Applies To
Section 5 Conditions
Section 6 Schedule
Offer Summary

Only Section 3 configuration changes.

============================================================
DESKTOP — SECTION 4
APPLIES TO
============================================================

Title:

4  Applies To

Supporting text:
Choose where this offer can be applied.

Use radio selection.

Options:

○ Entire Bill

○ Selected Products

○ Category

Only one scope mode is selected.

------------------------------------------------------------
ENTIRE BILL
------------------------------------------------------------

Selected:

● Entire Bill

Supporting text:
Applies to the total bill amount.

No additional selector required.

------------------------------------------------------------
SELECTED PRODUCTS
------------------------------------------------------------

Selected:

● Selected Products

Supporting text:
Applies to specific products.

Show:

[ 🔍 Search and select products... ]

Then selected products:

[ Apple Juice × ]
[ Orange Juice × ]
[ Mango Juice × ]

Show:

3 products selected

Products are multi-select.

Products can be removed individually.

------------------------------------------------------------
CATEGORY
------------------------------------------------------------

Selected:

● Category

Supporting text:
Applies to one or more product categories.

Category selection MUST be multi-select.

Use checkboxes.

Example:

☑ Beverages
☑ Fresh Juices
☐ Snacks
☑ Desserts
☐ Combos
☐ Others

Multiple categories can be selected.

Do NOT use a single-select category dropdown.

============================================================
DESKTOP — SECTION 5
CONDITIONS
============================================================

Title:

5  Conditions (Optional)

Supporting text:
Set minimum requirements for this offer.

Supported core conditions:

☐ Minimum Bill Amount

When enabled:

[ ₹ __________ ]

AND:

☐ Minimum Quantity

When enabled:

[ ______ ] units

Behavior:

Unchecked:
- field disabled/hidden according to the approved component pattern.

Checked:
- field becomes active.

Example:

☑ Minimum Bill Amount
  ₹500

☑ Minimum Quantity
  5 units

Do not add unsupported conditions.

Do NOT add:
- Customer Type
- First Purchase Only
- Loyalty
- Membership
- Coupon
- Payment Method

unless the actual Offer domain specification explicitly supports
them.

============================================================
DESKTOP — SECTION 6
SCHEDULE
============================================================

Title:

6  Schedule

Supporting text:
Set when this offer is valid.

Fields:

Start Date *
[ 01 Sep 2026 ]

End Date *
[ 30 Sep 2026 ]

Days of Week

[ Mon ] [ Tue ] [ Wed ] [ Thu ] [ Fri ] [ Sat ] [ Sun ]

Time (Optional)

Start Time
[ 09:00 AM ]

End Time
[ 06:00 PM ]

Example:

01 Sep 2026 – 30 Sep 2026
Mon – Fri
09:00 AM – 06:00 PM

IMPORTANT:

There is NO Status field here.

There is NO Active toggle here.

There is NO Inactive toggle here.

There is NO Scheduled status.

Schedule represents validity.

============================================================
DESKTOP — OFFER SUMMARY
============================================================

Right-side panel.

Title:

Offer Summary

Supporting text:

Review your offer details

Display dynamically:

Offer Name
Description
Type
Discount / Reward
Applies To
Conditions
Validity

Example:

Offer Name
Juice Fest 20%

Description
Get 20% off on all juices

Type
Percentage Off

Discount
20% (Max ₹200)

Applies To
Selected Products

Apple Juice, Orange Juice, Mango Juice

Conditions
Min. Bill Amount: ₹500

Validity
01 Sep 2026 – 30 Sep 2026
Mon, Tue, Wed, Thu, Fri
09:00 AM – 06:00 PM

If a value has not been configured:

Show:
Not set

Do not invent data.

The Offer Summary is:
- informational
- read-only
- dynamically updated

Do not turn it into a second editable form.

Do not add Preview.

============================================================
DESKTOP ACTIONS
============================================================

Bottom action area:

[ Cancel ]                         [ Save Offer ]

Save Offer is primary.

Cancel is secondary.

NO:
- Next
- Continue
- Previous
- Save Draft
- Preview

============================================================
TABLET STRUCTURE
============================================================

Viewport:
600px–1023px.

Tablet uses the SAME SINGLE-PAGE architecture as Desktop.

DO NOT use the mobile wizard.

Structure:

Header
↓
Back to Offers
↓
Create Offer
↓
Basic Information
↓
Select Offer Type
↓
Dynamic Offer Configuration
↓
Applies To
↓
Conditions
↓
Schedule
↓
Offer Summary
↓
Cancel / Save Offer

Tablet should adapt the two-column desktop layout according to
available width.

Preferred behavior:

If enough width:
--------------------------------
Main Configuration | Summary
--------------------------------

If width becomes constrained:
--------------------------------
Main Configuration
Summary
--------------------------------

But everything remains on the SAME PAGE.

Do NOT use:
- modal summary
- bottom-sheet summary
- separate summary screen
- wizard
- next button

============================================================
TABLET — SECTION 3
============================================================

Use the SAME configuration components as Desktop.

Percentage Off:

Discount Percentage
Maximum Discount

Flat Discount:

Discount Amount

Buy X Get Y:

Buy configuration
Get configuration

Quantity Discount:

Quantity tiers

Spend & Save:

Minimum Bill
Discount

Tiered:

Spend tiers
Rewards

Bundle:

Bundle items
Reward

The component may change from horizontal to stacked layout depending
on available width.

Do NOT change the information architecture.

============================================================
MOBILE GLOBAL STRUCTURE
============================================================

Viewport:
0px–599px.

Mobile uses the approved/frozen wizard design.

Structure:

Header
↓
Back
↓
Create Offer
↓
Progress Indicator
↓
Current Step
↓
Content Card
↓
Sticky Bottom Actions

One screen at a time.

============================================================
MOBILE PROGRESS
============================================================

Show:

1 Basic
2 Type
3 Config
4 Applies
5 Cond.
6 Schedule
7 Review
8 Complete

Current step:
strong purple/blue active state.

Completed steps:
visually distinct.

Future steps:
muted.

Keep it compact.

============================================================
MOBILE STEP 1
============================================================

Basic Information

Fields:

Offer Name *
[ e.g. Juice Fest 20% ]

Short Description (Optional)
[ e.g. Get 20% off on all juices ]

Bottom:

[ Next: Select Offer Type → ]

============================================================
MOBILE STEP 2
============================================================

Select Offer Type

Show all 7:

Percentage Off
Flat Discount
Buy X Get Y
Quantity Discount
Spend & Save
Tiered Offer
Bundle / Combo

Use the previously approved mobile card design.

One selected type.

Bottom:

[ ← Back ] [ Next: Configure Offer → ]

============================================================
MOBILE STEP 3
OFFER CONFIGURATION
============================================================

This is the EXACT mobile component pattern approved for Percentage
Off.

Do NOT redesign it.

Structure:

Create Offer

Set the discount details for this offer.

Progress:
1  2  ③  4  5  6  7  8

Configuration Card:

[ Offer Type Icon ]

Percentage Off
Discount by percentage

Then configuration fields.

Bottom:

[ ← Back ] [ Next: Applies To → ]

For every other Offer Type, retain:

- same header
- same progress
- same card
- same icon/title relationship
- same typography
- same spacing
- same field styling
- same bottom action placement

ONLY THE CONFIGURATION FIELDS CHANGE.

============================================================
MOBILE STEP 3A
PERCENTAGE OFF
============================================================

[ % icon ]

Percentage Off
Discount by percentage

Discount Percentage *
[ 20                         % ]

Helper:
Enter discount percentage (e.g. 20 for 20%)

Maximum Discount (Optional)
[ ₹ 200 ]

Helper:
Maximum discount amount per bill

============================================================
MOBILE STEP 3B
FLAT DISCOUNT
============================================================

[ ₹ icon ]

Flat Discount
Fixed amount discount

Discount Amount *
[ ₹ 500 ]

Use the same field/card layout as Percentage Off.

Do not add unnecessary fields.

============================================================
MOBILE STEP 3C
BUY X GET Y
============================================================

[ Buy/Get icon ]

Buy X Get Y
Buy items and get items

BUY

Quantity *
[ 1 ]

Item / Product / Category
[ Select ]

GET

Quantity *
[ 1 ]

Item / Product / Category
[ Select ]

Use compact grouped fields.

Avoid making the screen visually heavy.

If content becomes taller:
- allow page scrolling
- keep bottom actions accessible
- never introduce horizontal scrolling.

============================================================
MOBILE STEP 3D
QUANTITY DISCOUNT
============================================================

[ Quantity icon ]

Quantity Discount
Discount based on quantity

Quantity Tiers:

2+ units    [ 5% ]
5+ units    [ 10% ]
10+ units   [ 15% ]

[ + Add Tier ]

Use compact editable rows.

Do not use a large desktop table.

============================================================
MOBILE STEP 3E
SPEND & SAVE
============================================================

[ Spend icon ]

Spend & Save
Discount on minimum bill

Minimum Bill Amount *
[ ₹ 500 ]

Discount *
[ 10                         % ]

Keep fields vertically arranged.

============================================================
MOBILE STEP 3F
TIERED OFFER
============================================================

[ Tier icon ]

Tiered Offer
Multiple levels of discount

Spend Tiers:

₹500+      [ 10% ]
₹2,500+    [ 15% ]
₹5,000+    [ 20% ]

[ + Add Tier ]

Use compact mobile rows.

============================================================
MOBILE STEP 3G
BUNDLE / COMBO
============================================================

[ Bundle icon ]

Bundle / Combo
Special price for a bundle

Bundle Items:

[ Apple Juice × ]

[ Sandwich × ]

[ + Add Product ]

Bundle Reward
[ Configure reward ]

Use the same component style as the approved mobile design.

============================================================
MOBILE STEP 4
APPLIES TO
============================================================

Use the exact approved mobile Applies To structure.

Title:

Create Offer

Subtitle:

Choose where this offer can be applied.

Card:

Applies To

Options:

○ Entire Bill

○ Selected Products

○ Category

------------------------------------------------------------
SELECTED PRODUCTS
------------------------------------------------------------

When selected:

[ Search and select products... ]

3 products selected

[ Apple Juice × ]
[ Orange Juice × ]
[ Mango Juice × ]

------------------------------------------------------------
CATEGORY
------------------------------------------------------------

When selected:

Use MULTI-SELECT CHECKBOXES.

Example:

☑ Beverages
☑ Fresh Juices
☐ Snacks
☑ Desserts
☐ Combos
☐ Others

Do NOT use a single-select dropdown.

Bottom:

[ ← Back ] [ Next: Conditions → ]

============================================================
MOBILE STEP 5
CONDITIONS
============================================================

Title:

Conditions (Optional)

Optional controls:

☐ Minimum Bill Amount

When selected:
₹ [ ______ ]

☐ Minimum Quantity

When selected:
[ ______ ] units

Keep the component compact.

Do not introduce unsupported conditions.

Bottom:

[ ← Back ] [ Next: Schedule → ]

============================================================
MOBILE STEP 6
SCHEDULE
============================================================

Title:

Schedule

Supporting text:

Set when this offer is valid.

Fields:

Start Date *
[ date ]

Start Time *
[ time ]

End Date
[ date ]

End Time
[ time ]

Repeat (Optional)
[ Does not repeat ▼ ]

Where recurring days are supported:

[ Mon ] [ Tue ] [ Wed ] [ Thu ] [ Fri ] [ Sat ] [ Sun ]

IMPORTANT:

NO Status toggle.

NO Active/Inactive control.

NO Scheduled status.

NO Draft.

The Schedule controls validity.

Bottom action proceeds to Review.

============================================================
MOBILE STEP 7
REVIEW
============================================================

Title:

Create Offer

Subtitle:

Review your offer details before creating.

Show:

Basic Details
[ Edit ]

Offer Type & Configuration
[ Edit ]

Applies To
[ Edit ]

Conditions
[ Edit ]

Schedule
[ Edit ]

Example:

Basic Details
Offer Name: Juice Fest 20%

Offer Type & Configuration
Percentage Off
20%
Maximum Discount ₹200

Applies To
Selected Products
Apple Juice, Orange Juice, Mango Juice

Conditions
Minimum Bill Amount ₹500
Minimum Quantity 5 units

Schedule
01 Sep – 30 Sep
Mon–Fri
09:00 AM – 06:00 PM

Each Edit action returns to that exact configuration screen.

Preserve all entered data.

Do not call this Preview.

It is REVIEW.

Bottom:

[ ← Back ] [ Create Offer ]

============================================================
MOBILE STEP 8
COMPLETE
============================================================

Success screen.

Show:

✓

Offer Created Successfully!

Your offer is ready to use.

Actions:

[ Create Another Offer ]

[ Go to Offers ]

Create Another Offer:
starts a new empty Create Offer flow.

Go to Offers:
returns to Offers Dashboard.

============================================================
OFFER TYPE × VIEWPORT MATRIX
============================================================

Use this matrix as an implementation rule.

------------------------------------------------------------
PERCENTAGE OFF
------------------------------------------------------------

Desktop:
Single-page Section 3 configuration.

Tablet:
Single-page Section 3 configuration.

Mobile:
Dedicated Step 3 screen.

Fields:
- Discount Percentage
- Maximum Discount

------------------------------------------------------------
FLAT DISCOUNT
------------------------------------------------------------

Desktop:
Single-page Section 3 configuration.

Tablet:
Single-page Section 3 configuration.

Mobile:
Dedicated Step 3 screen.

Fields:
- Discount Amount

------------------------------------------------------------
BUY X GET Y
------------------------------------------------------------

Desktop:
Single-page Section 3 configuration.

Tablet:
Single-page Section 3 configuration.

Mobile:
Dedicated Step 3 screen.

Fields:
- Buy Quantity
- Buy Item/Product/Category
- Get Quantity
- Get Item/Product/Category

------------------------------------------------------------
QUANTITY DISCOUNT
------------------------------------------------------------

Desktop:
Single-page Section 3 configuration.

Tablet:
Single-page Section 3 configuration.

Mobile:
Dedicated Step 3 screen.

Fields:
- Quantity
- Discount
- Add Tier

------------------------------------------------------------
SPEND & SAVE
------------------------------------------------------------

Desktop:
Single-page Section 3 configuration.

Tablet:
Single-page Section 3 configuration.

Mobile:
Dedicated Step 3 screen.

Fields:
- Minimum Bill Amount
- Discount

------------------------------------------------------------
TIERED OFFER
------------------------------------------------------------

Desktop:
Single-page Section 3 configuration.

Tablet:
Single-page Section 3 configuration.

Mobile:
Dedicated Step 3 screen.

Fields:
- Minimum Spend
- Reward
- Add Tier

------------------------------------------------------------
BUNDLE / COMBO
------------------------------------------------------------

Desktop:
Single-page Section 3 configuration.

Tablet:
Single-page Section 3 configuration.

Mobile:
Dedicated Step 3 screen.

Fields:
- Bundle Items
- Bundle Reward

============================================================
DESKTOP VS TABLET VS MOBILE
============================================================

DESKTOP
1024px+

Application shell:
Sidebar + Header

Create Offer:
Single page

Sections:
1 → 6 all visible

Offer Summary:
Right side

Actions:
Cancel + Save Offer

No wizard.

------------------------------------------------------------

TABLET
600px–1023px

Application shell:
Responsive sidebar/header according to existing application shell.

Create Offer:
Single page

Sections:
1 → 6 all part of same page

Offer Summary:
Same page; side-by-side when width allows,
otherwise responsive secondary region below main configuration.

No popup.

No overlay.

No wizard.

No Next button.

------------------------------------------------------------

MOBILE
0px–599px

Application shell:
Mobile header/navigation.

Create Offer:
8-screen guided workflow.

Only current step shown.

No desktop Offer Summary sidebar.

Progress indicator visible.

Bottom action controls.

============================================================
SCROLLING RULES
============================================================

Never introduce unnecessary horizontal scrolling.

Desktop:
Main page may vertically scroll if content exceeds viewport.

Tablet:
Main page may vertically scroll.

Mobile:
Current screen may vertically scroll if configuration is long.

For long lists:
Only the owning list area should scroll where appropriate.

Examples:
- Product selection list
- Category list
- Quantity tiers
- Spend tiers
- Bundle items

Do NOT make the entire application shell scroll because of a small list.

Sticky bottom actions should remain usable on mobile.

============================================================
VALIDATION
============================================================

Required fields must be clearly identified.

Examples:

Offer Name *
Discount Percentage *
Discount Amount *
Start Date *
etc.

Invalid fields:
- clear error state
- useful error message
- field remains visible
- do not silently discard values

Save Offer:
- validate
- stop submission when invalid
- show inline errors
- preserve all entered information

============================================================
DATA PRESERVATION
============================================================

Changing Offer Type:
- update only configuration
- preserve Basic Information
- preserve compatible Applies To data where valid
- preserve compatible Conditions
- preserve Schedule

Moving backward on mobile:
- preserve entered values.

Review → Edit:
- return to exact step
- preserve values.

Do not unexpectedly reset the entire form.

============================================================
OFFER APPLICATION RULE
============================================================

CRITICAL BUSINESS RULE:

Offers are NOT automatically applied during Billing.

The billing person must explicitly select an offer.

Correct flow:

Billing
↓
Applicable Offers
↓
Billing person selects offer
↓
Selected Offer
↓
Offer/Billing Engine
↓
Discount/Reward Result

Do NOT use UI text such as:

"Offer will automatically be applied."

Do NOT imply automatic application.

============================================================
ENGINE RESPONSIBILITY
============================================================

UI captures configuration.

Offer Engine owns:
- eligibility
- applicability
- offer evaluation
- reward calculation
- discount calculation
- limits
- schedule evaluation

Billing Engine owns final billing calculation.

The UI must NOT implement business pricing logic.

============================================================
CREATE OFFER — NO ADDITIONS
============================================================

DO NOT add:

- Draft
- Save Draft
- Preview
- Status section
- Active toggle
- Inactive toggle
- Scheduled status
- Upcoming status
- automatic offer application
- coupon code
- loyalty configuration
- customer segmentation
- first purchase configuration
- bank/card offer
- cashback
- referral campaign
- AI configuration
- campaign analytics
- performance charts
- unnecessary advanced settings
- unnecessary images
- product image galleries
- decorative category images
- bulk selection
- unnecessary confirmation dialogs
- popup Create Offer
- modal Create Offer
- overlay Create Offer
- separate desktop configuration pages
- separate tablet configuration pages
- desktop wizard
- tablet wizard

Only implement supported Offer functionality.

============================================================
VISUAL COMPONENT CONSISTENCY
============================================================

The following components must be reusable:

OfferTypeCard
OfferConfigurationCard
PercentageConfiguration
FlatDiscountConfiguration
BuyXGetYConfiguration
QuantityDiscountConfiguration
SpendAndSaveConfiguration
TieredOfferConfiguration
BundleConfiguration

AppliesToSelector
ProductMultiSelector
CategoryMultiSelector

ConditionCheckbox
DatePicker
TimePicker
DaySelector

OfferSummary
ReviewSection
BottomActionBar

All should use the same BizCopilot design tokens.

============================================================
DESIGN TOKENS
============================================================

Maintain the existing BizCopilot design system.

Typography:
- clear hierarchy
- strong page titles
- medium section headings
- readable labels
- subtle helper text

Colors:
- dark navy for primary text
- BizCopilot blue/purple for primary actions
- subtle neutral borders
- light backgrounds
- clear error/success states

Controls:
- consistent border radius
- consistent field height
- consistent button height
- consistent spacing
- consistent focus state

Avoid:
- excessive gradients
- excessive shadows
- excessive colors
- decorative UI
- huge empty spaces
- unnecessary cards

============================================================
FINAL STRUCTURE
============================================================

DESKTOP + TABLET
============================================================

ONE PAGE

┌─────────────────────────────────────────────────────────────┐
│ Header                                                      │
├──────────────┬──────────────────────────────────────────────┤
│ Sidebar      │ ← Back to Offers                             │
│              │ Create Offer                                 │
│              │                                              │
│              │ 1. Basic Information                         │
│              │                                              │
│              │ 2. Select Offer Type                         │
│              │                                              │
│              │ 3. Offer Configuration                       │
│              │    ↑ ONLY THIS CHANGES                       │
│              │                                              │
│              │ 4. Applies To                                │
│              │                                              │
│              │ 5. Conditions (Optional)                     │
│              │                                              │
│              │ 6. Schedule                                  │
│              │                                              │
│              │                         Offer Summary        │
│              │                                              │
│              │                    Cancel   Save Offer       │
└──────────────┴──────────────────────────────────────────────┘


MOBILE
============================================================

SCREEN 1
Basic Information
        ↓
SCREEN 2
Select Offer Type
        ↓
SCREEN 3
Offer Configuration
        ↓
SCREEN 4
Applies To
        ↓
SCREEN 5
Conditions
        ↓
SCREEN 6
Schedule
        ↓
SCREEN 7
Review
        ↓
SCREEN 8
Complete

============================================================
GOLDEN RULE
============================================================

DESKTOP/TABLET:

ONE PAGE.
Everything is visible.
Only Section 3 changes when Offer Type changes.

MOBILE:

ONE DECISION PER SCREEN.
Use the frozen 8-screen mobile workflow.

ALL OFFER TYPES:

Same visual system.
Same configuration component.
Different fields according to the selected Offer Type.

PERCENTAGE OFF IS THE MASTER VISUAL REFERENCE.

The attached approved Desktop mock is the structural reference
for Desktop/Tablet.

The approved mobile Percentage Off / Applies To / Conditions /
Schedule / Review / Complete mocks are the visual references
for Mobile.

Do not invent a new layout.

Do not create a different design for each Offer Type.

Do not change the mobile architecture.

Do not change the desktop/tablet single-page architecture.

============================================================
END OF MASTER PROMPT
============================================================