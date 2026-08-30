BIZCOPILOT — PAYMENT SCREEN
MASTER FIGMA UI/UX + FUNCTIONAL DESIGN SPECIFICATION
========================================================

DOCUMENT STATUS
---------------
STATUS: FROZEN DESIGN SPECIFICATION

This is the master specification for the BizCopilot Payment screen.

The design must reproduce the previously approved/frozen mockups and interaction behavior.

DO NOT redesign the screen.
DO NOT introduce additional sections.
DO NOT remove approved sections.
DO NOT invent alternative payment workflows.
DO NOT collect card details.
DO NOT create a separate tablet design.
DO NOT shrink the desktop design to create mobile.

The final Figma output must be production-quality and implementation-ready.

The screen must be responsive and behave correctly across:
- Desktop
- Tablet
- Mobile

Desktop and Tablet use the SAME structural design.

Mobile uses a DIFFERENT dedicated Payment page layout.


========================================================
1. PRODUCT CONTEXT
========================================================

Product:
BizCopilot

BizCopilot is an offline-first billing/POS application for small businesses in India.

The Payment screen is reached from the Billing screen after the cashier has:
1. Added products
2. Reviewed the cart
3. Selected customer if applicable
4. Applied an offer if applicable
5. Clicked Proceed to Pay

Payment is the final stage before the bill becomes a completed sale.

Primary goal:

SELECT PAYMENT METHOD
        ↓
COMPLETE PAYMENT
        ↓
MARK BILL AS PAID

The screen must optimize for:
- Speed
- Minimal typing
- Clear payable amount
- Simple cashier interaction
- Large touch targets
- Low cognitive load
- Reliable payment confirmation


========================================================
2. PAYMENT METHODS
========================================================

There are exactly FOUR payment methods:

1. CASH
2. UPI
3. CARD
4. MIXED

All four must be supported.

Payment Method Selector must clearly show:
- Icon
- Method name
- Selected/unselected state

Selected payment method:
- Purple border
- Light purple background
- Purple icon/accent
- Filled purple radio/selection indicator

Unselected:
- White background
- Light neutral border
- Dark text
- Empty radio indicator


========================================================
3. VIEWPORT / FRAME STRUCTURE
========================================================

IMPORTANT:

Desktop and Tablet MUST use the SAME layout structure.

Mobile MUST use a dedicated mobile structure.

Do not simply scale one frame into another.


--------------------------------------------------------
3A. DESKTOP REFERENCE FRAME
--------------------------------------------------------

Reference design frame:

1440 × 900

This is the primary Figma reference frame for the frozen desktop design.

Root:
- Width: Fill container
- Height: Fill viewport
- Vertical layout
- Background: very light neutral/white

The Payment screen should occupy the available application viewport.

Do NOT create a fixed 900px-height implementation that causes scrolling on smaller screens.

1440 × 900 is a design reference, not a hardcoded runtime height.


--------------------------------------------------------
3B. DESKTOP RESPONSIVE RANGE
--------------------------------------------------------

Desktop layout applies from approximately:

1024px width and above

At smaller desktop widths:
- Keep the same two-column structure
- Reduce internal spacing when necessary
- Allow columns to flex
- Do not switch to mobile layout prematurely
- Do not introduce horizontal scrolling


--------------------------------------------------------
3C. TABLET REFERENCE FRAME
--------------------------------------------------------

Reference tablet frame:

1024 × 768

Tablet MUST use the SAME STRUCTURAL LAYOUT as Desktop.

Do NOT create:
- Separate tablet navigation
- Separate tablet payment workflow
- Separate tablet component hierarchy

Tablet only adjusts:
- Available widths
- Padding
- Column proportions
- Internal spacing
- Content sizing

The two-column payment structure remains.


--------------------------------------------------------
3D. MOBILE REFERENCE FRAME
--------------------------------------------------------

Primary mobile reference:

390 × 844

Secondary supported width:

360px+

Mobile is a dedicated full-screen Payment page.

Do NOT use the desktop two-column layout.

Use:

Vertical Auto Layout
↓
Header
↓
Bill Summary
↓
Payment Method
↓
Dynamic Payment Panel
↓
Payment Note
↓
Primary Payment Action


Mobile content may scroll vertically when required.

Do not introduce unnecessary nested scrolling.


========================================================
4. RESPONSIVE BREAKPOINT BEHAVIOR
========================================================

Use responsive behavior approximately as follows:

DESKTOP / TABLET:
≥ 1024px
→ Desktop structure

MOBILE:
< 1024px
→ Dedicated mobile structure

The exact breakpoint may be adjusted slightly by implementation if necessary, but the structural rule must remain:

Desktop + Tablet = SAME DESIGN

Mobile = DIFFERENT DESIGN


========================================================
5. GLOBAL PAGE STRUCTURE — DESKTOP/TABLET
========================================================

Use:

