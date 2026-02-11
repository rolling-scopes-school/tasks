# Data Contracts: Codenames — Interview Edition (Вариант B: Firebase Host-Based)

Этот документ описывает TypeScript типы, схему Firebase Realtime Database, AI интерфейсы и конфигурацию Shared Types для Codenames. Используйте эти контракты как основу для реализации.

> **Архитектура:** В Варианте B нет собственного сервера. Создатель комнаты (Host) запускает State Machine в своём браузере. Firebase Realtime Database синхронизирует состояние между игроками. Подробнее: [README.md](./README.md).

## Ответственные за контракты

| Кодовое имя                    | Роль         | Зона ответственности в контрактах                                             |
| ------------------------------ | ------------ | ----------------------------------------------------------------------------- |
| **Великий Мёрдж** (Lead)       | Lead         | Общая структура типов, Auth, Firebase config, Shared Types                    |
| **Тихий Сокет** (Firebase-Dev) | Firebase-Dev | Firebase Realtime DB Schema, Security Rules, Host Logic, PlayerAction         |
| **Быстрый Рендер** (Board-Dev) | Board-Dev    | GameStateForPlayer, PlayerVisibleCard, Board-related types, Client State Sync |
| **Зоркий Линтер** (Check-Dev)  | Check-Dev    | Check Phase types, CheckQuestion, CheckSession, CheckResult                   |
| **Мудрый Мок** (AI-Dev)        | AI-Dev       | AI Interfaces (Spymaster, Check Evaluator), Mock/Real mode                    |
| **Ловкий Роутер** (Lobby-Dev)  | Lobby-Dev    | RoomPreview, Lobby, PlayerStats, Profile                                      |

> **Правило:** Если **Тихий Сокет** (Firebase-Dev) меняет схему Firebase — он обновляет этот документ И пингует **Быстрого Рендера** (Board-Dev). Если **Зоркий Линтер** (Check-Dev) добавляет поле в `CheckResult` — он обновляет документ И пингует **Мудрого Мока** (AI-Dev). Контракт — это договор. Ломать его в одностороннем порядке запрещено.

---

## Shared Types (общая папка вместо NPM Workspaces)

> **Ключевая идея:** NPM Workspaces / monorepo — это overkill для Firebase-only проекта без сервера. Вместо этого все типы из данного документа живут в общей папке `src/shared/`. И хост-логика, и UI-страницы импортируют типы оттуда. Если **Тихий Сокет** (Firebase-Dev) переименует поле в `PlayerAction` — все компоненты, использующие этот тип, не скомпилируются. Это не баг, это защита.

### Структура проекта

```
src/
├── shared/                      # Общие типы (импортируются всеми)
│   ├── types.ts                 # User, Room, Game, Card, Clue, Move, TeamState...
│   ├── firebase-schema.ts       # FirebaseRoom, FirebasePlayer, PlayerAction, пути
│   ├── check.ts                 # CheckQuestion, CheckSession, CheckResult
│   ├── ai.ts                    # AISpymasterService, AICheckEvaluatorService
│   ├── word-bank.ts             # WordEntry, WordCategory, QuestionBank
│   └── constants.ts             # BOARD_SIZE, MAX_PLAYERS, TURN_TIME_DEFAULT...
├── host/                        # Логика хоста (State Machine)
│   ├── state-machine.ts         # GameStateMachine — только в браузере хоста
│   ├── action-listener.ts       # onChildAdded на rooms/{code}/actions
│   └── firebase-writer.ts       # Запись game state в Firebase
├── firebase/                    # Firebase конфигурация и хелперы
│   ├── config.ts                # Firebase App init
│   ├── auth.ts                  # Firebase Auth (login, register, onAuthStateChanged)
│   ├── db.ts                    # ref(), set(), push(), onValue(), onChildAdded()
│   └── paths.ts                 # Хелперы путей: roomRef(code), gameRef(code), ...
├── pages/                       # UI-страницы
│   ├── lobby/                   # Лобби (список комнат, создание)
│   ├── room/                    # Комната (выбор ролей, ожидание)
│   ├── game/                    # Игровое поле (5x5 board)
│   ├── results/                 # Результаты игры
│   └── profile/                 # Профиль и статистика
├── ai/                          # AI моки
│   ├── mock-spymaster.ts
│   ├── mock-check-evaluator.ts
│   └── index.ts
└── mocks/                       # Mock-данные (JSON)
    ├── words.json
    └── questions/
        ├── closure.json
        ├── promise.json
        └── ...
```

