# BIZCOPILOT V1 — PIN LOGIN
# FIGMA-LEVEL UI/UX DESIGN & IMPLEMENTATION PROMPT

==================================================
ROLE
==================================================

You are a senior product designer, Figma UI/UX designer,
design-system architect, and frontend UX engineer.

Design and implement the BizCopilot V1 PIN Login experience
at Figma-level precision.

The attached frozen mobile PIN Login image is the PRIMARY
VISUAL SOURCE OF TRUTH.

Do not redesign the visual language.

Do not introduce unrelated authentication patterns.

The Login experience must feel:

- Fast
- Secure
- Simple
- Premium
- Business-focused
- Consistent with BizCopilot Startup and Billing UI

BizCopilot is a fast billing application for small businesses.

The user should be able to authenticate and reach the
business application with minimum interaction.

==================================================
1. FROZEN LOGIN FLOW
==================================================

The Login flow is:

PIN Login
   ↓
Enter 4-digit PIN
   ↓
Authentication
   ↓
Role-based Home

Possible authentication methods:

1. 4-digit PIN
2. Device fingerprint / biometric authentication

PIN is the PRIMARY login method.

Fingerprint is an optional quick-login method when the
device supports it and the user has enabled it.

==================================================
2. FROZEN MOBILE VISUAL STRUCTURE
==================================================

The frozen reference contains the following hierarchy:

┌──────────────────────────────────────────────┐
│ Status Bar                                    │
│                                              │
│ 🔐 BizCopilot                         ? Help │
│                                              │
│                 🔒                           │
│                                              │
│             Welcome back!                    │
│                                              │
│      Enter your PIN to access BizCopilot.    │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │              Enter PIN                 │  │
│  │                                        │  │
│  │   Use your 4-digit PIN to login and   │  │
│  │   continue to your business.          │  │
│  │                                        │  │
│  │      ●      ●      ●      ●           │  │
│  │                                        │  │
│  │   ┌──────┬──────┬──────┐              │  │
│  │   │  1   │  2   │  3   │              │  │
│  │   │      │ ABC  │ DEF  │              │  │
│  │   ├──────┼──────┼──────┤              │  │
│  │   │  4   │  5   │  6   │              │  │
│  │   │ GHI  │ JKL  │ MNO  │              │  │
│  │   ├──────┼──────┼──────┤              │  │
│  │   │  7   │  8   │  9   │              │  │
│  │   │ PQRS │ TUV  │ WXYZ │              │  │
│  │   ├──────┼──────┼──────┤              │  │
│  │   │  ⌫   │  0   │Clear │              │  │
│  │   └──────┴──────┴──────┘              │  │
│  │                                        │  │
│  │  ────────────────────────────────────  │  │
│  │                                        │  │
│  │  ◉  Use Fingerprint                 >  │  │
│  │     Login quickly using your device   │  │
│  │     fingerprint.                      │  │
│  └────────────────────────────────────────┘  │
│                                              │
│       🛡 Your data is 100% secure and       │
│          private.                            │
│                                              │
└──────────────────────────────────────────────┘

This hierarchy must remain intact.

==================================================
3. LOGIN HEADER
==================================================

Desktop / Tablet / Mobile must maintain BizCopilot branding.

Structure:

[BizCopilot Logo/Icon]  BizCopilot
                                      [?] Help

The header is NOT part of the authenticated application
navigation.

Do NOT show:

- Dashboard
- Billing
- Products
- Customers
- Reports
- Offers
- Settings
- More
- Bottom Navigation

The user has not authenticated yet.

==================================================
4. BRANDING
==================================================

Use the frozen BizCopilot brand identity.

Brand:

BizCopilot

Primary brand color:

#5B3BEB

The logo/icon should use the same visual language as
the Startup and Billing screens.

Do not invent a different logo style.

==================================================
5. HERO / SECURITY ILLUSTRATION
==================================================

Place a prominent lock/security illustration above
"Welcome back!".

The frozen reference uses:

- Purple lock icon
- Soft circular lavender/purple background
- Small subtle decorative purple particles
- Centered composition

The illustration should communicate:

SECURE LOGIN

without becoming visually heavy.

Do not use a generic stock illustration.

Prefer a clean vector/icon-based design.

==================================================
6. WELCOME SECTION
==================================================

