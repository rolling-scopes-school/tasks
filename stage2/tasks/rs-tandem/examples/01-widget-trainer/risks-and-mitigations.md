# Risks & Mitigations: Widget Trainer

Этот документ описывает типичные риски при разработке Widget Trainer и стратегии их минимизации.

## Bus Factor

### Риск

План рассчитан на идеальную работу 3 человек. Статистика показывает, что к финалу часто кто-то "отваливается" или заболевает.

### Митигация

1. **Парное владение кодом** — каждый компонент должны понимать минимум 2 человека
2. **Документация в коде** — JSDoc комментарии для сложной логики
3. **Code Review** — все PR проходят через ревью
4. **Weekly demos** — каждый показывает свой прогресс команде

### Сценарии

| Кто выбыл    | На какой неделе | Что делать                                      |
| ------------ | --------------- | ----------------------------------------------- |
| Steve (Lead) | 1-2             | Alex берет Auth, Ender — Dashboard              |
| Steve        | 3-5             | Сократить scope: убрать i18n, theme switcher    |
| Alex         | 1-2             | Steve берет Widget Engine (простой вариант)     |
| Alex         | 3-5             | Оставить только Quiz + True/False виджеты       |
| Ender        | 1-2             | Alex берет Async Sorter, Memory Game отменяется |
| Ender        | 3-5             | Async Sorter без Touch API и A11y               |

---

## Cut Scope Strategy (MoSCoW)

Заранее определите приоритеты. Если не успеваете — режьте снизу.

### Must Have (без этого не сдать)

- [ ] Auth (Login/Register)
- [ ] Dashboard (базовый — прогресс, история)
- [ ] Library (список тем)
- [ ] Widget Engine (Quiz, True/False минимум)
- [ ] 1 сложный виджет (Async Sorter ИЛИ Memory Game)
- [ ] Unit Tests 20%+
- [ ] E2E Tests (3 сценария)
- [ ] README с описанием
- [ ] Deployment

### Should Have (нужно для хороших баллов)

- [ ] 2-й сложный виджет
- [ ] Code Completion Widget
- [ ] Theme Switcher
- [ ] Responsive design
- [ ] i18n (2 языка)
- [ ] Empty States
- [ ] 404 Page
- [ ] Protected Routes
- [ ] Firestore Security Rules

### Could Have (бонусы)

- [ ] A11y для D&D (+10 баллов)
- [ ] Unit Tests 50%+
- [ ] Audio API
- [ ] Анимации успеха/ошибки
- [ ] Code Ordering Widget

### Won't Have (откладываем)

- AI интеграция
- Realtime multiplayer
- 3D визуализации
- OAuth (Google/GitHub)
- PWA / Offline mode

### Правило 5-й недели

> Если к началу 5-й недели E2E тесты не запускаются — примените Cut Scope. Лучше сдать 70% в идеальном состоянии, чем 100% с багами.

---

## TypeScript "Gymnastics"

### Риск

Написать типизацию для универсального Widget Engine, который принимает _разные_ JSON схемы, используя discriminated unions и generics — **очень сложно**.

Типичная ошибка: `Type 'string' is not assignable to type 'never'`.

### Митигация

1. **Начните с простого** — сначала работающий код, потом типизация
2. **Используйте Discriminated Unions** — поле `type` как дискриминатор
3. **Exhaustive check** — функция `assertNever` для проверки всех случаев
4. **Не используйте `as any`** — это путь в никуда

### Пример правильной типизации

```typescript
// Discriminated Union
type Widget =
  | { type: "quiz"; payload: QuizPayload }
  | { type: "true-false"; payload: TrueFalsePayload }
  | { type: "async-sorter"; payload: AsyncSorterPayload };

// Exhaustive check
function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${x}`);
}

