# BizCopilot — AI Assistant Screen
## Master Figma-Level UI/UX Design & Implementation Prompt
### FINAL / FROZEN — Desktop + Tablet + Mobile

You are a Senior Product Designer, UX Architect, and Design-System Engineer.

Design and implement the BizCopilot AI Assistant screen using this specification. This is a FROZEN product design. Do not reinterpret, reorder, rename, or invent major UX patterns.

## 1. Product Purpose

BizCopilot is an offline-first billing/business operating system for small and medium businesses in India.

The AI Assistant is an assistant and business-analysis layer, not another dashboard and not a replacement for Billing, Home, Reports, Products, Customers, or Offers.

Product distinction:
- Home → What is happening now?
- Billing → Complete the sale.
- Reports → What happened?
- AI Assistant → Why did it happen? What should I do next?

Do not turn AI Assistant into a page full of permanent KPI cards.

## 2. Frozen Principles

- Business-first, fast, calm, premium, minimal.
- Natural-language questions are first-class.
- AI responses must be grounded in business data.
- Charts/tables are dynamic when useful and supported by reliable data.
- Never force a visualization when data is insufficient or ambiguous.
- Never fabricate numbers, reasons, dates, products, customers, or recommendations as facts.
- Show the data/evidence basis for analytical answers.
- V1 AI does not silently modify business data.
- No model selector, token controls, temperature controls, prompt editor, voice, file upload, image upload, or technical AI settings.

## 3. Viewports

Design three intentional responsive viewpoints:
- Desktop: >= 1024px
- Tablet: 600–1023px
- Mobile: 0–599px

Do not simply scale desktop down.

## 4. Desktop Structure

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Global Header / Business Selector / Notifications / User                    │
├───────────────┬───────────────────────────────┬──────────────────────────────┤
│ Global        │ AI Conversation               │ Business Context             │
│ Sidebar       │                               │                              │
│               │ AI Assistant Header           │ Business Context             │
│ Home          │ Suggested Questions           │ Today                        │
│ Billing       │ Conversation                  │ Sales                        │
│ Products      │ User message                  │ Bills                        │
│ Offers        │ AI response                   │ Average Bill                 │
│ Customers     │ Chart/Table/Text              │ Attention                    │
│ Reports       │ Evidence                      │ Quick Links                  │
│ AI Assistant  │ Follow-ups                    │ Tip                          │
│ Settings      │                               │                              │
│ Help          │ Composer                      │                              │
└───────────────┴───────────────────────────────┴──────────────────────────────┘
```

Recommended fluid proportions:
- Sidebar: 13–16%
- Main conversation: 54–62%
- Business Context: 22–28%

Conversation is the visual priority. Never introduce page-level horizontal scrolling.

## 5. Global Header

Include:
- BizCopilot logo
- Business selector
- Notification
- Avatar
- User name
- Role
- User dropdown

Example:
`BizCopilot | Green Bites Café ▼                         🔔  RS / Ravi / Owner ▼`

Keep header light.

## 6. Desktop Sidebar

Navigation:
1. Home
2. Billing
3. Products
4. Offers
5. Customers
6. Reports
7. AI Assistant — active
8. Settings

Bottom:
- Help & Support

Active AI state:
- Soft purple background
- Purple indicator
- Purple AI icon
- Stronger text

## 7. Conversation History

Compact history area:

```text
AI Assistant
Your business copilot

[ + New Chat ]

Today
Why are sales lower today?       10:42 AM
Best selling products this week  09:15 AM
How are my offers performing?    08:33 AM

Yesterday
Customer visit patterns          5:21 PM
Monthly sales summary             3:10 PM
Product performance               11:05 AM

This Week
Which items to promote?          Sep 24
Compare this week vs last week   Sep 23
```

Group by Today / Yesterday / This Week.

Selected item gets subtle purple active state.

## 8. New Chat

New Chat:
- Clears the active conversation.
- Starts a fresh conversation.
- Does not delete previous conversations.
- Previous chats remain in history.
- No destructive confirmation.

Initial state:

```text
✨ AI Business Assistant
Ask anything about your business.
I can help you understand sales, customers, products, offers and more.

[ Why are sales lower today? ]
[ What are my best-selling products this week? ]
[ How are my offers performing? ]
[ What should I focus on today? ]