ROOT
│
├── Payment Header
│
└── Main Content
    │
    ├── Left Column
    │   ├── Bill Summary Card
    │   └── Payment Method Card
    │
    └── Right Column
        ├── Dynamic Payment Panel
        ├── Payment Note
        └── Payment Action Footer


Main Content:
- Horizontal Auto Layout
- Width: Fill
- Height: Fill
- Gap: 16–24px

Left column:
- Preferred width approximately 360–400px
- Flexible within reasonable limits
- Do not grow excessively on 4K

Right column:
- Fill remaining width
- Flexible
- Main payment content area


========================================================
6. GLOBAL PAGE STRUCTURE — MOBILE
========================================================

Mobile:

ROOT
│
├── Mobile Header
│
├── Bill Summary
│
├── Payment Method
│
├── Dynamic Payment Content
│
├── Payment Note
│
└── Payment Action


Use:
- Vertical Auto Layout
- Width: Fill
- Horizontal padding: approximately 16px
- Section gap: approximately 12–16px

Mobile must not look like a compressed desktop version.


========================================================
7. FIGMA AUTO LAYOUT REQUIREMENTS
========================================================

Use Auto Layout throughout.

ROOT:
- Vertical Auto Layout
- Fill width
- Fill available height

HEADER:
- Horizontal Auto Layout
- Space between left and right groups
- Vertical center alignment

DESKTOP MAIN:
- Horizontal Auto Layout
- Left column + right column
- Gap approximately 16–24px

MOBILE MAIN:
- Vertical Auto Layout
- Width Fill
- Padding 16px

CARDS:
- Width Fill
- Height Hug Contents
- Internal padding 16–24px

BUTTONS:
- Horizontal Auto Layout
- Center aligned
- Minimum height 44px
- Desktop primary CTA approximately 48–52px
- Mobile primary CTA approximately 48–52px

INPUTS:
- Width Fill where appropriate
- Minimum height 44–48px

Payment Method Cards:
- Width Fill
- Fixed/minimum height approximately 56–64px desktop
- Approximately 52–60px mobile


========================================================
8. RESPONSIVE CONSTRAINTS
========================================================

Do NOT hardcode the page to a fixed width.

Do NOT use fixed positioning that breaks at different screen sizes.

Do NOT stretch content unnecessarily on 4K.

Do NOT create unnecessary page-level scrolling.

At 4K:
- Content should remain comfortably constrained
- Cards should not become extremely wide
- Main content should use sensible max-width behavior where appropriate

At 13-inch/smaller desktop:
- Content should compress naturally
- Preserve two-column structure
- Reduce spacing if necessary
- Avoid clipping

At tablet:
- Same two-column layout
- Adjust column widths proportionally

At mobile:
- Switch to dedicated mobile structure
- Single-column
- Vertical flow
- Touch-friendly


========================================================
9. DESIGN TOKENS
========================================================

Use a consistent BizCopilot design token system.

SPACING:

4px
8px
12px
16px
20px
24px
32px

Use the smallest appropriate token rather than arbitrary values.


RADIUS:

8px
10px
12px
16px

Cards:
10–14px

Inputs:
8–10px

Buttons:
8–10px


CONTROL HEIGHT:

40px
44px
48px
52px

Primary CTA:
48–52px


========================================================
10. COLOR SYSTEM
========================================================

PRIMARY PURPLE

Use the existing BizCopilot primary purple.

Approximate visual family:
- #4F20E8
- #5B21F5
- #6D28D9

Do not introduce multiple unrelated purple colors.

Primary purple is used for:
- Primary CTA
- Selected payment method
- Active controls
- Radio selected state
- Key interactive elements


BACKGROUND

Use:
- White
- Very light neutral/lavender backgrounds


TEXT

Primary:
- Dark navy


Secondary:
- Muted slate/gray


BORDER

- Very light neutral gray
- Subtle


SUCCESS

Use green for:
- Discount
- Payment success
- Fully paid
- Positive confirmation

Approximate family:
- #15803D
- #16A34A


ERROR

Use red only for:
- Payment failure
- Invalid amount
- Destructive action

Do not overuse red.


========================================================
11. TYPOGRAPHY
========================================================

Use:
Inter or existing BizCopilot font.

PAGE TITLE:
20–24px
Semibold/Bold

SECTION TITLE:
16–18px
Semibold

BODY:
13–15px

SECONDARY:
11–13px

PRIMARY MONETARY VALUE:
26–32px
Bold/Semibold

BUTTON:
14–16px
Semibold

Mobile:
Maintain hierarchy while reducing sizes where appropriate.

Total Payable must always be visually dominant.


========================================================
12. ICON SYSTEM
========================================================

Use one consistent modern outline icon family.

Do not mix random icon styles.

Icons:

Back:
Arrow Left

Close:
X

Customer:
User / User Round

Items:
Package / Box / Cube

Cash:
Banknote / Wallet

