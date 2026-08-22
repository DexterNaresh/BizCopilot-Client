# BizCopilot — Responsive UI Design Master Prompt

## Purpose

Use this specification for **every BizCopilot screen and reusable component**.

The goal is to ensure that a screen designed at one viewport behaves as the **same application screen** at every supported resolution and device size.

The UI must be a **fluid, responsive implementation**, not a fixed-size recreation of a screenshot.

---

## 1. Core Responsive Rule — Non-Negotiable

The application must look and behave like the **same screen** regardless of viewport size.

Support:

- 4K monitors
- 2K monitors
- 1920×1080 desktops
- 1440×900 desktops
- 1366×768 laptops
- 13-inch laptops
- tablets in landscape and portrait
- mobile in landscape and portrait

> **Do not design for a physical monitor size. Design for the available CSS viewport and component container.**

A 4K monitor must not simply display an enormous version of the 13-inch layout.

A 13-inch laptop must not display a compressed 4K layout.

The visual hierarchy, functionality, and design language remain the same while dimensions and layout adapt.

---

## 2. No Screenshot-Based Implementation

Never reproduce a mockup by copying exact pixel positions.

Avoid screenshot-specific:

- fixed page widths
- fixed card widths
- fixed image sizes
- fixed panel widths
- fixed modal dimensions
- fixed gaps
- absolute coordinates for normal layout
- device-specific hacks

Prefer:

- CSS Grid
- Flexbox
- fluid widths
- `width: 100%`
- `max-width`
- `min-width` only when semantically necessary
- `min()`
- `max()`
- `clamp()`
- `aspect-ratio`
- container queries
- responsive design tokens
- intrinsic sizing

Absolute positioning is reserved for intentional overlays and anchored controls.

---

## 3. Responsive Does Not Mean "Shrink Everything"

Do not simply scale the entire desktop UI down.

Responsive design must intelligently adapt the layout.

Example:

Desktop:

`Sidebar | Main Content | Right Rail`

Tablet:

`Navigation + Main Content`

Mobile:

`Header + Main Content + Bottom Navigation`

The visual hierarchy remains consistent, while unnecessary desktop structures can collapse, move, or reflow according to the screen specification.

---

## 4. Same Screen, Different Layout Mode

Use responsive layout modes where necessary.

Recommended baseline:

- Mobile: `< 768px`
- Tablet: `768px–1023px`
- Desktop: `>= 1024px`

These are layout modes, not device assumptions.

The UI must also work naturally between these breakpoints.

Do not assume every 768px device is a tablet or every 1024px device is a desktop. The actual available CSS width always matters.

---

## 5. Continuous Browser Resizing

The user may resize the browser continuously.

Example:

`1440 → 1350 → 1280 → 1150 → 1024 → 900 → 768 → 600 → 430`

The layout must transition naturally.

Do not create broken intermediate states between breakpoints.

Use fluid sizing between breakpoints whenever possible.

---

## 6. Width Responsiveness

Every major container must respond to available width.

Prefer:

```css
width: 100%;
max-width: ...;
```

where appropriate.

Avoid fixed page widths such as:

```css
.main-content {
  width: 1200px;
}
```

The maximum width must come from the application's design system, not a single screenshot.

---

## 7. Height Responsiveness

Do not assume every desktop has the same height.

A 1920×1080 monitor and a 1366×768 laptop have different vertical space.

Avoid fixed heights for:

- entire pages
- cards
- tables
- modals
- content containers

unless the height is intentionally part of the component contract.

Prefer content-driven sizing plus `min-height`, `max-height`, and viewport-aware limits where appropriate.

---

## 8. 4K Monitor Behavior

On 4K:

- use additional space intelligently
- keep content readable
- use sensible maximum content widths
- maintain balanced whitespace
- allow more columns where the screen specification permits
- do not make cards or typography excessively large
- do not stretch forms or panels unnecessarily

4K should provide more breathing room, not a different UI.

---

## 9. 13-Inch Laptop Behavior

On a 13-inch laptop:

- reduce unnecessary gaps
- reduce columns where appropriate
- collapse optional side panels
- allow cards to become narrower
- reflow secondary controls
- preserve important controls
- maintain usable typography and touch targets

Do not shrink everything until it becomes unusable.

---

## 10. No Unnecessary Horizontal Scrollbar

The application must not introduce an X-axis scrollbar merely because the viewport is narrower.

Check:

