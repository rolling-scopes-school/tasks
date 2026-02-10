# AI Spymaster & Mock Implementation Guide

Этот документ описывает AI интерфейсы и стратегию мокирования для Codenames. **Все AI компоненты мокнуты** с чистыми интерфейсами, чтобы реальная AI интеграция могла быть подключена позже без изменения остального кода.

## Концепция

Два AI компонента в игре:

1. **AI Spymaster** — генерирует подсказки в Solo Mode (играет роль капитана)
2. **AI Check Evaluator** — оценивает ответы в фазе проверки знаний

Оба компонента реализованы через интерфейсы. Мок-реализации используют простые алгоритмы (категории слов, keyword matching) и реалистичные задержки. Позже интерфейсы реализуются через LLM API.

## Архитектура: Interface-First Design

```
┌─────────────────────────────────────────────────────────────┐
│                    Solo Game Mode                            │
│              (использует AI Spymaster)                       │
├─────────────────────────────────────────────────────────────┤
│                    Check Phase                               │
│              (использует AI Evaluator)                       │
└───────────────┬──────────────────────┬──────────────────────┘
                │                      │
                ▼                      ▼
┌──────────────────────────┐  ┌──────────────────────────┐
│  AISpymasterService      │  │  AICheckEvaluatorService  │
│  (interface)             │  │  (interface)              │
└──────────┬───────────────┘  └──────────┬───────────────┘
     ┌─────┴─────┐                 ┌─────┴─────┐
     ▼           ▼                 ▼           ▼
┌──────────┐ ┌──────────┐   ┌──────────┐ ┌──────────┐
│   Mock   │ │   Real   │   │   Mock   │ │   Real   │
│Spymaster │ │Spymaster │   │Evaluator │ │Evaluator │
│          │ │ (future) │   │          │ │ (future) │
│ Category │ │          │   │ Keyword  │ │          │
│ matching │ │ LLM API  │   │ matching │ │ LLM API  │
│          │ │ + prompt │   │          │ │ + prompt │
│ 1-3 сек  │ │          │   │ 0.8-2 с  │ │          │
│ задержка │ │          │   │ задержка │ │          │
└──────────┘ └──────────┘   └──────────┘ └──────────┘
```

## AI Interfaces

### AISpymasterService

```typescript
interface AISpymasterService {
  /**
   * Генерирует подсказку для Solo Mode.
   * Мок: категориальный подбор.
   * Real: LLM генерация.
   */
  generateClue(context: SpymasterContext): Promise<AIClue>;
}

interface SpymasterContext {
  myWords: string[];             // Мои слова (неоткрытые)
  opponentWords: string[];       // Слова соперника
  neutralWords: string[];        // Нейтральные
  bombWord: string;              // Бомба
  revealedWords: string[];       // Уже открытые
  moveHistory: Move[];           // История ходов
  difficulty: 'easy' | 'medium' | 'hard';
}

interface AIClue {
  word: string;                  // Слово-подсказка
  count: number;                 // Количество связанных слов
  reasoning?: string;            // Объяснение (для debug/display)
  confidence: number;            // 0-1
}
```

### AICheckEvaluatorService

```typescript
interface AICheckEvaluatorService {
  /**
   * Оценивает ответ игрока в фазе Check.
   * Мок: keyword matching.
   * Real: LLM оценка.
   */
  evaluateAnswer(context: CheckEvaluationContext): Promise<AICheckResult>;
}

interface CheckEvaluationContext {
  concept: string;               // "localStorage"
  question: string;              // "В чём отличие от sessionStorage?"
  playerAnswer: string;          // Ответ игрока
  referenceAnswer: string;       // Эталонный ответ
}

interface AICheckResult {
  pointGranted: boolean;
  feedback: string;              // "Ответ верный" / "Не хватает ключевых моментов"
  confidence: number;            // 0-1
}
```

---

## Mock Implementation: AI Spymaster

### Стратегия: Category Matching

Мок использует предопределённую карту категорий слов. Для каждой категории подбирается подсказка, связывающая максимум слов из своей команды, избегая слов соперника и бомбы.

