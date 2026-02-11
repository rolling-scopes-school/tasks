# Data Contracts: Codenames — Interview Edition

Этот документ описывает TypeScript типы, WebSocket протокол и API методы для Codenames. Используйте эти контракты как основу для реализации.

## Ответственные за контракты

| Кодовое имя                    | Роль             | Зона ответственности в контрактах                           |
| ------------------------------ | ---------------- | ----------------------------------------------------------- |
| **Великий Мёрдж** (Lead)       | Lead             | Общая структура типов, REST API, Auth, Session Token        |
| **Тихий Сокет** (WS-Dev)       | WS-Dev (Backend) | WebSocket Protocol, Server Events, Room/Game state          |
| **Быстрый Рендер** (Board-Dev) | Board-Dev        | GameStateForPlayer, PlayerVisibleCard, Board-related types  |
| **Зоркий Линтер** (Check-Dev)  | Check-Dev        | Check Phase types, CheckQuestion, CheckSession, CheckResult |
| **Мудрый Мок** (AI-Dev)        | AI-Dev           | AI Interfaces (Spymaster, Check Evaluator), Mock/Real mode  |
| **Ловкий Роутер** (Lobby-Dev)  | Lobby-Dev        | RoomPreview, Lobby REST endpoints, PlayerStats              |

> **Правило:** Если **Тихий Сокет** (WS-Dev) меняет серверное событие, он обновляет этот документ И пингует **Быстрого Рендера** (Board-Dev). Если **Зоркий Линтер** (Check-Dev) добавляет поле в `CheckResult`, он обновляет документ И пингует **Мудрого Мока** (AI-Dev). Контракт — это договор. Ломать его в одностороннем порядке запрещено.

---

## NPM Workspaces / Shared Types (monorepo)

> **Ключевая идея:** Все типы из этого документа живут в одном пакете `@project/shared`. И клиент, и сервер импортируют их оттуда. Если **Тихий Сокет** (WS-Dev) переименует поле в серверном событии — клиент **Быстрого Рендера** (Board-Dev) не скомпилируется. Это не баг, это защита. Это экономит сотни часов дебага "а почему у меня undefined".

### Структура monorepo

```
codenames/
├── package.json              # корневой, workspaces: ["packages/*"]
├── tsconfig.base.json        # общие настройки TS (strict: true)
├── packages/
│   ├── shared/               # @project/shared
│   │   ├── package.json      # "name": "@project/shared"
│   │   ├── tsconfig.json     # extends ../../tsconfig.base.json
│   │   └── src/
│   │       ├── index.ts      # re-export всех типов
│   │       ├── types.ts      # User, Room, Game, Card, Clue, Move ...
│   │       ├── ws-events.ts  # ClientEvent, ServerEvent, ErrorCode
│   │       ├── check.ts      # CheckQuestion, CheckSession, CheckResult
│   │       ├── ai.ts         # AISpymasterService, AICheckEvaluatorService
│   │       └── constants.ts  # BOARD_SIZE = 25, MAX_PLAYERS = 10, ...
│   ├── client/               # @project/client (Vite + TS)
│   │   ├── package.json      # dependencies: { "@project/shared": "*" }
│   │   ├── tsconfig.json
│   │   └── src/
│   │       └── ...
│   └── server/               # @project/server (Node + Express + Socket.IO)
│       ├── package.json      # dependencies: { "@project/shared": "*" }
│       ├── tsconfig.json
│       └── src/
│           └── ...
```

### Корневой package.json

```json
{
  "name": "codenames-interview",
  "private": true,
  "workspaces": ["packages/*"],
  "scripts": {
    "dev:client": "npm -w @project/client run dev",
    "dev:server": "npm -w @project/server run dev",
    "build": "npm -w @project/shared run build && npm -w @project/client run build && npm -w @project/server run build",
    "typecheck": "tsc --noEmit -p packages/shared && tsc --noEmit -p packages/client && tsc --noEmit -p packages/server"
  }
}
```

### Пример использования в клиенте

```typescript
// packages/client/src/ws/real-ws-client.ts
import { ClientEvent, ServerEvent, ErrorCode } from "@project/shared";

function send(event: ClientEvent): void {
  socket.emit(event.type, event.payload);
}
```

### Пример использования на сервере