Main heading:

Welcome back!

Supporting text:

Enter your PIN to access BizCopilot.

Typography:

Main heading:
28–34px
Font weight: 700–800

Supporting text:
16–18px
Font weight: 400–500

The heading must be visually dominant.

The supporting text should be secondary.

Maintain generous vertical spacing.

==================================================
7. LOGIN CARD
==================================================

The PIN interaction sits inside a large white rounded card.

Card:

Background:
#FFFFFF

Border:
1px solid subtle neutral border

Radius:
22–28px

Shadow:
Very subtle

The card should feel:

- Premium
- Clean
- Secure
- Spacious

Do NOT make it look like a generic banking login page.

==================================================
8. CARD HEADER
==================================================

Inside the card:

Enter PIN

Supporting text:

Use your 4-digit PIN to login and
continue to your business.

Typography:

Enter PIN:
24–28px
700–800

Supporting text:
15–17px
400–500

Center align this section.

==================================================
9. PIN INPUT
==================================================

The user enters exactly 4 digits.

Display four individual PIN boxes.

Example:

┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│  ●   │ │  ●   │ │  ○   │ │  ○   │
└──────┘ └──────┘ └──────┘ └──────┘

When a digit is entered:

Filled state:
Purple dot

Empty state:
Empty/neutral state

Do NOT display actual PIN digits.

PIN is always visually masked.

==================================================
10. PIN STATES
==================================================

Support:

EMPTY

○  ○  ○  ○

ONE DIGIT

●  ○  ○  ○

TWO DIGITS

●  ●  ○  ○

THREE DIGITS

●  ●  ●  ○

FOUR DIGITS

●  ●  ●  ●

ERROR

Display a subtle error state without destroying
the layout.

Example:

Incorrect PIN.
Please try again.

Do not show technical authentication errors.

==================================================
11. NUMERIC KEYPAD
==================================================

Use a 3-column keypad.

Structure:

┌────────┬────────┬────────┐
│   1    │   2    │   3    │
│        │  ABC   │  DEF   │
├────────┼────────┼────────┤
│   4    │   5    │   6    │
│  GHI   │  JKL   │  MNO   │
├────────┼────────┼────────┤
│   7    │   8    │   9    │
│ PQRS   │  TUV   │ WXYZ   │
├────────┼────────┼────────┤
│   ⌫    │   0    │ Clear  │
└────────┴────────┴────────┘

The alphabet labels are part of the frozen mobile visual
language and should remain unless the platform/device
requires otherwise.

==================================================
12. KEYPAD DESIGN
==================================================

Each key:

- White / very light surface
- Subtle purple-neutral border
- Rounded corners
- Large numeric typography
- Comfortable touch target
- Clear pressed state

Numeric number:

24–32px
700

Alphabet label:

11–13px
600

Clear:

Purple
600–700

Backspace:

Purple outline icon

==================================================
13. KEYPAD INTERACTION
==================================================

Tapping a number:

1. Add digit
2. Update PIN indicator
3. Automatically advance
4. After 4 digits, authenticate

Do not require the user to press a separate
"Login" button.

This keeps the login fast.

Flow:

Digit 1
 ↓
Digit 2
 ↓
Digit 3
 ↓
Digit 4
 ↓
Authenticate

==================================================
14. BACKSPACE
==================================================

Backspace removes the most recently entered digit.

Example:

● ● ● ●

Backspace

↓

● ● ● ○

Backspace should remain available.

==================================================
15. CLEAR
==================================================

Clear removes the entire PIN.

Example:

● ● ● ●

Clear

↓

○ ○ ○ ○

Clear should be visually secondary to numeric keys.

==================================================
16. AUTOMATIC AUTHENTICATION
==================================================

When the fourth digit is entered:

PIN
 ↓
Validate
 ↓
Authenticate

Do NOT require:

[ Login ]

The authentication should happen automatically.

During authentication:

- Disable keypad temporarily
- Show subtle loading indication
- Prevent duplicate authentication
- Preserve visual structure

If successful:

PIN Login
   ↓
Role-based Home

==================================================
17. AUTHENTICATION ERROR
==================================================

If the PIN is incorrect:

Remain on the Login screen.

Show:

Incorrect PIN.
Please try again.

Then:

- Reset PIN indicators
- Keep user on same screen
- Allow immediate retry