### Пример импорта

```typescript
// src/pages/game/board.ts
import { Card, CardColor, TeamColor } from "../../shared/types";
import { FirebasePlayer } from "../../shared/firebase-schema";

// src/host/state-machine.ts
import { Game, GamePhase, Move, Clue } from "../../shared/types";
import { PlayerAction } from "../../shared/firebase-schema";
```

### Почему это важно

- **Тихий Сокет** (Firebase-Dev) переименовал поле `type` в `PlayerAction` — все обработчики в `state-machine.ts` и клиентском коде сразу падают на `tsc`. Не через 3 дня на демо, а прямо сейчас.
- **Зоркий Линтер** (Check-Dev) добавил `timeSpent` в `CheckResult` — **Мудрый Мок** (AI-Dev) видит ошибку компиляции и добавляет поле в мок.
- **Ловкий Роутер** (Lobby-Dev) изменил `RoomPreview` — страница лобби не скомпилируется, пока не обновит шаблон.
- `npm run typecheck` в CI проверяет весь проект. Сломанный контракт = красный билд = нельзя мёрджить.

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
  hostId: string; // ID создателя комнаты (запускает State Machine в браузере!)
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

> **Отличие от Варианта A:** В Варианте A `hostId` — просто создатель комнаты. В Варианте B `hostId` — это игрок, **в чьём браузере работает State Machine**. Он единственный, кто имеет право писать в `rooms/{code}/game/` и читать `rooms/{code}/board-secret/`. Если хост закроет вкладку — игра останавливается.

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
  color: CardColor; // Только для хоста и Spymaster!
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

## Firebase Realtime Database Schema

> **Ключевая идея:** Вместо WebSocket протокола (Вариант A) вся синхронизация идёт через Firebase Realtime Database. Хост подписывается на `actions/`, обрабатывает команды и записывает результат в `game/`. Игроки подписаны на `game/` через `onValue()` и получают обновления автоматически.

### Полная схема дерева

```
rooms/
  {roomCode}/
    meta/                        # Метаданные комнаты
      code: string               # "js-masters-42"
      hostId: string             # Firebase UID хоста (владелец State Machine)
      status: RoomStatus         # 'waiting' | 'playing' | 'finished'
      settings/                  # Настройки комнаты
        turnTimeSeconds: number
        checkMode: CheckMode
        isPublic: boolean
        maxPlayers: number
      createdAt: number          # timestamp
    teams/
      red/
        spymasterId: string | null
        operativeIds/            # { [oderId]: true } — Firebase-формат массива
          {oderId}: true
        score: number
        cardsLeft: number
      blue/
        spymasterId: string | null
        operativeIds/
          {oderId}: true
        score: number
        cardsLeft: number
    players/                     # Все подключённые игроки
      {playerId}/
        displayName: string
        team: TeamColor | null   # null — ещё не выбрал команду
        role: string | null      # 'spymaster' | 'operative' | null
        connected: boolean       # Онлайн-статус (onDisconnect → false)
        lastSeen: number         # timestamp
    game/                        # Публичное игровое состояние (все могут читать)
      board-public/              # Card[] без секретных цветов
        {cardId}/
          word: string
          status: CardStatus     # 'hidden' | 'revealed'
          color: CardColor | null  # null если скрыт, цвет если открыт
          position: number       # 0-24
      currentTurn: TeamColor     # 'red' | 'blue'
      currentPhase: GamePhase    # 'clue' | 'guess' | 'check' | 'finished'
      clue/                      # Текущая подсказка (null если нет)
        word: string
        count: number
        givenBy: string
        team: TeamColor
        timestamp: number
      guessesRemaining: number
      turnEndTime: number        # timestamp окончания таймера
      winner: TeamColor | null
    board-secret/                # Секретные цвета — ТОЛЬКО хост может читать!
      {cardId}/
        color: CardColor         # Настоящий цвет карточки
    actions/                     # Игроки пушат команды сюда
      {pushId}/
        type: string             # 'give-clue' | 'guess' | 'end-turn' | ...
        playerId: string
        payload: object
        timestamp: number
    check/                       # Текущее состояние Check Phase
      active: boolean
      playerId: string           # Кто отвечает
      questionId: string
      question: string
      checkDeadline: number      # timestamp дедлайна ответа
    history/                     # История ходов
      {pushId}/
        playerId: string
        cardId: string
        cardWord: string
        cardColor: CardColor
        wasOwnTeamCard: boolean
        checkResult: CheckResult | null
        timestamp: number
```

