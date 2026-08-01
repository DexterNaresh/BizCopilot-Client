# BizcopilotClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Documentation

- [Frontend Development Guidelines](docs/frontend-guidelines.md)
- [Architecture Blueprint](docs/architecture/00_Architecture_Blueprint.md)
- [Platform Identity Standard](docs/architecture/01_Identity_Standard.md)
- [Dependency Injection & Platform Abstraction Standard](docs/architecture/05_Dependency_Injection_Standard.md)

## Implementation & Architecture Status

- **Business Engine (`src/runtime`)**: 100% Implemented (9 modules: Billing, Product, Customer, Offer, Report, Settings, AI, Backup, Synchronization).
- **Platform Services (`src/platform`)**: 100% Implemented (SQLite, Repositories, EventBus, Identity, Auth, Storage).
- **Unit & Integration Tests**: 90/90 Tests Passing (100% pass rate).
- **UI Experience Layer (`src/ui`)**: Scaffolded (`pages`, `features`, `components`, `layouts`, `navigation`, `theme`; core Angular app bootstrap in place; screens pending development).

## Architecture & Project Structure

BizCopilot is an **Offline-First Business Operating System**. It uses a specialized folder structure designed to strictly separate the UI, Business Runtime, Platform Services, and Shared Components:

\`\`\`text
src/
    ui/             # Contains all Angular UI components, layouts, screens, and themes. No business logic.
    runtime/        # The Business Engine. Contains all business logic, validation, DTOs, and event publishing.
    platform/       # Reusable technical services (SQLite, Sync, Auth, Storage, etc.).
    shared/         # Reusable application resources (enums, models, utilities).
\`\`\`

**Module Rules**:
- The UI layer communicates with the Runtime layer exclusively through Application Contracts (e.g., \`@runtime/billing/application\`).
- The Runtime layer orchestrates business workflows and communicates with the Platform layer via Repository interfaces.
- The Platform layer executes technical operations (e.g. SQLite storage, encryption) but makes no business decisions.
- Never bypass the Application layer to access a Runtime module's internal Domain or Repository directly.
