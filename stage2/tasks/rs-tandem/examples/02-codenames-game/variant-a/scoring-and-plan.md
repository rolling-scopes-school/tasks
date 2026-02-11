# Scoring & Plan: Codenames — Interview Edition

Этот документ содержит пример расчёта баллов и детальный план работ для команды из 6 человек.

## Зачем этот документ

Этот раздел — **образец планирования** для команд и менторов. Он демонстрирует:

1. **Базовый стек = хорошие баллы.** TypeScript + Node.js + WebSocket без фреймворков и реального AI дают 650-690 баллов.
2. **Реалистичные сроки.** Эстимейты включают буфер +30-40% на изучение новых технологий.
3. **AI замокан.** Все AI интерфейсы реализованы моками. Реальная AI интеграция — отдельная задача на будущее.
4. **Процессы важны.** Митинги, код-ревью, дневник с первого дня — не бюрократия, а инвестиция в Teamwork Score.
5. **Cut Scope Strategy.** Заранее определено, что вырезать, если не успеваем.

> **Как использовать:** Это шаблон, не догма. Адаптируйте под свою команду, но сохраняйте принципы: планирование, коммуникация, документирование.

---

## Команда (6 человек)

| Студент | Роль | Компоненты |
|---------|------|------------|
| **Великий Мёрдж** (Lead) | Team Lead | Auth, CI/CD, Deployment, API Layer, Theme Switcher, Global Error Handling |
| **Тихий Сокет** (WS-Dev) | Backend | WebSocket Server, Room Management, Game State Machine, Turn Timer |
| **Быстрый Рендер** (Board-Dev) | Frontend | Game Board UI (5x5), Card Component, Animations, Client State Sync |
| **Зоркий Линтер** (Check-Dev) | Frontend | Check Phase Popup, Question Bank, Evaluation Modes, i18n |
| **Мудрый Мок** (AI-Dev) | Frontend | AI Mock Interfaces, Solo Mode, Landing Page, 404 |
| **Ловкий Роутер** (Lobby-Dev) | Frontend | Lobby, Results Page, Profile, Player Stats, Responsive |

> **WS-Dev SPOF:** Тихий Сокет (WS-Dev) — единственный человек, владеющий WebSocket-сервером. Это создаёт риск single point of failure (SPOF). Для митигации **Великий Мёрдж (Lead) обязан проводить парное программирование с Тихим Сокетом на неделях 1-2**, чтобы как минимум два человека в команде понимали серверный код. Подробнее — см. [risks-and-mitigations.md](./risks-and-mitigations.md), раздел «Bus Factor».

## Стек проекта

- **TypeScript** (strict mode)
- **Node.js + Express + Socket.IO** (WebSocket server)
- **Firebase Auth** (авторизация)
- **Vitest** (Unit Tests)
- **Playwright** (E2E Tests)
- **AI: ВСЕ МОКНУТО** (категориальный подбор + keyword matching)

---

## Командные баллы (одинаковые для всех)

| Score | Баллы | Комментарий |
|-------|-------|-------------|
| Tandem: Code | 100 | TS strict, ESLint, Prettier, error handling |
| Tandem: Teamwork | 280 | Board + Issues + PRs + Deploy (6 человек = больше ревью) |
| **Итого командные** | **380** | |

---

## Личные баллы: Великий Мёрдж (Lead — Team Lead)

| Категория | Фича | Баллы |
|-----------|------|-------|
| Backend & Data | Auth Integration (Firebase) | +15 |
| Backend & Data | BaaS CRUD (Firestore) | +15 |
| UI & Interaction | Theme Switcher | +10 |
| Quality | Unit Tests 20%+ | +10 |
| Quality | E2E Tests (3 сценария) | +10 |
| DevOps & Role | Team Lead | +20 |
| DevOps & Role | Auto-deploy | +5 |
| Architecture | API Layer | +10 |
| Architecture | Design Patterns | +10 |
| **Personal Features** | | **105** |
| Development Diary | Детальный | 80 |
| Mentor Review | Good (40+40+40) | 120 |
| **Итого Personal** | | **305** |

## Личные баллы: Тихий Сокет (WS-Dev — Backend)

