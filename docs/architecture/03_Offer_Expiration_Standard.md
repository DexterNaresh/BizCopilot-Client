# Architecture Update — Offer Expiration Standard (Frozen Decision)

## Objective
Establish the rules for evaluating Offer expiration in the offline-first BizCopilot platform without relying on database modifications or scheduled jobs.
This decision is considered **Architecture Freeze**.

---

## 1. Expiration as Runtime State
Do NOT introduce or store an `EXPIRED` status in the database.

The Offer `status` field represents an **administrative lifecycle only**.
Allowed status values:
- `ACTIVE`
- `INACTIVE`
- `ARCHIVED`

Offer expiration must be determined dynamically at runtime.

## 2. Eligibility Rules
An offer is eligible for application only when all of the following conditions are met:
1. `status` == `ACTIVE`
2. `current_date` >= `valid_from` (if specified)
3. `current_date` <= `valid_until` (if specified)

If the current date is outside the validity window, the offer is simply considered "not applicable". The database `status` remains unchanged.

## 3. Automation and Future Scheduling
No scheduled job should ever modify the status when an offer reaches its end date.
The future Scheduling module (V2) may automate enabling or disabling offers (e.g., changing `ACTIVE` ↔ `INACTIVE`), but it must not introduce or persist an `EXPIRED` status. Expiration is a derived runtime condition, not a persisted business state.

## 4. Implementation Requirements
- Remove any references to an `EXPIRED` status from code, enums, or contracts.
- Ensure all offer eligibility checks evaluate `status`, `valid_from`, and `valid_until`.
- Ensure the database schema stores `valid_from` and `valid_until` as nullable timestamps.
