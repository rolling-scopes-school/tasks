# Codenames — Interview Edition: Документация

Это папка с детальной документацией для примера проекта **Codenames — Interview Edition**. Основная концепция, правила игры и UI mockups находятся в [02-codenames-game.md](../02-codenames-game.md).

## Навигация по документам

| Документ | Описание | Когда читать |
|----------|----------|--------------|
| [scoring-and-plan.md](./scoring-and-plan.md) | Расчёт баллов (6 человек), 6-недельный план работ, Cut Scope Strategy | На этапе планирования |
| [data-contracts.md](./data-contracts.md) | TypeScript типы, WebSocket протокол, AI интерфейсы, Mock vs Real Mode | Перед началом разработки |
| [game-engine.md](./game-engine.md) | Game State Machine (сервер + клиент), Room Management, Board Generation | При разработке Game Engine |
| [check-phase.md](./check-phase.md) | Фаза проверки знаний: попап, банк вопросов, Self/Peer и AI режимы | При разработке Check Phase |
| [ai-spymaster.md](./ai-spymaster.md) | AI интерфейсы + Mock Implementation, Solo Mode, будущая AI интеграция | При разработке AI / Solo Mode |
| [risks-and-mitigations.md](./risks-and-mitigations.md) | Bus Factor, WebSocket debugging, race conditions, timer desync, координация | На всех этапах проекта |

## Структура проекта

```
02-codenames-game.md              # Product Spec (концепция + правила + mockups)
02-codenames-game/                # Эта папка
├── README.md                     # Навигация (вы здесь)
├── scoring-and-plan.md           # Расчёт баллов + 6-недельный план
├── data-contracts.md             # TypeScript типы + WebSocket протокол + API
├── game-engine.md                # State Machine + Room Management + Board
├── check-phase.md                # Проверка знаний (попап + банк вопросов)
├── ai-spymaster.md               # AI Mock + Solo Mode
└── risks-and-mitigations.md      # Риски и стратегии
```

## Как использовать

1. **Начните с основного файла** — прочитайте [02-codenames-game.md](../02-codenames-game.md) для понимания концепции и правил
2. **Спланируйте** — изучите [scoring-and-plan.md](./scoring-and-plan.md) для понимания сроков, баллов и распределения ролей
3. **Договоритесь о контрактах** — используйте [data-contracts.md](./data-contracts.md) как основу для типов и WebSocket протокола
4. **Изучите риски** — прочитайте [risks-and-mitigations.md](./risks-and-mitigations.md) до начала разработки
5. **Реализуйте компоненты** — обращайтесь к [game-engine.md](./game-engine.md), [check-phase.md](./check-phase.md) и [ai-spymaster.md](./ai-spymaster.md) по мере необходимости

## Ключевые особенности этого примера

- **Команда 6 человек** — план оптимизирован для параллельной работы
- **AI полностью мокнут** — чистые интерфейсы позволяют подключить реальный AI позже
- **WebSocket мультиплеер** — серверная авторитетная State Machine
- **Check Phase** — уникальная образовательная механика: очки только за знания
- **650-690 баллов** достижимы без реального AI и фреймворков
