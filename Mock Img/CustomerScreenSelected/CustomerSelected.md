BIZCOPILOT — CUSTOMER SCREEN
PART 2: CUSTOMER SELECTED
FIGMA-LEVEL MASTER DESIGN PROMPT

Design ONLY Part 2: Customer Selected.

Do NOT design the Bill Selected state in this prompt.

The Customer Dashboard / On Load state is already designed in Part 1.

This screen represents the state after the user clicks a customer row or the customer arrow from the Customer Dashboard.

BizCopilot is an offline-first billing/POS application for small Indian businesses.

The Customer Selected experience must feel like the same product as the existing BizCopilot Product, Category, Billing, Offer, Payment and Customer Dashboard screens.

PRIMARY DESIGN PRIORITY

Keep the customer list visible while allowing the user to inspect one customer's information and billing history.

The desktop/tablet experience must use a SPLIT WORKSPACE.

Customer List
        +
Customer Details

Do NOT navigate away from the Customer screen on desktop/tablet.

Do NOT replace the entire customer dashboard with a full-page customer profile.

--------------------------------------------------
1. FROZEN CUSTOMER SELECTED STRUCTURE
--------------------------------------------------

When a customer is selected:

DESKTOP + TABLET:

LEFT:
Condensed Customer List

RIGHT:
Customer Details Panel

The customer list remains visible on the left.

The selected customer's details appear on the right.

MOBILE:

Customer Details opens as a bottom overlay extending nearly to the top of the screen, with a small visible gap from the top.

Do NOT use a desktop-style centered modal on mobile.

--------------------------------------------------
2. COLUMN COLLAPSE — VERY IMPORTANT
--------------------------------------------------

This is a key frozen behavior.

The initial Customer Dashboard has these columns:

Seq. No.
Customer
Phone
Bills
Total Spent
Last Visit
Status + Toggle
Edit
Deactivate
Arrow

After a customer is selected, the customer list MUST COLLAPSE its columns.

REFERENCE:

INITIAL CUSTOMER DASHBOARD

┌────┬──────────────┬────────────┬───────┬────────────┬────────────┬────────┬──────┬──────┬───┐
│ #  │ Customer     │ Phone      │ Bills │ Total Spent│ Last Visit │ Status │ Edit │ Trash│ → │
├────┼──────────────┼────────────┼───────┼────────────┼────────────┼────────┼──────┼──────┼───┤
│ 01 │ Arun Kumar   │ +91...     │ 12    │ ₹8,450     │ 18 Aug     │ ON     │ ✎    │ 🗑   │ → │
│ 02 │ Priya Stores │ +91...     │ 8     │ ₹5,720     │ 16 Aug     │ ON     │ ✎    │ 🗑   │ → │
└────┴──────────────┴────────────┴───────┴────────────┴────────────┴────────┴──────┴──────┴───┘


CUSTOMER SELECTED

┌────┬──────────────┬────────────┬────────┬──────┬──────┬───┐
│ #  │ Customer     │ Phone      │ Status │ Trash│      │ → │
├────┼──────────────┼────────────┼────────┼──────┼──────┼───┤
│ 01 │ Arun Kumar   │ +91...     │ ON     │ 🗑   │      │ → │  ← SELECTED
│ 02 │ Priya Stores │ +91...     │ ON     │ 🗑   │      │ → │
│ 03 │ Ravi         │ +91...     │ OFF    │ 🗑   │      │ → │
└────┴──────────────┴────────────┴────────┴──────┴──────┴───┘

RIGHT SIDE:

┌────────────────────────────────────────────┐
│ Customer Details                           │
│                                            │
│ Arun Kumar                                 │
│ +91 98765 43210                            │
│                                            │
│ Customer Summary                           │
│                                            │
│ Recent Bills                               │
│                                            │
│ Notes                                      │
└────────────────────────────────────────────┘

THE FOLLOWING COLUMNS MUST HIDE AFTER CUSTOMER SELECTION:

✕ Bills
✕ Total Spent
✕ Last Visit
✕ Edit

THE FOLLOWING MUST REMAIN:

✓ Seq. No.
✓ Customer
✓ Phone
✓ Status + Toggle
✓ Deactivate
✓ Arrow

Do NOT invent another collapsed-table structure.

Do NOT replace the table with unrelated cards on desktop/tablet.

--------------------------------------------------
3. WHY THE COLUMN COLLAPSE EXISTS
--------------------------------------------------

The purpose is to reclaim horizontal space.

