BIZCOPILOT — OWNER HOME
MASTER FIGMA-LEVEL UI/UX IMPLEMENTATION PROMPT
================================================

ROLE
----
You are a Senior Product Designer + UX Architect + Frontend UI Engineer.

Design and implement the frozen BizCopilot OWNER HOME experience for Desktop,
Tablet and Mobile.

This is a production application, not a static screenshot.

The final result must be:
- Premium
- Modern
- Calm
- Business-first
- Fast to scan
- POS-oriented
- Responsive
- Accessible
- Consistent with the existing BizCopilot design system
- Suitable for small and medium businesses in India

IMPORTANT:
Do not redesign the information architecture.
Do not invent new V1 capabilities.
Do not turn Home into another Reports screen.


================================================
1. PRODUCT CONTEXT
================================================

BizCopilot is an offline-first POS / billing application for small and
medium businesses.

The Owner Home answers:

"What is happening in my business right now,
what needs my attention, and what can I do immediately?"

The product has clear responsibilities:

HOME
----
"What do I need to know/do now?"

REPORTS
-------
"What happened?"

BUSINESS INTELLIGENCE
---------------------
"Why did it happen?"

AI ASSISTANT
------------
"What should I do next?"

BILLING
-------
"Complete a sale quickly."

Therefore:

HOME MUST NOT LOOK LIKE REPORTS.


================================================
2. STRICT V1 BOUNDARIES
================================================

DO NOT introduce any of the following:

- Inventory management
- Stock quantities
- Low-stock alerts
- Stock valuation
- Stock movement
- Purchase quantity tracking
- Online ordering
- Online buying
- E-commerce
- Delivery management
- Restaurant tables
- KOT
- Restaurant order status
- Profit
- Profit margin
- P&L
- Revenue forecast
- Top Products
- Top Categories
- Top Customers
- Product ranking
- Customer ranking
- Category ranking
- Report builder
- Complex date controls
- Sales charts on Home
- Payment-method analytics on Home
- Historical report controls
- Export controls
- Complex filters
- Permanent analytical dashboards

IMPORTANT:

PRODUCT AVAILABILITY IS ALLOWED.

"Products Unavailable" means a product has been manually marked unavailable
for selling.

It does NOT mean inventory reached zero.

NEVER use:
- Update Stock
- Low Stock
- Out of Stock
- Inventory Alert

Use:

"Products Unavailable"
"Review unavailable products"


================================================
3. FROZEN OWNER HOME INFORMATION ARCHITECTURE
================================================

The Owner Home contains:

1. Global Header
2. Greeting
3. New Bill
4. Today's Business
5. Quick Actions
6. Needs Your Attention
7. Today's Activity
8. AI Business Brief
9. Business Status
10. Responsive Navigation

The ordering and composition may change between viewports,
but these concepts must remain consistent.


================================================
4. DESKTOP VIEW
================================================

TARGET VIEWPORTS
----------------

Primary:
1440 × 900

Also validate:
1280 × 720
1366 × 768
1600 × 900
1920 × 1080
2560 × 1440
3840 × 2160

The application must fluidly adapt.

DO NOT create:
- fixed-width canvas
- screenshot-specific positioning
- horizontal page overflow
- unnecessary vertical page overflow

Use responsive CSS layout primitives.

------------------------------------------------
DESKTOP STRUCTURE
------------------------------------------------