```typescript
// packages/server/src/ws/ws-handler.ts
import {
  ClientEvent,
  ServerEvent,
  Room,
  GameStateForPlayer,
} from "@project/shared";

socket.on("game:guess", (payload: { cardId: string }) => {
  // типы гарантированы — и клиент, и сервер используют один и тот же ClientEvent
});
```

### Почему это важно

- **Тихий Сокет** (WS-Dev) переименовал `game:card-revealed` в `game:reveal` — клиент **Быстрого Рендера** (Board-Dev) сразу падает на `tsc`. Не через 3 дня на демо, а прямо сейчас.
- **Зоркий Линтер** (Check-Dev) добавил `timeSpent` в `CheckResult` — **Мудрый Мок** (AI-Dev) видит ошибку компиляции и добавляет поле в мок.
- **Ловкий Роутер** (Lobby-Dev) изменил `RoomPreview` — `getPublicRooms()` на сервере не скомпилируется, пока **Тихий Сокет** (WS-Dev) не обновит контроллер.
- `npm run typecheck` в CI проверяет все три пакета. Сломанный контракт = красный билд = нельзя мёрджить.

---

## Основные типы

### User & Profile

```typescript
interface User {
  id: string;
  displayName: string;
  email: string;
  avatarUrl?: string;
  preferredLanguage: "ru" | "en";
  theme: "light" | "dark";
  createdAt: number; // timestamp
}

interface PlayerStats {
  gamesPlayed: number;
  gamesWon: number;
  totalPoints: number; // Суммарные очки за Check Phase
  checkCorrectRate: number; // 0-1 (процент правильных ответов)
  wordsGuessed: number; // Общее кол-во угаданных слов
  lastPlayedAt: number; // timestamp
}
```

### Room (Комната)

```typescript
type RoomStatus = "waiting" | "playing" | "finished";
type CheckMode = "self-peer" | "ai";
type TeamColor = "red" | "blue";

interface Room {
  code: string; // "js-masters-42"
  hostId: string; // ID создателя комнаты
  status: RoomStatus;
  teams: {
    red: TeamState;
    blue: TeamState;
  };
  settings: RoomSettings;
  spectatorIds: string[];
  createdAt: number;
}

interface RoomSettings {
  turnTimeSeconds: number; // default 120
  checkMode: CheckMode; // 'self-peer' | 'ai'
  isPublic: boolean; // Показывать в списке комнат
  maxPlayers: number; // 4-10
}

interface TeamState {
  spymasterId: string | null;
  operativeIds: string[];
  score: number; // Очки (карточки + Check)
  cardsLeft: number; // Сколько карточек осталось найти
}
```

### Game (Игра)

```typescript
type CardColor = "red" | "blue" | "neutral" | "bomb";
type CardStatus = "hidden" | "revealed";
type GamePhase = "clue" | "guess" | "check" | "finished";

interface Game {
  id: string;
  roomCode: string;
  board: Card[]; // 25 карточек (5x5)
  currentTurn: TeamColor; // Чья очередь
  currentPhase: GamePhase; // Текущая фаза хода
  clue: Clue | null; // Текущая подсказка
  guessesRemaining: number; // Оставшиеся попытки угадать
  moveHistory: Move[]; // История ходов
  winner: TeamColor | null;
  startedAt: number;
}

interface Card {
  id: string; // "card-0" ... "card-24"
  word: string; // "closure", "prototype", "async/await"
  color: CardColor; // Только для Spymaster и сервера!
  status: CardStatus; // 'hidden' | 'revealed'
  position: number; // 0-24 (позиция на поле)
  checkResult?: CheckResult; // Результат проверки знаний
}

interface Clue {
  word: string; // Слово-подсказка
  count: number; // Количество связанных карточек
  givenBy: string; // ID капитана
  team: TeamColor; // Команда капитана
  timestamp: number;
}

interface Move {
  playerId: string;
  cardId: string;
  cardWord: string;
  cardColor: CardColor;
  wasOwnTeamCard: boolean;
  checkResult: CheckResult | null; // null, если чужая карточка
  timestamp: number;
}
```

---

## Session Token (переживаем F5)