Before selection:

Customer Dashboard
→ Full-width customer table

After selection:

Customer List
→ Customer Details

The selected customer list becomes intentionally narrower because the right-side Customer Details panel now contains the customer's information and history.

The list remains useful for switching between customers without leaving the screen.

This is NOT a second independent screen.

--------------------------------------------------
4. DESKTOP VIEWPORT
--------------------------------------------------

Desktop uses a split workspace.

REFERENCE STRUCTURE:

┌─────────────────────────────────────────────────────────────────────────────┐
│ BizCopilot                                            User / Status         │
├──────────────┬──────────────────────────────────────────────────────────────┤
│              │ Customers                                                    │
│ Sidebar      │                                                              │
│              │ ┌──────────────────── Customer List ─────────────────────┐   │
│ Dashboard    │ │ # │ Customer │ Phone │ Status │ Deactivate │ →        │   │
│ Billing      │ │   │          │       │        │            │          │   │
│ Products     │ │   │          │       │        │            │          │   │
│ Customers    │ └───────────────────────────────────────────────────────┘   │
│ More         │                                                              │
│              │ ┌──────────────────────── Customer Details ─────────────┐   │
│              │ │                                                         │   │
│              │ │ Arun Kumar                                              │   │
│              │ │ +91 98765 43210                                         │   │
│              │ │                                                         │   │
│              │ │ Customer Summary                                        │   │
│              │ │ Recent Bills                                            │   │
│              │ │ Customer Notes                                          │   │
│              │ │                                                         │   │
│              │ └─────────────────────────────────────────────────────────┘   │
└──────────────┴──────────────────────────────────────────────────────────────┘

The actual implementation should use a true responsive split layout rather than a fixed ASCII proportion.

The left customer list should shrink enough to make the details panel useful.

The right Customer Details panel should have enough width for readable information.

Do NOT make the details panel so narrow that content becomes cramped.

--------------------------------------------------
5. TABLET VIEWPORT
--------------------------------------------------

Desktop and Tablet MUST use the SAME CUSTOMER SELECTED UX.

Tablet is NOT a mobile card layout.

Tablet still uses:

LEFT:
Condensed Customer List

RIGHT:
Customer Details Panel

The same columns remain after collapse:

Seq. No.
Customer
Phone
Status + Toggle
Deactivate
Arrow

Hidden:

Bills
Total Spent
Last Visit
Edit

Adapt spacing and widths responsively.

Do NOT create a completely different Tablet interaction.

Do NOT turn the Customer Details into a bottom sheet on Tablet.

The split workspace should remain usable on Tablet.

--------------------------------------------------
6. MOBILE VIEWPORT
--------------------------------------------------

Mobile does NOT use the desktop/tablet split table.

When a customer is selected:

Customer Details opens as a bottom overlay.

Structure:

┌──────────────────────────────┐
│                              │
│ Customer Dashboard           │
│                              │
│ Customer List                │
│                              │
├──────────────────────────────┤
│                              │
│ Customer Details             │
│ ─────────────────────────    │
│ Arun Kumar                   │
│ +91 98765 43210              │
│                              │
│ Customer Summary             │
│                              │
│ Recent Bills                 │
│                              │
│ Customer Notes               │
│                              │
└──────────────────────────────┘

The overlay should extend nearly to the top while retaining a small top gap.

The underlying Customer Dashboard/list remains conceptually underneath.

Do NOT use a centered desktop modal on mobile.

Do NOT navigate to a completely separate route for Customer Details.

--------------------------------------------------
7. CUSTOMER DETAILS HEADER
--------------------------------------------------

Customer Details should begin with a clear customer identity section.

Display:

Customer Name
Phone

Example:

Arun Kumar
+91 98765 43210

Provide an obvious close/back control appropriate to the viewport.

Desktop/tablet:
Details panel close/back control

Mobile:
Bottom-sheet close/back control

Do NOT add a three-dot menu.

Do NOT add unnecessary customer actions.

--------------------------------------------------
8. CUSTOMER PROFILE / INFORMATION
--------------------------------------------------

Customer Details should show the customer's relevant information.

At minimum:

• Customer Name
• Phone
• Customer status
• Customer summary
• Notes

Use a clean information hierarchy.

Do NOT turn the profile into a large decorative CRM profile card.

The user should immediately understand:

WHO is this customer?
WHAT is their current status?
WHAT is their billing history?

--------------------------------------------------
9. CUSTOMER SUMMARY
--------------------------------------------------

