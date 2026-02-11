# Scoring & Plan: Codenames — Interview Edition (Вариант B: Firebase Host-Based)

Этот документ содержит пример расчёта баллов и детальный план работ для команды из 6 человек при использовании **Firebase Host-Based архитектуры** (без кастомного сервера).

## Зачем этот документ

Этот раздел — **образец планирования** для команд и менторов. Он демонстрирует:

1. **Firebase = проще бэкенд, безопаснее delivery.** Вместо Node.js + Express + Socket.IO используется Firebase Realtime Database. Браузер создателя комнаты (Host) запускает State Machine, Firebase синхронизирует состояние между игроками. Это снижает порог входа, но даёт чуть меньше баллов за Backend-Dev (нет Custom Backend +30).
2. **Реалистичные сроки.** Эстимейты включают буфер +30-40% на изучение новых технологий.
3. **AI замокан.** Все AI интерфейсы реализованы моками. Реальная AI интеграция — отдельная задача на будущее.
4. **Процессы важны.** Митинги, код-ревью, дневник с первого дня — не бюрократия, а инвестиция в Teamwork Score.
5. **Cut Scope Strategy.** Заранее определено, что вырезать, если не успеваем.
6. **Главное отличие от Варианта A:** нет кастомного сервера. Firebase-Dev получает ~295 Personal вместо ~325 (разница -30 за отсутствие Custom Backend). Зато проще деплоймент, меньше точек отказа, быстрее выход на MVP.

> **Как использовать:** Это шаблон, не догма. Адаптируйте под свою команду, но сохраняйте принципы: планирование, коммуникация, документирование.

---

## Команда (6 человек)

| Студент                        | Роль      | Компоненты                                                                   |
| ------------------------------ | --------- | ---------------------------------------------------------------------------- |
| **Великий Мёрдж** (Lead)       | Team Lead | Auth, CI/CD, Deployment, API Layer, Theme Switcher, Global Error Handling    |
| **Тихий Сокет** (Firebase-Dev) | Firebase  | Firebase Setup, Realtime DB Schema, Security Rules, Host State Machine Logic |
| **Быстрый Рендер** (Board-Dev) | Frontend  | Game Board UI (5x5), Card Component, Animations, Client State Sync           |
| **Зоркий Линтер** (Check-Dev)  | Frontend  | Check Phase Popup, Question Bank, Evaluation Modes, i18n                     |
| **Мудрый Мок** (AI-Dev)        | Frontend  | AI Mock Interfaces, Solo Mode, Landing Page, 404                             |
| **Ловкий Роутер** (Lobby-Dev)  | Frontend  | Lobby, Results Page, Profile, Player Stats, Responsive                       |

> **Firebase-Dev SPOF:** Тихий Сокет (Firebase-Dev) — единственный человек, владеющий Firebase-логикой и Host State Machine. Это создаёт риск single point of failure (SPOF). Для митигации **Великий Мёрдж (Lead) обязан проводить парное программирование с Тихим Сокетом на неделях 1-2**, чтобы как минимум два человека в команде понимали Firebase-код и Security Rules. SPOF здесь менее критичен, чем в Варианте A (Firebase-инфраструктура проще кастомного WS-сервера), но всё равно важен.

## Стек проекта

- **TypeScript** (strict mode)
- **Firebase** (Auth + Realtime Database + Hosting)
- **Shared Types** (`src/shared/`) — общие TypeScript-типы для всех модулей
- **Vitest** (Unit Tests)
- **Playwright** (E2E Tests)
- **AI: ВСЕ МОКНУТО** (категориальный подбор + keyword matching)

> **Архитектурная модель:** Создатель комнаты (Host) запускает State Machine в своём браузере. State Machine пишет обновления в Firebase Realtime DB (`rooms/{code}/state`). Все остальные игроки подписаны на `onValue` и получают обновления в реальном времени. Security Rules защищают `board-secret` от чтения не-Host'ами.

---

## Командные баллы (одинаковые для всех)

| Score               | Баллы   | Комментарий                                              |
| ------------------- | ------- | -------------------------------------------------------- |
| Tandem: Code        | 100     | TS strict, ESLint, Prettier, error handling              |
| Tandem: Teamwork    | 280     | Board + Issues + PRs + Deploy (6 человек = больше ревью) |
| **Итого командные** | **380** |                                                          |

---

## Личные баллы: Великий Мёрдж (Lead — Team Lead)

