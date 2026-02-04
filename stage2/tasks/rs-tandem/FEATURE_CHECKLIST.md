# Feature Checklist (300 pts ceiling)

> **Для кого:** Жюри (быстрая оценка)  
> **Подробный справочник:** [temp/feature_catalog.md](./temp/feature_catalog.md)

---

## Как использовать

1. Отметьте галочкой фичи, которые присутствуют в проекте
2. Суммируйте баллы по категориям
3. **Ceiling: 300 баллов** (даже если сумма больше)

> **Важно:** Это "меню выбора", а не обязательный список. Выбирайте фичи, релевантные вашему проекту. Общая сумма может превысить 300, но в зачёт идёт максимум 300 баллов. Это даёт гибкость в выборе.

---

## Testing & Quality (макс. 40 pts)

| | Фича | Баллы |
|---|------|-------|
| [ ] | Unit Tests (20%+ coverage) | 10 |
| [ ] | Unit Tests (50%+ coverage) | +10 |
| [ ] | E2E Tests (основные сценарии) | 15 |
| [ ] | CI integration (тесты в pipeline) | 5 |

---

## Accessibility & UX (макс. 35 pts)

| | Фича | Баллы |
|---|------|-------|
| [ ] | Responsive Design (mobile/tablet/desktop) | 5 |
| [ ] | Theme Switcher (dark/light) | 10 |
| [ ] | i18n (2+ языка) | 10 |
| [ ] | A11y (WCAG AA, keyboard nav) | 10 |

---

## Backend & Data (макс. 75 pts)

| | Фича | Баллы |
|---|------|-------|
| [ ] | Firebase/Supabase Auth | 15 |
| [ ] | Firebase/Supabase Database | 15 |
| [ ] | Custom Node.js Backend | 30 |
| [ ] | WebSockets / Real-time sync | 15 |

> **Примечание:** Custom Backend и Firebase/Supabase могут комбинироваться.

---

## Performance (макс. 25 pts)

| | Фича | Баллы |
|---|------|-------|
| [ ] | Lazy Loading (routes/components) | 5 |
| [ ] | Virtualization (длинные списки) | 10 |
| [ ] | PWA / Service Worker | 10 |

---

## Advanced Features: AI (макс. 85 pts)

| | Фича | Баллы |
|---|------|-------|
| [ ] | AI Chat (basic request/response) | 15 |
| [ ] | AI Streaming (посимвольный вывод) | +15 |
| [ ] | AI RAG (embeddings + vector search) | +25 |
| [ ] | Local LLM (Ollama, WebLLM) | +15 |
| [ ] | Function Calling / Tool Use | +15 |

---

## Advanced Features: Game (макс. 70 pts)

| | Фича | Баллы |
|---|------|-------|
| [ ] | Canvas 2D Game | 15 |
| [ ] | Phaser / PixiJS (2D engine) | +10 |
| [ ] | WebGL / Three.js (3D) | 25 |
| [ ] | Game Physics (matter.js, cannon.js) | +10 |
| [ ] | Leaderboard | 5 |
| [ ] | Sound/Music (Web Audio API) | 5 |

---

## Advanced Features: Other (макс. 60 pts)

| | Фича | Баллы |
|---|------|-------|
| [ ] | Drag & Drop | 15 |
| [ ] | Code Editor (Monaco/CodeMirror) | 20 |
| [ ] | Rich Text Editor | 15 |
| [ ] | Animations (микро-взаимодействия) | 10 |

---

## DevOps & Tooling (макс. 25 pts)

| | Фича | Баллы |
|---|------|-------|
| [ ] | Auto-deploy (Vercel/Netlify/GH Pages) | 5 |
| [ ] | CI/CD Pipeline (lint + tests на PR) | 10 |
| [ ] | Error Monitoring (Sentry) | 10 |

---

## Extra Features (макс. 50 pts)

| | Фича | Баллы |
|---|------|-------|
| [ ] | Gamification (Streaks, XP, Badges) | 15 |
| [ ] | Charts/Analytics (Chart.js, D3) | 10 |
| [ ] | Search (full-text, фильтры) | 10 |
| [ ] | Notifications (toast system) | 5 |
| [ ] | File Upload (drag & drop, preview) | 10 |
| [ ] | Data Export (PDF, CSV) | 10 |
| [ ] | Multi-step Forms / Wizard | 10 |
| [ ] | Voice Interface | 15 |

---

## Architecture & Patterns (макс. 40 pts)

| | Фича | Баллы |
|---|------|-------|
| [ ] | State Management (Redux/MobX/Zustand) | 15 |
| [ ] | Design Patterns (явное использование) | 10 |
| [ ] | Component Architecture (atomic design) | 10 |
| [ ] | API Layer (абстракция работы с API) | 10 |

> **Примечание:** Эти навыки не входят в обязательную программу курса, но ценятся в реальных проектах.

---

## Frameworks Bonus (макс. 20 pts)

| | Фича | Баллы |
|---|------|-------|
| [ ] | React | 10 |
| [ ] | Angular | 15 |
| [ ] | Vue | 10 |
| [ ] | SSR Framework (Next.js / Nuxt / Analog) | +10 |

> **Примечание:** Фреймворки НЕ входят в обязательную программу курса. Их использование — дополнительное обучение и бонусные баллы.

---

## Scoring Sheet

```
┌─────────────────────────────────────────────────────────┐
│ Студент: _______________    Команда: _______________    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ Testing & Quality:        _____ / 40                    │
│ Accessibility & UX:       _____ / 35                    │
│ Backend & Data:           _____ / 75                    │
│ Performance:              _____ / 25                    │
│ Advanced: AI:             _____ / 85                    │
│ Advanced: Game:           _____ / 70                    │
│ Advanced: Other:          _____ / 60                    │
│ DevOps & Tooling:         _____ / 25                    │
│ Extra Features:           _____ / 50                    │
│ Architecture & Patterns:  _____ / 40                    │
│ Frameworks Bonus:         _____ / 20                    │
│                           ─────────                     │
│ СУММА:                    _____ / 525                   │
│                                                         │
│ ИТОГО Feature Checklist:  _____ / 300 (ceiling)         │
│                                                         │
│ Комментарий жюри:                                       │
│ ________________________________________________        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

> **Важно:** Даже если сумма > 300, итоговый балл Feature Checklist ограничен 300 баллами. Это даёт студентам гибкость в выборе фич.

---

## Примеры

**Проект A: Quiz App с полировкой**
- [x] Responsive — 5
- [x] Theme Switcher — 10
- [x] i18n — 10
- [x] Unit Tests 50%+ — 20
- [x] CI integration — 5
- [x] Auto-deploy — 5
- **Итого: 55 pts**

**Проект B: AI Tutor с Firebase**
- [x] Firebase Auth — 15
- [x] Firebase DB — 15
- [x] AI Chat — 15
- [x] AI Streaming — 15
- [x] Auto-deploy — 5
- **Итого: 65 pts**

**Проект C: Full-stack AI App**
- [x] Custom Backend — 30
- [x] AI Chat + Streaming + RAG — 55
- [x] Unit Tests 50%+ — 20
- [x] Theme + i18n + A11y — 30
- [x] CI/CD — 10
- **Итого: 145 pts**

---

*Версия: 5.0 (ceiling 300)*  
*Связан с: [feature_catalog.md](./temp/feature_catalog.md) (подробный справочник)*
