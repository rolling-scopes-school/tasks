# Sprint 4 Interview — HTTP, RxJS & Testing (150 points)

## Instructions for Mentors

The interview takes **~15–20 minutes per student**. The goal is to evaluate two things:

1. **Angular knowledge** — ask any questions from each module listed below. You do not need to ask every question — pick a few from each section to get a picture of the student's understanding.
2. **Personal contribution** — check what the student has done in the project (see [Project Questions](#project-questions) below).

> **Note:** This is the final sprint. Students have studied all course topics (Sprints 1–4). The questions below focus on HTTP, RxJS, Testing, and modern Angular features, but you may also ask about earlier topics to check retention. The student should have a comprehensive understanding of Angular by this point.

### Scoring

| Level         | ~% of 150 | Points | Indicators                                                                |
| ------------- | --------- | ------ | ------------------------------------------------------------------------- |
| **Weak**      | ~20%      | ~30    | Cannot explain their code. Does not understand basic sprint concepts.     |
| **Basic**     | ~50%      | ~75    | Understands core concepts at a basic level. Struggles with details.       |
| **Good**      | ~80%      | ~120   | Confidently explains code and Angular concepts. Understands "why".        |
| **Excellent** | ~100%     | ~150   | Deep understanding, compares approaches, explains trade-offs and nuances. |

---

## Knowledge Questions

### HTTP

1. What is HttpClientModule, and why is it important in Angular applications?
2. How can you make HTTP requests using Angular's **HttpClient**?
3. Can you explain the difference between Observables and Promises in handling HTTP responses?
4. How can you handle errors during HTTP requests in Angular?
5. What are some techniques to optimize HTTP requests and handle caching considerations for Angular applications?
6. What is the purpose of **HttpInterceptor** in Angular, and how does it work?
7. In which scenarios would you consider using an interceptor for error handling in an Angular application?
8. How do you handle authentication and authorization with HTTP interceptors?

### RxJS

1. Define the concept of RxJS and its usage in Angular.
2. What are _Observable_, Observer, and Subscriptions?
3. What is the difference between Observable and Promise?
4. Can you provide examples of basic RxJS operators in Angular?
5. How do you create a Custom Observable using the new Observable method and manage the data passed into the stream?
6. What are Subject and BehaviorSubject, and how are they used in Angular?
7. How would you explain the concepts of **_Hot_** and **_Cold_** Observables?
8. How do you properly unsubscribe from an Observable?
9. What are the different approaches to state management in Angular? What are the benefits of using service-based methods versus NgRx or other state management libraries?
10. How do you handle error handling and retry logic with RxJS?
11. What is the difference between higher-order mapping operators?

### Forms

1. What is `ControlValueAccessor` and when do you need to implement it?
2. How do you create a custom form control that integrates with Angular's Reactive Forms?
3. How do you create a custom validator for template-driven forms?

### Testing

1. What types of Testing does Angular support (e.g., unit tests, integration tests, e2e tests)?
2. What are the main tools and libraries used by Angular for testing?
3. What is **TestBed**, and how is it used to set up a testing environment?
4. How do you test Angular components using **ComponentFixture** and **DebugElement**?
5. How do you test directives and pipes in Angular?
6. How do you mock and stub dependencies in tests for services?
7. How do you test forms based on templates and reactive forms?
8. What are async, **fakeAsync**, and **tick**, and how are they used when testing asynchronous code?
9. How do you ensure your tests are isolated and do not interfere with each other?

### Dependency Injection

1. How does the Angular injector hierarchy work?
2. How do you scope a service to a specific component subtree?
3. How does tree-shaking work with `providedIn: 'root'` vs explicit providers?
4. What are environment injectors and how do they differ from element injectors?

### Signals

1. What is the `resource` API and how does it simplify asynchronous data fetching with signals?
2. What is the difference between `resource` and `rxResource`?

### Components

1. How do you handle dynamic components?
2. What is `ngComponentOutlet` and when to use it?
3. What are deferrable views (`@defer`) and how do they improve performance?

---

## Project Questions

The mentor should also ask questions about the student's **personal contribution** to the project. Expect the student to:

- Describe what they worked on during the sprint
- Navigate to their code and explain how it works
- Show the running application and its features
- Explain decisions they made and challenges they faced