Do not navigate away.

Do not show backend/system errors.

==================================================
18. FINGERPRINT LOGIN
==================================================

The frozen reference contains a dedicated biometric
login row.

Structure:

────────────────────────────────────────────

[Fingerprint Icon]

Use Fingerprint

Login quickly using your device fingerprint.

                                      >

────────────────────────────────────────────

This is NOT a primary button.

It is an alternative authentication method.

==================================================
19. FINGERPRINT DESIGN
==================================================

Fingerprint icon:

- Purple
- Inside subtle lavender circular background
- Large enough for touch interaction

Title:

Use Fingerprint

Description:

Login quickly using your device fingerprint.

Chevron:

Purple

The entire row should be tappable.

==================================================
20. FINGERPRINT BEHAVIOR
==================================================

If device supports biometric authentication:

Tap:

Use Fingerprint

↓

Trigger native device biometric authentication.

If successful:

Biometric authentication
       ↓
Role-based Home

If failed:

Remain on PIN Login.

Allow the user to use PIN immediately.

Do NOT block PIN authentication after biometric failure.

==================================================
21. CONDITIONAL BIOMETRIC DISPLAY
==================================================

If fingerprint/biometric authentication is unavailable:

Do not show a disabled-looking fingerprint control.

Prefer hiding the biometric option completely.

If the application has an explicit "biometric not enabled"
state, display a concise message rather than a confusing
disabled control.

==================================================
22. SECURITY REASSURANCE
==================================================

At the bottom of the screen display:

Your data is 100% secure and private.

Use a small shield/security icon.

This is reassurance only.

Do not make it a clickable element.

Do not add legal/privacy policy navigation.

==================================================
23. MOBILE VIEWPORT
==================================================

Breakpoint:

< 600px

Mobile is the PRIMARY frozen visual reference.

Maintain:

- Status bar safe area
- BizCopilot header
- Help
- Lock hero
- Welcome back heading
- Supporting text
- Large PIN card
- 4 PIN boxes
- 3×4 keypad
- Fingerprint row
- Security reassurance
- Bottom safe area

The layout should fit naturally within common
mobile portrait screens.

Avoid unnecessary scrolling.

==================================================
24. MOBILE STRUCTURE
==================================================

MOBILE

┌───────────────────────────────┐
│ Status Bar                    │
├───────────────────────────────┤
│ 🔐 BizCopilot          ? Help │
│                               │
│             🔒                │
│                               │
│       Welcome back!           │
│                               │
│ Enter your PIN to access      │
│ BizCopilot.                   │
│                               │
│ ┌───────────────────────────┐ │
│ │         Enter PIN         │ │
│ │                           │ │
│ │ Use your 4-digit PIN...   │ │
│ │                           │ │
│ │   ●   ●   ○   ○           │ │
│ │                           │ │
│ │  1   2   3                │ │
│ │  4   5   6                │ │
│ │  7   8   9                │ │
│ │  ⌫   0   Clear            │ │
│ │                           │ │
│ │ ────────────────────────  │ │
│ │                           │ │
│ │ Fingerprint          >    │ │
│ └───────────────────────────┘ │
│                               │
│ 🛡 Your data is secure...     │
└───────────────────────────────┘

==================================================
25. TABLET VIEWPORT
==================================================

Breakpoint:

600px – 1023px

Tablet should NOT simply stretch the mobile screen.

Use the same visual system but increase whitespace
and card proportions.

Structure:

┌──────────────────────────────────────────────────┐
│ BizCopilot                                  Help│
│                                                  │
│                    🔒                            │
│                                                  │
│               Welcome back!                      │
│                                                  │
│        Enter your PIN to access BizCopilot.      │
│                                                  │
│             ┌───────────────────────┐            │
│             │       Enter PIN       │            │
│             │                       │            │
│             │      ● ● ○ ○          │            │
│             │                       │            │
│             │   1    2    3         │            │
│             │   4    5    6         │            │
│             │   7    8    9         │            │
│             │   ⌫    0   Clear      │            │
│             │                       │            │
│             │ ───────────────────   │            │
│             │                       │            │
│             │ Use Fingerprint    >  │            │
│             └───────────────────────┘            │
│                                                  │
│          🛡 Your data is secure...               │
└──────────────────────────────────────────────────┘

