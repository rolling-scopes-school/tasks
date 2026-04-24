# Angular Sprint: Sprint 3 Checkpoint

**Тема: Directives, Pipes & Forms (`@angular/core`, `@angular/forms`)**

## Зачем этот спринт

Directives и Pipes расширяют шаблон Angular: директивы добавляют поведение элементам, pipes трансформируют данные для отображения. Forms — ключевая часть большинства приложений: Angular Reactive Forms дают полный контроль над состоянием и валидацией формы. В этом спринте вы углубитесь в шаблонный слой Angular и научитесь работать с формами.

**Ключевые концепции спринта:**

- Attribute directives: `@Directive()`, `HostBinding`, `HostListener`
- Structural directives: `*ngIf`, `*ngFor` (и новый `@if`, `@for`)
- Custom pipes: `PipeTransform`, pure vs impure
- Content projection: `ng-content`, `ng-template`, `@ContentChild`
- **Reactive Forms:** `FormGroup`, `FormControl`, `FormArray`, `FormBuilder`
- Валидация: built-in, кастомные, async валидаторы
- Отображение ошибок валидации в шаблоне

**Сквозная тема — DI и Change Detection:**

В этом спринте вы впервые используете `InjectionToken` / кастомный провайдер, а также переводите компоненты на `OnPush` стратегию.

---

## Условия получения (40 баллов)

Все условия выполнены → 40 баллов, любое не выполнено → 0.

### Личные (40 баллов)

1. **Минимум 1 кастомная директива или pipe** — `@Directive()` или `@Pipe()` с осмысленным использованием в проекте. Замержено в `main`.
2. **Минимум 1 Reactive Form реализована** — с `FormGroup` и `FormControl`. Минимум 3 поля. Замержена в `main`.
3. **Валидация работает** — минимум 2 типа валидаторов (например, `required` + `minLength` или кастомный валидатор). Ошибки отображаются в шаблоне.
4. **Форма функциональна** — при submit данные обрабатываются (вывод в консоль, отправка в сервис, навигация — любое осмысленное действие).
5. **`InjectionToken` или кастомный провайдер** — `useValue`, `useFactory`, `useClass` или `useExisting` в `providers`. Замержен в `main`.
6. **Минимум 3 компонента используют `OnPush`** — с `changeDetection: ChangeDetectionStrategy.OnPush`. Замержены в `main`.
7. **Минимум 2 записи в дневнике за Sprint 3** — замержены в `main`.

---

## Что изучить

### Кастомная attribute-директива

- Что такое `@Directive()` и как создать кастомную директиву
- Как использовать `HostListener` для обработки событий DOM
- Как использовать `ElementRef` для доступа к DOM-элементу
- Signal-based inputs в директивах через `input()`

### Кастомный pipe

- Что такое `@Pipe()` и как реализовать `PipeTransform`
- Разница между pure и impure pipe
- Когда использовать pipe вместо метода компонента

### Reactive Forms

- Как создать `FormGroup` с `FormBuilder`
- `FormControl` — чтение значения, статус (`valid`, `dirty`, `touched`)
- Встроенные валидаторы: `required`, `minLength`, `email`, `pattern`
- Как отобразить ошибки валидации в шаблоне

### Кастомный валидатор

- Как создать синхронный валидатор (`ValidatorFn`)
- Когда использовать async валидатор
- Как применить валидатор на уровне группы (`FormGroup`)

### Content Projection

- Что такое `ng-content` и зачем он нужен
- Как использовать `ng-template` для переиспользуемых компонентов
- Когда применять `@ContentChild` / `@ContentChildren`

### Change Detection — OnPush

- Стратегии: `Default` vs `OnPush`
- Когда Angular перепроверяет `OnPush` компонент
- Как signals и `AsyncPipe` связаны с OnPush
- `markForCheck()` vs `detectChanges()`

### Dependency Injection — углубление

- `InjectionToken` для не-классовых зависимостей
- Провайдеры: `useClass`, `useValue`, `useFactory`, `useExisting`
- Иерархия инжекторов: root → component

---

## Вопросы для самопроверки

1. Чем attribute directive отличается от structural directive?
2. Что такое `pure` pipe и чем он отличается от `impure`?
3. В чём разница между Template-driven и Reactive Forms?
4. Как работает валидация в Reactive Forms? Чем sync валидатор отличается от async?
5. Зачем нужен `InjectionToken`?
6. В чём разница между `Default` и `OnPush` стратегиями Change Detection?

---

## FAQ

_Вопрос:_ Обязательно ли делать кастомную директиву И pipe?
_Ответ:_ Нет, достаточно одного из двух.

_Вопрос:_ Обязательно ли использовать Reactive Forms?
_Ответ:_ Да, минимум одна форма должна быть реактивной. Template-driven можно использовать дополнительно.

_Вопрос:_ Нужен ли кастомный валидатор?
_Ответ:_ Не обязательно для чекпоинта, но рекомендуется — покажет глубину понимания.

---

## Сабмит

Отдельный сабмит не требуется. Оценка выставляется **автоматически** после дедлайна.
