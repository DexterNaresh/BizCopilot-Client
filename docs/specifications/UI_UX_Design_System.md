# UI_UX_Design_System.md

> **BizCopilot V1 – UI/UX Design System & Theming Specification**
>
> **Status:** Production Specification (V1)

---

# 1. Purpose & Core Principles

This specification defines the visual language, design system tokens, layout architecture, and component standards for **BizCopilot V1**.

All new screens, modals, widgets, and feature views **MUST** adhere to this design specification to maintain visual consistency, ultra-premium aesthetics, and offline responsiveness.

## Core Design Principles

1. **Ultra-Premium Aesthetics:** Clean, high-end SaaS feel inspired by modern enterprise design systems (Linear, Vercel, Stripe). Utilizes subtle glassmorphism, multi-layered elevation shadows, refined gradients, and crisp typography.
2. **Offline-First Rendering:** Zero reliance on external web fonts or CDN resources for critical UI iconography or styling. All icons are loaded from local trusted SVG assets (`src/assets/icons/`) or rendered via inline SVGs.
3. **Zero-Scrollbar Responsive Scaling:** Navigation bars and core shell containers **MUST NOT** spawn unnecessary horizontal or vertical scrollbars. Layouts scale smoothly using CSS `clamp()` and flexbox rules across screens ranging from 13" laptops to 4K monitors.
4. **Token-Driven Architecture:** Hardcoded hex colors, pixel font sizes, and static shadows are strictly prohibited in component styles. All styling must consume variables defined in `_variables.scss`, `_themes.scss`, and `_typography.scss`.

---

# 2. Color Tokens & Theme Architecture

The color system is organized into **Semantic Variables** (`_variables.scss`) and **Theme Variations** (`_themes.scss`).

## 2.1 Theme Palette Variations

BizCopilot supports 4 primary accent color themes that can be dynamically toggled at runtime via `ThemeService`:

| Theme Name | Primary Hex | Hover Hex | Subtle Light BG | Gradient Primary |
| :--- | :--- | :--- | :--- | :--- |
| **Purple (Default)** | `#6366F1` | `#4F46E5` | `rgba(99, 102, 241, 0.1)` | `linear-gradient(135deg, #6366F1, #4F46E5)` |
| **Blue** | `#0284C7` | `#0369A1` | `rgba(2, 132, 199, 0.1)` | `linear-gradient(135deg, #38BDF8, #0284C7)` |
| **Green** | `#10B981` | `#059669` | `rgba(16, 185, 129, 0.1)` | `linear-gradient(135deg, #34D399, #059669)` |
| **Indigo** | `#8B5CF6` | `#7C3AED` | `rgba(139, 92, 246, 0.1)` | `linear-gradient(135deg, #A78BFA, #7C3AED)` |

## 2.2 Surface & Canvas Tokens (Light vs. Dark Mode)

| Token Name | Light Mode | Dark Mode (`.dark`) | Purpose |
| :--- | :--- | :--- | :--- |
| `--color-bg-canvas` | `#F8FAFC` | `#090D16` | Main window background canvas |
| `--color-surface` | `#FFFFFF` | `#111827` | Cards, modals, sidebars, header surfaces |
| `--color-surface-hover` | `#F1F5F9` | `#1F2937` | Hover states for cards and list items, footer bars |
| `--color-input-bg` | `var(--color-surface)` | `#1E293B` | Form inputs, select dropdowns, textareas |
| `--color-input-border` | `var(--color-border)`| `#334155` | Borders for form controls |
| `--glass-bg` | `rgba(255, 255, 255, 0.82)` | `rgba(17, 24, 39, 0.85)` | Glassmorphic floating surfaces |
| `--glass-border` | `1px solid rgba(226, 232, 240, 0.8)` | `1px solid rgba(255, 255, 255, 0.08)` | Translucent borders |
| `--glass-blur` | `blur(12px)` | `blur(16px)` | Backdrop blur filter |