UPI:
UPI / Send / Digital Payment

Card:
Credit Card

Mixed:
Split Arrows / Multiple Payment

Note:
File Text / Note

Success:
Circle Check

Error:
Circle Alert

Lock:
Lock

Copy:
Copy

Add:
Plus

Delete:
Trash

Payment:
Receipt / Wallet / Credit Card


Icons:
- 18–22px normal
- 20–24px for major payment visuals
- 24px+ for hero illustrations where appropriate


========================================================
13. PAYMENT HEADER
========================================================

DESKTOP/TABLET:

Left:

[Arrow Left]
Payment

Below title:
Complete the payment to finish this bill.

Right:

Bill #1052
[4 items]
[X]

Use the actual bill number and item count dynamically.


STRUCTURE:

Header
├── Left Group
│   ├── Back Icon
│   └── Title Group
│       ├── Payment
│       └── Supporting text
│
└── Right Group
    ├── Bill Number
    ├── Item Count Badge
    └── Close Icon


Header:
- Height approximately 64–72px
- Horizontal padding 24px
- Bottom subtle divider


========================================================
14. BILL SUMMARY CARD
========================================================

Location:
Desktop/Tablet → Left column

Mobile:
Top content section


CARD:

Title:
Bill Summary


Customer row:

[Customer Icon]
Ravi Kumar

Right:
[Items Icon]
4 items


Divider


Subtotal:
₹862.50


Discount:
Discount (BUYMORE10)
-₹86.25

Discount uses green.


Divider


Total Payable:
₹776.25

Total Payable is the strongest element in the card.


Do NOT show:
Total Savings


CARD STYLE:
- White
- Subtle border
- Minimal shadow
- 10–14px radius
- 20–24px desktop padding
- 16px mobile padding


========================================================
15. PAYMENT METHOD SELECTOR
========================================================

Location:
Desktop/Tablet → Left column under Bill Summary

Mobile:
Full-width section

Title:
Payment Method


FOUR OPTIONS:

Cash
UPI
Card
Mixed


DESKTOP/TABLET:

Vertical list.

Each row:
- Icon
- Label
- Radio

CARD:
- Width Fill
- Height approximately 56–64px
- Padding 14–16px
- Gap 12px


MOBILE:

Use a compact 2 × 2 grid:

┌────────────┬────────────┐
│ Cash       │ UPI        │
├────────────┼────────────┤
│ Card       │ Mixed      │
└────────────┴────────────┘

Each:
- Height approximately 56px
- Touch friendly
- Equal width


========================================================
16. SELECTED PAYMENT METHOD STATE
========================================================

Selected:

- Purple border approximately 1.5–2px
- Very light purple background
- Purple icon
- Purple text if appropriate
- Filled radio

Unselected:
- Neutral border
- White background
- Dark text
- Empty radio


Hover:
- Slightly stronger border/background

Pressed:
- Slightly darker purple interaction state


========================================================
17. CASH PAYMENT PANEL
========================================================

When CASH is selected:

Title:
Cash Payment


Show:

Total Payable
₹776.25


Then:

Amount Received


Input:
₹ [ Enter amount received ]


Quick Fill button.

QUICK FILL MEANING:

Quick Fill ALWAYS fills the exact bill amount.

For:
₹776.25

Quick Fill sets:

Amount Received:
₹776.25

Change to Return:
₹0.00


IMPORTANT:

Quick Fill does NOT round the amount.


========================================================
18. SUGGESTED CASH
========================================================

Between:

Amount Received

and

Change to Return

show:

Suggested Cash


Exactly FOUR buttons.

Example:

[ ₹780 ] [ ₹790 ] [ ₹800 ] [ ₹1,000 ]


These values are DYNAMIC.

They are generated based on practical Indian cash denominations.

Consider commonly used denominations:

₹10
₹20
₹50
₹100
₹200
₹500

₹2,000 should NOT be prioritized because it is no longer commonly issued.


IMPORTANT:

The calculation is INTERNAL ONLY.

Never show:

₹500 + ₹200 + ₹50 + ₹20 + ₹10

Only show:

₹780


========================================================
19. SUGGESTED CASH ALGORITHM INTENT
========================================================

The system should generate four practical cash amounts at or above the payable amount.

Goal:
Suggest amounts that a customer is realistically likely to hand to a cashier.

Example:

Bill:
₹776.25

Suggested:

₹780
₹790
₹800
₹1,000


Another example:

Bill:
₹486

Suggest practical nearby cash values at or above the amount.

Another:

Bill:
₹1,850

Suggest practical amounts such as:
₹1,900
₹2,000
etc.


UI DOES NOT EXPLAIN THE ALGORITHM.


========================================================
20. CASH CHANGE CALCULATION
========================================================

Formula:

Change to Return =
Amount Received - Total Payable


Example:

Total:
₹776.25

Amount Received:
₹800

