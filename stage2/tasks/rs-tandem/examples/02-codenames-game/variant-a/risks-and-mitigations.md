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
| Великий Мёрдж (Lead) | 1-2 | Тихий Сокет (WS-Dev) берёт CI/CD, Ловкий Роутер (Lobby-Dev) берёт Auth |
| Великий Мёрдж (Lead) | 3-5 | Убрать Theme Switcher, упростить auth (только email) |
| Тихий Сокет (WS-Dev) | 1-2 | **КРИТИЧНО!** Экстренный переход на Firebase Realtime вместо custom WS (см. раздел SPOF ниже) |
| Тихий Сокет (WS-Dev) | 3-5 | Упростить: убрать reconnection, spectator mode, оставить базовую state machine |
| Быстрый Рендер (Board-Dev) | 1-2 | Мудрый Мок (AI-Dev) берёт Game Board (упрощённый, без анимаций) |
| Быстрый Рендер (Board-Dev) | 3-5 | Без анимаций, базовая сетка. Карточки просто меняют цвет |
| Зоркий Линтер (Check-Dev) | 1-2 | Мудрый Мок (AI-Dev) берёт Check Phase (только Self/Peer, без AI mode) |
| Зоркий Линтер (Check-Dev) | 3-5 | Self/Peer only, 20 вопросов, без расширения |
| Мудрый Мок (AI-Dev) | 1-2 | Зоркий Линтер (Check-Dev) берёт Solo Mode, подсказки — хардкод из файла |
| Мудрый Мок (AI-Dev) | 3-5 | Solo Mode с рандомными подсказками, без mock алгоритма |
| Ловкий Роутер (Lobby-Dev) | 1-2 | Великий Мёрдж (Lead) берёт Lobby (минимальный), Profile откладывается |
| Ловкий Роутер (Lobby-Dev) | 3-5 | Минимальный Lobby (только create/join), без Results и Profile |

> **Самый критичный:** Тихий Сокет (WS-Dev). Без него нет мультиплеера. Если Тихий Сокет выбывает рано, переключайтесь на BaaS (Firebase Realtime или Supabase Realtime). Подробнее — в следующем разделе.

---

## Тихий Сокет — бутылочное горлышко (SPOF)

> **ВНИМАНИЕ! Это самый опасный риск проекта.** Если вы его не митигируете — проект может остановиться целиком.

### Почему это SPOF

Тихий Сокет (WS-Dev) — единственный человек, который пишет серверную State Machine, WebSocket протокол и Room Management. Вся команда из 5 оставшихся людей **зависит** от его работы:

| Кто | Почему заблокирован без Тихого Сокета |
|-----|---------------------------------------|
| Быстрый Рендер (Board-Dev) | Не может интегрировать Game Board с сервером — нет WS событий |
| Зоркий Линтер (Check-Dev) | Check Phase требует `check:question` / `check:result` от сервера |
| Ловкий Роутер (Lobby-Dev) | Lobby и Room зависят от `room:create`, `room:join`, `room:state` |
| Мудрый Мок (AI-Dev) | Solo Mode требует интеграции с серверной state machine |
| Великий Мёрдж (Lead) | Auth middleware на WS — совместная задача |

### Сценарии провала

1. **Тихий Сокет заболел на неделе 2** — State Machine не готова, фронтенд-разработчики неделю пишут UI в пустоту
2. **Тихий Сокет не справился с архитектурой** — к неделе 3 осознаёт, что State Machine запутана, нужен рефактор. Вся команда стоит
3. **Тихий Сокет пропал без предупреждения** — нет документации, никто не понимает серверный код

### Митигация

1. **Великий Мёрдж (Lead) обязан pair-программить с Тихим Сокетом на неделях 1-2.** Это не опционально. Lead должен понимать серверный код достаточно, чтобы подхватить в случае проблем
2. **`data-contracts.md` должен быть "высечен в камне" в первые 3 дня.** Все WS события, типы, payload-ы — согласованы и зафиксированы. После этого фронтенд-разработчики могут работать с моками, не дожидаясь реального сервера
3. **Mock WS Client создаётся параллельно с реальным сервером.** Быстрый Рендер (Board-Dev) и Зоркий Линтер (Check-Dev) работают через Mock WS Client с первого дня
4. **Ежедневный check-in Тихого Сокета** — каждый день отвечает в чат: "Что сделал / Что блокирует / Нужна ли помощь"
5. **Если Тихий Сокет выбывает до конца недели 2 — экстренный pivot на Firebase (Variant B).** Великий Мёрдж (Lead) принимает это решение без обсуждений. Лучше потерять 1-2 дня на миграцию, чем 3 недели на ожидание