### TypeScript интерфейсы для Firebase

```typescript
// src/shared/firebase-schema.ts

/** Полная структура комнаты в Firebase Realtime Database */
interface FirebaseRoom {
  meta: RoomMeta;
  teams: { red: FirebaseTeamState; blue: FirebaseTeamState };
  players: Record<string, FirebasePlayer>;
  game?: FirebaseGameState;
  "board-secret"?: Record<string, { color: CardColor }>;
  actions?: Record<string, PlayerAction>;
  check?: CheckState;
  history?: Record<string, Move>;
}

/** Метаданные комнаты */
interface RoomMeta {
  code: string;
  hostId: string; // Firebase UID — владелец State Machine
  status: RoomStatus;
  settings: RoomSettings;
  createdAt: number;
}

/** Состояние команды в Firebase (operativeIds — объект, не массив) */
interface FirebaseTeamState {
  spymasterId: string | null;
  operativeIds: Record<string, true>; // Firebase-формат: { oderId: true }
  score: number;
  cardsLeft: number;
}

/** Игрок в Firebase */
interface FirebasePlayer {
  displayName: string;
  team: TeamColor | null;
  role: "spymaster" | "operative" | null;
  connected: boolean;
  lastSeen: number;
}

/** Публичное игровое состояние (видно всем) */
interface FirebaseGameState {
  "board-public": Record<string, FirebasePublicCard>;
  currentTurn: TeamColor;
  currentPhase: GamePhase;
  clue: Clue | null;
  guessesRemaining: number;
  turnEndTime: number;
  winner: TeamColor | null;
}

/** Карточка в публичном поле (без секретного цвета) */
interface FirebasePublicCard {
  word: string;
  status: CardStatus;
  color: CardColor | null; // null если скрыт, цвет если открыт
  position: number;
}

/** Состояние Check Phase */
interface CheckState {
  active: boolean;
  playerId: string;
  questionId: string;
  question: string;
  checkDeadline: number;
}

/** Действие игрока (пушится в rooms/{code}/actions/) */
interface PlayerAction {
  type: "give-clue" | "guess" | "end-turn" | "check-answer" | "check-evaluate";
  playerId: string;
  payload: Record<string, unknown>;
  timestamp: number;
}
```

### Хелперы путей Firebase

```typescript
// src/firebase/paths.ts
import { ref, DatabaseReference } from "firebase/database";
import { db } from "./config";

/** Корень комнаты */
export function roomRef(code: string): DatabaseReference {
  return ref(db, `rooms/${code}`);
}

/** Метаданные комнаты */
export function roomMetaRef(code: string): DatabaseReference {
  return ref(db, `rooms/${code}/meta`);
}

/** Команды */
export function teamsRef(code: string): DatabaseReference {
  return ref(db, `rooms/${code}/teams`);
}

/** Конкретный игрок */
export function playerRef(code: string, playerId: string): DatabaseReference {
  return ref(db, `rooms/${code}/players/${playerId}`);
}

/** Все игроки */
export function playersRef(code: string): DatabaseReference {
  return ref(db, `rooms/${code}/players`);
}

/** Публичное игровое состояние */
export function gameRef(code: string): DatabaseReference {
  return ref(db, `rooms/${code}/game`);
}

/** Секретные цвета (только для хоста) */
export function boardSecretRef(code: string): DatabaseReference {
  return ref(db, `rooms/${code}/board-secret`);
}

/** Очередь действий игроков */
export function actionsRef(code: string): DatabaseReference {
  return ref(db, `rooms/${code}/actions`);
}

/** Check Phase состояние */
export function checkRef(code: string): DatabaseReference {
  return ref(db, `rooms/${code}/check`);
}

/** История ходов */
export function historyRef(code: string): DatabaseReference {
  return ref(db, `rooms/${code}/history`);
}
```

