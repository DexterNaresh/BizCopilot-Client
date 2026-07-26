# Offer.md

> **BizCopilot V1 – Offer (Promotion Engine) Specification**
>
> **Status:** Frozen (V1)

## 1. Purpose

Offer is a reusable Promotion Engine. It evaluates promotional rules and returns an OfferResult. Billing applies the result.

## 2. Responsibilities

Owns:
- Offer definition
- Eligibility evaluation
- Promotion calculation
- Conflict resolution
- Scheduling
- Limits

Never owns:
- Billing
- Tax
- Payment
- Synchronization

## 3. Scope (V1)

Supports:
- Percentage discount
- Fixed discount
- Buy X Get Y
- Product discount
- Category discount
- Quantity discount
- Bill amount discount

Future:
- Coupon codes
- Loyalty
- Customer offers
- AI offers

## 4. Offer Model

- OfferId
- OfferCode
- Name
- Status
- Priority
- Stackable
- Trigger
- Eligibility
- Reward
- Limits
- Schedule
- Scope

## 5. Trigger

- Product Added
- Category Added
- Bill Total Changed
- Billing Started

## 6. Eligibility

Supports:
- Product
- Category
- Quantity
- Bill Amount
- Date
- Day of Week
- Time Window

Examples:
- Bill >= ₹500 → 10%
- Bill >= ₹2500 → 15%

## 7. Reward

- Percentage Discount
- Fixed Discount
- Buy X Get Y
- Free Item
- Product Discount
- Category Discount

## 8. Scope

- Entire Bill
- Product
- Category
- Cheapest Eligible Item
- Highest Priced Eligible Item

## 9. Limits

- Maximum Discount Amount
- Maximum Uses
- Maximum Uses Per Day
- One Per Bill

Example:
10% discount with maximum discount ₹1000.

## 10. Schedule

Contains:
- Date Range
- Days of Week
- Time Window

Example:
Monday–Friday
09:00–18:00
1 July–31 July

## 11. Evaluation Pipeline

Load Active Offers
→ Status
→ Date
→ Day
→ Time
→ Eligibility
→ Reward
→ Limits
→ Conflict Resolution
→ OfferResult

## 12. Conflict Resolution

- Highest Discount (default)
- Highest Priority
- First Match

Stackable offers may be combined.

## 13. OfferResult

Returns:
- OfferCode
- Description
- DiscountAmount
- FreeItems
- AppliedProducts
- Warnings

Billing applies the result.

## 14. Offer Builder

Business rule builder.

Example:

IF Category = Fresh Juice
AND Quantity >= 2
THEN 10% Discount

## 15. Offer Simulation

Owners can test offers before activation.

## 16. Business Rules

- Disabled offers ignored.
- Expired offers ignored.
- Never modify bills directly.
- Billing owns totals.

## 17. Events

- OfferCreated
- OfferUpdated
- OfferActivated
- OfferExpired

## 18. Dependencies

Depends on:
- Product
- Settings
- Platform

Billing consumes OfferResult.

## 19. Extension Points

- Coupons
- Loyalty
- Customer Promotions
- AI Recommendations

## 20. AI Coding Rules

- Return OfferResult only.
- Never modify bills.
- Never calculate tax.
