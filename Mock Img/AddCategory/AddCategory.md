# BizCopilot V1 — Add Category / Edit Category
# FINAL FROZEN UI + FIGMA-LEVEL GENERATION SPECIFICATION
# Responsive Desktop + Tablet + Mobile

============================================================
1. PURPOSE
============================================================

Create the final BizCopilot V1 Add Category screen.

This component is used for BOTH:

1. Add Category
2. Edit Category

There must be ONE reusable UI component.

Add Category:
- Empty form
- Title: Add Category
- Primary action: Save

Edit Category:
- Existing values pre-populated
- Title: Edit Category
- Primary action: Save Changes

Do NOT create separate Add and Edit designs.

============================================================
2. GLOBAL BIZCOPILOT DESIGN SYSTEM
============================================================

The screen MUST visually match the already-frozen:

- Product screen
- Add Product screen
- Category screen
- other BizCopilot screens

Use the same:

- font family
- typography hierarchy
- font weights
- primary purple
- background
- surfaces
- borders
- corner radius
- shadows
- buttons
- inputs
- icon buttons
- toggles
- spacing
- responsive behavior
- interaction states

Do NOT introduce a new visual style.

============================================================
3. FORM STRUCTURE — FROZEN
============================================================

The form contains exactly:

1. Category Name
2. Description
3. Category Icon
4. Status
5. Add another category after saving
6. Cancel
7. Save

Do NOT add:

- product selection
- inventory
- stock
- supplier
- pricing
- sales
- profit
- advanced settings
- category code
- category type
- subcategory
- unnecessary configuration

============================================================
4. DESKTOP LAYOUT
============================================================

Desktop:

Use a centered modal overlay.

The Category screen remains visible behind the modal.

Background page is dimmed using the existing BizCopilot overlay treatment.

Modal:

- centered horizontally
- centered vertically when viewport allows
- responsive width
- responsive height
- content-driven height
- no unnecessary internal scrollbar under normal desktop conditions

Structure:

┌────────────────────────────────────────────┐
│ Category Icon   Add Category          X    │
│                 Create a new category...   │
│                                            │
│ Category Name *                            │
│ [ Enter category name                  ]   │
│                                            │
│ Description                                │
│ [ Enter category description...        ]   │
│ [                                      ]   │
│                                            │
│ Category Icon *                            │
│ Choose an icon that represents category    │
│                                            │
│ [icon] [icon] [icon] [icon] [icon] [icon] │
│ [icon] [icon] [icon] [icon] [icon] [more] │
│                                            │
│ Status *                                   │
│ [ ● Active ]     [ ● Inactive ]            │
│                                            │
│ □ Add another category after saving        │
│                                            │
│                         Cancel     Save     │
└────────────────────────────────────────────┘

============================================================
5. MODAL HEADER
============================================================

Header contains:

Category icon/avatar
+
Add Category
+
supporting description
+
Close button

Example:

[Category Icon]

Add Category

Create a new category to organize your products

Edit mode:

Edit Category

Update the category information

Close:

X icon button.

Use the existing BizCopilot close-button style.

============================================================
6. CATEGORY NAME
============================================================

Label:

Category Name *

Required field.

Placeholder:

Enter category name

Use the same input component as Add Product.

Recommended validation:

- required
- cannot contain only spaces
- must be unique
- maximum 50 characters

Character counter may be displayed using the existing BizCopilot
input-counter pattern.

Example:

0 / 50

Do not use a separate custom input design.

============================================================
7. CATEGORY DESCRIPTION
============================================================

Label:

Description

Optional.

Use a responsive multiline textarea.

Placeholder:

Enter category description (optional)

Maximum:

200 characters.

Display a character counter using the existing BizCopilot pattern.

Example:

0 / 200

Description is optional.

Do not mark it with *.

============================================================
8. CATEGORY ICON
============================================================

Label:

Category Icon *

Supporting text:

Choose an icon that represents this category

The user MUST SELECT the category icon.

Provide a grid of selectable colored category icons.

IMPORTANT:

There must be NO TEXT LABEL UNDER EACH ICON.

Do NOT display:

Beverages
Food
Bakery
Desserts

under the icons.

The icons themselves represent the choices.

============================================================
9. ICON SELECTOR
============================================================

Use a responsive icon grid.