Change:
₹23.75


If Amount Received < Total:
- Show validation/error
- Disable final payment action

If Amount Received = Total:
- Change = ₹0.00
- Valid

If Amount Received > Total:
- Calculate change
- Valid


========================================================
21. UPI PAYMENT — DESKTOP/TABLET
========================================================

Title:

UPI Payment


Top:

Total Payable
₹776.25


Main visual:

LARGE QR CODE

The QR must be significantly larger than supporting content.

Do NOT make the QR small.


Instruction:

Scan the QR code using any UPI app.


Below:

UPI ID:
bizcopilot@upi

[Copy]


Payment status:

Waiting for payment...


The actual UPI ID is dynamic based on owner configuration.


========================================================
22. UPI QR CODE
========================================================

The QR code is dynamically generated.

It is NOT a permanent/static production QR.

QR source:
Owner-configured business payment information.

Owner config provides required:
- UPI/payment identifier
- Required bank/payment configuration

The QR generation system associates the payable amount with the payment request.

The cashier does not manually enter:
- UPI ID
- Bank details
- QR information

The UI only displays the generated QR.


========================================================
23. UPI QR ERROR STATE
========================================================

If owner UPI configuration is missing/invalid:

Do NOT display fake QR.

Show:

UPI Payment unavailable

UPI payment has not been configured for this business.

Provide a way to select another payment method.


========================================================
24. UPI STATES
========================================================

STATE 1:
Generating QR

Show loading state.

STATE 2:
QR Ready

Show large QR.

STATE 3:
Waiting for payment

Show:
Waiting for payment...

STATE 4:
Payment Success

Use green success state.

STATE 5:
Payment Failed

Use red error state.

Allow retry where appropriate.


========================================================
25. UPI MOBILE
========================================================

Mobile uses dedicated full-screen vertical layout.

Structure:

Payment Header
↓
Bill Summary
↓
Payment Method
↓
UPI Payment
↓
Large QR
↓
UPI ID + Copy
↓
Payment Status
↓
Payment Note
↓
Primary Action


QR must remain large enough to comfortably scan from another phone.

Do NOT prioritize fitting everything above the fold at the expense of QR size.


========================================================
26. CARD PAYMENT
========================================================

CARD DOES NOT COLLECT CARD DETAILS.

This is a HARD REQUIREMENT.

DO NOT show:
- Card number
- Cardholder name
- Expiry
- CVV
- Save Card
- Card entry form
- Stored card details
- Visa/Mastercard/RuPay card input


The shop's physical card/POS terminal handles the actual card transaction.

BizCopilot records:
Payment Method = CARD
Amount = payable amount


========================================================
27. CARD DESKTOP/TABLET STRUCTURE
========================================================

Title:
Card Payment


Total Payable:
₹776.25


Center visual:

POS/card terminal illustration


Main heading:

Accept Card Payment


Instruction:

Please collect the payment using your card terminal.
Once the payment is successful, click the button below
to mark this bill as paid.


Success instruction panel:

[Check Icon]

Payment Successful?

Click "Mark as Paid" after confirming the payment.


Then:

Payment Note (Optional)

Text area.


Bottom:

[Lock Icon]

This bill will be marked as paid
and cannot be edited.

[ Mark as Paid ]


========================================================
28. CARD MOBILE STRUCTURE
========================================================

Mobile:

Payment Header
↓
Bill Summary
↓
Payment Method 2×2
↓
Card Payment Panel
↓
POS illustration
↓
Accept Card Payment
↓
Instructions
↓
Payment Successful? confirmation
↓
Payment Note
↓
Mark as Paid


Mobile must remain clean and vertically readable.

No card-entry fields.


========================================================
29. MIXED PAYMENT
========================================================

Mixed Payment is a first-class payment mode.

It allows multiple payment methods to complete one bill.

Supported:

Cash + UPI
Cash + Card
UPI + Card
Cash + UPI + Card


Do not limit Mixed Payment to two methods.


========================================================
30. MIXED PAYMENT DESKTOP/TABLET
========================================================

Title:

Mixed Payment


Supporting text:

Use multiple payment methods to complete the payment.


Payment allocation list:

Payment Method | Amount | Action


Example:

Cash
₹500.00
[Trash]

UPI
₹276.25
[Trash]


Button:

+ Add Payment Method


Then summary:

Total Paid
₹776.25

Remaining
₹0.00

Fully Paid


========================================================
31. MIXED PAYMENT MOBILE
========================================================

Use vertical cards/rows.

Example:

Cash
₹500.00
[Delete]

UPI
₹276.25
[Delete]


+ Add Payment Method


Then:

Total Paid:
₹776.25

Remaining:
₹0.00

Fully Paid


Then:

Payment Note

Then:

Primary CTA


========================================================
32. MIXED PAYMENT RULES
========================================================

The allocated total MUST equal Total Payable.

Example:

Total Payable:
₹776.25

Cash:
₹500

UPI:
₹276.25

Total Paid:
₹776.25

Remaining:
₹0


Only then is final completion enabled.


If Total Paid < Total Payable:

Show:
Remaining ₹X

Disable completion.


If Total Paid > Total Payable:

Do not permit invalid over-allocation unless future business rules explicitly support it.


========================================================
33. MIXED PAYMENT ADD METHOD
========================================================

"+ Add Payment Method"

opens/selects available payment methods.

Each allocation row:

- Payment method icon
- Method name
- Amount input
- Delete icon

Amounts are editable.

Payment methods:
Cash
UPI
Card

Do not add Mixed inside a Mixed payment allocation.


========================================================
34. MIXED + UPI
========================================================

When UPI is part of Mixed:

Use configured UPI payment information.

Generate QR for the allocated UPI amount.

Do not manually enter UPI information.

Clearly show the UPI portion amount.


========================================================
35. MIXED + CARD
========================================================

When Card is part of Mixed:

No card details.

Cashier uses external card terminal.

BizCopilot records:
CARD
allocated amount

Cashier confirms successful terminal transaction.


========================================================
36. PAYMENT NOTE
========================================================

All payment modes support:

Payment Note (Optional)


Use a textarea.

Example:

Enter a note...


Optional character counter:

0 / 200


Examples:
- Card payment received
- UPI payment confirmed
- Paid partly by cash and UPI
- Customer paid exact amount


Do not make Note mandatory.


========================================================
37. PAYMENT ACTION FOOTER
========================================================

Desktop/Tablet:

At the bottom of the right payment area:

LEFT:

[Lock Icon]

This bill will be marked as paid
and cannot be edited.


RIGHT:

[✓ Mark as Paid]


Primary CTA:
- Purple
- White text
- Semibold
- 48–52px high
- Rounded 8–10px


The action must be visually dominant.


========================================================
38. MOBILE PAYMENT ACTION
========================================================

Mobile uses a dedicated bottom action area.

Primary button:
Full width / nearly full width.

Examples:

Mark as Paid

or payment-specific completion label where applicable.


Do not allow secondary information to visually compete with the primary action.


========================================================
39. PAYMENT VALIDATION
========================================================

CASH:
Amount Received must be >= Total Payable.


UPI:
Payment must be confirmed according to implemented payment flow.


CARD:
Cashier confirms successful external card terminal transaction.


MIXED:
Allocated amount must equal Total Payable.


The final action must remain disabled when payment requirements are not satisfied.


========================================================
40. COMPLETION
========================================================

After successful payment:

Bill status:
PAID

The completed bill becomes immutable.

Do not allow editing from the completed payment state.

Completed bill must not allow modification of:
- Products
- Quantity
- Customer
- Offer
- Payment method
- Payment amount


The completed bill can later be accessed through the existing Billing/Recent Bill functionality.


========================================================
41. LOADING / ERROR / SUCCESS COMPONENTS
========================================================

Create reusable state variants.

PaymentStatus:

Default
Loading
Waiting
Success
Error


PrimaryButton:

Default
Hover
Pressed
Disabled
Loading
Success


PaymentMethod:

Default
Hover
Pressed
Selected
Disabled


Input:

Default
Focused
Filled
Error
Disabled


SuggestedCash:

Default
Hover
Pressed
Selected


========================================================
42. COMPONENT ARCHITECTURE
========================================================

Create reusable Figma components.

COMPONENTS:

PaymentScreen
PaymentHeader
BillSummaryCard
CustomerSummary
PaymentMethodSelector
PaymentMethodCard
TotalPayable
CashPaymentPanel
AmountReceivedInput
QuickFillButton
SuggestedCashGroup
SuggestedCashButton
ChangeToReturn
UPIPaymentPanel
QRCodeContainer
UPIIdentifier
CopyButton
UPIPaymentStatus
CardPaymentPanel
CardTerminalIllustration
CardConfirmationMessage
MixedPaymentPanel
PaymentAllocationRow
AddPaymentMethodButton
PaymentBalanceSummary
PaymentNote
PaymentActionFooter
PrimaryPaymentButton
PaymentErrorState
PaymentSuccessState
PaymentLoadingState


Use component variants rather than duplicating unrelated components.


========================================================
43. BILL SUMMARY COMPONENT VARIANTS
========================================================

BillSummaryCard:

Default
Discount Applied
No Discount

When discount exists:
Show green discount row.

When no discount:
Do not create an empty discount row.


========================================================
44. PAYMENT METHOD VARIANTS
========================================================

PaymentMethodCard:

Cash / Default
Cash / Selected

UPI / Default
UPI / Selected

Card / Default
Card / Selected

Mixed / Default
Mixed / Selected


========================================================
45. CASH COMPONENT VARIANTS
========================================================

CashPaymentPanel:

Initial
Exact Amount
Suggested Amount
Insufficient Amount
Valid Amount
Change Required
Exact Payment


QuickFill:
Default
Pressed
Filled


SuggestedCash:
Default
Selected
Pressed


========================================================
46. UPI COMPONENT VARIANTS
========================================================

UPI Panel:

Generating QR
QR Ready
Waiting
Success
Failed
Configuration Error


QRCode:
Loading
Ready
Error


========================================================
47. CARD COMPONENT VARIANTS
========================================================

Card:

Ready
Waiting for Terminal
Payment Confirmed
Payment Not Confirmed
Error


Never create card-entry variants.


========================================================
48. MIXED COMPONENT VARIANTS
========================================================

Mixed:

Empty Allocation
Partial Allocation
Fully Allocated
Invalid Allocation
Payment Confirmation Pending
Fully Paid


Allocation Row:

Cash
UPI
Card

Each with:
- Editable amount
- Delete


========================================================
49. SPACING SPECIFICATION
========================================================

DESKTOP:

Page horizontal padding:
24px

Header:
24px horizontal

Main column gap:
16–24px

Card padding:
20–24px

Section gap:
16–24px

Internal field gap:
8–12px


TABLET:

Page padding:
16–20px

Card padding:
16–20px

Column gap:
16px


MOBILE:

Page padding:
16px

Card padding:
16px

Section gap:
12–16px

Field gap:
8–12px

Touch target:
minimum 44px


========================================================
50. CARD VISUAL STYLE
========================================================

All major sections use:

- White background
- Light border
- Subtle shadow
- 10–14px radius

Do not use heavy shadows.

Do not create excessive floating cards.

The design should feel:
- Premium
- Modern
- Clean
- Professional
- Fast POS


========================================================
51. DESKTOP LAYOUT PROPORTION
========================================================

Desktop approximately:

LEFT:
30–32% of usable content width

RIGHT:
68–70%

But use:
- Preferred left width
- Flexible right width

Do not allow left column to grow excessively on large screens.

Right payment content should receive the majority of available width.


========================================================
52. LARGE MONITOR / 4K BEHAVIOR
========================================================

At 2560px/4K:

DO NOT:
- Stretch cards to the entire monitor
- Create huge empty card areas
- Create unnecessary scrollbar
- Increase text to unreasonable sizes

Use a sensible max content width where appropriate.

Keep visual density similar to the approved mock.

The screen should look like a professional application, not a stretched web page.


========================================================
53. SMALL DESKTOP / 13-INCH BEHAVIOR
========================================================

At smaller desktop sizes:

DO NOT:
- Force fixed 1440×900 dimensions
- Clip content
- Hide CTA
- Create page-level scrollbar unnecessarily

The content should adapt.

If internal payment content needs scrolling because of a particular state, restrict scrolling to the appropriate content region.

Do NOT make Header + entire page scroll together.


========================================================
54. SCROLLING RULE
========================================================

This is important.

The Payment screen should NOT have unnecessary scrollbars.

Desktop:
- Prefer no page-level scrolling.
- Content should fit the viewport.
- Use internal scrolling only when genuinely necessary.

Tablet:
- Same principle.

Mobile:
- Vertical page scrolling is acceptable because of limited height.
- Avoid nested scroll areas unless required.

Do not add a scrollbar merely because the design was created at a fixed Figma frame height.


========================================================
55. MOBILE HEADER
========================================================

Mobile header:

[Back]
Payment

Supporting:
Complete the payment to finish this bill.

Right:
Bill #1052
[4 items]
[Close]


Keep compact.

Do not consume excessive vertical space.


========================================================
56. MOBILE BILL SUMMARY
========================================================

Compact card:

Bill Summary

Customer
Ravi Kumar

Items
4 items

Subtotal
₹862.50

Discount
-₹86.25

Total Payable
₹776.25


Total Payable remains the largest amount.


========================================================
57. MOBILE PAYMENT METHOD GRID
========================================================

Use 2 × 2:

Cash       UPI
Card       Mixed

Each tile:
- Equal width
- Touch friendly
- Icon
- Label
- Radio/selection indicator


========================================================
58. MOBILE CASH
========================================================

Order:

Cash Payment
↓
Total Payable
↓
Amount Received
↓
Quick Fill
↓
Suggested Cash
↓
Change to Return
↓
Payment Note
↓
Mark as Paid


Suggested:

₹780
₹790
₹800
₹1,000

Amount only.

No denomination explanation.


========================================================
59. MOBILE UPI
========================================================

Order:

UPI Payment
↓
Total Payable
↓
Large QR
↓
UPI ID
↓
Copy
↓
Waiting / Success / Error
↓
Payment Note
↓
Complete


QR must be large.


========================================================
60. MOBILE CARD
========================================================

Order:

Card Payment
↓
Total Payable
↓
POS Illustration
↓
Accept Card Payment
↓
Instructions
↓
Payment Successful?
↓
Payment Note
↓
Mark as Paid