function processWidget(widget: Widget) {
  switch (widget.type) {
    case "quiz":
      return handleQuiz(widget.payload);
    case "true-false":
      return handleTrueFalse(widget.payload);
    case "async-sorter":
      return handleAsyncSorter(widget.payload);
    default:
      return assertNever(widget); // TS ругается, если не все case покрыты
  }
}
```

### Время на борьбу с TS

Закладывайте **+3-5 часов** на решение проблем типизации в Widget Engine.

---

## Drag & Drop на Mobile

### Риск

Реализация Drag & Drop, который корректно работает на мобильных устройствах (Touch API), требует гораздо больше времени, чем кажется.

### Проблемы

| Проблема          | Описание                            |
| ----------------- | ----------------------------------- |
| Scroll конфликт   | Страница скроллится вместо drag     |
| 300ms delay       | Браузер ждет double-tap             |
| Нет hover         | Невозможно показать preview         |
| Мелкие элементы   | Сложно попасть пальцем              |
| Разные устройства | iOS и Android ведут себя по-разному |

### Митигация

1. **Pointer Events API** — унифицированный API для mouse и touch
2. **CSS touch-action: manipulation** — убирает 300ms delay
3. **Минимум 44x44px** — размер touch target
4. **Тестирование на реальных устройствах** — не только эмулятор

### Код

```css
.drag-block {
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  min-width: 44px;
  min-height: 44px;
}
```

```typescript
element.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault(); // Блокируем scroll
    updatePosition(e.touches[0]);
  },
  { passive: false },
);
```

### Время

Закладывайте **+4-8 часов** сверх базового D&D на мобильную версию.

---

## CI/CD в конце = Сюрпризы

### Риск

Если настраивать деплой только на 6-й неделе, вы столкнетесь с проблемами:

- CORS ошибки
- Различия localhost vs prod (HTTPS, Mixed Content)
- Роутинг на SPA не работает
- Environment variables не подхватываются

### Митигация

**Настройте CI/CD в первый день.** Пусть там будет только "Hello World", но пайплайн должен работать.

### Чеклист неделя 1

- [ ] Репозиторий создан
- [ ] Vercel/Netlify подключен
- [ ] Auto-deploy на push в main
- [ ] "Hello World" открывается по URL
- [ ] Проверен HTTPS

---

## Mock vs Real Mode рассинхрон

### Риск

Вы поддерживаете два источника данных:

- Mock Mode: JSON файлы для разработки
- Real Mode: Firebase/Firestore

Если вы меняете структуру данных, нужно обновить оба места. Тесты (на моках) проходят, а реальное приложение падает.

### Митигация

1. **Единые типы** — интерфейсы в `data-contracts.md` используются и для моков, и для реального API
2. **Генерация моков из типов** — если возможно
3. **E2E тесты на реальном API** — хотя бы критические сценарии

### Структура

```
src/
├── api/
│   ├── types.ts           # Общие типы
│   ├── mock-adapter.ts    # Реализация для моков
│   ├── firebase-adapter.ts # Реализация для Firebase
│   └── index.ts           # Переключение по env
├── mocks/
│   └── widgets/           # JSON файлы
```

---

## Firestore Security Rules

### Риск

По умолчанию Firestore либо закрыт, либо открыт всем (Test Mode). Если не настроить Security Rules:

- Любой пользователь может читать/писать любые данные
- На демо ментор может спросить: "А я могу подменить свой XP?"

### Митигация

1. **Настройте правила до 4-й недели**
2. **Тестируйте правила** — Firebase предоставляет эмулятор
3. **Минимум необходимых прав** — пользователь читает/пишет только свои данные

### Пример правил

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Пользователи: только свои данные
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Темы: только чтение
    match /topics/{topicId} {
      allow read: if request.auth != null;
      allow write: if false;
    }

    // Виджеты: только чтение (без correctAnswer)
    match /widgets/{widgetId} {
      allow read: if request.auth != null;
      allow write: if false;
    }
  }
}
```

---

## README "на коленке"

### Риск

На README выделен 1 час, но требования из TEAMWORK.md включают:

- Описание проекта
- Скриншоты
- Инструкция по запуску
- Ссылки на PR
- Ссылки на дневники

Если сделать это за час, потеряете баллы за Launchpad.

### Митигация

1. **Закладывайте 3-4 часа** на README
2. **Готовьте скриншоты по ходу разработки** — не в последний день
3. **Используйте шаблон**

### Шаблон README

