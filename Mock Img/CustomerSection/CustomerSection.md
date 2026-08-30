BIZCOPILOT — CUSTOMER SELECTION SECTION
MASTER FIGMA UI/UX + FUNCTIONAL DESIGN SPECIFICATION
======================================================

DOCUMENT STATUS
---------------
STATUS: FROZEN DESIGN

This document is the authoritative master specification for the
Customer Selection experience used from the Billing Cart.

The design has already been reviewed and frozen.

The Figma implementation must reproduce the approved mock design
and behavior exactly.

DO NOT redesign the experience.

DO NOT introduce a second customer list outside this flow.

DO NOT add unnecessary customer-management functionality.

DO NOT add navigation menu UI.

DO NOT create a separate tablet design.

DESKTOP + TABLET:
→ SAME CUSTOMER OVERLAY DESIGN

MOBILE:
→ DEDICATED BOTTOM-OVERLAY DESIGN

The mobile overlay uses almost the complete screen height,
with a small amount of space remaining at the top.


======================================================
1. PRODUCT CONTEXT
======================================================

Product:
BizCopilot

This Customer Selection experience belongs to the Billing screen.

The user is already inside Billing.

The Billing Cart contains a Customer section.

When the cashier clicks:

Customer
or
Change

the Customer Selection overlay opens.

Purpose:

1. Select an existing customer
2. Search an existing customer
3. Create/use a new customer
4. Select Walk-In Customer
5. Confirm the customer for the current bill

The experience must be optimized for a fast POS workflow.

The cashier should not need to leave Billing.


======================================================
2. IMPORTANT DESIGN DECISION
======================================================

There is NO separate left-side customer list.

The Customer Selection experience is completely contained
inside the Customer overlay.

DO NOT create:

- Left-side All Customers panel
- Duplicate customer list
- Separate customer management screen
- Duplicate global search
- Customer navigation menu
- Additional customer dashboard

The overlay itself contains the complete customer-selection flow.


======================================================
3. VIEWPORT STRUCTURE
======================================================

There are TWO structural modes.

MODE 1:
Desktop + Tablet

→ Centered overlay/modal

MODE 2:
Mobile

→ Bottom overlay / bottom sheet

The content, visual language, text field placement and interaction
logic remain consistent between both modes.

Only the viewport presentation changes.


======================================================
4. DESKTOP REFERENCE FRAME
======================================================

Reference:

1440 × 900

Use this as the primary design reference.

The underlying Billing screen remains visible behind the overlay
with a dimmed backdrop.

The Customer overlay is centered horizontally and vertically
within the available application viewport.

The overlay should have:

- Large white surface
- Rounded corners
- Subtle shadow
- Clear separation from Billing background
- Strong but clean visual hierarchy


IMPORTANT:

The 1440 × 900 frame is a Figma reference frame.

Do NOT hardcode the application to this size.

The overlay must adapt to the actual available viewport.


======================================================
5. TABLET REFERENCE
======================================================

Reference:

1024 × 768

Tablet uses the SAME overlay design as Desktop.

Do NOT create:

- Tablet-specific workflow
- Tablet-specific components
- Tablet-specific navigation
- Mobile-style customer screen

Only dimensions and available space may adapt.

The same overlay hierarchy and field placement must remain.


======================================================
6. MOBILE REFERENCE
======================================================

Reference:

390 × 844

Secondary supported width:

360px+

Mobile uses a bottom-overlay / bottom-sheet presentation.

The sheet should extend almost to the top of the screen.

Leave only a small visual gap between the top of the viewport
and the overlay.

Do NOT make it a small bottom popup.

The mobile Customer Selection experience should feel like a
full-screen task while still visually communicating that it is
an overlay.


======================================================
7. DESKTOP/TABLET OVERLAY STRUCTURE
======================================================

Conceptual structure:

┌───────────────────────────────────────────────┐
│ ←  Select Customer                         X │
│    Search customer or enter details           │
├───────────────────────────────────────────────┤
│                                               │
│  1. Search Customer (name / phone number)     │
│                                               │
│  Search field                                 │
│                                               │
│  X customer(s) found                          │
│                                               │
│  Customer result 1                            │
│  Customer result 2                            │
│  Customer result 3 ...                        │
│                                               │
│  Search by name instead  ↔                    │
│                                               │
│  ───────────────── OR ─────────────────       │
│                                               │
│  2. Enter Customer Details                    │
│                                               │
│  Customer Name                                │
│  Phone Number (Optional)                      │
│  Notes (Optional)                             │
│                                               │
│  Use This Customer                            │
│                                               │
│  Customer will be saved and selected          │
│  for this bill                                │
│                                               │
├───────────────────────────────────────────────┤
│ ◉  Walk-In Customer                           │
│    No customer information required  Default  │
├───────────────────────────────────────────────┤
│ Selected Customer                             │
│ Ravi Kumar (98765 43210)     [Confirm & Use] │
└───────────────────────────────────────────────┘


