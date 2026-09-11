BIZCOPILOT — CUSTOMER SCREEN
PART 1: CUSTOMER DASHBOARD / ON LOAD
FIGMA-LEVEL MASTER DESIGN PROMPT

Design ONLY Part 1: Customer Dashboard / On Load.

Do NOT design Customer Selected or Bill Selected states in this prompt.

BizCopilot is an offline-first billing/POS application for small Indian businesses. The Customer screen must feel like the same product as the existing BizCopilot Product, Category, Billing, Offer and Payment screens.

PRIMARY DESIGN PRIORITY

Fast → Clear → Minimal Navigation → Business Focused → Premium but Practical

Avoid unnecessary decoration, excessive cards, redundant actions, complicated CRM patterns, excessive whitespace, or unnecessary navigation.

--------------------------------------------------
1. SCREEN PURPOSE
--------------------------------------------------

The Customer screen is a dedicated customer-management workspace.

When the user opens Customers, the initial state must always be:

CUSTOMER DASHBOARD / CUSTOMER LIST

The user should immediately be able to:

• See customer information
• Search customers
• Filter customers
• Add a customer
• See customer activity/value at a glance
• Edit a customer
• Deactivate a customer
• Open customer details

The initial screen must NOT automatically open any customer.

--------------------------------------------------
2. FROZEN CUSTOMER TABLE COLUMNS
--------------------------------------------------

Desktop and Tablet initial dashboard must contain:

1. Seq. No.
2. Customer
3. Phone
4. Bills
5. Total Spent
6. Last Visit
7. Status + Toggle
8. Edit
9. Deactivate
10. Arrow

IMPORTANT:

• Seq. No. is a number, NOT a checkbox.
• Do NOT add selection checkboxes.
• Do NOT add a three-dot/action menu.
• Do NOT add a separate View action.
• Arrow and row interaction open Customer Details.
• Edit uses a pencil icon.
• Deactivate uses a trash/delete icon.
• Trash means DEACTIVATE, not permanent deletion.
• Historical bills must remain intact after customer deactivation.

--------------------------------------------------
3. DESKTOP VIEWPORT STRUCTURE
--------------------------------------------------

Create a full-page desktop application workspace.

Structure:

Persistent left navigation
        ↓
Customer workspace
        ↓
Page header
        ↓
Compact customer KPI/summary area
        ↓
Search + Filters + Add Customer toolbar
        ↓
Customer table
        ↓
Pagination / Rows per page

Desktop layout concept:

--------------------------------------------------
| BizCopilot / Sidebar | Customers                  |
|                      |                            |
| Dashboard            | KPI / Customer Summary    |
| Billing               |                            |
| Products              | Search          Filters   |
| Customers             |                     Add   |
| More                  |                            |
|                      | Customer Table             |
|                      |                            |
|                      |                            |
|                      | Pagination                |
--------------------------------------------------

Desktop principles:

• Persistent left navigation.
• Customer workspace uses remaining available width.
• Do not place the dashboard inside an unnecessarily narrow fixed-width container.
• Use horizontal space efficiently.
• Table must be dense enough for business usage while remaining comfortable to scan.
• Avoid excessive empty space.
• Do not create a page-level scrollbar simply because the customer list is long.
• Customer list/table owns scrolling when required.

--------------------------------------------------
4. TABLET VIEWPORT STRUCTURE
--------------------------------------------------

Tablet must preserve the same information hierarchy while adapting to available width.

Structure:

Header
↓
Customer title + Add Customer
↓
Compact KPI summary
↓
Search + Filters
↓
Optimized Customer List/Table
↓
Count + Rows per page + Pagination
↓
Tablet navigation

Tablet must remain comfortable for touch interaction.

Do NOT shrink desktop text and controls excessively just to force every desktop column into a narrow width.

If required, adapt the physical representation while preserving the frozen information hierarchy.

Do NOT introduce page-level horizontal scrolling.

--------------------------------------------------
5. MOBILE VIEWPORT STRUCTURE
--------------------------------------------------

Mobile is a customer-list-first experience.

Structure:

Customers                         + Add
↓
Compact KPI summary
↓
Search customers
↓
Filters
↓
Customer list
↓
Count + Rows per page + Pagination
↓
Bottom navigation

Do NOT attempt to squeeze the desktop table into a phone-width table.

Use compact customer list rows.

Mobile row hierarchy:

Primary:
Customer Name

Secondary:
Phone

Supporting:
Bills + Total Spent + Last Visit

Actions:
Status Toggle + Edit + Deactivate + Arrow

Example:

--------------------------------------------------
| 01  Arun Kumar              Active            |
|     +91 98765 43210                            |
|     12 bills · ₹8,450 · Last visit 18 Aug     |
|                              Edit Delete   →   |
--------------------------------------------------