> **Проблема:** Socket.IO при каждом подключении выдаёт новый `socket.id`. Если игрок нажал F5 или у него дёрнулся Wi-Fi — сервер видит "нового" пользователя, а старый остаётся висеть в комнате. Через 30 секунд — два призрака, сломанное состояние, слёзы на демо.
>
> **Решение:** Идентифицировать игрока НЕ по `socket.id`, а по `sessionToken` (UUID), который хранится в `localStorage`. При переподключении клиент отправляет этот токен, и сервер восстанавливает личность игрока.

### Интерфейс handshake auth

```typescript
/** Клиент передаёт при подключении через socket.io handshake.auth */
interface WSHandshakeAuth {
  token: string; // Firebase ID Token (авторизация)
  sessionToken?: string; // UUID из localStorage (восстановление сессии)
}
```

### Серверная маппа сессий

```typescript
/** Сервер хранит маппинг sessionToken → игрок */
interface SessionRecord {
  sessionToken: string; // UUID v4
  userId: string; // Firebase UID
  displayName: string;
  currentRoomCode: string | null;
  currentSocketId: string; // Текущий socket.id (обновляется при reconnect)
  connectedAt: number; // timestamp
  lastSeenAt: number; // timestamp (обновляется при каждом событии)
}

// На сервере:
const sessions = new Map<string, SessionRecord>(); // sessionToken → SessionRecord
```

### Поток: Первое подключение

```
Клиент                                 Сервер
  │                                      │
  │  connect({ auth: { token } })        │  // sessionToken НЕТ в localStorage
  │ ──────────────────────────────────▶  │
  │                                      │  1. Проверить Firebase token
  │                                      │  2. Сгенерировать sessionToken = uuid()
  │                                      │  3. Сохранить в sessions Map
  │                                      │
  │  emit('session:token', { token })    │
  │ ◀──────────────────────────────────  │
  │                                      │
  │  localStorage.setItem(              │
  │    'sessionToken', token)            │
  │                                      │
```

### Поток: Reconnect (F5, потеря связи)

```
Клиент                                 Сервер
  │                                      │
  │  const saved =                       │
  │    localStorage.getItem(             │
  │      'sessionToken')                 │
  │                                      │
  │  connect({ auth: {                   │
  │    token, sessionToken: saved        │
  │  }})                                 │
  │ ──────────────────────────────────▶  │
  │                                      │  1. Проверить Firebase token
  │                                      │  2. Найти SessionRecord по sessionToken
  │                                      │  3. Обновить currentSocketId на новый
  │                                      │  4. Восстановить игрока в комнате/игре
  │                                      │
  │  emit('session:restored', {          │
  │    roomCode, gameState              │
  │  })                                  │
  │ ◀──────────────────────────────────  │
  │                                      │
```

### Серверный код (Socket.IO middleware)

```typescript
// packages/server/src/ws/session-middleware.ts
import { v4 as uuid } from "uuid";
import { Server, Socket } from "socket.io";
import { WSHandshakeAuth, SessionRecord } from "@project/shared";

const sessions = new Map<string, SessionRecord>();

export function setupSessionMiddleware(io: Server) {
  io.use(async (socket: Socket, next) => {
    const auth = socket.handshake.auth as WSHandshakeAuth;

    // 1. Проверить Firebase token (обязательно)
    const firebaseUser = await verifyFirebaseToken(auth.token);
    if (!firebaseUser) {
      return next(new Error("AUTH_REQUIRED"));
    }

    // 2. Проверить sessionToken (reconnect?)
    if (auth.sessionToken && sessions.has(auth.sessionToken)) {
      const record = sessions.get(auth.sessionToken)!;

      // Убедиться, что это тот же пользователь
      if (record.userId !== firebaseUser.uid) {
        return next(new Error("SESSION_USER_MISMATCH"));
      }

      // Обновить socket.id
      record.currentSocketId = socket.id;
      record.lastSeenAt = Date.now();
      socket.data.sessionToken = auth.sessionToken;
      socket.data.userId = firebaseUser.uid;
      socket.data.isReconnect = true;

      return next();
    }

    // 3. Новое подключение — создать sessionToken
    const sessionToken = uuid();
    sessions.set(sessionToken, {
      sessionToken,
      userId: firebaseUser.uid,
      displayName: firebaseUser.name || "Anonymous",
      currentRoomCode: null,
      currentSocketId: socket.id,
      connectedAt: Date.now(),
      lastSeenAt: Date.now(),
    });

    socket.data.sessionToken = sessionToken;
    socket.data.userId = firebaseUser.uid;
    socket.data.isReconnect = false;

    next();
  });

  // После подключения — отправить sessionToken клиенту
  io.on("connection", (socket: Socket) => {
    if (!socket.data.isReconnect) {
      socket.emit("session:token", { sessionToken: socket.data.sessionToken });
    } else {
      // Восстановить состояние: комнату, игру
      const record = sessions.get(socket.data.sessionToken)!;
      if (record.currentRoomCode) {
        socket.join(record.currentRoomCode);
        // Отправить текущее состояние игры
        socket.emit("session:restored", {
          roomCode: record.currentRoomCode,
          // ... текущее состояние игры
        });
      }
    }
  });
}
```