> [!WARNING]
> **Never hardcode `white` or `#FFFFFF` in stylesheets.** It will completely break `.dark` mode visibility. Always use `--color-surface` for container backgrounds and `--color-bg-canvas` for the main application backdrop.

## 2.3 Typography & Text Color Tokens

| Token Name | Light Mode | Dark Mode (`.dark`) | Purpose |
| :--- | :--- | :--- | :--- |
| `--color-text-primary` | `#0F172A` | `#F8FAFC` | Headings, main title labels, primary text |
| `--color-text-secondary` | `#475569` | `#94A3B8` | Body text, subheadings, labels |
| `--color-text-muted` | `#94A3B8` | `#64748B` | Section titles, captions, timestamps |
| `--color-text-disabled` | `#CBD5E1` | `#334155` | Disabled button text and placeholder states |

---

# 3. Typography Scale & Font Scaling

BizCopilot uses the **Inter** font family (`'Inter', system-ui, -apple-system, sans-serif`).

## 3.1 Font Size Scale Tokens

All font sizes must consume one of the 8 standardized font tokens:

| Token Name | Default Size | Equivalent REM | Primary Use Case |
| :--- | :--- | :--- | :--- |
| `--font-xs` | `11px` | `0.6875rem` | Badges, uppercase section titles, captions |
| `--font-sm` | `12px` | `0.75rem` | Secondary labels, button subtext, timestamps |
| `--font-base` | `14px` | `0.875rem` | Main body text, form inputs, table cells |
| `--font-md` | `16px` | `1rem` | Subtitles, primary buttons, card titles |
| `--font-lg` | `20px` | `1.25rem` | Section headers, modal titles |
| `--font-xl` | `24px` | `1.5rem` | Main page title headers |
| `--font-2xl` | `28px` | `1.75rem` | Setup wizard titles, big metric numbers |
| `--font-3xl` | `32px` | `2rem` | Display banners, hero text |

## 3.2 Dynamic Font Size Switcher

The application root `<html>` tag supports 3 font scaling classes managed by `ThemeService`:
- `font-size-small`: Base font size `14px`
- `font-size-medium`: Base font size `16px` (Default)
- `font-size-large`: Base font size `18px`

---

# 4. Elevation, Radii & Shadow Tokens

## 4.1 Multi-Layered Shadows

To maintain visual depth, use the predefined multi-layered elevation shadows:
- `--shadow-sm`: `0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)` (Small buttons, pills)
- `--shadow-card`: `0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 8px 10px -6px rgba(15, 23, 42, 0.03)` (Cards, panels)
- `--shadow-premium`: `0 20px 30px -10px rgba(15, 23, 42, 0.08), 0 10px 15px -5px rgba(15, 23, 42, 0.04)` (Modals, bottom sheets)
- `--shadow-glow`: `0 0 20px var(--color-primary-light)` (Active buttons, glowing active toggles)

## 4.2 Border Radii

- `--radius-key`: `12px` (Standard form inputs, action buttons, select fields)
- `--radius-input`: `12px` (Text areas, search inputs)
- `--radius-card`: `20px` (Main content cards, preference panels)
- `--radius-nav-item`: `10px` (Sidebar links, bottom sheet items)
- `--radius-sheet`: `24px` (Bottom modal sheets, drawer containers)

---

# 5. Iconography Guidelines

## 5.1 Local Trusted SVG System

To guarantee 100% offline functionality, all icons are loaded locally from `src/assets/icons/`:
- `assets/icons/navigation/`: Navigation SVG icons (`home.svg`, `billing.svg`, `products.svg`, `category.svg`, `customers.svg`, `offers.svg`, `reports.svg`, `ai-assistant.svg`, `bills.svg`, `settings.svg`, `backup-sync.svg`, `business-profile.svg`, `help.svg`, `whats-new.svg`, `logout.svg`, `close.svg`, `chevron-right.svg`).
- `assets/icons/common/`: UI utility icons (`add.svg`, `check.svg`, `edit.svg`, `delete.svg`, `search.svg`, `filter_list.svg`, `star.svg`, `grid_view.svg`, `table_rows.svg`, `image.svg`, etc.).