Example:

┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐
│ 🍹 │ │ ▦  │ │ ♜  │ │ ☕ │ │ 🛍 │ │ 🍞 │
└────┘ └────┘ └────┘ └────┘ └────┘ └────┘

┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐
│ 🍎 │ │ 🌿 │ │ 🌶 │ │ 🐟 │ │ 🍦 │ │ ...│
└────┘ └────┘ └────┘ └────┘ └────┘ └────┘

The actual implementation must use SVG icons.

Do NOT use emoji.

============================================================
10. COLORED ICON SYSTEM
============================================================

Category icons are COLORFUL.

Each icon option can have its own semantic/pastel color treatment.

Examples:

Purple
Orange
Green
Pink
Blue
Yellow
Red

The icon container uses a soft pastel background.

The icon itself uses a corresponding stronger color.

Maintain a premium but restrained appearance.

Do NOT use random colors.

Use a predefined BizCopilot category-icon palette.

============================================================
11. ICON SELECTED STATE
============================================================

Selected icon:

- BizCopilot purple outline/border
- subtle purple background
- clear selected state
- icon remains visible
- strong but clean visual indication

Unselected:

- neutral border
- white/light surface
- normal colored icon

Hover:

- subtle border/background change

Focus:

- accessible focus ring

Do NOT rely only on color to communicate selection.

============================================================
12. ICON GRID RESPONSIVENESS
============================================================

Desktop:

Use a comfortable multi-column icon grid.

Tablet:

Same icon selector, responsive number of columns.

Mobile:

Same icon selector, responsive number of columns.

The icons must resize/reflow naturally.

Do NOT use a desktop fixed-width icon grid that gets squeezed on mobile.

Do NOT add labels below icons.

============================================================
13. MORE ICON OPTION
============================================================

Include a final:

More

icon option using an ellipsis icon.

The More option represents additional category icons.

It does NOT display a category name.

If opened:

show additional available icons using the same icon-selector pattern.

Do not create a separate page.

============================================================
14. STATUS
============================================================

Label:

Status *

Supporting text:

Set the initial availability status for this category

Options:

[ ● Active ]

[ ● Inactive ]

Active is selected by default for Add Category unless the business
configuration specifies otherwise.

Active:

green semantic indicator.

Inactive:

red semantic indicator.

Use the same BizCopilot status-selection component.

============================================================
15. ACTIVE / INACTIVE BEHAVIOR
============================================================

Active:

Category can be selected/used in billing.

Inactive:

Category is not available for normal category selection.

Changing status must update the visual selected state immediately.

The status selection is separate from inventory.

Do NOT call this stock status.

============================================================
16. ADD ANOTHER CATEGORY
============================================================

Optional checkbox:

□ Add another category after saving

This is a convenience feature for businesses adding several categories.

If unchecked:

Save
→ create category
→ close modal
→ update Category screen

If checked:

Save
→ create category
→ reset form
→ keep Add Category modal open

The next category can immediately be entered.

============================================================
17. FORM ACTIONS
============================================================

Bottom-right action area:

Cancel
Save

Cancel:

secondary/outline button.

Save:

primary BizCopilot purple button.

The primary button text is:

Save

NOT:

Add Category

============================================================
18. EDIT MODE
============================================================

When Edit is clicked from Category Grid or Table:

Open the SAME component.

Mode:

Edit Category

Pre-populate:

Category Name
Description
Category Icon
Status

Primary action:

Save Changes

Cancel:

Close without saving.

Do NOT create a separate Edit Category page.

============================================================
19. EDIT ICON
============================================================

If editing:

The currently selected icon must be visibly selected when the modal
opens.

User can choose a different icon.

Changing icon updates the preview/selection state.

============================================================
20. MODAL CLOSE
============================================================

Close using:

X

or:

Cancel

If the user has entered unsaved information:

show an appropriate unsaved-changes confirmation if required by the
global BizCopilot interaction pattern.

Do not silently lose substantial user input.

============================================================
21. DESKTOP RESPONSIVE BEHAVIOR
============================================================

Desktop:

Use centered modal.

The background Category screen remains visible.

The modal should have:

- responsive width
- max-width based on design system
- fluid horizontal padding
- content-driven height

Do NOT use a screenshot-specific fixed width.

