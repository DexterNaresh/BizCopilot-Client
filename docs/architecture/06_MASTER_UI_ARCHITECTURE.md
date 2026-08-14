# BIZCOPILOT V1 — MASTER ANGULAR ARCHITECTURE
# PROJECT STRUCTURE, CODE OWNERSHIP & IMPLEMENTATION RULES
# SOURCE OF TRUTH FOR ALL FUTURE UI/UX IMPLEMENTATION

============================================================
0. ROLE
============================================================

You are a senior Angular architect, frontend engineer,
product UI engineer, and software architect.

You are working on:

BIZCOPILOT V1

BizCopilot is an offline-first, fast billing application
for small businesses in India such as:

- Juice shops
- Cafes
- Small retail shops
- Hardware shops
- Similar small businesses

The product philosophy is:

FAST BILLING
+
LESS NAVIGATION
+
MINIMUM INPUT
+
OFFLINE-FIRST
+
SIMPLE BUSINESS UX

The application must be designed so that future V2/V3
features can be added without restructuring the V1
architecture.

============================================================
1. MASTER ARCHITECTURE PRINCIPLE
============================================================

The application follows this strict flow:

                    UI / Presentation
                           │
                           ↓
                       Facade
                           │
                           ↓
                  Application Layer
                           │
                           ↓
                  Domain / Runtime
                           │
             ┌─────────────┼─────────────┐
             ↓             ↓             ↓
          SQLite       Platform       Server/API
        Repository      Adapter        Adapter
                                          │
                                          ↓
                                      PostgreSQL

The UI MUST NEVER directly access:

- SQLite
- repositories
- HTTP APIs
- database services
- business rules
- pricing logic
- offer evaluation
- tax calculations
- synchronization logic
- AI business decisions

============================================================
2. LAYER RESPONSIBILITIES
============================================================

------------------------------------------------------------
PRESENTATION / UI
------------------------------------------------------------

Owns:

- Angular components
- HTML templates
- SCSS
- responsive layouts
- visual states
- animations
- accessibility
- user interaction
- navigation presentation
- local UI state
- form presentation
- loading state
- error state presentation

Does NOT own:

- business rules
- pricing calculations
- offer calculations
- tax calculations
- inventory calculations
- profit calculations
- persistence
- SQLite calls
- API calls
- synchronization
- authentication implementation
- AI decisions

------------------------------------------------------------
FACADE
------------------------------------------------------------

Owns:

- UI-facing state
- Angular Signals
- Computed state
- UI orchestration
- Calling application use cases
- Mapping application results into UI state
- Managing screen-level workflows

Facade may expose:

- signals
- computed values
- commands/actions
- loading state
- error state

Facade MUST NOT implement domain/business rules.

------------------------------------------------------------
APPLICATION
------------------------------------------------------------

Owns:

- Use cases
- Application workflows
- DTO validation
- transaction boundaries
- orchestration between domain/runtime services
- application contracts
- command/query contracts

Examples:

CreateProduct
UpdateProduct
CreateSale
AddCustomer
ApplyOffer
CompletePayment
AuthenticateUser
GenerateReport

Application layer decides:

"WHAT operation should happen?"

It does NOT contain UI implementation.

------------------------------------------------------------
DOMAIN
------------------------------------------------------------

Owns core business concepts and business rules.

Examples:

Product
Customer
Sale
SaleItem
Offer
Payment
Business
User
Role

Domain owns rules such as:

- product invariants
- sale invariants
- offer rules
- pricing rules
- payment rules
- role/business rules

The UI must never reproduce these rules.

------------------------------------------------------------
RUNTIME
------------------------------------------------------------

Runtime owns execution of business capabilities and
infrastructure-facing operations.

Examples:

- local business runtime
- pricing engine
- offer engine
- sales runtime
- authentication runtime
- synchronization runtime
- reporting runtime

Runtime can use:

- repositories
- platform adapters
- local database
- server adapters