---

## Firebase Security Rules

> **Критически важно:** Security Rules — это единственная линия защиты от читерства. Без них любой игрок может открыть DevTools и прочитать секретные цвета карточек. Rules гарантируют, что `board-secret` читается ТОЛЬКО хостом, а `game` записывается ТОЛЬКО хостом.

```json
{
  "rules": {
    "rooms": {
      "$roomCode": {
        "meta": {
          ".read": true,
          ".write": "auth != null"
        },
        "teams": {
          ".read": true,
          ".write": "auth != null"
        },
        "players": {
          ".read": true,
          "$playerId": {
            ".write": "$playerId === auth.uid"
          }
        },
        "game": {
          ".read": true,
          ".write": "data.parent().child('meta/hostId').val() === auth.uid"
        },
        "board-secret": {
          ".read": "data.parent().child('meta/hostId').val() === auth.uid",
          ".write": "data.parent().child('meta/hostId').val() === auth.uid"
        },
        "actions": {
          ".read": "data.parent().child('meta/hostId').val() === auth.uid",
          ".write": "auth != null"
        },
        "check": {
          ".read": true,
          ".write": "data.parent().child('meta/hostId').val() === auth.uid"
        },
        "history": {
          ".read": true,
          ".write": "data.parent().child('meta/hostId').val() === auth.uid"
        }
      }
    }
  }
}
```

### Разбор правил безопасности

| Узел            | `.read`     | `.write`         | Почему                                                                                          |
| --------------- | ----------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| `meta/`         | Все         | Авторизованные   | Метаданные видны всем, менять может любой авторизованный (создание комнаты, обновление статуса) |
| `teams/`        | Все         | Авторизованные   | Выбор команд — общая операция                                                                   |
| `players/{id}`  | Все         | Только сам игрок | Игрок пишет только свои данные (`connected`, `team`, `role`)                                    |
| `game/`         | Все         | Только хост      | Все видят игровое поле, но менять состояние может только хост                                   |
| `board-secret/` | Только хост | Только хост      | **Главная защита!** Секретные цвета не утекают через DevTools                                   |
| `actions/`      | Только хост | Авторизованные   | Игроки пушат команды, хост их читает и обрабатывает                                             |
| `check/`        | Все         | Только хост      | Check Phase состояние видно всем, управляет хост                                                |
| `history/`      | Все         | Только хост      | История ходов — для отображения и результатов                                                   |

> **Защита от читерства:** Игрок не может прочитать `board-secret` через Firebase SDK или REST API — Security Rules блокируют запрос на уровне Firebase сервера. Даже если игрок откроет DevTools и попытается обратиться к `rooms/{code}/board-secret` — Firebase вернёт `PERMISSION_DENIED`.

---

## GameStateForPlayer (фильтрованное состояние)

> **Критически важно:** Хост НИКОГДА не записывает цвета скрытых карточек в `game/board-public/`. Это фундаментальное правило безопасности игры. Цвета появляются в публичном поле только после раскрытия карточки.

```typescript
/** Публичная карточка — то, что видят все игроки через onValue */
interface PlayerVisibleCard {
  id: string;
  word: string;
  status: CardStatus;
  color: CardColor | null; // null, если hidden; цвет, если revealed
  position: number;
}
```

**Логика записи публичной карточки (в хосте):**

```typescript
// src/host/firebase-writer.ts

function toPublicCard(card: Card): FirebasePublicCard {
  return {
    word: card.word,
    status: card.status,
    // Ключевой момент: скрытая карточка НЕ получает цвет в публичном поле
    color: card.status === "revealed" ? card.color : null,
    position: card.position,
  };
}
```