+--------------------------------------------------------------------------+
| SIDEBAR | GLOBAL HEADER                                                  |
|         | Business Selector     Notification      Owner Profile         |
|---------+------------------------------------------------------------------|
|         |                                                                  |
|         | Good morning, Naresh!                         [ Ask AI ]          |
|         | Green Bites Café                                                   |
|         | Here's your business at a glance.                                |
|         |                                                                  |
|         | +------------------+ +------------------------------------------+ |
|         | |                  | | Today's Business                        | |
|         | |     NEW BILL     | |                                          | |
|         | |                  | | [Sales] [Bills] [Avg Bill] [Discount] | |
|         | | Start billing    | |                                          | |
|         | | now          →  | |                                          | |
|         | +------------------+ +------------------------------------------+ |
|         |                                                                  |
|         | Quick Actions                                                     |
|         | [ Products ] [ Customers ] [ Offers ] [ Reports ]                |
|         |                                                                  |
|         | +-----------------------+ +----------------+ +----------------+ |
|         | | Needs Your Attention  | | Today's        | | AI Business    | |
|         | |                       | | Activity       | | Brief          | |
|         | | Bills on Hold      →  | | Recent bills   | | Short AI       | |
|         | | Products Unavailable | | View All →     | | summary        | |
|         | +-----------------------+ +----------------+ +----------------+ |
|         |                                                                  |
|         | +----------------------------------------------------------------+ |
|         | | Business Status                                                | |
|         | | ✓ Billing Ready   ✓ Sync Up to Date   ✓ Printer Ready        | |
|         | +----------------------------------------------------------------+ |
+--------------------------------------------------------------------------+


================================================
5. DESKTOP SIDEBAR
================================================

Persistent left sidebar.

Navigation:

- Home
- Billing
- Products
- Offers
- Customers
- Reports
- Settings
- Help & Support

Home is active.

Use icon + label.

Active navigation:
- very light purple/brand surface
- brand-colored icon
- brand-colored text
- subtle rounded background

Do not add additional modules.


================================================
6. GLOBAL HEADER
================================================

Top header should contain:

LEFT / MAIN AREA:
-----------------

Good morning, Naresh!

Green Bites Café

Here's your business at a glance.


RIGHT:
------

- Ask AI
- Notifications
- Owner profile

Business selector may be part of the global application shell.

Owner profile:

NK
Naresh Kumar
Owner

Keep the header compact.

DO NOT add a Home date picker.

Home is TODAY-focused.


================================================
7. NEW BILL — PRIMARY ACTION
================================================

New Bill is the most important action on Owner Home.

Desktop presentation:

+--------------------------------+
|        [Add Shopping Cart]     |
|                                |
|        New Bill                |
|        Start billing now       |
|        Fast · Simple · Reliable|
|                              → |
+--------------------------------+

Use the primary BizCopilot brand treatment.

Interaction:

CLICK NEW BILL
→ Open Billing workspace.

No unnecessary confirmation.


================================================
8. TODAY'S BUSINESS
================================================

Title:

Today's Business

Show exactly four primary metrics.

1. TOTAL SALES

₹18,450
Total Sales


2. BILLS

42
Bills


3. AVERAGE BILL

₹439
Average Bill


4. DISCOUNT GIVEN

₹320
Discount Given

Do NOT show:

- percentage vs yesterday
- trend arrows
- profit
- margin
- forecast
- stock
- inventory
- top categories
- top products
- top customers

Those belong elsewhere.

These are today's business pulse metrics,
not a report dashboard.


================================================
9. QUICK ACTIONS
================================================

Title:

Quick Actions

Show:

1. Products
   Manage products

2. Customers
   View and manage

3. Offers
   Create and manage

4. Reports
   View business reports

Each action:
- icon
- title
- short description
- optional chevron

Do not overcrowd this area.

New Bill is already the primary CTA.


================================================
10. NEEDS YOUR ATTENTION
================================================

Dynamic section.

Example:

Needs Your Attention

------------------------------------------------
3 Bills on Hold
Review and complete held bills                  >
------------------------------------------------

2 Products Unavailable
Review unavailable products                     >
------------------------------------------------

Rules:

- Only show real actionable items.
- Never create fake alerts.
- Do not show stock alerts.
- Do not show inventory alerts.

If there is nothing:

+---------------------------------------------+
| ✓ Nothing needs your attention              |
|   Everything looks good.                    |
+---------------------------------------------+


================================================
11. TODAY'S ACTIVITY
================================================

This is an operational feed.

It is NOT a Reports table.

Title:

Today's Activity                           View All →

Example:

10:42 AM     #1042      ₹850       UPI       >
10:31 AM     #1041      ₹320       Cash      >
10:18 AM     #1040      ₹1,240     Card      >
09:56 AM     #1039      ₹560       UPI       >
09:21 AM     #1038      ₹420       Cash      >

