# RS Angular Sprint: Development Diary

The diary is a **mandatory** artifact of this project.

In this project you are learning Angular from scratch (or deepening your knowledge). The diary is a way to capture your journey: which concepts you encountered, what was difficult, how you figured things out. Each sprint brings new topics (Components, Routing, Signals, Forms, HTTP, Testing), and the diary helps structure your learning.

The diary is a powerful way to reflect on what you are doing and briefly summarize your work. It is an opportunity for additional review, "digesting information", and reflection.

---

## Guidelines

1. **Individual format:** Each student maintains their own separate diary.
2. **Location:** All diaries are stored in the `development-notes` folder at the root of the repository.
3. **Folder structure:**

```
/development-notes
  /github-username-1
     github-username-1-sprint-1-2025-02-05.md
     github-username-1-sprint-1-2025-02-07.md
     ...
  /github-username-2
     github-username-2-sprint-1-2025-02-05.md
     ...
```

4. **File format:** Markdown. File name: `github-username-YYYY-MM-DD.md`
5. **Frequency:** At least **1 entry per week**. Sprint 1 (1 week) — 1 entry, Sprints 2–4 (2 weeks each) — 1 entry.
6. **Honesty (No Backdating):** An entry must be committed on **the same or the next day**.
7. **`main` branch:** Diary entries must be merged into the **`main`** branch before the review. The parser only checks `main`.
8. **Do not use Squash Merge for diaries.** Squashing overwrites the original commit dates. Use a regular Merge commit or Rebase.

- _Forbidden:_ Writing 10 entries on Sunday evening and committing them all at once. We check the Git history.

9. **"Hand made":** You may use AI during development. But write the diary yourself (only grammar fixes via AI are allowed).
10. **Screenshots, GIFs, links to PRs and Issues** are highly encouraged!
11. **Language:** Russian or English.
12. **Details of developing 2 personal Feature Components** — the diary must contain a description of developing **at least 2 components**: what problems arose, how you solved them, what you learned.

## Requirement: 2 Personal Feature Components

You may use AI during development. However, **at least 2 Feature Components** must be developed **personally by you**.

**What this means in practice:**

- The diary must contain a description of developing at least 2 components
- For each component: which Angular concepts you used (DI, CD, Forms, etc.), what problems arose, how you solved them

## Example Entry Structure

```markdown
# Sprint 2: Routing & Signals — 2025-03-10

- **What was done:** Set up routing with lazy loading. Created AuthService and AuthGuard. Migrated component state to signal().
- **Problems:** Did not understand how to connect signal() with OnPush. Spent 2 hours understanding the difference between computed() and effect().
- **Solutions:** Read the signals documentation. Drew a diagram of the component's reactive state.
- **What I learned:** signal() automatically triggers Change Detection in OnPush. computed() is for derived values, effect() is for side effects.
- **Plans:** In Sprint 3, build a form with validation and a custom directive.
- **Time spent:** 4 hours
```

---

## Plan B

If for any reason you did not keep the diary during one sprint, you must record a video. If you missed 2+ sprints — two videos.

**Video requirements:**

1. **Scope:** Choose one Feature Component that you implemented.
2. **Scenario:** Delete its code. Rewrite it from scratch in real time.
3. **Commentary:** Explain out loud: why this architecture, which DI/CD approach you chose, how Forms work, how you tested.
4. **Duration:** at least 10 minutes.

---

## Scoring Criteria for Development Diary (Max 50 points)

### Admission Threshold

The diary is a **mandatory condition** for admission to the [mentor interview](./SCORE_PERSONAL.md) after each sprint. No diary for a sprint → no admission to the interview → 0 points for that sprint.

| Requirement                                                                                      | Status    |
| ------------------------------------------------------------------------------------------------ | --------- |
| Development diary exists, is filled in regularly, entries are committed on time                  | must pass |
| **Development of at least 2 personal Feature Components is documented in the diary or on video** | must pass |

### Quality Criteria (0–50 points)

| Points | Level      | Description                                                                                                          |
| ------ | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| **10** | Formal     | Brief entries without details ("did X")                                                                              |
| **30** | Regular    | At least 1 entry/week, progress is visible, 2 components are described                                               |
| **40** | Detailed   | Problems and solutions are described, thought process on Angular concepts (DI, CD, Forms) is clear                   |
| **50** | Reflective | Deep reflection, comparison of approaches (OnPush vs Default, Reactive vs Template-driven), real learning is visible |
