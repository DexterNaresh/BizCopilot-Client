BIZCOPILOT — CREATE OFFER
MASTER FIGMA / UI-UX DESIGN PROMPT
============================================================

ROLE
============================================================

Act as a senior product designer, senior UI/UX designer, responsive
design architect, and POS/business application UX specialist.

Design the complete BizCopilot "Create Offer" experience.

The design must follow the frozen BizCopilot visual language and the
previously approved Offer Dashboard design.

IMPORTANT:
This is NOT a generic e-commerce promotion builder.

BizCopilot is a fast, simple business operating system for small
businesses such as juice shops, cafes, hardware shops, and similar
small businesses.

The owner should be able to create an offer without understanding
complex promotion-engine terminology.

Prioritize:
- clarity
- speed
- simplicity
- predictable behavior
- low cognitive load
- minimal navigation
- responsive behavior
- professional business UI
- consistent visual language
- no unnecessary options
- no unnecessary screens

============================================================
CRITICAL RESPONSIVE ARCHITECTURE
============================================================

There are TWO completely different layout strategies.

DESKTOP + TABLET:
--------------------------------
Create Offer is ONE SINGLE PAGE.

All configuration sections are visible on the same page:

1. Basic Information
2. Select Offer Type
3. Offer Configuration
4. Applies To
5. Conditions (Optional)
6. Schedule

The user does NOT navigate step-by-step on desktop/tablet.

When the user selects a different Offer Type, ONLY SECTION 3:
"Offer Configuration" changes its fields/content.

Do NOT navigate to another screen.

Do NOT replace the entire page.

Do NOT turn desktop/tablet into a wizard.

The right-side Offer Summary remains visible on desktop/tablet.

MOBILE:
--------------------------------
Mobile is a COMPLETELY DIFFERENT composition.

Use the approved mobile wizard design.

Mobile uses one screen at a time:

1. Basic Information
2. Select Offer Type
3. Offer Configuration
4. Applies To
5. Conditions
6. Schedule
7. Review
8. Complete

The mobile design selected and frozen by the product owner is the
reference.

DO NOT convert the mobile design into a single long form.

DO NOT change the mobile layout into the desktop layout.

DO NOT remove the progress indicator.

============================================================
GLOBAL PRODUCT RULES
============================================================

1. Create Offer opens as a completely new full page/screen.

2. It is NEVER:
   - a popup
   - a modal
   - a dialog
   - a bottom sheet
   - an overlay

3. No Draft state.

4. No "Save Draft".

5. No Preview workflow.

6. No Status section in Create Offer.

7. No Active/Inactive toggle in Create Offer.

8. Status is managed from the Offers Dashboard.

9. Status has only:
   - Active
   - Inactive

10. There is NO "Scheduled" status.

11. Scheduling/validity is represented by the Schedule section.

12. Do NOT add an Upcoming status.

13. Do NOT add an Upcoming card to Create Offer.

14. Do NOT add unnecessary promotion settings.

15. Do NOT add an informational note explaining how offers work.

16. Do NOT add automatic offer application behavior.

17. During Billing, applicable offers are NOT automatically applied.

18. The billing person explicitly selects the offer.

19. The Offer Engine determines applicability/calculation according to
    the business rules.

20. The UI must NOT calculate the final discount or final bill amount.

21. Offer calculation belongs to the Offer Engine/Billing Engine.

22. The UI only captures the configuration.

23. Do not invent business rules that are not defined in this prompt.

24. If a specific offer type requires additional configuration,
    render the appropriate configuration fields while preserving the
    same visual component structure.

============================================================
FROZEN VISUAL LANGUAGE
============================================================

Use the existing BizCopilot design language.

Overall visual character:
- clean
- premium
- calm
- modern
- business-focused
- minimal
- highly readable
- operationally efficient

Avoid:
- excessive gradients
- excessive shadows
- decorative illustrations
- excessive empty whitespace
- unnecessary cards
- unnecessary icons
- excessive rounded containers
- giant typography
- playful e-commerce styling
- unnecessary animations
- excessive colors

Use:
- white/light neutral page background
- dark navy primary text
- blue/purple primary action color
- subtle borders
- very soft shadows where appropriate
- compact but comfortable spacing
- clear hierarchy
- consistent rounded corners
- consistent field heights
- consistent button heights