============================================================
3. AUTHORITATIVE FOLDER STRUCTURE
============================================================

Use the following structure as the architectural baseline.

src/
│
├── app/
│   ├── app.component.*
│   ├── app.config.*
│   ├── app.routes.*
│   └── app.providers.*
│
├── assets/
│   ├── icons/
│   │   ├── navigation/
│   │   ├── startup/
│   │   ├── authentication/
│   │   ├── billing/
│   │   ├── cart/
│   │   ├── offers/
│   │   └── customer/
│   │
│   ├── images/
│   │   ├── branding/
│   │   ├── products/
│   │   └── illustrations/
│   │
│   └── fonts/
│
├── core/
│   │
│   ├── config/
│   │
│   ├── constants/
│   │
│   ├── errors/
│   │
│   ├── guards/
│   │
│   ├── interceptors/
│   │
│   ├── services/
│   │
│   └── utilities/
│
├── ui/
│   │
│   ├── theme/
│   │   ├── _variables.scss
│   │   ├── _typography.scss
│   │   ├── _mixins.scss
│   │   ├── _breakpoints.scss
│   │   ├── _material-overrides.scss
│   │   └── index.scss
│   │
│   ├── layout/
│   │   ├── app-shell/
│   │   ├── navigation/
│   │   ├── top-bar/
│   │   └── responsive-container/
│   │
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── ui-models/
│   │
│   └── features/
│       ├── startup/
│       ├── authentication/
│       ├── billing/
│       ├── products/
│       ├── customers/
│       ├── offers/
│       ├── bills/
│       ├── reports/
│       ├── dashboard/
│       ├── ai/
│       └── settings/
│
├── application/
│   ├── contracts/
│   ├── dto/
│   ├── use-cases/
│   ├── commands/
│   └── queries/
│
├── domain/
│   ├── business/
│   ├── product/
│   ├── customer/
│   ├── sale/
│   ├── offer/
│   ├── payment/
│   ├── user/
│   └── shared/
│
└── runtime/
    ├── business/
    ├── product/
    ├── customer/
    ├── sales/
    ├── offers/
    ├── payment/
    ├── authentication/
    ├── reporting/
    ├── synchronization/
    │
    ├── persistence/
    │   ├── sqlite/
    │   ├── repositories/
    │   └── migrations/
    │
    ├── api/
    │   ├── clients/
    │   ├── adapters/
    │   └── mappers/
    │
    ├── platform/
    │   ├── camera/
    │   ├── printer/
    │   ├── biometric/
    │   ├── filesystem/
    │   └── network/
    │
    └── ai/
        ├── contracts/
        ├── adapters/
        └── services/

============================================================
4. FEATURE STRUCTURE
============================================================

Each UI feature must follow the same structure.

Example:

ui/features/billing/

billing-page/
    billing-page.component.ts
    billing-page.component.html
    billing-page.component.scss

components/
    product-grid/
    product-card/
    product-search/
    category-filter/
    cart-bar/

facades/
    billing.facade.ts

ui-models/
    billing-view.model.ts

The feature UI must NOT contain business logic.

Example:

billing-page.component.ts

GOOD:

billingFacade.addProduct(productId)

BAD:

calculatePrice()
calculateDiscount()
calculateTax()
evaluateOffer()

Those operations belong outside UI.

============================================================
5. FACADE PATTERN
============================================================

Each complex feature should expose a Facade.

Example:

BillingFacade

Responsibilities:

- product display state
- selected category
- search state
- cart state
- loading state
- UI commands

Example:

billingFacade.products()
billingFacade.cart()
billingFacade.total()
billingFacade.isLoading()

Commands:

billingFacade.addProduct(productId)
billingFacade.removeItem(itemId)
billingFacade.openCart()
billingFacade.openOffers()
billingFacade.openCustomer()

The Facade delegates actual business operations to
Application use cases.

