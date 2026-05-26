# Sprint 2 Interview — Routing & Signals (75 points)

## Instructions for Mentors

The interview takes **~15–20 minutes per student**. The goal is to evaluate two things:

1. **Angular knowledge** — ask any questions from each module listed below. You do not need to ask every question — pick a few from each section to get a picture of the student's understanding.
2. **Personal contribution** — check what the student has done in the project (see [Project Questions](#project-questions) below).

> **Important:** Students have studied topics from Sprint 1 and Sprint 2 only. The modules below cover Sprint 2 topics: Routing, Signals, Attribute Directives & Pipes (intro), and DI basics. Do **not** penalize students for lacking knowledge of topics from Sprint 3–4 (Forms, HTTP, RxJS, Testing, advanced DI, etc.). If a student demonstrates knowledge beyond Sprint 2 — great, but the absence of such knowledge should not lower the score.

### Scoring

| Level         | ~% of 75 | Points | Indicators                                                                |
| ------------- | -------- | ------ | ------------------------------------------------------------------------- |
| **Weak**      | ~20%     | ~15    | Cannot explain their code. Does not understand basic sprint concepts.     |
| **Basic**     | ~50%     | ~38    | Understands core concepts at a basic level. Struggles with details.       |
| **Good**      | ~80%     | ~60    | Confidently explains code and Angular concepts. Understands "why".        |
| **Excellent** | ~100%    | ~75    | Deep understanding, compares approaches, explains trade-offs and nuances. |

---

## Knowledge Questions

### Routing

1. What is Routing in Angular, and what is it used for?
2. How do you configure a basic routing system using?
3. How do you use route parameters and queryParams to pass and retrieve data in routes?
4. Can you provide an example of using child routes?
5. What are the preloading strategies, and how do you use them?
6. How do you use **Route Guards** (e.g., **CanActivate** and **CanDeactivate**) to protect routes?
7. In what order are route guards executed when multiple guards are applied to the same route?
8. What is **ActivatedRoute**, and how do you apply it to get information about the current route?
9. How do you handle lazy loading in routing?

### Lazy Loading

1. What is Lazy loading, and what is its purpose in Angular applications?
2. What are the advantages of using lazy loading in your application?
3. What is Preload strategy, and what are the main strategies used for preloading modules?
4. How do you debug lazy loading issues?

### Signals

1. How do we subscribe to a signal?
2. Can we read the value of a signal from a computed signal without creating a dependency?
3. Detecting signal changes with the effect() API.
4. What is the relation between Signals and change detection?
5. What is `linkedSignal` and when would you use it instead of `computed`?
6. How do you handle signal debugging?

### Directives

1. What are Directives in Angular, and what are they used for?
2. What types of directives do you know?
3. How do you create and use a custom directive? Explain the use of the `@Directive` decorator.
4. How do HostBinding and HostListener decorators work?
5. What is the difference between ElementRef and Renderer2?

### Change Detection

1. What is the change detection mechanism in Angular, and how do the Default and OnPush strategies differ? When is it better to use each one?
2. What types of change detection strategies exist in Angular and what is the difference between them?
3. What types of change detection exist in Angular and what is the difference between them?
4. What is the difference between `markForCheck()` and `detectChanges()`?
5. When does Angular re-check an OnPush component?

### Components

1. What are ViewChild and ViewChildren?

### Dependency Injection

1. What is Dependency Injection, and what are its objectives in Angular?
2. How do you create a service and use it in components for dependency injection?
3. What is the difference between _providedIn: 'root'_, _providedIn: 'any'_, and registering a provider in the "providers" section of NgModule?
4. How do you implement dependency injection for standalone components?
5. How can you reuse standalone components across different parts of your Angular application?

---

## Project Questions

The mentor should also ask questions about the student's **personal contribution** to the project. Expect the student to:

- Describe what they worked on during the sprint
- Navigate to their code and explain how it works
- Show the running application and its features
- Explain decisions they made and challenges they faced