Icons:
- use meaningful icons only
- icons may appear before section/type titles where they improve recognition
- do not put decorative icons everywhere
- do not use image thumbnails for offer types
- do not use product/category images in Create Offer unless the
  existing product selection component explicitly requires them

============================================================
DESKTOP GLOBAL STRUCTURE
============================================================

Viewport:
1024px and above.

Use the existing BizCopilot desktop shell.

STRUCTURE:

------------------------------------------------------------
TOP HEADER
------------------------------------------------------------

Left:
- BizCopilot logo

Right:
- Business selector
- Notifications
- User/profile
- Role information where applicable

Use the existing application header design.

------------------------------------------------------------
LEFT SIDEBAR
------------------------------------------------------------

Existing BizCopilot navigation.

Expected navigation:
- Dashboard
- Billing
- Products
- Offers
- Customers
- Reports
- Settings

Offers must be visually active/selected.

Do not add new navigation items.

------------------------------------------------------------
MAIN CONTENT
------------------------------------------------------------

Top:

[←] Back to Offers

Title:
Create Offer

Subtitle:
Create a new offer to attract customers and grow your business

Then use a two-column workspace:

LEFT:
Main Create Offer configuration

RIGHT:
Offer Summary

------------------------------------------------------------
DESKTOP COLUMN BEHAVIOR
------------------------------------------------------------

The main configuration area should be wider.

The Offer Summary should be a stable right-side panel.

Do NOT make the right summary wider than the main form.

Do NOT allow the summary to dominate the page.

The summary is informational.

It updates as the user configures the offer.

============================================================
DESKTOP — SECTION 1
BASIC INFORMATION
============================================================

Always visible.

Section header:

1  Basic Information

Fields:

Offer Name *
[ input ]

Short Description (Optional)
[ input / textarea ]

Example:

Offer Name:
Juice Fest 20%

Short Description:
Get 20% off on all juices

Rules:
- Offer Name is required.
- Description is optional.
- Keep the layout compact.
- On desktop, place the two fields side-by-side where space allows.
- Do not create another page.
- Do not create a popup.

Validation:
- Required field clearly indicated.
- Invalid input gets inline validation.
- Preserve entered values.

============================================================
DESKTOP — SECTION 2
SELECT OFFER TYPE
============================================================

Always visible.

Section header:

2  Select Offer Type

Supporting text:
Choose the promotion type for this offer

Display offer types as selectable cards.

Offer types:

1. Percentage Off
2. Flat Discount
3. Buy X Get Y
4. Quantity Discount
5. Spend & Save
6. Tiered Offer
7. Bundle / Combo

Use a consistent selectable-card component.

Each card may contain:
- meaningful icon
- offer type name
- short explanation

Example:

Percentage Off
Discount by percentage

Flat Discount
Fixed amount discount

Buy X Get Y
Buy items and get items

Quantity Discount
Discount based on quantity

Spend & Save
Discount on minimum bill

Tiered Offer
Multiple levels of discount

Bundle / Combo
Special price for a bundle

SELECTION BEHAVIOR:
- One offer type is selected.
- Selected card has clear active/highlighted state.
- No checkbox.
- No multi-select.
- Do not navigate when selecting a type.

============================================================
DESKTOP — SECTION 3
OFFER CONFIGURATION
============================================================

THIS IS THE ONLY DYNAMIC SECTION.

The visual container, section position, spacing, and overall component
structure remain consistent.

ONLY THE CONFIGURATION CONTENT CHANGES according to the selected
Offer Type.

Do NOT create separate pages for each offer type.

Do NOT create different visual systems for each offer type.

Use the exact approved Percentage Off visual language as the master
template.

------------------------------------------------------------
3A — PERCENTAGE OFF
------------------------------------------------------------

Section:

3  [Percentage icon] Percentage Off

Supporting text:
Set the discount details for Percentage Off

Fields:

Discount Percentage *
[ 20                         % ]

Maximum Discount (Optional)
[ ₹ 200 ]

Helper text:
Maximum discount amount per bill

Important:
The icon belongs before the selected offer configuration title.

Do NOT show a separate title such as:
"Offer Configuration"

The section title should identify the actual selected offer type.

------------------------------------------------------------
3B — FLAT DISCOUNT
------------------------------------------------------------

Same section structure.

Title:

3  [₹ icon] Flat Discount

Supporting text:
Set the discount details for Flat Discount

Configuration fields should be appropriate to Flat Discount.

Core configuration:

Discount Amount *
[ ₹ ______ ]