## 5.2 Icon Rendering Patterns

1. **`BizIconComponent` (Recommended for Angular components):**
   ```html
   <biz-icon category="common" name="search" class="search-icon"></biz-icon>
   ```

2. **CSS Masking Pattern (Recommended for CSS pseudo-elements or styled nav items):**
   ```scss
   .nav-icon {
     width: 20px;
     height: 20px;
     background-color: var(--color-text-secondary);
     mask-image: url('assets/icons/navigation/home.svg');
     -webkit-mask-image: url('assets/icons/navigation/home.svg');
     mask-size: contain;
     mask-repeat: no-repeat;
     mask-position: center;
   }
   ```

---

# 6. Component Guidelines for New Screens

When creating new screens, dialogs, or feature components:

## 6.1 Screen Layout Pattern
- Container must use `display: flex; flex-direction: column; height: 100%;`
- Header bar: `padding: 24px 32px; background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-hover) 100%); border-bottom: 1px solid var(--color-border);`
- Consider adding a left accent border to headers: `border-left: 4px solid var(--color-primary);`
- Main content area: `flex: 1; overflow-y: auto; background-color: var(--color-bg-canvas); padding: 32px 24px;`

## 6.2 Responsive Sizing Rules
- Use `clamp()` for vertical padding and spacing inside components to scale seamlessly across 13" laptop screens and 4K displays.
- Example: `padding: clamp(8px, 1.5vh, 16px) clamp(12px, 2vw, 24px);`

## 6.3 Card & Modal Panels
- Card backgrounds: `background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-card); transition: all 0.3s ease;`
- Hover elevation: `&:hover { box-shadow: var(--shadow-premium); transform: translateY(-3px); }`
- **Premium Cards**: Consider adding a top gradient strip via `::before` pseudo element using `var(--gradient-primary)` that fades in on hover for primary feature cards.
- **Form Controls**: Do not manually style inputs; rely on the global `index.scss` reset which applies `--color-input-bg` for dark-mode compatibility.

## 6.4 Shared Action Components
- **Search Bars**: Must use `height: 48px; border-radius: 12px; box-shadow: var(--shadow-sm); border: 1px solid transparent;` and use a `focus-within` border color change to `--color-primary` with a 3px light shadow ring.
- **Filter Chips**: Use `border-radius: 999px; height: 36px; padding: 0 16px; box-shadow: var(--shadow-sm);`. Active states MUST use `background: var(--gradient-primary); box-shadow: 0 4px 12px var(--color-primary-light);`.
- **View Toggles / Button Groups**: Wrapper uses `background-color: var(--color-surface-hover); border-radius: 10px; padding: 3px; gap: 2px;`. Active buttons act as cards `background-color: var(--color-surface); box-shadow: var(--shadow-sm); border-radius: 8px;`.
- **Primary CTA Buttons**: Should use `var(--gradient-primary)` background, `font-weight: 600`, and `box-shadow: 0 4px 12px var(--color-primary-light)` to stand out from regular buttons.

## 6.5 Semantic Highlight Backgrounds
- Do not use hardcoded `rgba(x,x,x, 0.05)` over white backgrounds for selected states. Use the semantic theme background variables:
  - `--color-primary-bg` (Selected items, active states)
  - `--color-success-bg` (Active toggles, positive indicators)
  - `--color-error-bg` (Destructive action highlights)

---

# 7. Verification Checklist for New UI Screens

Before marking any new UI component or screen complete, verify:
- [ ] Compiles cleanly with SCSS tokens (No hardcoded hex colors or raw pixel font sizes).
- [ ] Supports both Light and Dark mode without visual defects.
- [ ] Displays icons cleanly using local trusted SVG assets (`BizIconComponent` or CSS masks).
- [ ] Displays correctly without spawning unwanted horizontal or vertical page scrollbars across screen sizes.
