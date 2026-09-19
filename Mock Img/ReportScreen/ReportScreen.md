======================================================================
BIZCOPILOT — SALES REPORT MASTER UI/UX DESIGN PROMPT
======================================================================

ROLE:
You are a senior product designer, senior UI/UX designer, Figma
designer, responsive design specialist, and SaaS/POS product designer.

You are designing the BizCopilot V1 SALES REPORT screen.

IMPORTANT:
This prompt defines the FROZEN Sales Report design.

Design this exact experience for:
1. Desktop
2. Tablet
3. Mobile

Do NOT redesign the Reports landing page.
Do NOT redesign Dashboard/Home.
Do NOT redesign Billing.
Do NOT redesign Customer Reports.
Do NOT redesign Product Reports.
Do NOT redesign Offer Reports.
Do NOT redesign Payment Reports.

This task is ONLY:

                REPORTS → SALES REPORT

The screen must be simple, premium, highly useful, easy for a
small-business owner to understand, and consistent across all
BizCopilot screens.

======================================================================
1. CORE PRODUCT PRINCIPLE
======================================================================

The Sales Report answers:

                    "WHAT HAPPENED?"

It should show the user the important sales facts for a selected
period without overwhelming them with analytics controls.

BizCopilot has separate responsibilities:

Reports:
    What happened?

Business Intelligence:
    Why did it happen?

AI:
    What should I do next?

Do NOT make the Sales Report compete with Business Intelligence or AI.

The Sales Report must present reliable business facts.

AI can provide deeper analysis when the user explicitly asks for it.

======================================================================
2. FINAL FROZEN SALES REPORT STRUCTURE
======================================================================

The primary Sales Report contains ONLY these major sections:

1. Page Header (Clean title & description without Back button)
2. Date / Period Control
3. Optional Filter
4. Optional Ask AI action
5. Four KPI cards
6. Sales Trend (With dynamic date filtering & Sales Amount indicator)
7. Payment Methods (Desktop/Tablet Donut Chart with center total, Mobile Horizontal Bars, with By % / By Amount filter)
8. Top Products Performance Card (With Top/Low Selling & Revenue/Units pill filters)
9. Offers Performance Card (With Most Used / Best Conversion / Highest Revenue pill filters)
10. Sales Details Table
11. Pagination
12. Export

Nothing else should be permanently visible.

======================================================================
3. EXPLICITLY REMOVED FROM THE PRIMARY SALES REPORT UI
======================================================================

DO NOT SHOW:

❌ Compare With Previous Period
❌ Group By control
❌ Reset button
❌ Multiple visible page filter dropdowns
❌ Top Categories
❌ Top Customers
❌ Customer ranking
❌ Category ranking
❌ Profit
❌ Profit Margin
❌ P&L
❌ Revenue forecast
❌ AI recommendation cards
❌ Complex report-builder toolbar
❌ Saved Report button in the primary screen
❌ Unnecessary secondary KPIs

Note: Product ranking and Offer performance cards are included as dedicated visual sections with contextual inline card-level pill filters (Top/Low Selling, By Revenue/Units, Most Used/Best Conversion/Highest Revenue).

======================================================================
4. FINAL INFORMATION ARCHITECTURE
======================================================================

DESKTOP:

Sidebar
    ↓
Top Application Header
    ↓
Sales Report Header
    ↓
Date + Filter + Ask AI
    ↓
Four KPI Cards
    ↓
Sales Trend + Payment Methods (Donut Chart)
    ↓
Top Products Performance + Offers Performance
    ↓
Sales Details
    ↓
Pagination

TABLET:

Top Application Header
    ↓
Sales Report Header
    ↓
Date + Filter + Ask AI
    ↓
Four KPI Cards
    ↓
Sales Trend
    ↓
Payment Methods (Donut Chart)
    ↓
Top Products Performance
    ↓
Offers Performance
    ↓
Sales Details
    ↓
Pagination

MOBILE:

Mobile Application Header
    ↓
Sales Report Header
    ↓
Export
    ↓
Date + Filter
    ↓
Ask AI
    ↓
Four KPI Cards
    ↓
Sales Trend
    ↓
Payment Methods (Horizontal Progress Bars)
    ↓
Top Products Performance
    ↓
Offers Performance
    ↓
Sales Details
    ↓
Bottom Navigation

======================================================================
5. DESKTOP VIEWPORT STRUCTURE
======================================================================

Target:
1024px and above.

Recommended conceptual layout:

┌──────────────┬───────────────────────────────────────────────────────┐
│              │ Top Application Header                               │
│  BizCopilot  ├───────────────────────────────────────────────────────┤
│              │                                                       │
│ Dashboard    │ ← Back to Reports                                    │
│ Billing      │                                                       │
│ Products     │ Sales Report                         [Export ▼]      │
│ Offers       │ View and analyze your sales for the selected period │
│ Customers    │                                                       │
│ Reports  ◀   │ ┌─────────────────────────────────────────────────┐ │
│ Settings     │ │ 📅 Today ▼      [ Filter ]      [ ✨ Ask AI ] │ │
│              │ └─────────────────────────────────────────────────┘ │
│              │                                                       │
│              │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐│
│              │ │ ₹24,680  │ │ 128      │ │ ₹192.86  │ │ ₹1,240   ││
│              │ │Sales     │ │Bills     │ │Avg Bill  │ │Discount  ││
│              │ └──────────┘ └──────────┘ └──────────┘ └──────────┘│
│              │                                                       │
│              │ ┌─────────────────────────┐ ┌──────────────────────┐│
│              │ │ Sales Trend             │ │ Payment Methods      ││
│              │ │                         │ │                      ││
│              │ │       ╭────╮            │ │ UPI      42%         ││
│              │ │   ╭───╯    ╰──          │ │ Cash     28%         ││
│              │ │                         │ │ Card     20%         ││
│              │ └─────────────────────────┘ │ Mixed    10%         ││
│              │                             └──────────────────────┘│
│              │                                                       │
│              │ ┌─────────────────────────────────────────────────┐ │
│              │ │ Sales Details                                   │ │
│              │ │                                                 │ │
│              │ │ Date       Bills    Sales       Avg Bill        │ │
│              │ │ 19 Sep      128    ₹24,680      ₹192.86        │ │
│              │ │ 18 Sep      116    ₹21,420      ₹184.65        │ │
│              │ │ 17 Sep      121    ₹23,180      ₹191.57        │ │
│              │ │                                                 │ │
│              │ │              1  2  3  4  5  →                  │ │
│              │ └─────────────────────────────────────────────────┘ │
└──────────────┴───────────────────────────────────────────────────────┘

