# Задание №4: Modules

## Требования:

1. Разбить приложение на несколько модулей:
   • `AppModule`,
   • `CartModule`,
   • `BooksModule`,
   • `OrdersModule`,
   • `SharedModule` (то, что много раз используется: компоненты, директивы, пайпы)
2. Экспортируйте из `SharedModule` следующие модули: `CommonModule`, `OrdersModule`. Используйте `SharedModule`, `BooksModule`, `CartModule`, а модуль `CommonModule`, `OrdersModule` уберите из импорта, если они там присутствуют.

## Оценка

Максимальная оценка - **50** баллов