======================================================
8. MOBILE STRUCTURE
======================================================

Mobile uses the same content but as a bottom overlay.

Conceptual structure:

┌───────────────────────────────┐
│                               │
│        small top gap          │
├───────────────────────────────┤
│ ← Select Customer           X │
│   Search customer or          │
│   enter details               │
├───────────────────────────────┤
│ 1. Search Customer            │
│                               │
│ Search field                  │
│                               │
│ Results                       │
│                               │
│ Customer 1                    │
│ Customer 2                    │
│                               │
│ Search by name instead        │
│                               │
│ ───────── OR ─────────        │
│                               │
│ 2. Enter Customer Details     │
│                               │
│ Customer Name                 │
│ Phone Number (Optional)       │
│ Notes (Optional)              │
│                               │
│ Use This Customer             │
│                               │
│ Walk-In Customer              │
│                               │
│ Selected Customer             │
│ Confirm & Use                 │
└───────────────────────────────┘

The exact field placement should follow the approved mobile mock.

Do not rearrange fields simply to make the mobile layout
look like a generic form.


======================================================
9. OVERLAY BACKDROP
======================================================

Desktop/Tablet:

When the Customer overlay opens:

- Billing screen remains visible behind it
- Apply a dark/translucent backdrop
- Background interaction is disabled
- Overlay receives focus

The backdrop should dim the Billing screen enough to clearly
communicate modal focus.

Do not completely hide the Billing context.

Mobile:

Use the bottom-sheet presentation.

The underlying Billing screen may remain visible only in the
small area above the sheet if applicable.

The Customer task receives full interaction focus.


======================================================
10. OVERLAY CONTAINER
======================================================

Desktop/Tablet:

- Center aligned
- White background
- Rounded corners
- Large radius approximately 16–24px
- Subtle shadow
- Width should adapt to viewport
- Use a sensible maximum width
- Do not stretch across the entire desktop

The overlay should feel substantial enough for the customer
workflow without becoming unnecessarily wide.


Mobile:

- Width: Fill
- Bottom aligned
- Top corners rounded
- Large top radius approximately 20–24px
- Almost full viewport height
- Small top gap
- No large empty area at bottom


======================================================
11. AUTO LAYOUT
======================================================

Use Figma Auto Layout throughout.

OVERLAY ROOT:

Desktop:
- Vertical Auto Layout
- Width: Fill within max-width
- Height: Hug / constrained by viewport

Mobile:
- Vertical Auto Layout
- Width: Fill
- Height: approximately viewport minus small top gap


HEADER:

- Horizontal Auto Layout
- Align center vertically
- Space between left and right controls


CONTENT:

- Vertical Auto Layout
- Width: Fill
- Consistent section spacing


SEARCH RESULTS:

- Vertical Auto Layout
- Width: Fill
- Height: Hug when all results fit
- Height: constrained when available space is limited


FORM:

- Vertical Auto Layout
- Width: Fill


FOOTER / CONFIRMATION:

- Horizontal Auto Layout on Desktop/Tablet
- Vertical or stacked where required on Mobile


======================================================
12. HEADER
======================================================

Title:

Select Customer

Supporting text:

Search customer or enter details


LEFT:

Back Arrow

RIGHT:

Close X


Header hierarchy:

[Back]  Select Customer                         [X]
         Search customer or enter details


Desktop:
- Comfortable horizontal padding
- Title approximately 28–32px in the large reference mock
- Supporting text approximately 16–18px


Mobile:
- Reduce typography appropriately
- Preserve the same hierarchy
- Keep controls touch friendly


ICON:

Back:
Arrow Left

Close:
X


Touch target:
Minimum 44 × 44px


======================================================
13. SEARCH SECTION
======================================================

Section heading:

1. Search Customer (name / phone number)


This is the PRIMARY customer lookup mechanism.


SEARCH FIELD:

Placeholder:

Search customer by name / phone number


Use:
- Search icon on left
- Text input
- Clear X on right when text exists


The search field should have:
- White background
- Light neutral border
- Rounded corners
- Strong focus state
- Comfortable height
- Clear typography


Desktop:
approximately 48–56px height


Mobile:
approximately 48–52px height


======================================================
14. SEARCH INPUT BEHAVIOR
======================================================

IMPORTANT:

DO NOT immediately update customer results on every keystroke.

Use debounced search.

Behavior:

User starts typing
        ↓
Continue typing
        ↓
No result refresh after every character
        ↓
User stops typing
        ↓
Wait approximately 400–600ms
        ↓
Perform local customer search
        ↓