Ask about your business...                         ➤
```

## 9. Conversation Response Architecture

AI response should be structured:

```text
User question
     ↓
AI intent / analysis
     ↓
┌──────────┬──────────┬──────────┐
│   TEXT   │   CHART  │  TABLE   │
└──────────┴──────────┴──────────┘
             ↓
      Evidence / basis
             ↓
      Suggested follow-ups
```

Supported response types:
- TEXT
- CHART
- TABLE
- MIXED

Visualization mapping:
- Trend → line chart
- Time comparison → line/bar
- Ranking → horizontal bar or ranked table
- Composition → donut
- Detailed comparison → table
- Explanation → text + visualization when useful
- Recommendation → text
- Explicit “show me a graph” → visualization when reliable data exists

Never force a chart if data is insufficient or ambiguous.

## 10. Example Analytical Response

```text
User:
Why are sales lower today?

AI:
Today's sales are ₹18,450 across 42 bills,
which is 18% lower than the same day last week
(₹22,540).

The main difference is fewer bills during the afternoon.

┌───────────────────────────────────────────────┐
│ Sales Trend — Today vs Last Tuesday           │
│                                               │
│          responsive chart                     │
└───────────────────────────────────────────────┘

Key Reasons
• Lower customer footfall in the afternoon
  Bills between 2 PM–5 PM are 35% lower.

• Fewer offer redemptions
  3 today vs 9 last Tuesday.

What You Can Do
1. Consider an afternoon offer.
2. Check regular-customer follow-up.
3. Review today's held bills.

Based on:
Today's completed bills • Last Tuesday's completed bills • Hourly sales data
```

Clearly distinguish:
- Observed data
- Interpretation
- Recommendation

## 11. Follow-up Behavior

Conversation context persists.

Example:
```text
Show sales this week.
→ weekly line chart

Compare with last week.
→ two-series comparison

Only weekdays.
→ updated chart

Why was Wednesday lower?
→ explanation + supporting visualization when useful
```

Do not unnecessarily reset context.

## 12. Chart Rules

Use:
- Line
- Bar
- Horizontal bar
- Donut

Rules:
- White surface
- Minimal gridlines
- Clear labels
- Responsive
- No 3D
- No decorative effects
- No excessive legends
- Accessible summary
- Tooltips where useful

Charts must never cause page-level horizontal scrolling.

## 13. Table Response

Example:

```text
Top Selling Products

1  Dosa             ₹8,420
2  Filter Coffee    ₹6,850
3  Idli (2 pcs)     ₹5,920
4  Vada (2 pcs)     ₹4,780
5  Masala Tea       ₹4,120

[ View All Products ]
```

On mobile prefer compact responsive rows. If horizontal scrolling is unavoidable, constrain it to the table only.

## 14. Desktop Business Context

Right panel is contextual support, not another dashboard.

```text
Business Context
[ Today ▼ ]

₹18,450     ↓18%
Sales

42          ↓12%
Bills

₹439        ↓7%
Average Bill

Attention
3 Bills on Hold             >
1 Product Unavailable       >

Quick Links
Today's Bills               >
Held Bills                  >
Products                    >
Customers                   >
Offers                      >
Reports                     >

Tip
Try asking questions in natural language.
```

## 15. Tablet Structure

Do not reproduce the desktop 3-column layout.

```text
┌───────────────────────────────────────┐
│ Header                                │
├────────────┬──────────────────────────┤
│ Compact /  │ AI Conversation          │
│ collapsible│                          │
│ navigation │                          │
└────────────┴──────────────────────────┘
```

Business Context opens as a side sheet/overlay.
Conversation history can open as a compact drawer/sheet.

Use the extra width for conversation readability and charts.

## 16. Mobile Structure

Mobile is a dedicated chat-first composition.

```text
┌───────────────────────────────┐
│ ←  ✨ AI Assistant        ⋮   │
│    Green Bites Café           │
├───────────────────────────────┤
│ User message                  │
│                    10:42 AM   │
│                               │
│ ✨ AI response                │
│ Explanation                   │
│                               │
│ ┌───────────────────────────┐ │
│ │ Dynamic chart/table       │ │
│ └───────────────────────────┘ │
│                               │
│ Evidence                      │
│ Follow-up chips               │
├───────────────────────────────┤
│ 📎 Ask a follow-up...      ➤ │
├───────────────────────────────┤
│ Home   Billing   Products More│
└───────────────────────────────┘
```

AI Assistant is NOT a bottom-nav item.

Bottom navigation remains:
- Home
- Billing
- Products
- More

AI is reached from More and contextual Ask AI entry points.

## 17. Mobile Initial State

```text
BizCopilot       Green Bites ▼

              ✨

       AI Business Assistant

