# Scoring & Plan: Custom Backend + Judge0

Расчёт баллов и план работ для команды из 4 человек (3 студента + ментор).

> **Архитектура и навигация**: [README.md](./README.md)
> **Справочник по категориям фич**: [PERSONAL_SCORE.md](../../../PERSONAL_SCORE.md)

---

## Команда (4 человека)

| Студент    | Роль             | Компоненты                                                              |
| ---------- | ---------------- | ----------------------------------------------------------------------- |
| **Nika**   | Editor-Dev       | Task Viewer, Code Editor (Monaco), Submissions, Hint UI                 |
| **Oscar**  | Dashboard-Dev    | Dashboard, Progress Matrix, Rubrics Display, History Page               |
| **Paula**  | Judge-Dev        | Judge Client, Feedback UI, Score Display, Answer Comparison             |
| **Mentor** | Backend (Mentor) | Express API, Judge0 интеграция, AI Judge endpoint, DB, Generator Script |

---

## Командные баллы (одинаковые для всех)

| Score               | Баллы   | Комментарий                   |
| ------------------- | ------- | ----------------------------- |
| Tandem: Code        | 100     | TS strict, ESLint, Prettier   |
| Tandem: Teamwork    | 280     | Board + Issues + PRs + Deploy |
| **Итого командные** | **380** |                               |

---

## Личные баллы: Nika (Editor-Dev)

| Категория             | Фича                                     | Баллы   |
| --------------------- | ---------------------------------------- | ------- |
| My Components         | Complex Component (Code Editor + Monaco) | +25     |
| My Components         | Rich UI Screen (Task Viewer)             | +20     |
| My Components         | Rich UI Screen (Topic Selector + Hints)  | +20     |
| UI & Interaction      | Code Editor (Monaco)                     | +15     |
| Architecture          | API Layer                                | +10     |
| Architecture          | State Manager                            | +10     |
| Quality               | Unit Tests 20%+                          | +10     |
| DevOps & Role         | Auto-deploy                              | +5      |
| **Personal Features** |                                          | **115** |
| Development Diary     | Детальный                                | 80      |
| Mentor Review         | Good (40+40+40)                          | 120     |
| **Итого Personal**    |                                          | **315** |

## Личные баллы: Oscar (Dashboard-Dev)

| Категория             | Фича                             | Баллы   |
| --------------------- | -------------------------------- | ------- |
| My Components         | Rich UI Screen (Dashboard)       | +20     |
| My Components         | Rich UI Screen (Progress Matrix) | +20     |
| My Components         | Rich UI Screen (History Page)    | +20     |
| UI & Interaction      | Advanced Animations              | +10     |
| UI & Interaction      | Theme Switcher                   | +10     |
| Architecture          | State Manager                    | +10     |
| Architecture          | Design Patterns                  | +10     |
| Quality               | Unit Tests 20%+                  | +10     |
| **Personal Features** |                                  | **110** |
| Development Diary     | Детальный                        | 80      |
| Mentor Review         | Good (40+40+40)                  | 120     |
| **Итого Personal**    |                                  | **310** |

## Личные баллы: Paula (Judge-Dev)

| Категория             | Фича                               | Баллы   |
| --------------------- | ---------------------------------- | ------- |
| My Components         | Complex Component (Judge Client)   | +25     |
| My Components         | Rich UI Screen (Feedback Panel)    | +20     |
| My Components         | Rich UI Screen (Answer Comparison) | +20     |
| AI                    | AI Chat UI (Judge UI)              | +20     |
| Architecture          | API Layer                          | +10     |
| Architecture          | Design Patterns                    | +10     |
| Quality               | Unit Tests 20%+                    | +10     |
| **Personal Features** |                                    | **115** |
| Development Diary     | Детальный                          | 80      |
| Mentor Review         | Good (40+40+40)                    | 120     |
| **Итого Personal**    |                                    | **315** |

## Личные баллы: Mentor (Backend — Mentor)

