# Personal Score (400 points)

Individual score for each student. Points are awarded **incrementally after each sprint** through a mentor interview.

## How It Works

1. After each sprint deadline, a **pair is formed: team ↔ random mentor**.
2. The team contacts the mentor and schedules a call.
3. During the call the mentor **talks to each student individually** (~15–20 min per person).
4. The mentor evaluates two aspects:
   - **Angular knowledge** — questions on the current sprint's topics.
   - **Personal contribution** — what the student implemented, whether they can explain their code.
5. After the call the mentor assigns a score to each student in RS APP.

> **Important:** the call must take place **within 5 days** after the sprint deadline. If the team does not contact the mentor — 0 for that sprint.

---

## Points by Sprint

| Sprint       | Max Points | Sprint Topic              | What the Mentor Asks About                                                      |
| ------------ | ---------- | ------------------------- | ------------------------------------------------------------------------------- |
| **Sprint 1** | 50         | Components                | Standalone components, `input()`/`output()`, lifecycle hooks, project structure |
| **Sprint 2** | 75         | Routing & Signals         | Routes, lazy loading, guards, `signal()`, `computed()`, `effect()`, DI basics   |
| **Sprint 3** | 125        | Directives, Pipes & Forms | Directives, pipes, Reactive Forms, validation, `InjectionToken`, OnPush         |
| **Sprint 4** | 150        | HTTP, RxJS & Testing      | `HttpClient`, interceptors, RxJS operators, `TestBed`, mocking, test coverage   |
| **Total**    | **400**    |                           |                                                                                 |

---

## Scoring Criteria (each sprint)

The mentor assigns **any number of points** from 0 to the sprint maximum. The levels below are guidelines, not strict categories.

| Level         | ~% of Max | Indicators                                                                                                        |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| **Weak**      | ~20%      | Cannot explain their code. Does not understand basic sprint concepts. Contribution to the project is unclear.     |
| **Basic**     | ~50%      | Understands core concepts at a basic level. Answers direct questions but struggles with details.                  |
| **Good**      | ~80%      | Confidently explains their code and Angular concepts. Understands "why", not just "how".                          |
| **Excellent** | ~100%     | Deep understanding: explains trade-offs, compares approaches, knows nuances (CD tree, DI hierarchy, RxJS marble). |

**Example:** Sprint 3 (max 125) → the mentor considers the student slightly above Basic → assigns **70 points**.

---

## What the Mentor Checks

The mentor may ask about **the project** (personal contribution, explaining your code) as well as **any Angular question** related to the current sprint's topic.

Detailed topic lists and example questions can be found in the sprint files:

| Sprint       | Points | Details                                                        |
| ------------ | ------ | -------------------------------------------------------------- |
| **Sprint 1** | 50     | [SPRINT1_CHECKPOINT.md](./SPRINT1_CHECKPOINT.md#what-to-study) |
| **Sprint 2** | 75     | [SPRINT2_CHECKPOINT.md](./SPRINT2_CHECKPOINT.md#what-to-study) |
| **Sprint 3** | 125    | [SPRINT3_CHECKPOINT.md](./SPRINT3_CHECKPOINT.md#what-to-study) |
| **Sprint 4** | 150    | [SPRINT4_CHECKPOINT.md](./SPRINT4_CHECKPOINT.md#what-to-study) |

---

## Admission Requirements

To participate in the mentor interview, a student must:

- Have entries in the [development diary](./DEVELOPMENT_DIARY.md) for the current sprint
- Have personally written code merged into `main`

> The diary is not scored separately here, but it is a **mandatory condition** for interview admission.

---

## FAQ

_Q:_ What if the mentor does not respond?
_A:_ Contact the course coordinator — another mentor will be assigned.

_Q:_ Can I retake the interview?
_A:_ No. One attempt per sprint.

_Q:_ Does the mentor evaluate the team or each student individually?
_A:_ Each student individually. Everyone gets their own score.

---

## Penalties

- **(-1000000000000000000%)** Angular is not used.
- **(-50%)** `strict: false` in `tsconfig.json`.
