# Customer.md

> **BizCopilot V1 – Customer Specification**
>
> **Status:** Frozen (V1)

## 1. Purpose

The Customer module manages customer information required to support sales.

It is not a CRM system.

## 2. Responsibilities

Owns:
- Customer master
- Customer profile
- Customer search
- Customer status
- Customer events

Never owns:
- Loyalty
- Credit
- Rewards
- Membership
- Marketing
- Analytics

## 3. Scope (V1)

Included:
- Create Customer
- Update Customer
- Archive Customer
- Search Customer
- Attach Customer to Bill
- Quick Customer

Future:
- Loyalty
- Credit
- Membership
- Wallet
- Addresses
- GST Profile

## 4. Customer Model

- CustomerId
- CustomerCode (immutable)
- Name
- Phone (optional)
- Email (optional)
- Status
- CreatedAt
- UpdatedAt

## 5. Customer Lifecycle

Create → Active → Archived

Rules:
- Never physically delete customers.
- Archived customers cannot be used for new bills.
- Historical bills remain unchanged.

## 6. Walk-in Customer

System customer used when no customer is captured.

Benefits:
- Consistent reporting
- Simplified analytics
- Bills always reference a customer

## 7. Quick Customer

Minimum details:
- Name
- Phone (optional)

Designed for fast billing.

## 8. Search

Supports:
- Customer Code
- Name
- Phone

Phone must be unique if provided.

## 9. Customer Capture Policy

Configured in Settings.

Modes:
- Never
- Optional
- Always (future)

## 10. Business Rules

- Customer is optional.
- Name is required.
- Phone is optional.
- Duplicate names allowed.
- Unique phone if supplied.
- Archived customers cannot be selected.

## 11. Events

- CustomerCreated
- CustomerUpdated
- CustomerArchived

## 12. Dependencies

Referenced by:
- Billing
- Report
- AI (future)

Depends only on Platform abstractions.

## 13. Extension Points

- Loyalty
- Credit
- Membership
- Wallet
- Customer Groups
- Marketing Preferences

## 14. AI Coding Rules

- Keep Customer lightweight.
- Never implement CRM in V1.
- Customer Capture Policy belongs to Settings.