| Категория | Фича | Баллы |
|-----------|------|-------|
| My Components | WebSocket Server (Complex Backend Service) | +30 |
| My Components | Room Management (Complex Component) | +25 |
| Backend & Data | Custom Backend (Node.js) | +30 |
| Backend & Data | Real-time / WS | +20 |
| Architecture | Design Patterns (State Machine) | +10 |
| Quality | Unit Tests 20%+ | +10 |
| **Personal Features** | | **125** |
| Development Diary | Детальный | 80 |
| Mentor Review | Good (40+40+40) | 120 |
| **Итого Personal** | | **325** |

## Личные баллы: Быстрый Рендер (Board-Dev — Game Board)

| Категория | Фича | Баллы |
|-----------|------|-------|
| My Components | Game Board (Complex Component) | +25 |
| My Components | Client Game Engine (Complex Component) | +25 |
| UI & Interaction | Advanced Animations | +10 |
| Architecture | Design Patterns (Observer, State) | +10 |
| Quality | Unit Tests 20%+ | +10 |
| Quality | E2E Tests (3 сценария) | +10 |
| **Personal Features** | | **90** |
| Development Diary | Детальный | 80 |
| Mentor Review | OK-Good (25+40+40) | 105 |
| **Итого Personal** | | **275** |

## Личные баллы: Зоркий Линтер (Check-Dev — Check Phase)

| Категория | Фича | Баллы |
|-----------|------|-------|
| My Components | Check Phase Popup (Complex Component) | +25 |
| My Components | Question Bank System (Rich UI Screen) | +20 |
| UI & Interaction | i18n (2 языка) | +10 |
| Architecture | API Layer | +10 |
| Quality | Unit Tests 20%+ | +10 |
| Quality | Unit Tests 50%+ | +10 |
| **Personal Features** | | **85** |
| Development Diary | Детальный | 80 |
| Mentor Review | OK-Good (25+40+40) | 105 |
| **Итого Personal** | | **270** |

## Личные баллы: Мудрый Мок (AI-Dev — AI + Solo)

| Категория | Фича | Баллы |
|-----------|------|-------|
| My Components | AI Spymaster Mock (Complex Component) | +25 |
| My Components | Solo Game Mode (Rich UI Screen) | +20 |
| My Components | Landing Page (Rich UI Screen) | +20 |
| AI | AI Chat UI (мок с отображением подсказок) | +20 |
| UI & Interaction | Responsive | +5 |
| Quality | Unit Tests 20%+ | +10 |
| **Personal Features** | | **100** |
| Development Diary | Детальный | 80 |
| Mentor Review | OK-Good (25+40+40) | 105 |
| **Итого Personal** | | **285** |

## Личные баллы: Ловкий Роутер (Lobby-Dev — Lobby, Results, Profile)

| Категория | Фича | Баллы |
|-----------|------|-------|
| My Components | Lobby (Rich UI Screen) | +20 |
| My Components | Results Page (Rich UI Screen) | +20 |
| My Components | Profile + Stats (Rich UI Screen) | +20 |
| Backend & Data | BaaS CRUD | +15 |
| UI & Interaction | Responsive | +5 |
| Quality | Unit Tests 20%+ | +10 |
| Quality | E2E Tests (3 сценария) | +10 |
| **Personal Features** | | **100** |
| Development Diary | Детальный | 80 |
| Mentor Review | OK-Good (25+40+40) | 105 |
| **Итого Personal** | | **285** |

---

## Итоговая таблица

| Студент | Code | Teamwork | Personal | **Итого** |
|---------|------|----------|----------|-----------|
| Великий Мёрдж (Lead) | 100 | 280 | 305 | **685** |
| Тихий Сокет (WS-Dev) | 100 | 280 | 325 | **705** |
| Быстрый Рендер (Board-Dev) | 100 | 280 | 275 | **655** |
| Зоркий Линтер (Check-Dev) | 100 | 280 | 270 | **650** |
| Мудрый Мок (AI-Dev) | 100 | 280 | 285 | **665** |
| Ловкий Роутер (Lobby-Dev) | 100 | 280 | 285 | **665** |

> **AI-фичи = все мокнуты.** Когда реальный AI будет подключен, Мудрый Мок (AI-Dev) получит дополнительные баллы: +10 (AI Streaming), +10 (Raw LLM API). Остальной код менять не придётся — интерфейсы уже определены.

> **Question Bank — ответственность всей команды.** Каждый из 6 участников обязан написать минимум 15 вопросов для Question Bank (итого >= 90 вопросов). Это влияет на качество Check Phase и оценку контента. Вопросы проходят peer review (см. [risks-and-mitigations.md](./risks-and-mitigations.md), раздел «Question Bank Quality»).

---

## Время на изучение новых технологий