| Категория             | Фича                        | Баллы   |
| --------------------- | --------------------------- | ------- |
| Backend & Data        | Auth Integration (Firebase) | +15     |
| Backend & Data        | BaaS CRUD (Firebase RTDB)   | +15     |
| UI & Interaction      | Theme Switcher              | +10     |
| Quality               | Unit Tests 20%+             | +10     |
| Quality               | E2E Tests (3 сценария)      | +10     |
| DevOps & Role         | Team Lead                   | +20     |
| DevOps & Role         | Auto-deploy                 | +5      |
| Architecture          | API Layer                   | +10     |
| Architecture          | Design Patterns             | +10     |
| **Personal Features** |                             | **105** |
| Development Diary     | Детальный                   | 80      |
| Mentor Review         | Good (40+40+40)             | 120     |
| **Итого Personal**    |                             | **305** |

> Баллы Lead'а идентичны Варианту A — роль Team Lead не зависит от выбранной архитектуры бэкенда.

## Личные баллы: Тихий Сокет (Firebase-Dev — Firebase)

| Категория             | Фича                                              | Баллы   |
| --------------------- | ------------------------------------------------- | ------- |
| My Components         | Firebase Host Logic (Complex Component)           | +25     |
| My Components         | Room Management + Security Rules (Rich UI Screen) | +20     |
| Backend & Data        | BaaS CRUD (Firebase RTDB)                         | +15     |
| Backend & Data        | Real-time (Firebase subscriptions)                | +20     |
| Architecture          | Design Patterns (State Machine)                   | +10     |
| Quality               | Unit Tests 20%+                                   | +10     |
| **Personal Features** |                                                   | **100** |
| Development Diary     | Детальный                                         | 80      |
| Mentor Review         | OK-Good (25+40+40)                                | 105     |
| **Итого Personal**    |                                                   | **285** |

> **Сравнение с Вариантом A (WS-Dev: 325 Personal):**
>
> - Нет Custom Backend +30 (главная разница: Node.js + Express отсутствует)
> - WebSocket Server (+30) заменён на Firebase Host Logic (+25) — логика сложная, но Firebase берёт на себя транспорт
> - Room Management остаётся Complex Component в Варианте A (+25), но в Варианте B это скорее Rich UI Screen (+20) — Firebase SDK упрощает CRUD по комнатам
> - Real-time +20 сохраняется (Firebase subscriptions = полноценный real-time)
> - Итого разница: **-40** баллов Personal Features (100 vs 125 в Варианте A), что частично компенсируется более быстрым выходом на MVP

## Личные баллы: Быстрый Рендер (Board-Dev — Game Board)

| Категория             | Фича                                   | Баллы   |
| --------------------- | -------------------------------------- | ------- |
| My Components         | Game Board (Complex Component)         | +25     |
| My Components         | Client Game Engine (Complex Component) | +25     |
| UI & Interaction      | Advanced Animations                    | +10     |
| Architecture          | Design Patterns (Observer, State)      | +10     |
| Quality               | Unit Tests 20%+                        | +10     |
| Quality               | E2E Tests (3 сценария)                 | +10     |
| **Personal Features** |                                        | **90**  |
| Development Diary     | Детальный                              | 80      |
| Mentor Review         | OK-Good (25+40+40)                     | 105     |
| **Итого Personal**    |                                        | **275** |

> Баллы Board-Dev идентичны Варианту A — UI-компоненты не зависят от бэкенда.

## Личные баллы: Зоркий Линтер (Check-Dev — Check Phase)

| Категория             | Фича                                  | Баллы   |
| --------------------- | ------------------------------------- | ------- |
| My Components         | Check Phase Popup (Complex Component) | +25     |
| My Components         | Question Bank System (Rich UI Screen) | +20     |
| UI & Interaction      | i18n (2 языка)                        | +10     |
| Architecture          | API Layer                             | +10     |
| Quality               | Unit Tests 20%+                       | +10     |
| Quality               | Unit Tests 50%+                       | +10     |
| **Personal Features** |                                       | **85**  |
| Development Diary     | Детальный                             | 80      |
| Mentor Review         | OK-Good (25+40+40)                    | 105     |
| **Итого Personal**    |                                       | **270** |

## Личные баллы: Мудрый Мок (AI-Dev — AI + Solo)

