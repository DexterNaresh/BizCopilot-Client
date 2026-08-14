# BIZCOPILOT V1 — NAVIGATION SHELL
# FIGMA-LEVEL UI/UX DESIGN & IMPLEMENTATION PROMPT

==================================================
ROLE
==================================================

You are a senior product designer, Figma UI/UX designer,
design-system architect, and frontend UX engineer.

Design and implement the BizCopilot V1 APPLICATION
NAVIGATION SHELL at Figma-level precision.

The Navigation Shell is a shared application-level
component and MUST be designed independently before
individual application screens are finalized.

The Navigation Shell must be consistent across:

- Home
- Billing
- Products
- Customers
- Offers
- Bills
- Reports
- AI Assistant
- Settings
- Backup & Sync
- Business Profile
- Future V2/V3 modules

The navigation system must follow BizCopilot's core product
principles:

LESS NAVIGATION
+
FAST BILLING
+
MINIMUM INPUT
+
SIMPLE UX

==================================================
1. PRIMARY NAVIGATION DECISION
==================================================

BizCopilot uses TWO navigation patterns:

MOBILE + TABLET
    ↓
Bottom Navigation
    +
More Bottom Sheet

DESKTOP / POS
    ↓
Persistent Left Sidebar

Do NOT create separate navigation concepts for every screen.

The same application routes and permissions must be used
across all viewports.

Only the presentation of navigation changes.

==================================================
2. VIEWPORT NAVIGATION MODEL
==================================================

┌──────────────────────────────────────────────────────────┐
│ VIEWPORT        │ NAVIGATION MODEL                       │
├─────────────────┼────────────────────────────────────────┤
│ Mobile          │ Bottom Nav + More Bottom Sheet         │
│ < 600px         │                                        │
├─────────────────┼────────────────────────────────────────┤
│ Tablet          │ Bottom Nav + More Bottom Sheet         │
│ 600–1023px      │                                        │
├─────────────────┼────────────────────────────────────────┤
│ Desktop / POS   │ Persistent Left Sidebar                │
│ ≥ 1024px        │                                        │
└─────────────────┴────────────────────────────────────────┘

==================================================
3. MOBILE NAVIGATION
==================================================

Mobile has exactly FOUR persistent bottom-navigation items:

1. Home
2. Billing
3. Products
4. More

Structure:

┌────────────────────────────────┐
│                                │
│        CURRENT SCREEN          │
│                                │
│                                │
├────────────────────────────────┤
│  Home │ Billing │ Products │ More │
└────────────────────────────────┘

These four items remain available throughout the
authenticated application unless a modal/sheet completely
covers the navigation.

Do NOT place Customers, Reports, Offers, Settings etc.
directly in the bottom navigation.

The purpose of the bottom navigation is FAST ACCESS
to the most important V1 workflows.

==================================================
4. MOBILE BOTTOM NAV STRUCTURE
==================================================

Example:

┌─────────────────────────────────────────┐
│                                         │
│                                         │
│              SCREEN                     │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│   🏠       🧾        📦        ⋯        │
│   Home    Billing   Products    More     │
│                                         │
└─────────────────────────────────────────┘

Each item contains:

ICON
+
LABEL

Do not use icon-only navigation.

The label must remain visible.

==================================================
5. MOBILE ACTIVE STATE
==================================================

Example:

Billing active:

┌─────────────────────────────────────────┐
│                                         │
│                                         │
├─────────────────────────────────────────┤
│   Home    [Billing]   Products   More   │
│    ○        ●            ○        ○     │
└─────────────────────────────────────────┘

Active:

- BizCopilot purple icon
- Purple label
- Slight active indicator if required
- No excessive background pill
- No heavy shadow

Inactive:

- Neutral gray icon
- Neutral gray label

Recommended:

Primary:
#5B3BEB

Inactive:
#6B7280

==================================================
6. MOBILE MORE
==================================================

When the user taps:

More

DO NOT navigate to a separate full page.

