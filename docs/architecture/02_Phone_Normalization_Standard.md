# Architecture Update — Phone Number Normalization (Frozen Decision)

## Objective
Establish the standard phone number processing and normalization rules for the BizCopilot backend to ensure consistent identity lookup and data hygiene.
This decision is considered **Architecture Freeze** and must be followed by all current and future implementations.

---

## 1. Phone Number Role
Phone numbers are considered business identifiers. They must be normalized before validation, duplicate detection, and persistence.

## 2. Normalization Rules
When a phone number is provided to the backend, the domain must apply the following transformations in order:
1. Trim whitespace.
2. Remove spaces, dashes, and brackets.
3. Remove the `+91` country code if present.
4. Remove a leading `91` if the resulting number represents an Indian mobile number (i.e. length is exactly 10 digits after removing it).

## 3. Storage and Validation
1. **Persistence**: Store only the normalized 10-digit mobile number in the database.
2. **Validation**: Validate that the normalized number contains exactly 10 digits (using regex `^\d{10}$`).
3. **Walk-In Reservation**: The value `"1"` is reserved exclusively for the system-seeded Walk-In Customer. It cannot be assigned to any normal customer.
4. **Operations**: All customer searches, duplicate detection, and persistence must use the normalized value.

The UI may display or accept formatted numbers (e.g. `+91 98765-43210`), but the backend always handles and stores the canonical normalized representation (`9876543210`).
