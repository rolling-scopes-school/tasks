# Angular Sprint: Sprint 1 Checkpoint

**Topic: Project Setup & Component Basics (`@angular/core`)**

## Why This Sprint

The first sprint is the foundation of the entire project. The team must come together, create a repository, initialize an Angular project via CLI, and write the first components. Without this step, moving forward is impossible.

**Key concepts of this sprint:**

- Angular CLI (`ng new`, `ng generate`)
- Standalone components
- `@Component` decorator — `selector`, `template`, `styles`
- Interpolation `{{ }}`, property binding `[prop]`, event binding `(event)`
- `input()` and `output()` — component communication
- Lifecycle hooks: `ngOnInit`, `ngOnDestroy`, and others

---

## Requirements (20 points)

All requirements met → 20 points, any requirement not met → 0.

### Team (done once per team)

1. **Repository created on GitHub** — public, with a meaningful project name.
2. **Access shared with the course account** — add [rollingscopes](https://github.com/rollingscopes) as a collaborator with Read access.
3. **README.md filled in** — project name, short description (2–3 sentences), team members (name + GitHub link for each).
4. **Project initialized via Angular CLI** — `ng new` with TypeScript strict mode. The repository contains `angular.json`, `tsconfig.json` with `"strict": true`.

### Individual (each member completes on their own)

1. **At least 1 custom component created** — not `AppComponent`. The component uses `@Input()` or `@Output()`. Merged into `main`.
2. **At least 1 diary entry** — merged into `main` before the deadline. Location: `/development-notes/{github-username}/`.
3. **Entry contains summary and plan** — (a) what you worked on this sprint; (b) what you plan to do in Sprint 2.

---

## What to Study

### Angular CLI

- Creating a project with `ng new`
- Generating components with `ng generate component`
- Basic Angular project structure: `src`, `main.ts`, `app.config.ts`, `angular.json`

### Standalone Component

- What a standalone component is
- Configuring `selector`, `template`, `styles`
- Basic data binding: interpolation, property binding, event binding

### Component Communication

- Passing data via `input()`
- Emitting events via `output()`
- When to use `model()`
- Communication through shared services
- When to use `input()`/`output()` vs a service

### Lifecycle Hooks

- When each hook is called and in what order
- What tasks lifecycle hooks are used for
- Why it is important to clean up resources when a component is destroyed

---

## FAQ

_Q:_ Can I use NgModules instead of standalone components?
_A:_ You can, but standalone is recommended — it is the modern approach since Angular 15+.

_Q:_ Can I use `@Input()` and `@Output()` decorators instead of signal-based `input()` and `output()`?
_A:_ You can, but `@Input()` and `@Output()` are considered a legacy approach. The modern signal-based API is recommended: `input()`, `output()`, and `model()` when needed.

_Q:_ What if I don't complete the checkpoint?
_A:_ 0 points for this checkpoint. No other consequences — it does not affect admission to the presentation.

_Q:_ Do I need to deploy the project in this sprint?
_A:_ No, deployment is not required in this sprint.

---

## Submission

One team member must **fill in the form** before the deadline. After that, each participant's score is assigned **automatically** based on repository parsing.