Open a BOTTOM SHEET.

The underlying screen remains visible.

Add a subtle dark/neutral overlay behind the sheet.

Structure:

┌────────────────────────────────┐
│      CURRENT SCREEN             │
│        dimmed                   │
│                                │
│────────────────────────────────│
│          ─────                 │
│                                │
│ More                      ×    │
│                                │
│ BUSINESS                       │
│                                │
│ 👥 Customers               >   │
│ 🎁 Offers                  >   │
│ 📊 Reports                 >   │
│                                │
│ ─────────────────────────────  │
│                                │
│ TOOLS                          │
│                                │
│ 🤖 AI Assistant            >   │
│ ☁ Backup & Sync            >   │
│                                │
│ ─────────────────────────────  │
│                                │
│ SETTINGS                       │
│                                │
│ ⚙ Settings                 >   │
│                                │
│ ─────────────────────────────  │
│                                │
│ ACCOUNT                        │
│                                │
│ 🏪 Business Profile        >   │
│ 🚪 Logout                      │
│                                │
└────────────────────────────────┘

==================================================
7. MORE MENU GROUPS
==================================================

Group the menu instead of presenting a flat list.

GROUP 1 — BUSINESS

Customers
Offers
Reports

GROUP 2 — TOOLS

AI Assistant
Backup & Sync

GROUP 3 — SETTINGS

Settings

GROUP 4 — ACCOUNT

Business Profile
Logout

Do not add unnecessary items.

==================================================
8. MOBILE MORE — INTERACTION
==================================================

Tap More:

Bottom sheet slides upward.

Background:

Current screen remains visible.

Overlay:

Semi-transparent dark overlay.

Sheet:

White surface.

Top:

Drag handle.

Title:

More

Close:

X

The sheet can be closed by:

1. Selecting an item
2. Tapping X
3. Swiping downward
4. Tapping outside the sheet

==================================================
9. MORE BOTTOM SHEET HEIGHT
==================================================

The sheet should use content-driven height.

Do not automatically occupy 100% of the screen.

Preferred:

Approximately 60–75% of mobile viewport.

If content requires more space:

Allow scrolling inside the sheet.

Bottom navigation should not remain visually active
while the More sheet is open.

==================================================
10. MOBILE MORE — VISUAL HIERARCHY
==================================================

Section heading:

11–12px
600
Uppercase
Purple

Menu item:

16px
600

Description, if required:

12–13px
400

Icon:

22–24px

Chevron:

18–20px

Row height:

48–56px minimum.

Touch target:

At least 44px.

==================================================
11. MOBILE MORE — ROLE BASED
==================================================

Navigation visibility must respect roles.

OWNER:

Customers
Offers
Reports
AI Assistant
Backup & Sync
Settings
Business Profile
Logout

WAITER:

Only show destinations permitted for Waiter.

Do NOT expose:

- Reports
- Offers
- AI Assistant
- Business configuration
- Backup & Sync

unless explicitly permitted by the role model.

Important:

UI visibility is NOT authorization.

Runtime/backend must enforce permissions.

==================================================
12. TABLET NAVIGATION
==================================================

Tablet uses the SAME navigation concept as Mobile.

Breakpoint:

600px – 1023px

Use:

Bottom Navigation
+
More Bottom Sheet

Structure:

┌──────────────────────────────────────────────┐
│                                              │
│              CURRENT WORKSPACE               │
│                                              │
├──────────────────────────────────────────────┤
│ Home │ Billing │ Products │ More              │
└──────────────────────────────────────────────┘

Do NOT automatically convert Tablet to Desktop sidebar.

Tablet is still a touch-first experience.

==================================================
13. TABLET — WORKSPACE IS DIFFERENT
==================================================

Although navigation is the same as Mobile,
the workspace can use the larger viewport.

Example Billing:

┌──────────────────────────────────────────────┐
│ Billing                                      │
│                                              │
│ Product Catalog             │ CART           │
│                             │                │
│ Product Product Product     │ Customer       │
│ Product Product Product     │ Items          │
│ Product Product Product     │ Offers         │
│                             │ Total          │
│                             │ [Pay]          │
├──────────────────────────────────────────────┤
│ Home │ Billing │ Products │ More              │
└──────────────────────────────────────────────┘

Important:

SAME NAVIGATION
+
DIFFERENT WORKSPACE LAYOUT

==================================================
14. TABLET MORE
==================================================

Tablet More uses the same bottom-sheet concept as Mobile.

However:

- Wider sheet
- More horizontal breathing room
- Larger content width
- Better touch spacing
- Same menu groups
- Same role-based visibility

Do NOT turn it into a desktop sidebar.

==================================================
15. DESKTOP / POS NAVIGATION
==================================================

Breakpoint:

≥ 1024px

Desktop uses a persistent LEFT SIDEBAR.

Structure:

┌──────────────┬──────────────────────────────────────┐
│ BizCopilot   │                                      │
│              │          CURRENT SCREEN              │
│ 🏠 Home      │                                      │
│ 🧾 Billing   │                                      │
│ 📦 Products  │                                      │
│ 👥 Customers │                                      │
│              │                                      │
│ BUSINESS     │                                      │
│ 📊 Reports   │                                      │
│ 🎁 Offers    │                                      │
│              │                                      │
│ TOOLS        │                                      │
│ 🤖 AI        │                                      │
│ ☁ Backup     │                                      │
│              │                                      │
│ SETTINGS     │                                      │
│ ⚙ Settings  │                                      │
│              │                                      │
│ ACCOUNT      │                                      │
│ 🏪 Profile  │                                      │
│ 🚪 Logout   │                                      │
└──────────────┴──────────────────────────────────────┘

==================================================
16. DESKTOP SIDEBAR WIDTH
==================================================

Recommended:

Expanded:
240–260px

Compact:
64–80px

V1 default:

Expanded sidebar.

Do not introduce collapsed sidebar behavior unless
required by the existing application shell.

==================================================
17. DESKTOP SIDEBAR HEADER
==================================================

Top:

BizCopilot logo
+
BizCopilot name

Example:

┌────────────────────────┐
│ [Logo] BizCopilot      │
└────────────────────────┘

Below:

Primary navigation.

==================================================
18. DESKTOP SIDEBAR GROUPS
==================================================

PRIMARY

Home
Billing
Products
Customers

BUSINESS

Reports
Offers

TOOLS

AI Assistant
Backup & Sync

SETTINGS

Settings

ACCOUNT

Business Profile
Logout

Use section separators/headings.

Do not over-group.

==================================================
19. DESKTOP ACTIVE STATE
==================================================

Example:

Billing active:

┌────────────────────────────┐
│ 🧾  Billing                │
│     █████████              │
└────────────────────────────┘

Recommended:

- Very light purple background
- Purple icon
- Purple label
- Medium/semibold text
- Rounded 8–12px container

Do NOT use a full purple block unless visually justified.

==================================================
20. DESKTOP HOVER STATE
==================================================

Hover:

- Light neutral/purple background
- Slight icon color transition
- Cursor pointer

Do not animate aggressively.

==================================================
21. DESKTOP SIDEBAR COLLAPSE
==================================================

If a collapsed mode is implemented:

Expanded:

[Icon] Billing

Collapsed:

[Icon]

Tooltip on hover/focus:

Billing

Collapsed state must NOT change routing.

==================================================
22. NAVIGATION ROUTES
==================================================

Navigation destinations:

/home
/billing
/products
/customers
/offers
/bills
/reports
/ai
/settings
/backup-sync
/business-profile

Logout is an action, not a route.

Do not create fake navigation pages.

==================================================
23. BILLS LOCATION
==================================================

Bills is an important V1 screen but does not need to be
persistent in Mobile/Tablet navigation.

Mobile:

More → Bills

Tablet:

More → Bills

Desktop:

Bills can be included under BUSINESS if required.