At large desktop / 4K:

Do NOT make the modal enormous.

Keep a comfortable readable content width.

At smaller desktop / 13-inch:

The modal must adapt to available width and height.

If vertical content cannot fit:

allow modal content to scroll rather than shrinking text/components
below usable dimensions.

============================================================
22. TABLET RESPONSIVE BEHAVIOR
============================================================

Tablet:

Use the same Add Category component.

Use a responsive centered modal.

The modal width adapts to available screen width.

Fields stretch to available width.

Icon grid reflows.

Buttons remain touch-friendly.

Bottom navigation remains behind the overlay where appropriate.

Do NOT redesign the form.

============================================================
23. MOBILE RESPONSIVE BEHAVIOR
============================================================

Mobile:

Use the same Add Category component inside a bottom-sheet style
container, consistent with the frozen Add Product pattern.

The sheet:

- spans the available safe width
- has rounded top corners
- respects device safe areas
- can scroll vertically if necessary
- keeps primary actions accessible

Header remains:

Add Category
X

Form order remains exactly the same.

============================================================
24. MOBILE FORM ORDER
============================================================

Mobile:

Category Name
↓
Description
↓
Category Icon
↓
Status
↓
Add another category
↓
Cancel
↓
Save

Do NOT rearrange the form into multiple columns.

Use one-column layout.

============================================================
25. TABLET FORM ORDER
============================================================

Tablet:

Maintain the same logical order.

Fields may use available horizontal space but should not introduce a
different information hierarchy.

Recommended:

Name
Description
Icon selector
Status
Checkbox
Actions

============================================================
26. DESKTOP FORM ORDER
============================================================

Desktop:

Same logical order.

The form remains a single coherent vertical flow.

Do not split unrelated fields into side-by-side columns merely to fill
space.

============================================================
27. TYPOGRAPHY
============================================================

Use the existing BizCopilot typography system.

Modal title:

strong heading.

Subtitle:

muted supporting text.

Field labels:

medium/semibold.

Required indicator:

semantic red asterisk.

Input text:

normal readable weight.

Supporting text:

smaller muted text.

Character counter:

small muted text.

Do NOT introduce a new font.

============================================================
28. ICON SYSTEM
============================================================

Use one consistent outline SVG icon family.

Preferred:

Lucide or equivalent.

No emoji.

No mixed icon families.

Required icons:

Category/header:
Folder / Package-style category icon

Close:
X

More:
Ellipsis

Status:
small semantic indicator

All category icons:

SVG vector icons.

============================================================
29. BUTTON ICONS
============================================================

Save:

No icon required unless consistent with existing BizCopilot button
pattern.

Cancel:

No icon required.

Close:

X.

Do not add decorative icons unnecessarily.

============================================================
30. COLORS
============================================================

Use the existing BizCopilot palette.

Primary:
BizCopilot Purple

Background:
white / very light neutral

Surface:
white

Text:
dark neutral

Muted:
secondary neutral

Border:
soft neutral

Required:
semantic red

Active:
green

Inactive:
red

Selected icon:
purple

Category icon colors:
predefined colorful palette.

============================================================
31. FORM INPUT STYLE
============================================================

Use the exact same input style as Add Product.

Inputs:

- rounded corners
- subtle border
- white surface
- consistent height based on BizCopilot control tokens
- clear focus state
- consistent placeholder
- accessible label

Focus:

BizCopilot purple border/ring.

Error:

semantic red border/ring
+
clear error message.

Do not use browser-default styling.

============================================================
32. DESCRIPTION TEXTAREA
============================================================

Textarea:

- multiline
- responsive width
- minimum comfortable height
- resizable only if consistent with BizCopilot design system
- character counter
- optional

Do not make it excessively tall.

============================================================
33. VALIDATION
============================================================

Category Name:

Required.

Cannot be empty.

Cannot contain only spaces.

Must be unique.

Maximum 50 characters.

Description:

Optional.

Maximum 200 characters.

Category Icon:

Required.

Status:

Required.

Validation messages must use the existing BizCopilot error style.

============================================================
34. SAVE BEHAVIOR
============================================================

When Save is clicked:

Validate all required fields.

If invalid:

- remain on modal
- highlight invalid field
- show clear validation message
- focus the first invalid field when appropriate

If valid:

save category
update Category screen
update counts
update pagination if required
close modal

============================================================
35. ADD ANOTHER BEHAVIOR
============================================================

If:

Add another category after saving

is checked:

After successful save:

- keep modal open
- clear Category Name
- clear Description
- reset icon selection to default
- reset status to Active
- maintain checkbox checked

The user can immediately create another category.

============================================================
36. EDIT SAVE BEHAVIOR
============================================================

Edit mode:

Validate.

Save changes.

Update the category in the underlying list.

Close modal.

Preserve current search/filter/page context where possible.

Do not unexpectedly navigate away.

============================================================
37. LOADING STATE
============================================================

During save:

Primary Save button enters loading state.

Prevent duplicate submissions.

Example:

Saving...

Do not close the modal before successful completion.

============================================================
38. RESPONSIVE SIZING
============================================================

NO screenshot-specific fixed pixel sizing.

The following must be fluid:

- modal width
- form width
- input width
- textarea width
- icon grid width
- icon spacing
- button area
- horizontal padding
- vertical spacing

Use responsive design tokens.

Use:

min()
max()
clamp()
flex
grid
percentage sizing
intrinsic sizing

where appropriate.

============================================================
39. MODAL WIDTH RULE
============================================================

Desktop:

Use a comfortable readable max-width.

Do NOT allow it to become excessively wide on 4K.

13-inch:

Shrink fluidly within available viewport.

Tablet:

Use responsive width with safe margins.

Mobile:

Use almost full available width with safe horizontal margins and
bottom-sheet behavior.

Do NOT define three unrelated modal designs.

============================================================
40. MODAL HEIGHT RULE
============================================================

Height should be content-driven.

Do NOT force a fixed height.

If content exceeds available viewport height:

modal content becomes vertically scrollable.

The page behind should not scroll while the modal is active.

============================================================
41. SCROLLBAR RULE
============================================================

Under normal desktop/tablet conditions:

No unnecessary modal scrollbar.

If viewport height is insufficient:

modal content may scroll.

The scrollbar appears only when content actually exceeds available
modal height.

Do not permanently show a scrollbar.

============================================================
42. MOBILE SAFE AREA
============================================================

Mobile bottom sheet must respect:

- top safe area
- bottom safe area
- device home indicator

The Save button must never be hidden behind the device's bottom
system area.

============================================================
43. RESPONSIVE ICON GRID
============================================================

Desktop:

Wide multi-column grid.

Tablet:

Fewer columns if necessary.

Mobile:

Compact multi-column grid.

The icon buttons must remain comfortably touchable.

Do NOT shrink icons below a usable touch target.

No icon labels underneath.

============================================================
44. ACCESSIBILITY
============================================================

Every icon option must have an accessible label.

Example:

"Select beverage icon"

"Select food icon"

etc.

The visible UI does NOT show those labels.

Keyboard:

- tab navigation
- visible focus
- Enter/Space selection
- Escape closes modal where appropriate

Screen readers:

All inputs have labels.

All icon buttons have accessible names.

============================================================
45. ICON SELECTION ACCESSIBILITY
============================================================

Selected icon must communicate state through:

- border
- background
- selected indicator if appropriate

Do not rely only on color.

============================================================
46. COMPONENT STRUCTURE
============================================================

Reusable components:

AddEditCategoryModal
ModalHeader
CategoryNameField
CategoryDescriptionField
CategoryIconPicker
CategoryIconOption
MoreIconOption
CategoryStatusSelector
AddAnotherCheckbox
ModalActions
CancelButton
SaveButton

Use the same component for Add and Edit.

============================================================
47. COMPONENT STATES
============================================================

Modal:

Opening
Open
Closing

Input:

Default
Focus
Filled
Error
Disabled

Icon:

Default
Hover
Selected
Focus
Disabled

Status:

Active
Inactive

Checkbox:

Unchecked
Checked
Disabled

Save:

Default
Hover
Pressed
Loading
Disabled

Cancel:

Default
Hover
Pressed
Disabled

============================================================
48. DESKTOP VISUAL HIERARCHY
============================================================

Background:

Existing Category page.

Overlay:

Subtle dim / translucent backdrop.

Modal:

White surface.

Header:

Category icon + title + subtitle.

Form:

Name
Description
Icon
Status
Checkbox

