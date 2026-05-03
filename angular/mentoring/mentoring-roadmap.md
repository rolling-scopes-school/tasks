# Mentoring Roadmap

This document describes the mentor's journey week by week — from selecting mentees to the final interview.

**Total duration:** ~11 weeks (1 week onboarding and team setup + 8 weeks team task + 1 week final interview).

---

## Week 1 — Finding Mentees & Onboarding

### 1.1 Selecting Mentees

Students submit applications in the Discord channel **#students-looking-for-mentor** ([open channel](https://discordapp.com/channels/788026364372320256/1163363732672483369)).

Each application follows a standard format:

```text
Name:
Location (Country/City):
Communication languages:
RS App profile link:
GitHub profile link:
Telegram profile link:
Intro Task link:
About me:
```

> **Prerequisite:** Only students who have completed the [Angular Intro Task](../tasks/angular-intro-task/README.md) are eligible to apply.

**What the mentor does:**

1. Browse the applications in Discord.
2. Reach out to candidates who look promising (via Discord or Telegram).
3. Conduct an introductory conversation with the student — assess motivation, background, and potential.
4. If the student meets your expectations, confirm the mentorship.

**Guidelines for choosing mentees:**

- The student should be self-motivated and have a desire to learn.
- Having a completed intro task is a baseline; look for evidence of effort and curiosity.
- You can mentor **2 to 6 students** — choose a number you can realistically support with **3–5 hours per week**.

### 1.2 Getting to Know Your Students

Once mentees are confirmed:

- **Create a shared communication channel** (Discord group, Telegram chat, etc.).
- **Schedule an introductory group call** — let students introduce themselves, share their backgrounds, and get comfortable with each other.
- **Set expectations:** explain the course structure, sprint cadence, and your availability.
- **Familiarize yourself** with the [rules of interaction between students and mentors](README.md#basic-rules-of-interaction-between-students-and-mentors).
- **Read** the [PR review process](pull-request-review-process.md) so you're ready for code reviews.

### 1.3 Helping Students Form a Team

The [team task](../tasks/angular-team-task/README.md) requires teams of **2–3 students**.

> **Recommendation:** It is best to form teams exclusively from your own mentees. This significantly reduces the mentor's workload — you already know every student's progress, and coordinating code reviews and sprint interviews becomes much simpler. See [TEAM_SETUP.md](../tasks/angular-team-task/TEAM_SETUP.md) for details.

**Mentor actions:**

1. Help students find teammates within your group.
2. Guide them through creating the team in [RS App → Team Distribution](https://app.rs.school/).
3. Explain how to choose a project (CryptoTrade / ShopFront / MusicFlow) — see [PROJECTS.md](../tasks/angular-team-task/PROJECTS.md).
4. Walk students through the task structure: sprints, checkpoints, diary, scoring.
5. Make sure every student understands:
   - The importance of the [development diary](../tasks/angular-team-task/DEVELOPMENT_DIARY.md) (mandatory for sprint interview admission).
   - The requirement to develop **at least 2 personal Feature Components**.
   - The [code standards](../tasks/angular-team-task/CODE_STANDARDS.md) and PR requirements.

---

## Weeks 2–8 — Team Task (4 Sprints + Presentation Prep)

### Sprint Schedule

| Sprint       | Duration | Topics                    | Checkpoint                                                                |
| ------------ | -------- | ------------------------- | ------------------------------------------------------------------------- |
| **Sprint 1** | 1 week   | Components                | [SPRINT1_CHECKPOINT.md](../tasks/angular-team-task/SPRINT1_CHECKPOINT.md) |
| **Sprint 2** | 2 weeks  | Routing & Signals         | [SPRINT2_CHECKPOINT.md](../tasks/angular-team-task/SPRINT2_CHECKPOINT.md) |
| **Sprint 3** | 2 weeks  | Directives, Pipes & Forms | [SPRINT3_CHECKPOINT.md](../tasks/angular-team-task/SPRINT3_CHECKPOINT.md) |
| **Sprint 4** | 2 weeks  | HTTP, RxJS & Testing      | [SPRINT4_CHECKPOINT.md](../tasks/angular-team-task/SPRINT4_CHECKPOINT.md) |
| **Prep**     | 1 week   | Presentation preparation  | [PRESENTATION.md](../tasks/angular-team-task/PRESENTATION.md)             |

### Weekly Code Review

Each week the mentor must:

1. **Review open Pull Requests** of your students before your weekly meeting. Follow the [PR review process](pull-request-review-process.md):
   - Check PR format (description, screenshots, deployment URL, self-check).
   - Clone the repo, build, and run the project.
   - Verify linting and tests pass.
   - Leave at least **3 meaningful comments** per PR — code quality, architecture, Angular best practices.
2. **Conduct a weekly meeting** (60–90 min, all students or 1-on-1):
   - Discuss sprint topics and Angular concepts.
   - Go over code review results and common mistakes.
   - Answer questions, share tips on resume prep, Scrum, patterns, etc.
3. **Enter scores** into RS APP after reviewing the work.

> **Deadlines for mentors:** Review student work within **1-3 days** of submission. The sooner the better.

### Sprint Interviews (1 per Sprint = 4 Total)

After each sprint deadline, the mentor conducts an interview with **one randomly assigned team** (the pair is formed in RS APP — this may not be your own team).

**How it works:**

1. After the sprint deadline, a **team ↔ random mentor** pair is formed.
2. The team contacts the mentor and schedules a call.
3. On the call, the mentor **speaks with each student individually** (~15–20 min per person).
4. The mentor evaluates:
   - **Angular knowledge** — questions on the current sprint's topics.
   - **Personal contribution** — what the student implemented, whether they can explain their own code.
5. The mentor submits a score for each student in RS APP.

> **Important:** The call must take place **within 5 days** of the sprint deadline. If the team does not contact the mentor — the student receives **0** for that sprint.

**Student eligibility:** Before the interview, the student must have:

- Entries in the [development diary](../tasks/angular-team-task/DEVELOPMENT_DIARY.md) for the current sprint.
- Personally written code merged into `main`.

**Points by sprint:**

| Sprint       | Max Points | Topic                     |
| ------------ | ---------- | ------------------------- |
| **Sprint 1** | 50         | Components                |
| **Sprint 2** | 75         | Routing & Signals         |
| **Sprint 3** | 125        | Directives, Pipes & Forms |
| **Sprint 4** | 150        | HTTP, RxJS & Testing      |
| **Total**    | **400**    |                           |

**Scoring guidelines:**

| Level         | ~% of Max | Indicators                                                                    |
| ------------- | --------- | ----------------------------------------------------------------------------- |
| **Weak**      | ~20%      | Cannot explain code. Does not understand basic sprint concepts.               |
| **Basic**     | ~50%      | Understands core concepts at a basic level. Struggles with details.           |
| **Good**      | ~80%      | Confidently explains code and Angular concepts. Understands "why".            |
| **Excellent** | ~100%     | Deep understanding: trade-offs, approach comparisons, nuances (CD, DI, RxJS). |

For detailed topic lists and example questions see [SCORE_PERSONAL.md](../tasks/angular-team-task/SCORE_PERSONAL.md).

---

## Week 9+ — Final Interview & Feedback

### Final Interview

At the end of the course, the mentor conducts the **final Angular interview**.

- **Pairs are formed randomly** in the RS School application — you will interview a student who is **not necessarily your own mentee**.
- The interview covers **all Angular topics** from the course: Components, Routing, Signals, Directives, Pipes, Forms, DI, Change Detection, HTTP, RxJS, Testing.
- Duration: ~40–60 minutes per student.

### Leaving Feedback

After the final interview, the mentor **must leave written feedback** on the student:

- Strengths and areas for improvement.
- Level of Angular knowledge demonstrated.
- Recommendations for further learning.

The feedback is submitted through RS APP and is visible to the student.

---

## Summary Checklist

| When                   | Mentor Action                                                    |
| ---------------------- | ---------------------------------------------------------------- |
| **Week 1**             | Find mentees from Discord applications                           |
| **Week 1**             | Conduct intro calls, confirm mentorship                          |
| **Week 1**             | Introduce students to each other, create group chat              |
| **Week 1**             | Help students form teams (preferably from your own mentees)      |
| **Week 1**             | Explain task structure, diary, code standards                    |
| **Every week (W2–W8)** | Review student PRs (≥3 comments per PR)                          |
| **Every week (W2–W8)** | Conduct weekly meeting (60–90 min)                               |
| **After each sprint**  | Conduct sprint interview with 1 random team (~15–20 min/student) |
| **After each sprint**  | Submit personal scores in RS APP                                 |
| **End of course**      | Conduct final interview (random student pair)                    |
| **End of course**      | Leave written feedback on the interviewed student                |