| Категория             | Фича                                      | Баллы   |
| --------------------- | ----------------------------------------- | ------- |
| My Components         | AI Spymaster Mock (Complex Component)     | +25     |
| My Components         | Solo Game Mode (Rich UI Screen)           | +20     |
| My Components         | Landing Page (Rich UI Screen)             | +20     |
| AI                    | AI Chat UI (мок с отображением подсказок) | +20     |
| UI & Interaction      | Responsive                                | +5      |
| Quality               | Unit Tests 20%+                           | +10     |
| **Personal Features** |                                           | **100** |
| Development Diary     | Детальный                                 | 80      |
| Mentor Review         | OK-Good (25+40+40)                        | 105     |
| **Итого Personal**    |                                           | **285** |

## Личные баллы: Ловкий Роутер (Lobby-Dev — Lobby, Results, Profile)

| Категория             | Фича                             | Баллы   |
| --------------------- | -------------------------------- | ------- |
| My Components         | Lobby (Rich UI Screen)           | +20     |
| My Components         | Results Page (Rich UI Screen)    | +20     |
| My Components         | Profile + Stats (Rich UI Screen) | +20     |
| Backend & Data        | BaaS CRUD                        | +15     |
| UI & Interaction      | Responsive                       | +5      |
| Quality               | Unit Tests 20%+                  | +10     |
| Quality               | E2E Tests (3 сценария)           | +10     |
| **Personal Features** |                                  | **100** |
| Development Diary     | Детальный                        | 80      |
| Mentor Review         | OK-Good (25+40+40)               | 105     |
| **Итого Personal**    |                                  | **285** |

---

## Итоговая таблица

| Студент                    | Code | Teamwork | Personal | **Итого** |
| -------------------------- | ---- | -------- | -------- | --------- |
| Великий Мёрдж (Lead)       | 100  | 280      | 305      | **685**   |
| Тихий Сокет (Firebase-Dev) | 100  | 280      | 285      | **665**   |
| Быстрый Рендер (Board-Dev) | 100  | 280      | 275      | **655**   |
| Зоркий Линтер (Check-Dev)  | 100  | 280      | 270      | **650**   |
| Мудрый Мок (AI-Dev)        | 100  | 280      | 285      | **665**   |
| Ловкий Роутер (Lobby-Dev)  | 100  | 280      | 285      | **665**   |

> **Сравнение с Вариантом A:** Firebase-Dev получает 665 вместо 705 (WS-Dev). Разница -40 баллов обусловлена отсутствием Custom Backend (+30) и упрощением Room Management (+25 -> +20). Все остальные роли получают те же баллы.

> **AI-фичи = все мокнуты.** Когда реальный AI будет подключен, Мудрый Мок (AI-Dev) получит дополнительные баллы: +10 (AI Streaming), +10 (Raw LLM API). Остальной код менять не придётся — интерфейсы уже определены.

> **Question Bank — ответственность всей команды.** Каждый из 6 участников обязан написать минимум 15 вопросов для Question Bank (итого >= 90 вопросов). Это влияет на качество Check Phase и оценку контента. Вопросы проходят peer review.

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

| Технология                             | Время на изучение | Примечание                                                     |
| -------------------------------------- | ----------------- | -------------------------------------------------------------- |
| Firebase Auth                          | 3-4ч              | Документация + первые эксперименты                             |
| Firebase Realtime Database             | 4-6ч              | Schema design, Security Rules, `onValue`/`push`/`set`/`update` |
| Firebase Security Rules                | 2-3ч              | Защита `board-secret` от не-Host'ов, валидация записей         |
| Unit Tests с Vitest                    | 3-4ч              | Первый setup занимает дольше                                   |
| E2E Tests с Playwright                 | 4-6ч              | CI конфигурация требует отладки                                |
| State Machine pattern                  | 2-3ч              | Документация + реализация (Host-side)                          |
| Deployment (Vercel + Firebase Hosting) | 2-3ч              | Проще, чем Vercel + Render (один провайдер для DB и хостинга)  |

**Итого на изучение:** ~20-29ч на команду (распределяется по специализациям)

> **Сравнение с Вариантом A (~21-32ч):** Чуть меньше, потому что не нужно изучать Node.js + Express (4-6ч), но добавляются Firebase Security Rules (2-3ч). Чистая экономия ~2-3ч.

---

## План работ (6 недель)

> **Формат времени:** Min | Max | Avg (включает буфер на изучение)

