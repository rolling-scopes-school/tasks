# Angular Sprint: Sprint 4 Checkpoint

**Тема: HTTP, RxJS & Testing (`@angular/common/http`, `rxjs`, `@angular/core/testing`)**

## Зачем этот спринт

Большинство Angular-приложений взаимодействуют с бэкендом через HTTP. Angular `HttpClient` возвращает Observable, поэтому знание базовых RxJS-операторов обязательно. Параллельно вы напишете первые unit-тесты — без тестов невозможно поддерживать приложение в долгосрочной перспективе. Этот спринт — финальный шаг к production-ready приложению.

**Ключевые концепции спринта:**

- `HttpClient`: GET, POST, PUT, DELETE
- HTTP Interceptors (functional и class-based)
- Обработка ошибок: `catchError`, retry strategies
- RxJS операторы: `map`, `switchMap`, `debounceTime`, `distinctUntilChanged`
- `takeUntilDestroyed` — автоматическая отписка
- Error Handling: 404 page, loading state, error state
- `TestBed` — конфигурация тестового окружения
- Mocking сервисов через `providers` и `jasmine.createSpyObj`
- `HttpClientTestingModule` / `provideHttpClientTesting()`
- Code Review — разбор кода тиммейта

---

## Условия получения (40 баллов)

Все условия выполнены → 40 баллов, любое не выполнено → 0.

### Командные (+20)

1. **Страница 404** — при переходе на несуществующий URL отображается осмысленная страница с навигацией назад.
2. **Loading state** — при загрузке данных отображается индикатор загрузки (спиннер, skeleton, текст).
3. **Обработка ошибок API** — API-запросы обёрнуты в обработку ошибок. При ошибке сети пользователь видит понятное сообщение.
4. **Видео-доказательство** — короткое видео (~1 мин), демонстрирующее 404, loading и error state. Ссылка на видео в README.

### Личные (+20)

1. **HttpClient используется** — минимум 2 HTTP-запроса (GET + POST/PUT/DELETE) к реальному или mock API. Замержено в `main`.
2. **Минимум 1 HTTP Interceptor реализован** — для auth token, logging, error handling или любой другой цели.
3. **Минимум 5 тестов написаны лично вами** — файлы `*.spec.ts`. Суммарно ≥5 тестовых кейсов (`it`). Авторство определяется по коммитам (`git blame`).
4. **Code Review** — **Вариант А:** ≥3 содержательных комментария в PR команды. **Вариант Б:** запись в дневнике о том, как вы изучали код другого участника.
5. **Минимум 1 запись в дневнике за Sprint 4** — замержены в `main`.

> **Дневник:** без дневника — 0 за весь чекпоинт.

---

## Что изучить

### HttpClient — базовые запросы

- Как подключить `HttpClient` через `provideHttpClient()`
- GET, POST, PUT, DELETE: как типизировать ответ `get<T>()`, `post<T>()`
- Почему `HttpClient` возвращает `Observable`, а не `Promise`
- Как обработать ошибки через `catchError`

### Functional HTTP Interceptor (Angular 15+)

- Что такое `HttpInterceptorFn` и чем она отличается от class-based
- Как клонировать `HttpRequest` и добавить заголовок `Authorization`
- Как регистрировать interceptor через `withInterceptors()` в `provideHttpClient()`
- Порядок вызова interceptors в цепочке

### RxJS — ключевые операторы

- `map` — преобразование значений в потоке
- `switchMap` — отмена предыдущего запроса при новом (поиск)
- `debounceTime` + `distinctUntilChanged` — таймер и фильтр дубликатов для live-поиска
- `catchError` — обработка ошибок внутри потока
- `takeUntilDestroyed` — автоматическая отписка при уничтожении компонента
- Чем `switchMap` отличается от `mergeMap` и `concatMap`

### Тестирование сервиса

- Как настроить `TestBed` для тестирования сервиса
- `HttpClientTestingModule` / `provideHttpClientTesting()` — интерсепция HTTP-запросов в тестах
- `HttpTestingController.expectOne()` и `.flush()` — имитация ответа сервера
- Почему важно вызывать `httpMock.verify()` в `afterEach`

### Тестирование компонента с mock-сервисом

- Как создать заменитель сервиса через `jasmine.createSpyObj`
- Как подменить сервис в `providers` через `useValue`
- `fixture.detectChanges()` — когда вызывать и зачем
- Как проверять DOM-вывод компонента через `fixture.nativeElement`

---

## Вопросы для самопроверки

1. Чем `switchMap` отличается от `mergeMap` и `concatMap`?
2. Как работают HTTP Interceptors? В каком порядке они вызываются?
3. Как правильно отписываться от Observable в Angular?
4. Что такое `TestBed` и зачем он нужен?
5. Как замокать сервис в тесте компонента?
6. Чем `fakeAsync` + `tick` отличается от `waitForAsync`?

---

## FAQ

_Вопрос:_ Можно ли использовать mock-данные вместо реального API?
_Ответ:_ Да. JSON Server, in-memory-web-api или хардкод с задержкой через `delay()` — всё допустимо.

_Вопрос:_ 5 тестов = 5 файлов?
_Ответ:_ Нет. 5 тестовых кейсов (`it`). Все могут быть в одном файле.

_Вопрос:_ Можно ли использовать Jest вместо Jasmine?
_Ответ:_ Да. Jasmine, Jest, Vitest — любой фреймворк.

---

## Сабмит

Отдельный сабмит не требуется. Оценка выставляется **автоматически** после дедлайна.