### Индикаторы раннего предупреждения

Если к **концу недели 1** выполняется хотя бы одно из условий — начинайте готовить план B:

- [ ] WS сервер не отвечает на `room:create` / `room:join`
- [ ] Нет ни одного passing unit-теста на state machine
- [ ] Тихий Сокет не сделал ни одного PR за неделю
- [ ] data-contracts.md не согласован командой

---

## Холодный старт (Cold Start Problem)

### Риск

Бесплатные хостинги (Render, Railway free tier) усыпляют инстансы после 15 минут неактивности. Node.js процесс останавливается, и при следующем запросе нужно заново поднять контейнер.

### Сценарий провала на демо

1. Ментор открывает ссылку на проект
2. Frontend (Vercel) загружается мгновенно — красивый лендинг
3. Ментор нажимает "Создать комнату"
4. Frontend пытается подключиться по WebSocket к backend на Render...
5. **40-60 секунд тишины.** WebSocket connection timeout. Ментор видит "Connection failed"
6. Ментор ставит "Weak" за демо. Проект функционально рабочий, но первое впечатление убито

### Почему это больно именно для WebSocket

REST запросы при cold start просто долго отвечают (40 сек вместо 200мс). Пользователь видит спиннер. Неприятно, но терпимо.

WebSocket при cold start **не устанавливает соединение вообще**. Socket.IO по умолчанию делает 2-3 попытки и сдаётся. Пользователь видит ошибку, а не медленный ответ.

### Митигация

1. **UptimeRobot (бесплатный)** — пингует `GET /health` каждые 10 минут, не даёт инстансу уснуть
   ```
   UptimeRobot → GET https://your-backend.onrender.com/health → каждые 10 мин
   ```
   Альтернатива: простой cron-job через GitHub Actions:
   ```yaml
   # .github/workflows/keep-alive.yml
   name: Keep Backend Alive
   on:
     schedule:
       - cron: '*/10 * * * *'  # каждые 10 минут
   jobs:
     ping:
       runs-on: ubuntu-latest
       steps:
         - run: curl -s https://your-backend.onrender.com/health
   ```

2. **"Просыпаемся..." экран на фронтенде** — если WebSocket не подключился за 3 секунды, показываем красивый loading экран вместо ошибки:
   ```typescript
   // ws/connect-with-warmup.ts
   async function connectWithWarmup(url: string): Promise<WSClient> {
     const FAST_TIMEOUT = 3_000;
     const SLOW_TIMEOUT = 60_000;

     const client = createRealWSClient(url);

     return new Promise((resolve, reject) => {
       const fastTimer = setTimeout(() => {
         // Показываем "Waking up server..." UI
         showWarmupScreen();
       }, FAST_TIMEOUT);

       const slowTimer = setTimeout(() => {
         reject(new Error('Backend did not wake up in time'));
       }, SLOW_TIMEOUT);

       client.on('connect', () => {
         clearTimeout(fastTimer);
         clearTimeout(slowTimer);
         hideWarmupScreen();
         resolve(client);
       });
     });
   }
   ```

3. **"Прогрев" при открытии лендинга** — отправляем `fetch('/health')` на backend ещё до того, как пользователь нажал "Создать комнату":
   ```typescript
   // pages/landing/index.ts — при загрузке лендинга
   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
   // Fire-and-forget: начинаем будить backend пока пользователь читает лендинг
   fetch(`${BACKEND_URL}/health`).catch(() => {});
   ```

### Чеклист деплоя (добавить к еженедельной проверке)

- [ ] UptimeRobot (или cron) настроен и пингует backend
- [ ] Frontend показывает "Waking up server..." а не ошибку при медленном подключении
- [ ] Лендинг делает prefetch `/health` при загрузке
- [ ] Socket.IO `reconnectionAttempts` увеличен до 10 (по умолчанию 3)
- [ ] Socket.IO `timeout` увеличен до 60 секунд