Ask anything about your business.
I can help you understand sales,
customers, products, offers and more.

[ 📈 Why are sales lower today? ]
[ 📦 What are my best-selling products? ]
[ 🏷 How are my offers performing? ]
[ 💡 What should I focus on today? ]

Ask about your business...                 ➤

Home     Billing     Products     More
```

Optimize vertical space. Do not create a huge empty screen.

## 18. Mobile Chat Header

Include:
- Back
- AI sparkle icon
- AI Assistant
- Business name
- Overflow

Keep compact.

## 19. Mobile Chat Messages

User:
- Right aligned
- Soft purple surface
- Compact

AI:
- Left aligned
- White/subtle tinted surface
- AI icon
- Structured content

Do not put every paragraph into a giant card. Cards are for structured data, charts, tables, evidence, and important actions.

## 20. Mobile Business Context

Open as a dedicated bottom sheet/overlay.

```text
Business Context

Today ▼

₹18,450       ↓18%
Sales

42            ↓12%
Bills

₹439          ↓7%
Average Bill

Attention
3 Bills on Hold             >
1 Product Unavailable       >

Quick Links
Today's Bills               >
Held Bills                  >
Products                    >
Customers                   >
Offers                      >
Reports                     >
```

Do not permanently display it beside the conversation on mobile.

## 21. Mobile Conversation History

Open as an overlay/sheet, not permanently over the chat.

```text
Conversations

[ + New Chat ]

Today
Why are sales lower today?          10:42 AM >
Best-selling products this week      09:15 AM >
How are my offers performing?        08:33 AM >

Yesterday
Customer visit patterns              5:21 PM >
Monthly sales summary                 3:10 PM >

This Week
Which items to promote?              Sep 24 >
Compare this week vs last week       Sep 23 >
```

## 22. Offer Query Example

For “How are my offers performing this month?”:

```text
This month, your offers generated ₹12,400
in sales across 86 bills, representing 22%
of total sales.

┌───────────────────────────────┐
│ Sales by Offer Type           │
│          donut chart          │
│ BOGO             38%          │
│ Flat Discount    32%          │
│ Combo Offer      20%          │
│ Free Item        10%          │
└───────────────────────────────┘

Top Performing Offers
Buy 1 Get 1 Coffee       ₹4,720
Breakfast Combo          ₹3,980
10% on Total Bill       ₹2,450

[Why is BOGO performing well?]
[Show daily trend]
[Compare with last month]
```

Do not force charts for every response.

## 23. Composer

Desktop/mobile:
- Multi-line input
- Enter = send
- Shift+Enter = newline on desktop
- Disabled when empty
- Above mobile safe area
- No voice/file/image/model controls

```text
📎  Ask a follow-up question...                    ➤
```

## 24. Role-Based Access

Owner can ask about:
- sales
- bills
- products
- customers
- offers
- reports
- business patterns
- recommendations

Waiter can access permitted:
- product information
- billing assistance
- permitted customer/bill assistance
- basic operational questions

Waiter must not receive owner-only financial analytics or sensitive configuration.

## 25. Context-Aware Entry

Home → Today business context.
Reports → current report period/filter context.
Offers → current offer context.
Customer → selected customer context if authorized.

Never broaden context beyond authorization.

## 26. AI Response Contract

```text
AIResponse
├── id
├── answer
├── responseType
│   ├── TEXT
│   ├── CHART
│   ├── TABLE
│   └── MIXED
├── visualization
│   ├── type
│   ├── title
│   ├── dimensions
│   ├── metrics
│   └── data
├── evidence
├── filters
├── period
├── validationState
└── suggestedFollowUps
```

Frontend renders approved components from this structured response. Never allow arbitrary generated production HTML/CSS.

## 27. Trust / Guardrails

Never invent:
- numbers
- products
- customers
- sales
- dates
- offer performance
- reasons
- recommendations presented as facts

Use a governed business/semantic data layer.

Example:
```text
Observed:
Afternoon bills were 35% lower.