### Клиентский код

```typescript
// packages/client/src/ws/session.ts
import { io, Socket } from "socket.io-client";
import { WSHandshakeAuth } from "@project/shared";

const SESSION_KEY = "codenames:sessionToken";

export function connectWithSession(firebaseToken: string): Socket {
  const savedSessionToken = localStorage.getItem(SESSION_KEY) || undefined;

  const auth: WSHandshakeAuth = {
    token: firebaseToken,
    sessionToken: savedSessionToken,
  };

  const socket = io(SERVER_URL, { auth });

  // Первое подключение — сохранить sessionToken
  socket.on("session:token", ({ sessionToken }: { sessionToken: string }) => {
    localStorage.setItem(SESSION_KEY, sessionToken);
  });

  // Reconnect — восстановить состояние
  socket.on("session:restored", ({ roomCode, gameState }) => {
    console.log(`Session restored: room=${roomCode}`);
    // Обновить UI состоянием из gameState
  });

  return socket;
}
```

### WS-события для сессий

```typescript
// Добавить в ServerEvent (в @project/shared):
type ServerEvent =
  | { type: "session:token"; payload: { sessionToken: string } }
  | {
      type: "session:restored";
      payload: { roomCode: string; gameState: GameStateForPlayer | null };
    };
// ... остальные события (см. ниже)
```

> **Ответственный:** **Великий Мёрдж** (Lead) создаёт `WSHandshakeAuth` и `SessionRecord` в `@project/shared`. **Тихий Сокет** (WS-Dev) реализует middleware. **Быстрый Рендер** (Board-Dev) подключает `connectWithSession()` на клиенте.

---

## Check Phase (Проверка знаний)

```typescript
type CheckStatus = "pending" | "answered" | "evaluated";

interface CheckQuestion {
  id: string;
  word: string; // JS/TS концепт ("closure", "Promise")
  question: string; // "В чём отличие от sessionStorage?"
  referenceAnswer: string; // Правильный ответ (для "Показать ответ")
  difficulty: 1 | 2 | 3;
  tags: string[]; // ["core-js", "scope"]
}

interface CheckSession {
  questionId: string;
  playerAnswer: string; // Что написал игрок
  mode: CheckMode; // 'self-peer' | 'ai'
  result: CheckResult;
  evaluatedBy: "self" | "peer" | "ai";
  timestamp: number;
}

interface CheckResult {
  pointGranted: boolean; // Засчитано ли очко
  feedback?: string; // Обратная связь (опционально, AI-режим)
}
```

---

## Word Bank (Банк слов)

```typescript
interface WordEntry {
  word: string; // "closure", "Promise", "prototype"
  category: WordCategory;
  difficulty: 1 | 2 | 3;
}

type WordCategory =
  | "core-js" // closure, hoisting, scope, this, prototype
  | "async" // Promise, async/await, event loop, callback
  | "typescript" // generics, interface, enum, type, any
  | "browser-api" // localStorage, fetch, DOM, WebSocket
  | "patterns" // observer, strategy, singleton, factory
  | "data-structures" // Map, Set, WeakMap, Array, iterator
  | "es6-plus"; // spread, rest, destructuring, Symbol, Proxy

interface QuestionBank {
  [word: string]: CheckQuestion[]; // Несколько вопросов на каждое слово
}
```

---

## AI Interfaces (ВСЕ МОКНУТЫ)

> **Важно:** Все AI интерфейсы реализованы через моки. Реальная интеграция с LLM — отдельная задача, которая подключается через тот же интерфейс без изменения остального кода. **Мудрый Мок** (AI-Dev) отвечает за моки, но интерфейсы согласует с **Зорким Линтером** (Check-Dev) и **Тихим Сокетом** (WS-Dev).

