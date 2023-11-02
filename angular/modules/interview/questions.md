# Angular interview questions

## General:

1. What is Angular and what is it used for?
2. What is Angular CLI and what are its main features?
3. What is a module in Angular, and what is its role in an application?
4. What is inter-component communication in Angular? Describe different ways of sharing data between components (e.g., @Input/@Output, services with Observables, etc.).

## Components:

1. What are `Components` in Angular, and how are they the foundation of an application structure?
2. How do you configure a component's selector, template, and style using the `@Component` decorator?
3. How would you explain the component lifecycle and its main methods (e.g., ngOnInit, ngOnChanges, ngOnDestroy)?
4. How does two-way data binding work in Angular, and how does it differ from one-way data binding?
5. Standalone components.
6. What are ViewChild and ViewChildren?
7. What is the difference between ElementRef and Renderer2?
8. How do HostBinding and HostListener decorators work?

## Directives:

1. What are `Directives` in Angular, and what are they used for?
2. What is the difference between structural and attribute directives? Please provide examples.
3. How do you create and use a custom directive? Explain the use of the `@Directive` decorator.
4. Explain **ngIf** and **ngFor** and their usage.
5. What is the difference between **\*ngIf** and **[hidden]**?
6. What is the purpose of **ngSwitch**, **ngSwitchCase**, and **ngSwitchDefault**, and how do you use them?
7. What is the difference between **ngStyle** and **ngClass**?
8. What is **ngContainer** and what is it used for? Provide an example.
9. How do you create custom structural directives using **ng-template**?

## Pipe:

1. What is a `Pipe`, and what is its purpose in Angular?
2. Can you provide examples of some built-in pipes (e.g., **date**, **uppercase**, **lowercase**)?
3. What is the difference between 'pure' and 'impure' pipes. How do they affect performance?
4. How do you use multiple pipes simultaneously?
5. How do you pass parameters to a `Pipe` to change behavior or format data?
6. What are the advantages of using `Async pipes`. How do you apply them with Observable or Promise?
7. How does the process of registering a custom pipe in a module occur?

## Routing:

1. What is `Routing` in Angular, and what is it used for?
2. How do you configure a basic routing system using **RouterModule** and **router-outlet**?
3. How do you use route parameters and queryParams to pass and retrieve data in routes?
4. Can you provide an example of using child routes?
5. What are the preloading strategies, and how do you use them?
6. How do you use **Route Guards** (e.g., **CanActivate** and **CanDeactivate**) to protect routes?
7. What is **ActivatedRoute**, and how do you apply it to get information about the current route?

## RxJS:

1. Define the concept of `RxJS` and its usage in Angular.
2. What are _Observable_, Observer, and Subscriptions?
3. What is the difference between Observable and Promise?
4. Can you provide examples of basic RxJS operators in Angular (e.g., map, filter, catchError, switchMap)?
5. How do you create a Custom Observable using the new Observable method and manage the data passed into the stream?
6. What are Subject and BehaviorSubject, and how are they used in Angular?
7. How would you explain the concepts of **_Hot_** and **_Cold_** Observables?
8. How do you properly unsubscribe from an Observable?

## Dependency Injection:

1. What is `Dependency Injection`, and what are its objectives in Angular?
2. How do you create a service and use it in components for dependency injection?
3. What is the difference between _providedIn: 'root'_, _providedIn: 'any'_, and registering a provider in the "providers" section of NgModule?
4. What are **useClass**, **useValue**, and **useFactory**? How are they used when creating providers?
5. Explain the concept of Injector and provider hierarchy.
6. What is a DI token, and how do you use it for dependency injection?
7. How do you use **@Optional**, **@Self**, and **@SkipSelf** decorators to control dependency injection and their handling?
8. How do you inject dependencies based on conditions or by different provided implementations?

## Forms:

1. What is the difference between `Template-driven Forms` and `Reactive Forms`?
2. What are **FormControl**, **FormGroup**, and **FormArray** in the context of Reactive Forms?
3. What are the differences in working with validation for Template-driven Forms and Reactive Forms?
4. How do you implement custom validators for forms?
5. How can you retrieve and process data from forms after submission?
6. What is two-way data binding in the context of Template-driven Forms?
7. How do you use FormBuilder to create reactive forms using convenient and shorter syntax notation?
8. How do you track the change state of forms or form controls (e.g., _touched_, _dirty_)?

## Lazy Loading:

1. What is `Lazy loading`, and what is its purpose in Angular applications?
2. How do you configure lazy loading for a specific module?
3. What changes to the routing system are necessary to support lazy loading?
4. What are the advantages of using lazy loading in your application?
5. What is Preload strategy, and what are the main strategies used for preloading modules (**NoPreloading** or **PreloadAllModules**)?
6. How do you use PreloadingStrategy with Angular Router to organize preloading of data?
7. What are the disadvantages of lazy loading?

## Modules:

1. What is a `Module` in Angular, and what role does it play in an application?
2. Can you explain the structure of a module and its metadata?
3. How can you separate functionality into different modules and connect them to the main application module?

## HTTP:

1. What is `HttpClientModule`, and why is it important in Angular applications?
2. How can you make HTTP requests using Angular's **HttpClient**?
3. Can you explain the difference between Observables and Promises in handling HTTP responses?
4. How can you handle errors during HTTP requests in Angular?
5. What are some techniques to optimize HTTP requests and handle caching considerations for Angular applications?
6. What is the purpose of **HttpInterceptor** in Angular, and how does it work?
7. n which scenarios would you consider using an interceptor for error handling in an Angular application?

## Tests (Testing):

1. What types of `Testing` does Angular support (e.g., unit tests, integration tests, e2e tests)?
2. What are the main tools and libraries used by Angular for testing (**Jasmine**, **Karma**, and **Protractor**)?
3. What is **TestBed**, and how is it used to set up a testing environment?
4. How do you test Angular components using **ComponentFixture** and **DebugElement**?
5. How do you test directives and pipes in Angular?
6. How do you mock (mock) and stub (stub) dependencies in tests for services?
7. How do you test forms based on templates and reactive forms?
8. What are async, **fakeAsync**, and **tick**, and how are they used when testing asynchronous code?
