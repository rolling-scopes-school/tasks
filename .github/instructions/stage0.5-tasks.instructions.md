---
description: "Use when editing, reviewing, or adapting any task in stage0.5 Bootcamp. Contains requirements for task structure, formatting, tone, scoring, and cross-check criteria."
applyTo: "stage0.5 Bootcamp/**"
---

# Stage 0.5 Bootcamp — Task Authoring Guidelines

These rules apply to every task file inside `stage0.5 Bootcamp/tasks/`. When adapting a task from another stage, always bring it in line with all sections below before considering it done.

---

## 1. Language

- **All task files must be written in English.**
- If the original task is in Russian or mixed language, translate everything — headings, descriptions, criteria, notes, and comments.
- Keep technical terms as-is (e.g. `flexbox`, `async/await`, `cross-check`).

---

## 2. Required File Structure

Every task `README.md` must contain the following sections **in this order**:

```
1. Title (H1)
2. Skills (tags block)
3. Task Description
4. Requirements
5. Submission
6. Cross-check
7. Scoring Criteria
8. Learning Resources
```

### 2.6 Cross-check

A dedicated section between Submission and Scoring Criteria. Always link to https://rs.school/docs/cross-check-flow.

```markdown
## Cross-check

This task is reviewed via the [cross-check process](https://rs.school/docs/cross-check-flow).
```

### 2.1 Title

Plain H1 with the task name. No subtitles on the same line.

```markdown
# CSS Meme Slider
```

### 2.2 Skills

A block directly under the title listing the key skills/topics needed to complete the task.
Use inline code tags for each skill.

```markdown
## Skills

`CSS animations` `@keyframes` `transitions` `transform` `z-index`
```

### 2.3 Task Description

Free-form description of what the student needs to build. Clear, concise, in English.

### 2.4 Requirements

Functional requirements listed as checkboxes or bullet points.
Group into sub-sections if needed (e.g. _Basic_, _Advanced_).

### 2.5 Scoring Criteria

See Section 3 below.

### 2.6 Learning Resources

A `## Learning Resources` section at the **very end** of the file.
List links to documentation, articles, or videos that cover the skills needed.
Each link must be a working URL — verify before saving.

```markdown
## Learning Resources

- [CSS Animations — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)
- [CSS Transforms — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
```

---

## 3. Scoring Criteria

- Every task must have a `## Scoring Criteria` section.
- Each criterion must be a bullet point with an explicit point value in **bold** at the end, e.g. `**+10**`.
- Group criteria into logical blocks if there are more than 5 items.
- State the **maximum total score** at the top of the section.
- Include penalty rules if applicable (e.g. broken layout, console errors).

```markdown
## Scoring Criteria

**Maximum score: 100 points**

### Basic Requirements

- Slider is visible and functional **+20**
- At least 5 slides present **+10**

### Animations

- Slide transition uses CSS animation (no JS) **+20**
- Transition duration is between 0.3s and 1s **+10**

### Penalties

- JavaScript used for slide switching **-20**
- Console errors **-10**
```

---

## 4. Links

- **All links must be verified and working** before the task is considered done.
- Remove or replace any broken, outdated, or stage-specific links (e.g. links pointing to `stage1/`, `stage2/` folders in other repos).
- Prefer MDN, official docs, or well-known resources (css-tricks, javascript.info, web.dev).
- Internal links must use relative paths where possible.

---

## 5. Things to Remove / Replace When Adapting

When copying a task from another stage, always strip or rewrite the following:

- Any mention of mentors, mentor review, or mentor scoring
- Deadline / submission date sections
- Links to other stages' Discord channels or streams
- References to `stage0`, `stage1`, `stage2` grading systems
- Russian language text (translate to English)
- Links that point to the old raw GitHub task files (replace with local relative links or verified external URLs)

---

## 6. Examples

### Skills block — correct

```markdown
## Skills

`CSS Grid` `media queries` `BEM` `responsive design`
```

### Scoring criterion — correct

```markdown
- Mobile layout matches the design at 768px breakpoint **+15**
```

### Scoring criterion — incorrect (no point value, vague)

```markdown
- The layout looks good on mobile
```

### Learning Resources — correct

```markdown
## Learning Resources

- [CSS Grid — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [A Complete Guide to Grid — CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
```