Keep rows compact and easy to scan.

Do not turn every customer into a large profile card.

--------------------------------------------------
6. PAGE HEADER
--------------------------------------------------

Use the existing BizCopilot application header/design system.

Page title:

Customers

Primary action:

+ Add Customer

Add Customer must be the single obvious customer creation action.

Do NOT add:

• Create Bill
• New Bill
• More
• Three-dot menu
• Duplicate Add Customer buttons

--------------------------------------------------
7. CUSTOMER KPI / SUMMARY AREA
--------------------------------------------------

Below the page heading, provide a compact customer summary area.

Use the existing BizCopilot KPI / metric-card visual language.

The KPI section should provide useful customer-level information at a glance.

Keep KPI cards:

• Compact
• Aligned
• Information dense
• Easy to scan
• Consistent with BizCopilot

Do NOT create a large analytics dashboard.

Do NOT allow KPI cards to consume most of the screen.

The customer list remains the primary content.

--------------------------------------------------
8. SEARCH
--------------------------------------------------

Place customer search prominently above the customer list.

Search field:

"Search customers by name or phone"

Use a search icon.

Search supports:

• Customer name
• Phone number

Do NOT create separate Name Search and Phone Search fields.

Search behavior:

Use debounced search.

Do NOT refresh/search the customer list on every individual keystroke.

Design states:

• Default
• Typing
• Searching/loading
• Results
• No results
• Clear search

--------------------------------------------------
9. FILTERS
--------------------------------------------------

Place a Filters button beside the search field.

Use the existing BizCopilot filter-button style.

Do NOT create separate filter buttons for every filter.

Do NOT create a large permanent filter section.

Customer filter popover should support customer-list filtering without navigating away.

At minimum provide:

Filters

Status

○ All
○ Active
○ Inactive

[Clear]                  [Apply]

Additional filters may be represented only if already defined by the Customer business/data model.

Do NOT invent unnecessary CRM filters.

--------------------------------------------------
10. DESKTOP CUSTOMER TABLE
--------------------------------------------------

Create a polished business table.

Frozen column order:

Seq. No.
Customer
Phone
Bills
Total Spent
Last Visit
Status
Edit
Deactivate
Arrow

Status:

Active   [ON]

or

Inactive [OFF]

The status text and toggle must be visually adjacent.

Edit:

Material Symbols Outlined:
edit

Deactivate:

Material Symbols Outlined:
delete

Important:
The delete/trash icon represents DEACTIVATE, not permanent deletion.

Details:

Material Symbols Outlined:
chevron_right / arrow_forward_ios

Do NOT add a separate View button.

--------------------------------------------------
11. CUSTOMER ROW INTERACTION
--------------------------------------------------

Desktop and Tablet:

Clicking the customer row OR arrow opens:

CUSTOMER SELECTED STATE

The entire row may be interactive.

Hover state:

Use a subtle background/border change.

Do NOT use dramatic animations.

Do NOT permanently highlight a row unless it is actually selected.

--------------------------------------------------
12. SAMPLE CUSTOMER DATA
--------------------------------------------------

Use realistic Indian-business customer data.

Example:

01   Arun Kumar      +91 98765 43210   12   ₹8,450    18 Aug 2026
02   Priya Stores    +91 98452 11890    8   ₹5,720    16 Aug 2026
03   Ravi            +91 90031 22441   21   ₹14,280   15 Aug 2026
04   Meena           +91 98840 55321    5   ₹2,150    12 Aug 2026

Use realistic Indian Rupee formatting.

The prototype should feel like a real Indian retail/POS application, not an international CRM.

--------------------------------------------------
13. MOBILE CUSTOMER ROW
--------------------------------------------------

Use a compact responsive list-row design.

Recommended structure:

01  Arun Kumar                       Active
    +91 98765 43210
    12 bills · ₹8,450 · Last visit 18 Aug
                              Edit  Delete  →

Primary information:
Customer name

Secondary:
Phone

Supporting:
Bills
Total Spent
Last Visit

Actions:
Status toggle
Edit
Deactivate
Arrow

Do NOT make rows excessively tall.

--------------------------------------------------
14. ADD CUSTOMER
--------------------------------------------------

Clicking Add Customer starts the Add Customer workflow.

Do NOT permanently display the Add Customer form on the dashboard.

The Add Customer form follows the frozen Customer Add/Edit design.

Fields:

• Customer Name — Required
• Phone — Optional
• +91 phone selector
• Notes — Optional

Primary action:

Save Customer

Responsive behavior:

Desktop:
Centered overlay

Tablet:
Centered/wider overlay

Mobile:
Bottom overlay extending nearly to the top with slight top spacing