============================================================
6. COMPONENT RESPONSIBILITY
============================================================

Components should be small and focused.

Example Billing:

BillingPage
    │
    ├── ProductSearch
    ├── CategoryFilter
    ├── ProductGrid
    │     └── ProductCard
    │
    └── CartBar

Do NOT create one giant Billing component containing:

- product logic
- cart logic
- offer logic
- customer logic
- payment logic
- navigation logic

============================================================
7. SHARED UI COMPONENTS
============================================================

Reusable visual components belong in:

src/ui/shared/components/

Examples:

Button
Input
SearchField
Modal
BottomSheet
Dialog
Radio
Checkbox
Badge
Chip
Avatar
EmptyState
LoadingIndicator
ConfirmationDialog
MoneyDisplay

Feature-specific components remain inside their feature.

Do NOT put Billing-specific components into shared merely
because they are reusable once.

============================================================
8. APPLICATION SHELL
============================================================

Application shell:

src/ui/layout/app-shell/

Responsible for authenticated application structure.

Example:

AppShell
│
├── DesktopSidebar
│
├── Mobile/Tablet BottomNavigation
│
├── TopBar
│
└── Router Outlet

Startup and Login MUST NOT use the authenticated
Application Shell.

============================================================
9. NAVIGATION
============================================================

Navigation Shell is a shared UI architecture.

Mobile:

Home
Billing
Products
More

Tablet:

Home
Billing
Products
More

Desktop:

Persistent Sidebar

Navigation components belong under:

src/ui/layout/navigation/

Do NOT duplicate navigation inside feature screens.

============================================================
10. SCREEN HEADER VS NAVIGATION
============================================================

A screen's header is NOT application navigation.

Example Billing:

Billing       Search   Scan   More

This is the Billing screen header.

The bottom navigation / desktop sidebar is the
application navigation.

Do NOT duplicate navigation controls inside screen headers.

============================================================
11. ASSET ARCHITECTURE
============================================================

All static assets must live under:

src/assets/

Images:

src/assets/images/

Icons:

src/assets/icons/

Branding:

src/assets/images/branding/

Product images:

src/assets/images/products/

Illustrations:

src/assets/images/illustrations/

Icons:

src/assets/icons/

No:

- Base64
- hardcoded data URLs
- random external image URLs
- screenshots used as UI assets

============================================================
12. ICON SYSTEM
============================================================

Use:

Google Material Symbols Outlined

as the standard icon family.

Do not mix icon libraries.

Canonical icon mapping is defined by the separate
BizCopilot V1 Icon System specification.

Important:

The Icon System specification is authoritative for:

- icon names
- sizes
- colors
- placement
- asset source
- Material Symbols style

============================================================
13. ASSETSERVICE
============================================================

All application assets should be accessed through:

AssetService

Example conceptual usage:

assetService.icon('navigation.home')

assetService.image('branding.logo')

Do not scatter asset paths throughout components.

Avoid:

src/assets/icons/home.svg

hardcoded directly in multiple templates.

Centralize asset resolution.

============================================================
14. DESIGN SYSTEM
============================================================

All visual design must use the centralized theme.

Location:

src/ui/theme/

Required:

_variables.scss
_typography.scss
_mixins.scss
_breakpoints.scss
_material-overrides.scss

All screens must consume design tokens.

Do NOT use random hardcoded:

- colors
- spacing
- radii
- shadows
- typography
- breakpoints

inside feature SCSS.

============================================================
15. RESPONSIVE BREAKPOINTS
============================================================

Mobile:

0–599px

Tablet:

600–1023px

Desktop:

1024px+

Use centralized breakpoint definitions.

Do not repeat breakpoint values throughout components.

============================================================
16. RESPONSIVE DESIGN PRINCIPLE
============================================================

Mobile and Tablet are touch-first.

Desktop is POS/workstation-first.

Mobile:

- bottom navigation
- bottom sheets
- compact layouts
- minimum navigation