Show a compact customer billing summary.

Relevant summary information includes:

Bills
Total Spent
Last Visit

These values were intentionally removed from the condensed customer list.

They now have a natural home inside Customer Details.

Example:

Customer Summary

12 Bills
₹8,450 Total Spent
18 Aug 2026 Last Visit

Use the existing BizCopilot metric/card language.

Keep it compact.

Do NOT create a large analytics dashboard.

Do NOT introduce unrelated metrics.

--------------------------------------------------
10. RECENT BILLS
--------------------------------------------------

Customer Details must include:

Recent Bills

Initially display approximately 4–5 recent bills.

Each bill should be easy to scan.

Example:

Recent Bills

BILL-1042
18 Aug 2026 · 6:42 PM
3 items                         ₹620

BILL-1038
16 Aug 2026 · 7:15 PM
5 items                         ₹1,240

BILL-1031
14 Aug 2026 · 5:48 PM
2 items                         ₹480

BILL-1024
11 Aug 2026 · 6:10 PM
4 items                         ₹890

If there are more than 5 bills:

Show:

View All

If there are only 4–5 total bills:

Do NOT show View All unnecessarily.

--------------------------------------------------
11. RECENT BILL INTERACTION
--------------------------------------------------

Clicking/tapping a specific recent bill opens:

BILL SELECTED STATE

This belongs to Part 3.

Desktop/tablet:

Open a completely new centered Bill Details overlay.

IMPORTANT:

Do NOT open Bill Details as another right-side panel.

The Customer Details panel remains underneath.

Mobile:

Open Bill Details as a bottom overlay nearly to the top.

Customer Details remains underneath.

The Bill Details overlay therefore sits above Customer Details.

Do NOT design Part 3 in this prompt.

Only provide the interaction entry point.

--------------------------------------------------
12. RECENT BILLS SCROLLING
--------------------------------------------------

Initially show 4–5 bills without unnecessary scrolling.

If more than 5 bills exist:

Show View All.

After View All is activated:

ONLY the Recent Bills section becomes scrollable.

Do NOT make the entire Customer Details panel/page scroll because the customer has many bills.

Do NOT create page-level scrolling just for Recent Bills.

REFERENCE:

Customer Details
│
├── Customer Header
├── Customer Summary
├── Recent Bills
│      └── SCROLLABLE ONLY WHEN NEEDED
└── Customer Notes

The rest of the Customer Details structure remains stable.

--------------------------------------------------
13. CUSTOMER NOTES
--------------------------------------------------

Display Customer Notes as part of Customer Details.

Example:

Customer Notes

"Usually visits in the evening."

Keep notes visually secondary to customer identity and billing information.

Do NOT create a large notes editor by default.

If editing notes is already supported by the application, use the existing Customer Edit workflow rather than adding a new independent editor.

--------------------------------------------------
14. CUSTOMER STATUS
--------------------------------------------------

Customer status remains visible.

Example:

Active     [ ON ]

or

Inactive   [ OFF ]

Use the same status toggle component as the Customer Dashboard.

If the user changes the status:

• Update the visual state
• Provide appropriate confirmation/feedback according to existing business rules
• Do not delete customer history

Historical bills remain unchanged.

--------------------------------------------------
15. DEACTIVATE ACTION
--------------------------------------------------

The condensed customer list still contains the Deactivate/trash action.

Use:

Material Symbols Outlined:
delete

Functionally this means:

DEACTIVATE CUSTOMER

It does NOT mean permanent deletion.

If the user taps it, use the existing BizCopilot destructive confirmation dialog.

Example:

Deactivate customer?

"Arun Kumar will no longer be available as an active
customer for new billing.

Existing bills and customer history will remain unchanged."

Actions:

Cancel
Deactivate

Do NOT use:

Delete Permanently

--------------------------------------------------
16. SWITCHING CUSTOMERS
--------------------------------------------------

The user can select another customer directly from the condensed list.

When another customer is selected:

• Previous Customer Details state is replaced by the newly selected customer
• Customer list remains on the left on Desktop/Tablet
• Selected row changes accordingly
• Customer Details updates
• Recent Bills update
• Customer Summary updates
• Customer Notes update

Do NOT navigate away from the Customer screen.

--------------------------------------------------
17. SELECTED ROW STATE
--------------------------------------------------

The currently selected customer must be visually distinguishable.

Use the existing BizCopilot selected-row treatment.

The selected row can have:

• Subtle background
• Accent indicator
• Clear text hierarchy