Show approximately 4–5 recent completed bills.

Clicking a bill:
→ existing Bill Details experience.

View All:
→ Recent Bills.

Do not add:
- customer ranking
- product ranking
- category ranking
- profit
- inventory
- filters
- export


================================================
12. AI BUSINESS BRIEF
================================================

AI Business Brief is a compact contextual summary.

Example:

AI Business Brief

Sales today are ₹18,450 across 42 bills.
Your average bill is ₹439.

You have 3 bills on hold and
2 products are unavailable.

Everything else looks good.

[ Ask AI for more insights → ]

IMPORTANT:

This is NOT an AI dashboard.

Do not create:
- multiple permanent AI cards
- large AI analytics sections
- speculative recommendations
- fake AI insights

Ask AI opens the AI Assistant with relevant business context.


================================================
13. BUSINESS STATUS
================================================

BizCopilot is offline-first.

Business Status should communicate operational readiness.

Normal state:

Business Status

✓ Billing Ready
  Ready to create bills

✓ Sync Up to Date
  Last sync 5 mins ago

✓ Printer Ready
  Connected

Do not make generic Internet Online a primary metric.

Offline example:

⚠ Offline

Billing Ready
12 changes waiting to sync

Printer Ready

Use human-readable language.

Do not expose technical implementation details.


================================================
14. TABLET VIEW
================================================

TARGET:

600–1023px

Tablet must NOT simply shrink desktop.

Use responsive composition.

------------------------------------------------
TABLET STRUCTURE
------------------------------------------------

+---------------------------------------------------+
| BizCopilot       Business      🔔      Owner      |
+---------------------------------------------------+
|                                                   |
| Good morning, Naresh!                 Ask AI     |
| Green Bites Café                                 |
|                                                   |
| +----------------+ +----------------------------+ |
| | New Bill       | | Today's Business            | |
| | Start billing  | |                            | |
| | now         →  | | Sales | Bills              | |
| +----------------+ | Avg   | Discount            | |
|                    +----------------------------+ |
|                                                   |
| Quick Actions                                     |
| [Products] [Customers] [Offers] [Reports]       |
|                                                   |
| +----------------------+ +----------------------+ |
| | Needs Attention      | | Today's Activity    | |
| |                      | |                      | |
| | Bills on Hold     →  | | Recent bills        | |
| | Products Unavailable | | View All →          | |
| +----------------------+ +----------------------+ |
|                                                   |
| +-----------------------------------------------+ |
| | AI Business Brief                             | |
| +-----------------------------------------------+ |
|                                                   |
| +-----------------------------------------------+ |
| | Business Status                               | |
| +-----------------------------------------------+ |
+---------------------------------------------------+

Tablet rules:

- Touch-friendly.
- No horizontal page scrolling.
- Avoid desktop-density tables.
- Use flexible two-column compositions.
- Maintain clear hierarchy.
- Do not add new functionality just because there is more space.


================================================
15. MOBILE VIEW
================================================

TARGET:

0–599px

Primary design target:

390 × 844

Also validate:
360 × 800
375 × 812
393 × 852
430 × 932

Mobile must be intentionally composed.

DO NOT compress desktop.

------------------------------------------------
MOBILE STRUCTURE
------------------------------------------------