- fixed-width containers
- oversized tables
- oversized cards
- long buttons
- long text
- large images
- fixed sidebars
- modal widths
- accumulated padding
- `min-width`
- negative margins
- absolute positioning
- overflowing icons

Use:

```css
box-sizing: border-box;
```

globally.

Do not use `overflow-x: hidden` as a substitute for fixing the underlying layout.

---

## 11. No Unnecessary Vertical Scrollbar

Do not create a vertical scrollbar because a component was given an arbitrary fixed height.

Scrolling is valid when content genuinely exceeds available space, for example:

- long product lists
- long tables
- long forms
- mobile content
- modal content

Avoid:

- duplicated nested page scrollbars
- a modal causing the underlying page to scroll
- fixed-height whitespace
- unintended scroll containers

---

## 12. Clear Scroll Ownership

Every screen must have an explicit scroll owner.

Normal page:

`Page content → page scroll`

Fixed-header table:

`Table header → fixed`
`Table body → scrollable`
`Pagination → outside body scroll`

Modal:

`Background page → locked`
`Modal content → scrollable only when required`

Never create accidental nested scrolling.

---

## 13. Responsive Grid

Use CSS Grid or equivalent responsive layout.

Column count must adapt to available space and the individual screen specification.

Example:

- Large desktop: 5 columns
- Desktop: 4 columns
- Tablet: 3 columns
- Mobile: 2 or 1 columns depending on the screen

Do not force cards into unusable widths merely to hit a column count.

---

## 14. Card Responsiveness

Cards must resize naturally.

Adapt:

- width
- internal spacing
- image area
- text wrapping
- action placement

Do not stretch cards vertically just to fill a row.

Preserve the screen's approved information hierarchy while dimensions adapt.

---

## 15. Image Responsiveness

Images must resize without distortion.

Use:

```css
width: 100%;
height: auto;
```

or an intentional:

```css
aspect-ratio
object-fit
```

pattern.

Avoid fixed image dimensions that only work at one viewport.

---

## 16. Typography Responsiveness

Use the existing BizCopilot typography system.

Where fluid typography is required, use responsive tokens or `clamp()`.

Maintain:

- hierarchy
- readability
- line height
- contrast
- visual weight

Large screens must not produce unnecessarily huge text.

Small screens must not produce unusably small text.

---

## 17. Long Text

Design for:

- long product names
- long category names
- long customer names
- descriptions
- error messages
- future translated text

Text should wrap naturally.

Do not rely on fixed-width containers.

Use truncation only when explicitly required by the screen specification, and provide access to the complete value when necessary.

---

## 18. Button Responsiveness

Buttons must resize or reflow according to available space.

Desktop:

natural horizontal sizing.

Tablet:

more compact where appropriate.

Mobile:

full-width or stacked where appropriate.

Never allow buttons to:

- overflow
- overlap
- become clipped
- create horizontal scrolling

Maintain minimum touch-friendly dimensions.

---

## 19. Form Responsiveness

Forms must be fluid.

Desktop:

fields use available container width.

Tablet:

fields resize naturally.

Mobile:

single-column where appropriate.

Avoid screenshot-specific widths such as:

```css
width: 400px;
```

Prefer:

```css
width: 100%;
```

inside responsive containers.

---

## 20. Modal Responsiveness

Modals must adapt to viewport width and height.

Desktop:

centered modal.

Tablet:

responsive centered modal.

Mobile:

responsive modal/bottom sheet according to the screen specification.

The modal must never:

- exceed the viewport horizontally
- create horizontal scrolling
- push the underlying page
- create a second page
- cause the background page to scroll

If content exceeds available height, only the modal content scrolls.

---

## 21. Sidebar Responsiveness

Desktop sidebar remains visible according to the approved screen.

As width decreases:

- collapse where specified
- reduce its footprint
- move to tablet/mobile navigation where specified

Never allow sidebar + main content + right rail to exceed the viewport.

Never solve overflow with an X-axis scrollbar.

---

## 22. Right Rail / Contextual Panels

Optional contextual panels must be responsive.

Large desktop:

show when sufficient space exists.

Smaller desktop/tablet:

collapse, reposition, or hide according to the screen specification.

Mobile:

do not force a desktop right rail beside the main content.

---

## 23. Table Responsiveness

Do not simply shrink every table column until text becomes unreadable.

At smaller widths:

- reduce non-essential columns
- restructure information
- use responsive row layouts
- use a mobile-specific table presentation only when required by the screen specification