---

## Session Token (не привязывайтесь к socket.id)

### Риск

Распространённая ошибка новичков: привязка игрока к `socket.id`. Socket.IO генерирует новый `socket.id` при каждом подключении.

### Сценарий

1. Игрок подключается. `socket.id = "abc123"`. Сервер сохраняет: `players["abc123"] = { name: "Alice", team: "red" }`
2. Игрок нажимает F5 (или у него кратковременно пропал Wi-Fi)
3. Старый сокет умирает. Новый сокет подключается: `socket.id = "xyz789"`
4. Сервер не находит `"xyz789"` в players — думает, что это **новый** игрок
5. Alice видит пустой экран. В комнате появился "призрачный" игрок `"abc123"` (disconnected) и новый `"xyz789"`

### Решение: sessionToken (UUID)

Генерируем уникальный `sessionToken` при первом подключении и сохраняем его в `localStorage`. При каждом подключении (включая реконнект) клиент отправляет этот токен. Сервер маппит `token -> player`, а не `socket.id -> player`.

```typescript
// Клиент: ws/session.ts
function getOrCreateSessionToken(): string {
  const STORAGE_KEY = 'codenames_session_token';
  let token = localStorage.getItem(STORAGE_KEY);
  if (!token) {
    token = crypto.randomUUID(); // UUID v4
    localStorage.setItem(STORAGE_KEY, token);
  }
  return token;
}

// Клиент: подключение с sessionToken
function connectToRoom(roomCode: string): void {
  const socket = io(BACKEND_URL, {
    auth: {
      token: getAuthToken(),           // Firebase Auth token
      sessionToken: getOrCreateSessionToken(), // Session persistence
    },
    query: { roomCode },
  });

  socket.on('connect', () => {
    console.log('Connected with session:', getOrCreateSessionToken());
  });
}
```

```typescript
// Сервер: маппинг sessionToken -> player
class RoomManager {
  // Map: sessionToken -> PlayerState (НЕ socket.id!)
  private players = new Map<string, PlayerState>();
  // Map: sessionToken -> Socket (текущий активный сокет)
  private sockets = new Map<string, Socket>();

  handleConnection(socket: Socket): void {
    const sessionToken = socket.handshake.auth.sessionToken;

    if (this.players.has(sessionToken)) {
      // Reconnect: игрок вернулся!
      console.log(`Reconnect: ${sessionToken}`);
      this.sockets.set(sessionToken, socket);
      clearTimeout(this.disconnectTimers.get(sessionToken));

      // Отправляем полное состояние
      const player = this.players.get(sessionToken)!;
      socket.emit('game:state', this.getGameStateForPlayer(player.id));
    } else {
      // New player
      const player: PlayerState = {
        id: sessionToken,
        displayName: socket.handshake.auth.displayName || 'Anonymous',
        isConnected: true,
      };
      this.players.set(sessionToken, player);
      this.sockets.set(sessionToken, socket);
    }

    socket.on('disconnect', () => {
      this.handleDisconnect(sessionToken);
    });
  }

  private handleDisconnect(sessionToken: string): void {
    const player = this.players.get(sessionToken);
    if (!player) return;
    player.isConnected = false;

    // 60 секунд на реконнект
    this.disconnectTimers.set(sessionToken, setTimeout(() => {
      this.removePlayer(sessionToken);
    }, 60_000));
  }
}
```

### Полная схема reconnect flow

```
Первое подключение:
  Client                          Server
    |-- connect(sessionToken: "a1b2") -->|
    |                                     | players["a1b2"] = new Player
    |<-- game:state ----------------------|

F5 / потеря связи:
  Client                          Server
    |-- disconnect ------------------>|
    |                                 | player["a1b2"].isConnected = false
    |                                 | startTimer(60s)
    |                                 |
    |-- connect(sessionToken: "a1b2") -->|  (новый socket.id, тот же token!)
    |                                     | player["a1b2"].isConnected = true
    |                                     | cancelTimer()
    |<-- game:state ----------------------|  (полный снапшот, игрок продолжает)
```

