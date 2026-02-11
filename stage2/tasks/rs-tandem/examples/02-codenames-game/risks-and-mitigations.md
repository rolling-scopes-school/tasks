# Risks & Mitigations: Codenames — Interview Edition

Этот документ описывает типичные риски при разработке Codenames и стратегии их минимизации.

## Bus Factor (6 человек)

### Риск

Команда из 6 человек — это больше вероятность, что кто-то "отвалится" или заболеет. Статистика показывает, что в больших командах 1-2 человека часто снижают активность к финалу.

### Митигация

1. **Парное владение кодом** — каждый модуль должны понимать минимум 2 человека
2. **Документация в коде** — JSDoc для сложной логики (state machine, WS handler)
3. **Code Review** — все PR проходят через 2 ревьюера (ротация пар)
4. **Weekly demos** — каждый показывает свой прогресс команде

### Сценарии

| Кто выбыл | Неделя | Что делать |
|-----------|--------|------------|
| Lead | 1-2 | WS-Dev берёт CI/CD, Lobby берёт Auth |
| Lead | 3-5 | Убрать Theme Switcher, упростить auth (только email) |
| WS-Dev | 1-2 | **Критично!** Переключиться на Firebase Realtime вместо custom WS |
| WS-Dev | 3-5 | Упростить: убрать reconnection, spectator mode, оставить базовую state machine |
| Board | 1-2 | AI-Dev берёт Game Board (упрощённый, без анимаций) |
| Board | 3-5 | Без анимаций, базовая сетка. Карточки просто меняют цвет |
| Check | 1-2 | AI-Dev берёт Check Phase (только Self/Peer, без AI mode) |
| Check | 3-5 | Self/Peer only, 20 вопросов, без расширения |
| AI-Dev | 1-2 | Check берёт Solo Mode, подсказки — хардкод из файла |
| AI-Dev | 3-5 | Solo Mode с рандомными подсказками, без mock алгоритма |
| Lobby | 1-2 | Lead берёт Lobby (минимальный), Profile откладывается |
| Lobby | 3-5 | Минимальный Lobby (только create/join), без Results и Profile |

> **Самый критичный:** WS-Dev. Без него нет мультиплеера. Если WS-Dev выбывает рано, переключайтесь на BaaS (Firebase Realtime или Supabase Realtime).

---

## WebSocket Debugging Hell

### Риск

WebSocket баги — одни из самых сложных для отладки:
- Нет пар request/response в DevTools (в отличие от REST)
- Состояние рассинхронизируется между сервером и несколькими клиентами
- Race conditions при одновременных действиях
- Соединение "тихо" падает без ошибок

### Проблемы

| Проблема | Описание |
|----------|----------|
| Нет логов | WS события не видны в Network по умолчанию |
| State desync | Сервер показывает одно, клиент — другое |
| Disconnect silently | Соединение закрылось, но клиент не знает |
| Race conditions | Два игрока кликают одновременно |
| Replay | Невозможно "повторить" сценарий бага |

### Митигация

1. **Структурированное логирование** — каждое WS событие логируется с timestamp
2. **Chrome DevTools** → Network → WS tab → Messages для просмотра трафика
3. **Event replay** на сервере для воспроизведения багов
4. **Unit тесты для state machine** — чистые функции, легко тестировать
5. **Integration тесты с mock WS сервером**

### Debug Toolkit

```typescript
// ws-logger.ts — подключается к WSClient
function createWSLogger(client: WSClient): WSClient {
  const originalSend = client.send.bind(client);
  const originalOn = client.on.bind(client);

  client.send = (event: ClientEvent) => {
    console.log(
      `%c>>> OUT [${new Date().toISOString()}]`,
      'color: #42a5f5',
      event.type,
      event.payload
    );
    originalSend(event);
  };

  client.on = ((type: string, handler: Function) => {
    originalOn(type, (payload: unknown) => {
      console.log(
        `%c<<< IN  [${new Date().toISOString()}]`,
        'color: #4caf50',
        type,
        payload
      );
      handler(payload);
    });
  }) as typeof client.on;

  return client;
}

// Использование
const wsClient = createWSLogger(createWSClient());
```