---

### Неделя 1: Kickoff, Setup & Firebase

**Цель:** Инфраструктура, CI/CD, Firebase-проект, схема данных, доска задач, первые страницы.

| Задача                                                             | Кто                         | Min       | Max     | Avg        |
| ------------------------------------------------------------------ | --------------------------- | --------- | ------- | ---------- |
| Kickoff-митинг: роли, стек, инструменты                            | Все                         | 1ч        | 2ч      | 1.5ч       |
| Создать репо, TS strict, ESLint, Prettier, Husky                   | Великий Мёрдж               | 2ч        | 4ч      | 3ч         |
| GitHub Projects board, первые Issues                               | Великий Мёрдж               | 1ч        | 2ч      | 1.5ч       |
| CI/CD: Vercel (frontend) + Firebase Hosting (опционально)          | Великий Мёрдж               | 2ч        | 4ч      | 3ч         |
| Планирование архитектуры: папки, типы, API Layer                   | Все                         | 2ч        | 4ч      | 3ч         |
| Согласовать data-contracts (TypeScript типы)                       | Все                         | 2ч        | 3ч      | 2.5ч       |
| Создать Firebase-проект, подключить Realtime DB                    | Тихий Сокет                 | 2ч        | 4ч      | 3ч         |
| Спроектировать Firebase-схему (`rooms/{code}/`)                    | Тихий Сокет + Все           | 2ч        | 4ч      | 3ч         |
| Написать Security Rules v1 (базовая защита)                        | Тихий Сокет                 | 2ч        | 3ч      | 2.5ч       |
| **Pair-programming: Великий Мёрдж + Тихий Сокет** (Firebase setup) | Великий Мёрдж + Тихий Сокет | —         | —       | —          |
| Firebase Auth setup                                                | Великий Мёрдж               | 2ч        | 4ч      | 3ч         |
| Базовый роутер (SPA router)                                        | Ловкий Роутер               | 3ч        | 6ч      | 4.5ч       |
| Landing Page                                                       | Мудрый Мок                  | 2ч        | 4ч      | 3ч         |
| 404 Page                                                           | Мудрый Мок                  | 1ч        | 2ч      | 1.5ч       |
| Дневник: первая запись                                             | Все                         | 0.5ч      | 1ч      | 0.75ч      |
| **Итого неделя 1**                                                 |                             | **23.5ч** | **43ч** | **35.25ч** |

> **Pair-programming note:** Время парного программирования Великого Мёрджа и Тихого Сокета входит в эстимейт задачи «Создать Firebase-проект» и «Спроектировать Firebase-схему» и не учитывается отдельно. Цель — чтобы Lead понимал структуру Realtime DB и Security Rules и мог подхватить при необходимости.

> **Firebase-схема — ключевое решение недели.** Структура `rooms/{code}/` определяет всю дальнейшую разработку. Потратьте 2-3 часа на обсуждение всей командой. Пример структуры — см. data-contracts.md.

---

### Неделя 2: Auth, Firebase Core & Basic UI

**Цель:** Рабочая авторизация, Firebase комнаты работают, Host State Machine скелет, скелеты основных экранов.

| Задача                                                             | Кто                              | Min     | Max     | Avg        |
| ------------------------------------------------------------------ | -------------------------------- | ------- | ------- | ---------- |
| Недельный синк                                                     | Все                              | 0.5ч    | 1ч      | 0.75ч      |
| Login/Register + Firebase Auth                                     | Великий Мёрдж                    | 5ч      | 10ч     | 7.5ч       |
| Protected Routes                                                   | Великий Мёрдж                    | 2ч      | 4ч      | 3ч         |
| Global Error Handling (Toast system)                               | Великий Мёрдж                    | 3ч      | 5ч      | 4ч         |
| Firebase: Room create/join/leave (`rooms/{code}/players`)          | Тихий Сокет                      | 5ч      | 10ч     | 7.5ч       |
| Firebase: Player role assignment (Spymaster/Operative)             | Тихий Сокет                      | 2ч      | 4ч      | 3ч         |
| Host State Machine: скелет (transitions, states)                   | Тихий Сокет                      | 4ч      | 8ч      | 6ч         |
| **Pair-programming: Великий Мёрдж + Тихий Сокет** (Firebase rooms) | Великий Мёрдж + Тихий Сокет      | —       | —       | —          |
| Game Board UI: grid 5x5, card component, CSS                       | Быстрый Рендер                   | 5ч      | 10ч     | 7.5ч       |
| Check Phase: popup component skeleton                              | Зоркий Линтер                    | 4ч      | 8ч      | 6ч         |
| Question Bank: структура + первые вопросы (каждый пишет >= 15 шт.) | Все (координирует Зоркий Линтер) | 3ч      | 6ч      | 4.5ч       |
| AI interface definitions (TypeScript)                              | Мудрый Мок                       | 3ч      | 5ч      | 4ч         |
| Lobby page (UI skeleton, список комнат)                            | Ловкий Роутер                    | 5ч      | 10ч     | 7.5ч       |
| Profile page (UI)                                                  | Ловкий Роутер                    | 3ч      | 6ч      | 4.5ч       |
| Ревью PR (каждый ревьюит 1-2 чужих)                                | Все                              | 1.5ч    | 3ч      | 2.25ч      |
| Дневник: 2 записи                                                  | Все                              | 0.5ч    | 1ч      | 0.75ч      |
| **Итого неделя 2**                                                 |                                  | **46ч** | **91ч** | **68.75ч** |

