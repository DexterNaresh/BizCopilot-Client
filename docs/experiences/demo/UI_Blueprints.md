# 14_UI_Blueprints.md

> **BizCopilot V1 – UI Blueprints**
>
> **Status:** Frontend Layout Constitution
>
> Defines the visual structure of every major screen. Business logic is intentionally excluded and must flow through the Application Contract.

---

# 1. UI Philosophy

- Fastest billing wins
- Fewer clicks
- Large touch targets
- Responsive by default
- Keyboard friendly
- Minimal navigation
- Consistent layouts
- Offline status always visible

---

# 2. Global Layout

## Desktop

```
+--------------------------------------------------------------------------------+
| Logo | Search | Global Actions | Sync | Internet | User                        |
+----------------------+---------------------------------------------------------+
| Sidebar              | Main Workspace                                          |
|                      |                                                         |
|                      |                                                         |
+----------------------+-------------------------------------------+-------------+
| Status Bar           | Version | Queue | License | Backup | Time              |
+--------------------------------------------------------------------------------+
```

## Tablet

```
+-----------------------------------------------------------+
| Top Bar                                                   |
+----------+-----------------------------------------------+
| Menu     | Workspace                                     |
+----------+-----------------------------------------------+
| Status Bar                                               |
+-----------------------------------------------------------+
```

## Mobile

```
+-----------------------------+
| Top Bar                     |
+-----------------------------+
| Screen                      |
|                             |
+-----------------------------+
| Bottom Navigation           |
+-----------------------------+
```

---

# 2.1 Startup & Authentication

Startup Screen (Active Session)

```
+-----------------------------------------------------------+
| Logo                                                      |
+-----------------------------------------------------------+
| Current User: Ravi                                        |
|                                                           |
| [ Continue Billing ]                                      |
|                                                           |
| [ Switch User ]                                           |
+-----------------------------------------------------------+
```

Switch User (Fast PIN Entry)

```
+-----------------------------------------------------------+
| Select User                                               |
| [Owner] [Cashier] [Waiter]                                |
+-----------------------------------------------------------+
| Enter PIN: [ _ _ _ _ ]                                    |
+-----------------------------------------------------------+
```

---

# 3. Dashboard

Owner Dashboard

```
+--------------------------------------------------------------------+
| Sales | Bills | Sync | AI Insight                                  |
+--------------------------------------------------------------------+
| Top Products | Offer Performance | Business Health                 |
+--------------------------------------------------------------------+
| Recent Bills                      | Quick Actions                  |
+--------------------------------------------------------------------+
```

Employee Dashboard

```
+--------------------------------------+
| Start Billing                        |
+--------------------------------------+
| Recent Bills                         |
+--------------------------------------+
| Sync Status                          |
+--------------------------------------+
```

---

# 4. Billing Screen

Desktop

```
+--------------------------------------------------------------------------------+
| Search                                                                         |
+-------------------+--------------------------------------+----------------------+
| Categories        | Product Grid                         | Cart                 |
|                   | Large Product Cards                  | Qty                  |
|                   | Favorites / Recent                   | Auto-applied Offers  |
|                   |                                      | Tax                  |
+-------------------+--------------------------------------+----------------------+
| Payment: Cash | Card | UPI | Mixed | Print | Draft | Resume                    |
+--------------------------------------------------------------------------------+
```

*Note: If different offer categories apply, an "Applicable Offers" bottom sheet appears when tapping any Payment option.*

Rules

- Search focused on entry.
- Barcode and camera appear only when enabled.
- UPI QR shown after selecting UPI.
- Offline banner never blocks billing.
- Sync status always visible.

---

# 5. Product Screen

```
+-------------------------------------------------------------+
| Search | Filter | Add Product                              |
+-------------------------------------------------------------+
| Product Grid / Table                                        |
+-------------------------------------------------------------+
| Details Panel                                                |
+-------------------------------------------------------------+
```

---

# 6. Customer Screen

```
+-------------------------------------------------------------+
| Search | Quick Customer | Add Customer                      |
+-------------------------------------------------------------+
| Customer List                                                |
+-------------------------------------------------------------+
| Details                                                      |
+-------------------------------------------------------------+
```

---

# 7. Offer Screen

```
+-------------------------------------------------------------+
| Offer List | Add Offer                                      |
+-------------------------+-----------------------------------+
| Existing Offers         | Rule Builder                      |
|                         | Schedule                          |
|                         | Preview                           |
+-------------------------+-----------------------------------+
```

---

# 8. Reports

```
+-------------------------------------------------------------+
| Filters                                                     |
+-------------------------------------------------------------+
| KPI Cards                                                   |
+-------------------------------------------------------------+
| Charts                                                      |
+-------------------------------------------------------------+
| Report Table | Export                                       |
+-------------------------------------------------------------+
```

---

# 9. Settings

```
+----------------------+--------------------------------------+
| Business             | Selected Settings                    |
| Payment              |                                      |
| Printer              |                                      |
| Reports              |                                      |
| Backup               |                                      |
| AI                   |                                      |
| License              |                                      |
| Appearance           |                                      |
+----------------------+--------------------------------------+
```

---

# 10. Backup

```
+-------------------------------------------------------------+
| Backup Status | Last Sync | Queue                           |
+-------------------------------------------------------------+
| Restore | Export | Diagnostics                              |
+-------------------------------------------------------------+
```

---

# 11. AI Chat

```
+-------------------------------------------------------------+
| Suggested Questions                                         |
+-------------------------------------------------------------+
| Conversation                                                |
|                                                             |
+-------------------------------------------------------------+
| Message Box                                      Send       |
+-------------------------------------------------------------+
```

---

# 12. Common Dialogs

- Payment
- Print
- Confirmation
- Delete
- Backup Restore
- AI Response
- Settings Confirmation

---

# 13. Responsive Rules

- Desktop: 3-column layouts where beneficial.
- Tablet: 2-column layouts.
- Mobile: Single-column with bottom navigation.
- Same functionality across all devices.

---

# 14. Screen States

Every screen must define:

- Loading
- Empty
- Ready
- Offline
- Syncing
- Error
- Permission Denied

---

# 15. Navigation Rules

- Maximum three interactions for common billing tasks.
- Keep Billing reachable in one tap.
- Preserve screen state during navigation.
- Resume drafts automatically.

---

# 16. Feature Awareness

UI adapts based on:

- Feature Flags
- License
- Permissions
- Connectivity

Hide unavailable actions instead of showing broken controls.

---

# 17. Accessibility

- Minimum 44px touch targets
- Keyboard navigation
- High contrast support
- Visible focus
- Screen-reader labels

---

# 18. Performance Guidelines

- Lazy load non-critical screens
- Virtualize long lists
- Optimistic UI where safe
- Non-blocking synchronization

---

# 19. Application Contract Mapping

Every screen communicates only with the Application Contract.

UI -> Application Contract -> Business Engine -> Platform

No direct repository or SQLite access.

---

# 20. AI Coding Rules

- Build layouts before styling.
- Reuse components from Component_Catalog.md.
- Follow Design_System.md tokens.
- Do not embed business logic in UI.
- Keep layouts responsive and touch-friendly.