### Время

Закладывайте **+5-8 часов** на отладку WebSocket проблем сверх базового эстимейта.

---

## Game State Sync & Race Conditions

### Риск

Несколько игроков кликают карточки одновременно. Сервер обработает один клик, отклонит другие. Клиенты покажут несогласованное состояние.

### Сценарии

| Сценарий | Что происходит | Как ломается |
|----------|----------------|--------------|
| 2 клика одновременно | Сервер обрабатывает первый | Второй клиент видит "свой" клик, потом откат |
| Клик во время Check | Игрок кликает карточку пока попап открыт | Фаза нарушена |
| Disconnect во время хода | Игрок отключился на своём ходе | Ход зависает навечно |
| Timer race | Клиент думает что время есть, сервер уже закончил | Клик отклонён |

### Митигация

1. **Сервер — авторитет** (никогда не доверяем клиенту)
2. **Optimistic UI с rollback** — показываем клик сразу, откатываем при ошибке
3. **Action Lock** — блокировка на время обработки действия
4. **Phase Guard** на клиенте — блокируем клики в неактивных фазах

```typescript
// Серверная блокировка
class GameRoom {
  private actionLock = false;

  async handleAction(playerId: string, action: ClientEvent): Promise<void> {
    if (this.actionLock) {
      this.sendError(playerId, 'ACTION_IN_PROGRESS');
      return;
    }

    this.actionLock = true;
    try {
      await this.processAction(playerId, action);
    } finally {
      this.actionLock = false;
    }
  }
}

// Клиентская блокировка
function onCardClick(cardId: string): void {
  // Guard: проверяем фазу
  if (gameState.currentPhase !== 'guess') return;
  if (!canGuess(currentUserId, gameState)) return;

  // Optimistic UI
  highlightCard(cardId, 'selecting');

  // Отправляем на сервер
  wsClient.send({ type: 'game:guess', payload: { cardId } });
}
```

---

## CI/CD: Frontend + Backend отдельно

### Риск

Два отдельных деплоя (Vercel для frontend + Render/Railway для backend) создают проблемы:
- CORS ошибки
- Environment variables в двух местах
- Backend URL меняется — frontend ломается
- Разные окружения (dev / staging / prod)

### Митигация

1. **CORS настроен с первого дня** — не откладывать
2. **.env.example** для frontend И backend
3. **Health check endpoint** на backend (`GET /health`)
4. **Auto-deploy** для обоих сервисов

### Чеклист неделя 1

- [ ] Frontend деплоится на Vercel при push в main
- [ ] Backend деплоится на Render при push в main
- [ ] CORS разрешает запросы с frontend URL
- [ ] WebSocket подключается к production backend
- [ ] "Hello World" доступен по URL
- [ ] HTTPS работает на обоих сервисах

### Пример CORS настройки

```typescript
// server/src/index.ts
import cors from 'cors';

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));

// Socket.IO CORS
const io = new Server(server, {
  cors: {
    origin: FRONTEND_URL,
    methods: ['GET', 'POST'],
  },
});
```

---

## Mock/Real Mode: WebSocket Edition

### Риск

Mock WS Client ведёт себя иначе, чем реальный WebSocket:
- Mock обрабатывает события синхронно (в одном процессе)
- Real WS имеет реальную сетевую задержку
- Mock не теряет соединение
- Mock не обрабатывает reconnection

Тесты на Mock проходят, реальное приложение ломается.

### Митигация

1. **Shared WSClient interface** — Mock и Real реализуют один интерфейс
2. **Mock симулирует задержки** — `setTimeout(100-300ms)` на каждый ответ
3. **Mock симулирует ошибки** — случайные disconnects для тестирования
4. **E2E тесты в обоих режимах** — хотя бы smoke тесты на реальном сервере
5. **Integration тест** — проверяем, что Mock и Real дают одинаковые state transitions