> **Content Hell prevention:** На неделях 2-3 каждый из 6 участников пишет минимум 15 вопросов для Question Bank (итого >= 90). Зоркий Линтер (Check-Dev) координирует: распределяет темы, проверяет формат, проводит peer review. Не откладывайте написание вопросов на последние недели — это приводит к «Content Hell», когда вопросов мало и они некачественные.

> **Pair-programming note:** Великий Мёрдж продолжает парные сессии с Тихим Сокетом при работе над Firebase rooms. Время входит в эстимейт задачи Тихого Сокета.

---

### Неделя 3: Game Engine, Check Phase & Solo Mode

**Цель:** Играемый раунд (хотя бы грубый), Check Phase работает, Solo Mode начат.

| Задача                                                          | Кто                              | Min     | Max      | Avg       |
| --------------------------------------------------------------- | -------------------------------- | ------- | -------- | --------- |
| Недельный синк                                                  | Все                              | 0.5ч    | 1ч       | 0.75ч     |
| API Layer (абстракция для всех сервисов)                        | Великий Мёрдж                    | 4ч      | 8ч       | 6ч        |
| Host State Machine: полная реализация (все переходы)            | Тихий Сокет                      | 6ч      | 12ч      | 9ч        |
| Firebase sync: `onValue`/`push`/`update` для игрового состояния | Тихий Сокет                      | 3ч      | 6ч       | 4.5ч      |
| Turn management: таймер на стороне Host (timestamp-based)       | Тихий Сокет                      | 3ч      | 6ч       | 4.5ч      |
| Board: card click handling, Spymaster view                      | Быстрый Рендер                   | 6ч      | 12ч      | 9ч        |
| Board: turn indicator, clue display, score tracker              | Быстрый Рендер                   | 4ч      | 8ч       | 6ч        |
| Check Phase: Self/Peer evaluation mode                          | Зоркий Линтер                    | 5ч      | 10ч      | 7.5ч      |
| Check Phase: "Показать ответ" flow + check-таймер (30 сек)      | Зоркий Линтер                    | 3ч      | 6ч       | 4.5ч      |
| Question Bank: дособрать вопросы до >= 90 (все участники)       | Все (координирует Зоркий Линтер) | 3ч      | 6ч       | 4.5ч      |
| AI Spymaster: mock clue generator                               | Мудрый Мок                       | 5ч      | 10ч      | 7.5ч      |
| Solo Mode: setup page + solo game flow                          | Мудрый Мок                       | 5ч      | 10ч      | 7.5ч      |
| Lobby: create/join room через Firebase                          | Ловкий Роутер                    | 5ч      | 10ч      | 7.5ч      |
| Results page (базовая)                                          | Ловкий Роутер                    | 3ч      | 6ч       | 4.5ч      |
| Ревью PR                                                        | Все                              | 2ч      | 4ч       | 3ч        |
| Дневник: 2 записи                                               | Все                              | 0.5ч    | 1ч       | 0.75ч     |
| **Итого неделя 3**                                              |                                  | **53ч** | **106ч** | **79.5ч** |

