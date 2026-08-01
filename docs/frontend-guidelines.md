# BizCopilot Client - Frontend Guidelines

## 1. Responsive & Platform-Agnostic Design
- The Angular application and UI must be fully responsive (supporting mobile, tablet, and desktop).
- The design must be generic and platform-agnostic, as it will be packaged as either an APK (for Android) or an EXE (for Windows) depending on the environment.

## 2. Simplicity and Readability
- Client-side code should be easy to understand.
- Avoid writing overly complex logic or deeply tying multiple methods together.
- Exceptions can be made only when strictly required for improving performance.

## 3. Documentation and Comments
- Add comments (JSDoc format preferred) on top of all methods.
- The comments must clearly explain the logic and function the method covers.

## 4. Platform Independence for Business Modules
- Business modules must be completely platform-independent.
- Any functionality that differs between Android or Windows must be implemented through platform abstraction interfaces. 
- Packaging into APK or EXE is a deployment concern, not a business logic concern.