```typescript
// Общий интерфейс — ОДИН для Mock и Real
interface WSClient {
  send(event: ClientEvent): void;
  on<T extends ServerEvent['type']>(
    type: T,
    handler: (payload: Extract<ServerEvent, { type: T }>['payload']) => void
  ): void;
  off(type: string, handler: Function): void;
  disconnect(): void;
  readonly isConnected: boolean;
}
```

---

## Turn Timer Desync

### Риск

Серверный таймер и клиентский таймер расходятся из-за задержек сети. Клиент показывает "0:05", а сервер уже закончил ход.

### Проблемы

| Проблема | Следствие |
|----------|-----------|
| Клиент опережает сервер | Показывает "Time's up", но сервер ещё ждёт |
| Сервер опережает клиент | Игрок кликает, а ход уже перешёл |
| Check Phase не останавливает таймер | Игрок тратит время на ответ, ход кончился |
| Вкладка в фоне | `setTimeout` замедляется в inactive tabs |

### Митигация

1. **Сервер — авторитет по таймеру** — отправляет `turnEndTime` (абсолютный timestamp)
2. **Клиент вычисляет** остаток: `remaining = turnEndTime - Date.now()`
3. **game:timer-sync** при каждой паузе/возобновлении
4. **"Ожидание..."** когда клиентский таймер истёк, но сервер ещё не ответил
5. **requestAnimationFrame** вместо `setInterval` для обновления UI таймера

```typescript
// Клиент: использовать requestAnimationFrame
function startTimerDisplay(turnEndTime: number): void {
  function tick() {
    const remaining = Math.max(0, turnEndTime - Date.now());

    if (remaining <= 0) {
      timerElement.textContent = 'Ожидание...';
      timerElement.classList.add('expired');
      return;
    }

    const seconds = Math.ceil(remaining / 1000);
    timerElement.textContent = formatTime(seconds);

    if (seconds <= 10) {
      timerElement.classList.add('warning');
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
```

---

## Question Bank Quality

### Риск

Плохие вопросы убивают игру:
- Слишком простые вопросы — все получают очки без усилий
- Слишком сложные — никто не получает очки, фрустрация
- Неточные эталонные ответы — AI мок неправильно оценивает
- Не хватает вопросов — одно и то же повторяется

### Митигация

1. **Peer review** банка вопросов до запуска
2. **Несколько вопросов на слово** (минимум 2) — случайный выбор
3. **Difficulty levels** — Easy / Medium / Hard
4. **Эталонные ответы включают ключевые слова** — для корректной работы мока
5. **Fallback вопрос** — если для слова нет вопросов

### Чеклист качества вопроса

- [ ] Вопрос однозначно понятен
- [ ] Эталонный ответ содержит 3+ ключевых слова
- [ ] Сложность соответствует уровню (1/2/3)
- [ ] Вопрос проверяет понимание, а не запоминание
- [ ] Нет опечаток в вопросе и ответе

### Пример хорошего vs плохого вопроса

```
❌ Плохо:
  Вопрос: "Что такое Promise?"
  Ответ: "Объект для асинхронных операций."
  Проблема: Ответ слишком короткий, keyword matching не работает.

✓ Хорошо:
  Вопрос: "Что такое Promise и какие у него три состояния?"
  Ответ: "Promise — это объект, представляющий результат асинхронной
  операции. У Promise три состояния: pending (ожидание), fulfilled
  (успех) и rejected (ошибка). Promise создаётся через конструктор
  new Promise((resolve, reject) => {...})."
  Почему лучше: конкретный вопрос, развёрнутый ответ с ключевыми словами.
```

---

## 6-Person Coordination Overhead

### Риск