Interpretation:
This appears to be the main contributor.

Recommendation:
Consider testing an afternoon offer.
```

If evidence is insufficient:
“I don't have enough data to determine the reason reliably.”

## 28. Loading / Empty / Error / Offline

Loading:
- restrained skeleton
- no giant spinner

Error:
```text
Something went wrong while analyzing your business.
Your data is safe.
[ Try Again ]
```

Offline:
```text
Offline
Some AI analysis may be unavailable until
the connection is restored.
```

Do not falsely claim fresh AI analysis while unavailable.

## 29. Typography

Font:
`Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Recommended:
- App/Page title: 24–28px / 700
- AI title: 22–26px / 700
- Section: 16–18px / 600–700
- Body: 14–16px / 400–500
- Secondary: 12–14px / 400
- Metric: 20–28px / 700
- Chart labels: 11–13px
- Buttons: 14px / 600
- Navigation: 14–15px
- Mobile AI header: 16–18px / 600–700

Use responsive clamp() where appropriate. No decorative typography.

## 30. Colors

Primary:
- #4F46F5
- #3730A3
- #2563EB

Text:
- #111827
- #4B5563
- #6B7280

Surface:
- #F7F9FC
- #FFFFFF
- #E5E7EB

Semantic:
- #16A34A
- #F59E0B
- #EF4444
- #2563EB

Soft backgrounds:
- #F3F1FF
- #EFF6FF
- #ECFDF5
- #FFF7ED
- #FFF1F2

Optional CTA gradient:
#4F46F5 → #6366F1

Use gradients sparingly. Do not introduce random colors.

## 31. Icons

Use ONLY:
**Material Symbols Outlined**

Recommended mapping:
- AI → auto_awesome
- Home → home
- Billing → point_of_sale / receipt_long
- Products → inventory_2
- Offers → sell / local_offer
- Customers → groups
- Reports → bar_chart
- Settings → settings
- Help → help
- New Chat → add
- Back → arrow_back
- More → more_vert
- Send → send
- Attachment → attach_file
- Search → search
- Calendar → calendar_month
- Filter → tune
- Attention → warning
- Held Bills → pause_circle
- Unavailable → block
- Trend → trending_up
- Insight → lightbulb

Rules:
- No mixed icon libraries.
- No emoji as production UI icons.
- Consistent weight.
- 20–24px standard icons.
- AI icon 24–28px.
- Touch targets ~44px minimum.

## 32. Spacing

4px base:
`4, 8, 12, 16, 20, 24, 32, 40, 48, 64`

Mobile horizontal padding: 16px.
Tablet: 20–24px.
Desktop: 24–32px.

Avoid excessive whitespace.

## 33. Radius / Elevation

- Small controls: 8px
- Inputs/buttons: 10–12px
- Cards: 12–16px
- Large surfaces: 16px
- Mobile sheets: 20px top corners

Prefer borders and subtle shadows.
Avoid heavy shadows, neumorphism, glassmorphism, excessive blur.

## 34. Viewport Requirements

Must work correctly on:
- 320px
- 360px
- 375px
- 390px
- 412px
- 430px
- tablet portrait
- tablet landscape
- 1024px
- 1280px
- 1440px
- 1920px
- 2560px
- 4K

No page-level horizontal scroll.
Long content scrolls only inside its owning region.
Respect mobile safe areas, keyboard, browser chrome, and dynamic viewport height.
Composer must remain usable with keyboard open.
Do not create a tiny fixed-width application on 4K.

## 35. Accessibility

- WCAG-conscious contrast.
- Keyboard navigation.
- Visible focus states.
- ~44px minimum touch targets.
- Semantic buttons and labels.
- Accessible chart summaries.
- Do not communicate meaning by color alone.
- Tooltips for unfamiliar icon-only controls.
- Screen-reader-friendly names.

## 36. Interaction States

Define:
- Default
- Hover
- Focus
- Pressed
- Disabled
- Loading
- Error where relevant