> Подробнее о типах `sessionToken` и его месте в `handshake.auth` — см. [data-contracts.md](./data-contracts.md), раздел "WebSocket Protocol → Security".

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
| Check Phase и глобальный таймер | Глобальный таймер продолжает тикать, но параллельно запускается отдельный 30-секундный Check таймер. Если Check таймер истёк — очко не засчитано, игра продолжается |
| Вкладка в фоне | `setTimeout` замедляется в inactive tabs |

### Новая механика таймеров (два таймера одновременно)

В обновлённой архитектуре глобальный таймер хода **никогда не ставится на паузу**. Вместо этого:

1. **Глобальный таймер хода** — тикает всегда, от начала хода до конца. Сервер отправляет `turnEndTime` (абсолютный timestamp)
2. **Check таймер (30 сек)** — запускается отдельно при каждой проверке знаний. Если игрок не ответил за 30 секунд — очко не засчитано, Check закрывается, игра продолжается

| Событие | Глобальный таймер хода | Check таймер (30 сек) |
|---------|------------------------|-----------------------|
| Ход начинается | Старт | — |
| Check начинается | Продолжает тикать | Старт |
| Игрок отвечает на Check | Продолжает тикать | Стоп |
| Check timeout (30 сек) | Продолжает тикать | Очко не засчитано |
| Глобальный таймер истёк | Ход заканчивается | Стоп (если был активен) |

**Почему не пауза:** паузить глобальный таймер — сложнее реализовать, создаёт race conditions при синхронизации `pause/resume` между сервером и клиентами, и позволяет "злоупотреблять" Check Phase для получения дополнительного времени на обдумывание.

### Митигация

1. **Сервер — авторитет по таймеру** — отправляет `turnEndTime` (абсолютный timestamp)
2. **Клиент вычисляет** остаток: `remaining = turnEndTime - Date.now()`
3. **Два таймера на клиенте** — глобальный (остаток хода) и Check (30 сек обратный отсчёт)
4. **"Ожидание..."** когда клиентский таймер истёк, но сервер ещё не ответил
5. **requestAnimationFrame** вместо `setInterval` для обновления UI таймера

```typescript
// Клиент: использовать requestAnimationFrame для глобального таймера
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

// Клиент: отдельный Check таймер (30 сек)
function startCheckTimer(durationSec: number = 30): void {
  const checkEndTime = Date.now() + durationSec * 1000;

  function tickCheck() {
    const remaining = Math.max(0, checkEndTime - Date.now());

    if (remaining <= 0) {
      checkTimerElement.textContent = 'Время вышло!';
      // Сервер сам закроет Check — очко не засчитано
      return;
    }

    const seconds = Math.ceil(remaining / 1000);
    checkTimerElement.textContent = `${seconds} сек`;

    if (seconds <= 5) {
      checkTimerElement.classList.add('urgent');
    }

    requestAnimationFrame(tickCheck);
  }

  requestAnimationFrame(tickCheck);
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
Плохо:
  Вопрос: "Что такое Promise?"
  Ответ: "Объект для асинхронных операций."
  Проблема: Ответ слишком короткий, keyword matching не работает.

Хорошо:
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
| Зависимости между задачами | Мало | Много (Тихий Сокет блокирует Быстрого Рендера и Ловкого Роутера) |

### Митигация

1. **Чёткие границы модулей** — каждый работает в своей папке
2. **Контракты сначала, код потом** — data-contracts.md согласован до начала кодинга
3. **2 ревьюера на PR** — ротация пар (не всегда одни и те же)
4. **Async коммуникация** для решений — GitHub Issues, не чат
5. **Синки <= 30 минут** — строгий тайм-бокс
6. **Feature branches** с осмысленными именами — `feat/ws-room-management`, `feat/check-phase-popup`

### Структура папок (минимизация конфликтов)

```
src/
├── api/           ← Великий Мёрдж (Lead)
├── ws/            ← Тихий Сокет (WS-Dev) — клиентская часть
├── ai/            ← Мудрый Мок (AI-Dev)
├── pages/
│   ├── landing/   ← Мудрый Мок (AI-Dev)
│   ├── lobby/     ← Ловкий Роутер (Lobby-Dev)
│   ├── room/      ← Тихий Сокет (WS-Dev) + Ловкий Роутер (Lobby-Dev)
│   ├── game/      ← Быстрый Рендер (Board-Dev)
│   ├── solo/      ← Мудрый Мок (AI-Dev)
│   ├── results/   ← Ловкий Роутер (Lobby-Dev)
│   ├── profile/   ← Ловкий Роутер (Lobby-Dev)
│   └── auth/      ← Великий Мёрдж (Lead)
├── components/
│   ├── board/     ← Быстрый Рендер (Board-Dev)
│   ├── check/     ← Зоркий Линтер (Check-Dev)
│   ├── timer/     ← Быстрый Рендер (Board-Dev)
│   └── common/    ← Все (осторожно с конфликтами!)
└── ...