If horizontal table scrolling is explicitly part of the approved design, it may be used.

Otherwise do not introduce it.

For fixed-header tables:

`Fixed header → Scrollable rows → Pagination`

---

## 24. Pagination Responsiveness

Desktop:

full pagination.

Tablet:

compact pagination.

Mobile:

compact controls.

Pagination must never create horizontal overflow.

---

## 25. Page Size vs Viewport Size

A page-size value does not mean all content must be unnaturally squeezed into the viewport.

Example:

If a screen specifies 12 table rows by default and the viewport is too short:

Do not shrink rows unnaturally.

Instead:

`12 rows requested → available height insufficient → scroll the intended content area`

Apply the same principle to grids, lists, tables, and forms.

---

## 26. Preserve User State During Resize

Resizing or orientation changes must not reset:

- search
- filters
- selected view
- current page
- form data
- selected item
- selected category

Responsive layout changes are not navigation.

---

## 27. Orientation Changes

Support portrait and landscape, especially on tablets and mobile.

When orientation changes:

- reflow naturally
- preserve state
- do not unnecessarily reload the screen

---

## 28. Container Queries

Use container queries when component behavior depends more on its available container width than the viewport width.

Useful for:

- reusable cards
- widgets
- dashboard tiles
- panels
- modal content
- responsive side sections

A reusable component must not assume the entire page width.

---

## 29. Component-Level Responsiveness

A reusable component must work correctly wherever it is placed.

Example:

A Product Card should work in:

- 5-column desktop grid
- 4-column desktop grid
- 3-column tablet grid
- 2-column mobile grid

The component responds to its container, not only to the global viewport.

---

## 30. Shared Design Tokens

Use global BizCopilot tokens for:

- typography
- spacing
- colors
- border radius
- shadows
- breakpoints
- control heights
- icon sizes

Do not create random screen-specific values.

This keeps Product, Category, Billing, Customer, Offers, Reports, and Settings visually consistent.

---

## 31. Icon Responsiveness

Icons must remain visually balanced.

Do not enlarge icons excessively on 4K.

Do not shrink icons below usable sizes on small screens.

Use the same icon family throughout the application.

Icon-only controls require accessible labels and visible focus states.

---

## 32. Touch Responsiveness

Mobile and tablet controls must be touch-friendly.

Ensure:

- adequate touch target
- sufficient spacing
- no overlapping controls
- no tiny icon buttons

If space is insufficient, reflow the UI instead of shrinking controls below usable size.

---

## 33. Safe Areas

For mobile devices with notches/home indicators, respect:

```css
safe-area-inset-top
safe-area-inset-bottom
safe-area-inset-left
safe-area-inset-right
```

Especially for:

- headers
- bottom navigation
- bottom sheets
- sticky action bars
- dialogs
- fixed controls

---

## 34. Browser Zoom

Test approximately:

- 80%
- 100%
- 125%
- 150%
- 200%

Do not rely on physical pixel assumptions.

A layout that works only at 100% zoom is not considered properly responsive.

---

## 35. OS Display Scaling

The application must tolerate Windows/display scaling such as:

- 100%
- 125%
- 150%
- 175%
- 200%

Do not assume CSS pixels equal physical pixels.

---

## 36. 4K + Display Scaling

A 4K monitor at 150% OS scaling must still work correctly.

Never calculate layout from physical monitor size.

Use the browser's actual CSS viewport and component dimensions.

---

## 37. Dynamic Viewport Units

Where viewport height matters, consider modern dynamic viewport units:

```css
dvh
svh
lvh
```

instead of blindly relying on `100vh`.

This is particularly important on mobile browsers.

---

## 38. Fixed / Sticky Elements

Use fixed/sticky positioning only when intentionally required.

Examples:

- navigation
- table header
- mobile bottom navigation
- modal action footer

Ensure fixed elements do not overlap content.

Reserve appropriate layout space.

---

## 39. Absolute Positioning

Absolute positioning should be reserved for:

- overlays
- badges
- anchored controls
- intentional decorative elements

Do not use absolute positioning to construct the normal page layout.

Avoid coordinate-based layouts such as:

```css
left: 245px;
top: 120px;
```

---

## 40. Overflow Rules

Every screen must explicitly consider:

```css
overflow-x
overflow-y
```

The goal is not to hide overflow blindly.

Fix the underlying layout first.

Only then apply intentional overflow behavior to the correct component.

---