Recommended desktop:

Business:

Reports
Bills
Offers

This keeps invoice history easily accessible on POS.

==================================================
24. NAVIGATION PRINCIPLE FOR BILLING
==================================================

Billing is the CORE V1 workflow.

Therefore Billing must always be one of the primary
navigation destinations.

Mobile:

Home | Billing | Products | More

Tablet:

Home | Billing | Products | More

Desktop:

Sidebar → Billing

==================================================
25. CART IS NOT NAVIGATION
==================================================

Important:

Cart must NOT appear in application navigation.

Cart belongs to Billing.

Mobile:

Billing
 ↓
Floating Cart Bar
 ↓
Cart View

Tablet:

Billing
 ↓
Persistent Cart Panel

Desktop:

Billing
 ↓
Persistent Cart Panel

Do NOT add:

Cart

to the bottom navigation or sidebar.

==================================================
26. OFFERS AND CUSTOMER ARE NOT PRIMARY NAVIGATION
==================================================

Offers and Customer selection inside Billing are
WORKFLOW overlays.

Do not create unnecessary navigation.

Billing:

Product
 ↓
Cart
 ↓
Customer overlay
OR
 ↓
Offers overlay
 ↓
Payment

This preserves the LESS NAVIGATION principle.

==================================================
27. OVERLAY RULE
==================================================

For Billing:

CUSTOMER

Mobile:
Bottom sheet / overlay

Tablet:
Centered/wide modal overlay above Billing + Cart

Desktop:
Modal/dialog overlay above Billing + Cart

OFFERS

Mobile:
Bottom sheet / overlay

Tablet:
Modal overlay above Billing + Cart

Desktop:
Modal/dialog overlay above Billing + Cart

Do NOT navigate away from Billing.

==================================================
28. NAVIGATION ANIMATION
==================================================

BOTTOM NAV:

No full-page animation required.

Switch content smoothly.

MORE:

Slide upward from bottom.

Duration:

~200ms

Easing:

ease-out

Overlay:

Fade in approximately 150ms.

DESKTOP:

Sidebar navigation should not animate the entire
application unnecessarily.

==================================================
29. ICON SYSTEM
==================================================

Use ONE icon family throughout BizCopilot.

Recommended:

Google Material Symbols Outlined.

Use the OUTLINED style consistently.

Do NOT mix:

- Font Awesome
- Bootstrap Icons
- random SVG icons
- emoji
- multiple unrelated icon families

unless a specific custom icon is required.

Google's Material Design icon repository provides the
official Material icon assets and the current repository
contains Material Symbols assets. :contentReference[oaicite:0]{index=0}

==================================================
30. REQUIRED NAVIGATION ICONS
==================================================

HOME

Material Symbol:

home

BILLING

Preferred:

receipt_long

Alternative:

receipt

PRODUCTS

inventory_2

CUSTOMERS

group

OFFERS

local_offer

BILLS

description
or
receipt_long

REPORTS

bar_chart

AI ASSISTANT

smart_toy

BACKUP & SYNC

cloud_sync

SETTINGS

settings

BUSINESS PROFILE

store

LOGOUT

logout

MORE

more_horiz

CLOSE

close

CHEVRON

chevron_right

BACK

arrow_back

==================================================
31. ICON SIZE
==================================================

Mobile bottom navigation:

22–24px

Mobile More sheet:

22–24px

Tablet bottom navigation:

22–24px

Desktop sidebar:

20–22px

Chevron:

18–20px

Do not make icons oversized.

==================================================
32. ICON STROKE / STYLE
==================================================

Use:

Material Symbols Outlined

Prefer:

FILL = 0

Consistent optical weight.

Recommended:

Weight:
400

Grade:
0

Optical size:
24

The active state may use a filled/stronger treatment
ONLY if it remains visually consistent.

Do not randomly switch between outlined and filled icons.

==================================================
33. ICON DOWNLOAD / ASSET STRATEGY
==================================================

Preferred approach for the Angular application:

