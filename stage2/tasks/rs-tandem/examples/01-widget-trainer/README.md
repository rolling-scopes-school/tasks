# Widget Trainer: Документация

Это папка с детальной документацией для примера проекта **Widget Trainer**. Основная концепция и UI mockups находятся в [01-widget-trainer.md](../01-widget-trainer.md).

## Навигация по документам

| Документ | Описание | Когда читать |
|----------|----------|--------------|
| [scoring-and-plan.md](./scoring-and-plan.md) | Расчет баллов, 6-недельный план работ, Cut Scope Strategy | На этапе планирования |
| [data-contracts.md](./data-contracts.md) | TypeScript типы, API методы, Mock vs Real Mode | Перед началом разработки |
| [widget-engine.md](./widget-engine.md) | Архитектура движка виджетов, простые виджеты (Quiz, T/F) | При разработке Widget Engine |
| [async-sorter.md](./async-sorter.md) | Детали Event Loop виджета, Touch API, A11y | При разработке Async Sorter |
| [memory-game.md](./memory-game.md) | Детали GC виджета, граф объектов, rootIds | При разработке Memory Game |
| [risks-and-mitigations.md](./risks-and-mitigations.md) | Типичные ошибки, Bus Factor, Security Rules | На всех этапах проекта |

## Структура проекта

```
01-widget-trainer.md              # Product Spec (концепция + mockups)
01-widget-trainer/                # Эта папка
├── README.md                     # Навигация (вы здесь)
├── scoring-and-plan.md           # Расчет баллов + 6-недельный план
├── data-contracts.md             # TypeScript типы + API методы
├── widget-engine.md              # Архитектура + простые виджеты
├── async-sorter.md               # Event Loop D&D виджет
├── memory-game.md                # Garbage Collector виджет
└── risks-and-mitigations.md      # Риски и стратегии
```

## Как использовать

1. **Начните с основного файла** — прочитайте [01-widget-trainer.md](../01-widget-trainer.md) для понимания концепции
2. **Спланируйте** — изучите [scoring-and-plan.md](./scoring-and-plan.md) для понимания сроков и баллов
3. **Договоритесь о контрактах** — используйте [data-contracts.md](./data-contracts.md) как основу для типов
4. **Изучите риски** — прочитайте [risks-and-mitigations.md](./risks-and-mitigations.md) до начала разработки
5. **Реализуйте виджеты** — обращайтесь к специфичным документам по мере необходимости