**Что вы уже знаете из Stage2:**
- TypeScript strict
- SPA без фреймворков
- Drag-and-Drop (RSS Puzzle)
- WebSockets (Fun Chat)
- async/await, fetch API
- Git/GitHub, Code Review, Clean Code, ESLint

**Что придётся изучить:**

| Технология | Время на изучение | Примечание |
|------------|-------------------|------------|
| Node.js + Express (сервер) | 4-6ч | Если не было опыта с backend |
| Socket.IO (WS библиотека) | 3-5ч | Rooms, namespaces, middleware |
| Firebase Auth | 3-4ч | Документация + первые эксперименты |
| Unit Tests с Vitest | 3-4ч | Первый setup занимает дольше |
| E2E Tests с Playwright | 4-6ч | CI конфигурация требует отладки |
| State Machine pattern | 2-3ч | Документация + реализация |
| Deployment (Vercel + Render) | 2-4ч | Frontend и Backend отдельно |

**Итого на изучение:** ~21-32ч на команду (распределяется по специализациям)

---

## План работ (6 недель)

> **Формат времени:** Min | Max | Avg (включает буфер на изучение)

---

### Неделя 1: Kickoff, Setup & Architecture

**Цель:** Инфраструктура, CI/CD, архитектурные контракты, доска задач, первые страницы.

| Задача | Кто | Min | Max | Avg |
|--------|-----|-----|-----|-----|
| Kickoff-митинг: роли, стек, инструменты | Все | 1ч | 2ч | 1.5ч |
| Создать репо, TS strict, ESLint, Prettier, Husky | Великий Мёрдж | 2ч | 4ч | 3ч |
| GitHub Projects board, первые Issues | Великий Мёрдж | 1ч | 2ч | 1.5ч |
| CI/CD: Vercel (frontend) + Render (backend) | Великий Мёрдж | 3ч | 6ч | 4.5ч |
| Планирование архитектуры: папки, типы, API Layer | Все | 2ч | 4ч | 3ч |
| Согласовать [data-contracts](./data-contracts.md) (TypeScript типы) | Все | 2ч | 3ч | 2.5ч |
| Согласовать WebSocket протокол (events, payload) | Тихий Сокет + Быстрый Рендер | 2ч | 3ч | 2.5ч |
| Node.js server scaffold + WS hello-world | Тихий Сокет | 3ч | 6ч | 4.5ч |
| **Pair-programming: Великий Мёрдж + Тихий Сокет** (WS scaffold) | Великий Мёрдж + Тихий Сокет | — | — | — |
| Firebase Auth setup | Великий Мёрдж | 2ч | 4ч | 3ч |
| Базовый роутер (SPA router) | Ловкий Роутер | 3ч | 6ч | 4.5ч |
| Landing Page | Мудрый Мок | 2ч | 4ч | 3ч |
| 404 Page | Мудрый Мок | 1ч | 2ч | 1.5ч |
| Дневник: первая запись | Все | 0.5ч | 1ч | 0.75ч |
| **Итого неделя 1** | | **24.5ч** | **47ч** | **35.75ч** |

> **Pair-programming note:** Время парного программирования Великого Мёрджа и Тихого Сокета входит в эстимейт задачи «Node.js server scaffold + WS hello-world» и не учитывается отдельно. Цель — чтобы Lead понимал серверный код и мог подхватить при необходимости (см. [risks-and-mitigations.md](./risks-and-mitigations.md), раздел «Bus Factor»).

---

### Неделя 2: Auth, WebSocket Core & Basic UI

**Цель:** Рабочая авторизация, WebSocket сервер с комнатами, скелеты основных экранов.