Use SVG-based Material Symbols / Material Icons rather
than large icon-font bundles.

Google's Material Design Icons repository provides the
official icon assets. :contentReference[oaicite:1]{index=1}

Official repository:

https://github.com/google/material-design-icons

Use SVG assets where practical.

For the application:

src/assets/icons/navigation/

Suggested files:

home.svg
billing.svg
products.svg
customers.svg
offers.svg
bills.svg
reports.svg
ai-assistant.svg
backup-sync.svg
settings.svg
business-profile.svg
logout.svg
more.svg
close.svg
chevron-right.svg

Do not download random PNG icons from Google Image Search.

==================================================
34. ICON ASSET RULE
==================================================

All custom/local icon assets must be loaded through:

AssetService

Example architecture:

src/
 └── assets/
      └── icons/
           └── navigation/

UI components must NOT contain:

- Base64 icons
- inline random SVG markup
- external random image URLs

Use the existing project AssetService architecture.

==================================================
35. ICON LICENSE
==================================================

Material Symbols / Material Icons are available under
Google's applicable open-source licensing.

Verify the exact license/version used in the project before
shipping.

The official Google repository is the preferred source.

Do not copy icons from random third-party websites.

==================================================
36. COLORS
==================================================

Primary:

#5B3BEB

Primary Hover:

#4B2DC7

Primary Light:

rgba(91,59,235,0.08)

Canvas:

#F5F6FC

Surface:

#FFFFFF

Text Primary:

#111827

Text Secondary:

#6B7280

Text Muted:

#9CA3AF

Border:

#EAECEF

Success:

#16A34A

Error:

#DC2626

Overlay:

rgba(17,24,39,0.45)

==================================================
37. NAVIGATION COLOR USAGE
==================================================

ACTIVE:

Icon:
#5B3BEB

Label:
#5B3BEB

Background:
rgba(91,59,235,0.08)

INACTIVE:

Icon:
#6B7280

Label:
#6B7280

HOVER:

Background:
rgba(91,59,235,0.05)

LOGOUT:

Icon:
#DC2626

Label:
#DC2626

Do not make Logout purple.

==================================================
38. TYPOGRAPHY
==================================================

Font:

Inter,
system-ui,
-apple-system,
sans-serif

Bottom navigation label:

11–12px
500–600

More section title:

11–12px
600

More menu item:

14–16px
600

Desktop sidebar label:

14–15px
500–600

Desktop section heading:

10–11px
600

Use consistent typography with the frozen
Startup / Login / Billing screens.

==================================================
39. NAVIGATION BAR HEIGHT
==================================================

Mobile:

Approximately 64–72px
plus safe-area inset.

Tablet:

Approximately 64–72px.

Desktop:

Full-height sidebar.

Do not allow content to overlap navigation.

==================================================
40. MOBILE SAFE AREA
==================================================

Bottom navigation must respect:

iOS home indicator
Android navigation area

Use:

padding-bottom:
env(safe-area-inset-bottom)

The navigation must never overlap the system gesture area.

==================================================
41. MORE SHEET SAFE AREA
==================================================

Bottom sheet must also respect:

env(safe-area-inset-bottom)

The last menu item must never sit behind the
system gesture/navigation area.

==================================================
42. RESPONSIVE BREAKPOINTS
==================================================

Mobile:

0–599px

Tablet:

600–1023px

Desktop:

1024px+

Use centralized breakpoint tokens.

Do not hardcode breakpoints in every component.

==================================================
43. DESIGN TOKENS
==================================================

Use:

:root {

  --color-primary: #5B3BEB;
  --color-primary-hover: #4B2DC7;
  --color-primary-light:
    rgba(91,59,235,0.08);

  --color-bg-canvas: #F5F6FC;
  --color-surface: #FFFFFF;

  --color-text-primary: #111827;
  --color-text-secondary: #6B7280;
  --color-text-muted: #9CA3AF;

  --color-border: #EAECEF;

  --color-success: #16A34A;
  --color-error: #DC2626;

  --color-overlay:
    rgba(17,24,39,0.45);

  --radius-nav-item: 10px;
  --radius-sheet: 24px;

  --nav-mobile-height: 68px;
  --nav-desktop-width: 248px;

  --icon-nav: 24px;

}