Display results


Recommended debounce:
approximately 500ms


If the user types again before the debounce period completes:

RESET the timer.


Example:

User types:

9
98
987
9876
98765

Do NOT run five separate visible searches.

After the user pauses:

→ Search
→ Display matching customers


======================================================
15. SEARCH DATA SOURCE
======================================================

BizCopilot is offline-first.

Customer search should work against the customer data available
locally on the device.

Do not require a network round-trip merely to search locally
available customers.

The UI should feel immediate.

If the implementation later uses a remote search for data that
is not locally available, retain the same debounce behavior.


======================================================
16. SEARCH MINIMUM INPUT
======================================================

Do not search for an empty string.

Prefer not to perform expensive search for a single character.

Recommended:

- 0 characters → no results
- 1 character → wait / no result list
- 2+ characters → eligible for debounced search


The exact minimum can be implementation-configurable, but the
UX must avoid noisy result changes while typing.


======================================================
17. SEARCH RESULT COUNT
======================================================

When results are found:

Display:

X customer(s) found


Examples:

1 customer found

2 customers found

5 customers found


Use grammatically appropriate singular/plural text.


======================================================
18. CUSTOMER SEARCH RESULT CARD
======================================================

Each customer result displays:

AVATAR
- Initials

CUSTOMER NAME
Example:
Ravi Kumar

PHONE
Example:
98765 43210

CUSTOMER ID
Example:
CUST001

CUSTOMER SINCE
Example:
Since 12 Jan 2024

SELECTION CONTROL:
Radio button


Structure:

┌──────────────────────────────────────────────┐
│ RK   Ravi Kumar                           ◉ │
│      98765 43210                            │
│      CUST001 • Since 12 Jan 2024            │
└──────────────────────────────────────────────┘


======================================================
19. CUSTOMER RESULT SELECTED STATE
======================================================

Selected customer:

- Purple border
- Subtle light-purple background
- Purple radio
- Strong customer name
- Clear selected state


Unselected:

- Neutral border
- White background
- Empty radio
- Normal text


Selection must be obvious without relying only on color.


======================================================
20. CUSTOMER RESULT CARD DIMENSIONS
======================================================

Desktop/Tablet:

- Width: Fill
- Height approximately 110–140px depending on typography
- Padding approximately 16–20px
- Radius approximately 12–14px


Mobile:

- Width: Fill
- Height approximately 90–120px
- Padding approximately 14–16px


Avatar:

Approximately 48–56px desktop

Approximately 44–48px mobile


======================================================
21. CUSTOMER AVATAR
======================================================

Use initials.

Example:

Ravi Kumar
→ RK

Ramesh Mehta
→ RM


Avatar:
- Circular
- Soft tinted background
- Strong readable initials
- Consistent size


Do not use random profile images.


======================================================
22. SEARCH RESULT SCROLLING — IMPORTANT
======================================================

THIS IS A FROZEN BEHAVIOR.

Do NOT automatically add a scrollbar just because there are
more than two search results.

The scrolling decision is based on AVAILABLE SPACE.

RULE:

If all customer search results fit inside the available overlay
space:

→ NO SCROLLBAR


If the overlay does not have enough vertical space to display
all search results:

→ ONLY THE SEARCH RESULT AREA becomes scrollable.


DO NOT scroll the entire overlay.

DO NOT scroll the entire page.


======================================================
23. SEARCH RESULT INTERNAL SCROLL
======================================================

Example:

┌───────────────────────────────┐
│ Header                    X   │ ← FIXED
├───────────────────────────────┤
│ Search field                  │ ← FIXED
│                               │
│ 5 customers found             │ ← FIXED
│ ┌───────────────────────────┐ │
│ │ Customer 1                │ │
│ │ Customer 2                │ │
│ │ Customer 3                │ │
│ │ Customer 4             ↕  │ │
│ │ Customer 5                │ │ ← ONLY THIS AREA scrolls
│ └───────────────────────────┘ │
│                               │
│ Search by name instead        │ ← FIXED
│ OR                            │ ← FIXED
│ Enter Customer Details        │ ← FIXED
│ Name                          │
│ Phone                         │
│ Notes                         │
│ Use This Customer             │
│ Walk-In Customer              │
│ Selected Customer             │
│ Confirm & Use                 │
└───────────────────────────────┘


The search-result container gets the available height.

The remainder of the overlay remains fixed.


======================================================
24. OVERLAY HEIGHT CALCULATION
======================================================

The overlay must adapt based on:

- Viewport height
- Header height
- Search field
- Number of search results
- Customer details section
- Walk-In section
- Selected Customer section
- Bottom action


When there is enough space:

→ Show results naturally.

When there is insufficient space:

→ Constrain only the result list.