Do not depend on hover for mobile.

## 37. Explicitly Excluded

Do not add:
- inventory dashboard
- stock analytics
- profit dashboard
- shift management
- attendance
- online ordering
- restaurant tables
- KOT
- expenses
- arbitrary AI agents
- technical AI settings
- token counters
- prompt editor
- model selector
- voice assistant
- file upload
- image upload
- permanent AI KPI dashboard
- unnecessary filters/tabs
- duplicate customer search
- duplicate billing actions
- report-builder controls
- unnecessary animation

## 38. Microcopy

Use simple business language.

Prefer:
“Why are sales lower today?”

Not:
“Analyze sales variance using advanced business intelligence.”

Prefer:
“Based on today’s completed bills.”

Not:
“Source provenance: transactional dataset.”

Prefer:
“I don’t have enough data to determine that.”

Not:
“Confidence threshold not satisfied.”

AI should sound like a useful business copilot, not a technical chatbot.

## 39. Component Architecture

Create reusable components:

```text
AIAssistantHeader
ConversationHistory
ConversationItem
ChatMessage
AIResponse
SuggestedQuestion
FollowUpChip
ResponseEvidence
ChartResponse
TableResponse
InsightBlock
RecommendationBlock
BusinessContext
BusinessMetric
AttentionItem
QuickLink
AIComposer
LoadingState
EmptyState
ErrorState
OfflineState
```

Use responsive variants instead of unrelated desktop/mobile implementations.

Define reusable design tokens for color, typography, spacing, radius, elevation, icons, and states.

## 40. Figma Page / Frame Organization

```text
AI Assistant
│
├── Foundations
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Radius
│   ├── Shadows
│   └── Icons
│
├── Components
│   ├── Chat Messages
│   ├── Suggested Questions
│   ├── Follow-up Chips
│   ├── Composer
│   ├── Chart Response
│   ├── Table Response
│   ├── Evidence
│   ├── Business Context
│   └── Conversation History
│
├── Desktop
│   ├── Initial State
│   ├── Text Response
│   ├── Chart Response
│   ├── Table Response
│   ├── Mixed Response
│   └── Business Context
│
├── Tablet
│   ├── Initial State
│   ├── Conversation
│   ├── Context Sheet
│   └── History Sheet
│
└── Mobile
    ├── Initial State
    ├── Chart Conversation
    ├── Table Conversation
    ├── Donut Conversation
    ├── Conversation History
    └── Business Context Sheet
```

## 41. Final Validation

Before completing the design, verify:

Architecture:
- Desktop has navigation + AI conversation + Business Context.
- Tablet is intentionally adapted.
- Mobile is chat-first.
- AI is not another dashboard.
- Home/Reports/Billing responsibilities remain distinct.

Chat:
- New Chat starts a clean conversation.
- Previous chats remain.
- Follow-ups retain context.
- Composer is accessible.
- Empty input cannot submit.

AI:
- TEXT, CHART, TABLE, MIXED supported.
- Visualization chosen from question/data.
- Explicit graph request produces a graph when reliable data exists.
- Ambiguous questions do not force a graph.
- Evidence is visible.
- Recommendations are distinct from observations.

Responsive:
- 320–430px phone widths verified.
- Tablet portrait/landscape verified.
- 1024–4K verified.
- No page-level horizontal scrolling.
- Long content scrolls only in its owning region.
- Keyboard does not hide mobile composer.

Visual:
- Inter.
- Material Symbols Outlined.
- Frozen BizCopilot colors.
- Consistent spacing/radius/elevation.
- No excessive gradients.
- No mixed icon libraries.
- No unnecessary decoration.

Scope:
- No inventory features.
- No profit analytics.
- No shift/attendance.
- No online ordering/KOT/tables.
- No technical AI controls.
- No voice/file/image upload.
- No unauthorized Waiter data.

## 42. Final Principle

The AI Assistant should feel like:

“Ask your business a question, understand the answer, see the evidence, and decide what to do next.”

It should NOT feel like:

“Open another dashboard and inspect more cards.”

Prioritize clarity, trust, speed, contextual intelligence, and responsive usability above visual complexity.

This is the frozen master design for the BizCopilot AI Assistant.