Do not scatter magic values throughout components.

==================================================
44. FIGMA COMPONENT STRUCTURE
==================================================

Create:

NavigationShell

BottomNavigation

BottomNavigationItem

MoreBottomSheet

MoreSection

MoreMenuItem

DesktopSidebar

SidebarSection

SidebarMenuItem

NavigationIcon

NavigationBadge

NavigationDivider

==================================================
45. FIGMA VARIANTS
==================================================

BottomNavigationItem:

- Active
- Inactive
- Pressed
- Disabled
- Badge

MoreMenuItem:

- Default
- Pressed
- Disabled
- New Badge

SidebarMenuItem:

- Active
- Inactive
- Hover
- Pressed
- Disabled
- Badge

MoreBottomSheet:

- Open
- Closed

Sidebar:

- Expanded
- Collapsed (optional)

==================================================
46. BADGES
==================================================

Badges should be used sparingly.

Examples:

AI Assistant:

NEW

Notifications:

3

Do not put badges everywhere.

Badge:

Small rounded capsule/circle.

Recommended:

Purple for informational
Red for urgent/unread

==================================================
47. NAVIGATION STATE
==================================================

The navigation must reflect the CURRENT ROUTE.

Example:

/billing

Bottom Navigation:

Billing = Active

/Products

Products = Active

/Reports

More = Active or neutral depending on UX.

Recommended:

When a destination inside More is active:

More receives the active treatment.

This clearly tells the user where they are.

==================================================
48. MORE ACTIVE STATE
==================================================

If user is on:

Reports

Bottom navigation:

Home
Billing
Products
More ACTIVE

This avoids creating a fifth bottom navigation item.

==================================================
49. DEEP NAVIGATION
==================================================

Example:

Billing
 ↓
Customer Overlay

Closing Customer:

Return directly to Billing.

Do NOT send user to Home.

Example:

More
 ↓
Reports

Reports screen:

More remains the navigation anchor.

Do not replace the entire application navigation.

==================================================
50. NAVIGATION PERSISTENCE
==================================================

Navigation should remain persistent between normal
application screens.

Exceptions:

- Full-screen authentication
- Startup setup
- Modal dialogs
- Bottom sheets
- Critical system overlays

==================================================
51. STARTUP / LOGIN EXCEPTION
==================================================

Startup and PIN Login are PRE-AUTHENTICATION.

Therefore:

NO bottom navigation
NO desktop sidebar
NO application More menu

After successful login:

Application Navigation Shell becomes active.

==================================================
52. BILLING EXCEPTION
==================================================

Billing has special workspace behavior.

Mobile:

Bottom navigation visible.

Cart is a workflow overlay/screen.

Tablet:

Bottom navigation visible.

Cart is permanently visible beside catalog.

Desktop:

Sidebar visible.

Cart is permanently visible beside catalog.

This must not be interpreted as navigation.

==================================================
53. NO DUPLICATE NAVIGATION
==================================================

Do NOT create:

Top Billing menu
+
Bottom Billing navigation

Do NOT create:

Top Products navigation
+
Bottom Products navigation

Do NOT create:

Menu button
+
Sidebar
+
Bottom navigation

Choose the correct navigation model based on viewport.

For Mobile/Tablet:

Bottom Navigation is the primary navigation.

For Desktop:

Sidebar is the primary navigation.

==================================================
54. TOP BAR RULE
==================================================

Top bar belongs to the CURRENT SCREEN.

Example Billing:

Billing
Search
Scan
More/context action

The top bar is NOT global navigation.

It should not duplicate:

Home
Billing
Products
Customers
More

==================================================
55. MOBILE EXAMPLE
==================================================

BILLING:

┌───────────────────────────────┐
│ Billing          Scan    ⋮    │
├───────────────────────────────┤
│ Search product / code         │
├───────────────────────────────┤
│ All | Favourites | Top ...    │
├───────────────────────────────┤
│ Product    Product            │
│                               │
│ Product    Product            │
│                               │
│ Product    Product            │
├───────────────────────────────┤
│ 🛒 3 Items       ₹1,398   →  │
├───────────────────────────────┤
│ Home Billing Products More    │
└───────────────────────────────┘

The top "Billing" is the SCREEN TITLE.

The bottom "Billing" is NAVIGATION.

They are different concepts.

Do not add another menu icon just to duplicate navigation.

==================================================
56. TABLET EXAMPLE
==================================================

┌──────────────────────────────────────────────┐
│ Billing                           Scan    ⋮  │
├──────────────────────────┬───────────────────┤
│ Product Catalog           │ CART              │
│                           │                   │
│ Product Product Product   │ Customer          │
│ Product Product Product   │ Items             │
│ Product Product Product   │ Offers            │
│                           │ Total             │
│                           │ [Proceed to Pay]  │
├──────────────────────────┴───────────────────┤
│ Home │ Billing │ Products │ More               │
└──────────────────────────────────────────────┘

==================================================
57. DESKTOP EXAMPLE
==================================================

┌──────────────┬──────────────────────────────────────┐
│ BizCopilot   │ Billing                              │
│              │                                      │
│ Home         │ Product Catalog       │ CART         │
│ Billing      │                       │              │
│ Products     │ Product Product       │ Customer     │
│ Customers    │ Product Product       │ Items        │
│              │ Product Product       │ Offers       │
│ Reports      │                       │ Total        │
│ Bills        │                       │              │
│ Offers       │                       │ [Pay]        │
│              │                       │              │
│ AI Assistant │                       │              │
│ Backup       │                       │              │
│              │                       │              │
│ Settings     │                       │              │
│              │                       │              │
│ Profile      │                       │              │
│ Logout       │                       │              │
└──────────────┴──────────────────────────────────────┘

No bottom navigation on Desktop.

==================================================
58. ACCESSIBILITY
==================================================

All navigation items must have:

- Accessible label
- Keyboard focus
- Visible focus state
- Screen-reader friendly name
- Minimum touch target
- Correct navigation semantics

More sheet:

- Focus should move into the sheet when opened
- Escape closes on Desktop where applicable
- Focus should return to More after closing
- Background content should not be interactable while
  the sheet is open

==================================================
59. PERFORMANCE
==================================================

Navigation must be lightweight.

Do not:

- reload the application unnecessarily
- recreate the entire shell on every route
- download icons repeatedly
- load unused icon libraries

Prefer:

- SVG assets
- centralized icon mapping
- lazy-loaded feature screens
- persistent application shell

==================================================
60. ARCHITECTURE
==================================================

Navigation Shell belongs to:

Presentation / Application Shell.

It owns:

- Route presentation
- Active state
- Responsive navigation
- Menu opening/closing
- Visual role-based visibility
- Navigation animation
- Accessibility

It does NOT own:

- Business logic
- Authorization decisions
- Billing rules
- Pricing
- Offers
- Customer logic
- Repository access
- SQLite access

Flow:

Navigation
      ↓
Router / Facade
      ↓
Application Contract
      ↓
Feature Screen

Authorization remains enforced outside presentation.

==================================================
61. REUSABLE COMPONENT STRUCTURE
==================================================

Suggested Angular structure:

src/ui/layout/
│
├── app-shell/
│
├── navigation/
│   ├── navigation-shell/
│   ├── bottom-navigation/
│   ├── bottom-navigation-item/
│   ├── more-bottom-sheet/
│   ├── more-menu-item/
│   ├── desktop-sidebar/
│   ├── sidebar-menu-item/
│   └── navigation-icon/
│
└── components/

Do not duplicate navigation markup inside every feature.