Больше людей = больше коммуникации, больше merge конфликтов, больше координационных накладных расходов. Закон Амдаля: не всё параллелизуется.

### Проблемы

| Проблема | При 3 людях | При 6 людях |
|----------|-------------|-------------|
| Merge конфликты | Редко | Часто (особенно в types.ts, index.html) |
| Код-ревью | 1 ревьюер на PR | 2 ревьюера, дольше ждать |
| Синки | 30 мин/неделю | 30-45 мин/неделю |
| Принятие решений | Быстро | Долгие обсуждения |
| Зависимости между задачами | Мало | Много (WS блокирует Board и Lobby) |

### Митигация

1. **Чёткие границы модулей** — каждый работает в своей папке
2. **Контракты сначала, код потом** — data-contracts.md согласован до начала кодинга
3. **2 ревьюера на PR** — ротация пар (не всегда одни и те же)
4. **Async коммуникация** для решений — GitHub Issues, не чат
5. **Синки ≤ 30 минут** — строгий тайм-бокс
6. **Feature branches** с осмысленными именами — `feat/ws-room-management`, `feat/check-phase-popup`

### Структура папок (минимизация конфликтов)

```
src/
├── api/           ← Lead
├── ws/            ← WS-Dev (клиентская часть)
├── ai/            ← AI-Dev
├── pages/
│   ├── landing/   ← AI-Dev
│   ├── lobby/     ← Lobby
│   ├── room/      ← WS-Dev + Lobby
│   ├── game/      ← Board
│   ├── solo/      ← AI-Dev
│   ├── results/   ← Lobby
│   ├── profile/   ← Lobby
│   └── auth/      ← Lead
├── components/
│   ├── board/     ← Board
│   ├── check/     ← Check
│   ├── timer/     ← Board
│   └── common/    ← Все (осторожно с конфликтами!)
└── ...

server/
├── src/
│   ├── rooms/     ← WS-Dev
│   ├── ws/        ← WS-Dev
│   ├── api/       ← Lead
│   └── data/      ← Check (вопросы), AI-Dev (слова)
```

---

## Disconnect во время игры

### Риск

Игрок теряет соединение во время своего хода. Без обработки — ход зависает навечно, все ждут.

### Сценарии

| Когда дисконнект | Что происходит | Что делать |
|------------------|----------------|------------|
| Капитан думает над подсказкой | Ход зависает | Auto-pass через 60 сек |
| Оперативник угадывает | Ход зависает | Auto-pass через 60 сек |
| Во время Check Phase | Check зависает | Auto-fail (очко не засчитано) |
| Хост покидает комнату | Комната осиротела | Передать хоста другому игроку |

### Митигация

```typescript
// Сервер: graceful disconnect
class GameRoom {
  handleDisconnect(playerId: string): void {
    this.markPlayerDisconnected(playerId);

    // Если дисконнект во время Check Phase этого игрока
    if (this.game.currentPhase === 'check' && this.game.checkPlayerId === playerId) {
      this.resolveCheck({ pointGranted: false, feedback: 'Игрок отключился' });
    }

    // Даём 60 секунд на переподключение
    this.reconnectTimers.set(playerId, setTimeout(() => {
      if (this.isPlayerStillDisconnected(playerId)) {
        this.removePlayer(playerId);

        // Если это был активный игрок — auto-pass
        if (this.isActivePlayer(playerId)) {
          this.autoEndTurn();
        }
      }
    }, 60_000));
  }

  handleReconnect(playerId: string, socket: Socket): void {
    // Отменяем таймер удаления
    clearTimeout(this.reconnectTimers.get(playerId));
    this.reconnectTimers.delete(playerId);

    // Отправляем полное состояние
    socket.emit('game:state', this.getGameStateForPlayer(playerId));
  }
}
```

---

## Cut Scope Strategy (MoSCoW)

Заранее определите приоритеты. Если не успеваете — режьте снизу.

### Must Have (без этого не сдать)