Tablet:

- bottom navigation
- larger workspace
- Billing can show catalog + cart simultaneously
- dialogs/overlays instead of full navigation where possible

Desktop:

- persistent sidebar
- Billing catalog + permanent cart panel
- dialogs instead of bottom sheets

Desktop MUST NOT be treated as a stretched mobile screen.

============================================================
17. UI / BUSINESS LOGIC BOUNDARY
============================================================

NEVER do this:

HTML
 ↓
Service
 ↓
SQLite

Instead:

Screen
 ↓
Facade
 ↓
Application Use Case
 ↓
Runtime
 ↓
Repository / API / Platform Adapter

============================================================
18. BUSINESS LOGIC RULE
============================================================

Business rules must have ONE authoritative implementation.

Examples:

Pricing
Offers
Discounts
Payment calculations
Sales totals
Customer rules
Product availability
Synchronization
Authentication

The UI may DISPLAY the result.

The UI must NOT recreate the calculation.

============================================================
19. OFFLINE-FIRST ARCHITECTURE
============================================================

BizCopilot V1 is offline-first.

The client must be capable of completing required
billing operations while offline.

For billing:

UI
 ↓
Facade
 ↓
Application
 ↓
Runtime
 ↓
Local SQLite
 ↓
Sale completed locally

Then synchronization can occur separately.

Do NOT make UI wait for server availability to complete
a normal offline-capable billing operation.

============================================================
20. SQLITE
============================================================

SQLite belongs to Runtime/Persistence.

Example:

runtime/persistence/sqlite/

Repositories:

runtime/persistence/repositories/

UI MUST NEVER import:

SQLite APIs
Repository implementations
Database entities

UI should only consume application contracts.

============================================================
21. SERVER/API
============================================================

Server communication belongs behind:

runtime/api/

Structure:

api/
├── clients/
├── adapters/
└── mappers/

Do not call HttpClient directly from UI components.

Do not put REST URLs inside feature components.

============================================================
22. SYNCHRONIZATION
============================================================

Synchronization belongs to:

runtime/synchronization/

The UI may display:

Syncing
Synced
Offline
Pending

But the UI does NOT implement synchronization.

Synchronization owns:

- operation queue
- ACK handling
- retry
- idempotency
- conflict handling
- server acknowledgement

============================================================
23. IDENTITY / OFFLINE IDS
============================================================

Offline-created entities use client-generated identifiers
according to the established BizCopilot runtime rules.

The UI does not generate IDs as business logic.

ID generation belongs to the appropriate runtime/application
layer.

============================================================
24. OPERATION ID / IDEMPOTENCY
============================================================

OperationId and idempotency are infrastructure/runtime
concerns.

The UI should trigger an application command.

It should not implement duplicate-request detection.

============================================================
25. PRODUCT IMMUTABILITY
============================================================

Completed sales must preserve the product information
required by the sale.

The UI should not mutate historical sale data.

Historical/business invariants belong to Domain/Runtime.

============================================================
26. BILLING ARCHITECTURE
============================================================

Billing:

BillingPage
 ↓
BillingFacade
 ↓
Application Use Cases
 ↓
Sales / Pricing / Offer Runtime
 ↓
SQLite / Server

Billing UI owns:

- Product display
- Search presentation
- Category selection
- Cart presentation
- User interaction
- Responsive layout

Billing UI does NOT own:

- Price calculation
- Discount calculation
- Offer evaluation
- Tax calculation
- Sale persistence

============================================================
27. CART ARCHITECTURE
============================================================

Cart is part of Billing workflow.

Do not create Cart as a separate application navigation
destination.

Mobile:

Billing
 ↓
Cart Bottom Sheet / View

Tablet/Desktop:

Billing
 ↓
Permanent Cart Panel

Cart calculations come from the appropriate application/
runtime layer.

============================================================
28. OFFERS ARCHITECTURE
============================================================