No card details.


========================================================
61. MOBILE MIXED
========================================================

Order:

Mixed Payment
↓
Total Payable
↓
Payment allocations
↓
Add Payment Method
↓
Total Paid
↓
Remaining
↓
Fully Paid
↓
Payment Note
↓
Mark as Paid


========================================================
62. FINANCIAL FORMATTING
========================================================

Use Indian currency formatting.

Examples:

₹776.25
₹862.50
₹1,000.00

Currency symbol:
₹

Do not use:
$


========================================================
63. PAYMENT DATA BEHAVIOR
========================================================

The Payment UI consumes the current bill state.

The following must be reflected dynamically:

- Customer
- Items count
- Subtotal
- Discount
- Total Payable
- Selected payment method
- Payment allocation
- Payment note
- Payment status


Payment screen must not independently calculate business rules that belong to the backend/business runtime.

UI displays the calculated bill/payment state.


========================================================
64. NO DUPLICATE INFORMATION
========================================================

Do not repeat:

Total Savings

Do not duplicate:
- Payable amount unnecessarily
- QR payment amount
- Payment information
- Card information


Every piece of information should have one clear location.


========================================================
65. ACCESSIBILITY
========================================================

Maintain:

- High contrast
- Clear labels
- Minimum 44px touch targets
- Keyboard accessible controls
- Visible focus state
- State communicated through text/icon in addition to color


========================================================
66. FINAL DESKTOP STRUCTURE
========================================================

Exact conceptual structure:

┌────────────────────────────────────────────────────────────┐
│ ←  Payment                              Bill #1052  4 items X│
│    Complete the payment to finish this bill.               │
├──────────────────────┬─────────────────────────────────────┤
│                      │                                     │
│ Bill Summary         │ Payment Method Content              │
│                      │                                     │
│ Customer     4 items │ Total Payable                       │
│                      │                                     │
│ Subtotal             │ Dynamic payment area                │
│ Discount             │                                     │
│                      │ Cash / UPI / Card / Mixed           │
│ Total Payable        │                                     │
│                      │ Payment Note                        │
│                      │                                     │
│ Payment Method       │                                     │
│                      │                                     │
│ Cash                 │                                     │
│ UPI                  │                                     │
│ Card                 │                                     │
│ Mixed                │                                     │
│                      │                                     │
│                      │ Lock + Mark as Paid                 │
└──────────────────────┴─────────────────────────────────────┘


========================================================
67. FINAL MOBILE STRUCTURE
========================================================

┌─────────────────────────────┐
│ ← Payment        Bill #1052 │
│ Complete payment...         │
├─────────────────────────────┤
│ Bill Summary                │
│ Customer       4 items      │
│ Subtotal                    │
│ Discount                    │
│ Total Payable               │
├─────────────────────────────┤
│ Payment Method              │
│                             │
│ Cash       UPI              │
│ Card       Mixed            │
├─────────────────────────────┤
│                             │
│ Dynamic payment content     │
│                             │
├─────────────────────────────┤
│ Payment Note                │
├─────────────────────────────┤
│ Mark as Paid                │
└─────────────────────────────┘


========================================================
68. FROZEN CARD DESIGN
========================================================

Card payment must visually communicate:

"Use the shop's physical card terminal."

The visual should contain:
- POS terminal/card illustration
- Accept Card Payment heading
- Instruction
- Payment confirmation reminder
- Optional note
- Mark as Paid CTA

There is NO card information form.


========================================================
69. FROZEN UPI DESIGN
========================================================

UPI payment must visually communicate:

"Customer scans the business-generated QR."

The QR must be large.

The QR is dynamically generated from owner-configured payment information.

The production implementation must not use a static fake QR.


========================================================
70. FROZEN CASH DESIGN
========================================================

Cash payment must visually communicate:

"How much cash did the customer give?"

Provide:

Amount Received

Quick Fill:
exact amount

Suggested Cash:
4 practical dynamic amounts

Change to Return:
automatic


========================================================
71. FROZEN MIXED DESIGN
========================================================

Mixed payment must visually communicate:

"How is this bill split between payment methods?"

Provide:
- Payment allocation rows
- Add method
- Editable amount
- Delete
- Total Paid
- Remaining
- Fully Paid state


========================================================
72. DO NOT ADD THESE FEATURES
========================================================

DO NOT ADD:

- Card number
- CVV
- Expiry
- Cardholder name
- Save card
- Stored cards
- Total Savings
- Product list
- Inventory
- Expenses
- Profit
- Kitchen status
- Order status
- Unrelated navigation
- Additional payment methods
- Loyalty
- Credit
- Online ordering
- Unrelated financial information
- Unnecessary dialogs
- Fake QR
- Denomination calculations
- Unnecessary scrollbars