Do NOT use a loud/high-contrast selection effect.

The selection should be obvious but calm.

--------------------------------------------------
18. DESKTOP/TABLET LIST SCROLLING
--------------------------------------------------

The condensed customer list owns its own scrolling if required.

Customer Details should remain stable while the user browses the customer list.

Do NOT make the entire page scroll unnecessarily.

Avoid nested scrolling except where specifically defined.

Customer list:
Scrollable when required

Recent Bills:
Scrollable only after View All and only within Recent Bills

Do NOT create multiple competing page scrollbars.

--------------------------------------------------
19. RESPONSIVE SPLIT BEHAVIOR
--------------------------------------------------

Desktop:

Full Customer List
+
Customer Details

Tablet:

Condensed Customer List
+
Customer Details

Mobile:

Customer Dashboard
→ Customer Details Bottom Overlay

The responsive breakpoint should be based on available usable width, not a hardcoded visual assumption.

Desktop and Tablet must preserve the same interaction model.

Mobile intentionally changes the presentation because a split workspace is not practical on a narrow phone.

--------------------------------------------------
20. WIDTH ALLOCATION
--------------------------------------------------

Desktop/tablet split workspace should be fluid.

Do NOT use a rigid fixed pixel width.

Use a flexible ratio that gives:

Customer List:
Enough width to identify customers and operate actions.

Customer Details:
Enough width to comfortably read customer information, summary and recent bills.

The details area must not become a tiny side panel.

The customer list must not become so wide that the selected state wastes the reclaimed space.

The column collapse exists specifically to make this split layout practical.

--------------------------------------------------
21. COLUMN COLLAPSE VISUAL REFERENCE
--------------------------------------------------

Use this as the Figma design reference:

STATE A — CUSTOMER DASHBOARD

# | Customer | Phone | Bills | Total Spent | Last Visit | Status | Edit | Deactivate | →

STATE B — CUSTOMER SELECTED

# | Customer | Phone | Status | Deactivate | →

RIGHT PANEL:

Customer Details

This relationship must be visually obvious in the design.

The column collapse is a functional layout transition, not merely a cosmetic table change.

--------------------------------------------------
22. MOBILE CUSTOMER DETAIL OVERLAY
--------------------------------------------------

Mobile Customer Details should behave like a high-priority contextual overlay.

Requirements:

• Nearly full-height
• Small top gap
• Rounded top corners consistent with BizCopilot bottom sheets
• Underlying Customer Dashboard remains visible only as context
• Clear close/back action
• No unnecessary modal header decoration

Structure:

Customer Details
↓
Customer identity
↓
Customer summary
↓
Recent Bills
↓
Customer Notes

Recent Bills section owns scrolling if View All is activated.

Do NOT allow the entire app page to scroll underneath unnecessarily.

--------------------------------------------------
23. DESIGN SYSTEM
--------------------------------------------------

Match the existing BizCopilot visual language.

Use:

• Premium but practical business UI
• Clean surfaces
• Soft borders
• Consistent corner radius
• Controlled shadows
• Strong typography hierarchy
• Restrained accent color
• Clear status states
• Material Symbols Outlined

Avoid:

• Glassmorphism
• Large gradients
• Excessive shadows
• Giant profile cards
• Decorative illustrations
• Excessive whitespace
• Excessive rounded containers
• Neon colors
• CRM-style complexity

--------------------------------------------------
24. ICON SYSTEM
--------------------------------------------------

Use:

Material Symbols Outlined

Required icons:

• arrow_back / close
• delete
• chevron_right
• edit only where the existing Customer workflow requires it
• calendar/history icon only if consistent with the existing system
• search/filter icons remain part of the underlying dashboard

Do NOT introduce random icon libraries.

--------------------------------------------------
25. FIGMA COMPONENT STRUCTURE
--------------------------------------------------

Create reusable components.

Suggested hierarchy:

CustomerSelectedScreen
│
├── CustomerDashboardContext
│   └── CondensedCustomerList
│       ├── CustomerSelectedRow
│       ├── CustomerStatusToggle
│       ├── DeactivateAction
│       └── OpenDetailsAction
│
└── CustomerDetails
    │
    ├── CustomerDetailsHeader
    ├── CustomerIdentity
    ├── CustomerSummary
    │   ├── Bills
    │   ├── TotalSpent
    │   └── LastVisit
    │
    ├── RecentBills
    │   ├── RecentBillRow
    │   └── ViewAll
    │
    └── CustomerNotes

