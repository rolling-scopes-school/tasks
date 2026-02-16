# Вариант A: Custom WS Server (Node.js + Socket.IO)

Полная документация для реализации Codenames с **собственным WebSocket сервером**. Максимум баллов, максимум сложности, максимум обучения.

> **Product Spec** (правила, UI mockups): [02-codenames-game.md](../../02-codenames-game.md)
> **Сравнение вариантов**: [../README.md](../README.md)

---

## Почему Custom WS?

- **Custom Backend +30** — отдельный балл за собственный сервер
- **Real-time / WS +20** — WebSocket протокол
- **State Machine на сервере** — авторитетный источник правды, невозможно читерить
- **Production-like архитектура** — опыт, ценный для собеседований
- **Reconnection, heartbeat, auth middleware** — реальные инженерные задачи

### Когда НЕ выбирать этот вариант

- В команде нет человека с опытом Node.js (или готовностью вложить 6+ часов в обучение)
- Boris (WS-Dev) — единственный, кто понимает бэкенд. Если он выбудет — проект встанет
- Команда предпочитает lower-risk подход → [Вариант B](../variant-b/)

---

## Команда

| Имя        | Роль             | Компоненты                                                                |
| ---------- | ---------------- | ------------------------------------------------------------------------- |
| **Alice**  | Lead             | Auth, CI/CD, Deployment, API Layer, Theme Switcher, Global Error Handling |
| **Boris**  | WS-Dev (Backend) | WebSocket Server, Room Management, Game State Machine, Turn Timer         |
| **Victor** | Board-Dev        | Game Board UI (5x5), Card Component, Animations, Client State Sync        |
| **Diana**  | Check-Dev        | Check Phase Popup, Question Bank, Evaluation Modes, i18n                  |
| **Eric**   | AI-Dev           | AI Mock Interfaces, Solo Mode, Landing Page, 404                          |
| **Felix**  | Lobby-Dev        | Lobby, Results Page, Profile, Player Stats, Responsive                    |

---

## Стек проекта

- **TypeScript** (strict mode)
- **Node.js + Express + Socket.IO** (WebSocket server)
- **Firebase Auth** (авторизация)
- **NPM Workspaces** (shared types между клиентом и сервером)
- **Vitest** (Unit Tests) + **Playwright** (E2E Tests)
- **AI: ВСЕ МОКНУТО** (категориальный подбор + keyword matching)

---

## Навигация по документам

| Документ                                               | Описание                                                                                  | Когда читать                  |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------- | ----------------------------- |
| [scoring-and-plan.md](./scoring-and-plan.md)           | Расчёт баллов (6 человек), 6-недельный план работ, Cut Scope Strategy                     | На этапе планирования         |
| [data-contracts.md](./data-contracts.md)               | TypeScript типы, WebSocket протокол, AI интерфейсы, Shared Types (monorepo)               | Перед началом разработки      |
| [game-engine.md](./game-engine.md)                     | Server State Machine, Room Management, Board Generation, DevTools, Headless Testing       | При разработке Game Engine    |
| [check-phase.md](./check-phase.md)                     | Фаза проверки знаний: попап, банк вопросов, Self/Peer и AI режимы, отдельный Check-таймер | При разработке Check Phase    |
| [ai-spymaster.md](./ai-spymaster.md)                   | AI интерфейсы + Mock Implementation (вкл. hardcoded MVP), Solo Mode, AI Pre-generation    | При разработке AI / Solo Mode |
| [risks-and-mitigations.md](./risks-and-mitigations.md) | Bus Factor, WS-Dev SPOF, Cold Start, Session Token, debugging, race conditions            | На всех этапах проекта        |

---

## Ключевые особенности этого варианта

- **Команда 6 человек** — план оптимизирован для параллельной работы
- **AI полностью мокнут** — чистые интерфейсы позволяют подключить реальный AI позже
- **WebSocket мультиплеер** — серверная авторитетная State Machine
- **Check Phase** — уникальная образовательная механика: очки только за знания
- **Session Token** — переживает F5 / reconnect (не привязываемся к socket.id)
- **NPM Workspaces** — shared types между client и server
- **DevTools панель** — God Mode для отладки на localhost
- **650-690 баллов** достижимы без реального AI и фреймворков