==================================================
62. FOLDER / ASSET STRUCTURE
==================================================

Suggested:

src/assets/
└── icons/
    └── navigation/
        ├── home.svg
        ├── billing.svg
        ├── products.svg
        ├── customers.svg
        ├── bills.svg
        ├── offers.svg
        ├── reports.svg
        ├── ai-assistant.svg
        ├── backup-sync.svg
        ├── settings.svg
        ├── business-profile.svg
        ├── logout.svg
        ├── more.svg
        ├── chevron-right.svg
        └── close.svg

All assets should be referenced through AssetService.

==================================================
63. ANIMATION
==================================================

Mobile More:

Slide up:
~200ms

Overlay fade:
~150ms

Close:

~180–200ms

Navigation active state:

Fast transition:
~120–160ms

Use ease-out.

No excessive animation.

==================================================
64. FIGMA FRAMES TO CREATE
==================================================

Create these Figma frames:

01 — Mobile Navigation — Home Active
02 — Mobile Navigation — Billing Active
03 — Mobile Navigation — Products Active
04 — Mobile Navigation — More Open

05 — Tablet Navigation — Home Active
06 — Tablet Navigation — Billing Active
07 — Tablet Navigation — Products Active
08 — Tablet Navigation — More Open

09 — Desktop Sidebar — Home Active
10 — Desktop Sidebar — Billing Active
11 — Desktop Sidebar — Products Active
12 — Desktop Sidebar — Reports Active

==================================================
65. FIGMA COMPONENT LIBRARY
==================================================

Create:

Navigation / Bottom
Navigation / Bottom Item
Navigation / More Sheet
Navigation / More Section
Navigation / More Item

Navigation / Sidebar
Navigation / Sidebar Section
Navigation / Sidebar Item

Navigation / Icon
Navigation / Badge

All components must have variants.

==================================================
66. FINAL PRODUCT RULES
==================================================

RULE 1:

Mobile and Tablet use Bottom Navigation.

RULE 2:

Mobile and Tablet use More Bottom Sheet.

RULE 3:

Desktop uses persistent Sidebar.

RULE 4:

Cart is NOT navigation.

RULE 5:

Customer and Offers inside Billing are workflow overlays,
not navigation destinations.

RULE 6:

Top bars are screen-specific, not global navigation.

RULE 7:

Startup and PIN Login have NO application navigation.

RULE 8:

Role visibility does not replace backend authorization.

RULE 9:

Do not duplicate navigation controls.

RULE 10:

Navigation must optimize for LESS NAVIGATION and FAST
BILLING.

==================================================
67. FINAL VISUAL SOURCE OF TRUTH
==================================================

Use the previously frozen:

- Startup design
- PIN Login design
- Billing design
- Cart design
- Offers design
- Customer design

as the visual language.

The Navigation Shell must match:

- BizCopilot purple
- Inter typography
- Rounded surfaces
- Subtle borders
- Soft shadows
- Clean outline icons
- Minimal visual noise
- Mobile-first touch behavior

Do not introduce a new visual language.

==================================================
68. FINAL DESIGN PRINCIPLE
==================================================

BizCopilot navigation should disappear into the workflow.

The user should not think:

"Where do I navigate?"

The user should think:

"I need to bill this customer."

Therefore:

MOBILE / TABLET

Home
Billing
Products
More
       ↓
Everything else

DESKTOP

Persistent Sidebar
       ↓
Everything accessible immediately

The navigation system must make the product feel:

FAST
+
SIMPLE
+
CONSISTENT
+
ROLE-BASED
+
TOUCH-FRIENDLY
+
BILLING-FIRST

==================================================
69. FINAL FREEZE
==================================================

Freeze the Navigation Shell before implementing additional
feature screens.

The Navigation Shell becomes the shared navigation source
of truth for BizCopilot V1.

Any future screen must use this shell.

Do not create screen-specific navigation systems.

Do not introduce new bottom navigation items without
revisiting this Navigation Shell specification.