**Spymaster видит цвета:** Капитан команды знает цвета через отдельный канал. Варианты реализации:

1. **Простой (рекомендуемый):** Хост записывает цвета капитанов в отдельный узел `rooms/{code}/spymaster-view/{teamColor}` с правилом `.read` только для соответствующего spymasterId.
2. **Альтернативный:** Капитан является хостом (или хост отправляет цвета через отдельный узел).

---

## Player Action Protocol (замена WebSocket Protocol)

> **Принцип:** Вместо WebSocket-событий (Вариант A) игроки записывают команды в Firebase через `push()`. Хост подписан на `onChildAdded` и обрабатывает их последовательно через State Machine.

### Типизированные действия игроков

```typescript
// src/shared/firebase-schema.ts

/** Все возможные действия игрока (пушатся в rooms/{code}/actions/) */
type PlayerAction =
  | {
      type: "set-role";
      playerId: string;
      payload: { team: TeamColor; role: "spymaster" | "operative" };
      timestamp: number;
    }
  | {
      type: "give-clue";
      playerId: string;
      payload: { word: string; count: number };
      timestamp: number;
    }
  | {
      type: "guess";
      playerId: string;
      payload: { cardId: string };
      timestamp: number;
    }
  | {
      type: "end-turn";
      playerId: string;
      payload: Record<string, never>;
      timestamp: number;
    }
  | {
      type: "check-answer";
      playerId: string;
      payload: { answer: string };
      timestamp: number;
    }
  | {
      type: "check-evaluate";
      playerId: string;
      payload: { result: "know" | "dont-know" };
      timestamp: number;
    };
```

### Как игрок отправляет действие

```typescript
// src/firebase/actions.ts
import { push, serverTimestamp } from "firebase/database";
import { actionsRef } from "./paths";
import { auth } from "./config";

/** Отправить действие в очередь хоста */
export function sendAction(
  roomCode: string,
  type: PlayerAction["type"],
  payload: Record<string, unknown>,
): void {
  const user = auth.currentUser;
  if (!user) throw new Error("AUTH_REQUIRED");

  push(actionsRef(roomCode), {
    type,
    playerId: user.uid,
    payload,
    timestamp: Date.now(),
  });
}

// Использование:
sendAction("js-masters-42", "give-clue", { word: "память", count: 3 });
sendAction("js-masters-42", "guess", { cardId: "card-7" });
sendAction("js-masters-42", "end-turn", {});
sendAction("js-masters-42", "check-answer", {
  answer: "Замыкание — это функция...",
});
sendAction("js-masters-42", "check-evaluate", { result: "know" });
```

### Как хост слушает действия

```typescript
// src/host/action-listener.ts
import { onChildAdded } from "firebase/database";
import { actionsRef } from "../firebase/paths";
import { PlayerAction } from "../shared/firebase-schema";

export function listenActions(
  roomCode: string,
  onAction: (action: PlayerAction) => void,
): () => void {
  const unsubscribe = onChildAdded(actionsRef(roomCode), (snapshot) => {
    const action = snapshot.val() as PlayerAction;
    onAction(action);
  });

  return unsubscribe;
}
```

### Поток данных: Игрок делает ход

```
Игрок (Браузер)               Firebase RTDB                Хост (Браузер)
  │                              │                            │
  │  push(actions/, {            │                            │
  │    type: 'guess',            │                            │
  │    cardId: 'card-7'          │                            │
  │  })                          │                            │
  │ ────────────────────────▶   │                            │
  │                              │  onChildAdded(actions/)    │
  │                              │ ──────────────────────▶   │
  │                              │                            │  1. Валидация: чей ход?
  │                              │                            │  2. StateMachine.process()
  │                              │                            │  3. Обновить board-public/card-7
  │                              │                            │     color: 'red' (раскрытие)
  │                              │      set(game/, {...})     │
  │                              │ ◀──────────────────────   │
  │  onValue(game/)              │                            │
  │ ◀────────────────────────   │                            │
  │                              │                            │
  │  UI обновляется              │                            │
  │  автоматически               │                            │
```