> **Host State Machine — самая сложная часть Firebase-варианта.** В отличие от Варианта A, где State Machine работает на сервере (стабильная среда), здесь State Machine работает в браузере Host'а. Это означает: (1) при закрытии вкладки Host'а игра "зависает", (2) нужна логика переназначения Host'а или уведомления игроков. На неделе 3 допустимо: если Host уходит — игра завершается. Reconnect-логику добавить на неделе 4.

---

### Неделя 4: Integration, Content & Unit Tests

**Цель:** Полная интеграция, больше контента, начало тестирования.

| Задача                                                 | Кто                         | Min     | Max     | Avg     |
| ------------------------------------------------------ | --------------------------- | ------- | ------- | ------- |
| Недельный синк                                         | Все                         | 0.5ч    | 1ч      | 0.75ч   |
| Theme Switcher (CSS variables)                         | Великий Мёрдж               | 2ч      | 4ч      | 3ч      |
| Security Rules v2: защита `board-secret` от не-Host'ов | Великий Мёрдж + Тихий Сокет | 3ч      | 6ч      | 4.5ч    |
| Host reconnect handling (сохранение state в RTDB)      | Тихий Сокет                 | 3ч      | 6ч      | 4.5ч    |
| Host migration: уведомление при отключении Host'а      | Тихий Сокет                 | 2ч      | 4ч      | 3ч      |
| Board: animations (card flip, color reveal)            | Быстрый Рендер              | 4ч      | 8ч      | 6ч      |
| Board: responsive layout (mobile board)                | Быстрый Рендер              | 3ч      | 6ч      | 4.5ч    |
| Check Phase: AI evaluation mode (мок)                  | Зоркий Линтер               | 5ч      | 10ч     | 7.5ч    |
| Check Phase: расширение до 40+ вопросов                | Зоркий Линтер               | 4ч      | 8ч      | 6ч      |
| AI: mock check evaluator                               | Мудрый Мок                  | 4ч      | 8ч      | 6ч      |
| AI: difficulty adaptation mock                         | Мудрый Мок                  | 2ч      | 4ч      | 3ч      |
| Lobby: public room list, player count (Firebase query) | Ловкий Роутер               | 3ч      | 6ч      | 4.5ч    |
| Profile: game stats, win rate                          | Ловкий Роутер               | 3ч      | 6ч      | 4.5ч    |
| Word Bank: 50+ JS/TS концептов                         | Все                         | 3ч      | 6ч      | 4.5ч    |
| Unit Tests (каждый покрывает свой код)                 | Все                         | 4ч      | 8ч      | 6ч      |
| Ревью PR                                               | Все                         | 2ч      | 4ч      | 3ч      |
| Дневник: 2 записи                                      | Все                         | 0.5ч    | 1ч      | 0.75ч   |
| **Итого неделя 4**                                     |                             | **48ч** | **96ч** | **72ч** |

> **Security Rules v2 — критическая задача.** Firebase Security Rules должны гарантировать, что: (1) только Host может писать в `rooms/{code}/state`, (2) `board-secret` (цвета карточек) доступен только Host'у и Spymaster'ам, (3) игроки не могут модифицировать чужие данные. Тестируйте правила через Firebase Emulator Suite.

---

### Неделя 5: E2E Tests, Polish & Edge Cases

**Цель:** E2E покрытие, полировка UX, баг-фиксы.

| Задача                                                        | Кто                          | Min       | Max     | Avg     |
| ------------------------------------------------------------- | ---------------------------- | --------- | ------- | ------- |
| Недельный синк                                                | Все                          | 0.5ч      | 1ч      | 0.75ч   |
| E2E: Auth flow (3 сценария)                                   | Великий Мёрдж                | 4ч        | 8ч      | 6ч      |
| E2E: Game flow (3 сценария)                                   | Быстрый Рендер + Тихий Сокет | 4ч        | 8ч      | 6ч      |
| E2E: Check Phase (3 сценария)                                 | Зоркий Линтер                | 4ч        | 8ч      | 6ч      |
| E2E: Solo mode (3 сценария)                                   | Мудрый Мок                   | 4ч        | 8ч      | 6ч      |
| E2E: Lobby + Results (3 сценария)                             | Ловкий Роутер                | 4ч        | 8ч      | 6ч      |
| Bug fixes, edge cases (Host disconnect, timeout, stale rooms) | Все                          | 6ч        | 12ч     | 9ч      |
| Firebase: cleanup stale rooms (Cloud Function или cron-like)  | Тихий Сокет                  | 2ч        | 4ч      | 3ч      |
| Анимации polish (transitions, микровзаимодействия)            | Быстрый Рендер               | 2ч        | 4ч      | 3ч      |
| Доработка Unit Tests до 20%+                                  | Все                          | 3ч        | 6ч      | 4.5ч    |
| Ревью PR                                                      | Все                          | 2ч        | 4ч      | 3ч      |
| Дневник: 2 записи                                             | Все                          | 0.5ч      | 1ч      | 0.75ч   |
| **Итого неделя 5**                                            |                              | **36.5ч** | **72ч** | **54ч** |