| Категория             | Фича                                           | Баллы   |
| --------------------- | ---------------------------------------------- | ------- |
| My Components         | Complex Backend Service (Express API + Judge0) | +30     |
| My Components         | Rich UI Screen (Generator Script)              | +20     |
| Backend & Data        | Custom Backend (Node.js + PostgreSQL)          | +30     |
| Backend & Data        | Custom Auth (JWT + bcrypt + middleware)        | +20     |
| Backend & Data        | Backend Framework (Express)                    | +10     |
| Backend & Data        | API Documentation (Swagger)                    | +5      |
| AI                    | AI Chat UI (Judge endpoint)                    | +20     |
| AI                    | Raw LLM API (Groq)                             | +10     |
| DevOps & Role         | Docker                                         | +10     |
| DevOps & Role         | Auto-deploy                                    | +5      |
| Architecture          | API Layer                                      | +10     |
| Architecture          | Design Patterns                                | +10     |
| Quality               | Unit Tests 20%+                                | +10     |
| **Personal Features** |                                                | **190** |
| Development Diary     | Детальный                                      | 80      |
| Mentor Review         | Good (40+40+40)                                | 120     |
| **Итого Personal**    |                                                | **390** |

---

## Итоговая таблица

| Студент           | Code | Teamwork | Personal | **Итого** |
| ----------------- | ---- | -------- | -------- | --------- |
| Nika (Editor-Dev) | 100  | 280      | 315      | **695**   |
| Oscar (Dashboard) | 100  | 280      | 310      | **690**   |
| Paula (Judge-Dev) | 100  | 280      | 315      | **695**   |
| Mentor (Backend)  | 100  | 280      | 390      | **770**   |

> **Mentor получает больше баллов** за счёт Custom Backend +30, Custom Auth +20, Backend Framework +10, Docker +10, API Documentation +5. Это компенсирует более высокую сложность и ответственность роли бэкендера.

---

## План работ (6 недель)

### Sprint 1 (Недели 1-2): Theory-Only Loop

**Цель:** рабочий core loop без AI и без Code Runner.

| Что делаем                                         | Кто        |
| -------------------------------------------------- | ---------- |
| Роутинг + Layout (Landing, Login, Dashboard, Task) | **Nika**   |
| Mock API Layer (все сервисы с `USE_MOCK=true`)     | **Все**    |
| Task Viewer + TheoryInput (textarea)               | **Nika**   |
| Dashboard + Stats (моковые данные)                 | **Oscar**  |
| Judge Level 0 (keyword matching)                   | **Paula**  |
| Feedback UI (score + covered/missed)               | **Paula**  |
| Express Server скелет + DB schema                  | **Mentor** |
| Seed: 10 задач по 2 темам (JSON)                   | **Mentor** |

**Что пропускаем:** Code Editor, Code Runner, real LLM, History, Progress Matrix, Profile.

### Sprint 2 (Недели 3-4): Real AI + Progress

| Что делаем                                   | Кто        |
| -------------------------------------------- | ---------- |
| AI Judge Level 1 (Groq API)                  | **Mentor** |
| Structured Feedback UI (рубрики, comparison) | **Paula**  |
| Progress Matrix                              | **Oscar**  |
| History Page                                 | **Oscar**  |
| Hint System (уровневые подсказки)            | **Nika**   |
| Topic Selector с прогрессом                  | **Nika**   |

### Sprint 3 (Недели 5-6): Code Runner + Polish

| Что делаем                         | Кто        |
| ---------------------------------- | ---------- |
| Monaco Editor интеграция           | **Nika**   |
| Judge0 Code Runner                 | **Mentor** |
| Test Results UI                    | **Paula**  |
| AI Error Hint (stderr → подсказка) | **Paula**  |
| Stats Charts (графики)             | **Oscar**  |
| Deploy (Vercel + Render)           | **Все**    |

---

## Cut Scope Strategy

### Must Have

- Auth (Login/Register)
- Task Viewer + TheoryInput
- AI Judge Level 0 (keyword matching)
- Feedback UI (score + covered/missed)
- Dashboard (базовый)
- Mock API Layer
- Express Server + DB schema
- Deployment

### Should Have

- AI Judge Level 1 (real LLM)
- Progress Matrix
- History Page
- Hint System
- Topic Selector

### Could Have

- Monaco Editor + Code Runner
- AI Error Hint
- Stats Charts
- Theme Switcher
- Profile Page

### Won't Have (откладываем)

- AI Judge Level 2 (advanced)
- Spaced Repetition
- Leaderboard
- PWA / Offline mode