### Сравнение с WebSocket Protocol (Вариант A)

| Аспект                 | Вариант A (WebSocket)                   | Вариант B (Firebase Actions)                   |
| ---------------------- | --------------------------------------- | ---------------------------------------------- |
| Отправка команды       | `socket.emit('game:guess', { cardId })` | `push(actionsRef, { type: 'guess', ... })`     |
| Получение обновления   | `socket.on('game:state', handler)`      | `onValue(gameRef, handler)`                    |
| Обработка на сервере   | WS-handler на Node.js                   | State Machine в браузере хоста                 |
| Транспорт              | Socket.IO                               | Firebase Realtime Database                     |
| Session восстановление | Session Token + localStorage            | Firebase Auth + `onValue` (автовосстановление) |
| Задержка               | ~50-100ms (WS)                          | ~100-300ms (Firebase)                          |

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

### Check Phase в Firebase

Когда хост инициирует Check Phase, он записывает состояние в `rooms/{code}/check/`:

```typescript
// Хост записывает:
set(checkRef(roomCode), {
  active: true,
  playerId: "player-who-guessed",
  questionId: "closure-q1",
  question: "Что такое замыкание и приведите пример?",
  checkDeadline: Date.now() + 30_000, // 30 секунд на ответ
});
```

Игрок видит попап и отправляет ответ через `push(actionsRef)`:

```typescript
sendAction(roomCode, "check-answer", { answer: "Замыкание — это функция..." });
```

В режиме `self-peer` другой игрок оценивает:

```typescript
sendAction(roomCode, "check-evaluate", { result: "know" });
```

Хост обрабатывает результат, обновляет очки и завершает Check Phase:

```typescript
set(checkRef(roomCode), {
  active: false,
  playerId: "",
  questionId: "",
  question: "",
  checkDeadline: 0,
});
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

> **Важно:** Все AI интерфейсы реализованы через моки. Реальная интеграция с LLM — отдельная задача, которая подключается через тот же интерфейс без изменения остального кода. **Мудрый Мок** (AI-Dev) отвечает за моки, но интерфейсы согласует с **Зорким Линтером** (Check-Dev).

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

### Где AI вызывается (Вариант B)

В Варианте B AI работает **в браузере хоста**, а не на сервере:

```typescript
// src/host/state-machine.ts
import { aiSpymaster, aiCheckEvaluator } from "../ai";

// Когда AI-капитан должен дать подсказку:
const clue = await aiSpymaster.generateClue(context);
// Хост записывает подсказку в Firebase
set(ref(db, `rooms/${code}/game/clue`), clue);

// Когда AI оценивает ответ:
const result = await aiCheckEvaluator.evaluateAnswer(checkContext);
// Хост записывает результат
```

---

## Presence (Онлайн-статус)

> Firebase Realtime Database имеет встроенный механизм `onDisconnect` — идеально подходит для отслеживания подключений без дополнительного сервера.

```typescript
// src/firebase/presence.ts
import {
  ref,
  set,
  onDisconnect,
  serverTimestamp,
  onValue,
} from "firebase/database";
import { db, auth } from "./config";

