# Personal Score (600 баллов)

Личная оценка каждого студента. Баллы собираются поэтапно:

| #   | Этап              | Баллы | Когда           | Критерии                                                   |
| --- | ----------------- | ----- | --------------- | ---------------------------------------------------------- |
| 1   | Development Diary | 100   | Week 6          | [WEEK6_CHECKPOINT.md](./WEEK6_CHECKPOINT.md)               |
| 2   | Personal Features | 250   | self-assessment | [ниже](#personal-features-250-баллов)                      |
| 3   | Week 7 Checkpoint | 20    | Week 7          | [WEEK7_CHECKPOINT.md](./WEEK7_CHECKPOINT.md)               |
| 4   | Peer Review       | 80    | финалка         | [DEFENCE_PEER.md](./DEFENCE_PEER.md#оценка-80-баллов)      |
| 5   | Mentor Review     | 150   | финалка         | [DEFENCE_MENTOR.md](./DEFENCE_MENTOR.md#оценка-150-баллов) |

**Что делать:** на 7-й неделе подготовьте список того, что вы сделали — [self-assessment](./WEEK7_CHECKPOINT.md#self-assessment).

**Когда начисляется оценка:** итоговый балл по Personal Score выставляется после прохождения двух защит (Peer Review + менторская сессия) при наличии дневника разработки.

---

## Personal Features (250 баллов)

В self-assessment вы заявляете всё, что сделали лично. Общая сумма может превысить 250, но в зачёт идёт максимум **250 баллов**. При этом держите в уме: фокус ваших презентаций — на **2 личных Feature Component**, которые вы разработали сами. Именно их вы будете демонстрировать и объяснять на [Peer Review](./DEFENCE_PEER.md) и [менторской сессии](./DEFENCE_MENTOR.md).

| Категория            | Фича                                                                                                                   | Баллы         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- |
| **My Components**    | **Complex Component:** Разработка сложного интерактивного компонента (Game Board, Widget Engine, Chat UI, Code Runner) | +25 за каждый |
|                      | **Rich UI Screen:** Реализация экрана со сложной логикой и состоянием (Dashboard, Library с фильтрами, Profile, Lobby) | +20 за каждый |
|                      | **Сложный бэкенд-сервис:** Game Server Engine, Matchmaking System, AI Context Manager, Code Execution Sandbox          | +30 за каждый |
| **Backend & Data**   | **BaaS Auth:** Настройка авторизации через BaaS (Firebase/Supabase Auth, email, OAuth)                                 | +15           |
|                      | **Custom Auth:** Собственная авторизация (JWT + bcrypt + middleware) без BaaS                                          | +20           |
|                      | **BaaS CRUD:** Работа с облачной БД (Firebase/Supabase), реализация минимум 1 endpoint                                 | +15           |
|                      | **Custom Backend:** Разработка своего бэкенда (Node.js/Python) с локальной базой данных                                | +30           |
|                      | **Backend Framework:** Использование серверного фреймворка (NestJS, Express, Fastify, Koa)                             | +10           |
|                      | **API Documentation:** Swagger/OpenAPI или аналогичная документация API                                                | +5            |
|                      | **Real-time:** WebSocket, SSE или Real-time подписки в проекте                                                         | +20           |
| **AI**               | **AI Chat UI:** Интерфейс чата с отправкой промпта и отображением ответа LLM                                           | +20           |
|                      | **AI Streaming:** Реализация посимвольного вывода ответа (stream text)                                                 | +10           |
|                      | **Raw LLM API:** Интеграция без "magic" SDK (использование native fetch + ReadableStream)                              | +10           |
|                      | **AI RAG:** Поиск по базе знаний через embeddings (векторный поиск)                                                    | +20           |
|                      | **Local LLM:** Запуск и интеграция локальных моделей (Ollama, WebLLM и т.п.)                                           | +10           |
|                      | **Tool Use:** Реализация Function Calling (LLM вызывает функции вашего кода)                                           | +15           |
| **Game**             | **Canvas 2D:** Реализация игры на Canvas API с game loop                                                               | +20           |
|                      | **Physics Engine:** Внедрение физики (Matter.js, Cannon.js или собственная реализация)                                 | +10           |
|                      | **WebGL / 3D:** Создание 3D-сцены с интерактивностью (Three.js, R3F)                                                   | +25           |
|                      | **Audio API:** Работа со звуком и музыкой (Web Audio API / Howler)                                                     | +5            |
|                      | **Leaderboard:** Таблица рекордов с сохранением результатов между сессиями                                             | +5            |
| **UI & Interaction** | **Drag & Drop:** Реализация перетаскивания (Kanban, сортировка, конструктор)                                           | +10           |
|                      | **Code Editor:** Внедрение редактора кода (Monaco, CodeMirror, Ace)                                                    | +15           |
|                      | **Rich Text Editor:** Редактор текста с форматированием (WYSIWYG)                                                      | +10           |
|                      | **Advanced Animations:** Сложные анимации переходов или микро-взаимодействия                                           | +10           |
|                      | **Theme Switcher:** Переключение тем (Light/Dark) через CSS variables или Context                                      | +10           |
|                      | **i18n:** Локализация интерфейса (минимум 2 языка) с переключением                                                     | +10           |
|                      | **Accessibility (a11y):** Оптимизация доступности (aria-labels, keyboard navigation, Audit pass)                       | +10           |
|                      | **Responsive:** Адаптация верстки под мобильные устройства (от 320px)                                                  | +5            |
| **Quality**          | **Unit Tests (Basic):** Покрытие тестами 20%+ вашего личного кода                                                      | +10           |
|                      | **Unit Tests (Full):** Покрытие тестами 50%+ вашего личного кода (доп. к предыдущему)                                  | +10           |
|                      | **E2E Tests:** Написание минимум 3 сценариев для ваших фич (Cypress/Playwright)                                        | +10           |
| **DevOps & Role**    | **Prompt Engineering:** Документирование 3+ итераций улучшения промптов                                                | +15           |
|                      | **Architect:** Документирование архитектурных решений (схемы, ADR)                                                     | +10           |
|                      | **Docker:** Контейнеризация проекта (фронт + бэк + БД)                                                                 | +10           |
|                      | **Auto-deploy:** Настройка автоматического деплоя (Vercel/Netlify/GH Actions)                                          | +5            |
| **Architecture**     | **State Manager:** Использование стейт-менеджера (Redux/Zustand/MobX)                                                  | +10           |
|                      | **Design Patterns:** Явное и обоснованное применение паттернов в коде                                                  | +10           |
|                      | **API Layer:** Выделение слоя работы с API (изоляция от UI компонентов)                                                | +10           |
| **Frameworks**       | **React:** Использование библиотеки React                                                                              | +5            |
|                      | **Angular:** Использование фреймворка Angular                                                                          | +10           |
|                      | **Vue:** Использование фреймворка Vue                                                                                  | +5            |
|                      | **Meta-Framework:** SSR/SSG/ISR через мета-фреймворк (Next.js, Nuxt, Analog)                                           | +10           |

> **Кросс-функциональные фичи** (Theme Switcher, i18n, Accessibility, Advanced Animations и т.п.). Баллы получает каждый участник, который может показать работающую интеграцию в своих компонентах и объяснить код. Автор i18n-системы получает +10. Участник, который добавил переводы в свои компоненты и может показать переключение — тоже получает +10. Аналогично с анимациями: если вы делали анимации в своих компонентах и можете их показать — получаете +10.

> **Правило подсчёта.** Строки с пометкой «за каждый» начисляются за каждый экземпляр (3 Complex Component = 75 баллов). Остальные строки — **один раз** на студента.

---

## Penalties

- **(-100%)** Проект не на TypeScript.
- **(-50%)** `strict: false` в `tsconfig.json`.