server/
├── src/
│   ├── rooms/     ← Тихий Сокет (WS-Dev)
│   ├── ws/        ← Тихий Сокет (WS-Dev)
│   ├── api/       ← Великий Мёрдж (Lead)
│   └── data/      ← Зоркий Линтер (Check-Dev) — вопросы, Мудрый Мок (AI-Dev) — слова
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
| Во время Check Phase | Check зависает | Auto-fail (очко не засчитано), Check таймер (30 сек) сработает автоматически |
| Хост покидает комнату | Комната осиротела | Передать хоста другому игроку |

### Митигация

```typescript
// Сервер: graceful disconnect (используем sessionToken, не socket.id!)
class GameRoom {
  handleDisconnect(sessionToken: string): void {
    this.markPlayerDisconnected(sessionToken);

    // Если дисконнект во время Check Phase этого игрока
    if (this.game.currentPhase === 'check' && this.game.checkPlayerId === sessionToken) {
      this.resolveCheck({ pointGranted: false, feedback: 'Игрок отключился' });
    }

    // Даём 60 секунд на переподключение
    this.reconnectTimers.set(sessionToken, setTimeout(() => {
      if (this.isPlayerStillDisconnected(sessionToken)) {
        this.removePlayer(sessionToken);

        // Если это был активный игрок — auto-pass
        if (this.isActivePlayer(sessionToken)) {
          this.autoEndTurn();
        }
      }
    }, 60_000));
  }

  handleReconnect(sessionToken: string, socket: Socket): void {
    // Отменяем таймер удаления
    clearTimeout(this.reconnectTimers.get(sessionToken));
    this.reconnectTimers.delete(sessionToken);

    // Отправляем полное состояние
    socket.emit('game:state', this.getGameStateForPlayer(sessionToken));
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
- [ ] Игрок привязан к `sessionToken` (UUID), а не к `socket.id`

### WebSocket

- [ ] Structured logging для всех WS событий
- [ ] Action Lock для предотвращения race conditions
- [ ] Graceful disconnect с таймером на переподключение
- [ ] Auth token проверяется при подключении
- [ ] sessionToken передаётся в `handshake.auth` и маппится к player
- [ ] Heartbeat / ping-pong для обнаружения разрывов

### UI/UX

- [ ] Check Phase блокирует клики по полю
- [ ] Два таймера: глобальный (ход) тикает всегда, Check таймер (30 сек) — отдельно
- [ ] Есть loading states для async операций
- [ ] "Waking up server..." экран при холодном старте backend
- [ ] Global Error Handling (Toast)
- [ ] 404 Page

### Тесты

- [ ] Unit Tests для state machine (чистые функции)
- [ ] Unit Tests для AI моков
- [ ] E2E Tests работают в Mock Mode
- [ ] Тестируется disconnect/reconnect (с sessionToken)

### Деплой

- [ ] CI/CD настроен с недели 1 (frontend + backend)
- [ ] CORS настроен
- [ ] Environment variables в Vercel и Render
- [ ] HTTPS работает
- [ ] Health check endpoint на backend
- [ ] UptimeRobot / cron пингует backend каждые 10 минут
- [ ] Socket.IO timeout увеличен для cold start

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
│  [ ] sessionToken, не socket.id             │
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
│  [ ] Backend не засыпает (UptimeRobot)      │
│  [ ] Cold start — показывается loading      │
└─────────────────────────────────────────────┘
```