Do not show percentage-specific fields.

If a minimum bill requirement is supported for this offer type,
configure it according to the defined Offer model rather than
inventing additional rules.

------------------------------------------------------------
3C — BUY X GET Y
------------------------------------------------------------

Same visual structure.

Title:

3  [meaningful icon] Buy X Get Y

Supporting text:
Configure the buy and get quantities/items.

Configuration must support the defined Buy X Get Y model.

Example concept:

Buy Quantity *
[ 1 ]

Buy Item / Product / Category
[ Select ]

Get Quantity *
[ 1 ]

Get Item / Product / Category
[ Select ]

Do not invent complex stacking or redemption rules.

Keep the UI understandable for a small-business owner.

------------------------------------------------------------
3D — QUANTITY DISCOUNT
------------------------------------------------------------

Same visual structure.

Title:

3  [meaningful icon] Quantity Discount

Supporting text:
Set discounts based on quantity.

Use a compact tier configuration.

Example:

Quantity Tiers

Quantity       Discount
2+ units       5%
5+ units       10%
10+ units      15%

[ + Add Tier ]

Requirements:
- tiers should be easy to edit
- add/remove tier should be obvious
- avoid huge tables
- keep the editor compact
- do not create a separate page

------------------------------------------------------------
3E — SPEND & SAVE
------------------------------------------------------------

Same visual structure.

Title:

3  [meaningful icon] Spend & Save

Supporting text:
Set a minimum bill amount and discount.

Core configuration:

Minimum Bill Amount *
[ ₹ 500 ]

Discount *
[ 10                         % ]

Use the same field styling as Percentage Off.

------------------------------------------------------------
3F — TIERED OFFER
------------------------------------------------------------

Same visual structure.

Title:

3  [meaningful icon] Tiered Offer

Supporting text:
Set multiple discount levels.

Example:

Spend Tiers

Minimum Spend       Reward
₹500+               10%
₹2,500+             15%
₹5,000+             20%

[ + Add Tier ]

Requirements:
- inline tier editing
- add tier
- remove tier
- clear threshold/reward relationship
- no separate screen

------------------------------------------------------------
3G — BUNDLE / COMBO
------------------------------------------------------------

Same visual structure.

Title:

3  [meaningful icon] Bundle / Combo

Supporting text:
Configure the products/items that form the bundle.

Use the existing product-selection pattern where applicable.

Example concept:

Bundle Items

[ Apple Juice                         × ]
[ Sandwich                             × ]

[ + Add Product ]

Bundle Reward
[ Configure reward ]

IMPORTANT:
Do not invent additional bundle pricing rules that are not defined
by the business/domain model.

The visual structure must remain consistent even if the underlying
fields differ.

============================================================
DYNAMIC CONFIGURATION RULE
============================================================

When the user changes:

Percentage Off
        ↓
Flat Discount

ONLY SECTION 3 CHANGES.

Sections 1, 2, 4, 5, and 6 stay in place.

The right-side Offer Summary updates accordingly.

Example:

Percentage Off:
Discount Percentage = 20%
Maximum Discount = ₹200

Switch to Flat Discount:

Discount Amount = ₹500

The page itself does not navigate.

No page transition.

No modal.

No popup.

No wizard.

============================================================
DESKTOP — SECTION 4
APPLIES TO
============================================================

Always visible.

Section header:

4  Applies To

Supporting text:
Choose where this offer can be applied

Available scope:

○ Entire Bill

○ Selected Products

○ Category

Use radio-style selection because only one scope mode is selected
for the offer.

------------------------------------------------------------
ENTIRE BILL
------------------------------------------------------------

Selected state:

● Entire Bill

Supporting text:
Applies to the total bill amount

No additional selection UI.

------------------------------------------------------------
SELECTED PRODUCTS
------------------------------------------------------------

When selected:

● Selected Products

Supporting text:
Applies to specific products

Then show:

[ Search and select products... ]

Below search:
selected products displayed as compact removable chips/tags.

Example:

[ Apple Juice × ]
[ Orange Juice × ]
[ Mango Juice × ]

Show selected count where useful:

3 products selected

Requirements:
- multi-select products
- removable selected product chips
- search products
- do not use product images unless already required by the
  application's product selector
- keep the selector compact
- do not open a separate page

------------------------------------------------------------
CATEGORY
------------------------------------------------------------

When selected:

● Category

Supporting text:
Applies to one or more product categories

