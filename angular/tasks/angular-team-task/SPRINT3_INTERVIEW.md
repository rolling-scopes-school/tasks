# Sprint 3 Interview — Directives, Pipes & Forms (125 points)

## Instructions for Mentors

The interview takes **~15–20 minutes per student**. The goal is to evaluate two things:

1. **Angular knowledge** — ask any questions from each module listed below. You do not need to ask every question — pick a few from each section to get a picture of the student's understanding.
2. **Personal contribution** — check what the student has done in the project (see [Project Questions](#project-questions) below).

> **Important:** Students have studied topics from Sprints 1–3. The modules below cover Sprint 3 topics: Directives, Pipes, Forms, Content Projection, Change Detection (OnPush), and advanced DI. Do **not** penalize students for lacking knowledge of Sprint 4 topics (HTTP, RxJS, Testing). If a student demonstrates knowledge beyond Sprint 3 — great, but the absence of such knowledge should not lower the score.

### Scoring

| Level         | ~% of 125 | Points | Indicators                                                                |
| ------------- | --------- | ------ | ------------------------------------------------------------------------- |
| **Weak**      | ~20%      | ~25    | Cannot explain their code. Does not understand basic sprint concepts.     |
| **Basic**     | ~50%      | ~63    | Understands core concepts at a basic level. Struggles with details.       |
| **Good**      | ~80%      | ~100   | Confidently explains code and Angular concepts. Understands "why".        |
| **Excellent** | ~100%     | ~125   | Deep understanding, compares approaches, explains trade-offs and nuances. |

---

## Knowledge Questions

### Directives

1. What are Directives in Angular, and what are they used for?
2. What is the difference between structural and attribute directives? Please provide examples.
3. How do you create and use a custom structural directive? Explain the use of the `@Directive` decorator. How do you handle inputs of structural directive?
4. Explain **ngIf** and **ngFor** and their usage.
5. What is the purpose of **ngSwitch**, **ngSwitchCase**, and **ngSwitchDefault**, and how do you use them?
6. What is **ng-container** and what is it used for? Provide an example.
7. How do you create custom structural directives using **ng-template**?

### Pipes

1. What is a Pipe, and what is its purpose in Angular?
2. Can you provide examples of some built-in pipes (e.g., **date**, **uppercase**, **lowercase**)?
3. What is the difference between 'pure' and 'impure' pipes? How do they affect performance?
4. How do you use multiple pipes simultaneously?
5. How do you pass parameters to a Pipe to change behavior or format data?
6. What are the advantages of using Async pipes? How do you apply them with Observable or Promise?
7. How does the process of registering a custom pipe in a module occur?
8. How do you handle complex transformations in pipes?

### Forms

1. What is the difference between Template-driven Forms and Reactive Forms?
2. What are **FormControl**, **FormGroup**, and **FormArray** in the context of Reactive Forms?
3. What are the differences in working with validation for Template-driven Forms and Reactive Forms?
4. How do you implement custom validators for forms?
5. How can you retrieve and process data from forms after submission?
6. What is two-way data binding in the context of Template-driven Forms?
7. How do you use FormBuilder to create reactive forms using convenient and shorter syntax notation?
8. How do you track the change state of forms or form controls?
9. How do you handle asynchronous validation?

### Components

1. What is `ViewEncapsulation` and what modes are available (`Emulated`, `None`, `ShadowDom`)? When would you use each?
2. What is the `host` property in `@Component` and how do you use it to bind classes, attributes, or listeners?
3. What is the difference between using `host` in the decorator vs `@HostBinding`/`@HostListener`?
4. What are `exportAs` and `providers` options in the `@Component` decorator used for?
5. What is `ng-content` and why is it needed?
6. How do you use `ng-template` for reusable components?
7. When do you use `@ContentChild` `contentChild` / `@ContentChildren` `contentChildren`?
8. What is a `ngTemplateOutlet` and how do you use it?

### Modules

1. What is a Module in Angular, and what role does it play in an application?
2. Can you explain the structure of a module and its metadata?
3. How can you separate functionality into different modules and connect them to the main application module?

### Dependency Injection

1. What are **useClass**, **useValue**, and **useFactory**? How are they used when creating providers?
2. Explain the concept of Injector and provider hierarchy.
3. What is a DI token, and how do you use it for dependency injection?
4. How do you use **@Optional**, **@Self**, and **@SkipSelf** decorators to control dependency injection and their handling?
5. How do you inject dependencies based on conditions or by different provided implementations?
6. What is a multi-provider and how do you configure it?
7. What is `forwardRef` and when do you need to use it?

---

## Project Questions

The mentor should also ask questions about the student's **personal contribution** to the project. Expect the student to:

- Describe what they worked on during the sprint
- Navigate to their code and explain how it works
- Show the running application and its features
- Explain decisions they made and challenges they faced