+--------------------------------+
| BizCopilot       🔔        NK  |
| Green Bites Café           ˅  |
+--------------------------------+
| Good morning, Naresh!         |
| Here's your business at a     |
| glance.                       |
|                               |
| +----------------------------+|
| |       + NEW BILL           ||
| |       Start billing now    ||
| |                         →  ||
| +----------------------------+|
|                               |
| Today's Business              |
|                               |
| +-------------+ +------------+|
| | ₹18,450     | | 42         ||
| | Total Sales | | Bills      ||
| +-------------+ +------------+|
| | ₹439        | | ₹320       ||
| | Avg Bill    | | Discount   ||
| +-------------+ +------------+|
|                               |
| Quick Actions        View All |
|                               |
| +-------------+ +------------+|
| | Products    | | Customers  ||
| +-------------+ +------------+|
| | Offers      | | Reports    ||
| +-------------+ +------------+|
|                               |
| Needs Your Attention  View All|
|                               |
| +----------------------------+|
| | 3 Bills on Hold         →  ||
| +----------------------------+|
| +----------------------------+|
| | 2 Products Unavailable →  ||
| +----------------------------+|
|                               |
| Today's Activity      View All|
| Recent bills...              |
|                               |
| AI Business Brief             |
| Short contextual summary...   |
| [ Ask AI for more insights →] |
|                               |
| Business Status               |
| ✓ Billing Ready               |
| ✓ Sync Up to Date             |
| ✓ Printer Ready               |
|                               |
+-------------------------------+
| Home Billing Products         |
|       Customers More          |
+-------------------------------+

Mobile is one vertically scrollable Home experience.

Do not create horizontal scrolling.

Do not use a desktop sidebar.


================================================
16. MOBILE HEADER
================================================

Top:

BizCopilot logo/wordmark
Notification
Owner avatar

Second line:

Green Bites Café
Chevron

Greeting:

Good morning, Naresh!

Supporting text:

Here's your business at a glance.


================================================
17. MOBILE NEW BILL
================================================

New Bill must be full-width.

Use a strong primary CTA.

Example:

+----------------------------------+
|                                  |
|       +  NEW BILL                |
|       Start billing now          |
|                              →   |
|                                  |
+----------------------------------+

Touch target must be at least 44px.

Prefer a comfortable height around 64–88px
depending on exact design.

Do not make it tiny.


================================================
18. MOBILE TODAY'S BUSINESS
================================================

Use a 2 × 2 grid.

+----------------+----------------+
| ₹18,450        | 42             |
| Total Sales    | Bills          |
+----------------+----------------+
| ₹439           | ₹320           |
| Average Bill   | Discount Given |
+----------------+----------------+

Cards should be compact.

Do not add more metrics.


================================================
19. MOBILE QUICK ACTIONS
================================================

Use a 2 × 2 grid:

Products
Customers
Offers
Reports

Each card:

- icon
- short title
- optional short supporting text
- chevron where useful

Do not make these oversized.


================================================
20. MOBILE NEEDS ATTENTION
================================================

Use stacked rows.

Example:

Needs Your Attention                      View All

[ icon ]  3 Bills on Hold              >
          Review and complete held bills

[ icon ]  2 Products Unavailable       >
          Review unavailable products

Do not mention stock.


================================================
21. MOBILE TODAY'S ACTIVITY
================================================

Keep compact.

Today's Activity                       View All

10:42 AM   #1042   ₹850    UPI       >
10:31 AM   #1041   ₹320    Cash      >
10:18 AM   #1040   ₹1,240  Card      >

Use the existing Recent Bills / Bill Details workflow.

Do not duplicate the complete Recent Bills page.


================================================
22. MOBILE AI BUSINESS BRIEF
================================================

Compact card.

AI Business Brief

Sales today are ₹18,450 across 42 bills.
Average bill is ₹439.

3 bills are on hold.
2 products are unavailable.

[ Ask AI for more insights → ]

Do not let AI dominate the Home screen.


================================================
23. MOBILE BUSINESS STATUS
================================================

Use stacked status rows.

Business Status

✓ Billing Ready
  Ready to create bills

✓ Sync Up to Date
  Last sync 5 mins ago

✓ Printer Ready
  Connected

If offline:

⚠ Offline
12 changes waiting to sync

Maintain simple language.


================================================
24. MOBILE BOTTOM NAVIGATION
================================================

Frozen Owner navigation:

Home
Billing
Products
Customers
More

Use icon + label.

Home active.

Bottom navigation is fixed.

Provide sufficient bottom content padding so the final Home content
never disappears behind the navigation.

Touch target:
minimum 44 × 44px.


================================================
25. FONT SYSTEM
================================================

PRIMARY FONT:

Inter

Fallback:

Inter,
system-ui,
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
sans-serif

DESKTOP:

