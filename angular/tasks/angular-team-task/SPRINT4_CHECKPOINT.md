# Angular Sprint: Sprint 4 Checkpoint

**Topic: HTTP, RxJS & Testing (`@angular/common/http`, `rxjs`, `@angular/core/testing`)**

## Why This Sprint

Most Angular applications communicate with a backend via HTTP. Angular's `HttpClient` returns Observables, so knowledge of basic RxJS operators is essential. At the same time you will write your first unit tests — without tests, maintaining an application long-term is impossible. This sprint is the final step toward a production-ready application.

**Key concepts of this sprint:**

- `HttpClient`: GET, POST, PUT, DELETE
- HTTP Interceptors (functional and class-based)
- Error handling: `catchError`, retry strategies
- RxJS operators: `map`, `switchMap`, `debounceTime`, `distinctUntilChanged`
- `takeUntilDestroyed` — automatic unsubscription
- Error Handling: 404 page, loading state, error state
- `TestBed` — test environment configuration
- Mocking services via `providers` and `jasmine.createSpyObj`
- `HttpClientTestingModule` / `provideHttpClientTesting()`
- Code Review — reviewing a teammate's code

---

## Requirements (40 points)

All requirements met → 40 points, any requirement not met → 0.

### Team (+20)

1. **404 page** — navigating to a non-existent URL displays a meaningful page with a way to navigate back.
2. **Loading state** — a loading indicator (spinner, skeleton, text) is shown while data is being fetched.
3. **API error handling** — API requests are wrapped in error handling. On a network error the user sees a clear message.
4. **Video proof** — a short video (~1 min) demonstrating the 404, loading, and error states. Video link in the README.

### Individual (+20)

1. **HttpClient is used** — at least 2 HTTP requests (GET + POST/PUT/DELETE) to a real or mock API. Merged into `main`.
2. **At least 1 HTTP Interceptor implemented** — for auth token, logging, error handling, or any other purpose.
3. **At least 5 tests written personally by you** — `*.spec.ts` files. Total ≥5 test cases (`it`). Authorship is determined by commits (`git blame`).
4. **Code Review** — **Option A:** ≥3 meaningful comments in team PRs. **Option B:** a diary entry about how you studied another team member's code.
5. **At least 1 diary entry for Sprint 4** — merged into `main`.

> **Diary:** no diary — 0 for the entire checkpoint.

---

## What to Study

### HttpClient — Basic Requests

- How to set up `HttpClient` via `provideHttpClient()`
- GET, POST, PUT, DELETE: how to type the response `get<T>()`, `post<T>()`
- Why `HttpClient` returns an `Observable` instead of a `Promise`
- How to handle errors with `catchError`

### Functional HTTP Interceptor (Angular 15+)

- What `HttpInterceptorFn` is and how it differs from class-based
- How to clone an `HttpRequest` and add an `Authorization` header
- How to register an interceptor via `withInterceptors()` in `provideHttpClient()`
- The order in which interceptors are called in the chain

### RxJS — Key Operators

- `map` — transforming values in a stream
- `switchMap` — cancelling the previous request on a new one (search)
- `debounceTime` + `distinctUntilChanged` — timer and duplicate filter for live search
- `catchError` — handling errors within a stream
- `takeUntilDestroyed` — automatic unsubscription on component destruction
- How `switchMap` differs from `mergeMap` and `concatMap`

### Testing a Service

- How to configure `TestBed` for testing a service
- `HttpClientTestingModule` / `provideHttpClientTesting()` — intercepting HTTP requests in tests
- `HttpTestingController.expectOne()` and `.flush()` — simulating server responses
- Why calling `httpMock.verify()` in `afterEach` is important

### Testing a Component with a Mock Service

- How to create a service substitute via `jasmine.createSpyObj`
- How to replace a service in `providers` via `useValue`
- `fixture.detectChanges()` — when to call and why
- How to check a component's DOM output via `fixture.nativeElement`

---

## Self-Check Questions

1. How does `switchMap` differ from `mergeMap` and `concatMap`?
2. How do HTTP Interceptors work? In what order are they called?
3. How do you properly unsubscribe from an Observable in Angular?
4. What is `TestBed` and why is it needed?
5. How do you mock a service in a component test?
6. How does `fakeAsync` + `tick` differ from `waitForAsync`?

---

## FAQ

_Q:_ Can I use mock data instead of a real API?
_A:_ Yes. JSON Server, in-memory-web-api, or hardcoded data with a `delay()` — all are acceptable.

_Q:_ 5 tests = 5 files?
_A:_ No. 5 test cases (`it`). They can all be in one file.

_Q:_ Can I use Jest instead of Jasmine?
_A:_ Yes. Jasmine, Jest, Vitest — any framework.

---

## Submission

No separate submission is required. The score is assigned **automatically** after the deadline.