Rules:

- Center the login experience.
- Do not show application navigation.
- Do not show sidebar.
- Do not show bottom navigation.
- Maintain the same visual hierarchy as Mobile.
- Use a slightly wider card.
- Increase whitespace around the card.

==================================================
26. DESKTOP VIEWPORT
==================================================

Breakpoint:

≥ 1024px

Desktop must feel like a professional POS/business
application authentication screen.

Do NOT simply enlarge the mobile screen.

Use:

- Full viewport
- Centered login experience
- Larger whitespace
- Controlled card width
- Strong visual hierarchy
- BizCopilot branding
- Help option

Structure:

┌──────────────────────────────────────────────────────────────┐
│ BizCopilot                                             Help │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                         🔒                                   │
│                                                              │
│                  Welcome back!                               │
│                                                              │
│          Enter your PIN to access BizCopilot.                │
│                                                              │
│                ┌────────────────────────┐                    │
│                │       Enter PIN        │                    │
│                │                        │                    │
│                │      ● ● ○ ○           │                    │
│                │                        │                    │
│                │   1     2     3        │                    │
│                │   4     5     6        │                    │
│                │   7     8     9        │                    │
│                │   ⌫     0    Clear     │                    │
│                │                        │                    │
│                │ ─────────────────────  │                    │
│                │                        │                    │
│                │ Use Fingerprint     >  │                    │
│                └────────────────────────┘                    │
│                                                              │
│               🛡 Your data is secure...                      │
│                                                              │
└──────────────────────────────────────────────────────────────┘

Desktop card should remain intentionally constrained.

Do not create an oversized authentication card.

==================================================
27. DESKTOP KEYBOARD SUPPORT
==================================================

Desktop must support physical keyboard entry.

Numbers:

0–9

Backspace:

Remove last digit.

Escape:

Clear or cancel the current input where appropriate.

Enter:

If 4 digits are already entered, allow authentication.

Keyboard interaction must behave consistently with
the visual keypad.

==================================================
28. ACCESSIBILITY
==================================================

All controls must have:

- Accessible labels
- Keyboard navigation
- Visible focus states
- Appropriate touch target sizes
- Screen-reader friendly descriptions
- Clear error messages

PIN input must not expose the actual PIN.

Do not rely solely on color to communicate state.

==================================================
29. COLOR SYSTEM
==================================================

Primary:

#5B3BEB

Primary Hover:

#4B2DC7

Primary Light:

rgba(91, 59, 235, 0.08)

Canvas:

#F5F6FC

Surface:

#FFFFFF

Primary Text:

#111827

Secondary Text:

#6B7280

Placeholder:

#9CA3AF

Border:

#EAECEF

Success:

#16A34A

Error:

#DC2626

Error Background:

#FEF2F2

The overall experience should be predominantly:

WHITE
+
VERY LIGHT NEUTRAL
+
BIZCOPILOT PURPLE

Purple should be used as an accent, not flood the entire
screen with purple.

==================================================
30. TYPOGRAPHY
==================================================

Use:

Inter,
system-ui,
-apple-system,
sans-serif

Recommended hierarchy:

BizCopilot:
24–28px / 700

Welcome back:
30–36px / 700–800

Supporting heading:
16–18px / 400–500

Enter PIN:
24–28px / 700

PIN description:
15–17px / 400–500

PIN number:
24–32px / 700

Alphabet labels:
11–13px / 600

Fingerprint title:
16–18px / 600

Fingerprint description:
13–15px / 400

Security message:
13–15px / 400–500

Maintain visual proportions from the frozen reference.

==================================================
31. SPACING SYSTEM
==================================================

Use an 8px-oriented spacing system.

Allowed values:

4px
8px
12px
16px
24px
32px
40px
48px
56px
64px

Avoid random spacing values.

==================================================
32. BORDER RADIUS
==================================================

Design tokens:

Small control:
8–12px

Input:
10–14px

Key:
10–14px

Fingerprint icon:
50% / circular

Login card:
22–28px

Primary interaction surfaces:
12–16px

Maintain consistency with Startup and Billing.

==================================================
33. SHADOWS
==================================================

Use extremely subtle shadows.

Login card:

0 8px 30px rgba(0,0,0,0.05)

Avoid:

- heavy drop shadows
- glowing purple shadows everywhere
- neumorphism
- excessive elevation

The design should feel lightweight.

==================================================
34. HEADER SAFE AREA
==================================================

Mobile must respect:

- Status bar
- top safe area
- bottom home indicator

Do not place interactive elements underneath system
safe areas.

Desktop/Tablet do not require mobile status-bar treatment.

==================================================
35. HELP
==================================================

Help is visible in the header.

Structure:

[ ? ] Help

It should be subtle and secondary.

Possible behavior:

Tap Help
   ↓
Show concise login assistance

Do not create a complex support workflow.

==================================================
36. LOADING STATE
==================================================

During PIN authentication:

- Disable keypad temporarily
- Keep entered PIN visually represented
- Show subtle loading indicator
- Prevent duplicate requests

Do not replace the entire screen with a spinner.

The user should understand that authentication is in progress.

==================================================
37. ERROR STATE
==================================================

Incorrect PIN:

Display concise error message.

Example:

Incorrect PIN.
Please try again.

Visual treatment:

- subtle red/error text
- optional subtle error border on PIN indicators
- do not destroy layout
- do not show backend details

After error:

Allow immediate retry.

==================================================
38. BIOMETRIC ERROR
==================================================

If fingerprint authentication fails:

Remain on the same screen.

Allow PIN login immediately.

Do not trap the user inside biometric authentication.

==================================================
39. SESSION / AUTHENTICATION BOUNDARY
==================================================

Login is responsible for authentication only.

UI must NOT contain:

- authentication algorithms
- PIN hashing
- credential persistence
- database queries
- repository calls
- token generation
- security decisions

Flow:

Login Screen
      ↓
Login Facade
      ↓
Authentication Application Contract
      ↓
Authentication Runtime
      ↓
Authentication Result
      ↓
Role-based Home

==================================================
40. ARCHITECTURE BOUNDARY
==================================================

UI owns:

- Presentation
- PIN input state
- Keypad interaction
- Local visual state
- Loading state
- Error display
- Accessibility
- Responsive layout
- Navigation after authentication result

UI MUST NOT own:

- PIN validation rules that belong to domain/security
- PIN hashing
- credential storage
- SQLite calls
- repository calls
- authentication decisions
- role assignment
- session/token generation

Use the existing Facade/Application/Runtime architecture.

==================================================
41. COMPONENT STRUCTURE
==================================================

Create reusable components:

LoginShell
LoginHeader
BrandLogo
HelpButton
SecurityHero
LoginCard
PinIndicator
PinKeypad
PinKey
FingerprintLogin
SecurityMessage
AuthenticationError

Recommended structure:

LoginShell
 ├── LoginHeader
 ├── SecurityHero
 ├── WelcomeSection
 ├── LoginCard
 │    ├── PinHeader
 │    ├── PinIndicator
 │    ├── PinKeypad
 │    └── FingerprintLogin
 └── SecurityMessage

==================================================
42. FIGMA COMPONENT VARIANTS
==================================================

PIN INDICATOR:

- Empty
- Filled
- Focused
- Error
- Disabled

KEYPAD KEY:

- Default
- Hover
- Pressed
- Disabled

LOGIN:

- Idle
- Entering PIN
- Authenticating
- Authentication Error
- Success

BIOMETRIC:

- Available
- Authenticating
- Success
- Failed
- Unavailable / Hidden

INPUT:

- Empty
- Partial
- Complete
- Error

==================================================
43. RESPONSIVE DESIGN PRINCIPLE
==================================================

Do NOT create three unrelated login screens.

Use:

Same UX
Same components
Same content
Same brand
Same authentication flow

Only adapt:

- Width
- Spacing
- Typography scale
- Card size
- Key dimensions
- Safe-area handling

==================================================
44. NO MAIN APPLICATION NAVIGATION
==================================================

Before authentication, NEVER display:

Home
Billing
Products
Customers
Reports
Offers
Settings
More

The user is not authenticated yet.

The Login screen is a standalone authentication experience.

==================================================
45. PRODUCT PRINCIPLE
==================================================

BizCopilot's product philosophy:

LESS NAVIGATION
+
FAST BILLING
+
MINIMUM INPUT
+
SIMPLE UX

The login experience must follow the same philosophy.

The user should not have to:

- Select a business
- Select a role
- Enter username
- Enter email
- Enter password
- Navigate multiple screens

For V1:

4-digit PIN
   ↓
Authenticate
   ↓
Role-based Home

==================================================
46. DO NOT ADD
==================================================

Do NOT add:

- Username field
- Email field
- Password field
- OTP screen
- Forgot password workflow
- Business selector
- Role selector
- Branch selector
- Dashboard preview
- Marketing banners
- Subscription messaging
- Social login
- Google login
- Apple login
- unnecessary legal text
- unnecessary navigation

Do not change the frozen V1 authentication concept.

==================================================
47. DESIGN TOKENS
==================================================

Create/use centralized theme tokens.

Example:

:root {

  --color-primary: #5B3BEB;
  --color-primary-hover: #4B2DC7;
  --color-primary-light: rgba(91, 59, 235, 0.08);

  --color-bg-canvas: #F5F6FC;
  --color-surface: #FFFFFF;

  --color-text-primary: #111827;
  --color-text-secondary: #6B7280;
  --color-text-placeholder: #9CA3AF;

  --color-border: #EAECEF;

  --color-success: #16A34A;
  --color-error: #DC2626;

  --radius-key: 12px;
  --radius-input: 12px;
  --radius-card: 24px;

  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  --shadow-card:
    0 8px 30px rgba(0,0,0,0.05);
}

Do not scatter arbitrary styling values across components.

==================================================
48. ANIMATION
==================================================

Use subtle animations only.

Allowed:

- PIN dot fill
- Key press feedback
- Card transition
- Authentication loading
- Success transition
- Biometric state transition

Avoid:

- excessive bouncing
- long transitions
- flashy effects
- marketing animations

Target:

FAST + PREMIUM + SECURE

==================================================
49. FIGMA FRAME STRUCTURE
==================================================

Create the following Figma frames:

01 — Login Mobile
02 — Login Tablet
03 — Login Desktop

Create state frames/components for:

04 — Empty PIN
05 — Partial PIN
06 — Complete PIN
07 — Incorrect PIN
08 — Authenticating
09 — Fingerprint Authentication
10 — Authentication Success

==================================================
50. FINAL MOBILE SOURCE OF TRUTH
==================================================

The frozen mobile reference must be matched for:

- Header placement
- BizCopilot branding
- Help placement
- Lock illustration
- Welcome back typography
- Supporting text
- Login card position
- Enter PIN title
- PIN description
- Four PIN indicators
- Numeric keypad
- Alphabet labels
- Backspace
- Clear
- Fingerprint section
- Chevron
- Security reassurance
- Overall spacing
- White/light background
- Purple visual language
- Rounded surfaces
- Safe-area handling

Do not redesign these elements.

==================================================
51. FINAL DESKTOP / TABLET RULE
==================================================

Desktop and Tablet are RESPONSIVE DERIVATIONS of the
frozen Mobile design.

Do not invent different authentication behavior.

Do not introduce different fields.

Do not introduce additional navigation.

Desktop/Tablet should simply provide:

- More breathing room
- Wider controlled card
- Larger surrounding whitespace
- Larger visual composition
- Better use of available screen space

==================================================
52. FINAL AUTHENTICATION FLOW
==================================================

PIN LOGIN
│
├── Enter PIN
│
├── 4 digits entered
│
├── Authenticate
│
│    ├── Success
│    │      ↓
│    │   Role-based Home
│    │
│    └── Failure
│           ↓
│      Incorrect PIN
│           ↓
│        Retry
│
└── Use Fingerprint
       │
       ├── Success
       │      ↓
       │   Role-based Home
       │
       └── Failure
              ↓
          PIN Login

==================================================
53. FINAL IMPLEMENTATION REQUIREMENT
==================================================

The attached frozen mobile reference image is the primary
visual source of truth.

This specification defines:

- Structure
- Components
- Responsive behavior
- States
- Interaction
- Colors
- Typography
- Spacing
- Architecture
- Accessibility
- Figma component strategy

Do not create a generic AI authentication screen.

Do not redesign the UX.

Do not add unnecessary features.

Implement a production-ready BizCopilot V1 PIN Login experience
that is visually consistent with the frozen Startup and Billing
design systems.

The final experience must communicate:

FAST
+
SIMPLE
+
SECURE
+
BUSINESS-READY