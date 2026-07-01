# Shelter

## Skills

`semantic HTML` `CSS Flexbox` `CSS Grid` `responsive design` `media queries` `Figma` `JavaScript DOM` `event handling` `CSS animations`

## Our Handbook

👉 [Open Handbook](https://autocubes.site/junior-notes/rs-bootcamp-2026/readme) 👈

This handbook is currently in a test phase.
If you notice any issues or have suggestions, feel free to contact me on Discord: `@OreskaG`

## Project Description

Shelter is a two-page website project. You will build the layout, make it responsive, and add interactive JavaScript functionality across three weekly stages.

## Project Stages

The task is split into three parts, each lasting one week and reviewed via cross-check:

- [Shelter: Part 1 - Fixed Layout](shelter-part1.md)
  Build the `main` and `pets` pages from the Figma design at a fixed width of 1280px. Validated, semantic markup.

- [Shelter: Part 2 - Responsive Layout](shelter-part2.md)
  Make both pages responsive from 1280px down to 320px. No horizontal scroll at any width. Pages match the design at 1280px, 768px, and 320px breakpoints.

- [Shelter: Part 3 - JavaScript Functionality](shelter-part3.md)
  Add interactivity using pure JavaScript: burger menu, infinite carousel slider on `Main`, pagination on `Pets`, and a popup for pet cards on both pages.

## Figma Design

[Open design in Figma](https://www.figma.com/file/Yk6EnbY63FyG2PJTFkJDMh/shelter)

### Creating your own copy of the design

1. Sign in to [Figma](https://www.figma.com/).
2. Open the design file.
3. In the top panel, click the arrow next to the file name and select "Duplicate to your drafts".
4. Open your drafts - you will see a copy labeled "In Drafts".

## Technical Requirements

1. Markup must be valid, semantic, and match the design.
2. The application must work correctly in the latest version of Google Chrome.
3. CSS frameworks (Bootstrap, etc.) are **not allowed**.
4. JS frameworks (Angular, React, Vue, etc.) are **not allowed**.
5. Outdated libraries (jQuery, etc.) are **not allowed**.
6. TypeScript is **not allowed** - use plain JavaScript.
7. CSS preprocessors (`Sass`) and `normalize.css` are allowed.
8. `reset.css` is not recommended.
9. Do **not** implement layout using screenshots of the design. Use proper HTML tags and symbols. Images and icons may be image files; layout elements (buttons, blocks, sections) must be coded.

## Repository Setup

- Work in a **public repository on your personal GitHub account**, named `shelter` (or any name you prefer).
- Create a `shelter` branch from `main`. Inside it, create a `shelter` folder for your project files.
- For deployment, use `gh-pages` - public repos get free GitHub Pages hosting out of the box.
- Since the task has three parts, the branch workflow is:
  1. Part 1 goes in the `shelter` branch.
  2. For Part 2, create `shelter-part2` from `shelter` - this lets you continue from where you left off. When done, merge `shelter-part2` into `shelter`.
  3. For Part 3, repeat with `shelter-part3`.
  4. Never merge into `main`.

## Cross-check

Each part is reviewed via the [cross-check process](https://rs.school/docs/cross-check-flow).

## Learning Resources

- [Getting started with Figma (for developers)](https://htmlacademy.ru/blog/soft/figma)
- [Building a website from Figma (video playlist)](https://www.youtube.com/playlist?list=PL5_s7xdj2Vsw-bCx5nOZJMFIiHwRgok--)
- [CSS Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [CSS Grid - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [Using Media Queries - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Responsive Design - web.dev](https://web.dev/learn/design/)
- [JavaScript DOM - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