| Задача | Кто | Min | Max | Avg |
|--------|-----|-----|-----|-----|
| Недельный синк | Все | 0.5ч | 1ч | 0.75ч |
| Login/Register + Firebase Auth | Великий Мёрдж | 5ч | 10ч | 7.5ч |
| Protected Routes | Великий Мёрдж | 2ч | 4ч | 3ч |
| Global Error Handling (Toast system) | Великий Мёрдж | 3ч | 5ч | 4ч |
| WS: Room create/join/leave | Тихий Сокет | 6ч | 12ч | 9ч |
| WS: Player role assignment (Spymaster/Operative) | Тихий Сокет | 3ч | 6ч | 4.5ч |
| **Pair-programming: Великий Мёрдж + Тихий Сокет** (WS rooms) | Великий Мёрдж + Тихий Сокет | — | — | — |
| Game Board UI: grid 5x5, card component, CSS | Быстрый Рендер | 5ч | 10ч | 7.5ч |
| Check Phase: popup component skeleton | Зоркий Линтер | 4ч | 8ч | 6ч |
| Question Bank: структура + первые вопросы (каждый пишет >= 15 шт.) | Все (координирует Зоркий Линтер) | 3ч | 6ч | 4.5ч |
| AI interface definitions (TypeScript) | Мудрый Мок | 3ч | 5ч | 4ч |
| Lobby page (UI skeleton, список комнат) | Ловкий Роутер | 5ч | 10ч | 7.5ч |
| Profile page (UI) | Ловкий Роутер | 3ч | 6ч | 4.5ч |
| Ревью PR (каждый ревьюит 1-2 чужих) | Все | 1.5ч | 3ч | 2.25ч |
| Дневник: 2 записи | Все | 0.5ч | 1ч | 0.75ч |
| **Итого неделя 2** | | **44.5ч** | **87ч** | **65.75ч** |

> **Content Hell prevention:** На неделях 2-3 каждый из 6 участников пишет минимум 15 вопросов для Question Bank (итого >= 90). Зоркий Линтер (Check-Dev) координирует: распределяет темы, проверяет формат, проводит peer review. Не откладывайте написание вопросов на последние недели — это приводит к «Content Hell», когда вопросов мало и они некачественные.

> **Pair-programming note:** Великий Мёрдж продолжает парные сессии с Тихим Сокетом при работе над WS rooms. Время входит в эстимейт задачи Тихого Сокета.

---

### Неделя 3: Game Engine, Check Phase & Solo Mode

**Цель:** Играемый раунд (хотя бы грубый), Check Phase работает, Solo Mode начат.

| Задача | Кто | Min | Max | Avg |
|--------|-----|-----|-----|-----|
| Недельный синк | Все | 0.5ч | 1ч | 0.75ч |
| API Layer (абстракция для всех сервисов) | Великий Мёрдж | 4ч | 8ч | 6ч |
| WS: Game [state machine](./game-engine.md) (сервер) | Тихий Сокет | 8ч | 16ч | 12ч |
| WS: Turn management, timer sync | Тихий Сокет | 4ч | 8ч | 6ч |
| Board: card click handling, Spymaster view | Быстрый Рендер | 6ч | 12ч | 9ч |
| Board: turn indicator, clue display, score tracker | Быстрый Рендер | 4ч | 8ч | 6ч |
| Check Phase: Self/Peer evaluation mode | Зоркий Линтер | 5ч | 10ч | 7.5ч |
| Check Phase: "Показать ответ" flow + check-таймер (30 сек) | Зоркий Линтер | 3ч | 6ч | 4.5ч |
| Question Bank: дособрать вопросы до >= 90 (все участники) | Все (координирует Зоркий Линтер) | 3ч | 6ч | 4.5ч |
| AI Spymaster: [mock clue generator](./ai-spymaster.md) | Мудрый Мок | 5ч | 10ч | 7.5ч |
| Solo Mode: setup page + solo game flow | Мудрый Мок | 5ч | 10ч | 7.5ч |
| Lobby: create/join room через WS | Ловкий Роутер | 5ч | 10ч | 7.5ч |
| Results page (базовая) | Ловкий Роутер | 3ч | 6ч | 4.5ч |
| Ревью PR | Все | 2ч | 4ч | 3ч |
| Дневник: 2 записи | Все | 0.5ч | 1ч | 0.75ч |
| **Итого неделя 3** | | **55ч** | **110ч** | **82.5ч** |

---

### Неделя 4: Integration, Content & Unit Tests

**Цель:** Полная интеграция, больше контента, начало тестирования.

