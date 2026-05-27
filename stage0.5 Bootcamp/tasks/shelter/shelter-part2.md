# Shelter: Part 2 - Responsive Layout

## Skills

`responsive design` `media queries` `mobile-first` `fluid layout` `relative units` `breakpoints` `CSS Flexbox` `CSS Grid`

## Our Handbook

👉 [Open Handbook](https://publish.obsidian.md/juniornotess/RS-Bootcamp-2026/Tasks/02b+%E2%80%94+Shelter+Part+2+%E2%80%94+Responsive) 👈

This handbook is currently in a test phase.
If you notice any issues or have suggestions, feel free to contact me on Discord: `@OreskaG`

## Task Description

This is the second of three parts. See the [main task description](shelter.md) for the full project overview.

Make the `Main` and `Pets` pages from [Part 1](shelter-part1.md) responsive, covering the range from 1280px down to 320px. Use the [Figma design](https://www.figma.com/file/Yk6EnbY63FyG2PJTFkJDMh/shelter) - artboards `main-1280` / `our-pets-1280` (desktop), `main-768` / `our-pets-768` (tablet), `main-320` / `our-pets-320` (mobile).

At this stage the burger menu is **not** required to open - only the burger icon must appear instead of the navigation menu when the viewport is narrower than 768px.

## Requirements

1. The layout matches the design at the three reference widths: 1280px, 768px, 320px.
2. Between breakpoints, the layout adapts smoothly - content does not overlap, get cut off, or break visually.
3. There is no horizontal scroll at any viewport width in the supported range.
4. The burger icon appears in place of the navigation menu when the viewport width is below 768px (the menu itself does not need to open yet - that's [Part 3](shelter-part3.md)).
5. The markup remains valid.

## Submission

1. Continue working in the same public repository you used for Part 1.
2. From the `shelter` branch, create a `shelter-part2` branch - this lets you continue from where Part 1 left off. After completing Part 2, merge `shelter-part2` back into `shelter`.
3. Complete the task.
4. Deploy your work to `gh-pages`.
5. Open a Pull Request from `shelter-part2` into `shelter`. Name the PR after the task. Write the description following the [PR description schema](https://rs.school/docs/short-track/pull-request-requirements). Merge it.
6. Submit the deployment link in [rs app](https://app.rs.school/) → **Cross-Check: Submit**.
7. After the deadline, complete the cross-check (3 days) in **Cross-Check Review**.

## Cross-check

This task is reviewed via the [cross-check process](https://rs.school/docs/cross-check-flow).

### How layout-vs-design checks work

- Up to 10px of horizontal and vertical deviation is allowed at the three reference widths if visual similarity is preserved.
- For visual checks at 1280px / 768px / 320px, use Chrome DevTools' device toolbar in **Responsive** mode and the [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi) extension.
- For the "no horizontal scroll" check, the reviewer slowly resizes the window between 320px and 1280px and watches for horizontal scrollbars or content overflow.
- For the "smooth adaptation" check, the reviewer slowly resizes the window and watches for content that overlaps, gets cut off, or visibly jumps.

## Scoring Criteria

**Maximum score: 110 points**

### `Main` page (45 points)

- Layout matches the design at 1280px **+15**
- Layout matches the design at 768px **+15**
- Layout matches the design at 320px **+15**

### `Pets` page (15 points)

- Layout matches the design at 1280px **+5**
- Layout matches the design at 768px **+5**
- Layout matches the design at 320px **+5**

### Responsive behavior (50 points)

- No horizontal scroll on either page at any width from 320px to 1280px **+20**
- Layout adapts smoothly between breakpoints - no overlapping, cut-off, or visually broken content on either page **+15**
- The burger icon appears instead of the navigation menu when the viewport is narrower than 768px on both pages **+5** (the menu itself does not need to open at this stage)
- Markup is valid on both pages per <https://validator.w3.org/> **+10**

### Penalties

- Layout (full design or individual blocks) implemented as a screenshot **-100**
- Frameworks, libraries, or tools forbidden in the technical requirements are used **-100**

## Learning Resources

- [Responsive Web Design Basics - web.dev](https://web.dev/responsive-web-design-basics/)
- [Using Media Queries - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Mobile First - A List Apart](https://alistapart.com/article/mobile-first-css-is-it-time-for-a-rethink/)
- [CSS Units (`rem`, `em`, `vw`, `vh`) - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Viewport Meta Tag - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
- [Fluid Typography - CSS-Tricks](https://css-tricks.com/snippets/css/fluid-typography/)
