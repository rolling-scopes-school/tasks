# Project Options

Each team chooses **one** of three projects. All three cover the same Angular concepts, have the same complexity, and differ only in the domain and API.

The team locks in their choice in the repository README during Sprint 1. **Changing the project after Sprint 1 is not allowed.**

---

## Three Projects

| Project         | Description                                     | API                                                    | Details                                  |
| --------------- | ----------------------------------------------- | ------------------------------------------------------ | ---------------------------------------- |
| **CryptoTrade** | Cryptocurrency analysis and trading application | [Binance Testnet](https://testnet.binance.vision/)     | [PROJECT_CRYPTO.md](./PROJECT_CRYPTO.md) |
| **ShopFront**   | Online store with catalog, cart, and checkout   | [commercetools](https://docs.commercetools.com/api)    | [PROJECT_SHOP.md](./PROJECT_SHOP.md)     |
| **MusicFlow**   | Music streaming service with search and player  | [Jamendo API](https://developer.jamendo.com/v3.0/docs) | [PROJECT_MUSIC.md](./PROJECT_MUSIC.md)   |

---

## How Sprints Map to the Project

| Sprint          | Topic                     | What You Do in the Project                                                                       |
| --------------- | ------------------------- | ------------------------------------------------------------------------------------------------ |
| **1** (1 week)  | Components                | Basic UI components: cards, lists, header, footer.                                               |
| **2** (2 weeks) | Routing & Signals         | Pages, navigation, lazy loading, guards. signal() for key state. Two services.                   |
| **3** (2 weeks) | Directives, Pipes & Forms | Forms with validation, custom directive and pipe. InjectionToken. OnPush. "Beyond API" features. |
| **4** (2 weeks) | HTTP, RxJS & Testing      | HTTP client, interceptor, RxJS operators, 5+ tests, code review.                                 |

---

## What All Projects Have in Common

Regardless of the chosen project, by the end of the course each team demonstrates:

- **5+ pages** with lazy loading and guards
- **Signals** for key application state
- **Reactive Forms** with validation (built-in and custom)
- **Custom directives** and **custom pipes**
- **DI:** `InjectionToken` for configuration, services with `@Injectable()`
- **Change Detection:** `provideZoneChangeDetection()` in the application config
- **HTTP:** connection to a real API via `HttpClient`
- **Interceptors:** authorization + error handling
- **RxJS:** `debounceTime`, `switchMap`, `takeUntilDestroyed`, etc.
- **Testing:** at least 5 tests per team member
- **NgRx SignalStore** (`@ngrx/signals`): global state management via `signalStore()`
- **Beyond API:** at least 1 feature not provided by the API (form + local storage)

> All three projects are equally valid for scoring.
