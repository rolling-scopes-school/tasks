# Angular Sprint: Sprint 2 Checkpoint

**Topic: Routing & Signals (`@angular/router`, `@angular/core`)**

## Why This Sprint

Routing is the foundation of navigation in an SPA: without it, building a full application is impossible. Signals are the foundation of reactive state in modern Angular. In this sprint you will configure routing, explore lazy loading and guards, and learn to build components around the signal-based approach.

**Key concepts of this sprint:**

- Route configuration: `Routes`, `provideRouter()`
- `RouterLink`, `RouterOutlet`, `RouterLinkActive`
- Lazy loading via `loadComponent` / `loadChildren`
- Route Guards: `canActivate`, `canDeactivate`
- Route parameters: `ActivatedRoute`, `paramMap`
- `signal()`, `computed()`, `effect()`, `linkedSignal()`
- `input()`, `output()`, `model()` — signal-based component API
- Signals and Change Detection

**Cross-cutting topic — Dependency Injection:**

Routing is impossible without services. In this sprint you will create full-fledged services for the first time and get familiar with Angular's DI system.

---

## Requirements (40 points)

All requirements met → 40 points, any requirement not met → 0.

### Team (+20)

1. **Application is deployed** — the README contains a link to a working deployment (HTTP 200). Even a skeleton counts as a deployment.
2. **GitHub Actions workflow exists** — CI is set up (at least a linter).
3. **At least 6 issues in GitHub** — for work planning.
4. **Linter configured** — ESLint configuration in the repository.

### Individual (+20)

1. **At least 3 routes configured** — the application has page-to-page navigation. Merged into `main`.
2. **Lazy loading implemented** — at least 1 route is lazy-loaded via `loadComponent` or `loadChildren`.
3. **At least 1 Route Guard implemented** — `canActivate` or `canDeactivate`. Functional or class-based.
4. **Signals used in at least 2 components** — `signal()` and `computed()` or `effect()`. Merged into `main`.
5. **At least 2 services with `@Injectable()`** — injected via `inject()`. Merged into `main`.
6. **At least 1 diary entry for Sprint 2** — merged into `main`.

---

## What to Study

### Route Configuration (standalone)

- How to declare a `Routes` array and register it via `provideRouter()`
- Redirect route and `pathMatch: 'full'`
- Lazy loading via `loadComponent` and `loadChildren`
- Nested routes (children)
- Wildcard route `**` for a 404 page

### Functional Guard (Angular 15+)

- How to create a `CanActivateFn` without a class
- How to use `inject()` inside a guard function
- How to return a `UrlTree` for redirect instead of `boolean`
- Why functional guards are preferred over class-based in modern Angular

### Signals

- What `signal()` is and why it is needed
- How to read and update signal state
- When a signal is more convenient than a plain class field

### Computed and Effect

- When to use `computed()`
- When to use `effect()` and when not to
- How to avoid unnecessary side effects

### Linked Signal

- What `linkedSignal()` is
- When to use linked state instead of a regular `computed()`
- How `linkedSignal()` helps synchronize dependent values

### Signal-based Component API

- Passing data via `input()`
- Emitting events via `output()`
- When to use `model()`
- How signal-based API differs from `@Input()` / `@Output()`
- How signals relate to Change Detection

### Attribute Directives

- What an attribute directive is and how it differs from a structural one
- How to create a standalone `@Directive()`
- What `@HostListener` is
- What `@HostBinding` is
- What `ElementRef` is
- Signal-based inputs in directives via `input()`

### Pipes

- What `@Pipe()` is and how to implement `PipeTransform`
- Difference between pure and impure pipes
- Built-in pipes: `DatePipe`, `CurrencyPipe`, `AsyncPipe`, `JsonPipe`
- When to create a custom pipe instead of a component method

### Dependency Injection — Basics

- `@Injectable()` and `providedIn: 'root'`
- `inject()` — the modern way to obtain dependencies
- When a service is a singleton and when it is not

---

## Self-Check Questions

1. What is the difference between `loadComponent` and `loadChildren`?
2. Why is `pathMatch: 'full'` needed for redirect routes?
3. How does a functional guard differ from a class-based guard?
4. What is `signal()` and how does it differ from a regular class field?
5. When should you use `computed()` and when `effect()`?
6. How does `providedIn: 'root'` differ from specifying a service in a component's `providers`?

---

## FAQ

_Q:_ Is it mandatory to use signals already in this sprint?
_A:_ Yes. Signals are one of the two main topics of Sprint 2. Real examples of `signal()` and signal-based API in the project are required.

_Q:_ Must the deployment be on Vercel/Netlify?
_A:_ Any platform. The key requirement is that the link in the README returns HTTP 200.

_Q:_ Can I use class-based guards?
_A:_ You can, but functional guards are recommended in Angular 15+.

---

## Submission

No separate submission is required — the repository is already registered via the Sprint 1 form. The score is assigned **automatically** after the deadline.