/** Настроить отслеживание подключения для игрока */
export function setupPresence(roomCode: string): void {
  const user = auth.currentUser;
  if (!user) return;

  const playerRef = ref(db, `rooms/${roomCode}/players/${user.uid}`);
  const connectedRef = ref(db, ".info/connected");

  onValue(connectedRef, (snap) => {
    if (snap.val() === true) {
      // Установить connected: true
      set(ref(db, `rooms/${roomCode}/players/${user.uid}/connected`), true);
      set(
        ref(db, `rooms/${roomCode}/players/${user.uid}/lastSeen`),
        Date.now(),
      );

      // При отключении — автоматически поставить connected: false
      onDisconnect(
        ref(db, `rooms/${roomCode}/players/${user.uid}/connected`),
      ).set(false);
      onDisconnect(
        ref(db, `rooms/${roomCode}/players/${user.uid}/lastSeen`),
      ).set(Date.now());
    }
  });
}
```

> **Преимущество перед Вариантом A:** Не нужен Session Token, не нужна серверная `Map<sessionToken, SessionRecord>`. Firebase Auth + `onDisconnect` + `onValue` дают reconnect "из коробки". Если игрок нажал F5 — Firebase Auth восстанавливает сессию, `onValue` восстанавливает состояние, `connected: true` ставится автоматически.

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
│  Data Service        │  │  Firebase Client        │
│  Layer               │  │                        │
│                      │  │  onValue(), push(),    │
│  getStats(),         │  │  set(), onChildAdded() │
│  getProfile()        │  │                        │
└──────────────────────┘  └────────────────────────┘
         │                         │
    ┌────┴────┐              ┌─────┴─────┐
    ▼         ▼              ▼           ▼
┌────────┐ ┌────────┐  ┌────────┐  ┌────────┐
│  Mock  │ │  Real  │  │  Mock  │  │  Real  │
│ Data   │ │ Data   │  │Firebase│  │Firebase│
│Service │ │Service │  │ Client │  │ Client │
│        │ │        │  │        │  │        │
│ JSON + │ │Firebase│  │In-mem  │  │Firebase│
│ Local  │ │ RTDB   │  │object +│  │ RTDB   │
│Storage │ │        │  │EventTar│  │ SDK    │
│        │ │        │  │get     │  │        │
└────────┘ └────────┘  └────────┘  └────────┘
```

### Переключение режимов

```typescript
// .env
VITE_USE_MOCK = true; // Firebase: mock или real
VITE_USE_MOCK_AI = true; // AI сервисы: mock или real (отдельный переключатель)

// src/firebase/index.ts
import { createMockFirebaseClient } from "./mock-firebase-client";
import { createRealFirebaseClient } from "./real-firebase-client";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export const firebaseClient = USE_MOCK
  ? createMockFirebaseClient()
  : createRealFirebaseClient();

// src/ai/index.ts
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

### Mock Firebase Client

```typescript
// src/firebase/mock-firebase-client.ts

interface MockFirebaseClient {
  /** Имитация onValue — подписка на изменения */
  onValue(path: string, callback: (data: unknown) => void): () => void;
  /** Имитация set — запись данных */
  set(path: string, data: unknown): void;
  /** Имитация push — добавление в список */
  push(path: string, data: unknown): string;
  /** Имитация onChildAdded — подписка на новых детей */
  onChildAdded(path: string, callback: (data: unknown) => void): () => void;
}

class MockFirebaseClientImpl implements MockFirebaseClient {
  private data: Record<string, unknown> = {};
  private emitter = new EventTarget();

  set(path: string, data: unknown): void {
    this.data[path] = data;
    // Уведомить подписчиков с задержкой (имитация сети)
    const delay = 50 + Math.random() * 100;
    setTimeout(() => {
      this.emitter.dispatchEvent(
        new CustomEvent(`change:${path}`, { detail: data }),
      );
    }, delay);
  }

  onValue(path: string, callback: (data: unknown) => void): () => void {
    const handler = ((e: CustomEvent) => callback(e.detail)) as EventListener;
    this.emitter.addEventListener(`change:${path}`, handler);
    // Сразу вернуть текущее значение
    if (this.data[path] !== undefined) {
      callback(this.data[path]);
    }
    return () => this.emitter.removeEventListener(`change:${path}`, handler);
  }