---

### Неделя 6: Polish, README & Presentation

**Цель:** Финальная полировка, документация, подготовка к защите.

| Задача                                             | Кто                         | Min     | Max     | Avg     |
| -------------------------------------------------- | --------------------------- | ------- | ------- | ------- |
| Финальный синк: план презентации                   | Все                         | 0.5ч    | 1ч      | 0.75ч   |
| Проверить prod (Vercel + Firebase)                 | Великий Мёрдж + Тихий Сокет | 1.5ч    | 3ч      | 2.25ч   |
| README.md (описание, скриншоты, GIF, ссылки на PR) | Великий Мёрдж               | 3ч      | 5ч      | 4ч      |
| Мерж дневников в \*-merged.md                      | Все                         | 0.5ч    | 1ч      | 0.75ч   |
| Запись демо-ролика (1-2 мин)                       | Великий Мёрдж               | 1ч      | 2ч      | 1.5ч    |
| Репетиция презентации                              | Все                         | 1ч      | 2ч      | 1.5ч    |
| Финальные фиксы                                    | Все                         | 3ч      | 6ч      | 4.5ч    |
| Дневник: финальная запись                          | Все                         | 0.5ч    | 1ч      | 0.75ч   |
| **Итого неделя 6**                                 |                             | **11ч** | **21ч** | **16ч** |

> **Деплоймент проще Варианта A:** Frontend на Vercel, Firebase — уже в облаке (Auth + Realtime DB). Нет необходимости деплоить отдельный backend (Render). Это экономит 1-2 часа на финальной проверке.

---

## Сводка по времени

| Неделя               | Фокус                           | Min      | Max      | Avg        |
| -------------------- | ------------------------------- | -------- | -------- | ---------- |
| 1                    | Kickoff, Setup & Firebase       | 23.5ч    | 43ч      | 35.25ч     |
| 2                    | Auth, Firebase Core & Basic UI  | 46ч      | 91ч      | 68.75ч     |
| 3                    | Game Engine, Check Phase & Solo | 53ч      | 106ч     | 79.5ч      |
| 4                    | Integration, Content & Tests    | 48ч      | 96ч      | 72ч        |
| 5                    | E2E, Polish & Edge Cases        | 36.5ч    | 72ч      | 54ч        |
| 6                    | README & Presentation           | 11ч      | 21ч      | 16ч        |
| **Всего на команду** |                                 | **218ч** | **429ч** | **325.5ч** |

**На одного студента:** ~54ч за 6 недель ~ **8-9ч/неделю**

> **Сравнение с Вариантом A (~327ч, ~9-10ч/неделю):** Firebase-вариант экономит ~1-2 часа на человека за весь проект. Экономия небольшая, потому что сложность перемещается с серверного кода на Security Rules и Host State Machine. Но порог входа ниже — не нужно разбираться в Node.js/Express/Socket.IO.

> **Про оценку времени:**
>
> - **8-9ч/неделю** — реалистичная оценка для команды из 6 (параллелизация!)
> - Включен буфер +30-40% на отладку и неожиданные проблемы
> - Недели 3-4 самые загруженные — будьте к этому готовы
> - При 3 людях нагрузка будет ~16-18ч/неделю — заметно больше

---

## Cut Scope Strategy (MoSCoW)

### Must Have (обязательно)