Page greeting:
28–32px
Weight: 700

Section title:
18–20px
Weight: 650–700

KPI value:
24–28px
Weight: 700

KPI label:
13–14px
Weight: 500

Body:
14–15px
Weight: 400–500

Supporting:
12–13px

Navigation:
14–15px

Button:
14–15px
Weight: 600


MOBILE:

Greeting:
24–28px
Weight: 700

Section title:
18–20px
Weight: 650–700

KPI value:
20–24px
Weight: 700

Body:
14–15px

Supporting:
12–13px

Bottom navigation:
11–12px

Primary CTA:
15–16px
Weight: 600


Do not overuse bold.


================================================
26. COLOR SYSTEM
================================================

PRIMARY BRAND:

Purple:
#4F46F5

Dark Purple:
#3730A3

Blue:
#2563EB

Deep Text:
#111827

Secondary Text:
#4B5563

Muted Text:
#6B7280

Background:
#F7F9FC

Surface:
#FFFFFF

Border:
#E5E7EB


SEMANTIC:

Success:
#16A34A

Success Soft:
#ECFDF3

Warning:
#F59E0B

Warning Soft:
#FFF7E6

Danger:
#EF4444

Danger Soft:
#FFF1F2

Info:
#2563EB

Info Soft:
#EFF6FF


SOFT ACCENT SURFACES:

Purple:
#F3F1FF

Blue:
#EFF6FF

Green:
#ECFDF5

Orange:
#FFF7ED

Pink:
#FFF1F2


PRIMARY CTA GRADIENT:

#4F46F5 → #6366F1

Use gradients sparingly.

Do not turn the whole application into a gradient UI.


================================================
27. ICON SYSTEM
================================================

Use ONLY:

Material Symbols Outlined

Do not mix icon libraries.

Icon mappings:

Home:
home

Billing:
point_of_sale
or
shopping_cart_checkout

Products:
inventory_2

Offers:
sell

Customers:
group

Reports:
bar_chart

Settings:
settings

Help:
help_outline

Notifications:
notifications

Owner:
person

New Bill:
add_shopping_cart

Sales:
bar_chart

Bills:
receipt_long

Average Bill:
currency_rupee

Discount:
sell

Bills on Hold:
receipt_long

Products Unavailable:
warning

AI:
auto_awesome

Billing Ready:
check_circle

Sync:
sync

Printer:
print

Chevron:
chevron_right

Forward:
arrow_forward

Back:
arrow_back


IMPORTANT:

The Products icon must represent the product/catalog concept.

Do not visually imply that BizCopilot has an inventory-management module.


ICON SIZES:

Desktop navigation:
20–22px

Standard UI:
18–20px

KPI:
22–24px

Primary CTA:
22–24px

Mobile navigation:
21–24px

Mobile standard:
18–20px

Mobile KPI:
20–24px

Mobile primary CTA:
24px


Never use giant decorative icons.


================================================
28. SPACING SYSTEM
================================================

Use a 4px base spacing system.

Allowed primary spacing values:

4
8
12
16
20
24
32
40
48
64

Typical:

Desktop card padding:
20–24px

Mobile card padding:
16px

Desktop section spacing:
24–32px

Mobile section spacing:
20–24px

Grid gap:
12–16px

Mobile card gap:
12px

Mobile page horizontal padding:
16px

Desktop page horizontal padding:
fluid, typically 24–40px

Do not use arbitrary spacing values just to imitate a screenshot.


================================================
29. CARD SYSTEM
================================================

Cards:

Background:
#FFFFFF

Border:
#E5E7EB or extremely subtle

Radius:
12–16px

Shadow:
very subtle

Use cards only when they help group information.

Do NOT make every UI element look like a floating card.

Avoid:

- heavy shadows
- glassmorphism
- excessive borders
- excessive gradients
- decorative cards


================================================
30. BUTTON SYSTEM
================================================

PRIMARY:

Background:
#4F46F5

Text:
#FFFFFF

Radius:
10–12px

Weight:
600


SECONDARY:

Background:
#FFFFFF

Border:
#D1D5DB