  push(path: string, data: unknown): string {
    const pushId = `mock-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    this.set(`${path}/${pushId}`, data);
    this.emitter.dispatchEvent(
      new CustomEvent(`child-added:${path}`, { detail: data }),
    );
    return pushId;
  }

  onChildAdded(path: string, callback: (data: unknown) => void): () => void {
    const handler = ((e: CustomEvent) => callback(e.detail)) as EventListener;
    this.emitter.addEventListener(`child-added:${path}`, handler);
    return () =>
      this.emitter.removeEventListener(`child-added:${path}`, handler);
  }
}
```

### Важные различия Mock/Real

| Аспект             | Mock Mode                            | Real Mode                           |
| ------------------ | ------------------------------------ | ----------------------------------- |
| Цвета карточек     | Все данные на клиенте (один браузер) | Защищены Firebase Security Rules    |
| Подсказки AI       | Алгоритм подбора категорий           | LLM API (Groq/OpenAI)               |
| Проверка знаний AI | Keyword matching                     | LLM оценка                          |
| Firebase           | In-memory объект + EventTarget       | Firebase Realtime Database SDK      |
| Auth               | Локальный мок (фейковый user)        | Firebase Auth                       |
| Данные             | В памяти (сбрасываются при F5)       | Персистентные в Firebase            |
| Multiplayer        | Один браузер имитирует всех          | Реальные подключения через Firebase |
| Задержка           | 50-150ms (симулированная)            | 100-300ms (реальная Firebase)       |
| Host Logic         | State Machine работает локально      | State Machine в браузере хоста      |

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

## REST API (минимальный)

> **Для Варианта B REST API практически не нужен** — Firebase Realtime Database обрабатывает все real-time операции. Данные, которые в Варианте A хранятся в PostgreSQL/Firestore и отдаются через REST, здесь читаются напрямую из Firebase.

```typescript
interface CodenamesDataService {
  // Auth — через Firebase Auth SDK (не REST)
  // login, register, logout — Firebase Auth

  // Profile & Stats (читаем из Firebase RTDB)
  getUserProfile(userId: string): Promise<User>;
  updateUserProfile(data: Partial<User>): Promise<void>;
  getPlayerStats(userId: string): Promise<PlayerStats>;

  // Game History (читаем из Firebase RTDB)
  getGameHistory(userId: string, limit?: number): Promise<GameSummary[]>;
  getGameResult(gameId: string): Promise<GameResult>;

  // Question Bank (локальные JSON или Firebase)
  getQuestionsForWord(word: string): Promise<CheckQuestion[]>;
  getRandomQuestion(word: string): Promise<CheckQuestion>;

  // Word Bank (локальные JSON или Firebase)
  getWordBank(): Promise<WordEntry[]>;

  // Rooms (читаем из Firebase RTDB через onValue)
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

interface PlayerInfo {
  id: string;
  displayName: string;
  avatarUrl?: string;
}
```

---

## Константы

```typescript
// src/shared/constants.ts

export const BOARD_SIZE = 25; // 5x5
export const BOARD_COLS = 5;
export const BOARD_ROWS = 5;

export const RED_CARDS = 9; // Команда, ходящая первой
export const BLUE_CARDS = 8;
export const NEUTRAL_CARDS = 7;
export const BOMB_CARDS = 1;

export const MAX_PLAYERS = 10;
export const MIN_PLAYERS = 4;

export const TURN_TIME_DEFAULT = 120; // секунд
export const CHECK_TIME_DEFAULT = 30; // секунд на ответ

export const ROOM_CODE_LENGTH = 6; // Длина кода комнаты
export const ROOM_EXPIRY_MS = 3_600_000; // 1 час — автоудаление неактивных комнат

export const FIREBASE_MAX_LISTENERS = 100; // Free Tier: ~100 одновременных подключений
```

---

## Ошибки

```typescript
type ErrorCode =
  | "ROOM_NOT_FOUND"
  | "ROOM_FULL"
  | "NOT_YOUR_TURN"
  | "INVALID_ACTION"
  | "AUTH_REQUIRED"
  | "HOST_DISCONNECTED" // Хост закрыл вкладку (специфично для Варианта B)
  | "ACTION_IN_PROGRESS"
  | "PERMISSION_DENIED"; // Firebase Security Rules rejection

interface GameError {
  message: string;
  code: ErrorCode;
}
```

> **`HOST_DISCONNECTED`** — специфичная ошибка Варианта B. Если хост закрывает вкладку, State Machine останавливается. Игроки видят `connected: false` у хоста и показывают сообщение "Хост отключился. Игра приостановлена". Подробнее: [risks-and-mitigations.md](./risks-and-mitigations.md).
