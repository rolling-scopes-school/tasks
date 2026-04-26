# Angular Sprint: Sprint 2 Checkpoint

**Тема: Routing & Signals (`@angular/router`, `@angular/core`)**

## Зачем этот спринт

Routing — основа навигации в SPA: без него невозможно создать полноценное приложение. Signals — фундамент реактивного состояния в современном Angular. В этом спринте вы настроите маршрутизацию, познакомитесь с lazy loading и guards, а также научитесь строить компоненты вокруг signal-based подхода.

**Ключевые концепции спринта:**

- Конфигурация маршрутов: `Routes`, `provideRouter()`
- `RouterLink`, `RouterOutlet`, `RouterLinkActive`
- Lazy loading через `loadComponent` / `loadChildren`
- Route Guards: `canActivate`, `canDeactivate`
- Параметры маршрута: `ActivatedRoute`, `paramMap`
- `signal()`, `computed()`, `effect()`, `linkedSignal()`
- `input()`, `output()`, `model()` — signal-based component API
- Signals и Change Detection

**Сквозная тема — Dependency Injection:**

Routing невозможен без сервисов. В этом спринте вы впервые создадите полноценные сервисы и познакомитесь с DI-системой Angular.

---

## Условия получения (40 баллов)

Все условия выполнены → 40 баллов, любое не выполнено → 0.

### Командные (+20)

1. **Приложение задеплоено** — в README есть ссылка на работающий deploy (HTTP 200). Даже если это скелет — это уже деплой.
2. **GitHub Actions workflow существует** — CI настроен (хотя бы линтер).
3. **Минимум 6 issues в GitHub** — для планирования работы.
4. **Линтер настроен** — ESLint конфигурация в репозитории.

### Личные (+20)

1. **Минимум 3 маршрута настроены** — приложение имеет навигацию между страницами. Замержено в `main`.
2. **Lazy loading реализован** — хотя бы 1 маршрут загружается лениво через `loadComponent` или `loadChildren`.
3. **Хотя бы 1 Route Guard реализован** — `canActivate` или `canDeactivate`. Функциональный или class-based.
4. **Signals используются минимум в 2 компонентах** — `signal()` и `computed()` или `effect()`. Замержены в `main`.
5. **Минимум 2 сервиса с `@Injectable()`** — инжектируются через `inject()`. Замержены в `main`.
6. **Минимум 1 запись в дневнике за Sprint 2** — замержены в `main`.

---

## Что изучить

### Конфигурация маршрутов (standalone)

- Как объявить массив `Routes` и зарегистрировать его через `provideRouter()`
- Redirect-маршрут и `pathMatch: 'full'`
- Lazy loading через `loadComponent` и `loadChildren`
- Вложенные маршруты (children)
- Wildcard-маршрут `**` для страницы 404

### Функциональный Guard (Angular 15+)

- Как создать `CanActivateFn` без класса
- Как использовать `inject()` внутри guard-функции
- Как вернуть `UrlTree` для редиректа вместо `boolean`
- Чем функциональный guard лучше class-based в современном Angular

### Signals

- Что такое `signal()` и зачем он нужен
- Как читать и обновлять signal state
- Когда signal удобнее обычного поля класса

### Computed и Effect

- Когда использовать `computed()`
- Когда использовать `effect()`, а когда не стоит
- Как избегать лишних side effects

### Linked Signal

- Что такое `linkedSignal()`
- Когда использовать связанное состояние вместо обычного `computed()`
- Как `linkedSignal()` помогает синхронизировать зависимые значения

### Signal-based component API

- Передача данных через `input()`
- Отправка событий через `output()`
- Когда использовать `model()`
- Чем signal-based API отличается от `@Input()` / `@Output()`
- Как signals связаны с Change Detection

### Attribute-директивы

- Что такое attribute directive и чем она отличается от structural
- Как создать `@Directive()` standalone
- Что такое `@HostListener`
- Что такое `@HostBinding`
- Что такое `ElementRef`
- Signal-based inputs в директивах через `input()`

### Pipes

- Что такое `@Pipe()` и как реализовать `PipeTransform`
- Разница между pure и impure pipe
- Встроенные pipes: `DatePipe`, `CurrencyPipe`, `AsyncPipe`, `JsonPipe`
- Когда создавать кастомный pipe вместо метода компонента

### Dependency Injection — основы

- `@Injectable()` и `providedIn: 'root'`
- `inject()` — современный способ получения зависимостей
- Когда сервис — singleton, а когда нет

---

## Вопросы для самопроверки

1. В чём разница между `loadComponent` и `loadChildren`?
2. Зачем нужен `pathMatch: 'full'` для redirect-маршрутов?
3. Чем функциональный guard отличается от class-based guard?
4. Что такое `signal()` и чем он отличается от обычного поля класса?
5. Когда использовать `computed()`, а когда `effect()`?
6. Чем `providedIn: 'root'` отличается от указания сервиса в `providers` компонента?

---

## FAQ

_Вопрос:_ Обязательно ли использовать signals уже на этом спринте?
_Ответ:_ Да. Signals — одна из двух основных тем Sprint 2. Нужны реальные примеры `signal()` и signal-based API в проекте.

_Вопрос:_ Деплой — обязательно Vercel/Netlify?
_Ответ:_ Любая платформа. Главное — ссылка в README отвечает HTTP 200.

_Вопрос:_ Можно ли использовать class-based guards?
_Ответ:_ Можно, но функциональные guards рекомендуются в Angular 15+.

---

## Сабмит

Отдельный сабмит не требуется — репозиторий уже зарегистрирован через форму на Sprint 1. Оценка выставляется **автоматически** после дедлайна.
