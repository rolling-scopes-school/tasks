# Data Contracts: Widget Trainer

Этот документ описывает TypeScript типы и API методы для Widget Trainer. Используйте эти контракты как основу для реализации.

## Основные типы

### Topic (Тема)

```typescript
interface Topic {
  id: string;
  title: LocalizedString;        // { ru: "Core JS", en: "Core JS" }
  description: LocalizedString;
  tags: string[];                // ["closures", "prototypes", "event-loop"]
  difficulty: 1 | 2 | 3;         // 1 = Easy, 2 = Medium, 3 = Hard
  widgetIds: string[];           // Список ID виджетов в этой теме
  order: number;                 // Порядок в списке
}

interface LocalizedString {
  ru: string;
  en: string;
}
```

### Widget (Виджет)

```typescript
// Базовый интерфейс виджета
interface BaseWidget {
  id: string;
  type: WidgetType;
  version: number;               // Для миграций схемы
  difficulty: 1 | 2 | 3;
  tags: string[];
}

// Discriminated Union для типов виджетов
type Widget =
  | QuizWidget
  | TrueFalseWidget
  | CodeCompletionWidget
  | CodeOrderingWidget
  | AsyncSorterWidget
  | MemoryGameWidget
  | StackBuilderWidget;

type WidgetType =
  | 'quiz'
  | 'true-false'
  | 'code-completion'
  | 'code-ordering'
  | 'async-sorter'
  | 'memory-game'
  | 'stack-builder';
```

### Session & Progress

```typescript
interface SessionResult {
  id: string;
  topicId: string;
  widgetId: string;
  answer: unknown;               // Зависит от типа виджета
  isCorrect: boolean;
  timeSpent: number;             // В миллисекундах
  createdAt: number;             // timestamp
}

interface UserStats {
  xp: number;
  streak: number;                // Дни подряд
  lastActiveDate: string;        // "2024-01-15"
  completedWidgets: string[];    // ID завершенных виджетов
  topicProgress: Record<string, TopicProgress>;
}

interface TopicProgress {
  topicId: string;
  completedWidgets: number;
  totalWidgets: number;
  lastScore: number;             // 0-100
  lastAttempt: number;           // timestamp
}
```

---

## Типы виджетов

### Quiz Widget

```typescript
interface QuizWidget extends BaseWidget {
  type: 'quiz';
  payload: {
    question: LocalizedString;
    options: LocalizedString[];
    // correctIndex НЕ отправляется клиенту в Real Mode!
  };
}

// Ответ пользователя
interface QuizAnswer {
  selectedIndex: number;
}
```

### True/False Widget

```typescript
interface TrueFalseWidget extends BaseWidget {
  type: 'true-false';
  payload: {
    statement: LocalizedString;
    explanation: LocalizedString;  // Показывается после ответа
    // correct НЕ отправляется клиенту в Real Mode!
  };
}

interface TrueFalseAnswer {
  value: boolean;
}
```

### Code Completion Widget

```typescript
interface CodeCompletionWidget extends BaseWidget {
  type: 'code-completion';
  payload: {
    code: string;                  // "const result = arr.___(x => x > 0);"
    blanks: string[];              // ["___"]
    hints?: LocalizedString[];     // Подсказки
    // correctAnswers НЕ отправляется клиенту в Real Mode!
  };
}

interface CodeCompletionAnswer {
  values: string[];                // ["filter"]
}
```

### Code Ordering Widget

```typescript
interface CodeOrderingWidget extends BaseWidget {
  type: 'code-ordering';
  payload: {
    description: LocalizedString;
    lines: string[];               // Строки кода (изначально перемешаны)
    // correctOrder НЕ отправляется клиенту в Real Mode!
  };
}

interface CodeOrderingAnswer {
  order: number[];                 // [1, 0, 2, 3, 4]
}
```

### Async Sorter Widget