IMPORTANT:
Desktop should use the available width efficiently.

Do not create huge empty areas.

Do not make every section unnecessarily tall.

Do not use excessive cards.

======================================================================
6. TABLET VIEWPORT STRUCTURE
======================================================================

Target:
600px–1023px.

Tablet is NOT a scaled-down desktop.

Recompose the layout.

Conceptual structure:

┌────────────────────────────────────────────────────────────┐
│ BizCopilot Application Header                              │
├────────────────────────────────────────────────────────────┤
│ ← Back to Reports                                          │
│                                                            │
│ Sales Report                              [Export ▼]       │
│ View and analyze your sales for the selected period        │
│                                                            │
│ [ 📅 Today ▼ ]      [ Filter ]       [ ✨ Ask AI ]         │
│                                                            │
│ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐  │
│ │ Sales     │ │ Bills     │ │ Avg Bill  │ │ Discount  │  │
│ │ ₹24,680   │ │ 128       │ │ ₹192.86   │ │ ₹1,240    │  │
│ └───────────┘ └───────────┘ └───────────┘ └───────────┘  │
│                                                            │
│ ┌────────────────────────────────────────────────────────┐ │
│ │ Sales Trend                                             │ │
│ │                                                        │ │
│ │              ╭────╮                                    │ │
│ │          ╭───╯    ╰──                                 │ │
│ └────────────────────────────────────────────────────────┘ │
│                                                            │
│ ┌────────────────────────────────────────────────────────┐ │
│ │ Payment Methods                                         │ │
│ │ UPI     ██████████       42%       ₹10,366             │ │
│ │ Cash    ███████          28%       ₹6,910              │ │
│ │ Card    █████            20%       ₹4,936              │ │
│ │ Mixed   ██               10%       ₹2,468              │ │
│ └────────────────────────────────────────────────────────┘ │
│                                                            │
│ ┌────────────────────────────────────────────────────────┐ │
│ │ Sales Details                                           │ │
│ │ Date       Bills       Sales       Avg Bill             │ │
│ │ 19 Sep      128       ₹24,680      ₹192.86              │ │
│ │ 18 Sep      116       ₹21,420      ₹184.65              │ │
│ │ 17 Sep      121       ₹23,180      ₹191.57              │ │
│ └────────────────────────────────────────────────────────┘ │
│                                                            │
│                    Pagination                              │
└────────────────────────────────────────────────────────────┘

Do not introduce page-level horizontal scrolling.

If the table becomes constrained:
- reduce secondary spacing
- adapt column widths
- use appropriate responsive table behavior
- preserve readability

Never make text tiny simply to force every column into the viewport.

======================================================================
7. MOBILE VIEWPORT STRUCTURE
======================================================================

Target:
0–599px.

Mobile must be deliberately redesigned for phone interaction.

DO NOT simply shrink the desktop layout.

Conceptual structure:

┌─────────────────────────────────────┐
│ Mobile Application Header           │
│ ☰ BizCopilot  Business ▼      NK   │
├─────────────────────────────────────┤
│                                     │
│ ← Back to Reports                  │
│                                     │
│ Sales Report                 Export │
│ View and analyze your sales...     │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ 📅 Today                    ▼  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ [ Filter ]              [ ✨ Ask AI]│
│                                     │
│ ┌───────────────┐ ┌───────────────┐│
│ │ Total Sales   │ │ Total Bills   ││
│ │ ₹24,680       │ │ 128           ││
│ └───────────────┘ └───────────────┘│
│                                     │
│ ┌───────────────┐ ┌───────────────┐│
│ │ Average Bill  │ │ Discount      ││
│ │ ₹192.86       │ │ ₹1,240        ││
│ └───────────────┘ └───────────────┘│
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Sales Trend                    │ │
│ │                                 │ │
│ │       ╭────╮                   │ │
│ │   ╭───╯    ╰──                 │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Payment Methods                 │ │
│ │                                 │ │
│ │ UPI    ██████████  42% ₹10,366 │ │
│ │ Cash   ███████     28% ₹6,910  │ │
│ │ Card   █████       20% ₹4,936  │ │
│ │ Mixed  ██          10% ₹2,468  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Sales Details          View All │ │
│ │                                 │ │
│ │ Date       Bills   Sales  Avg  │ │
│ │ 19 Sep      128   ₹24.6K ₹193 │ │
│ │ 18 Sep      116   ₹21.4K ₹185 │ │
│ │ 17 Sep      121   ₹23.1K ₹192 │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│ Dashboard Billing Products Reports  │
│                         More        │
└─────────────────────────────────────┘

Mobile requirements:

- No horizontal page scrolling.
- Bottom navigation must never cover content.
- Safe-area spacing must be provided.
- Long Sales Details content may scroll within its owning area.
- Do not create nested unnecessary scrollbars.

======================================================================
8. PAGE HEADER
======================================================================

Desktop/tablet:

Title:
Sales Report

Subtitle:
View and analyze your sales for the selected period

Right:
[ Export ▼ ]

Mobile:

Title:
Sales Report

Subtitle may wrap to two lines.

Export remains accessible without consuming excessive width.

Note:
The header back button (`header-back`) has been explicitly removed for a clean, streamlined header.

The header must be visually strong but compact.

Do not use oversized marketing typography.

======================================================================
9. DATE / PERIOD CONTROL
======================================================================

This is the PRIMARY report control.

Use:

[ 📅 Today ▼ ]

Supported periods:

- Today
- Yesterday
- This Week
- This Month
- This Year
- Custom Date Range

These correspond to the V1 reporting period capabilities.

When the user changes the period:
- KPI values update
- Sales Trend updates
- Payment summary updates
- Sales Details updates

The selected period must be clearly visible.

For Custom Date Range:

Show a clean date range selector.

Example:

[ 01 Sep 2026 → 19 Sep 2026 ]

Do not add a separate "Compare With Previous Period" control.

======================================================================
10. FILTER
======================================================================

There is ONLY ONE visible Filter action.

Example:

[ Filter ]

Do NOT permanently expose multiple filter dropdowns.

When Filter is opened, show the relevant filtering options.

