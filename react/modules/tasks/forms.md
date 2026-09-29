# Task 6 — Forms (AI era)

> Part of the revised React program. See the rationale in
> [`react/.instructions/AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).
> This task is **independent** — build it from scratch with function components, a store, and a form library.
> The accessible **modal** and **autocomplete** can be **either reused from [Task 5 — Advanced Hooks](./advanced-hooks.md)
> or built from scratch following the same principles** — your call. Either way, this task is about **forms**,
> so don't let those patterns become the focus.

## 🧠 What you'll build

A **form playground**: the **same data captured two ways** — an **uncontrolled** form (no React state for
values) and a **React Hook Form** form — both opened in an accessible **modal** (React Portal; reuse the one
from Task 5 or build it the same way), both validated by the **same schema**, with successful submissions
stored and displayed as cards on the main page. This is the applied case of **controlled vs uncontrolled**
(a Task 5 concept): the uncontrolled form vs the RHF-driven (controlled) form. The focus is **form handling,
validation, and accessibility**.

**No backend** — submissions live in a store (and optionally `localStorage`). The focus is React forms.

## 🎯 Skills / Learning objectives

- Build an **uncontrolled** form (values read via `FormData`/refs) and a **React Hook Form** form — the
  applied form of **controlled vs uncontrolled** from Task 5.
- Validate both with a shared **Zod** or **Yup** schema (name, age, email, passwords + strength, country
  autocomplete, image upload → base64, terms).
- Provide an accessible **modal** (Portal) and **autocomplete** (combobox) to host the forms — **reuse them
  from Task 5, or build them fresh following the same principles**; keep them out of the spotlight.
- Store submissions in a **store** (Redux Toolkit or Zustand) and render them on the main page.

## 📖 Required theory

- [Task 5 — Advanced Hooks & Patterns](./advanced-hooks.md) — the canonical **accessible modal (Portal)**,
  **controlled/uncontrolled**, and **combobox/autocomplete** patterns; reuse them here or rebuild the same way.
- [Portals](../portals/README.md) — modal internals, for a refresher
- [State management (Redux Toolkit / Zustand)](../state-management/README.md)
- [React Hook Form](https://react-hook-form.com/) · [Zod](https://zod.dev/) or [Yup](https://github.com/jquense/yup)
- [Playwright](https://playwright.dev/docs/intro) — end-to-end testing.

## 🤖 Working with AI (required)

The AI **coaches, you decide**. Keep a mandatory **`CHANGELOG.md`** (per-session steps + justified decisions).
See the full protocol in [`AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md); a starter harness
(`CLAUDE.md` + mirrors) ships with the repo in a later iteration.

**Decision points for this task:**
- **Validation library:** Zod **or** Yup (present tradeoffs neutrally; you choose and justify). One schema
  drives both forms.
- **State library:** Redux Toolkit **or** Zustand for storing submissions and the countries list.
- **Uncontrolled strategy:** how to read values without controlling them (`FormData` vs refs) and how to
  validate on submit only.
- **Modal & autocomplete — reuse or rebuild:** carry the accessible modal (Portal) and autocomplete (combobox)
  across from Task 5, **or** build them from scratch following the same principles. Weigh the tradeoff (reuse
  saves time; rebuilding may fit this app better) and justify your choice.
- **E2E scope & structure:** which flows to cover with Playwright (fill + submit each form, validation
  errors, image upload, new-card highlight).

## Functional Requirements (max **100 points**)

### Feature 1: Project setup (**5 points**)
- Vite `react-ts` + Oxlint + Oxfmt + Husky. TypeScript throughout; no `any`/`ts-ignore`.

### Feature 2: Accessible modal host (**10 points**)
- An accessible modal — **reuse the one from [Task 5](./advanced-hooks.md), or build it from scratch following
  the same principles**: rendered through a **Portal**, with **focus trap**, **ESC to close**, **click-outside
  to close**, and **focus returned** to the trigger. The same modal hosts either form. Points are for correct,
  accessible **behavior** — the modal isn't the focus of this task, so keep it lean whichever route you take.

### Feature 3: Two forms with all fields (**25 points**)
- An **uncontrolled** form and a **React Hook Form** form collecting the same data: name, age, email,
  gender, terms, passwords (+ strength indicator), country **autocomplete** (reuse the Task 5 combobox or
  build one the same way, fed from the stored list), and an **image upload** validated by type/size and
  stored as **base64**.
  Labels connected via `htmlFor`. This is the heart of the task — the two form strategies are where the
  points are.

### Feature 4: Shared validation schema (**15 points**)
- One **Zod or Yup** schema validates **both** forms: name capitalized, age non-negative number, basic
  email structure (no regex), passwords match, image type/size, country exists in the list. RHF validates
  live (submit disabled while invalid); the uncontrolled form validates on submit.

### Feature 5: Submissions in the store (**10 points**)
- Successful submissions (from both forms) are stored in **Redux Toolkit or Zustand** as a history; the
  countries list also lives in the store.

### Feature 6: Submission display (**10 points**)
- On success the modal closes and the form resets; submissions render as **cards/tiles** on the main page,
  and the newest is briefly **highlighted** (border/background for a few seconds).

### Feature 7: Unit tests (**10 points**)
- Vitest + RTL tests for the forms (rendering, validation, submission), the modal, the store, and utilities
  (password strength, image→base64). Coverage ≥ thresholds.

### Feature 8: End-to-end tests (Playwright) (**15 points**)
- Playwright E2E specs in `e2e/` cover the key journeys (fill + submit each form, see validation errors,
  upload an image, verify the new card + highlight). Run against the built app (`pnpm build && pnpm preview`)
  and pass headlessly.

## Technical Requirements

1. Fresh repository; dedicated branch; first commit only `README.md`.
2. Stack: **Vite + React + TS + Oxlint + Oxfmt + Husky + Vitest + RTL + Playwright** + form + validation +
   state libraries.
3. Uncontrolled = **without** React Hook Form; the other form = **with** RHF. Both use the shared schema.
4. Keep a `CHANGELOG.md`.

## Penalties

- TypeScript not used: **-95** · each `any`: **-20** · each `ts-ignore`: **-20**.
- Validation implemented without **Zod**/**Yup**: **-25**.
- Direct DOM manipulation inside components: **-50 each**. · Component libraries (MUI/AntD): **-100**.
- Coverage below thresholds: statements <80% (≥70%): **-10**; <70% (≥50%): **-30**; all <50%: **-50**.
- No E2E (Playwright) tests: **-30**.
- Missing `CHANGELOG.md`: **-90**.

## FAQ

**Do I reuse or rebuild the modal and autocomplete?** Either — reuse your Task 5 (Advanced Hooks) modal
(Portal) and combobox, **or** build them from scratch following the same principles. Keep them lean; this
task's points are for the forms, not those patterns.
**What is an uncontrolled form here?** Inputs are not driven by React state; read values via `FormData` or
refs, validate on submit.
**Store only the latest submission?** No — keep a history and show all as cards.
**Are Tailwind / icon libraries allowed?** Yes — they are not UI component libraries.
**How do I test file upload?** `userEvent.upload` in RTL; a real file input flow in Playwright.
**Do both forms share the schema?** Yes — one Zod/Yup schema applied to both.
