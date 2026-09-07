# Settings.md

> **BizCopilot V1 – Settings Specification**
>
> **Status:** Frozen (V1)

---

# 1. Purpose

Settings is the central configuration module for BizCopilot.

It controls platform behavior, business preferences, runtime features and user experience.

It never contains business logic.

---

# 2. Responsibilities

Owns:

- Business configuration
- Application preferences
- Platform configuration
- Feature flags
- User preferences

Never owns:

- Billing
- Product
- Customer
- Offer
- Reports
- Business calculations

---

# 3. Settings Categories

- Business Settings
- Application Settings
- Platform Settings
- User Preferences

---

# 4. Business Settings

## Business Profile

- Business Name
- Business Logo
- Business Address
- Phone
- Email
- Currency
- Timezone

## Tax

- GST Enabled
- GST Number
- GST Percentage
- Inclusive / Exclusive

## Payment

- Cash Enabled
- UPI Enabled
- Merchant Name
- Merchant UPI ID
- QR Enabled
- Card Enabled
- Mixed Enabled

## Customer

- Customer Capture (Never / Optional / Always)
- Quick Customer Enabled
- Require Phone Number

## Employee Authentication (Local)

- Manage Employees
- Setup Local PIN (4-digit or 6-digit configurable)
- Setup Password (optional for Owner)
- Manage Roles

## Product

- Barcode Enabled
- Camera Scanner Enabled
- Product Images Enabled

## Printer

- Default Printer
- Paper Width
- Print Logo
- Header
- Footer
- Auto Print
- Copies

## Reports

- Daily Report Enabled
- Weekly Report Enabled
- Monthly Report Enabled
- Report Time
- WhatsApp Number
- Email (Future)

---

# 5. Application Settings

- Theme (Accent Color, Light/Dark Mode, Font Size - See `specifications/UI_UX_Design_System.md`)
- Language
- Date Format
- Time Format
- Currency Format
- Auto Logout
- Lock Screen

---

# 6. Platform Settings

Displays configuration for:

- Synchronization
- Backup
- AI
- Internet Status
- License Status
- Device ID
- Application Version

Runtime executes these capabilities; Settings only stores/displays configuration.

---

# 7. User Preferences

Each user may configure:

- Dashboard Widgets
- Default Screen
- Favorite Actions
- Notification Sounds
- Grid Size
- Recent Products

---

# 8. Feature Management

Feature flags determine available capabilities.

Examples:

- Billing
- Reports
- Backup
- AI
- Printer
- Camera
- Barcode

The Application Contract validates feature availability before executing operations.

---

# 9. License Features

Settings displays license-controlled capabilities.

Examples:

- Backup
- AI
- Camera
- Barcode
- Printer

These values are controlled by the License Framework and are read-only to users.

---

# 10. Configuration Provider

All modules read configuration through a Configuration Provider.

Modules must never access settings storage directly.

Consumers include:

- Billing
- Product
- Offer
- Report
- Backup
- Runtime
- Payment
- Printing

---

# 11. Business Rules

- Configuration changes affect future operations only.
- Historical bills and reports never change.
- Changing GST affects only future bills.
- Changing UPI settings affects future QR generation.
- Feature changes immediately affect UI availability.
- **Offline Master Data:** If the Owner changes master data (Settings, Taxes, Products) while offline, changes are saved locally immediately but a warning is shown. Employee devices receive changes during the next synchronization.

---

# 12. Events

Settings publishes typed events. Each event is consumed only by the modules that require it.
The generic `SettingsChanged` event is not used.

---

## TaxSettingsChanged

Triggered when GST enabled/disabled, GST number, tax percentage, or inclusive/exclusive mode changes.

Consumed by:
- Billing

---

## PaymentSettingsChanged

Triggered when cash, UPI, card, or mixed payment configuration changes, or when merchant UPI details are updated.

Consumed by:
- Billing
- Payment Infrastructure

---

## PrinterSettingsChanged

Triggered when printer, paper width, print logo, header, footer, auto-print, or copies configuration changes.

Consumed by:
- Printing
- Platform Integration Layer

---

## CustomerCaptureSettingsChanged

Triggered when Customer Capture Policy mode changes (`NEVER` / `OPTIONAL`).

Consumed by:
- Billing
- Application Contract

---

## BusinessProfileChanged

Triggered when business name, logo, address, phone, email, currency, or timezone changes.

Consumed by:
- Printing
- Report
- AI Context Builder

---

## FeatureEnabled

Triggered when a feature flag is enabled.

Consumed by:
- Feature Manager
- Relevant modules (e.g., Billing if UPI is enabled)

---

## FeatureDisabled

Triggered when a feature flag is disabled.

Consumed by:
- Feature Manager
- Relevant modules

---

> **Rule:** Modules must never subscribe to all settings events indiscriminately.
> Each module subscribes only to the typed events it requires.

---

# 13. Dependencies

Depends only on Platform abstractions.

Every business module consumes configuration but Settings never invokes business modules.

---

# 14. Extension Points

Future:

- Multi-Branch Defaults
- Employee Preferences
- Theme Packs
- Notification Channels
- Payment Gateway Configuration

---

# 15. AI Coding Rules

- Treat Settings as configuration only.
- Never place business logic in Settings.
- Read configuration through the Configuration Provider.
- Never duplicate configuration across modules.