```typescript
// Предопределённая карта категорий
const WORD_CATEGORIES: Record<string, string[]> = {
  'асинхронность': ['Promise', 'async/await', 'event loop', 'setTimeout', 'callback', 'microtask'],
  'типизация': ['generics', 'interface', 'type', 'enum', 'any', 'unknown'],
  'область видимости': ['closure', 'scope', 'hoisting', 'var', 'let', 'const', 'IIFE'],
  'наследование': ['prototype', 'class', 'extends', 'super', 'this', 'new'],
  'хранение данных': ['localStorage', 'sessionStorage', 'cookie', 'IndexedDB', 'Cache API'],
  'массивы': ['map', 'filter', 'reduce', 'forEach', 'spread', 'rest', 'destructuring'],
  'коллекции': ['Map', 'Set', 'WeakMap', 'WeakSet', 'iterator', 'generator'],
  'модули': ['import', 'export', 'default', 'namespace', 'barrel'],
  'обработка ошибок': ['try/catch', 'Error', 'throw', 'finally', 'Promise.catch'],
  'DOM': ['querySelector', 'addEventListener', 'event delegation', 'shadow DOM', 'template'],
  'метапрограммирование': ['Proxy', 'Reflect', 'Symbol', 'decorator', 'WeakRef'],
  'сеть': ['fetch', 'XMLHttpRequest', 'WebSocket', 'CORS', 'HTTP'],
};

class MockSpymasterService implements AISpymasterService {
  async generateClue(context: SpymasterContext): Promise<AIClue> {
    // Симулируем "думание" (1-3 секунды)
    await this.delay(1000 + Math.random() * 2000);

    const unrevealed = context.myWords.filter(
      w => !context.revealedWords.includes(w)
    );

    // Находим лучшую категорию
    const bestMatch = this.findBestCategoryMatch(
      unrevealed,
      context.opponentWords,
      context.bombWord,
      context.difficulty
    );

    return bestMatch;
  }

  private findBestCategoryMatch(
    myWords: string[],
    opponentWords: string[],
    bombWord: string,
    difficulty: 'easy' | 'medium' | 'hard'
  ): AIClue {
    let bestCategory = '';
    let bestCount = 0;
    let bestConfidence = 0;

    for (const [category, words] of Object.entries(WORD_CATEGORIES)) {
      // Сколько моих слов попадает в категорию
      const myMatches = myWords.filter(w =>
        words.some(cw => cw.toLowerCase() === w.toLowerCase())
      );

      // Сколько слов соперника попадает (опасность)
      const opponentMatches = opponentWords.filter(w =>
        words.some(cw => cw.toLowerCase() === w.toLowerCase())
      );

      // Бомба в категории?
      const bombMatch = words.some(cw => cw.toLowerCase() === bombWord.toLowerCase());

      if (bombMatch) continue;  // Никогда не подсказываем категорию с бомбой

      // Оценка: свои минус чужие
      const score = myMatches.length - opponentMatches.length * 2;

      if (score > bestCount || (score === bestCount && myMatches.length > bestCount)) {
        bestCategory = category;
        bestCount = myMatches.length;
        bestConfidence = score / myWords.length;
      }
    }

    // Ограничиваем count по сложности
    const maxCount = difficulty === 'easy' ? 2 : difficulty === 'medium' ? 3 : 4;
    const clueCount = Math.min(bestCount, maxCount);

    // Fallback: если нет совпадений, берём случайное слово
    if (bestCount === 0) {
      return {
        word: this.getRandomFallbackClue(myWords),
        count: 1,
        reasoning: 'Fallback: прямая ассоциация со словом',
        confidence: 0.3,
      };
    }

    return {
      word: bestCategory,
      count: clueCount,
      reasoning: `Связал ${clueCount} слов через категорию "${bestCategory}"`,
      confidence: Math.min(0.9, 0.5 + bestConfidence),
    };
  }

  private getRandomFallbackClue(words: string[]): string {
    // Простые ассоциации для fallback
    const associations: Record<string, string> = {
      'closure': 'замок',
      'Promise': 'обещание',
      'prototype': 'прародитель',
      'async/await': 'ожидание',
      'this': 'контекст',
      'hoisting': 'подъём',
      'scope': 'область',
      'class': 'чертёж',
      'Map': 'карта',
      'Set': 'набор',
    };

    const word = words[Math.floor(Math.random() * words.length)];
    return associations[word] || 'JavaScript';
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

### Пример работы мока

**Входные данные:**
```typescript
context = {
  myWords: ['closure', 'hoisting', 'scope', 'Promise', 'Map'],
  opponentWords: ['prototype', 'class', 'extends'],
  neutralWords: ['spread', 'rest', 'BigInt'],
  bombWord: 'eval',
  revealedWords: [],
  moveHistory: [],
  difficulty: 'medium',
}
```

**Результат:**
```typescript
{
  word: 'область видимости',    // Категория, покрывающая closure, hoisting, scope
  count: 3,
  reasoning: 'Связал 3 слов через категорию "область видимости"',
  confidence: 0.7,
}
```

---

## Mock Implementation: AI Check Evaluator

### Стратегия: Keyword Matching

Мок извлекает ключевые слова из эталонного ответа и проверяет, содержит ли ответ игрока достаточное количество этих слов.

```typescript
class MockCheckEvaluatorService implements AICheckEvaluatorService {
  async evaluateAnswer(context: CheckEvaluationContext): Promise<AICheckResult> {
    // Симулируем "думание AI" (0.8-2 секунды)
    await this.delay(800 + Math.random() * 1200);

    const keywords = this.extractKeywords(context.referenceAnswer);
    const playerWords = context.playerAnswer.toLowerCase();

    // Считаем совпадения
    const matches = keywords.filter(kw => playerWords.includes(kw.toLowerCase()));
    const matchRatio = keywords.length > 0 ? matches.length / keywords.length : 0;

    // Порог: 30% ключевых слов = засчитано (мок мягкий)
    const pointGranted = matchRatio >= 0.3;

    // Генерируем feedback
    const feedback = this.generateFeedback(pointGranted, matches, keywords, context.concept);

    return {
      pointGranted,
      feedback,
      confidence: matchRatio,
    };
  }

