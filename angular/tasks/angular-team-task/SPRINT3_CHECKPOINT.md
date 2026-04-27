# Angular Sprint: Sprint 3 Checkpoint

**Topic: Directives, Pipes & Forms (`@angular/core`, `@angular/forms`)**

## Why This Sprint

Directives and Pipes extend Angular templates: directives add behavior to elements, pipes transform data for display. Forms are a key part of most applications: Angular Reactive Forms give you full control over form state and validation. In this sprint you will dive deeper into Angular's template layer and learn to work with forms.

**Key concepts of this sprint:**

- Attribute directives: `@Directive()`, `HostBinding`, `HostListener`
- Structural directives: `*ngIf`, `*ngFor` (and the new `@if`, `@for`)
- Custom pipes: `PipeTransform`, pure vs impure
- Content projection: `ng-content`, `ng-template`, `@ContentChild`
- **Reactive Forms:** `FormGroup`, `FormControl`, `FormArray`, `FormBuilder`
- Validation: built-in, custom, async validators
- Displaying validation errors in the template

**Cross-cutting topic — DI and Change Detection:**

In this sprint you will use `InjectionToken` / custom providers for the first time and switch components to the `OnPush` strategy.

---

## Requirements (40 points)

All requirements met → 40 points, any requirement not met → 0.

### Individual (40 points)

1. **At least 1 custom directive or pipe** — `@Directive()` or `@Pipe()` with meaningful usage in the project. Merged into `main`.
2. **At least 1 Reactive Form implemented** — with `FormGroup` and `FormControl`. At least 3 fields. Merged into `main`.
3. **Validation works** — at least 2 types of validators (e.g., `required` + `minLength` or a custom validator). Errors are displayed in the template.
4. **Form is functional** — on submit the data is processed (console output, sent to a service, navigation — any meaningful action).
5. **`InjectionToken` or custom provider** — `useValue`, `useFactory`, `useClass`, or `useExisting` in `providers`. Merged into `main`.
6. **At least 3 components use `OnPush`** — with `changeDetection: ChangeDetectionStrategy.OnPush`. Merged into `main`.
7. **At least 1 diary entry for Sprint 3** — merged into `main`.

---

## What to Study

### Custom Attribute Directive

- What `@Directive()` is and how to create a custom directive
- How to use `HostListener` to handle DOM events
- How to use `ElementRef` to access the DOM element
- Signal-based inputs in directives via `input()`

### Structural Directives

- How a structural directive differs from an attribute directive
- New Angular control flow: `@if`, `@for`, `@switch` — differences from `*ngIf`/`*ngFor`/`*ngSwitch`
- How to create a custom structural directive with `TemplateRef` and `ViewContainerRef`
- `ng-template` and `ng-container` — when and why

### Custom Pipe

- What `@Pipe()` is and how to implement `PipeTransform`
- Difference between pure and impure pipes
- When to use a pipe instead of a component method

### Reactive Forms

- How to create a `FormGroup` with `FormBuilder`
- `FormControl` — reading value, status (`valid`, `dirty`, `touched`)
- Built-in validators: `required`, `minLength`, `email`, `pattern`
- How to display validation errors in the template

### Custom Validator

- How to create a synchronous validator (`ValidatorFn`)
- When to use an async validator
- How to apply a validator at the group level (`FormGroup`)

### Content Projection

- What `ng-content` is and why it is needed
- How to use `ng-template` for reusable components
- When to use `@ContentChild` / `@ContentChildren`

### Change Detection — OnPush

- Strategies: `Default` vs `OnPush`
- When Angular re-checks an `OnPush` component
- How signals and `AsyncPipe` relate to OnPush
- `markForCheck()` vs `detectChanges()`

### Dependency Injection — Advanced

- `InjectionToken` for non-class dependencies
- Providers: `useClass`, `useValue`, `useFactory`, `useExisting`
- Injector hierarchy: root → component

---

## Self-Check Questions

1. How does an attribute directive differ from a structural directive?
2. What is a `pure` pipe and how does it differ from an `impure` one?
3. What is the difference between Template-driven and Reactive Forms?
4. How does validation work in Reactive Forms? How does a sync validator differ from an async one?
5. Why is `InjectionToken` needed?
6. What is the difference between `Default` and `OnPush` Change Detection strategies?

---

## FAQ

_Q:_ Is it mandatory to create both a custom directive AND a pipe?
_A:_ No, one of the two is sufficient.

_Q:_ Is it mandatory to use Reactive Forms?
_A:_ Yes, at least one form must be reactive. Template-driven can be used additionally.

_Q:_ Is a custom validator required?
_A:_ Not required for the checkpoint, but recommended — it demonstrates deeper understanding.

---

## Submission

No separate submission is required. The score is assigned **automatically** after the deadline.
