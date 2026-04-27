# RS Angular: Development Diary

The diary is a **mandatory** artefact of this course.

> "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
> — Aristotle

This course gives you a lot of freedom in *what* to do and *how*. To make sense of your individual progress, we ask you to keep a development diary. In real-world projects you might encounter this as a formal Architecture Design Log; in our case it'll be something simpler and less formal.

A diary is a powerful way to think *again* about what you're doing — to put the essence of your work into words, even if only for an MD file :) It's another chance to revisit, "digest", and reflect.

In your development diary I ask you to record your progress, problems you ran into, decisions you made, and anything else you find worth noting. You can emulate a "stand-up" ceremony from Scrum (What did you do yesterday/today? Problems? Blockers?).

Beyond that, the diary will help you prepare for the final presentation and answer standard interview questions like "Tell me about three hard problems you solved."

---

## The diary is a tool for progress, not a report

It might seem at first that the diary is yet another artefact you have to "submit": write → check the box → get the points. It's not.

The diary is a **mirror**. A mirror of your thinking and your progress on the course. You write honestly — what you tried, where you got stuck, what you understood — and all of us (you, your mentor, the coordinator, Tandi) get a shared picture of where you actually are right now.

This sets up a loop that teaches by itself:

1. **You write.** In the act of writing, you formulate for the first time what you actually understood (and what only seemed clear).
2. **Mentor / coordinator / Tandi read.** They see which rung you're standing on. Not "does it look pretty", but "where's the real pain, where's the real growth".
3. **If there's a gap with reality** — say, the diary says "all figured out", but at the defence it turns out you weren't — that's not a punishment, it's a **signal**. Something was left unsaid. We come back, we work through it.

That's why **the most valuable entries are the most honest, not the most polished**.

"Got stuck on routing today, didn't get why `provideRouter` instead of `RouterModule`, googled for an hour, still not sure" — that's a strong entry. It shows where you are. Something to work with.

"Today I learned routing" — useless. It tells neither you nor the mentor anything.

---

## Where to keep the diary

In RS Angular every student gets their own **private repository**, which you create through RS APP. That repository is where you'll keep the diary throughout the course.

### How to create the repository