Do NOT create a separate permanent Add Customer dashboard section.

--------------------------------------------------
15. PAGINATION
--------------------------------------------------

Customer lists use pagination.

Do NOT use:

• View More
• Infinite scrolling
• Load More

Desktop example:

Showing 1–12 of 126
Rows per page: 12
‹ 1 2 3 4 ›

Mobile/tablet should compress cleanly.

Example:

1–10 of 126    10 / page    ‹ 1 2 3 ›

Pagination must never be hidden behind mobile/tablet bottom navigation.

Provide enough bottom spacing so the complete pagination control remains visible and tappable.

--------------------------------------------------
16. SCROLLING
--------------------------------------------------

Desktop:

Do not scroll the entire page simply because there are many customers.

The customer list/table owns scrolling when required.

Tablet:

Same principle.

Mobile:

The customer list may scroll vertically.

Bottom navigation remains accessible.

Avoid unnecessary nested scrolling.

Never create:

Page scrollbar
    ↓
Table scrollbar
    ↓
Row scrollbar

Use one owning scroll region for the customer collection.

--------------------------------------------------
17. EMPTY STATE
--------------------------------------------------

Design an empty customer state.

Example:

Customers

No customers yet

Add your first customer to start tracking
customer history and billing activity.

[ + Add Customer ]

Keep the empty state simple.

Do NOT use a huge decorative illustration.

--------------------------------------------------
18. NO SEARCH RESULTS
--------------------------------------------------

When no customers match:

No customers found

Try a different name or phone number.

Provide:

Clear Search

if appropriate.

Do not misleadingly imply that the searched person definitely needs to be created.

--------------------------------------------------
19. INACTIVE CUSTOMER
--------------------------------------------------

Inactive customers remain visible when the appropriate filter is selected.

Inactive customers should communicate their state using:

• Muted status treatment
• Inactive toggle
• Normal historical information

Do NOT remove historical information.

--------------------------------------------------
20. DEACTIVATE INTERACTION
--------------------------------------------------

When the user taps the deactivate/trash icon, use the existing BizCopilot confirmation dialog.

Example:

Deactivate customer?

"Arun Kumar will no longer be available as an
active customer for new billing.

Existing bills and customer history will remain unchanged."

Actions:

Cancel
Deactivate

Do NOT use:

Delete Permanently

--------------------------------------------------
21. REACTIVATION
--------------------------------------------------

If an inactive customer is displayed, the status toggle can reactivate the customer according to existing Customer business rules.

Visual state:

Active     [ON]

Inactive   [OFF]

Do NOT introduce a separate Reactivate button when the frozen design already uses the status toggle.

--------------------------------------------------
22. TOAST FEEDBACK
--------------------------------------------------

Use the existing BizCopilot toast system.

Examples:

Success:
Customer added successfully

Success:
Customer updated successfully

Info:
Customer deactivated

If the existing application supports Undo for this operation, use the frozen Undo toast pattern.

Do NOT create custom notification designs.

--------------------------------------------------
23. ICON SYSTEM
--------------------------------------------------

Use:

Material Symbols Outlined

Required icons:

• search
• add
• filter_list
• edit
• delete
• chevron_right / arrow_forward_ios
• close / clear
• pagination arrows

Use one consistent icon system.

Maintain consistent:

• Optical size
• Weight
• Alignment
• Touch area

--------------------------------------------------
24. VISUAL DESIGN
--------------------------------------------------

The Customer Dashboard must inherit the existing BizCopilot design system.

Visual personality:

PREMIUM BUSINESS SOFTWARE
NOT FLASHY SAAS MARKETING

Use:

• Clean surfaces
• Soft borders
• Controlled corner radius
• Strong typography hierarchy
• Subtle shadows only where consistent with existing BizCopilot screens
• Consistent spacing
• Restrained accent color
• Clear Active/Inactive states

Avoid:

• Large gradients
• Glassmorphism
• Excessive shadows
• Giant KPI cards
• Neon colors
• Decorative illustrations
• Excessive rounded containers
• Excessive whitespace
• Multiple competing accent colors

--------------------------------------------------
25. TYPOGRAPHY
--------------------------------------------------

Use the existing BizCopilot typography system.

Hierarchy:

Customers
↓
KPI labels / values
↓
Search / filter controls
↓
Customer name
↓
Phone / secondary information
↓
Table metadata

Customer name must have stronger hierarchy than phone and metadata.

Do not make every field bold.

--------------------------------------------------
26. RESPONSIVE DESIGN
--------------------------------------------------

Do NOT simply scale the desktop screen down.

Create three intentional compositions:

Desktop:
Dashboard + Full Customer Table

Tablet:
Dashboard + Optimized Customer Table/List

Mobile:
Dashboard + Compact Customer List

