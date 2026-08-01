# Architecture Update — Dependency Injection & Platform Abstraction Standard (Frozen Decision)

## Objective

Standardize the **Dependency Injection (DI)**, **Platform Abstraction**, and **Provider Registration** architecture across the BizCopilot platform.

This decision is considered **Architecture Freeze** and must be strictly followed in V1 and all future versions.

---

# 1. Architectural Layers & Communication Rules

BizCopilot strictly enforces a unidirectionally layered architecture:

```text
UI Layer (Experience)
       ↓
Application Contracts (@runtime/*/application)
       ↓
Business Engine / Runtime (@runtime/*)
       ↓
Platform Abstractions (@shared/abstractions/*)
       ↓
Platform Implementations (@platform/*)
       ↓
SQLite / Native Infrastructure
```

### Mandated Rules:
1. **Runtime Isolation**: Code under `@runtime` must NEVER import directly from `@platform`. All platform capabilities must be accessed via abstract tokens imported from `@shared/abstractions`.
2. **Platform Layer Boundaries**: The `@platform` layer provides concrete implementations of the contracts in `@shared/abstractions`. Platform code contains zero business logic.
3. **Application Contract Boundaries**: UI components communicate exclusively with `@runtime/*/application` interfaces. UI never accesses repositories, database instances, or platform implementations directly.

---

# 2. Dependency Injection Strategy

## Abstract Classes as DI Tokens
BizCopilot standardizes on **Abstract Classes** as Dependency Injection tokens in Angular.

- **Do NOT use TypeScript interfaces** for DI tokens (interfaces are erased at runtime in JS).
- **Do NOT use Angular `InjectionToken`** unless registering multi-provider arrays.
- **Do NOT inject concrete Platform classes** into Runtime services.

### Example:

```typescript
// Abstract Contract (in @shared/abstractions/event-bus.ts)
export abstract class IEventBus {
  abstract publish<T>(event: string, payload: T): void;
  abstract subscribe<T>(event: string): Observable<T>;
}

// Concrete Platform Implementation (in @platform/eventbus/event-bus.service.ts)
@Injectable()
export class EventBusService implements IEventBus {
  // Concrete RxJS event bus logic
}
```

---

# 3. Provider Registration Rules

## Explicit Provider Binding
To maintain clean modular boundaries and prevent hidden global state:

1. **No `@Injectable({ providedIn: 'root' })`** on concrete Platform services.
2. Concrete platform services must be registered explicitly in provider arrays using abstract-to-concrete mapping:

```typescript
{ provide: IEventBus, useClass: EventBusService }
{ provide: ISessionService, useClass: SessionService }
{ provide: IConfigProvider, useClass: ConfigProviderService }
{ provide: IIdentityService, useClass: IdentityService }
```

3. Feature modules bundle their own providers in modular provider arrays (e.g., `billing.providers.ts`, `product.providers.ts`) or in the root application config (`app.config.ts`).

---

# 4. Testing & TestBed Rules

Every spec file (`*.spec.ts`) must mirror the production provider registration:

```typescript
TestBed.configureTestingModule({
  providers: [
    ProductService,
    { provide: IPermissionService, useClass: PermissionManager },
    { provide: ISessionService, useClass: SessionService },
    { provide: IEventBus, useClass: EventBusService }
  ]
});
```

When mocking dependencies in unit tests, provide the mock using the **Abstract Class** token:

```typescript
{ provide: IIdentityService, useValue: identitySpy }
```

---

# 5. Compliance Verification

- All 90 unit tests across Runtime and Platform modules comply with this standard and pass with 100% success rate.
- Any new module added must follow this abstract DI pattern without exception.