========================================================
73. FIGMA LAYER NAMING
========================================================

Use clear layer/component names.

Example:

PaymentScreen
  PaymentHeader
    BackButton
    TitleGroup
    BillMeta
    CloseButton

  PaymentContent
    LeftColumn
      BillSummaryCard
      PaymentMethodCard

    RightColumn
      PaymentPanel
      PaymentNote
      PaymentActionFooter


For mobile:

PaymentMobile
  MobileHeader
  BillSummary
  PaymentMethodGrid
  PaymentContent
  PaymentNote
  MobilePaymentAction


========================================================
74. FIGMA VARIANT NAMING
========================================================

Use explicit variants.

Examples:

PaymentMethod / Cash / Default
PaymentMethod / Cash / Selected
PaymentMethod / UPI / Default
PaymentMethod / UPI / Selected
PaymentMethod / Card / Default
PaymentMethod / Card / Selected
PaymentMethod / Mixed / Default
PaymentMethod / Mixed / Selected

CashPayment / Default
CashPayment / Valid
CashPayment / Error

UPIPayment / Loading
UPIPayment / Ready
UPIPayment / Waiting
UPIPayment / Success
UPIPayment / Error

CardPayment / Waiting
CardPayment / Confirmed
CardPayment / Error

MixedPayment / Partial
MixedPayment / Complete
MixedPayment / Error


========================================================
75. INTERACTION RULES
========================================================

Selecting payment method:
→ Replace dynamic payment panel.

Cash:
→ Enter amount
→ Quick Fill or Suggested Cash
→ Calculate change

UPI:
→ Generate/display QR
→ Wait for payment
→ Confirm

Card:
→ Cashier uses terminal
→ Cashier confirms
→ Mark as Paid

Mixed:
→ Add methods
→ Allocate amounts
→ Validate total
→ Complete


========================================================
76. FINAL STATE RULE
========================================================

Once the user completes payment:

Show successful completion state.

Bill becomes:
PAID

Bill cannot be edited.

The Payment screen should not allow the cashier to accidentally alter the completed bill.


========================================================
77. DESIGN QUALITY BAR
========================================================

The resulting design must feel like a premium production POS system.

Visual qualities:

- Clean
- Fast
- Spacious but not wasteful
- Modern
- Professional
- Strong financial hierarchy
- Excellent readability
- Strong purple primary action
- Minimal visual noise
- Consistent iconography
- Consistent spacing
- Responsive
- Touch-friendly


========================================================
78. FINAL NON-NEGOTIABLE RULES
========================================================

1. Desktop and Tablet use the SAME design.

2. Mobile uses a dedicated different design.

3. Do not include navigation menu design.

4. Payment screen is responsive.

5. Do not create unnecessary scrollbars.

6. Do not use fixed page height.

7. Do not stretch the design unnecessarily on 4K.

8. Do not break the two-column desktop/tablet structure.

9. Mobile uses a single-column vertical layout.

10. Four payment methods only:
    Cash
    UPI
    Card
    Mixed

11. Card NEVER asks for card details.

12. UPI QR is dynamically generated from owner-configured payment information.

13. UPI QR must be large and scannable.

14. Cash Quick Fill fills the exact bill amount.

15. Suggested Cash shows exactly four dynamic practical cash amounts.

16. Suggested Cash uses Indian denomination logic internally.

17. Never show denomination calculations.

18. Mixed payment supports multiple payment methods.

19. Mixed payment must equal the bill total before completion.

20. Payment Note is optional.

21. No Total Savings.

22. Completed bills are immutable.

23. Payable amount is always the strongest monetary element.

24. Do not invent additional UI.

25. Do not change the frozen visual direction.


========================================================
FINAL FIGMA INSTRUCTION
========================================================

Create the complete BizCopilot Payment screen using this specification.

Create the following primary design frames:

1. Desktop — Cash
2. Desktop — UPI
3. Desktop — Card
4. Desktop — Mixed

5. Tablet — same structural design as Desktop, responsive

6. Mobile — Cash
7. Mobile — UPI
8. Mobile — Card
9. Mobile — Mixed

Also create the required component variants and important states.

The desktop/tablet design must reproduce the frozen desktop mockups.

The mobile design must reproduce the frozen mobile direction.

Use Auto Layout, responsive constraints, reusable components, variants, design tokens, proper spacing, and production-quality component architecture.

Do not treat the 1440×900 and 390×844 frames as fixed runtime dimensions.

The implementation must adapt to actual viewport dimensions.

The final result must preserve the exact BizCopilot visual hierarchy, functionality, payment behavior, and interaction model established in this specification.

PRIORITY ORDER:

1. Frozen visual design
2. Responsive viewport structure
3. Payment functionality
4. Component consistency
5. Accessibility
6. Visual polish

Do not sacrifice the frozen design for unnecessary additional functionality.

END OF MASTER PAYMENT SCREEN SPECIFICATION