→ Introduce an internal scrollbar in the result list.


Do NOT force the entire overlay to scroll.


======================================================
25. SEARCH BY NAME INSTEAD
======================================================

Provide the approved secondary search option:

Search by name instead

Include the approved switch/exchange icon.

This allows the user to change the search mode.

The interaction should switch the search field behavior between
phone-oriented and name-oriented search without opening a
separate page.


Do not create a separate customer screen.


======================================================
26. OR DIVIDER
======================================================

Between:

Search Customer

and

Enter Customer Details

use:

──────────── OR ────────────


The divider must be visually subtle.

"OR" is centered.

Use:
- Thin neutral divider
- Medium-weight OR text
- Consistent spacing


======================================================
27. ENTER CUSTOMER DETAILS
======================================================

Section title:

2. Enter Customer Details


This section allows the cashier to create/use a new customer
for the current bill.


Fields:

1. Customer Name
2. Phone Number (Optional)
3. Notes (Optional)


======================================================
28. CUSTOMER NAME FIELD
======================================================

Placeholder:

Customer Name


Icon:

User


Rules:

- Customer name is the primary identity field
- Clear label/placeholder
- Full width
- Standard input height
- Rounded border


======================================================
29. PHONE FIELD
======================================================

Phone field:

Phone Number (Optional)


Left section:

+91
dropdown indicator


Right section:

Phone Number (Optional)


Structure:

┌────────────┬──────────────────────────────┐
│ ☎ +91 ▼   │ Phone Number (Optional)      │
└────────────┴──────────────────────────────┘


Phone is OPTIONAL.

Do not make phone mandatory.

The user must be able to create/use a customer without entering
a phone number if the business configuration allows it.


======================================================
30. PHONE COUNTRY CODE
======================================================

Default:

+91

Show:
- Phone icon
- +91
- Dropdown arrow


Do not add a large country selector UI unless explicitly opened.


======================================================
31. NOTES FIELD
======================================================

Placeholder:

Notes (Optional)


Icon:

Notes / File Text


Textarea.

Character counter:

0 / 100


Maximum:

100 characters


Notes are optional.


======================================================
32. USE THIS CUSTOMER BUTTON
======================================================

Primary action for creating/using entered customer details:

Use This Customer


Style:

- Purple primary color
- White or appropriate primary text
- Full width
- Rounded corners
- Strong but not oversized


Supporting text below:

Customer will be saved and selected for this bill


Meaning:

The entered customer is created/saved and immediately selected
for the current bill.


======================================================
33. USE THIS CUSTOMER VALIDATION
======================================================

If required customer information is missing:

- Show field validation
- Keep button disabled or prevent submission according
  to implementation standards
- Clearly identify the missing field


Do not show aggressive error messaging.


Phone remains optional.


======================================================
34. WALK-IN CUSTOMER
======================================================

Walk-In Customer is a special customer option.

Display:

[Radio]
[Walk-In icon]

Walk-In Customer

No customer information required

Badge:

Default


Structure:

┌──────────────────────────────────────────────┐
│ ◉   🚶   Walk-In Customer              Default│
│          No customer information required    │
└──────────────────────────────────────────────┘


Walk-In is the default customer state when no customer has been
selected for the bill.


======================================================
35. WALK-IN BEHAVIOR
======================================================

Selecting Walk-In Customer:

- Clears any previously selected named customer
- Customer information is not required
- Bill uses Walk-In Customer
- Return to Billing Cart after confirmation


If the cashier selects a named customer:

→ Walk-In is deselected.


Only one customer can be selected for the bill.


======================================================
36. SELECTED CUSTOMER SUMMARY
======================================================

At the bottom of the overlay show:

Selected Customer


Example:

Ravi Kumar (98765 43210)


Selected customer name should use the approved success/positive
visual treatment.

If Walk-In is selected:

Selected Customer

Walk-In Customer


Do not display unnecessary customer details.


======================================================
37. CONFIRM & USE
======================================================

Final confirmation action:

Confirm & Use


This confirms the currently selected customer and applies it
to the active bill.


Primary button:
- Purple
- White text
- Strong visual hierarchy
- Rounded
- Touch friendly


Desktop/Tablet:
Place in the bottom confirmation area.


Mobile:
Use the approved mobile placement and ensure it remains
accessible without obscuring customer information.


======================================================
38. CUSTOMER SELECTION WORKFLOW
======================================================

FLOW A — EXISTING CUSTOMER

Billing Cart
↓
Click Customer / Change
↓
Customer Overlay
↓
Search
↓
Debounce
↓
Results
↓
Select customer
↓
Confirm & Use
↓
Return to Billing Cart
↓
Customer section updates


======================================================
39. FLOW B — NEW CUSTOMER
======================================================