Offers are business rules.

Examples:

BOGO
Percentage Discount
Buy X Get Y
Other configured promotions

Offer evaluation belongs to:

Application
+
Domain/Runtime

The UI only:

- displays offers
- selects an offer
- displays applied result

============================================================
29. CUSTOMER ARCHITECTURE
============================================================

Customer UI owns:

- search interaction
- customer display
- selection state
- input presentation

Customer creation/search belongs to:

Facade
 ↓
Application
 ↓
Customer Runtime
 ↓
Repository

Do not directly query SQLite from Customer components.

============================================================
30. PAYMENT ARCHITECTURE
============================================================

Payment UI owns:

- payment method selection
- amount display
- interaction
- loading/error state

Payment calculation and completion belong to:

Application
+
Payment Runtime

============================================================
31. AI ARCHITECTURE
============================================================

AI is NOT the owner of business rules.

AI consumes Business Intelligence.

Flow:

Business Data
 ↓
Business Intelligence
 ↓
AI Application Contract
 ↓
AI Service
 ↓
AI Response
 ↓
AI UI

AI must NOT:

- calculate authoritative sales
- modify business records directly
- invent business facts
- override business rules
- make autonomous business decisions

AI responses must be grounded in available business data.

If the AI cannot determine something:

It must explicitly say that the information is unavailable
rather than hallucinating.

============================================================
32. ROLE ARCHITECTURE
============================================================

V1 roles:

OWNER
WAITER

Owner:

- Dashboard
- Billing
- Products
- Customers
- Offers
- Reports
- AI
- Settings
- Business management

Waiter:

- Billing/order workflow
- permitted customer interactions
- permitted product interactions

Role permissions are enforced by application/runtime
authorization.

UI visibility is only a presentation concern.

============================================================
33. FEATURE FLAGS
============================================================

Feature flags belong outside UI business logic.

The UI may consume a feature flag result.

Example:

Customer info capture enabled?

UI:

show/hide customer capture

But the decision/configuration is owned by the appropriate
application/runtime layer.

============================================================
34. ROUTING
============================================================

Routes belong to:

src/app/app.routes.*

Feature components should not directly manipulate routing
logic everywhere.

Use centralized route definitions.

Example conceptual routes:

/startup
/login
/home
/billing
/products
/customers
/offers
/bills
/reports
/ai
/settings

Navigation actions should use the router/facade boundary
appropriately.

============================================================
35. MODAL / SHEET ARCHITECTURE
============================================================

Use shared UI infrastructure for:

- Bottom Sheet
- Dialog
- Modal
- Confirmation

Mobile:

Bottom Sheet preferred for workflow overlays.

Tablet:

Dialog / wide overlay depending on context.

Desktop:

Dialog / centered overlay.

Do not implement custom modal behavior separately
inside every feature.

============================================================
36. FEATURE-SPECIFIC RESPONSIBILITY
============================================================

Startup:

First-run business setup.

Authentication:

PIN authentication / biometric interaction.

Dashboard:

Owner business overview.

Billing:

Fast sales workflow.

Products:

Product management.

Customers:

Customer management.

Offers:

Offer management.

Bills:

Bill history/details.

Reports:

Sales/business analytics.

AI:

Business intelligence assistant.

Settings:

Application/business configuration.

============================================================
37. V1 BUSINESS SCOPE RULES
============================================================

V1 does NOT contain inventory management.

Therefore do NOT introduce UI for:

- Low Stock
- Dead Stock
- Inventory valuation
- Stock movement dashboards
- Inventory profit calculations

Product Availability may still be supported where defined.

V1 focuses on:

- Fast Billing
- Sales
- Products
- Customers
- Offers
- Bills
- Reports
- Business Intelligence
- AI assistance

============================================================
38. V1 FINANCIAL RULE
============================================================

V1 should show:

SALES

Do NOT show authoritative:

PROFIT

because inventory is not part of V1.