## 41. Content Priority

When width becomes limited, preserve:

1. primary actions
2. primary content
3. critical status
4. essential navigation

Reduce/collapse first:

1. decorative content
2. optional contextual panels
3. secondary metadata
4. non-essential controls

Do not hide important information simply to make a desktop layout fit.

---

## 42. Responsive Filters

Desktop:

inline filters where appropriate.

Tablet:

compact filter controls.

Mobile:

filter button opens a popover/sheet according to the screen design.

Filters must never create horizontal overflow.

---

## 43. Responsive Search

Search should use available width.

Desktop:

expand across the toolbar where appropriate.

Tablet:

resize alongside filter/action controls.

Mobile:

use available width.

Never assign a fixed search width simply because it matches a mockup.

---

## 44. Responsive Toolbars

Toolbars must not overflow.

Possible behavior:

Desktop:

`Search | Filters | Actions`

Tablet:

`Search | Filters`
`Secondary actions may move`

Mobile:

`Search`
`Filters / Actions`

Use wrapping or intentional reflow.

---

## 45. Responsive Empty States

Empty-state layouts must resize.

Desktop:

centered in the content area.

Mobile:

natural wrapping.

Illustrations/icons scale appropriately.

Buttons remain accessible.

Do not use a fixed-width empty-state panel.

---

## 46. Responsive Loading States

Skeletons must match the responsive shape of the actual component.

Do not display desktop-sized skeletons on mobile.

Grid skeletons, table skeletons, and card skeletons must use the same responsive layout rules as the real components.

---

## 47. Responsive Error States

Error content must wrap.

Retry buttons must remain visible.

Long error messages must never cause horizontal overflow.

---

## 48. Accessibility

Responsive behavior must not reduce accessibility.

Maintain:

- readable contrast
- keyboard navigation
- visible focus
- semantic HTML
- screen-reader labels
- logical tab order
- touch accessibility

Collapsed controls must remain accessible according to the application's interaction model.

---

## 49. Performance

Responsive behavior should primarily use:

- CSS media queries
- CSS Grid
- Flexbox
- container queries
- responsive design tokens

Avoid expensive JavaScript resize calculations.

Do not continuously re-render large portions of the application on every resize event unless genuinely required.

---

## 50. No Device-Specific Hacks

Never create logic such as:

```text
if 13-inch laptop → special layout
if 4K → special layout
if Dell laptop → special layout
if browser width = 1366 → special CSS
```

Responsive behavior must be based on:

- CSS viewport
- container dimensions
- available space
- layout requirements

not device brand or model.

---

## 51. Visual Regression

After implementing a screen, compare it against the approved mockup.

Verify:

- hierarchy
- spacing
- alignment
- typography
- icon placement
- card proportions
- controls
- colors
- responsive behavior

Do not change the approved desktop design simply to make mobile easier.

Adapt the layout while preserving the same design language.

---

## 52. Required Viewport Testing

Test at minimum:

```text
320 × 568
375 × 667
390 × 844
430 × 932

600 × 800
768 × 1024
834 × 1194
1024 × 768

1280 × 720
1366 × 768
1440 × 900
1536 × 864
1920 × 1080

2560 × 1440
3840 × 2160
```

Also test intermediate widths between every major breakpoint.

---

## 53. Short-Height Testing

Also test:

```text
1280 × 600
1366 × 650
1440 × 700
```

This is especially important for:

- Billing
- Tables
- Dashboards
- Forms
- Modals

Do not assume a tall desktop viewport.

---

## 54. Continuous Resize Test

For every completed screen:

1. Load at 4K.
2. Resize toward 1920.
3. Resize toward 1440.
4. Resize toward 1280.
5. Resize toward 1024.
6. Resize toward tablet.
7. Resize toward mobile.

At every stage verify:

- no overlap
- no clipping
- no accidental scrollbar
- no broken hierarchy
- no lost controls
- no state reset
- no unintended layout jump

---

## 55. 4K vs 13-Inch Acceptance Rule

The following must always be true:

### 4K

The screen uses additional space intelligently.

### 13-inch

The same screen compresses/reflows intelligently.

### Both

They represent the **same screen**.

The user must never feel that the application has become a different product because the monitor changed.

---

## 56. Browser and Application Window Scenarios

Test not only maximized windows.

Also test:

- maximized browser
- half-screen browser
- side-by-side window
- resized browser window
- small laptop window

The UI must adapt to the actual viewport, not assume the browser is maximized.