Text:
#111827


TERTIARY:

Text action without heavy container.


DESTRUCTIVE:

Use only when an actual destructive action exists.


================================================
31. RESPONSIVE BEHAVIOR
================================================

The design must be fluid.

Do NOT:

- hardcode 1440px layouts
- hardcode 390px layouts
- position elements based on screenshot coordinates
- create fixed canvas widths
- create horizontal overflow
- create unnecessary nested scrollbars
- stretch cards unnaturally
- leave huge empty areas on large screens

4K monitor:
The application should scale naturally and preserve visual hierarchy.

13-inch laptop:
The same architecture must remain usable.

Tablet:
Use flexible compositions.

Mobile:
Use one-column flow.

Do not create different business logic for different viewports.


================================================
32. SCROLLING
================================================

Desktop:
Avoid page-level unnecessary scrolling where content fits.

Tablet:
Allow natural vertical scrolling when required.

Mobile:
The Home page is vertically scrollable.

Never allow horizontal scrolling.

Do not create nested scrollbars unless a section contains a genuinely
long list.

If a list becomes long:
only the owning list area should scroll.

Bottom navigation must remain accessible.


================================================
33. STATES
================================================

EVERY MAJOR SECTION MUST SUPPORT:

Loading
-------
Use restrained skeletons.

Do not use giant loading spinners.


EMPTY
-----
Example:

No bills yet today
Completed bills will appear here.


NO ATTENTION ITEMS
------------------
✓ Nothing needs your attention
Everything looks good.


OFFLINE
-------
⚠ Offline
Billing is still ready.
12 changes waiting to sync.


ERROR
-----
Something went wrong.

We couldn't load today's business summary.

[ Try Again ]


Do not expose stack traces or technical backend errors.


================================================
34. ACCESSIBILITY
================================================

Minimum touch target:
44 × 44px

Maintain sufficient contrast.

Never communicate state using color alone.

Use icon + text for semantic states.

Icon-only buttons require accessible labels.

Keyboard focus must be visible on desktop.

Maintain logical reading order.

Support browser zoom.

Support reduced-motion preferences.

Do not rely on tiny text.


================================================
35. ENGINEERING EXPECTATIONS
================================================

Design this as a real production frontend.

Use reusable components.

Suggested reusable components:

OwnerHome
HomeHeader
NewBillCard
TodayBusiness
MetricCard
QuickActions
QuickActionCard
AttentionSection
AttentionItem
ActivitySection
ActivityRow
AIBusinessBrief
BusinessStatus
BusinessStatusItem
OwnerBottomNavigation
OwnerSidebar

Do not duplicate entire components for desktop/tablet/mobile.

Use responsive layout rules.

Only change composition where viewport requires it.


================================================
36. DATA / APPLICATION BOUNDARY
================================================

The UI can display:

- Today's sales
- Today's bill count
- Average bill
- Discount given
- Recent completed bills
- Held bills
- Product availability
- Billing readiness
- Sync state
- Printer state
- AI business brief

The UI must NOT calculate business rules that belong to the application/domain
layer.

Do not invent:

- inventory
- stock
- profit
- margin
- online orders
- delivery metrics
- forecasts


================================================
37. INTERACTION MAP
================================================

NEW BILL
--------
Home
→ Billing


PRODUCTS
--------
Home
→ Product Screen


CUSTOMERS
---------
Home
→ Customer Screen


OFFERS
------
Home
→ Offer Dashboard


REPORTS
-------
Home
→ Reports


ACTIVITY BILL
-------------
Today's Activity
→ Bill Details


VIEW ALL ACTIVITY
-----------------
Today's Activity
→ Recent Bills


BILLS ON HOLD
-------------
Needs Attention
→ Held/Draft Bill workflow


PRODUCTS UNAVAILABLE
--------------------
Needs Attention
→ Product screen / appropriate availability workflow


ASK AI
------
Home
→ AI Assistant with current business context


BUSINESS STATUS
---------------
Open appropriate operational/status context when applicable.


================================================
38. IMPORTANT DIFFERENCE FROM REPORTS
================================================