Category selection MUST support MULTIPLE categories.

Use checkboxes.

Example:

☑ Beverages
☑ Fresh Juices
☐ Snacks
☑ Desserts
☐ Combos
☐ Others

Include category search if required by the number of categories.

Do NOT use a single-select dropdown.

Do NOT restrict the owner to one category.

============================================================
DESKTOP — SECTION 5
CONDITIONS
============================================================

Section title:

5  Conditions (Optional)

Supporting text:
Set minimum requirements for this offer

Conditions are optional.

Core supported conditions:

☐ Minimum Bill Amount

When enabled:
[ ₹ ______ ]

Helper text:
Offer applies only if bill amount is at least...

AND:

☐ Minimum Quantity

When enabled:
[ ______ ] units

Helper text:
Offer applies only if minimum quantity is purchased

Behavior:
- unchecked = condition disabled
- checked = corresponding field enabled
- only show relevant condition fields
- keep the section compact

Do not create unnecessary conditions.

Do not invent customer-type conditions or first-purchase conditions
unless they are explicitly supported by the actual Offer domain model.

============================================================
DESKTOP — SECTION 6
SCHEDULE
============================================================

Section title:

6  Schedule

Supporting text:
Set when this offer is valid

Fields:

Start Date *
[ date ]

End Date *
[ date ]

Days of Week

[ Mon ] [ Tue ] [ Wed ] [ Thu ] [ Fri ] [ Sat ] [ Sun ]

Time (Optional)

Start Time
[ 09:00 AM ]

End Time
[ 06:00 PM ]

The schedule must support the previously defined concept of:
- date range
- recurring days
- optional time window

Example:
Monday–Friday
09:00 AM–06:00 PM
within the configured date range.

IMPORTANT:
There is NO Status section here.

Do NOT add:

Status
Active [ON]

Do NOT add Scheduled as a status.

Do NOT add Draft.

The schedule represents validity.

============================================================
RIGHT-SIDE OFFER SUMMARY
============================================================

Desktop/tablet should show a live informational Offer Summary.

Title:

Offer Summary

Supporting text:
Review your offer details

Display:

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

Behavior:
- update dynamically
- remain informational
- never become an editable duplicate form
- do not add unnecessary controls
- do not add a Preview button

If a field has not yet been configured, show a clean placeholder such
as "Not set" rather than inventing a value.

============================================================
DESKTOP BOTTOM ACTIONS
============================================================

Bottom-right or bottom action area:

[ Cancel ]       [ Save Offer ]

Primary:
Save Offer

Secondary:
Cancel

Do NOT use:
- Next
- Continue
- Step 1
- Step 2
- Save Draft
- Preview

because desktop/tablet is a single-page form.

Save Offer:
- validate all required fields
- show inline errors
- prevent invalid submission
- submit the configured offer
- then transition to the completion/success state

Cancel:
- return to Offers
- if unsaved changes exist, use the application's standard
  unsaved-change confirmation pattern

============================================================
TABLET STRUCTURE
============================================================

Viewport:
600px–1023px.

Tablet is still a SINGLE PAGE.

Do NOT use the mobile wizard.

Do NOT show one step per screen.

Use the same six configuration sections:

1. Basic Information
2. Select Offer Type
3. Offer Configuration
4. Applies To
5. Conditions
6. Schedule

Adapt the layout to available width.

Possible structure:

------------------------------------------------------------
Header
------------------------------------------------------------
Back to Offers
Create Offer
Subtitle
------------------------------------------------------------

Main content

Configuration sections

1 Basic Information
2 Select Offer Type
3 Offer Configuration
4 Applies To
5 Conditions
6 Schedule

Offer Summary should remain available without creating a
second workflow.

If the available tablet width does not comfortably support a permanent
side-by-side summary, place the Offer Summary in a secondary responsive
region while keeping it on the SAME PAGE.

Do NOT turn it into a popup.

Do NOT make it a bottom sheet.

Do NOT create a separate summary screen.

Tablet should feel like an expanded mobile/tablet business workspace,
but it must retain the desktop single-page architecture.

============================================================
MOBILE — COMPLETELY DIFFERENT DESIGN
============================================================

Viewport:
0px–599px.

Use the EXACT approved mobile Create Offer design language.

Mobile is a guided workflow.

One screen at a time.

The mobile screens are:

1 Basic Information
2 Select Offer Type
3 Offer Configuration
4 Applies To
5 Conditions
6 Schedule
7 Review
8 Complete