---

## 57. Responsive State Transitions

When crossing a breakpoint:

- preserve data
- preserve navigation context
- preserve selected filters
- preserve current view where possible
- preserve modal state if safe
- preserve form input
- do not unexpectedly navigate

Responsive layout changes should be presentation changes, not application-state changes.

---

## 58. Design-System Consistency

All responsive versions must retain:

- same BizCopilot purple
- same typography hierarchy
- same iconography
- same button language
- same card language
- same radius system
- same shadows
- same spacing system
- same interaction patterns

Responsive does not mean redesigning every viewport independently.

---

## 59. No Responsive Duplication

Avoid creating:

```text
ProductDesktopComponent
ProductTabletComponent
ProductMobileComponent
```

unless there is a strong architectural reason.

Prefer one component with responsive layout behavior.

Example:

```text
ProductComponent
  ↓
Responsive CSS/Layout
```

---

## 60. Screen-Specific Rules Override Generic Rules

This master prompt defines the **global responsive behavior**.

Each screen may additionally define:

- exact default page size
- exact grid columns
- exact mobile navigation
- exact modal behavior
- exact table behavior
- exact card hierarchy
- exact contextual rail behavior

Those screen-specific rules must be preserved.

Do not replace a frozen screen rule with a generic responsive assumption.

---

## 61. Final Responsive QA Checklist

### Layout

- [ ] No accidental X-axis scrollbar
- [ ] No accidental Y-axis scrollbar
- [ ] No overlapping components
- [ ] No clipped content
- [ ] No screenshot-specific fixed dimensions
- [ ] No broken intermediate widths

### Desktop

- [ ] 13-inch laptop works
- [ ] 1366px works
- [ ] 1440px works
- [ ] 1920px works
- [ ] 4K works

### Tablet

- [ ] Landscape works
- [ ] Portrait works
- [ ] Touch targets work

### Mobile

- [ ] 320px works
- [ ] 375px works
- [ ] 430px works
- [ ] Landscape works
- [ ] Safe areas work

### Interaction

- [ ] Search works
- [ ] Filters work
- [ ] Buttons do not overflow
- [ ] Modals do not overflow
- [ ] Dropdowns stay within viewport
- [ ] Tooltips do not get clipped
- [ ] Keyboard navigation works

### State

- [ ] Resize does not reset state
- [ ] Orientation change does not reset state
- [ ] Search remains intact
- [ ] Filters remain intact
- [ ] Form input remains intact
- [ ] Selected view remains intact

### Display

- [ ] Browser zoom works
- [ ] OS display scaling works
- [ ] 4K works
- [ ] 13-inch works
- [ ] Intermediate widths work
- [ ] Short viewport heights work

---

# 62. Final Design Principle

> **Design once. Adapt everywhere.**

A screen approved on a desktop mockup must remain the same product
experience when rendered on:

- 4K
- 2K
- 1080p
- 13-inch laptop
- tablet
- mobile

The layout may reflow.

The dimensions may change.

The number of columns may change.

Optional panels may collapse.

Controls may move.

But the **visual hierarchy, functionality, component language, and overall screen identity must remain consistent.**

---

# 63. Final Acceptance Criteria

A screen is considered responsive and complete only when:

- It works from 320px mobile through 3840px 4K.
- It works at different viewport heights.
- It works at intermediate widths, not only breakpoint values.
- It works when the browser is manually resized.
- It works in portrait and landscape.
- It does not introduce an unnecessary X-axis scrollbar.
- It does not introduce an unnecessary Y-axis scrollbar.
- It does not rely on screenshot-specific pixel dimensions.
- It does not rely on device-specific hacks.
- Content reflows naturally.
- Typography remains readable.
- Images resize without distortion.
- Cards resize naturally.
- Tables remain usable.
- Modals remain within the viewport.
- Fixed/sticky elements do not overlap content.
- Mobile safe areas are respected.
- Browser zoom does not break the layout.
- OS display scaling does not break the layout.
- User state is preserved during resize.
- The 4K and 13-inch versions are visually the **same screen**, intelligently adapted to their available space.
- The approved mockup remains the visual source of truth.
- Responsive behavior does not change business behavior.

---

# FINAL RULE

**NEVER ask:**

> "What pixel size should this screen be?"

Instead ask:

> "How should this component respond to the available space?"

The implementation must always adapt to the viewport and component
container rather than forcing the viewport to fit the design.