NEVER add these to Owner Home:

- Date dropdown
- Custom date picker
- Sales trend chart
- Payment method chart
- Compare period
- Group By
- Sort By
- Report filters
- Export
- Report table
- Top Categories
- Top Customers
- Top Products
- Profit
- Profit Margin

Home is:

TODAY + ACTIONS + ATTENTION + ACTIVITY + AI + SYSTEM STATUS

Reports owns:

HISTORICAL ANALYSIS


================================================
39. VISUAL DESIGN QUALITY BAR
================================================

The visual style should feel like:

Premium SaaS
+
Modern POS
+
Calm business software
+
Fast operational UI

Avoid:

- generic admin-dashboard appearance
- excessive whitespace
- oversized hero banners
- excessive cards
- random gradients
- decorative illustrations
- mixed icon libraries
- inconsistent typography
- oversized icons
- unnecessary animation
- unnecessary charts
- visual clutter


================================================
40. DESKTOP FINAL CHECK
================================================

Verify:

[ ] Sidebar present
[ ] Home active
[ ] Global header present
[ ] Greeting present
[ ] Business name present
[ ] Ask AI present
[ ] New Bill prominent
[ ] Today's Business present
[ ] Exactly four metrics
[ ] Quick Actions present
[ ] Needs Attention dynamic
[ ] Today's Activity present
[ ] AI Business Brief present
[ ] Business Status present
[ ] No stock
[ ] No inventory
[ ] No online ordering
[ ] No charts
[ ] No report filters
[ ] No date dropdown
[ ] No horizontal overflow
[ ] 4K responsive
[ ] 13-inch responsive


================================================
41. TABLET FINAL CHECK
================================================

[ ] Responsive tablet composition
[ ] No desktop squeezing
[ ] New Bill prominent
[ ] Today's Business readable
[ ] Quick Actions accessible
[ ] Needs Attention readable
[ ] Activity readable
[ ] AI Brief readable
[ ] Business Status readable
[ ] Touch targets >= 44px
[ ] No horizontal scrolling
[ ] No unnecessary nested scrollbars


================================================
42. MOBILE FINAL CHECK
================================================

[ ] Single-column composition
[ ] Header compact
[ ] Business selector present
[ ] Greeting present
[ ] New Bill full-width
[ ] Today's Business = 2×2
[ ] Exactly four metrics
[ ] Quick Actions = 2×2
[ ] Needs Attention stacked
[ ] Today's Activity compact
[ ] AI Business Brief compact
[ ] Business Status stacked
[ ] Fixed bottom navigation
[ ] Home active
[ ] Billing present
[ ] Products present
[ ] Customers present
[ ] More present
[ ] No horizontal scrolling
[ ] Bottom content not hidden by nav
[ ] No stock
[ ] No inventory
[ ] No online ordering
[ ] No report-style charts
[ ] No date dropdown


================================================
43. FINAL UX PRINCIPLE
================================================

Owner Home should feel like opening BizCopilot and immediately understanding:

"How is my business doing right now?"

"What needs my attention?"

"Can I start billing immediately?"

"What happened recently?"

"Is the system ready?"

"Can AI help me understand something?"

The Owner Home must NEVER become another Reports screen.

FINAL EXPERIENCE:

TODAY
+
ACTION
+
ATTENTION
+
ACTIVITY
+
AI
+
SYSTEM READINESS

Keep it simple.
Keep it premium.
Keep it fast.
Keep it operational.
Keep it faithful to BizCopilot V1.
"""
print("Prompt prepared: %d characters" % len(prompt))
print(prompt[:1000])
print("\n...prompt continues...")
print(prompt[-1000:])
path = Path("/mnt/data/BizCopilot_Owner_Home_Master_Figma_Prompt.md")
path.write_text(prompt, encoding="utf-8")
print(f"\nSaved: {path}")
print(f"Size: {path.stat().st_size} bytes")
print(f"Lines: {len(prompt.splitlines())}")
print("Note: this is the same copy-ready prompt shown in the response.")
 ​:contentReference[oaicite:0]{index=0}​