| Задача | Кто | Min | Max | Avg |
|--------|-----|-----|-----|-----|
| Недельный синк | Все | 0.5ч | 1ч | 0.75ч |
| Theme Switcher (CSS variables) | Великий Мёрдж | 2ч | 4ч | 3ч |
| Security: Auth token на WebSocket | Великий Мёрдж + Тихий Сокет | 3ч | 6ч | 4.5ч |
| WS: reconnection logic, heartbeat | Тихий Сокет | 4ч | 8ч | 6ч |
| Board: animations (card flip, color reveal) | Быстрый Рендер | 4ч | 8ч | 6ч |
| Board: responsive layout (mobile board) | Быстрый Рендер | 3ч | 6ч | 4.5ч |
| [Check Phase](./check-phase.md): AI evaluation mode (мок) | Зоркий Линтер | 5ч | 10ч | 7.5ч |
| Check Phase: расширение до 40+ вопросов | Зоркий Линтер | 4ч | 8ч | 6ч |
| AI: mock check evaluator | Мудрый Мок | 4ч | 8ч | 6ч |
| AI: difficulty adaptation mock | Мудрый Мок | 2ч | 4ч | 3ч |
| Lobby: public room list, player count | Ловкий Роутер | 3ч | 6ч | 4.5ч |
| Profile: game stats, win rate | Ловкий Роутер | 3ч | 6ч | 4.5ч |
| Word Bank: 50+ JS/TS концептов | Все | 3ч | 6ч | 4.5ч |
| Unit Tests (каждый покрывает свой код) | Все | 4ч | 8ч | 6ч |
| Ревью PR | Все | 2ч | 4ч | 3ч |
| Дневник: 2 записи | Все | 0.5ч | 1ч | 0.75ч |
| **Итого неделя 4** | | **47.5ч** | **94ч** | **70.75ч** |

---

### Неделя 5: E2E Tests, Polish & Edge Cases

**Цель:** E2E покрытие, полировка UX, баг-фиксы.

| Задача | Кто | Min | Max | Avg |
|--------|-----|-----|-----|-----|
| Недельный синк | Все | 0.5ч | 1ч | 0.75ч |
| E2E: Auth flow (3 сценария) | Великий Мёрдж | 4ч | 8ч | 6ч |
| E2E: Game flow (3 сценария) | Быстрый Рендер + Тихий Сокет | 4ч | 8ч | 6ч |
| E2E: Check Phase (3 сценария) | Зоркий Линтер | 4ч | 8ч | 6ч |
| E2E: Solo mode (3 сценария) | Мудрый Мок | 4ч | 8ч | 6ч |
| E2E: Lobby + Results (3 сценария) | Ловкий Роутер | 4ч | 8ч | 6ч |
| Bug fixes, edge cases (disconnect, timeout) | Все | 6ч | 12ч | 9ч |
| WS: graceful disconnect/reconnect testing | Тихий Сокет | 3ч | 6ч | 4.5ч |
| Анимации polish (transitions, микровзаимодействия) | Быстрый Рендер | 2ч | 4ч | 3ч |
| Доработка Unit Tests до 20%+ | Все | 3ч | 6ч | 4.5ч |
| Ревью PR | Все | 2ч | 4ч | 3ч |
| Дневник: 2 записи | Все | 0.5ч | 1ч | 0.75ч |
| **Итого неделя 5** | | **37.5ч** | **74ч** | **55.5ч** |

---

### Неделя 6: Polish, README & Presentation

**Цель:** Финальная полировка, документация, подготовка к защите.

| Задача | Кто | Min | Max | Avg |
|--------|-----|-----|-----|-----|
| Финальный синк: план презентации | Все | 0.5ч | 1ч | 0.75ч |
| Проверить prod (frontend + backend) | Великий Мёрдж + Тихий Сокет | 2ч | 4ч | 3ч |
| README.md (описание, скриншоты, GIF, ссылки на PR) | Великий Мёрдж | 3ч | 5ч | 4ч |
| Мерж дневников в *-merged.md | Все | 0.5ч | 1ч | 0.75ч |
| Запись демо-ролика (1-2 мин) | Великий Мёрдж | 1ч | 2ч | 1.5ч |
| Репетиция презентации | Все | 1ч | 2ч | 1.5ч |
| Финальные фиксы | Все | 3ч | 6ч | 4.5ч |
| Дневник: финальная запись | Все | 0.5ч | 1ч | 0.75ч |
| **Итого неделя 6** | | **12ч** | **22ч** | **16.75ч** |

---

## Сводка по времени

| Неделя | Фокус | Min | Max | Avg |
|--------|-------|-----|-----|-----|
| 1 | Kickoff, Setup & Architecture | 24.5ч | 47ч | 35.75ч |
| 2 | Auth, WebSocket Core & Basic UI | 44.5ч | 87ч | 65.75ч |
| 3 | Game Engine, Check Phase & Solo | 55ч | 110ч | 82.5ч |
| 4 | Integration, Content & Tests | 47.5ч | 94ч | 70.75ч |
| 5 | E2E, Polish & Edge Cases | 37.5ч | 74ч | 55.5ч |
| 6 | README & Presentation | 12ч | 22ч | 16.75ч |
| **Всего на команду** | | **221ч** | **434ч** | **327ч** |