1. Open the course dashboard: **[app.rs.school/course/student/dashboard?course=angular-2026q2](https://app.rs.school/course/student/dashboard?course=angular-2026q2)** _(RS APP registration required)_.
2. Click **"Create Repository"**.
3. RS APP will create a private repository on GitHub for you and grant the coordinator and mentors read access.

After that, clone it locally and work with it like a regular GitHub repo.

> If the "Create Repository" button doesn't appear or the repository isn't created — message in Discord (the operational channel). Don't lose a week on this.

---

## Rules

1. **Personal format:** every student keeps their own diary in their own private repo.
2. **Location:** all diary entries live in the `diary/` folder at the root of the repository.
3. **Structure:**

```
/diary
   2026-04-28.md
   2026-04-30.md
   2026-05-03.md
   ...
```

4. **File format:** Markdown. Filename: **`YYYY-MM-DD.md`** (e.g. `2026-04-28.md`).
   - Also allowed: `DD-MM-YYYY`, `YY-MM-DD` with `-` or `.` separators.
   - **A file without a date in its name doesn't count** (`reflection.md`, `notes.md` — no).
5. **Frequency:** at least **2 entries per week**.
6. **Honesty (No Backdating):** an entry must be committed on the same day or the next.
7. **The `main` branch:** diary entries must be merged into **`main`** by the time of the check. The parser only looks at `main` — entries on feature branches are ignored. If you have branch protection set up, open a PR with the entry and merge it — that takes 30 seconds.
8. **Don't use Squash Merge for diaries.** Squash erases the original commit dates, and we need real Git history to verify regularity. Recommended flow: branch → commit entries on the right days → PR → merge with a regular **Merge commit** or **Rebase**. If your team uses squash for code — fine, just make an exception when merging diary files.

   - _Forbidden:_ writing 10 entries on Sunday evening and committing them in a batch. We check Git history.
   - If you don't have time to write a full entry on the day, commit the bullet points and flesh out the rest later in the week.

9. **Calendar reminder:** add a reminder to your calendar to spend 15 minutes on the diary.
10. **"Hand made":** for the project itself you can use AI. But the diary you must write **yourself** (only grammatical fixes via AI are allowed).
11. **Screenshots, gifs, links to PRs and Issues** in the diary are very welcome.
12. **Diary language:** Russian or English.
13. **Notes on learning Angular's core parts.**
    For the project itself you can use AI. But the **diary should show how you personally learned the key parts of the framework** — components and templates, signals / state, forms, routing, HTTP, testing, and so on. Not a re-telling of the docs — your own experience: how you understood it, what didn't work, what clicked.

**What this means in practice:**

- Pick 4–6 key topics for the course (agree with your coordinator / mentor which ones make sense for your project).
- For each topic — at least one detailed entry: how you ran into it, what was unclear, when it clicked, what questions remain.
- Doesn't have to be in one day — across a week or two, with returns to the topic when understanding deepens.
- Describe your experience **in your own words** — re-telling official tutorials doesn't count. We need concrete traces from your own work: your code, your bug, your "aha".

---

## Example entry structure

```markdown
# Date: 2026-04-28

- **What I did:** ...
- **Problems:** ...
- **Solutions (or attempts):** ...
- **Thoughts / plans:** what's next?
- **Time spent:** 3 hours
```

---

## Example (personal, not Angular)

I don't yet have a real example diary from an Angular project. Happy to add yours here later.

For now, here's an example I kept while working on a personal project with my son — a Roblox game. The topic is different, but the patterns are the same: what I worked on, where I hit a wall, what I tried, what I understood.

#### Date: 2025-01-25

Sat down with Gleb to try making a Roblox game using Cursor. Started with zero understanding of how that's even done.

Asked ChatGPT to do a deep research on the topic. Picked a project name — "Gladiator", whatever that was going to mean (probably very little to do with actual ancient Roman gladiators).

Installed Roblox Studio. Installed Cursor AI. Read up on how to set up agent collaboration. Installed and configured the ROJO plugin (Roblox Studio is a graphical environment, but the report made it clear that big game studios write code separately and store it in Git).

Gleb spent a long time figuring out the Cursor interface, and especially why ROJO was needed. ROJO lets you write in code what would otherwise be done by hand in the Roblox Studio UI.

The first thing we decided to program was an Intro Cut Scene (animated particles eventually forming the word "Gladiator"). Asked Cursor to track versions and surface them in the game so we could tell whether Roblox Studio was showing the current source.

By the 14th attempt the Intro Cut Scene started to look like what we wanted for the MVP. A new problem: changes pushed through ROJO were overwriting the level, so we couldn't freely change things in Studio. Decided to pick this up the next day.

**Problems:** overall project architecture, Cursor <> Roblox Studio interaction, using the ROJO plugin.
**Code:** [link to PR or commits]

#### Date: 2025-01-26

To fix the sync problem we added an `Agents.md`. Spent an hour figuring out what should actually go in it for this project. It still feels rough to me. In effect it now declares responsibilities — what Cursor AI can change in the source, and what Gleb can change in Roblox Studio (levels, items, NPCs, etc.). Pipeline now: Gleb adds an NPC, places it, picks the skin; Cursor wires up the logic. Conflicts gone. By attempt 5–6 the NPC was showing a dialog interface.

We were too lazy to build the Colosseum ourselves. ROJO wasn't great for that. Set up the MCP protocol for Roblox Studio. In the end Cursor managed to customise the level without breaking Gleb's edits (some via ROJO, some via MCP). The Colosseum still came out crap... though some MCP capabilities (lighting, for one) were useful. Logged "build a proper Colosseum" in TODO :D

**Problems:** `Agents.md` config, splitting responsibilities, MCP protocol for Roblox Studio.
**Code:** [link to PR or commits]

#### Date: 2025-01-27

Started figuring out character customisation. Turns out there are 6- and 15-jointed characters that can be customised in Blender. Installed Blender. The interface is pain. Struggled for two hours, tried generating with AI but wasn't happy with the result. Came back to Blender, started a beginner tutorial.

**Problems:** lots of unfamiliar terminology — rigs, mesh, mesh formats, Blender's complex UI, import/export options between Roblox Studio <> Blender.
**Code:** [link to PR or commits]

#### Date: 2025-01-28

Watched Blender videos: `https://www.youtube.com/watch?v=kVcY7K-JA1Y` and others.

---

## Wrap-up

I believe the Angular course can produce a lot of interesting notes on very different topics — auth flows, building components, API protocols, deployment, state management. Stories of learning and using AI tools are also more than welcome.

By the end of the course you'll have a record of your individual contribution, the problems you encountered and solved. And you'll have plenty to choose from when picking material for the final presentation.

---

## Plan B — video instead of a diary

If, for any reason, you didn't keep the diary for one or two weeks, you have to record a video. If you didn't keep it for a month or more — two videos.

**Video requirements:**

1. **Scope:** pick one Feature Component you implemented.
2. **Setup:** delete its code. Re-write it in real time. Similar to what's sometimes asked in a live-coding interview.
3. **Commentary:** you must explain your decisions out loud — why this component architecture, what alternatives you considered, how the component integrates with the rest of the app, how edge cases are handled (network errors, empty data, invalid data).
4. **Length:** at least 10 minutes.

---

## Development Diary scoring criteria (max 100 points)

### Threshold for being allowed to defend the final project (pass / fail)

| Requirement                                                                                                                                  | Status    |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| The development diary exists, is filled in regularly, entries are committed on time                                                          | must pass |
| **The diary describes how you learned Angular's core topics — in your own words** (or these topics are captured on video — see Plan B)       | must pass |

### Quality criteria (0–100 points)

| Points  | Level         | Description                                                                                                |
| ------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| **20**  | Formal        | Brief entries without detail ("did X")                                                                     |
| **60**  | Regular       | At least 2 entries/week, visible progress, learning of several core topics is described                    |
| **80**  | Detailed      | Problems and solutions are described; the line of thinking is clear                                        |
| **100** | Reflective    | Deep reflection, comparison of implementation options — clear that it wasn't written for the checkbox      |

---

> Deeper on **"why a diary at all"** — see the [`diary.html`](https://rollingscopes.github.io/rs-angular-observer/diary.html) page (including the ladder of entries: levels 0 → 4 on the same example component).