```typescript
interface AsyncSorterWidget extends BaseWidget {
  type: 'async-sorter';
  payload: {
    codeSnippet: string;
    blocks: AsyncBlock[];
    // correctDistribution НЕ отправляется клиенту в Real Mode!
  };
}

interface AsyncBlock {
  id: string;
  code: string;                    // "console.log('1')"
  label: string;                   // Короткая метка для D&D
}

interface AsyncSorterAnswer {
  callStack: string[];             // ID блоков
  microtasks: string[];
  macrotasks: string[];
  outputOrder: string[];           // Итоговый порядок вывода
}
```

### Memory Game Widget

```typescript
interface MemoryGameWidget extends BaseWidget {
  type: 'memory-game';
  payload: {
    codeSnippet: string;
    objects: MemoryObject[];
    links: MemoryLink[];
    rootIds: string[];             // ID корневых объектов (window, global)
    // garbageIds НЕ отправляется клиенту в Real Mode!
  };
}

interface MemoryObject {
  id: string;
  label: string;                   // "Object {val:1}"
  x: number;                       // Позиция для визуализации
  y: number;
}

interface MemoryLink {
  from: string;                    // ID объекта-источника
  to: string;                      // ID объекта-цели
  label?: string;                  // Имя свойства (опционально)
}

interface MemoryGameAnswer {
  markedAsGarbage: string[];       // ID объектов, помеченных как мусор
}
```

### Stack Builder Widget

```typescript
interface StackBuilderWidget extends BaseWidget {
  type: 'stack-builder';
  payload: {
    codeSnippet: string;
    highlightedLine: number;
    availableBlocks: StackBlock[];
    // correctStack НЕ отправляется клиенту в Real Mode!
  };
}

interface StackBlock {
  id: string;
  label: string;                   // "factorial(3)"
}

interface StackBuilderAnswer {
  stack: string[];                 // ID блоков снизу вверх
}
```

---

## API Layer

### Методы

```typescript
interface WidgetTrainerAPI {
  // Темы
  getTopics(): Promise<Topic[]>;
  getTopicById(id: string): Promise<Topic>;

  // Виджеты
  getWidgetById(id: string): Promise<Widget>;
  getWidgetsByTopicId(topicId: string): Promise<Widget[]>;

  // Ответы и валидация
  submitAnswer(widgetId: string, answer: unknown): Promise<Verdict>;

  // Прогресс
  getDashboardStats(): Promise<UserStats>;
  getSessionHistory(limit?: number): Promise<SessionResult[]>;

  // Профиль
  getUserProfile(): Promise<UserProfile>;
  updateUserProfile(data: Partial<UserProfile>): Promise<void>;
}

interface Verdict {
  isCorrect: boolean;
  explanation?: LocalizedString;   // Объяснение (для обучения)
  xpEarned: number;
  streakUpdated: boolean;
}

interface UserProfile {
  displayName: string;
  avatarUrl?: string;
  preferredLanguage: 'ru' | 'en';
  theme: 'light' | 'dark';
}
```

---

## Mock Mode vs Real Mode

### Архитектура

```
┌─────────────────────────────────────────────────────────┐
│                    UI Components                        │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    API Service Layer                    │
│                                                         │
│   getTopics(), submitAnswer(), getDashboardStats()      │
└─────────────────────────────────────────────────────────┘
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
┌─────────────────────────┐   ┌─────────────────────────┐
│      Mock Adapter       │   │      Real Adapter       │
│                         │   │                         │
│   - JSON файлы          │   │   - Firebase/Firestore  │
│   - Локальное хранение  │   │   - Security Rules      │
│   - Ответы в payload    │   │   - Ответы на сервере   │
└─────────────────────────┘   └─────────────────────────┘
```

### Переключение режимов