- [ ] Auth (Login/Register)
- [ ] Lobby (создание/вход в комнату)
- [ ] Game Board (5x5, клик, открытие)
- [ ] Firebase Host Logic (State Machine в браузере Host'а)
- [ ] Firebase Realtime DB (синхронизация состояния)
- [ ] Security Rules (защита board-secret)
- [ ] Check Phase (Self/Peer режим минимум)
- [ ] Solo Mode с мокнутым AI Spymaster
- [ ] Question Bank >= 90 вопросов (каждый участник >= 15)
- [ ] Unit Tests 20%+
- [ ] E2E Tests (3 сценария минимум)
- [ ] README с описанием и скриншотами
- [ ] Deployment (Vercel + Firebase)

### Should Have (желательно)

- [ ] AI Check evaluation mode (мок)
- [ ] Turn Timer (timestamp-based, Host-side)
- [ ] Card flip animations
- [ ] Theme Switcher
- [ ] Responsive design
- [ ] Profile + Stats
- [ ] Results page с деталями
- [ ] Question Bank 40+ вопросов
- [ ] Host reconnect handling
- [ ] Security Rules v2 (детальная валидация)

### Could Have (опционально)

- [ ] Spectator mode
- [ ] i18n (2 языка)
- [ ] Audio effects
- [ ] Unit Tests 50%+
- [ ] Difficulty adaptation в AI mock
- [ ] Custom Word Packs
- [ ] Leaderboard
- [ ] Host migration (автоматический выбор нового Host'а)

### Won't Have (откладываем)

- Реальная AI интеграция (только интерфейсы + моки)
- Voice Chat (WebRTC)
- Tournaments
- OAuth (Google/GitHub)
- PWA / Offline mode
- 3D визуализации
- Cloud Functions (серверная логика Firebase)

---

## Контрольные точки

| Неделя | Checkpoint           | Критерий успеха                                                                                                                  |
| ------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1      | Setup done           | CI/CD работает, Firebase-проект создан, схема RTDB согласована, "Hello World" на проде                                           |
| 2      | Auth + Firebase done | Можно залогиниться, комнаты создаются/присоединяются через Firebase, Host State Machine скелет работает, >= 90 вопросов написаны |
| 3      | MVP demo             | Один полный раунд играбелен (Host запускает State Machine, остальные видят обновления через Firebase)                            |
| 4      | Features done        | Check Phase работает, Solo Mode работает, Security Rules v2, тесты начаты                                                        |
| 5      | Quality done         | E2E проходят, основные баги пофикшены, Host disconnect обработан                                                                 |
| 6      | Release              | README готов, демо записано                                                                                                      |

> **Правило 5-й недели:** Если к началу 5-й недели MVP не работает, примените Cut Scope Strategy. Лучше сдать 80% проекта в идеальном состоянии, чем 100% с багами.

---

## Ключевые выводы

1. **620-660 баллов достижимы с мокнутым AI** — без реальных LLM, без фреймворков. Firebase-вариант даёт чуть меньше баллов Firebase-Dev'у (-40), но безопаснее по delivery.

2. **8-9 часов в неделю на человека** — реалистичная нагрузка для команды из 6. Чуть меньше, чем в Варианте A (9-10ч).

3. **Firebase setup с первого дня** — создание проекта, Realtime DB, Security Rules. Не откладывайте.

4. **Host State Machine — самая сложная часть.** Тихий Сокет (Firebase-Dev) должен начать с первой недели и не отвлекаться. В отличие от серверного варианта, State Machine работает в браузере — это добавляет сложности (вкладка может закрыться, пользователь может перезагрузить страницу).

5. **Firebase-Dev SPOF mitigation.** Великий Мёрдж (Lead) обязан проводить парное программирование с Тихим Сокетом (Firebase-Dev) на неделях 1-2. Если Тихий Сокет выбывает — Lead сможет подхватить Firebase-код. SPOF менее критичен, чем в Варианте A, но всё ещё важен.

6. **Контракты до кода.** Согласуйте data-contracts (TypeScript типы) и Firebase-схему (`rooms/{code}/`) на первой неделе. Это сэкономит десятки часов на интеграцию.

7. **Security Rules — не забывайте.** Firebase по умолчанию открыт. Без правильных Security Rules любой клиент может читать `board-secret` и подсматривать карточки. Это должно быть закрыто к неделе 4.

8. **AI интерфейсы — инвестиция.** Даже если AI не будет подключен, чистые интерфейсы улучшают архитектуру и дают баллы за Design Patterns.

9. **Дневник с первого дня** — не "начну потом", а инструмент для структурирования мыслей.

10. **Question Bank — ответственность всей команды.** Все 6 участников пишут >= 15 вопросов каждый (итого >= 90). Не перекладывайте на одного Зоркого Линтера (Check-Dev) — это приводит к «Content Hell» и низкому качеству вопросов.