### AI Spymaster (генерация подсказок)

```typescript
interface AISpymasterService {
  generateClue(context: SpymasterContext): Promise<AIClue>;
}

interface SpymasterContext {
  myWords: string[]; // Слова моей команды (неоткрытые)
  opponentWords: string[]; // Слова соперника
  neutralWords: string[]; // Нейтральные слова
  bombWord: string; // Слово-бомба
  revealedWords: string[]; // Уже открытые слова
  moveHistory: Move[]; // История ходов
  difficulty: "easy" | "medium" | "hard";
}

interface AIClue {
  word: string; // Слово-подсказка
  count: number; // Количество связанных слов
  reasoning?: string; // Объяснение логики (для debug/display)
  confidence: number; // 0-1
}
```

### AI Check Evaluator (проверка ответов)

```typescript
interface AICheckEvaluatorService {
  evaluateAnswer(context: CheckEvaluationContext): Promise<AICheckResult>;
}

interface CheckEvaluationContext {
  concept: string; // "localStorage"
  question: string; // "В чём отличие от sessionStorage?"
  playerAnswer: string; // Ответ игрока
  referenceAnswer: string; // Эталонный ответ
}

interface AICheckResult {
  pointGranted: boolean;
  feedback: string; // Обратная связь: "Ответ верный" / "Не хватает..."
  confidence: number; // 0-1
}
```

---

## WebSocket Protocol

### Общая структура

Все события типизированы через Discriminated Union (поле `type` как дискриминатор).

### Client -> Server Events

```typescript
type ClientEvent =
  | { type: "room:create"; payload: { settings: RoomSettings } }
  | { type: "room:join"; payload: { code: string } }
  | { type: "room:leave" }
  | {
      type: "room:set-role";
      payload: { team: TeamColor; role: "spymaster" | "operative" };
    }
  | { type: "game:start" }
  | { type: "game:give-clue"; payload: { word: string; count: number } }
  | { type: "game:guess"; payload: { cardId: string } }
  | { type: "game:end-turn" }
  | { type: "check:submit-answer"; payload: { answer: string } }
  | { type: "check:evaluate"; payload: { result: "know" | "dont-know" } };
```

### Server -> Client Events

```typescript
type ServerEvent =
  | { type: "session:token"; payload: { sessionToken: string } }
  | {
      type: "session:restored";
      payload: { roomCode: string; gameState: GameStateForPlayer | null };
    }
  | { type: "room:state"; payload: Room }
  | { type: "room:player-joined"; payload: { player: PlayerInfo } }
  | { type: "room:player-left"; payload: { playerId: string } }
  | { type: "game:state"; payload: GameStateForPlayer }
  | {
      type: "game:card-revealed";
      payload: { cardId: string; color: CardColor };
    }
  | { type: "game:clue-given"; payload: Clue }
  | {
      type: "game:turn-changed";
      payload: { team: TeamColor; phase: GamePhase };
    }
  | { type: "game:timer-sync"; payload: { remainingMs: number } }
  | { type: "check:question"; payload: CheckQuestion }
  | { type: "check:result"; payload: CheckResult }
  | { type: "game:finished"; payload: { winner: TeamColor; board: Card[] } }
  | { type: "error"; payload: { message: string; code: ErrorCode } };

type ErrorCode =
  | "ROOM_NOT_FOUND"
  | "ROOM_FULL"
  | "NOT_YOUR_TURN"
  | "INVALID_ACTION"
  | "AUTH_REQUIRED"
  | "SESSION_USER_MISMATCH"
  | "ACTION_IN_PROGRESS";

interface PlayerInfo {
  id: string;
  displayName: string;
  avatarUrl?: string;
}
```

### GameStateForPlayer (фильтрованное состояние)

> **Критически важно:** Сервер НИКОГДА не отправляет цвета карточек оперативникам. Это фундаментальное правило безопасности игры.

