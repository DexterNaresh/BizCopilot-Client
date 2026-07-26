# 03_Platform_Integration.md

> **BizCopilot Platform Integration Specification (V1)**
>
> Defines how the client integrates with external devices, operating system services, and optional cloud services.
>
> **Status:** Frozen (V1)

---

# 1. Purpose

The Integration Layer isolates all external dependencies from the Business Engine.

Business modules communicate only through interfaces.

The Integration Layer provides platform-specific implementations.

---

# 2. Design Principles

- No business rules
- Interface-first
- Replaceable adapters
- Cross-platform
- Testable with mocks
- Optional integrations
- Feature Manager controlled

---

# 3. Architecture

Experience

↓

Application Contract

↓

Business Engine

↓

Integration Layer

↓

Platform / Operating System / Cloud

---

# 4. Supported Integrations (V1)

## Printing

Responsibilities

- Thermal printers
- A4 printers
- USB
- Bluetooth (where supported)
- Network printers
- Reprint support

Business Engine requests printing through an interface only.

---

## Barcode

Responsibilities

- USB scanners
- Bluetooth scanners
- Keyboard-wedge scanners
- Barcode validation
- Product lookup trigger

Business modules never communicate with scanner hardware directly.

---

## Local Storage

Responsibilities

- SQLite database location
- Export folder
- Backup folder
- Temporary files
- Log files

Provides a platform-independent abstraction over filesystem APIs.

---

## Cloud API

Responsibilities

- Synchronization
- Backup
- License validation
- AI Chat requests
- Future updates

Cloud communication is initiated by Platform Runtime components, not Business modules.

---

# 5. Integration Contracts

Typical interfaces

- IPrinterService
- IBarcodeService
- ILocalStorageService
- ICloudApiService

Business Engine depends only on these contracts.

---

# 6. Feature Manager Integration

Every integration is evaluated before use.

Examples

- Printer enabled
- Barcode enabled
- Backup enabled
- AI enabled

If disabled, the integration is hidden or unavailable.

---

# 7. Error Handling

Integration failures must:

- Never crash the application
- Never lose committed business data
- Return standardized errors
- Be logged
- Allow retry where appropriate

---

# 8. Platform Independence

The Integration Layer hides platform differences.

Windows (Tauri)

Android (Capacitor)

Future macOS

Future iOS

Future Linux

Business modules remain unchanged.

---

# 9. Future Integrations (Roadmap)

- Camera
- NFC
- Digital signature
- External payment terminals
- Email
- WhatsApp
- SMS
- Cloud file storage
- USB device extensions

These are reference items only and not implemented in V1.

---

# 10. AI Gateway

The client never executes AI models.

Flow

Experience
→ Application Contract
→ AI Gateway
→ Cloud API
→ Spring Boot
→ Business Intelligence
→ AI Engine
→ Response

Internet connection is required.

---

# 11. Security

- Secure communication with cloud
- No business secrets stored in adapters
- Validate server responses
- Respect license and permissions
- Use authenticated requests where required

---

# 12. AI Coding Rules

AI agents must:

- Never place business rules inside adapters.
- Never access hardware directly from Business modules.
- Never bypass Application Contract.
- Never call cloud APIs from the UI.
- Always communicate through integration interfaces.