Use:
- compact BizCopilot header
- Back navigation
- Create Offer title
- short supporting text
- horizontal progress indicator
- one focused content card/section
- sticky bottom navigation/actions

Do NOT show all six configuration sections simultaneously.

Do NOT use the desktop right-side Offer Summary.

============================================================
MOBILE HEADER
============================================================

Use the frozen mobile header style:

- BizCopilot logo
- profile/avatar
- standard application header controls

Below header:

[←] Back to Create Offer

Then:

Create Offer

Context-specific subtitle.

============================================================
MOBILE PROGRESS INDICATOR
============================================================

Show all 8 stages:

1 Basic
2 Type
3 Config
4 Applies
5 Cond.
6 Schedule
7 Review
8 Complete

Current step is highlighted with the frozen BizCopilot
purple/blue active state.

Completed/current/future states must be visually distinguishable.

Keep the progress indicator compact enough to fit narrow mobile
viewports.

Do not replace it with a hamburger menu.

============================================================
MOBILE STEP 1
BASIC INFORMATION
============================================================

Title:
Create Offer

Subtitle:
Create a new offer to attract customers and grow your business.

Progress:
Step 1 active.

Card:
Basic Information

Fields:

Offer Name *
[ e.g. Juice Fest 20% ]

Character count if used in approved design.

Short Description (Optional)
[ e.g. Get 20% off on all juices ]

Bottom sticky actions:

[ Next: Select Offer Type → ]

No Back button if this is the first step unless required by the
application shell.

============================================================
MOBILE STEP 2
SELECT OFFER TYPE
============================================================

Title:
Select Offer Type

Subtitle:
Choose the promotion type for this offer

Show the same seven offer types:

- Percentage Off
- Flat Discount
- Buy X Get Y
- Quantity Discount
- Spend & Save
- Tiered Offer
- Bundle / Combo

Use the frozen selectable card layout.

One selection only.

Selected card has a strong active border/highlight.

Bottom:

[ ← Back ]    [ Next: Configure Offer → ]

============================================================
MOBILE STEP 3
OFFER CONFIGURATION
============================================================

This screen follows the frozen Percentage Off mobile mock exactly
as the MASTER VISUAL TEMPLATE.

Header:

Create Offer

Subtitle:
Set the discount details for this offer.

Progress:
3 Config active.

Configuration card:

[Offer type icon] Percentage Off
Discount by percentage

Then:

Discount Percentage *
[ 20                         % ]

Helper:
Enter discount percentage (e.g. 20 for 20%)

Maximum Discount (Optional)
[ ₹ 200 ]

Helper:
Maximum discount amount per bill

IMPORTANT VISUAL RULE:
Use an icon BEFORE the selected offer type title.

Do NOT show:
"Offer Configuration" as a separate title.

For other offer types, retain the exact same visual hierarchy and
component styling, but replace the fields with the appropriate
configuration.

Bottom:

[ ← Back ]    [ Next: Applies To → ]

============================================================
MOBILE STEP 3 — DYNAMIC OFFER TYPE BEHAVIOR
============================================================

The layout remains identical.

Only fields change.

Percentage Off:
- Discount Percentage
- Maximum Discount

Flat Discount:
- Discount Amount
- relevant supported minimum bill condition if applicable

Buy X Get Y:
- buy quantity/item configuration
- get quantity/item configuration

Quantity Discount:
- compact quantity tier editor

Spend & Save:
- minimum bill amount
- discount

Tiered Offer:
- tiered spend/reward editor

Bundle / Combo:
- bundle item selection
- supported bundle reward configuration

Do not invent fields.

Do not redesign the screen per offer type.

============================================================
MOBILE STEP 4
APPLIES TO
============================================================

Use the frozen mobile Applies To screen.

Title:
Create Offer

Subtitle:
Choose where this offer can be applied.

Progress:
4 Applies active.

Card:
Applies To

Options:

○ Entire Bill
  Applies to the total bill amount

○ Selected Products
  Applies to specific products

○ Category
  Applies to one or more product categories

When Selected Products is selected:

[ Search and select products... ]

Show selected count.

Example:

3 products selected

[ Apple Juice × ]
[ Orange Juice × ]
[ Mango Juice × ]

When Category is selected:

Use MULTI-SELECT CHECKBOXES.

Example:

☑ Beverages
☑ Fresh Juices
☐ Snacks
☑ Desserts
☐ Combos
☐ Others

Include category search if necessary.

Do NOT use a single-select dropdown for categories.

Bottom:

[ ← Back ]    [ Next: Conditions → ]

============================================================
MOBILE STEP 5
CONDITIONS
============================================================

Title:
Create Offer

Subtitle:
Set minimum requirements for this offer.

Progress:
5 Cond. active.

Card:

Conditions (Optional)

Optional condition controls:

☐ Minimum Bill Amount

When selected:
₹ [ ______ ]

☐ Minimum Quantity

When selected:
[ ______ ] units

Only relevant condition fields should become active.

Bottom:

[ ← Back ]    [ Next: Schedule → ]

No Status toggle.

============================================================
MOBILE STEP 6
SCHEDULE
============================================================

Title:
Create Offer

Subtitle:
Set the schedule for this offer.

Progress:
6 Schedule active.

Card:

Schedule

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

Where supported, allow recurring day selection:

[ Mon ] [ Tue ] [ Wed ] [ Thu ] [ Fri ] [ Sat ] [ Sun ]

Time window:

Start Time
End Time

IMPORTANT:
NO Status section.

NO Active toggle.

NO Inactive toggle.

NO Scheduled status.

NO Draft.

The schedule defines validity.

Bottom:

[ ← Back ]    [ Save / Continue to Review ]

Use the exact approved mobile flow terminology from the final
implementation specification.

============================================================
MOBILE STEP 7
REVIEW
============================================================

This is a dedicated mobile review screen.

Title:
Create Offer

Subtitle:
Review your offer details before creating.

Progress:
7 Review active.

Show compact review sections:

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

Edit behavior:
- tapping Edit returns directly to that specific configuration step
- preserve all previously entered data
- do not reset unrelated sections

Bottom:

[ ← Back ]    [ Create Offer ]

Do not call this Preview.

It is REVIEW only.

============================================================
MOBILE STEP 8
COMPLETE
============================================================

After successful creation:

Show the approved success state.

Progress:
8 Complete active.

Success:

✓

Offer Created Successfully!

Your offer is ready to use.

Use the approved clean success visual treatment.

Actions:

[ Create Another Offer ]

[ Go to Offers ]

Create Another Offer:
- starts a fresh Create Offer flow
- clear previous offer data

Go to Offers:
- return to Offers Dashboard

Do not show:
- Draft
- Preview
- Status toggle
- automatic application message

============================================================
OFFER APPLICATION BUSINESS RULE
============================================================

This rule must be reflected in the product behavior and must NOT be
contradicted anywhere in the UI.

Offers are NOT automatically applied during Billing.

When billing:

1. Billing identifies applicable offers.
2. Billing person sees the applicable offer options.
3. Billing person explicitly selects an offer.
4. Selected offer is passed through the application/domain flow.
5. Offer Engine/Billing Engine calculates the result.

The UI must never communicate:

"Offer automatically applied."

Avoid wording that implies automatic application.

============================================================
OFFER ENGINE RESPONSIBILITY
============================================================

The UI captures configuration.

The Offer Engine owns:
- eligibility
- applicability
- promotion calculation
- reward calculation
- limits
- schedule evaluation
- deterministic OfferResult

Billing Engine owns final billing calculations.

UI must NOT implement pricing or discount calculations.

Examples such as:
20% discount with maximum ₹200
are configuration values, not UI calculations.

============================================================
VALIDATION
============================================================

Validate required fields before Save Offer.

Examples:

Offer Name:
- required
- meaningful validation message

Percentage Off:
- required
- valid percentage range according to domain rules

Flat Discount:
- valid amount

Buy X Get Y:
- required buy/get configuration

Quantity Discount:
- valid tier configuration
- no invalid/duplicate tiers

Spend & Save:
- minimum bill amount
- reward

Tiered:
- valid thresholds
- valid rewards

Applies To:
- selected scope required
- if Products selected, at least one valid product
- if Category selected, at least one category

Conditions:
- enabled condition must have valid value

Schedule:
- valid date/time relationships
- end must not precede start

Do not allow invalid Save Offer.

Validation should be inline and clear.

============================================================
RESPONSIVE BEHAVIOR
============================================================

The UI must support all viewport widths.

Do not design for only one fixed screen size.

MOBILE:
- single column
- no horizontal scrolling
- content fits viewport
- bottom action area remains accessible
- long content scrolls naturally within the page
- avoid cramped fields
- buttons remain touch friendly

