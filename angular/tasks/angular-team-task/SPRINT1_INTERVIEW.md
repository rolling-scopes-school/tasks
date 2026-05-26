# Sprint 1 Interview — Components (50 points)

## Instructions for Mentors

The interview takes **~15–20 minutes per student**. The goal is to evaluate two things:

1. **Angular knowledge** — ask any questions from each module listed below. You do not need to ask every question — pick a few from each section to get a picture of the student's understanding.
2. **Personal contribution** — check what the student has done in the project (see [Project Questions](#project-questions) below).

> **Important:** Students have only studied the topics listed in the [Sprint 1 "What to Study"](./SPRINT1_CHECKPOINT.md#what-to-study) section. Do **not** expect correct answers on topics from later sprints (Routing, Signals, Forms, HTTP, Testing, etc.). If a student demonstrates knowledge beyond Sprint 1 — great, but the absence of such knowledge should not lower the score.

### Scoring

| Level         | ~% of 50 | Points | Indicators                                                                |
| ------------- | -------- | ------ | ------------------------------------------------------------------------- |
| **Weak**      | ~20%     | ~10    | Cannot explain their code. Does not understand basic sprint concepts.     |
| **Basic**     | ~50%     | ~25    | Understands core concepts at a basic level. Struggles with details.       |
| **Good**      | ~80%     | ~40    | Confidently explains code and Angular concepts. Understands "why".        |
| **Excellent** | ~100%    | ~50    | Deep understanding, compares approaches, explains trade-offs and nuances. |

---

## Knowledge Questions

### General

1. What is Angular and what is it used for?
2. What is Angular CLI and what are its main features?
3. What is inter-component communication in Angular? Describe different ways of sharing data between components.

### Angular CLI

1. How do you create a new Angular project with `ng new`? What flags/options are useful?
2. How do you generate a component using angular cli?
3. What is the basic Angular project structure? What are `app.config.ts`, and `angular.json` responsible for?

### Components

1. What are standalone components? How do they differ from module-based components?
2. How do you configure a component's `selector`, `template`, and `styles` using the `@Component` decorator?
3. How does data binding work in Angular? Explain interpolation, property binding, and event binding.
4. What is the difference between one-way and two-way data binding?
5. What is Angular control flow? Describe `@if`, `@for`, and `@switch`.

### Component Communication

1. How do you pass data from a parent component to a child component using `input()`?
2. How do you emit events from a child component to a parent using `output()`?
3. When would you use `model()` instead of `input()` + `output()`?
4. How can components communicate through a shared service?
5. When should you use `input()`/`output()` vs a service for communication?
6. What is the difference between the signal-based `input()`/`output()` API and the legacy `@Input()`/`@Output()` decorators?

### Signals (basics)

1. What are Signals?
2. How to read and modify the value of a signal?
3. What is the main advantage of using signals instead of primitive values?

### Lifecycle Hooks

1. What are Angular lifecycle hooks? Name the main ones.
2. In what order are lifecycle hooks called?
3. What is `ngOnInit` used for? How does it differ from the constructor?
4. What is `ngOnDestroy` used for? Why is it important to clean up resources?
5. What is `ngOnChanges`? When is it called and what information does it provide?
6. What are `afterNextRender` and `afterEveryRender`? When would you use them instead of `ngAfterViewInit`?

---

## Project Questions

The mentor should also ask questions about the student's **personal contribution** to the project. Expect the student to:

- Describe what they worked on during the sprint
- Navigate to their code and explain how it works
- Demonstrate understanding of the project structure and setup
- Explain decisions they made and challenges they faced
