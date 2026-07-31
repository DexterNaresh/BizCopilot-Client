# Synchronization.md

> **BizCopilot V1 – Synchronization Specification**
>
> **Status:** Frozen (V1)

---

# 1. Purpose

The Synchronization module manages the eventual consistency of master data and the background upload of operational data between local devices and the optional cloud backend.

Because BizCopilot is offline-first, synchronization operates asynchronously and never blocks daily operations (like Billing).

---

# 2. Multi-Device Identity Strategy

To support multiple devices synchronizing with a central cloud, identity boundaries are strictly enforced. Every bill stores the following:

- **BusinessId:** The unique identifier for the business entity.
- **DeviceId:** The physical registered device (e.g., `TB01`, `PC01`). Device owns bill numbering.
- **UserId:** The employee generating the bill. Owns accountability and permissions.
- **SessionId:** The current login session. Owns authentication.
- **BillId:** The unique immutable client-generated identifier (UUID). Owns synchronization.

---

# 3. Master Data Synchronization

**Master Data** includes: Products, Prices, Offers, Taxes, and Settings.

## Conflict Prevention (V1 Rule)
- Only the **Owner** (one Owner role in V1) may modify master data.
- Master data is modified on the client first and saved locally immediately.
- If the Owner makes a change while offline, they receive a warning:
  > "This change has not yet been synchronized. Other devices will continue using the previous value until synchronization."
- The Owner's Dashboard displays a "Pending Changes" indicator.
- Synchronization sends updates to the Cloud. Employee devices receive changes during their next synchronization.

**Architecture Principle:** Prevent conflicts through ownership rather than resolving them through complex merge algorithms. Master data is eventually consistent.

---

# 4. Operational Data Synchronization

**Operational Data** includes: Completed Bills, Voided Bills, and Customer Records.

- **Client Generated UUIDs:** Operational data uses client-generated UUIDs (like `BillId`) as primary keys for synchronization.
- **Bill Identity vs. Numbering:**
  - `BillId` is the synchronization identifier.
  - `BillNumber` is display only and device-specific (e.g., `TB01-000001`). This prevents duplicate invoice numbers when multiple devices are offline.
- Operational data flows primarily **Client → Cloud**. The Cloud never modifies operational client data directly.

---

# 5. AI Coding Rules

- Do not implement complex conflict resolution algorithms (like vector clocks or OT) for master data. Rely on Owner isolation and eventual consistency.
- Ensure the `BillId` (UUID) is always used as the sync key, never the `BillNumber`.
- Ensure the UI clearly communicates offline master data changes as "Pending Sync".
