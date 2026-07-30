# 04_Authentication.md

> **BizCopilot Platform Authentication Specification (V1)**
>
> Defines the deployment modes, local user management, and authentication boundaries for BizCopilot.
>
> **Status:** Frozen (V1)

---

# 1. Purpose

The Authentication module is a cross-cutting platform service that defines identity verification and login behavior across different deployment editions.

Its core tenet is that the system must remain fully operational without internet access.

---

# 2. Deployment Modes

BizCopilot supports three deployment editions. Local authentication behavior is identical across all modes.

## Mode 1: Local Edition

**Characteristics:**
- Single Device
- **Multiple Local Users** (Owner + Staff)
- No Cloud Backend
- No Internet Dependency
- SQLite only
- Local Authentication
- Device-based Bill Numbering
- Offline First

**Authentication Behavior:**
- All users (Owner and Staff) are stored locally in SQLite.
- Credentials are securely hashed.
- No internet is required for login.

---

## Mode 2: Cloud Backup Edition

Everything in Local Edition plus:
- Multiple Devices supported
- Cloud Backup active
- Multi-device Synchronization
- Device Registration

**Authentication Behavior:**
- Authentication remains local on each device.
- The Cloud exists strictly for synchronization, backup, and license validation.
- An internet connection is never required for daily login.

---

## Mode 3: AI Edition

Everything in Cloud Backup Edition plus:
- AI Services enabled
- Cloud Intelligence enabled
- Business Chat enabled
- Forecasting and Intelligent Business Insights

**Authentication Behavior:**
- Local authentication still applies.
- Cloud identity (OAuth/JWT) is used to authorize AI Gateway requests.

---

# 3. Local User Management

Local Edition supports **multiple local users** on a **single device**.

Example:
```text
Local Device → Owner, Cashier, Waiter, Manager
```

All users are stored locally in SQLite. No internet is required.

## User Roles

**Owner:**
- Full system access
- Product Management, Pricing, Offers
- Reports, Backup, Settings
- User Management

**Staff (Role-Based):**
- Permissions are defined by the Permission Matrix
- Examples: Billing, View Products, Reprint Bills, Mark Product Unavailable (if permitted)

Permissions remain identical to the existing authorization model defined in `Permission_Matrix.md`. Only the storage location changes — users live in local SQLite.

---

# 4. Local Authentication Strategy

**Users are stored locally.**

To ensure offline-first capability, BizCopilot uses a local authentication approach:

1. **Owner Setup:** The Owner provisions Staff accounts (names, roles, and credentials like a PIN or password) while online or offline.
2. **Local Storage:** These credentials are securely hashed and stored in the local SQLite database.
3. **Daily Login:** When a user attempts to log in, the application hashes the input and compares it against the local SQLite record.
4. **Zero-Internet Dependency:** This process requires no internet connection, meaning a business can open, employees can log in, and bills can be generated even during a complete network outage.

---

# 5. Bill Audit

Every completed bill stores:

- BillId
- BillNumber
- DeviceId
- UserId
- SessionId
- CreatedAt

User changes never affect invoice numbering. Bill numbering remains device-based. This provides complete auditability while preserving deterministic numbering.

---

# 6. AI Coding Rules

- Never implement a hard dependency on an external identity provider (like Auth0, Firebase, or Spring Security) for daily client login.
- Always validate credentials against the local repository first.
- Securely hash local credentials (e.g., using bcrypt or Argon2 via Platform Integration).
- Session tokens/JWTs must be generated and validated locally by the client for offline operation.
- Local Edition must support multiple users on a single device — never assume single-user mode.