- [ ] Auth (Login/Register)
- [ ] Lobby (создание/вход в комнату)
- [ ] Game Board (5x5, клик, открытие)
- [ ] WebSocket Server (комнаты, state machine)
- [ ] Check Phase (Self/Peer минимум)
- [ ] Solo Mode (мокнутый AI Spymaster)
- [ ] Unit Tests 20%+
- [ ] E2E Tests (3 сценария)
- [ ] README с описанием
- [ ] Deployment (frontend + backend)

### Should Have (нужно для хороших баллов)

- [ ] AI Check evaluation mode (мок)
- [ ] Turn Timer
- [ ] Card flip animations
- [ ] Theme Switcher
- [ ] Responsive design
- [ ] Profile + Stats
- [ ] Results page с деталями
- [ ] 40+ вопросов
- [ ] Reconnection handling
- [ ] Protected Routes
- [ ] Auth on WS

### Could Have (бонусы)

- [ ] Spectator mode
- [ ] i18n (+10 баллов)
- [ ] Audio effects (+5 баллов)
- [ ] Unit Tests 50%+
- [ ] Leaderboard
- [ ] Custom Word Packs

### Won't Have (откладываем)

- Реальная AI интеграция
- Voice Chat (WebRTC)
- Tournaments
- OAuth (Google/GitHub)
- PWA / Offline
- 3D визуализации

### Правило 5-й недели

> Если к началу 5-й недели MVP не играбелен — примените Cut Scope. Лучше сдать 70% в идеальном состоянии, чем 100% с багами.

---

## Типичные ошибки (чеклист)

### Архитектура

- [ ] Не используем `any` — Discriminated Unions для WS событий
- [ ] Цвета карточек НЕ отправляются оперативникам
- [ ] API Layer абстрагирует Mock/Real
- [ ] Типы из `data-contracts.md` используются везде
- [ ] Сервер — единственный источник правды

### WebSocket

- [ ] Structured logging для всех WS событий
- [ ] Action Lock для предотвращения race conditions
- [ ] Graceful disconnect с таймером на переподключение
- [ ] Auth token проверяется при подключении
- [ ] Heartbeat / ping-pong для обнаружения разрывов

### UI/UX

- [ ] Check Phase блокирует клики по полю
- [ ] Таймер синхронизирован с сервером
- [ ] Есть loading states для async операций
- [ ] Global Error Handling (Toast)
- [ ] 404 Page

### Тесты

- [ ] Unit Tests для state machine (чистые функции)
- [ ] Unit Tests для AI моков
- [ ] E2E Tests работают в Mock Mode
- [ ] Тестируется disconnect/reconnect

### Деплой

- [ ] CI/CD настроен с недели 1 (frontend + backend)
- [ ] CORS настроен
- [ ] Environment variables в Vercel и Render
- [ ] HTTPS работает
- [ ] Health check endpoint на backend

### Документация

- [ ] README с скриншотами
- [ ] Дневник с первой недели
- [ ] PR с понятными описаниями
- [ ] data-contracts.md актуален

---

## Карточка быстрой проверки

Распечатайте и повесьте над рабочим местом:

```
┌─────────────────────────────────────────────┐
│  BEFORE MERGE                               │
├─────────────────────────────────────────────┤
│  [ ] TypeScript strict — нет any           │
│  [ ] Тесты проходят                         │
│  [ ] Code review (2 approval)               │
│  [ ] Работает в Mock Mode                   │
│  [ ] WS events логируются                   │
│  [ ] Дневник обновлён                       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  WEEKLY CHECK                               │
├─────────────────────────────────────────────┤
│  [ ] Prod deployment работает (FE + BE)     │
│  [ ] WS подключение стабильно               │
│  [ ] Нет console.log в prod                 │
│  [ ] Mock и Real синхронизированы           │
│  [ ] Issues актуальны                       │
│  [ ] Question Bank проверен                  │
└─────────────────────────────────────────────┘
```