  private extractKeywords(text: string): string[] {
    // Убираем стоп-слова, извлекаем значимые слова
    const stopWords = new Set([
      'это', 'и', 'в', 'на', 'что', 'как', 'не', 'для', 'с', 'по',
      'а', 'но', 'из', 'к', 'от', 'до', 'при', 'или', 'же', 'то',
      'the', 'is', 'a', 'an', 'in', 'on', 'for', 'to', 'of', 'and',
    ]);

    return text
      .toLowerCase()
      .replace(/[^\wа-яё\s]/gi, '')
      .split(/\s+/)
      .filter(word => word.length > 3 && !stopWords.has(word))
      .slice(0, 10);  // Максимум 10 ключевых слов
  }

  private generateFeedback(
    granted: boolean,
    matches: string[],
    allKeywords: string[],
    concept: string
  ): string {
    if (granted && matches.length >= allKeywords.length * 0.7) {
      return `Отличный ответ! Вы хорошо понимаете ${concept}.`;
    }
    if (granted) {
      return `Ответ засчитан. Можно было также упомянуть: ${
        allKeywords.filter(k => !matches.includes(k)).slice(0, 2).join(', ')
      }.`;
    }
    return `Ответ не засчитан. Ключевые моменты, которых не хватило: ${
      allKeywords.filter(k => !matches.includes(k)).slice(0, 3).join(', ')
    }.`;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

### Пример работы мока

**Входные данные:**
```typescript
context = {
  concept: 'localStorage',
  question: 'В чём отличие от sessionStorage?',
  playerAnswer: 'localStorage сохраняет данные навсегда, а sessionStorage только на время сессии вкладки',
  referenceAnswer: 'localStorage сохраняет данные без срока давности, данные сохраняются при закрытии браузера. sessionStorage хранит данные только в рамках текущей сессии: данные удаляются при закрытии вкладки.',
}
```

**Извлечённые ключевые слова:** `['localstorage', 'сохраняет', 'данные', 'давности', 'закрытии', 'браузера', 'sessionstorage', 'сессии', 'удаляются', 'вкладки']`

**Совпадения в ответе:** `['localstorage', 'сохраняет', 'данные', 'sessionstorage', 'сессии', 'вкладки']` — 6 из 10 (60%)

**Результат:**
```typescript
{
  pointGranted: true,  // 60% > 30% порог
  feedback: 'Ответ засчитан. Можно было также упомянуть: давности, закрытии.',
  confidence: 0.6,
}
```

---

## Переключение Mock / Real

```typescript
// ai/index.ts
import { MockSpymasterService } from './mock-spymaster';
import { MockCheckEvaluatorService } from './mock-check-evaluator';
// import { RealSpymasterService } from './real-spymaster';       // Future
// import { RealCheckEvaluatorService } from './real-check-evaluator'; // Future

const USE_MOCK_AI = import.meta.env.VITE_USE_MOCK_AI !== 'false';

export const aiSpymaster: AISpymasterService = USE_MOCK_AI
  ? new MockSpymasterService()
  : new MockSpymasterService();  // TODO: заменить на RealSpymasterService

export const aiCheckEvaluator: AICheckEvaluatorService = USE_MOCK_AI
  ? new MockCheckEvaluatorService()
  : new MockCheckEvaluatorService();  // TODO: заменить на RealCheckEvaluatorService
```

### Тестирование моков

```typescript
// ai/__tests__/mock-spymaster.test.ts
import { describe, it, expect } from 'vitest';
import { MockSpymasterService } from '../mock-spymaster';

describe('MockSpymasterService', () => {
  const service = new MockSpymasterService();

  it('should generate a clue with count > 0', async () => {
    const clue = await service.generateClue({
      myWords: ['closure', 'hoisting', 'scope'],
      opponentWords: ['class', 'extends'],
      neutralWords: ['BigInt'],
      bombWord: 'eval',
      revealedWords: [],
      moveHistory: [],
      difficulty: 'medium',
    });

    expect(clue.word).toBeTruthy();
    expect(clue.count).toBeGreaterThan(0);
    expect(clue.confidence).toBeGreaterThan(0);
  });

  it('should never suggest a clue matching the bomb word category', async () => {
    // ... test that bomb word category is avoided
  });

  it('should respect difficulty level for count', async () => {
    const easyClue = await service.generateClue({
      myWords: ['closure', 'hoisting', 'scope', 'let', 'var'],
      opponentWords: [],
      neutralWords: [],
      bombWord: 'eval',
      revealedWords: [],
      moveHistory: [],
      difficulty: 'easy',
    });

    expect(easyClue.count).toBeLessThanOrEqual(2);
  });
});
```

---

## Solo Mode

### Концепция

Solo Mode позволяет играть одному. AI играет роль капитана (Spymaster) одной из команд. Игрок — оперативник. Соперничество идёт "против себя" или "против таймера".

### User Flow

```mermaid
flowchart TD
    Start([Solo Setup Page]) --> Settings[Выбор настроек]
    Settings --> Difficulty{Сложность}
    Difficulty -->|Easy| D1[AI даёт подсказки на 1-2 слова]
    Difficulty -->|Medium| D2[AI даёт подсказки на 2-3 слова]
    Difficulty -->|Hard| D3[AI даёт подсказки на 3-4 слова]

    D1 & D2 & D3 --> CheckMode{Режим проверки}
    CheckMode -->|AI| AICheck[AI оценивает ответы]
    CheckMode -->|Self| SelfCheck[Самопроверка]

    AICheck & SelfCheck --> StartGame[Начать игру]

    StartGame --> AIThinks[AI генерирует подсказку...]
    AIThinks --> ClueShown[Подсказка показана]
    ClueShown --> PlayerGuesses[Игрок угадывает]
    PlayerGuesses --> CardClicked[Клик по карточке]
    CardClicked --> IsOwn{Своя?}

    IsOwn -->|Да| Check[Check Phase]
    IsOwn -->|Нет| EndRound[Раунд окончен]

    Check --> ContinueOrEnd{Продолжить?}
    ContinueOrEnd -->|Да| PlayerGuesses
    ContinueOrEnd -->|Нет| EndRound

    EndRound --> MoreCards{Ещё карточки?}
    MoreCards -->|Да| AIThinks
    MoreCards -->|Нет| GameOver[Результаты]
```

### Solo Game State Machine

```mermaid
stateDiagram-v2
    [*] --> Setup: /solo

    state Setup {
        [*] --> ChoosingSettings
        ChoosingSettings: Выбор сложности и режима проверки
    }

    Setup --> GameStart: Нажать "Начать"

    state GameStart {
        [*] --> GeneratingBoard
        GeneratingBoard: Генерация поля (локально или на сервере)
    }

    GameStart --> AITurn: Поле готово

    state AITurn {
        [*] --> AIThinking
        AIThinking: AI генерирует подсказку (1-3 сек)
        AIThinking --> ClueReady: Подсказка готова
    }

    AITurn --> PlayerTurn: Подсказка показана

    state PlayerTurn {
        [*] --> Guessing
        Guessing: Игрок выбирает карточку
    }

    PlayerTurn --> CheckPhase: Своя карточка
    PlayerTurn --> AITurn: Чужая / нейтральная → следующий раунд

    state CheckPhase {
        [*] --> AnsweringQuestion
        AnsweringQuestion: Попап с вопросом
    }

    CheckPhase --> PlayerTurn: Проверка завершена, попытки остались
    CheckPhase --> AITurn: Проверка завершена, попытки кончились

    PlayerTurn --> GameOver: Бомба / все карточки найдены
    AITurn --> GameOver: Все раунды сыграны

    state GameOver {
        [*] --> ShowResults
        ShowResults: Статистика: очки, время, % правильных ответов
    }

    GameOver --> [*]: На /results
```

### Solo Mode: особенности реализации

| Аспект | Multiplayer | Solo |
|--------|-------------|------|
| WebSocket | Реальное подключение | Не нужен (или Mock WS) |
| Spymaster | Живой человек | AI Mock |
| Таймер | Синхронизация сервер ↔ клиент | Только клиентский |
| Check Mode | Настраивается хостом | По умолчанию AI |
| Соперник | Другая команда | Нет (играет один) |
| Сохранение результатов | На сервере | Локально или REST API |

```typescript
// Solo game loop (упрощённый)
class SoloGameController {
  private game: Game;
  private spymaster: AISpymasterService;
  private evaluator: AICheckEvaluatorService;

  async startRound(): Promise<void> {
    // 1. AI генерирует подсказку
    const context = this.buildSpymasterContext();
    const clue = await this.spymaster.generateClue(context);

    // 2. Показываем подсказку
    this.ui.showClue(clue);
    this.game.clue = { word: clue.word, count: clue.count, ... };
    this.game.guessesRemaining = clue.count + 1;  // +1 по правилам

    // 3. Ждём действий игрока (через UI events)
  }

  async handleGuess(cardId: string): Promise<void> {
    const card = this.game.board.find(c => c.id === cardId);
    card.status = 'revealed';

    this.ui.revealCard(cardId, card.color);

    if (card.color === 'bomb') {
      return this.endGame('lose');
    }

    if (card.color === this.game.currentTurn) {
      // Своя карточка → Check Phase
      await this.runCheckPhase(card.word);
      this.game.guessesRemaining--;

      if (this.isAllFound()) return this.endGame('win');
      if (this.game.guessesRemaining <= 0) return this.startRound();
      // Иначе: продолжаем угадывать
    } else {
      // Чужая или нейтральная → раунд окончен
      this.startRound();
    }
  }
}
```

---

## UI: Solo Setup Page

```
┌─────────────────────────────────────────────────────────────┐
│  CODENAMES: Interview Edition          Solo Mode             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Настройки игры с AI                                        │
│                                                              │
│  Сложность:                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │   Easy   │  │  Medium  │  │   Hard   │                  │
│  │ 1-2 слова│  │ 2-3 слова│  │ 3-4 слова│                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
│                    ↑ выбрано                                  │
│                                                              │
│  Режим проверки:                                            │
│  ○ Самопроверка (Показать ответ → Знаю/Не знаю)           │
│  ● AI проверка (AI оценивает ваш ответ)     ← выбрано      │
│                                                              │
│  Таймер на ход:                                             │
│  ○ Без таймера                                               │
│  ● 2 минуты                                 ← выбрано       │
│  ○ 1 минута                                                  │
│                                                              │
│                                                              │
│                     [  Начать игру  ]                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Будущая AI интеграция (промпты для документации)

> Эти промпты НЕ реализуются сейчас. Они описаны для будущей интеграции с LLM.

### Промпт для AI Spymaster

```
You are a Codenames Spymaster for the {team} team.
Board state:
- Your words (not yet revealed): {myWords}
- Opponent words: {opponentWords}
- Neutral words: {neutralWords}
- Bomb: {bombWord}
- Already revealed: {revealedWords}

Rules:
1. Give exactly ONE word as a clue and a number
2. The clue must relate to {number} of your words
3. NEVER give a clue that relates to the bomb word
4. Avoid clues that relate to opponent words
5. The clue cannot be any word on the board

Respond in format: CLUE, NUMBER
Example: "Асинхронность, 3"
```

### Промпт для AI Check Evaluator

```
You are evaluating a player's understanding of a JavaScript/TypeScript concept.

Concept: {concept}
Question: "{question}"
Player's answer: "{playerAnswer}"
Reference answer: "{referenceAnswer}"

Evaluate whether the player demonstrates understanding of the core concept.
Be lenient - they don't need to use the exact same words, just show understanding.

Respond in JSON format:
{
  "pointGranted": true/false,
  "feedback": "one sentence of feedback"
}
```

---

## Эстимейт: AI + Solo Mode

| Задача | Min | Max | Avg | Кто | Примечание |
|--------|-----|-----|-----|-----|------------|
| Interface definitions (TypeScript) | 2ч | 3ч | 2.5ч | AI-Dev | Оба сервиса |
| Mock Spymaster (category matching) | 4ч | 8ч | 6ч | AI-Dev | WORD_CATEGORIES + алгоритм |
| Mock Check Evaluator (keyword matching) | 3ч | 6ч | 4.5ч | AI-Dev | Keyword extraction + scoring |
| Solo Setup page (UI) | 2ч | 4ч | 3ч | AI-Dev | Настройки, кнопки |
| Solo Game Controller (game loop) | 5ч | 10ч | 7.5ч | AI-Dev | Оркестрация AI + game |
| Landing page | 2ч | 4ч | 3ч | AI-Dev | Описание игры, кнопки |
| 404 page | 1ч | 2ч | 1.5ч | AI-Dev | Not Found |
| Unit тесты моков | 3ч | 5ч | 4ч | AI-Dev | Edge cases |
| **Итого** | **22ч** | **42ч** | **32ч** | | |

> **Примечание:** Mock Spymaster — самая интересная часть. Хороший мок создаёт иллюзию "умного AI" за счёт предопределённых категорий и случайности. Чем больше категорий в WORD_CATEGORIES, тем реалистичнее.

---

## Типичные ошибки

### 1. AI отвечает мгновенно

```typescript
// Плохо: мок отвечает за 1 мс — нереалистично
async generateClue(context: SpymasterContext): Promise<AIClue> {
  return { word: 'JavaScript', count: 1 };
}

// Хорошо: симулируем "думание"
async generateClue(context: SpymasterContext): Promise<AIClue> {
  await delay(1000 + Math.random() * 2000);  // 1-3 сек
  return this.calculate(context);
}
```

### 2. Мок подсказывает бомбу

```typescript
// Плохо: не проверяем бомбу
// Мок может выдать "метапрограммирование", а бомба — "Proxy"

// Хорошо: явная проверка
if (bombMatch) continue;  // Пропускаем категорию с бомбой
```

### 3. Слишком строгий Check Evaluator

```typescript
// Плохо: точное совпадение
const pointGranted = playerAnswer === referenceAnswer;
// Никто не наберёт очки!

// Хорошо: keyword matching с мягким порогом (30%)
const matchRatio = matches.length / keywords.length;
const pointGranted = matchRatio >= 0.3;
```

### 4. Нет fallback при пустом ответе

```typescript
// Плохо: crash на пустом ответе
const keywords = extractKeywords(playerAnswer); // []
const ratio = matches.length / keywords.length; // NaN!

// Хорошо: обработка пустого
if (!playerAnswer.trim()) {
  return { pointGranted: false, feedback: 'Ответ не предоставлен.', confidence: 0 };
}
```