Supported report filters include:

- Product
- Category
- Customer
- Offer
- Payment Method
- Bill Status

Date Range is handled separately by the primary Date control.

Filter UI should be:
- Modal on desktop/tablet when appropriate
- Bottom sheet on mobile

The user can:
- select filters
- Clear filters
- Apply filters

Example mobile bottom sheet:

┌─────────────────────────────────────┐
│ Filters                         ✕   │
├─────────────────────────────────────┤
│ Product                             │
│ [ All Products ▼ ]                  │
│                                     │
│ Category                            │
│ [ All Categories ▼ ]                │
│                                     │
│ Customer                            │
│ [ All Customers ▼ ]                 │
│                                     │
│ Offer                               │
│ [ All Offers ▼ ]                    │
│                                     │
│ Payment Method                      │
│ [ All Payment Methods ▼ ]           │
│                                     │
│ Bill Status                         │
│ [ All Status ▼ ]                    │
│                                     │
│ [ Clear ]              [ Apply ]    │
└─────────────────────────────────────┘

IMPORTANT:
Do not make these filters visible permanently on the main screen.

======================================================================
11. ASK AI
======================================================================

BizCopilot has an AI capability.

The Sales Report may expose:

[ ✨ Ask AI ]

This is an optional contextual action.

Its purpose is to allow the user to ask deeper questions about the
currently displayed report data.

Examples:

- Why were sales lower yesterday?
- What changed this week?
- What payment method is being used most?
- What caused the sales drop?
- What should I pay attention to?

IMPORTANT:
The Sales Report itself does NOT become an AI analytics dashboard.

AI should provide:
- explanations
- patterns
- recommendations
- deeper analysis

based on the report/business data available to it.

Do not add large AI insight cards permanently to the Sales Report.

======================================================================
12. KPI CARDS
======================================================================

There are EXACTLY FOUR primary KPI cards.

------------------------------------------------------------
KPI 1 — TOTAL SALES
------------------------------------------------------------

Label:
Total Sales

Example:
₹24,680

Semantic icon:
Sales / bar-chart / revenue-style icon

Function:
Shows total completed sales amount for the selected period.

------------------------------------------------------------
KPI 2 — TOTAL BILLS
------------------------------------------------------------

Label:
Total Bills

Example:
128

Semantic icon:
Receipt / bill/document icon

Function:
Shows number of relevant bills in the selected report period.

------------------------------------------------------------
KPI 3 — AVERAGE BILL
------------------------------------------------------------

Label:
Average Bill

Example:
₹192.86

Semantic icon:
₹ / currency / calculation-style icon

Function:
Shows average bill value for the selected period.

------------------------------------------------------------
KPI 4 — DISCOUNT GIVEN
------------------------------------------------------------

Label:
Discount Given

Example:
₹1,240

Semantic icon:
Discount tag / price-tag icon

Function:
Shows discount amount for the selected period.

IMPORTANT:
Do NOT add Profit.

Profit reporting is V2.

Do NOT add:
- Profit Margin
- Net Profit
- Expense
- P&L

======================================================================
13. KPI VISUAL DESIGN
======================================================================

Desktop:
Four KPI cards in one horizontal row.

Tablet:
Four compact KPI cards if space permits.

Mobile:
Two-column grid:

┌──────────────┐ ┌──────────────┐
│ Total Sales  │ │ Total Bills  │
│ ₹24,680      │ │ 128          │
└──────────────┘ └──────────────┘

┌──────────────┐ ┌──────────────┐
│ Average Bill │ │ Discount     │
│ ₹192.86      │ │ ₹1,240       │
└──────────────┘ └──────────────┘

Do not make mobile KPI cards excessively tall.

Each card:
- White background
- Soft border
- Very subtle shadow
- Rounded corners
- Compact internal spacing
- Strong value typography
- Secondary label
- Semantic icon

Avoid excessive decorative elements.

======================================================================
14. SALES TREND
======================================================================

This is the PRIMARY visualization.

Title:
Sales Trend

Subtitle may dynamically indicate period.

Examples:

Today:
Hourly sales for today

This Week:
Daily sales for this week

This Month:
Sales trend for this month

Do not add complex chart controls.

The chart should automatically adapt to the selected period.

Today:
X-axis can show:
6 AM, 9 AM, 12 PM, 3 PM, 6 PM, 9 PM

Weekly:
Mon, Tue, Wed, Thu, Fri, Sat, Sun

Monthly:
appropriate date/day grouping

Yearly:
appropriate monthly grouping

Custom:
adapt according to selected range.

Use a clean line chart.

Optional:
Subtle data points.

Hover/tap:
Show a compact tooltip.

Example:

3:00 PM
₹8,240

Do not create:
- chart mode toggle
- amount/bills toggle
- multiple series unless genuinely necessary
- excessive legends
- unnecessary chart controls

The chart's job is simply to show the sales trend.

======================================================================
15. PAYMENT METHODS
======================================================================

Payment Methods is a key financial breakdown visualization.

Title:
Payment Method Breakdown

Subtitle:
Total sales by payment method

Viewport Behavior:
- MOBILE: Uses horizontal progress bars showing payment method name, color indicator, percentage (%), and total amount (₹).
- DESKTOP & TABLET: Uses an interactive Donut Chart with a center total revenue & amount indicator, paired with a right-hand legend showing payment method dot indicators, names, percentages, and total amounts.

Header Controls:
Features an inline pill-toggle filter:
- [ By % ] (Sort legend by percentage descending)
- [ By Amount ] (Sort legend by currency amount descending)

Supported Payment Types:
- UPI (Primary brand purple `#7C3AED`)
- Cash (Success green `#10B981`)
- Credit/Debit Card (Cyan accent `#06B6D4`)
- Mixed/Other (Amber warning `#F59E0B`)

======================================================================
15B. TOP PRODUCTS PERFORMANCE CARD
======================================================================

Title:
Top Selling Products

Subtitle:
Best performing products by volume and revenue

Header Controls:
Features two inline contextual pill toggles:
1. Direction toggle: [ Top Selling | Low Selling ]
2. Metric toggle: [ By Revenue | By Units ]