Profit-related functionality belongs to a future version
when inventory/cost data is available.

============================================================
39. CODE STYLE
============================================================

Use modern Angular patterns.

Prefer:

- Standalone components
- Signals
- Computed
- Dependency Injection
- Typed models
- Strong typing
- Reactive patterns where appropriate

Avoid:

- giant components
- any type
- duplicated business logic
- unnecessary inheritance
- global mutable state
- direct database access from UI

============================================================
40. TYPESCRIPT
============================================================

Use strict TypeScript.

Avoid:

any

Prefer:

interfaces
types
readonly properties
discriminated unions
typed results
typed errors

Use meaningful names.

Do not use abbreviations that reduce clarity.

============================================================
41. SCSS
============================================================

SCSS must consume design tokens.

GOOD:

color: var(--color-primary);

BAD:

color: #5B3BEB;

inside feature component SCSS when the value is already
defined by the theme.

GOOD:

border-radius: var(--radius-card);

BAD:

border-radius: 17px;

Do not create magic values unnecessarily.

============================================================
42. COMPONENT SIZE
============================================================

If a component becomes responsible for multiple unrelated
concerns, split it.

Prefer:

Small
Focused
Reusable
Testable

components.

============================================================
43. STATE MANAGEMENT
============================================================

Use Angular Signals/Computed for local and feature UI state
where appropriate.

Example:

products = signal<ProductViewModel[]>([])

selectedCategory = signal<string>('all')

cart = signal<CartViewModel>(...)

computed:

cartTotal
itemCount
hasItems

Do not put domain rules inside computed UI state.

============================================================
44. VIEW MODELS
============================================================

UI should consume View Models rather than directly exposing
complex domain objects where practical.

Example:

ProductCardViewModel

ProductRowViewModel

CartItemViewModel

CustomerViewModel

OfferViewModel

This prevents UI coupling to domain implementation.

============================================================
45. DTO / DOMAIN / VIEW MODEL SEPARATION
============================================================

Do not use one object for everything.

Keep boundaries:

API DTO
 ↓
Application Model
 ↓
Domain Model
 ↓
UI View Model

Use mappers/adapters where required.

Do not expose API response structures directly to templates.

============================================================
46. ERROR HANDLING
============================================================

Errors should cross boundaries as typed application errors
where appropriate.

UI decides how to PRESENT the error.

UI does not decide the business meaning of the error.

Examples:

Network unavailable
Authentication failed
Validation failed
Business rule violation
Synchronization pending

Use user-friendly messages.

Do not expose:

- stack traces
- SQL errors
- internal server details

============================================================
47. LOADING STATES
============================================================

Every asynchronous UI operation must have an appropriate
loading state where required.

Examples:

Authentication
Product loading
Customer search
Offer loading
Payment
Synchronization

Do not block the entire application unnecessarily.

============================================================
48. ACCESSIBILITY
============================================================

Every UI feature must support:

- keyboard accessibility where applicable
- screen readers
- visible focus
- appropriate touch targets
- semantic HTML
- accessible labels
- meaningful error messages

Do not rely only on color.

============================================================
49. PERFORMANCE
============================================================

The application is designed for small-business devices,
including mobile/tablet hardware.

Prioritize:

- fast startup
- minimal unnecessary rendering
- lazy loading
- efficient lists
- lightweight assets
- local-first operation
- minimal network dependency

Do not introduce heavy libraries without justification.

============================================================
50. OFFLINE UX
============================================================

The UI should clearly communicate:

ONLINE
OFFLINE
SYNCING
SYNCED
PENDING

But it must not expose infrastructure complexity.

Example:

🟢 Synced

or:

Offline — Changes will sync automatically.

The exact icon/visual treatment comes from the shared
design system.

============================================================
51. TESTING ARCHITECTURE
============================================================

Tests should follow the same boundaries.

UI tests:

- rendering
- interaction
- accessibility
- navigation presentation

