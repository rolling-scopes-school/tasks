# Scoring & Plan: Supabase + WebContainer

Расчёт баллов и план работ для команды из 4 человек (3 студента + ментор).

> **Архитектура и навигация**: [README.md](./README.md)
> **Справочник по категориям фич**: [PERSONAL_SCORE.md](../../../PERSONAL_SCORE.md)

---

## Команда (4 человека)

| Студент    | Роль             | Компоненты                                                  |
| ---------- | ---------------- | ----------------------------------------------------------- |
| **Nika**   | Editor-Dev       | Task Viewer, Code Editor (CodeMirror), Submissions, Hint UI |
| **Oscar**  | Dashboard-Dev    | Dashboard, Progress Matrix, Rubrics Display, History Page   |
| **Paula**  | Judge-Dev        | Judge Client, Feedback UI, Score Display, Answer Comparison |
| **Mentor** | Backend (Mentor) | Supabase setup, Edge Functions, AI Judge, Generator Script  |

---

## Командные баллы (одинаковые для всех)

| Score               | Баллы   | Комментарий                   |
| ------------------- | ------- | ----------------------------- |
| Tandem: Code        | 100     | TS strict, ESLint, Prettier   |
| Tandem: Teamwork    | 280     | Board + Issues + PRs + Deploy |
| **Итого командные** | **380** |                               |

---

## Личные баллы: Nika (Editor-Dev)

| Категория             | Фича                                         | Баллы   |
| --------------------- | -------------------------------------------- | ------- |
| My Components         | Complex Component (Code Editor + CodeMirror) | +25     |
| My Components         | Complex Component (WebContainer Runner)      | +25     |
| My Components         | Rich UI Screen (Task Viewer)                 | +20     |
| UI & Interaction      | Code Editor (CodeMirror)                     | +15     |
| Architecture          | API Layer                                    | +10     |
| Architecture          | State Manager                                | +10     |
| Quality               | Unit Tests 20%+                              | +10     |
| DevOps & Role         | Auto-deploy                                  | +5      |
| **Personal Features** |                                              | **120** |
| Development Diary     | Детальный                                    | 80      |
| Mentor Review         | Good (40+40+40)                              | 120     |
| **Итого Personal**    |                                              | **320** |

> **WebContainer Runner** — уникальная фича Варианта B. Nika реализует Code Runner на клиенте (вместо Mentor на сервере).

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

| Категория             | Фича                                          | Баллы   |
| --------------------- | --------------------------------------------- | ------- |
| My Components         | Complex Backend Service (Edge Functions + AI) | +30     |
| My Components         | Rich UI Screen (Generator Script)             | +20     |
| Backend & Data        | BaaS Auth (Supabase Auth)                     | +15     |
| Backend & Data        | BaaS CRUD (Supabase)                          | +15     |
| AI                    | AI Chat UI (Judge endpoint)                   | +20     |
| AI                    | Raw LLM API (Groq)                            | +10     |
| DevOps & Role         | Prompt Engineering                            | +15     |
| DevOps & Role         | Auto-deploy                                   | +5      |
| Architecture          | API Layer                                     | +10     |
| Architecture          | Design Patterns                               | +10     |
| Quality               | Unit Tests 20%+                               | +10     |
| **Personal Features** |                                               | **160** |
| Development Diary     | Детальный                                     | 80      |
| Mentor Review         | Good (40+40+40)                               | 120     |
| **Итого Personal**    |                                               | **360** |

> **Mentor фокусируется на AI и контенте.** Вместо Custom Backend и Docker, Mentor получает баллы за BaaS, Prompt Engineering и Edge Functions. Меньше DevOps — больше продуктовой работы.

---

## Итоговая таблица

| Студент           | Code | Teamwork | Personal | **Итого** |
| ----------------- | ---- | -------- | -------- | --------- |
| Nika (Editor-Dev) | 100  | 280      | 320      | **700**   |
| Oscar (Dashboard) | 100  | 280      | 310      | **690**   |
| Paula (Judge-Dev) | 100  | 280      | 315      | **695**   |
| Mentor (Backend)  | 100  | 280      | 360      | **740**   |

> **Mentor в Варианте B получает ~30 Personal Features меньше**, чем в Варианте A (160 vs 190). Это из-за отсутствия Custom Backend +30, Custom Auth +20, Backend Framework +10, Docker +10 — частично компенсированных BaaS Auth +15, BaaS CRUD +15 и Prompt Engineering +15.

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
| Judge Level 0 (keyword matching на клиенте)        | **Paula**  |
| Feedback UI (score + covered/missed)               | **Paula**  |
| Supabase проект + Auth (Google/GitHub)             | **Mentor** |
| DB schema + seed data (10 задач, 2 темы)           | **Mentor** |

**Что пропускаем:** Code Editor, WebContainer, real LLM, History, Progress Matrix, Profile.

### Sprint 2 (Недели 3-4): Real AI + Progress

| Что делаем                                   | Кто        |
| -------------------------------------------- | ---------- |
| Edge Function: judge (Groq API)              | **Mentor** |
| Structured Feedback UI (рубрики, comparison) | **Paula**  |
| Progress Matrix                              | **Oscar**  |
| History Page                                 | **Oscar**  |
| Hint System (уровневые подсказки)            | **Nika**   |
| Topic Selector с прогрессом                  | **Nika**   |
| RPC-функции (dashboard stats)                | **Mentor** |

### Sprint 3 (Недели 5-6): Code Runner + Polish

| Что делаем                       | Кто        |
| -------------------------------- | ---------- |
| CodeMirror интеграция            | **Nika**   |
| WebContainer Runner              | **Nika**   |
| Test Results UI                  | **Paula**  |
| AI Error Hint (Edge Function)    | **Mentor** |
| Stats Charts (графики)           | **Oscar**  |
| Deploy (Vercel + Supabase Cloud) | **Все**    |

---

## Cut Scope Strategy

### Must Have

- Supabase Auth (Google/GitHub)
- Task Viewer + TheoryInput
- AI Judge Level 0 (keyword matching)
- Feedback UI (score + covered/missed)
- Dashboard (базовый)
- Mock API Layer
- DB schema + RLS
- Deployment

### Should Have

- Edge Function: judge (real LLM)
- Progress Matrix
- History Page
- Hint System
- Topic Selector
- RPC-функции

### Could Have

- CodeMirror + WebContainer Runner
- AI Error Hint
- Stats Charts
- Theme Switcher
- Profile Page

### Won't Have (откладываем)

- AI Judge Level 2 (advanced)
- Spaced Repetition
- Leaderboard
- PWA / Offline mode