```typescript
interface GameStateForPlayer {
  board: PlayerVisibleCard[]; // Цвета скрыты для не-капитанов
  currentTurn: TeamColor;
  currentPhase: GamePhase;
  clue: Clue | null;
  guessesRemaining: number;
  teams: {
    red: TeamState;
    blue: TeamState;
  };
  isSpymaster: boolean; // Является ли ЭТОТ игрок капитаном
  turnEndTime: number; // timestamp, когда истечет таймер
}

interface PlayerVisibleCard {
  id: string;
  word: string;
  status: CardStatus;
  color: CardColor | null; // null, если hidden И игрок НЕ капитан
  position: number;
}
```

**Логика фильтрации:**

```typescript
function toPlayerVisibleCard(
  card: Card,
  isSpymaster: boolean,
): PlayerVisibleCard {
  return {
    id: card.id,
    word: card.word,
    status: card.status,
    color: card.status === "revealed" || isSpymaster ? card.color : null,
    position: card.position,
  };
}
```

---

## REST API (для не-realtime операций)

```typescript
interface CodenamesAPI {
  // Auth
  login(email: string, password: string): Promise<User>;
  register(email: string, password: string, displayName: string): Promise<User>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<User | null>;

  // Profile & Stats
  getUserProfile(userId: string): Promise<User>;
  updateUserProfile(data: Partial<User>): Promise<void>;
  getPlayerStats(userId: string): Promise<PlayerStats>;

  // Game History
  getGameHistory(userId: string, limit?: number): Promise<GameSummary[]>;
  getGameResult(gameId: string): Promise<GameResult>;

  // Question Bank
  getQuestionsForWord(word: string): Promise<CheckQuestion[]>;
  getRandomQuestion(word: string): Promise<CheckQuestion>;

  // Word Bank
  getWordBank(): Promise<WordEntry[]>;

  // Rooms (read-only, для Lobby)
  getPublicRooms(): Promise<RoomPreview[]>;
}

interface GameSummary {
  gameId: string;
  roomCode: string;
  winner: TeamColor;
  myTeam: TeamColor;
  myRole: "spymaster" | "operative";
  checkCorrect: number;
  checkTotal: number;
  playedAt: number;
}

interface GameResult {
  gameId: string;
  board: Card[]; // Полное поле со всеми цветами
  moveHistory: Move[];
  teams: Record<
    TeamColor,
    {
      players: PlayerInfo[];
      score: number;
    }
  >;
  winner: TeamColor;
  duration: number; // секунды
}

interface RoomPreview {
  code: string;
  playerCount: number;
  maxPlayers: number;
  status: RoomStatus;
  hostName: string;
}
```

---

## Mock Mode vs Real Mode

### Архитектура

```
┌─────────────────────────────────────────────────────────┐
│                    UI Components                         │
└─────────────────────────────────────────────────────────┘
                    │                │
                    ▼                ▼
┌──────────────────────┐  ┌────────────────────────┐
│  REST API Service    │  │  WebSocket Client       │
│  Layer               │  │                        │
│                      │  │  send(), on(), off()   │
│  login(), getStats() │  │                        │
└──────────────────────┘  └────────────────────────┘
         │                         │
    ┌────┴────┐              ┌─────┴─────┐
    ▼         ▼              ▼           ▼
┌────────┐ ┌────────┐  ┌────────┐  ┌────────┐
│  Mock  │ │  Real  │  │  Mock  │  │  Real  │
│ REST   │ │ REST   │  │  WS    │  │  WS    │
│Adapter │ │Adapter │  │ Client │  │ Client │
│        │ │        │  │        │  │        │
│ JSON + │ │Firebase│  │EventTar│  │Socket  │
│ Local  │ │+ Node  │  │get +   │  │.IO     │
│Storage │ │ API    │  │setTimeout│ │        │
└────────┘ └────────┘  └────────┘  └────────┘
```

### Переключение режимов