The information hierarchy remains consistent while physical layout changes.

--------------------------------------------------
27. FLUID WIDTH BEHAVIOR
--------------------------------------------------

Do not use a fixed-width dashboard.

The workspace must expand into available screen width.

Desktop:
Sidebar + flexible customer workspace

Search:
Expands into available width

Table:
Uses available horizontal space

KPI:
Wrap naturally when necessary

Mobile:
Use full available width with safe horizontal padding

Do NOT create unwanted horizontal scrolling.

--------------------------------------------------
28. TOUCH TARGETS
--------------------------------------------------

All interactive controls must be comfortable on tablet/mobile.

Especially:

• Add Customer
• Search
• Filters
• Status Toggle
• Edit
• Deactivate
• Arrow
• Pagination

Do NOT place tiny action icons immediately beside each other without adequate touch area.

--------------------------------------------------
29. ACCESSIBILITY
--------------------------------------------------

Ensure:

• Search has an accessible name.
• Filters button has an accessible name.
• Status toggle communicates Active/Inactive state.
• Edit action has accessible label.
• Deactivate action has accessible label.
• Arrow/row navigation has accessible meaning.
• Keyboard focus states exist on desktop.
• Color is never the only indicator of status.
• Text has sufficient contrast.

--------------------------------------------------
30. FIGMA COMPONENT STRUCTURE
--------------------------------------------------

Build the design using reusable components.

Suggested component hierarchy:

CustomerScreen
│
├── AppHeader
│
├── CustomerPageHeader
│   ├── Title
│   └── AddCustomerButton
│
├── CustomerKpiSection
│   └── MetricCard
│
├── CustomerToolbar
│   ├── SearchInput
│   └── FilterButton
│
├── CustomerList
│   ├── CustomerTable       Desktop
│   └── CustomerListRow     Tablet/Mobile
│
├── CustomerStatusToggle
│
├── CustomerRowActions
│   ├── Edit
│   ├── Deactivate
│   └── OpenDetails
│
├── EmptyState
├── NoResultsState
│
└── CustomerPagination

Create responsive variants:

Desktop
Tablet
Mobile

Create interaction/state variants:

Default
Hover
Pressed
Focused
Active
Inactive
Disabled
Loading
Empty
No Results

--------------------------------------------------
31. FIGMA AUTO LAYOUT
--------------------------------------------------

Use Auto Layout throughout.

Page:
Vertical Auto Layout

Desktop/tablet toolbar:
Horizontal Auto Layout

Mobile:
Responsive wrapping/stacking

Customer rows:
Horizontal Auto Layout on desktop/tablet
Responsive nested Auto Layout on mobile

Do NOT use absolute positioning for the core layout.

Use absolute positioning only for small visual details when genuinely appropriate.

--------------------------------------------------
32. NAVIGATION RULE
--------------------------------------------------

The Customer Dashboard is NOT a Billing screen.

Do NOT add:

• Create Bill
• New Bill
• Add to Cart
• Quick Bill
• Three-dot customer menu
• View button
• Customer billing action

Customer screen manages customers and provides access to customer history/details.

Billing remains a separate primary workflow.

--------------------------------------------------
33. DO NOT ADD
--------------------------------------------------

Do NOT add any of the following:

• Inventory
• Stock
• Credit balance
• Loyalty points
• Customer segmentation
• Marketing campaigns
• Customer tags
• Membership
• Rewards
• Create Bill
• Three-dot menus
• View button
• Checkbox selection
• Bulk actions
• Complicated CRM controls
• Large analytics charts
• Customer profile cards on dashboard
• Permanent Add Customer form
• Excessive KPI cards
• Horizontal page scrolling

--------------------------------------------------
34. FINAL FIGMA AGENT INSTRUCTION
--------------------------------------------------

The final result must look like a real production POS customer-management screen, not a generic CRM template.

Prioritize the cashier/business owner's ability to quickly:

Search → Identify → Manage → Open Customer

Preserve the frozen BizCopilot interaction model:

Customer Dashboard
        ↓
Customer Selected
        ↓
Bill Selected

This prompt covers ONLY:

CUSTOMER DASHBOARD / ON LOAD

Do NOT design Customer Selected or Bill Selected states yet.

Keep the screen visually consistent with the existing BizCopilot Product, Category, Billing, Offer and Payment designs.

Use:

• Existing BizCopilot design tokens
• Material Symbols Outlined
• Responsive Auto Layout
• Fluid sizing
• Section-level scrolling
• Production-quality spacing
• Clear responsive hierarchy
• Touch-friendly controls

The finished Figma design must be implementation-ready for Angular and must clearly communicate the desktop, tablet and mobile Customer Dashboard states without requiring verbal explanation.