```markdown
# Widget Trainer

> Интерактивный тренажер для подготовки к JS-интервью

## Демо

[Live Demo](https://your-app.vercel.app) | [Video Demo](link-to-video)

## Скриншоты

| Dashboard                          | Library                        | Practice                         |
| ---------------------------------- | ------------------------------ | -------------------------------- |
| ![Dashboard](./docs/dashboard.png) | ![Library](./docs/library.png) | ![Practice](./docs/practice.png) |

## Технологии

- Vanilla TypeScript (strict mode)
- Firebase Auth + Firestore
- Vitest + Playwright

## Запуск

\`\`\`bash
npm install
npm run dev
\`\`\`

## Команда

| Участник | Роль      | Дневник                             |
| -------- | --------- | ----------------------------------- |
| @steve   | Team Lead | [diary](./development-notes/steve/) |
| @alex    | Frontend  | [diary](./development-notes/alex/)  |
| @ender   | Frontend  | [diary](./development-notes/ender/) |

## Основные PR

- [feat: Widget Engine](link)
- [feat: Async Sorter](link)
- [feat: Auth](link)
```

---

## A11y для D&D: Сложнее, чем кажется

### Риск

За A11y дают +10 баллов, но сделать Drag & Drop с клавиатуры — задача уровня Senior.

Стандартный HTML5 Drag & Drop API плохо дружит с клавиатурой.

### Митигация

1. **Альтернативное управление** — не полноценный D&D, а выбор через Tab + Enter
2. **Кастомная реализация** — Space для выбора, стрелки для зоны, Enter для drop
3. **ARIA атрибуты** — aria-grabbed, aria-dropeffect, aria-live

### Минимальная реализация

```typescript
// Упрощенная A11y версия
function handleKeyboard(event: KeyboardEvent) {
  if (event.key === "Enter" && focusedBlock) {
    if (!selectedBlock) {
      selectedBlock = focusedBlock;
      announce("Block selected. Press 1-4 to choose zone.");
    } else {
      moveToZone(selectedBlock, currentZone);
      selectedBlock = null;
    }
  }

  if (event.key >= "1" && event.key <= "4" && selectedBlock) {
    const zones = ["callStack", "microtasks", "macrotasks", "output"];
    currentZone = zones[parseInt(event.key) - 1];
    announce(`Zone: ${currentZone}. Press Enter to place.`);
  }
}
```

### Время

A11y добавляет **+5-10 часов** к Async Sorter. Если не успеваете — пропустите, это Could Have.

---

## Типичные ошибки (чеклист)

### Архитектура

- [ ] Не используем `any` — Discriminated Unions вместо этого
- [ ] Правильные ответы НЕ хранятся на клиенте в Real Mode
- [ ] API Layer абстрагирует Mock/Real
- [ ] Типы из `data-contracts.md` используются везде

### UI/UX

- [ ] Empty States для Dashboard, Library
- [ ] 404 Page
- [ ] Protected Routes работают
- [ ] Global Error Handling (Toast)
- [ ] Loading states для async операций

### Mobile

- [ ] Touch API для D&D
- [ ] Минимум 44x44px touch targets
- [ ] Нет scroll конфликтов

### Тесты

- [ ] Unit Tests запускаются в CI
- [ ] E2E Tests проходят на prod-like окружении
- [ ] Тесты на реальном API (хотя бы smoke)

### Деплой

- [ ] CI/CD настроен с недели 1
- [ ] Environment variables в Vercel
- [ ] HTTPS работает
- [ ] SPA роутинг на сервере

### Документация

- [ ] README с скриншотами
- [ ] Дневник с первой недели
- [ ] PR с понятными описаниями

---

## Карточка быстрой проверки

Распечатайте и повесьте над рабочим местом:

```
┌─────────────────────────────────────────────┐
│  BEFORE MERGE                               │
├─────────────────────────────────────────────┤
│  [ ] TypeScript strict — нет any           │
│  [ ] Тесты проходят                         │
│  [ ] Code review пройден                    │
│  [ ] Работает на mobile                     │
│  [ ] Дневник обновлен                       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  WEEKLY CHECK                               │
├─────────────────────────────────────────────┤
│  [ ] Prod deployment работает               │
│  [ ] Нет console.log в коде                 │
│  [ ] Mock и Real синхронизированы           │
│  [ ] Issues актуальны                       │
└─────────────────────────────────────────────┘
```