Content Structure:
- Rank indicator badge (#1 to #5)
- Product Name & Category pill tag
- Metric breakdown (Units Sold count & Revenue ₹)
- Progress bar representing relative contribution %

Interactive Behavior:
- Toggling "Top Selling" vs "Low Selling" re-ranks and displays top 5 highest or lowest performing products dynamically.
- Toggling "By Revenue" vs "By Units" re-sorts products by total earnings or unit volume.

======================================================================
15C. OFFERS PERFORMANCE CARD
======================================================================

Title:
Offers Performance

Subtitle:
Promotion analytics

Header Controls:
Features an inline contextual pill-toggle filter:
- [ Most Used | Best Conversion | Highest Revenue ]

Content Structure:
- Offer Title & Promo Code pill tag
- Usage Count stat
- Conversion Rate %
- Total Revenue generated ₹
- Discount Given amount ₹

Interactive Behavior:
- Toggling "Most Used" sorts offers by redemption count.
- Toggling "Best Conversion" sorts offers by conversion rate %.
- Toggling "Highest Revenue" sorts offers by gross revenue generated.

======================================================================
15D. INLINE CARD-LEVEL FILTERS (DESIGN PATTERN)
======================================================================

All chart and data cards (Payment Methods, Top Products, Offers Performance) incorporate localized inline card filters in their top-right header corner.

UI Pattern:
- Compact segmented track (`#F1F5F9` background, `4px` padding)
- White active pill tab (`#FFFFFF` with subtle shadow `0 1px 2px rgba(0,0,0,0.05)`)
- Slate gray inactive text (`#64748B`), dark navy active text (`#0F172A`, 600 weight)
- Responsive wrapping: Stack vertically on mobile viewports to prevent horizontal overflow.

======================================================================
16. SALES DETAILS
======================================================================

This is the primary detailed data section.

Title:
Sales Details

Subtitle:
Daily sales summary for the selected period

For a daily report, the table may represent the selected period
appropriately.

Primary columns:

Date
Bills
Sales
Average Bill

Example:

Date        Bills       Sales        Avg Bill
------------------------------------------------
19 Sep       128       ₹24,680       ₹192.86
18 Sep       116       ₹21,420       ₹184.65
17 Sep       121       ₹23,180       ₹191.57
16 Sep        98       ₹18,760       ₹191.43
15 Sep       104       ₹20,340       ₹195.58

Do not add excessive columns.

Do NOT include:
- Customer
- Category
- Product
- Payment Method
- Offer
- Profit

as default Sales Details columns.

Those belong to their respective reports or optional filtering.

======================================================================
17. SALES DETAILS — MOBILE
======================================================================

Do not force a large desktop table onto a phone.

Use a compact mobile table/list.

Example:

┌───────────────────────────────────┐
│ Date       Bills   Sales   Avg    │
├───────────────────────────────────┤
│ 19 Sep      128   ₹24.6K  ₹193   │
│ 18 Sep      116   ₹21.4K  ₹185   │
│ 17 Sep      121   ₹23.1K  ₹192   │
└───────────────────────────────────┘

If necessary, use:
- compact typography
- shortened currency display
- horizontal internal table scroll ONLY if unavoidable

Prefer responsive recomposition over horizontal page scrolling.

"View All" may be shown when only a compact subset is displayed.

======================================================================
18. PAGINATION
======================================================================

Sales Details supports pagination.

Desktop/tablet:

Showing 1–5 of 30 records

[ ← ] [1] [2] [3] [4] [5] [→]

Rows per page:
[ 5 per page ▼ ]

Mobile:
Use compact pagination appropriate to available width.

Do not let pagination become hidden underneath mobile navigation.

Provide sufficient bottom padding.

Pagination belongs to the Sales Details section.

The entire application page should not become a giant scroll container.

======================================================================
19. EXPORT
======================================================================

Primary action:

[ Export ▼ ]

Supported V1 formats:

- PDF
- Excel
- CSV

Do NOT add:
- JSON
- WhatsApp export
- Email export
- Google Drive
- scheduled export
- complex export configuration

The export represents the CURRENT report.

If the user has:
- selected a date
- applied filters

the exported report should correspond to that current report state.

Desktop/tablet:
Use compact dropdown.

Example:

┌──────────────────────────────┐
│ Export Report                │
├──────────────────────────────┤
│ 📄 PDF                       │
│    Download as PDF           │
│                              │
│ 📊 Excel                     │
│    Download as Excel         │
│                              │
│ 📋 CSV                       │
│    Download as CSV           │
└──────────────────────────────┘

Mobile:
Use a bottom sheet.

Example:

┌─────────────────────────────────────┐
│ Export Sales Report             ✕   │
│                                     │
│ Export the current report           │
│ for the selected period.            │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ 📄 PDF                          │ │
│ │ Download PDF                    │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ 📊 Excel                        │ │
│ │ Download Excel                  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ 📋 CSV                          │ │
│ │ Download CSV                    │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Cancel                              │
└─────────────────────────────────────┘

After successful export:

Toast:
Sales Report exported successfully

======================================================================
20. ICON SYSTEM
======================================================================

Use ONE consistent icon family across the entire screen.

Icons must be:
- professional
- simple
- semantic
- consistent stroke weight
- consistent optical size
- consistent visual density

Recommended semantic mapping:

Back to Reports:
← Arrow Left

Date:
Calendar

Filter:
Sliders / Filter

Ask AI:
Sparkle / AI icon
Use a restrained AI sparkle icon.
Do not use a decorative magic illustration.

Export:
Download

Total Sales:
Bar Chart / Sales

Total Bills:
Receipt / Document

Average Bill:
₹ / Currency

Discount Given:
Tag / Discount

Sales Trend:
No separate decorative icon required.

Payment:
Payment method semantic icons or simple colored indicators.

Pagination:
Chevron Left
Chevron Right

Do NOT use:
- random emoji
- mixed icon libraries
- oversized icons
- decorative illustrations
- generic gear icons
- unnecessary icons beside every label

======================================================================
21. ICON SIZE GUIDANCE
======================================================================

Desktop:
Primary interface icons:
18–20px visual size

KPI icons:
20–24px

Action icons:
18–20px

Tablet:
18–22px

Mobile:
18–22px

Touch targets:
approximately 44px minimum for important interactive controls.

Do not make the icon itself 44px unless it is intentionally inside
a larger touch target.

======================================================================
22. COLOR SYSTEM
======================================================================

Use the established BizCopilot visual language.

Primary:
Deep navy / indigo for headings.

Primary action:
BizCopilot purple/indigo.

Brand accent:
Blue/cyan.

Background:
Very light blue/white.

Surface:
White.

Border:
Very subtle cool gray/blue.

Text:
Deep navy.

Secondary text:
Blue-gray.

Positive:
Green.

Warning:
Amber.

Destructive:
Red.

Payment colors may use restrained semantic differentiation.

IMPORTANT:
Do not create a rainbow dashboard.

Colors should support comprehension rather than decoration.

======================================================================
23. TYPOGRAPHY
======================================================================

Use the existing BizCopilot typography system.

Hierarchy:

Page title:
Strong, prominent.

Page subtitle:
Smaller, muted.

Section title:
Medium/strong.

KPI value:
Large and bold.

KPI label:
Smaller and secondary.

Table header:
Medium weight.

Table data:
Regular/medium.

Do not use extremely large typography.

The interface should feel premium and dense enough for business use.

======================================================================
24. SPACING SYSTEM
======================================================================

Use a consistent spacing scale.

Avoid arbitrary spacing.

Recommended conceptual scale:

4
8
12
16
20
24
32

Desktop:
More breathing room between major sections.

Tablet:
Moderate spacing.

Mobile:
Compact spacing while preserving touch comfort.

Do not create giant vertical gaps.

======================================================================
25. CORNER RADIUS
======================================================================

Use a consistent BizCopilot radius system.

Suggested:

Small controls:
8–10px

Cards:
12–16px

Large mobile surfaces:
14–18px

Do not use extreme pill-shaped cards everywhere.

Buttons can use moderate rounding consistent with the rest
of BizCopilot.

======================================================================
26. SHADOWS
======================================================================

Use very subtle shadows.

Cards should look elevated but not floating dramatically.

Avoid:
- heavy shadows
- multiple shadow layers
- glowing effects
- glassmorphism

Premium should come from:
- spacing
- typography
- hierarchy
- consistency
- alignment
- restrained color

======================================================================
27. RESPONSIVE BEHAVIOR
======================================================================

The screen must NOT simply scale.

It must recompose.

Desktop:
- Sidebar
- Horizontal KPI row
- Two-column chart/payment area
- Full table

Tablet:
- Existing tablet shell
- Compact KPI row
- Full-width trend
- Payment below or beside depending on available width
- Responsive details table

Mobile:
- Mobile shell
- Two-column KPI grid
- Full-width trend
- Full-width payment section
- Compact sales details
- Bottom navigation

No page-level horizontal scrolling.

======================================================================
28. SCROLLING RULES
======================================================================

IMPORTANT:

Do not create a giant page-level scrolling container just because
Sales Details contains many records.

The screen should use sensible section ownership.

For desktop/tablet:
- report content may scroll vertically naturally
- table/data region should handle long datasets appropriately

For mobile:
- long Sales Details should own its data expansion/scroll behavior
- bottom navigation must remain usable
- safe-area bottom padding required

Avoid multiple nested scrollbars.

======================================================================
29. DESKTOP SIDEBAR
======================================================================

Use the existing BizCopilot sidebar.

Items:

Dashboard
Billing
Products
Offers
Customers
Reports
Settings

Reports is highlighted.

Do not redesign the global sidebar.

Do not add:
- Sales Reports
- Billing Reports
- Product Reports

as separate sidebar items.

Those are internal report categories.

======================================================================
30. APPLICATION HEADER
======================================================================

Use the existing BizCopilot application header.

Desktop:
- Business selector
- Notifications if part of existing shell
- User profile
- Role information

Tablet:
Use established tablet shell.

Mobile:
- Hamburger
- BizCopilot branding
- Business selector
- User/avatar

Do not redesign the global header as part of this task.

======================================================================
31. MOBILE BOTTOM NAVIGATION
======================================================================

Use the existing BizCopilot mobile navigation.

Reports must be clearly highlighted.

Example:

Dashboard
Billing
Products
Reports
More

Do not create a special Sales Report bottom navigation.

Do not allow bottom navigation to cover:
- Sales Details
- pagination
- final content

Provide safe-area spacing.

======================================================================
32. FILTER INTERACTION
======================================================================

Desktop:
Use a compact modal/popover where appropriate.

Tablet:
Use modal or side sheet depending on available width.

Mobile:
Use bottom sheet.

Filter sheet contains relevant report filters.

Buttons:

[ Clear ]
[ Apply ]

On Apply:
- report updates
- Filter button may display active filter count

Example:

[ Filter 2 ]

If no filters:
[ Filter ]

Do not keep seven dropdowns visible.

======================================================================
33. DATE INTERACTION
======================================================================

Desktop/tablet:
Dropdown/popover.

Mobile:
Bottom sheet/date picker.

Options:

Today
Yesterday
This Week
This Month
This Year
Custom Date Range

Custom Date Range:
Start Date
End Date

Apply/Done.

The selected period must remain visible after closing.

======================================================================
34. ASK AI INTERACTION
======================================================================

When user selects Ask AI:

Open the existing BizCopilot AI experience.

Pass contextual report information:
- report type = Sales
- selected period
- active filters
- relevant report data

AI should be able to answer contextual questions.

Do not design a new AI product inside Sales Report.

Do not create a giant AI panel permanently occupying the report screen.

======================================================================
35. EXPORT INTERACTION
======================================================================

Export menu must contain only:

PDF
Excel
CSV

Export current report state.

If export succeeds:
show success toast.

If export fails:
show error toast.

Example:

"Unable to export report. Please try again."

Do not block the entire application unnecessarily.

======================================================================
36. LOADING STATE
======================================================================

Create a proper loading state.

Desktop:
- skeleton KPI cards
- skeleton chart
- skeleton payment section
- skeleton sales table

Tablet:
same structure adapted.

Mobile:
- skeleton KPI grid
- skeleton chart
- skeleton payment list
- skeleton sales rows

Do not use a giant full-screen spinner unless required.

Preserve the final layout while loading.

======================================================================
37. EMPTY STATE
======================================================================

If there is no sales data for the selected period:

Title:
No sales data

Description:
There are no completed sales for the selected period.

Action:
[ Change Date ]

Do not show:
- fake zero charts
- misleading trend lines
- unnecessary empty cards

The four KPIs may show zero if appropriate.

======================================================================
38. FILTERED EMPTY STATE
======================================================================

If sales exist but the selected filters return no results:

Title:
No matching sales

Description:
Try changing or clearing your filters.

Actions:

[ Clear Filters ]

Do not imply that there are no sales in the business overall.

======================================================================
39. ERROR STATE
======================================================================

Title:
Unable to load Sales Report

Description:
Something went wrong while loading the report.

Action:

[ Retry ]

Keep the global application shell intact.

======================================================================
40. OFFLINE BEHAVIOR
======================================================================

BizCopilot is offline-first.

The Sales Report should clearly distinguish:
- available local data
- synchronization status if relevant

Do not create a complicated offline dashboard.

If report data is locally available:
show the report.

If data is not available:
show an appropriate state.

Do not silently present stale data as live/current without appropriate
context if the product has a synchronization indicator.

======================================================================
41. REPORT DATA RULES
======================================================================

Reports are READ-ONLY.

They do not modify:
- bills
- products
- customers
- offers
- payments

Historical reports remain unchanged.

Voided bills remain visible according to report behavior.

Walk-in customers are included in business data.

Archived products can appear in historical reporting.

Do not introduce business logic into the UI.

======================================================================
42. SALES REPORT CALCULATION BOUNDARY
======================================================================

The UI must NOT calculate:

- sales
- taxes
- discounts
- offers
- profit
- bill totals

The report system provides the appropriate report dataset.

The UI renders it.

Do not implement UI-side business calculations.

======================================================================
43. V1 SCOPE
======================================================================

V1 Sales Report supports:

Daily
Weekly
Monthly
Yearly
Custom Date Range

Export:

PDF
Excel
CSV

Reports support:
- filtering
- grouping internally where applicable
- sorting internally where applicable
- export

However, the primary Sales Report UI remains intentionally simple.

======================================================================
44. V1 EXCLUSIONS
======================================================================

Do not add:

❌ Profit Reports
❌ Inventory Reports
❌ Purchase Reports
❌ Expense Reports
❌ Branch Comparison
❌ Employee Reports
❌ Advanced financial analytics
❌ Forecasting
❌ AI recommendations permanently embedded
❌ Scheduled reports UI
❌ WhatsApp scheduling UI
❌ Email report UI
❌ JSON export

These are outside the primary V1 Sales Report experience.

======================================================================
45. FIGMA FILE STRUCTURE
======================================================================

Create the following Figma frames:

Reports/
│
├── Sales Report/
│
│   ├── 01_Sales_Report_Desktop
│   ├── 02_Sales_Report_Tablet
│   ├── 03_Sales_Report_Mobile
│   │
│   ├── States/
│   │   ├── Loading
│   │   ├── Empty
│   │   ├── Filtered_Empty
│   │   └── Error
│   │
│   └── Overlays/
│       ├── Date_Picker
│       ├── Filter_Sheet
│       ├── Export_Menu
│       └── Export_Mobile_Bottom_Sheet
│
└── Components/
    ├── ReportHeader
    ├── DateSelector
    ├── FilterButton
    ├── AskAIButton
    ├── ExportButton
    ├── ExportMenu
    ├── KPI_Card
    ├── SalesTrend
    ├── PaymentMethods
    ├── SalesDetailsTable
    ├── SalesDetailsMobile
    ├── Pagination
    ├── EmptyState
    ├── LoadingState
    └── ErrorState

======================================================================
46. FIGMA AUTO LAYOUT
======================================================================

Use Auto Layout extensively.

Desktop:
- Main workspace flexible width.
- Sidebar fixed according to existing shell.
- Header stretches to workspace width.
- KPI cards use equal/flexible widths.
- Sales Trend and Payment sections use responsive columns.
- Sales Details fills available width.

Tablet:
- Components adapt naturally.
- Avoid fixed-width cards.
- Avoid clipping.

Mobile:
- Content width = viewport minus horizontal padding.
- KPI cards form two columns.
- Trend becomes full-width.
- Payment becomes full-width.
- Sales Details becomes compact responsive representation.
- Bottom navigation remains fixed according to existing system.

======================================================================
47. FIGMA COMPONENT VARIANTS
======================================================================

DateSelector:
- Today
- Yesterday
- This Week
- This Month
- This Year
- Custom

FilterButton:
- Default
- Active
- Disabled
- Loading

AskAI:
- Default
- Loading
- Disabled

Export:
- Default
- Open
- Disabled
- Loading

KPI:
- Default
- Loading
- Zero

Report:
- Default
- Empty
- Error

======================================================================
48. HOVER / PRESS / FOCUS STATES
======================================================================

Desktop:
Provide subtle hover states.

Tablet:
Provide touch pressed state.

Mobile:
Provide pressed state.

Keyboard:
Provide visible focus state.

Do not use exaggerated animations.

Transitions should be:
- subtle
- fast
- purposeful

======================================================================
49. ACCESSIBILITY
======================================================================

All controls must have:
- accessible labels
- keyboard support on desktop
- visible focus
- adequate contrast
- minimum touch target
- clear disabled state

Do not communicate meaning using color alone.

Example:
Payment Method must have:
- label
- value
- visual indicator

======================================================================
50. DATA FORMATTING
======================================================================

Currency:
Use Indian Rupee formatting.

Examples:

₹24,680
₹192.86
₹1,240

Large amounts should remain readable.

Dates:
Use consistent Indian/business-friendly formatting.

Example:

19 Sep 2026

Do not randomly mix:
- 19/09/26
- Sep 19
- 2026-09-19

within the same interface.

======================================================================
51. VISUAL DENSITY
======================================================================

Target:

COMPACT
+
PREMIUM
+
READABLE
+
USEFUL

Avoid:
- giant cards
- excessive whitespace
- too many visual containers
- excessive borders
- excessive shadows
- excessive colors
- excessive charts

The report should feel like a professional business tool,
not an analytics marketing website.

======================================================================
52. DESKTOP CONTENT PRIORITY
======================================================================

Highest priority:

1. Sales Report title
2. Selected period
3. Total Sales
4. Total Bills
5. Average Bill
6. Discount Given
7. Sales Trend
8. Payment Methods
9. Sales Details
10. Export

Secondary:
- Filter
- Ask AI

======================================================================
53. MOBILE CONTENT PRIORITY
======================================================================

Highest priority:

1. Sales Report
2. Selected period
3. Total Sales
4. Total Bills
5. Average Bill
6. Discount Given
7. Sales Trend
8. Payment Methods
9. Sales Details

Secondary:
- Filter
- Ask AI
- Export

Mobile must not sacrifice the report's core information.

======================================================================
54. NO DUPLICATION
======================================================================

Do not duplicate information unnecessarily.

For example:

If Payment Methods already displays:
UPI 42% ₹10,366

do not show another Payment KPI.

If Sales Details shows:
Bills + Sales + Average Bill

do not repeat the same table in another section.

If AI provides deep analysis:
do not create permanent AI insight cards duplicating it.

======================================================================
55. NO CUSTOMER / CATEGORY / PRODUCT ANALYTICS ON SALES REPORT
======================================================================

The Sales Report should NOT become a combined business analytics report.

Do not add:
- Top Customers
- Top Categories
- Top Products

Those have their own report areas where needed.

The user should not have to scan unrelated information to understand
sales.

======================================================================
56. NAVIGATION
======================================================================

Back to Reports:

Desktop:
← Back to Reports

Tablet:
← Back to Reports

Mobile:
← Back to Reports

This returns to the Reports landing screen.

Do not create additional breadcrumb levels.

Example:

Reports > Sales > Daily > Details

is NOT required.

Keep navigation simple.

======================================================================
57. OVERALL DESKTOP FINAL WIREFRAME
======================================================================

┌──────────────┬───────────────────────────────────────────────────────────┐
│ BIZCOPILOT   │                                           [ Export ▼ ]    │
│              │ Sales Report                                              │
│ Dashboard    │ View and analyze your sales for the selected period       │
│ Billing      │                                                           │
│ Products     │ [ 📅 Today ▼ ]     [ Filter ]     [ ✨ Ask AI ]           │
│ Offers       │                                                           │
│ Customers    │ ┌───────────┐ ┌───────────┐ ┌──────────┐ ┌────────────┐  │
│ Reports  ◀   │ │Total Sales│ │Total Bills│ │Avg Bill  │ │Discount    │  │
│ Settings     │ │ ₹24,680   │ │ 128       │ │ ₹192.86  │ │ ₹1,240     │  │
│              │ └───────────┘ └───────────┘ └──────────┘ └────────────┘  │
│              │                                                           │
│              │ ┌────────────────────────────┐ ┌────────────────────────┐ │
│              │ │ Sales Trend                │ │ Payment Method         │ │
│              │ │ Sales Amount (₹)           │ │ [ By % | By Amount ]   │ │
│              │ │        ╭────╮              │ │  ╭───╮  ● UPI   42%    │ │
│              │ │    ╭───╯    ╰──            │ │  │ 42%│  ● Cash  28%    │ │
│              │ │                            │ │  ╰───╯  ● Card  20%    │ │
│              │ └────────────────────────────┘ └────────────────────────┘ │
│              │                                                           │
│              │ ┌────────────────────────────┐ ┌────────────────────────┐ │
│              │ │ Top Selling Products       │ │ Offers Performance     │ │
│              │ │ [Top/Low] [Revenue/Units]  │ │ [Most Used|Conversion] │ │
│              │ │ #1 Espresso    ₹12,400     │ │ FESTIVE20  45 Redemp.  │ │
│              │ │ #2 Cappuccino  ₹8,900      │ │ WELCOME10  28 Redemp.  │ │
│              │ └────────────────────────────┘ └────────────────────────┘ │
│              │                                                           │
│              │ ┌───────────────────────────────────────────────────────┐ │
│              │ │ Sales Details                                         │ │
│              │ │ Date       Bills       Sales       Avg Bill            │ │
│              │ │ 19 Sep      128       ₹24,680      ₹192.86             │ │
│              │ │ 18 Sep      116       ₹21,420      ₹184.65             │ │
│              │ │ 17 Sep      121       ₹23,180      ₹191.57             │ │
│              │ │                                                         │ │
│              │ │                    1 2 3 4 5 →                         │ │
│              │ └───────────────────────────────────────────────────────┘ │
└──────────────┴───────────────────────────────────────────────────────────┘

======================================================================
58. OVERALL TABLET FINAL WIREFRAME
======================================================================

┌──────────────────────────────────────────────────────────────┐
│ Application Header                                           │
├──────────────────────────────────────────────────────────────┤
│ Sales Report                                   [ Export ▼ ]  │
│ View and analyze your sales for the selected period          │
│                                                              │
│ [ 📅 Today ▼ ]        [ Filter ]       [ ✨ Ask AI ]         │
│                                                              │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                │
│ │ Sales  │ │ Bills  │ │ Avg    │ │Discount│                │
│ │₹24.6K  │ │128     │ │₹192.86 │ │₹1,240  │                │
│ └────────┘ └────────┘ └────────┘ └────────┘                │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Sales Trend                                               │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Payment Method Breakdown (Donut Chart + Legend Filter)    │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Top Products Performance (Top/Low + Revenue/Units)       │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Offers Performance (Most Used / Best Conversion)          │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Sales Details                                             │ │
│ │ Date       Bills       Sales       Avg Bill               │ │
│ │ 19 Sep      128       ₹24,680      ₹192.86                │ │
│ │ 18 Sep      116       ₹21,420      ₹184.65                │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                              │
│                       Pagination                             │
└──────────────────────────────────────────────────────────────┘

======================================================================
59. OVERALL MOBILE FINAL WIREFRAME
======================================================================

┌─────────────────────────────────────┐
│ ☰  BizCopilot   Business ▼    NK   │
├─────────────────────────────────────┤
│ Sales Report                  Export│
│ View and analyze your sales...      │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ 📅 Today                    ▼  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ [ Filter ]              [ ✨ Ask AI]│
│                                     │
│ ┌──────────────┐ ┌──────────────┐ │
│ │Total Sales   │ │Total Bills   │ │
│ │₹24,680       │ │128           │ │
│ └──────────────┘ └──────────────┘ │
│                                     │
│ ┌──────────────┐ ┌──────────────┐ │
│ │Average Bill  │ │Discount      │ │
│ │₹192.86       │ │₹1,240        │ │
│ └──────────────┘ └──────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Sales Trend                     │ │
│ │       ╭────╮                    │ │
│ │   ╭───╯    ╰──                  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Payment Methods (Horizontal)    │ │
│ │ UPI    ██████████ 42% ₹10,366   │ │
│ │ Cash   ███████    28% ₹6,910    │ │
│ │ Card   █████      20% ₹4,936    │ │
│ │ Mixed  ██         10% ₹2,468    │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Top Selling Products            │ │
│ │ #1 Espresso        ₹12,400      │ │
│ │ #2 Cappuccino       ₹8,900      │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Offers Performance              │ │
│ │ FESTIVE20          45 Uses      │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Sales Details          View All │ │
│ │ Date   Bills   Sales   Avg Bill │ │
│ │ 19 Sep 128   ₹24.6K   ₹193      │ │
│ │ 18 Sep 116   ₹21.4K   ₹185      │ │
│ │ 17 Sep 121   ₹23.1K   ₹192      │ │
│ └─────────────────────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│ Dashboard Billing Products Reports  │
│                         More        │
└─────────────────────────────────────┘

======================================================================
60. FINAL FUNCTIONAL SUMMARY
======================================================================

When the user opens Sales Report:

STEP 1
Show the selected reporting period selector.

STEP 2
Load the four KPI values.

STEP 3
Show the sales trend line chart for that period.

STEP 4
Show payment method distribution (Donut Chart on Desktop/Tablet, Horizontal Bars on Mobile) with By % / By Amount sorting filter.

STEP 5
Show Top Products performance card with Top/Low Selling & Revenue/Units pill filters.

STEP 6
Show Offers performance card with Most Used / Best Conversion / Highest Revenue pill filters.

STEP 7
Show Sales Details summary table & pagination.

STEP 8
Allow contextual filtering via Filter button.

STEP 9
Allow export to PDF, Excel, or CSV.

STEP 10
Allow contextual Ask AI for deeper analysis.

======================================================================
61. FINAL DESIGN PRINCIPLE
======================================================================

The Sales Report must feel like:

                 SIMPLE
                    +
                 TRUSTWORTHY
                    +
                 USEFUL
                    +
                 PREMIUM

The user should understand the report within seconds.

The user should NOT need to understand analytics terminology
to use the screen.

The screen should answer:

"What happened to my sales?"

Immediately.

If the user wants:

"Why did it happen?"

Business Intelligence can help.

If the user wants:

"What should I do next?"

AI can help.

Do not put all three experiences into one screen.

======================================================================
62. FINAL VALIDATION CHECKLIST
======================================================================

Before finalizing the Figma design, verify EVERY item below.

GENERAL:
□ Sales Report only
□ Consistent BizCopilot visual language
□ Premium UI with gradients & smooth card shadows
□ Business focused
□ No unnecessary decoration
□ Responsive design matching Desktop, Tablet, and Mobile viewports

HEADER:
□ Header back button removed for clean title header
□ Sales Report title
□ Subtitle
□ Export dropdown

CONTROLS:
□ Dynamic Date control (updates all KPIs, charts, tables)
□ One Filter button (modal/bottom sheet)
□ Ask AI available
□ Inline card-level pill filters on Payment, Products, & Offers cards

KPI:
□ Total Sales
□ Total Bills
□ Average Bill
□ Discount Given
□ No Profit (Profit reporting is V2)

CHART:
□ One Sales Trend line chart
□ Automatically adapts to period (hourly/daily/monthly)
□ Dynamic date filter response

PAYMENT:
□ Donut Chart on Desktop & Tablet with center revenue total
□ Horizontal Progress Bars on Mobile
□ Legend sort filter (By % / By Amount)
□ UPI, Cash, Card, Mixed breakdowns

TOP PRODUCTS:
□ Product rank list with category tags
□ Inline pill filters (Top/Low Selling & By Revenue/By Units)
□ Relative contribution progress bars

OFFERS PERFORMANCE:
□ Offer title & promo code pill tags
□ Inline pill filter (Most Used / Best Conversion / Highest Revenue)
□ Usage count, conversion %, revenue, and discount given stats

DETAILS:
□ Sales Details table
□ Date, Bills, Sales, Average Bill
□ Responsive table / mobile card view
□ Pagination

EXPORT:
□ PDF, Excel, CSV formats
□ Exports current filtered report state

AI:
□ Ask AI contextual action
□ Passes report context (period, filters, metrics)

RESPONSIVE:
□ Desktop designed with 2-column chart grids
□ Tablet recomposed for touch viewports
□ Mobile single-column flow with horizontal payment bars
□ No page-level horizontal scrolling
□ Bottom navigation safe area padding

STATES:
□ Loading
□ Empty
□ Filtered Empty
□ Error
□ Normal

ACCESSIBILITY:
□ Keyboard focus
□ Touch targets
□ Contrast
□ Semantic labels

BUSINESS LOGIC:
□ Report is read-only
□ UI does not calculate business rules
□ No profit calculation
□ No offer calculation
□ No tax calculation
□ Historical data remains unchanged

======================================================================
63. ABSOLUTE FINAL INSTRUCTION TO THE DESIGN AGENT
======================================================================

DO NOT OVERDESIGN THIS SCREEN.

DO NOT TURN IT INTO A BI DASHBOARD.

DO NOT ADD INFORMATION JUST BECAUSE THERE IS SPACE.

DO NOT ADD TOP CUSTOMERS.

DO NOT ADD TOP CATEGORIES.

DO NOT ADD TOP PRODUCTS.

DO NOT ADD PROFIT.

DO NOT ADD MULTIPLE FILTER CONTROLS.

DO NOT ADD COMPARE.

DO NOT ADD GROUP BY.

DO NOT ADD SORT BY.

DO NOT ADD RESET.

DO NOT ADD PAYMENT "VIEW DETAILS".

DO NOT ADD PERMANENT AI INSIGHTS.

DO NOT ADD EXTRA KPI CARDS.

DO NOT ADD UNNECESSARY CHARTS.

The final experience should be:

        DATE
          ↓
     4 KEY NUMBERS
          ↓
      SALES TREND
          ↓
    PAYMENT METHODS
          ↓
     SALES DETAILS
          ↓
       EXPORT

with:

        FILTER → only when needed
        ASK AI → deeper understanding

This is the FROZEN V1 Sales Report design.

Design it with Figma-level precision, reusable components,
Auto Layout, responsive constraints, semantic icons, consistent
typography, exact spacing hierarchy, states, interactions,
accessibility, and viewport-specific recomposition.

Do not deviate from this information architecture unless a
future product requirement explicitly changes the frozen design.

======================================================================
END OF BIZCOPILOT SALES REPORT MASTER PROMPT
======================================================================