Actions:

Cancel
Save

The modal should feel premium, clean and lightweight.

============================================================
49. TABLET VISUAL HIERARCHY
============================================================

Same structure.

Only dimensions and available space change.

Do NOT remove fields.

Do NOT add fields.

Do NOT rearrange information unnecessarily.

============================================================
50. MOBILE VISUAL HIERARCHY
============================================================

Same structure.

Bottom sheet.

One-column form.

Scrollable content only when necessary.

Actions remain accessible.

============================================================
51. FIGMA DESIGN TOKENS
============================================================

Use shared BizCopilot tokens for:

Typography
Colors
Spacing
Radius
Borders
Shadows
Controls
Icons

Do NOT assign random values independently to this screen.

All tokens must match the existing Product and Category screens.

============================================================
52. NO STATIC SCREENSHOT RECREATION
============================================================

The reference image is a visual reference only.

Do NOT reproduce it using:

- absolute coordinates
- fixed modal width
- fixed modal height
- fixed icon positions
- fixed field widths
- fixed spacing

Reproduce the design relationships.

============================================================
53. RESPONSIVE ACCEPTANCE TEST
============================================================

Test at:

320px
375px
430px
600px
768px
834px
1024px
1280px
1440px
1920px
2560px
3840px

Verify:

✓ no horizontal overflow
✓ no clipped fields
✓ no distorted icons
✓ readable typography
✓ fluid modal
✓ fluid icon grid
✓ fluid inputs
✓ usable buttons
✓ correct safe-area behavior
✓ no unnecessary scrollbar
✓ modal scrolls only when required
✓ same visual hierarchy across devices

============================================================
54. FINAL FROZEN FORM
============================================================

ADD CATEGORY

Category Name *
[ Enter category name ]

Description
[ Enter category description (optional) ]

Category Icon *
Choose an icon that represents this category

[ colored icon ] [ colored icon ] [ colored icon ] ...
[ colored icon ] [ colored icon ] [ colored icon ] ...

NO TEXT LABELS UNDER ICONS.

Status *
[ ● Active ] [ ● Inactive ]

□ Add another category after saving

Cancel
Save

============================================================
55. FINAL EDIT FORM
============================================================

EDIT CATEGORY

Category Name *
[ Existing category name ]

Description
[ Existing description ]

Category Icon *
[ Existing selected icon ]

Status *
[ ● Active ] [ ● Inactive ]

□ Add another category after saving

Cancel
Save Changes

============================================================
56. FINAL RESPONSIVE CONTAINERS
============================================================

DESKTOP:

Category page
+
dimmed backdrop
+
centered modal

TABLET:

Category page
+
dimmed backdrop
+
responsive centered modal

MOBILE:

Category page
+
dimmed backdrop
+
responsive bottom sheet

The SAME AddEditCategory component is used in all three.

============================================================
57. FINAL BEHAVIOR RELATIONSHIP
============================================================

Category Screen:

+ Add Category
        ↓
AddEditCategoryModal
        ↓
Add Category mode
        ↓
Save

Category Grid/Table:

Edit
        ↓
AddEditCategoryModal
        ↓
Edit Category mode
        ↓
Save Changes

Both paths use the SAME component.

============================================================
58. FINAL FROZEN DESIGN RULE
============================================================

Do not modify:

- field order
- icon selector concept
- colored icon system
- no icon labels
- description field
- status selection
- Add Another checkbox
- Cancel
- Save
- Add/Edit component relationship

unless explicitly requested.

============================================================
59. FINAL DESIGN PRINCIPLE
============================================================

ONE COMPONENT.

THREE RESPONSIVE PRESENTATIONS.

Desktop:
Centered modal.

Tablet:
Responsive centered modal.

Mobile:
Responsive bottom sheet.

Same:

- content
- hierarchy
- fields
- icons
- typography
- colors
- actions
- behavior

Only the container and dimensions adapt.

============================================================
FINAL FROZEN ADD CATEGORY UI
============================================================

Category Name
↓
Description
↓
Colored Icon Selection
↓
Active / Inactive
↓
Add Another Category
↓
Cancel + Save

EDIT:

Same screen
+
pre-populated data
+
Save Changes

This is the FINAL FROZEN BizCopilot Add Category / Edit Category
specification.