```typescript
// .env
VITE_USE_MOCK=true  // или false для Real Mode

// api/index.ts
import { mockAdapter } from './mock-adapter';
import { firebaseAdapter } from './firebase-adapter';

const adapter = import.meta.env.VITE_USE_MOCK === 'true'
  ? mockAdapter
  : firebaseAdapter;

export const api: WidgetTrainerAPI = {
  getTopics: () => adapter.getTopics(),
  submitAnswer: (id, answer) => adapter.submitAnswer(id, answer),
  // ...
};
```

### Важные различия

| Аспект | Mock Mode | Real Mode |
|--------|-----------|-----------|
| Правильные ответы | В payload виджета | Только на сервере |
| Валидация | На клиенте | На сервере (Firestore Functions или Rules) |
| Данные | JSON файлы в `/mocks` | Firestore коллекции |
| Security | Нет | Firestore Security Rules |
| Использование | Локальная разработка, тесты | Production |

### Пример Mock-файла

```json
// mocks/widgets/quiz-001.json
{
  "id": "quiz-001",
  "type": "quiz",
  "version": 1,
  "difficulty": 1,
  "tags": ["typeof", "basics"],
  "payload": {
    "question": {
      "ru": "Что вернет typeof null?",
      "en": "What does typeof null return?"
    },
    "options": [
      { "ru": "null", "en": "null" },
      { "ru": "undefined", "en": "undefined" },
      { "ru": "object", "en": "object" },
      { "ru": "NaN", "en": "NaN" }
    ],
    "correctIndex": 2
  }
}
```

> **Важно:** В Real Mode поле `correctIndex` (и аналогичные поля с ответами) **не должны** отправляться клиенту. Клиент отправляет ответ на сервер и получает `Verdict`.

---

## i18n для контента

### Стратегия локализации

Контент виджетов (вопросы, объяснения) должен быть локализован. Используйте объекты `LocalizedString`:

```typescript
// Правильно: локализация в данных
const question: LocalizedString = {
  ru: "Что вернет typeof null?",
  en: "What does typeof null return?"
};

// Хелпер для получения текста
function t(str: LocalizedString, lang: 'ru' | 'en'): string {
  return str[lang] || str.ru; // Fallback на русский
}
```

### UI vs Content локализация

| Тип | Где хранится | Пример |
|-----|--------------|--------|
| UI тексты | `/locales/ru.json`, `/locales/en.json` | "Начать", "Профиль", "Выйти" |
| Контент виджетов | В payload виджета (`LocalizedString`) | Вопросы, объяснения, подсказки |

---

## Firestore структура (для Real Mode)

```
/users/{userId}
  - displayName: string
  - avatarUrl: string
  - preferredLanguage: 'ru' | 'en'
  - theme: 'light' | 'dark'
  - xp: number
  - streak: number
  - lastActiveDate: string
  - completedWidgets: string[]

/users/{userId}/sessions/{sessionId}
  - topicId: string
  - widgetId: string
  - answer: any
  - isCorrect: boolean
  - timeSpent: number
  - createdAt: timestamp

/topics/{topicId}
  - title: LocalizedString
  - description: LocalizedString
  - tags: string[]
  - difficulty: number
  - widgetIds: string[]
  - order: number

/widgets/{widgetId}
  - type: string
  - version: number
  - difficulty: number
  - tags: string[]
  - payload: object
  - correctAnswer: object  // НЕ читается клиентом!
```

### Security Rules (пример)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Пользователи: только свои данные
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;

      match /sessions/{sessionId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }

    // Темы: читать могут все авторизованные
    match /topics/{topicId} {
      allow read: if request.auth != null;
      allow write: if false; // Только админ через консоль
    }

    // Виджеты: читать могут все, НО без correctAnswer
    match /widgets/{widgetId} {
      allow read: if request.auth != null;
      allow write: if false;
    }
  }
}
```

> **Примечание:** Для валидации ответов используйте Cloud Functions или кастомную логику на Security Rules. Это предотвратит подглядывание правильных ответов через DevTools.