**На одного студента:** ~55ч за 6 недель ~ **9-10ч/неделю**

> **Про оценку времени:**
> - **9-10ч/неделю** — реалистичная оценка для команды из 6 (параллелизация!)
> - Включен буфер +30-40% на отладку и неожиданные проблемы
> - Недели 3-4 самые загруженные — будьте к этому готовы
> - При 3 людях нагрузка будет ~18-20ч/неделю — заметно больше

---

## Cut Scope Strategy (MoSCoW)

### Must Have (обязательно)

- [ ] Auth (Login/Register)
- [ ] Lobby (создание/вход в комнату)
- [ ] Game Board (5x5, клик, открытие)
- [ ] WebSocket Server (комнаты, базовая state machine)
- [ ] Check Phase (Self/Peer режим минимум)
- [ ] Solo Mode с мокнутым AI Spymaster
- [ ] Question Bank >= 90 вопросов (каждый участник >= 15)
- [ ] Unit Tests 20%+
- [ ] E2E Tests (3 сценария минимум)
- [ ] README с описанием и скриншотами
- [ ] Deployment (frontend + backend)

### Should Have (желательно)

- [ ] AI Check evaluation mode (мок)
- [ ] Turn Timer (синхронизация)
- [ ] Card flip animations
- [ ] Theme Switcher
- [ ] Responsive design
- [ ] Profile + Stats
- [ ] Results page с деталями
- [ ] Question Bank 40+ вопросов
- [ ] Reconnection handling
- [ ] Auth token validation on WS

### Could Have (опционально)

- [ ] Spectator mode
- [ ] i18n (2 языка)
- [ ] Audio effects
- [ ] Unit Tests 50%+
- [ ] Difficulty adaptation в AI mock
- [ ] Custom Word Packs
- [ ] Leaderboard

### Won't Have (откладываем)

- Реальная AI интеграция (только интерфейсы + моки)
- Voice Chat (WebRTC)
- Tournaments
- OAuth (Google/GitHub)
- PWA / Offline mode
- 3D визуализации

---

## Контрольные точки

| Неделя | Checkpoint | Критерий успеха |
|--------|------------|-----------------|
| 1 | Setup done | CI/CD работает, "Hello World" на проде, WS сервер запускается |
| 2 | Auth + WS done | Можно залогиниться, комнаты создаются/присоединяются, >= 90 вопросов написаны |
| 3 | MVP demo | Один полный раунд играбелен (хотя бы грубо) |
| 4 | Features done | Check Phase работает, Solo Mode работает, тесты начаты |
| 5 | Quality done | E2E проходят, основные баги пофикшены |
| 6 | Release | README готов, демо записано |

> **Правило 5-й недели:** Если к началу 5-й недели MVP не работает, примените Cut Scope Strategy. Лучше сдать 80% проекта в идеальном состоянии, чем 100% с багами.

---

## Ключевые выводы

1. **650-690 баллов достижимы с мокнутым AI** — без реальных LLM, без фреймворков.

2. **9-10 часов в неделю на человека** — реалистичная нагрузка для команды из 6.

3. **CI/CD с первого дня** — frontend на Vercel, backend на Render. Не откладывайте.

4. **WebSocket — самая сложная часть.** Тихий Сокет (WS-Dev) должен начать с первой недели и не отвлекаться.

5. **WS-Dev SPOF mitigation.** Великий Мёрдж (Lead) обязан проводить парное программирование с Тихим Сокетом (WS-Dev) на неделях 1-2. Если Тихий Сокет выбывает — Lead сможет подхватить серверный код. Подробнее — [risks-and-mitigations.md](./risks-and-mitigations.md).

6. **Контракты до кода.** Согласуйте [data-contracts.md](./data-contracts.md) и WebSocket протокол на первой неделе. Это сэкономит десятки часов на интеграцию.

7. **AI интерфейсы — инвестиция.** Даже если AI не будет подключен, чистые интерфейсы улучшают архитектуру и дают баллы за Design Patterns.

8. **Дневник с первого дня** — не "начну потом", а инструмент для структурирования мыслей.

9. **Question Bank — ответственность всей команды.** Все 6 участников пишут >= 15 вопросов каждый (итого >= 90). Не перекладывайте на одного Зоркого Линтера (Check-Dev) — это приводит к «Content Hell» и низкому качеству вопросов.