```typescript
// .env
VITE_USE_MOCK = true; // REST API: mock или real
VITE_USE_MOCK_AI = true; // AI сервисы: mock или real (отдельный переключатель)

// api/index.ts
import { mockRestAdapter } from "./mock-rest-adapter";
import { realRestAdapter } from "./real-rest-adapter";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export const api: CodenamesAPI = USE_MOCK ? mockRestAdapter : realRestAdapter;

// ws/index.ts
import { createMockWSClient } from "./mock-ws-client";
import { createRealWSClient } from "./real-ws-client";

export const createWSClient = USE_MOCK
  ? createMockWSClient
  : createRealWSClient;

// ai/index.ts
import { MockSpymasterService } from "./mock-spymaster";
import { RealSpymasterService } from "./real-spymaster";
import { MockCheckEvaluatorService } from "./mock-check-evaluator";
import { RealCheckEvaluatorService } from "./real-check-evaluator";

const USE_MOCK_AI = import.meta.env.VITE_USE_MOCK_AI !== "false";

export const aiSpymaster: AISpymasterService = USE_MOCK_AI
  ? new MockSpymasterService()
  : new RealSpymasterService();

export const aiCheckEvaluator: AICheckEvaluatorService = USE_MOCK_AI
  ? new MockCheckEvaluatorService()
  : new RealCheckEvaluatorService();
```

### Mock WebSocket Client

```typescript
interface WSClient {
  send(event: ClientEvent): void;
  on<T extends ServerEvent["type"]>(
    type: T,
    handler: (payload: Extract<ServerEvent, { type: T }>["payload"]) => void,
  ): void;
  off(type: string, handler: Function): void;
  disconnect(): void;
}

// Mock реализация — использует EventTarget + setTimeout
class MockWSClient implements WSClient {
  private emitter = new EventTarget();
  private gameState: Game | null = null;

  send(event: ClientEvent): void {
    // Обрабатываем событие локально, отправляем ответ с задержкой
    const delay = 100 + Math.random() * 200;
    setTimeout(() => {
      const responses = this.processEvent(event);
      for (const response of responses) {
        this.emitter.dispatchEvent(
          new CustomEvent("ws-event", { detail: response }),
        );
      }
    }, delay);
  }

  on<T extends ServerEvent["type"]>(
    type: T,
    handler: (payload: Extract<ServerEvent, { type: T }>["payload"]) => void,
  ): void {
    this.emitter.addEventListener("ws-event", ((e: CustomEvent) => {
      const event = e.detail as ServerEvent;
      if (event.type === type) {
        handler(event.payload as any);
      }
    }) as EventListener);
  }

  // ...
}
```

### Важные различия Mock/Real

| Аспект             | Mock Mode                    | Real Mode                           |
| ------------------ | ---------------------------- | ----------------------------------- |
| Цвета карточек     | Все данные на клиенте        | Фильтруются сервером                |
| Подсказки AI       | Алгоритм подбора категорий   | LLM API (Groq/OpenAI)               |
| Проверка знаний AI | Keyword matching             | LLM оценка                          |
| WebSocket          | EventTarget + setTimeout     | Socket.IO                           |
| Auth               | Локальный мок                | Firebase Auth                       |
| Session Token      | Мок: всегда один игрок       | UUID + localStorage + серверная Map |
| Данные             | В памяти (сбрасываются)      | Firestore / PostgreSQL              |
| Multiplayer        | Один "клиент" имитирует всех | Реальные подключения                |
| Задержка           | 100-300ms (симулированная)   | Реальная сетевая                    |

### Пример Mock-данных

```json
// mocks/words.json
[
  { "word": "closure", "category": "core-js", "difficulty": 1 },
  { "word": "hoisting", "category": "core-js", "difficulty": 1 },
  { "word": "prototype", "category": "core-js", "difficulty": 2 },
  { "word": "Promise", "category": "async", "difficulty": 1 },
  { "word": "async/await", "category": "async", "difficulty": 2 },
  { "word": "event loop", "category": "async", "difficulty": 3 },
  { "word": "generics", "category": "typescript", "difficulty": 2 },
  { "word": "WeakMap", "category": "data-structures", "difficulty": 3 }
]
```

```json
// mocks/questions/closure.json
[
  {
    "id": "closure-q1",
    "word": "closure",
    "question": "Что такое замыкание и приведите пример?",
    "referenceAnswer": "Замыкание — это функция, которая запоминает переменные из внешней области видимости, даже когда эта область уже завершила выполнение. Пример: function counter() { let count = 0; return () => ++count; }",
    "difficulty": 1,
    "tags": ["core-js", "scope"]
  },
  {
    "id": "closure-q2",
    "word": "closure",
    "question": "Как замыкания могут приводить к утечкам памяти?",
    "referenceAnswer": "Замыкание удерживает ссылку на весь Lexical Environment внешней функции. Если замыкание живёт долго (например, в обработчике событий), оно предотвращает сборку мусора для всех переменных этого окружения, даже тех, которые не используются в замыкании.",
    "difficulty": 3,
    "tags": ["core-js", "memory"]
  }
]
```