TABLET:
- single page
- wider fields
- sections may use two-column internal layouts where appropriate
- maintain comfortable spacing
- summary remains part of the same page
- no popup summary
- no wizard

DESKTOP:
- single page
- sidebar
- main configuration workspace
- right-side Offer Summary
- balanced proportions
- sections use available width efficiently

Do NOT introduce horizontal page scrolling.

Use vertical page scrolling only when content exceeds viewport height.

Avoid excessive empty space.

============================================================
ACCESSIBILITY
============================================================

Ensure:
- sufficient text contrast
- visible focus states
- keyboard navigation on desktop
- semantic form labels
- required fields clearly identified
- errors associated with their fields
- radio buttons have clear selected state
- category/product checkboxes are accessible
- touch targets are comfortably sized
- icons never carry meaning alone
- labels remain understandable without color

============================================================
INTERACTION DETAILS
============================================================

Offer Type:
- selecting a type immediately updates Section 3
- preserve all other section values
- update Offer Summary

Applies To:
- selecting Entire Bill removes product/category selection
- selecting Products activates product selector
- selecting Category activates multi-select category selector
- changing scope should handle previously entered incompatible values
  according to domain behavior; do not silently create invalid state

Conditions:
- checkbox controls activation
- values remain when temporarily disabled if supported
- do not show irrelevant fields

Schedule:
- changing dates updates summary
- changing days updates summary
- changing time updates summary

Review:
- Edit returns to exact section
- preserve state

Save:
- validate
- submit
- show success
- no automatic offer activation toggle on the form

============================================================
NO-ADD LIST
============================================================

DO NOT add:

- Draft
- Save Draft
- Preview
- Status section
- Status toggle
- Scheduled status
- Upcoming status
- automatic offer application
- offer images
- decorative category images
- unnecessary category icons
- checkboxes on Offer Dashboard
- bulk selection
- row preview
- row-click preview
- three-dot menu
- duplicate View action
- unnecessary filters
- coupon code unless explicitly part of the supported Offer model
- loyalty configuration unless explicitly supported
- customer-specific rules unless explicitly supported
- bank/card promotions
- cashback
- referral rules
- unnecessary AI configuration
- unnecessary advanced campaign settings
- popup Create Offer
- modal Create Offer
- overlay Create Offer
- separate desktop offer-type pages
- separate desktop configuration pages

============================================================
DESIGN CONSISTENCY
============================================================

The following are the visual source-of-truth relationships:

OFFER DASHBOARD:
- Desktop/tablet = table
- Mobile = offer cards

CREATE OFFER:
- Desktop/tablet = single-page configuration
- Mobile = multi-screen wizard

SECTION 3:
- Percentage Off is the master visual reference.
- All other Offer Types reuse the same visual component structure.
- Only the fields/content change.

APPLIES TO:
- Entire Bill = radio
- Selected Products = radio + multi-product selector
- Category = radio + MULTI-SELECT checkboxes

CONDITIONS:
- optional checkboxes

SCHEDULE:
- date/time/day configuration
- NO status toggle

REVIEW:
- editable summary

COMPLETE:
- success state

============================================================
FINAL INFORMATION ARCHITECTURE
============================================================

OFFER DASHBOARD
        ↓
Create Offer
        ↓

DESKTOP / TABLET
------------------------------------------------
ONE SINGLE PAGE

1. Basic Information
2. Select Offer Type
3. Offer Configuration
4. Applies To
5. Conditions (Optional)
6. Schedule

Right side:
Offer Summary

Bottom:
Cancel | Save Offer
------------------------------------------------


MOBILE
------------------------------------------------
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
------------------------------------------------

============================================================
FINAL DESIGN PRINCIPLE
============================================================

The goal is NOT to make Create Offer look feature-rich.

The goal is to make it feel effortless.

For desktop/tablet:
"Everything is visible and configurable on one page."

For mobile:
"One decision at a time."

For every Offer Type:
"Same design system, only the configuration fields change."

Never redesign the entire screen just because the selected Offer Type
has different fields.

The Percentage Off configuration screen is the visual master.

The desktop/tablet attached reference is the structural master.

The selected mobile 8-screen reference is the mobile interaction master.

Preserve these decisions exactly.
Do not introduce alternative layouts or additional workflows.
============================================================
END OF MASTER PROMPT
============================================================