Responsive variants:

Desktop
Tablet
Mobile

Customer List variants:

Dashboard / Full Columns
Selected / Collapsed Columns

Customer Details variants:

Desktop / Right Panel
Tablet / Right Panel
Mobile / Bottom Overlay

--------------------------------------------------
26. FIGMA AUTO LAYOUT
--------------------------------------------------

Use Auto Layout throughout.

Desktop/tablet:

CustomerWorkspace
├── CondensedCustomerList
└── CustomerDetails

Use flexible width allocation.

Do NOT use absolute positioning for the primary layout.

Customer list rows should use horizontal Auto Layout.

Customer Details should use vertical Auto Layout.

Recent Bill rows should use reusable Auto Layout components.

Mobile bottom overlay should use vertical Auto Layout.

--------------------------------------------------
27. INTERACTION STATES
--------------------------------------------------

Design states for:

Customer row:
• Default
• Hover
• Selected
• Pressed
• Focused

Status:
• Active
• Inactive
• Disabled

Customer Details:
• Loaded
• Loading
• No Recent Bills
• Many Recent Bills / View All

Recent Bill:
• Default
• Hover
• Pressed
• Focused

--------------------------------------------------
28. NO RECENT BILLS STATE
--------------------------------------------------

If the customer has no billing history:

Recent Bills

No bills yet

Keep this state simple.

Do NOT show fake historical data.

Customer summary should appropriately show:

0 Bills

and corresponding empty values where applicable.

--------------------------------------------------
29. RESPONSIVE ACCESSIBILITY
--------------------------------------------------

Ensure:

• Customer rows are keyboard accessible on desktop.
• Selected customer state is clearly communicated.
• Status toggle has accessible state.
• Deactivate action has an accessible label.
• Close/back controls have accessible labels.
• Recent bill rows are keyboard/touch accessible.
• View All has a clear accessible name.
• Focus states are visible.
• Color is not the only indicator of selection/status.

Touch targets must be comfortable on tablet/mobile.

--------------------------------------------------
30. IMPORTANT — DO NOT ADD
--------------------------------------------------

Do NOT add:

• Three-dot customer menu
• Create Bill
• New Bill
• View button
• Checkbox selection
• Bulk actions
• Inventory
• Stock
• Loyalty points
• Credit balance
• Marketing
• Customer segmentation
• Membership
• Rewards
• Large analytics charts
• Extra customer actions
• Another right-side panel for Bill Details
• Full-page navigation for Customer Details on Desktop/Tablet
• Desktop-style centered modal for Customer Details on Mobile
• Whole-page scrolling for Recent Bills
• Separate scrollbar for every subsection

--------------------------------------------------
31. FINAL FIGMA AGENT INSTRUCTION
--------------------------------------------------

This is the SECOND state of the frozen Customer workflow:

PART 1:
Customer Dashboard / On Load

        ↓
Customer row / arrow clicked

        ↓

PART 2:
Customer Selected

        ↓
Customer bill clicked

        ↓

PART 3:
Bill Selected

This prompt covers ONLY PART 2.

The most important visual transition is:

FULL CUSTOMER TABLE
        ↓
CUSTOMER SELECTED
        ↓
CONDENSED CUSTOMER TABLE + CUSTOMER DETAILS

Desktop + Tablet:

LEFT:
Condensed Customer List

RIGHT:
Customer Details

Mobile:

Customer Details Bottom Overlay

COLUMN COLLAPSE IS MANDATORY:

HIDE:
• Bills
• Total Spent
• Last Visit
• Edit

KEEP:
• Seq. No.
• Customer
• Phone
• Status + Toggle
• Deactivate
• Arrow

The column collapse must visibly reclaim horizontal space for the Customer Details panel.

Customer Details must contain:

• Customer identity
• Phone
• Status
• Customer Summary
• Recent Bills
• View All only when more than 5 bills exist
• Customer Notes

Recent Bills behavior:

• Initially show 4–5 bills
• If more than 5, show View All
• After View All, ONLY Recent Bills becomes scrollable
• Never scroll the entire Customer Details/page because of the bill list

Clicking a bill enters Part 3:

Desktop/Tablet:
Centered Bill Details overlay

Mobile:
Bottom Bill Details overlay

Bill Details must NOT become another right-side panel.

The final design must look like a production-ready BizCopilot customer-management experience and must remain visually consistent with the frozen Customer Dashboard and the rest of the BizCopilot application.