---

## Структура проекта (файловая система)

> **Примечание:** Эта структура отражает monorepo с NPM Workspaces. Все типы живут в `packages/shared/` и импортируются из `@project/shared`.

```
codenames/
├── package.json                 # workspaces: ["packages/*"]
├── tsconfig.base.json           # strict: true, общие настройки
├── packages/
│   ├── shared/                  # @project/shared — ВСЕ типы из этого документа
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts         # re-export
│   │       ├── types.ts         # User, Room, Game, Card, Clue, Move, TeamState...
│   │       ├── ws-events.ts     # ClientEvent, ServerEvent, ErrorCode
│   │       ├── ws-auth.ts       # WSHandshakeAuth, SessionRecord
│   │       ├── check.ts         # CheckQuestion, CheckSession, CheckResult
│   │       ├── ai.ts            # AISpymasterService, AICheckEvaluatorService
│   │       ├── word-bank.ts     # WordEntry, WordCategory, QuestionBank
│   │       └── constants.ts     # BOARD_SIZE, MAX_PLAYERS, TURN_TIME_DEFAULT...
│   ├── client/                  # @project/client
│   │   ├── package.json         # dependencies: { "@project/shared": "*" }
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── api/
│   │       │   ├── rest-api.ts              # CodenamesAPI interface export
│   │       │   ├── mock-rest-adapter.ts     # Mock реализация REST
│   │       │   ├── real-rest-adapter.ts     # Real реализация REST
│   │       │   └── index.ts                 # Переключение по env
│   │       ├── ws/
│   │       │   ├── ws-client.ts             # WSClient interface
│   │       │   ├── mock-ws-client.ts        # Mock WS client
│   │       │   ├── real-ws-client.ts        # Real WS client (Socket.IO)
│   │       │   ├── session.ts               # connectWithSession(), localStorage
│   │       │   └── index.ts                 # Переключение по env
│   │       ├── ai/
│   │       │   ├── mock-spymaster.ts        # Mock реализация
│   │       │   ├── mock-check-evaluator.ts  # Mock реализация
│   │       │   └── index.ts                 # Переключение по env
│   │       └── mocks/
│   │           ├── words.json               # Банк слов
│   │           └── questions/               # Вопросы по каждому слову
│   │               ├── closure.json
│   │               ├── promise.json
│   │               └── ...
│   └── server/                  # @project/server
│       ├── package.json         # dependencies: { "@project/shared": "*" }
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts                 # Express + Socket.IO setup
│           ├── rooms/
│           │   ├── room-manager.ts      # Управление комнатами
│           │   ├── room.ts              # Класс Room
│           │   └── game.ts              # Класс Game (state machine)
│           ├── ws/
│           │   ├── ws-handler.ts        # Обработка WS событий
│           │   ├── auth-middleware.ts    # Проверка Firebase токена
│           │   └── session-middleware.ts # Session Token логика
│           ├── api/
│           │   ├── auth.ts              # REST: /api/auth/*
│           │   ├── profile.ts           # REST: /api/profile/*
│           │   ├── rooms.ts             # REST: /api/rooms (list)
│           │   └── questions.ts         # REST: /api/questions/*
│           └── data/
│               ├── words.ts             # Банк слов
│               └── questions.ts         # Банк вопросов
```

---

## Backend (для Real Mode)

### Node.js + Express + Socket.IO

### Security: Проверка токена на WebSocket

```typescript
// packages/server/src/ws/auth-middleware.ts
import { Server, Socket } from "socket.io";
import admin from "firebase-admin";

export function setupAuthMiddleware(io: Server) {
  io.use(async (socket: Socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error("AUTH_REQUIRED"));
    }

    try {
      const decoded = await admin.auth().verifyIdToken(token);
      socket.data.userId = decoded.uid;
      socket.data.displayName = decoded.name || "Anonymous";
      next();
    } catch (err) {
      next(new Error("INVALID_TOKEN"));
    }
  });
}
```

> **Важно:** Без проверки токена любой может подключиться и подменить данные. Настройте авторизацию до 4-й недели. Session middleware (см. раздел "Session Token") подключается ПОСЛЕ auth middleware.
