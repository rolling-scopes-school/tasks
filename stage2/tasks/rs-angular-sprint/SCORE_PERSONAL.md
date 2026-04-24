# Personal Score (400 баллов)

Личная оценка каждого студента. Баллы собираются поэтапно:

| #   | Этап              | Баллы | Когда           | Критерии                                                             |
| --- | ----------------- | ----- | --------------- | -------------------------------------------------------------------- |
| 1   | Development Diary | 100   | после Sprint 4  | [DEVELOPMENT_DIARY.md](./DEVELOPMENT_DIARY.md)                       |
| 2   | Personal Features | 250   | self-assessment | [ниже](#personal-features-250-баллов)                                |
| 3   | Solo Presentation | 50    | презентация     | [PRESENTATION.md](./PRESENTATION.md#часть-2-соло-20-мин-на-студента) |

**Когда начисляется оценка:** итоговый балл по Personal Score выставляется после финальной презентации при наличии дневника разработки.

---

## Personal Features (250 баллов)

В self-assessment вы заявляете всё, что сделали лично. Общая сумма может превысить 250, но в зачёт идёт максимум **250 баллов**.

| Категория                    | Фича                                                                                                              | Баллы         |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------- |
| **My Components**            | **Complex Component:** Сложный интерактивный компонент (Dashboard, Form Wizard, Dynamic Table, Editor)            | +25 за каждый |
|                              | **Rich UI Screen:** Экран со сложной логикой и состоянием (Catalog с фильтрами, Profile, Admin Panel)             | +20 за каждый |
| **DI & Architecture**        | **Custom Providers:** Использование `useFactory`/`useValue`/`useClass` с `InjectionToken`                         | +15           |
|                              | **Hierarchical DI:** Демонстрация иерархии инжекторов (transient vs singleton, component-level providers)         | +15           |
|                              | **Design Patterns:** Явное применение паттернов (Strategy через DI, Factory через `useFactory`, Facade service)   | +10           |
| **Change Detection**         | **OnPush Strategy:** Минимум 3 компонента с `ChangeDetectionStrategy.OnPush` и корректной работой                 | +15           |
|                              | **Signals:** Использование Angular Signals (`signal`, `computed`, `effect`) для реактивного состояния             | +15           |
|                              | **Performance Optimization:** Профилирование и оптимизация CD (zone.js escape, trackBy, detach)                   | +10           |
| **Forms**                    | **Reactive Form (Basic):** Форма с `FormGroup`, валидацией и отображением ошибок                                  | +10           |
|                              | **Reactive Form (Advanced):** `FormArray`, динамические поля, кастомные валидаторы                                | +15           |
|                              | **Async Validators:** Асинхронная валидация (проверка уникальности, серверная валидация)                          | +10           |
| **Routing**                  | **Lazy Loading:** Feature modules/components с lazy loading                                                       | +10           |
|                              | **Route Guards:** `canActivate`, `canDeactivate` с осмысленной логикой                                            | +10           |
|                              | **Resolvers:** Предзагрузка данных для маршрутов                                                                  | +10           |
| **HTTP & RxJS**              | **HTTP Service Layer:** Выделенный API-слой с `HttpClient`, типизация ответов                                     | +10           |
|                              | **HTTP Interceptors:** Auth interceptor, error interceptor, logging interceptor                                   | +15           |
|                              | **RxJS Advanced:** Осмысленное использование `switchMap`, `combineLatest`, `debounceTime`, custom operators       | +15           |
| **Directives & Pipes**       | **Custom Directive:** Кастомная атрибутная или структурная директива                                              | +10           |
|                              | **Custom Pipe:** Кастомный pipe (pure) с обоснованием применения                                                  | +10           |
|                              | **Content Projection:** Использование `ng-content`, `ng-template` для переиспользуемых компонентов                | +10           |
| **State Management**         | **NgRx / Signal Store:** Использование NgRx или Signal Store для глобального состояния                            | +20           |
|                              | **Service-based State:** Реактивное состояние через `BehaviorSubject` или Signals в сервисах                      | +10           |
| **Testing**                  | **Unit Tests (Basic):** Покрытие тестами 20%+ личного кода                                                        | +10           |
|                              | **Unit Tests (Full):** Покрытие тестами 50%+ личного кода                                                         | +10           |
|                              | **Component Tests:** Тестирование компонентов с `TestBed`, моками сервисов и DOM assertions                       | +10           |
| **UI & Interaction**         | **Theme Switcher:** Переключение тем (Light/Dark) через CSS variables                                             | +10           |
|                              | **i18n:** Локализация интерфейса (минимум 2 языка)                                                                | +10           |
|                              | **Accessibility (a11y):** Оптимизация доступности (aria-labels, keyboard navigation)                              | +10           |
|                              | **Responsive:** Адаптация вёрстки под мобильные устройства (от 320px)                                             | +5            |
|                              | **Advanced Animations:** Angular Animations API (использование `animate.enter` и `animate.leave` триггеров)       | +10           |
| **Backend & Auth**           | **BaaS Auth:** Авторизация через Firebase/Supabase Auth                                                           | +15           |
|                              | **Custom Auth:** JWT + interceptor + guards без BaaS                                                              | +20           |
|                              | **Custom Backend:** Собственный бэкенд (NestJS) с БД                                                              | +40           |
| **DevOps**                   | **Auto-deploy:** Настройка CI/CD (GitHub Actions → Vercel/Netlify/Firebase Hosting)                               | +5            |
|                              | **Docker:** Контейнеризация проекта                                                                               | +30           |

> **Правило подсчёта.** Строки с пометкой «за каждый» начисляются за каждый экземпляр. Остальные строки — **один раз** на студента.

---

## Penalties

- **(-1000000000000000000%)** Не используется Angular.
- **(-50%)** `strict: false` в `tsconfig.json`.