Billing Cart
↓
Customer Overlay
↓
Enter Customer Details
↓
Name
↓
Optional Phone
↓
Optional Notes
↓
Use This Customer
↓
Customer saved
↓
Customer selected
↓
Confirm & Use
↓
Return to Billing Cart


======================================================
40. FLOW C — WALK-IN
======================================================

Billing Cart
↓
Customer Overlay
↓
Walk-In Customer
↓
Confirm & Use
↓
Return to Billing Cart


Walk-In requires no customer information.


======================================================
41. FLOW D — SEARCH BY PHONE
======================================================

User opens Customer Overlay.

Search field:
Search customer by name / phone number

User enters:

98765 43210

System waits for approximately 500ms after typing stops.

Then:

Search local customer data.

Show matching customer(s).


======================================================
42. FLOW E — SEARCH BY NAME
======================================================

User selects:

Search by name instead

Search mode changes to name-oriented search.

User enters:

Ravi

Wait approximately 500ms after typing stops.

Show matching customers.


======================================================
43. FLOW F — NO SEARCH RESULTS
======================================================

If no customer matches:

Show:

No customer found


Provide a clear path to:

Enter Customer Details


Do not show an empty result container.

Do not show a fake customer card.


======================================================
44. FLOW G — ONE SEARCH RESULT
======================================================

If exactly one result exists:

Display:

1 customer found

Show the single customer card.

Do not add a scrollbar.


======================================================
45. FLOW H — TWO SEARCH RESULTS
======================================================

If two results exist:

Display:

2 customers found

Show both.

No scrollbar if they fit naturally.


======================================================
46. FLOW I — MANY SEARCH RESULTS
======================================================

If many results exist:

Display as many as available within the search result area.

If everything fits:

→ No scrollbar.

If the overlay does not have enough room:

→ Search result container becomes internally scrollable.

Only that area scrolls.


======================================================
47. FLOW J — CUSTOMER ALREADY SELECTED
======================================================

When opening the Customer overlay from Billing and a customer
is already selected:

- Existing customer should be visually selected
- Selected Customer summary should reflect it
- User can change selection
- User can switch to Walk-In
- User can select another customer
- User can create/use another customer


======================================================
48. FLOW K — CHANGE CUSTOMER
======================================================

From Billing Cart:

Customer:
Ravi Kumar
[Change]

Click Change.

Open the same Customer Selection overlay.

Do NOT create a second customer screen.

Current customer is shown as selected.

User can select:
- Another customer
- Walk-In
- New customer


======================================================
49. FLOW L — CLOSE WITHOUT CHANGING
======================================================

If the user clicks:

X

or Back

without confirming:

Close overlay.

Preserve the existing customer selection.

Do not modify the bill.


======================================================
50. CUSTOMER DATA RULES
======================================================

Customer information may include:

- Customer ID
- Name
- Phone
- Notes
- Created date


Example:

CUST001
Ravi Kumar
98765 43210
Since 12 Jan 2024


Do not expose unnecessary backend fields.


======================================================
51. BILLING CART INTEGRATION
======================================================

After confirmation:

The Customer section in the Billing Cart must immediately update.

Example:

Before:

Customer
Walk-In Customer
[Change]


After:

Customer
Ravi Kumar
98765 43210
[Change]


The selected customer belongs to the current bill.


======================================================
52. OWNER CONFIGURATION
======================================================

Customer information capture can be controlled by the business
configuration.

The application supports a feature flag/configuration allowing
the Owner to enable or disable customer information capture.

Phone number is NOT universally mandatory.

Do not assume every business requires customer phone numbers.


======================================================
53. NO CUSTOMER INFORMATION MODE
======================================================

If customer information capture is disabled:

Walk-In Customer remains the simple default.

The UI should not force unnecessary customer collection.


======================================================
54. RESPONSIVE DESKTOP BEHAVIOR
======================================================

Desktop:

- Center overlay
- Comfortable width
- Large readable fields
- Full customer result cards
- Bottom confirmation area


Do not make the overlay full-screen on desktop.


======================================================
55. RESPONSIVE TABLET BEHAVIOR
======================================================

Tablet:

Use the same Desktop overlay structure.

Adapt:

- Width
- Padding
- Result card dimensions
- Vertical spacing

Do not switch to the mobile bottom-sheet structure.


======================================================
56. RESPONSIVE MOBILE BEHAVIOR
======================================================

Mobile:

- Bottom overlay
- Almost full viewport height
- Small top gap
- Full width
- Top corners rounded
- Single-column flow
- Large touch targets


Do not use desktop's wide horizontal layout.


======================================================
57. MOBILE FIELD STRUCTURE
======================================================

Mobile fields remain in the same logical order:

Search
↓
Search Results
↓
Search by name instead
↓
OR
↓
Enter Customer Details
↓
Customer Name
↓
Phone Number
↓
Notes
↓
Use This Customer
↓
Walk-In Customer
↓
Selected Customer
↓
Confirm & Use


Do not move Notes above Customer Name.

Do not move Phone above Customer Name.


======================================================
58. MOBILE SCROLLING
======================================================

Mobile may require vertical scrolling because the Customer overlay
contains many sections.

However:

If search results require scrolling because of limited space:

→ Only search results scroll internally.

Avoid unnecessary nested scroll areas.

Do not create a horizontal scrollbar.


======================================================
59. LARGE DESKTOP / 4K BEHAVIOR
======================================================

At 2560px / 4K:

DO NOT:

- Stretch the customer overlay across the screen
- Make fields excessively wide
- Increase typography excessively
- Introduce a page scrollbar
- Create huge empty areas


Keep the overlay at a sensible maximum width.

Maintain the visual density of the approved mock.


======================================================
60. SMALL DESKTOP / 13-INCH BEHAVIOR
======================================================

At smaller desktop sizes:

DO NOT:

- Force the 1440×900 frame
- Clip bottom actions
- Hide Confirm & Use
- Create unnecessary whole-page scrolling


If vertical space is insufficient:

→ Constrain the search result area.

→ Let ONLY search results scroll.


======================================================
61. VISUAL STYLE
======================================================

Overall style:

- Modern
- Premium
- Clean
- Professional
- POS-focused
- Minimal
- Fast


Background:
White / very light neutral


Primary:
BizCopilot Purple


Selected:
Light purple surface + purple border


Success:
Green


Text:
Dark navy


Secondary:
Muted slate


Borders:
Very light neutral


Shadows:
Subtle


======================================================
62. TYPOGRAPHY
======================================================

Use the existing BizCopilot typography system.

Recommended:

Large overlay title:
28–32px desktop reference

Mobile title:
22–26px


Section title:
18–20px


Body:
14–16px


Secondary:
12–14px


Button:
14–16px semibold


Customer name:
16–18px semibold


Customer metadata:
13–15px


The approved mock's hierarchy takes priority over arbitrary
typographic scaling.


======================================================
63. SPACING TOKENS
======================================================

Use:

4px
8px
12px
16px
20px
24px
32px


Primary spacing:

Section:
20–24px

Field gap:
12px

Card internal padding:
16–20px

Overlay padding:
24px desktop

Overlay padding:
16px mobile


======================================================
64. RADIUS
======================================================

Overlay:
16–24px


Customer result card:
12–14px


Input:
8–10px


Button:
8–10px


Mobile bottom-sheet:
20–24px top corners


======================================================
65. ICON SYSTEM
======================================================

Use a single consistent outline icon family.

Icons:

Back:
Arrow Left

Close:
X

Search:
Search

Clear:
X

Customer:
User

Phone:
Phone

Notes:
File Text / Clipboard

Walk-In:
Person Walking / User

Switch Search:
Arrow Left Right / Switch

Radio:
Circle / selected radio

Confirm:
Check


Icon size:

18–22px standard

24px for prominent controls


Touch targets:
minimum 44 × 44px


======================================================
66. SEARCH STATES
======================================================

Create variants:

Search / Empty
Search / Typing
Search / Searching
Search / Results
Search / No Results
Search / Error


TYPING:

Do not display changing results after every key.


SEARCHING:

Only show loading feedback if the local search actually takes
noticeable time.

For normal fast local searches, avoid unnecessary spinners.


RESULTS:

Show customer result cards.


NO RESULTS:

Show:
No customer found


======================================================
67. CUSTOMER CARD STATES
======================================================

Create variants:

Customer / Default
Customer / Hover
Customer / Selected
Customer / Pressed
Customer / Disabled


Selected:
Purple border/background.


======================================================
68. INPUT STATES
======================================================

Create:

Default
Focused
Filled
Error
Disabled


Focus:
Purple border / appropriate focus ring.


Error:
Red border + concise validation message.


======================================================
69. BUTTON STATES
======================================================

Use:

Default
Hover
Pressed
Disabled
Loading


Primary:
Purple


Disabled:
Muted neutral/purple


======================================================
70. WALK-IN STATES
======================================================

Walk-In:

Default
Selected


Selected:
Purple radio
Appropriate highlighted surface


======================================================
71. OVERLAY STATES
======================================================

Overlay:

Opening
Default
Searching
Results
No Results
Creating Customer
Selected
Closing


The overlay itself should remain visually stable while search
results update.


======================================================
72. COMPONENT ARCHITECTURE
======================================================

Create reusable Figma components.

PRIMARY:

CustomerOverlay

SUBCOMPONENTS:

CustomerHeader
SearchCustomerSection
CustomerSearchInput
SearchModeSwitch
SearchResultList
CustomerResultCard
CustomerAvatar
CustomerDetailsSection
CustomerNameInput
PhoneInput
CountryCodeSelector
CustomerNotesInput
UseCustomerButton
WalkInCustomerOption
SelectedCustomerSummary
ConfirmUseButton


======================================================
73. COMPONENT VARIANTS
======================================================

CustomerOverlay:

Desktop
Tablet
Mobile


CustomerSearchInput:

Empty
Typing
Filled
Searching
Error


CustomerResultList:

Empty
OneResult
MultipleResults
Scrollable
NoResults


CustomerResultCard:

Default
Selected
Pressed


WalkInCustomer:

Default
Selected


CustomerDetails:

Empty
PartiallyFilled
Complete
ValidationError


ConfirmUse:

Disabled
Enabled
Loading


======================================================
74. FIGMA LAYER STRUCTURE
======================================================

Use clear layer names.

Desktop:

CustomerOverlay
│
├── Backdrop
│
└── OverlayContainer
    │
    ├── Header
    │   ├── BackButton
    │   ├── Title
    │   ├── Subtitle
    │   └── CloseButton
    │
    ├── SearchSection
    │   ├── SectionTitle
    │   ├── SearchInput
    │   ├── ResultCount
    │   └── SearchResultList
    │       └── CustomerResultCard
    │
    ├── SearchByName
    │
    ├── ORDivider
    │
    ├── CustomerDetails
    │   ├── SectionTitle
    │   ├── CustomerName
    │   ├── Phone
    │   ├── Notes
    │   ├── UseThisCustomer
    │   └── SupportingText
    │
    ├── WalkInCustomer
    │
    └── Confirmation
        ├── SelectedCustomer
        └── ConfirmAndUse


======================================================
75. MOBILE LAYER STRUCTURE
======================================================

CustomerBottomSheet
│
├── TopGap
│
└── BottomSheet
    │
    ├── Header
    ├── SearchSection
    ├── SearchResultList
    ├── SearchByName
    ├── ORDivider
    ├── CustomerDetails
    ├── WalkInCustomer
    └── Confirmation


======================================================
76. ACCESSIBILITY
======================================================

All interactive controls:

- Minimum 44 × 44px touch target
- Clear focus state
- Keyboard accessible
- Screen-reader-friendly labels
- Do not rely solely on color to indicate selection


Radio buttons must clearly communicate selected/unselected.


======================================================
77. ERROR HANDLING
======================================================

SEARCH ERROR:

Show:

Unable to search customers

Provide retry or allow manual customer entry.


INVALID CUSTOMER:

Show concise field-level validation.


NO NETWORK:

Do not block locally available customer search.

The experience is designed for offline-first operation.


======================================================
78. PERFORMANCE UX
======================================================

Customer search must feel instant.

Use approximately 500ms debounce.

Do not:

- Search after every key
- Flicker result lists
- Rebuild the entire overlay unnecessarily
- Show loading spinners for trivial local operations


Result updates should occur smoothly.


======================================================
79. IMPORTANT CONTENT RULES
======================================================

Use the approved text.

Header:

Select Customer

Subtitle:

Search customer or enter details


Search:

1. Search Customer (name / phone number)


Alternative:

Search by name instead


Form:

2. Enter Customer Details


Fields:

Customer Name

Phone Number (Optional)

Notes (Optional)


Action:

Use This Customer


Supporting text:

Customer will be saved and selected for this bill


Walk-In:

Walk-In Customer

No customer information required

Default


Confirmation:

Selected Customer

Confirm & Use


Do not invent additional labels.


======================================================
80. DO NOT ADD
======================================================

DO NOT ADD:

- All Customers sidebar
- Customer navigation menu
- Customer dashboard
- Customer segmentation
- Loyalty information
- Purchase history
- Credit balance
- Customer address
- Email field
- GST field
- Date of birth
- Marketing preferences
- Customer tags
- Customer analytics
- Duplicate search
- Advanced filters
- Sort dropdown
- Pagination
- Full-page customer management
- Unrequested customer profile information


This is a fast customer selection experience,
NOT a customer management screen.


======================================================
81. FROZEN SEARCH UX
======================================================

FINAL SEARCH RULE:

User types name or phone.

Results do NOT update on every keystroke.

Wait approximately 500ms after the user stops typing.

Then populate matching customers.

This prevents noisy UI updates while maintaining a fast POS
experience.


======================================================
82. FROZEN SCROLL UX
======================================================

FINAL SCROLL RULE:

Number of results alone does NOT determine whether a scrollbar
appears.

Available overlay space determines it.

If results fit:

→ No scrollbar.

If results do not fit:

→ ONLY SearchResultList scrolls.

Everything else stays fixed.


Never create:

→ Whole overlay scrollbar

or:

→ Whole page scrollbar

merely because there are many customers.


======================================================
83. FROZEN DESKTOP/TABLET DESIGN
======================================================

Desktop and Tablet:

→ Centered overlay

→ Same structure

→ Same content

→ Same field placement

→ Same customer result cards

→ Same Walk-In section

→ Same Selected Customer section

→ Same Confirm & Use action


Tablet only adapts dimensions.


======================================================
84. FROZEN MOBILE DESIGN
======================================================

Mobile:

→ Bottom overlay

→ Almost full screen

→ Small top gap

→ Rounded top corners

→ Same approved field ordering

→ Same text

→ Same search behavior

→ Same customer selection behavior

→ Same Walk-In behavior

→ Same confirmation behavior


Do not turn mobile into a generic full-screen form.


======================================================
85. FINAL CUSTOMER FLOW
======================================================

BILLING CART

Customer section
        ↓
Customer / Change
        ↓
CUSTOMER OVERLAY
        ↓
Search existing customer
        OR
Enter customer details
        OR
Walk-In Customer
        ↓
Select customer
        ↓
Selected Customer summary
        ↓
Confirm & Use
        ↓
RETURN TO BILLING CART
        ↓
Customer section updates


======================================================
86. FINAL QUALITY BAR
======================================================

The result must look like a production-grade POS customer
selection component.

Characteristics:

- Fast
- Clean
- Minimal
- Easy to scan
- Touch friendly
- Professional
- Consistent with BizCopilot Billing
- Responsive
- Offline-first friendly
- No unnecessary navigation
- No duplicate customer functionality
- No unnecessary scrolling


======================================================
87. FINAL NON-NEGOTIABLE RULES
======================================================

1. Desktop and Tablet use the SAME overlay design.

2. Mobile uses a bottom-overlay design.

3. Mobile overlay extends almost to the top.

4. Leave only a small top gap on mobile.

5. There is NO left-side customer list.

6. Customer search and customer creation exist inside the
   same overlay.

7. Search supports name and phone number.

8. Search by name option must be available.

9. Phone number is OPTIONAL.

10. Notes are OPTIONAL.

11. Walk-In Customer is supported.

12. Walk-In requires no customer information.

13. Walk-In is the default customer state.

14. Only one customer can be selected for a bill.

15. Existing customer selection must be visually highlighted.

16. New customer can be saved and immediately selected.

17. Confirm & Use applies the customer to the current bill.

18. Closing without confirmation must not change the bill.

19. Search results must use approximately 500ms debounce.

20. Results must NOT refresh after every keystroke.

21. Results > 2 does NOT automatically create a scrollbar.

22. Scrollbar is introduced ONLY when available overlay space
    is insufficient.

23. ONLY the search-result area may scroll.

24. The entire overlay must NOT scroll because of search results.

25. The entire page must NOT scroll because of search results.

26. Do not create unnecessary page-level scrollbars.

27. Desktop overlay should not stretch across the entire screen.

28. 4K must not create huge stretched content.

29. Small desktop must not clip the confirmation action.

30. Tablet must not switch to mobile layout.

31. Mobile must not simply be a shrunken desktop layout.

32. Do not add unrelated customer-management features.

33. Do not add navigation menu UI.

34. Use reusable Figma components and variants.

35. Use Auto Layout.

36. Use responsive constraints.

37. Preserve the approved mock's visual hierarchy,
    text, field placement, spacing and interaction model.


======================================================
FINAL FIGMA INSTRUCTION
======================================================

Create the complete BizCopilot Customer Selection experience.

PRIMARY FRAMES:

1. Desktop — Customer Overlay
2. Tablet — Same Customer Overlay, responsive
3. Mobile — Customer Bottom Overlay

STATES TO REPRESENT:

4. Empty / Walk-In Default
5. Searching
6. One Search Result
7. Multiple Search Results
8. Many Search Results with Internal Result Scroll
9. No Search Results
10. Existing Customer Selected
11. Enter Customer Details
12. New Customer Ready
13. Validation Error
14. Walk-In Selected
15. Final Selected Customer
16. Confirm & Use


IMPORTANT:

Do not create separate customer-management screens.

Do not create a left-side customer list.

Do not introduce a scrollbar simply because result count exceeds
two.

The search-result list must become independently scrollable only
when the available overlay height cannot accommodate all results.

The Header, Search controls, Customer Details, Walk-In Customer,
Selected Customer and Confirm & Use sections remain fixed.

The design must reproduce the previously frozen Customer mock
screens with 100% fidelity while remaining responsive to the
actual viewport.

END OF MASTER CUSTOMER SELECTION SPECIFICATION