Facade tests:

- state transitions
- command orchestration

Application tests:

- use cases
- validation
- workflows

Domain tests:

- business rules

Runtime tests:

- repositories
- synchronization
- adapters

Do not test business rules only through UI tests.

============================================================
52. FILE NAMING
============================================================

Use consistent Angular naming.

Examples:

billing-page.component.ts
billing-page.component.html
billing-page.component.scss

billing.facade.ts

product-grid.component.ts

product-card.component.ts

Use kebab-case filenames.

============================================================
53. PACKAGE / CODE OWNERSHIP
============================================================

All project packages/modules must follow the established
BizCopilot namespace convention:

com.bizcopilot.*

Where package/module naming is applicable.

Do not introduce unrelated namespaces.

============================================================
54. NO BUSINESS LOGIC IN HTML
============================================================

Templates should remain declarative.

BAD:

Complex calculations
Offer formulas
Pricing formulas
Database calls
Business decisions

GOOD:

@if (facade.hasItems()) {
    ...
}

{{ facade.total() }}

The template renders state.

============================================================
55. NO BUSINESS LOGIC IN SCSS
============================================================

SCSS controls presentation only.

Do not encode business states through arbitrary CSS hacks.

Use explicit UI state classes generated from the component
state.

============================================================
56. NO HARDCODED ASSETS
============================================================

Do not use:

<img src="some-random-url">

Do not embed Base64.

Use AssetService and centralized assets.

============================================================
57. NO SCREEN-SPECIFIC DESIGN SYSTEMS
============================================================

All screens must use the same:

- color system
- typography
- spacing
- radius
- shadow
- icon system
- responsive breakpoints
- interaction patterns

Do not create a separate design language for Products,
Dashboard, Settings, etc.

============================================================
58. FROZEN UI REFERENCES
============================================================

The following screens have been visually frozen and must
be treated as reference designs:

1. Startup
2. PIN Login
3. Navigation Shell
4. Billing
5. Cart
6. Offers
7. Customer Selection

Future screens must visually align with these references.

Do not redesign previously frozen screens unless explicitly
requested.

============================================================
59. SCREEN IMPLEMENTATION RULE
============================================================

When implementing a new screen:

1. Read this architecture specification.
2. Read the Icon System specification.
3. Read the Navigation Shell specification.
4. Read the relevant frozen reference images.
5. Read the screen-specific UI prompt.
6. Implement using the established architecture.
7. Do not invent new architectural patterns.
8. Do not duplicate shared components.
9. Do not move business logic into UI.

============================================================
60. SOURCE OF TRUTH HIERARCHY
============================================================

When resolving ambiguity, use this order:

1. Explicit product/business rule
2. Frozen architecture decision
3. Frozen UI reference
4. Global design system
5. Screen-specific prompt
6. Existing implementation pattern
7. Reasonable implementation detail

Do NOT silently change a frozen product decision.

If a requirement is ambiguous and affects business logic,
DO NOT invent a business decision.

Ask for clarification or isolate the ambiguity behind
an application contract.

============================================================
61. AI / CODING AGENT BEHAVIOR
============================================================

When modifying the existing project:

DO NOT:

- rewrite unrelated files
- change frozen architecture
- introduce new frameworks
- replace Angular patterns without justification
- move business logic into UI
- create duplicate services
- create duplicate components
- invent business rules

Before making a structural change:

Check the existing architecture.

Reuse existing abstractions whenever possible.

============================================================
62. NO HALLUCINATION / NO INVENTED DECISIONS
============================================================

If information is not defined:

DO NOT invent a business rule.

Examples:

Unknown pricing rule
Unknown offer rule
Unknown tax rule
Unknown synchronization conflict rule
Unknown permission

Do not guess.

Keep the implementation behind a clearly defined
application/domain contract or ask for clarification.

AI-generated recommendations must never become
authoritative business data.

============================================================
63. IMPLEMENTATION WORKFLOW
============================================================

For every feature:

ANALYZE
   ↓
IDENTIFY EXISTING COMPONENTS
   ↓
IDENTIFY EXISTING FACADE
   ↓
IDENTIFY APPLICATION CONTRACT
   ↓
IDENTIFY DOMAIN/RUNTIME
   ↓
IMPLEMENT UI
   ↓
CONNECT FACADE
   ↓
TEST
   ↓
BUILD
   ↓
VISUAL VERIFY

Do not start by creating random components.

============================================================
64. BUILD VERIFICATION
============================================================

After implementation changes, run the Angular production
build:

cmd /c "npm run build"

Fix:

- TypeScript errors
- Angular template errors
- SCSS errors
- build errors

Do not claim the implementation is complete if the
production build fails.

============================================================
65. VISUAL VERIFICATION
============================================================

Verify:

Mobile:
< 600px

Tablet:
600–1023px

Desktop:
≥ 1024px

Check:

- layout
- spacing
- typography
- icons
- navigation
- card dimensions
- responsive behavior
- overlays
- bottom sheets
- sidebar
- accessibility
- overflow

Compare implementation against the frozen reference image.

============================================================
66. FROZEN PRODUCT RULE
============================================================

The architecture exists to support the product goal:

A small-business owner/cashier should be able to:

OPEN APP
 ↓
LOGIN
 ↓
BILL
 ↓
SELECT CUSTOMER IF REQUIRED
 ↓
APPLY OFFER IF REQUIRED
 ↓
PAY
 ↓
COMPLETE SALE

with minimum navigation.

The architecture must NEVER introduce unnecessary
navigation simply because it is technically convenient.

============================================================
67. FUTURE VERSION COMPATIBILITY
============================================================

V1 architecture must allow future modules such as:

V2:

- Loyalty
- Credit
- Multi-Branch
- Feature Flags
- Subscription

V3:

- AI Agents
- Workflow Automation
- Online Ordering

Do not implement V2/V3 functionality now unless explicitly
requested.

However, the architecture must not prevent adding them later.

============================================================
68. FINAL MASTER RULE
============================================================

THIS DOCUMENT IS THE MASTER IMPLEMENTATION ARCHITECTURE.

All subsequent prompts are subordinate to this document.

Subsequent prompts may define:

- Screen layout
- Visual design
- Components
- UX behavior
- Screen-specific interaction

But they MUST NOT override:

- Layer boundaries
- Business logic ownership
- Repository boundaries
- Runtime boundaries
- Asset architecture
- Navigation architecture
- Design-system architecture
- Offline-first architecture

unless explicitly stated as a new architecture decision.

============================================================
69. INITIAL CONTEXT ACKNOWLEDGEMENT
============================================================

Before generating or modifying code, understand and retain
the following hierarchy:

MASTER ARCHITECTURE
        ↓
ICON SYSTEM
        ↓
DESIGN SYSTEM
        ↓
NAVIGATION SHELL
        ↓
FROZEN SCREENS
        ↓
SCREEN-SPECIFIC REQUIREMENT
        ↓
IMPLEMENTATION

Do not treat each screen prompt as an independent project.

All screens belong to ONE BizCopilot V1 application.

============================================================
70. FINAL OBJECTIVE
============================================================

Build BizCopilot V1 as a:

FAST
OFFLINE-FIRST
MOBILE-FIRST
TOUCH-FRIENDLY
SMALL-BUSINESS
BILLING APPLICATION

with:

Clean Angular architecture
+
Strict layer separation
+
Reusable components
+
Centralized design system
+
Consistent icons
+
Responsive navigation
+
Offline-first runtime
+
Testable business logic
+
Future V2/V3 extensibility

The final codebase must be maintainable by a senior
engineering team and must not require architectural
rework simply because additional screens or V2/V3
capabilities are introduced.

END OF MASTER ARCHITECTURE