# Shelter: Part 1 — Fixed Layout

## Skills

`semantic HTML` `CSS Flexbox` `CSS Grid` `pixel-perfect markup` `HTML validation` `Figma` `BEM`

## Task Description

This is the first of three parts. See the [main task description](shelter.md) for the full project overview.

Build the `Main` and `Pets` pages following the [Figma design](https://www.figma.com/file/Yk6EnbY63FyG2PJTFkJDMh/shelter) — use only the `main-1280` and `our-pets-1280` artboards. The content width is fixed at 1280px and must not change when the browser window is resized.

## Requirements

### Page links and navigation

#### On the `Main` page

1. The `Pets` page is opened by:
   - the `Our Pets` navigation item
   - the `Get to know the rest` button in the **Our Friends** block
2. The **Help** block on the current page (anchor) is opened by:
   - the `Help the shelter` navigation item
3. The **Our Friends** block on the current page (anchor) is opened by:
   - the `Make a Friend` button in the **Not only** block
4. The footer of the current page (anchor) is opened by:
   - the `Contacts` navigation item
5. Empty links:
   - the logo
   - the bank card number in the **In addition** block
6. Other behavior:
   - in the footer, clicking the email or its icon opens a mail client
   - in the footer, clicking the phone or its icon opens a phone dialer
   - in the footer, clicking the location opens Google Maps in a new tab with any location of your choice

#### On the `Pets` page

1. The `Main` page is opened by:
   - the `About the shelter` navigation item
   - the logo in the header
2. The **Help** block on the `Main` page (anchor) is opened by:
   - the `Help the shelter` navigation item
3. The footer of the current page (anchor) is opened by:
   - the `Contacts` navigation item
4. Other behavior:
   - in the footer, clicking the email or its icon opens a mail client
   - in the footer, clicking the phone or its icon opens a phone dialer
   - in the footer, clicking the location opens Google Maps in a new tab with any location of your choice

## Submission

1. Work in the school's private repository.
2. From the `main` branch, create a `shelter` branch. Inside it create a `shelter` folder and place your project files there.
3. Complete the task.
4. For convenience, output your self-assessment to the browser console: attach an `index.js` file to your `*.html`, write a `console.log()` call with a string listing the criteria you scored yourself on (use `\n` for line breaks).
5. Deploy your work to `gh-pages` — for example, create and merge a Pull Request from `shelter` into `gh-pages` (the PR title is free-form, no description needed).
6. When done, open a Pull Request from `shelter` into `main`. Name the PR after the task. Write the description following the [PR description schema](https://rs.school/docs/short-track/pull-request-requirements). **Do not merge** this PR.
7. Submit the deployment link in [rs app](https://app.rs.school/) → **Cross-Check: Submit**.
8. After the deadline, the cross-check begins (3 days). To get the score, you must review all assigned works and submit results in **Cross-Check Review**.

## Cross-check

This task is reviewed via the [cross-check process](https://rs.school/docs/cross-check-flow).

### How layout-vs-design checks work

- Up to 10px of horizontal and vertical deviation is allowed if visual similarity is preserved.
- Use the [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi) extension. Make sure its scale is 1, and that the browser + OS are at 100% zoom.
- If the screen is wider than 1280px, center the design or align it manually to the top-left guides.
- At ≤1280px, use Chrome DevTools' device toolbar in **Responsive** mode.
- At a window width of exactly 1280px, the layout may shrink by ~17px due to the vertical scrollbar (standard for Chrome).
- Each block/section is checked independently — issues from a previous block don't carry over.
- For text: check alignment and offsets to block edges. Text size is checked only by height; differences in word width and letter spacing don't count as errors as long as the correct font with correct properties is used.

## Scoring Criteria

**Maximum score: 100 points**

### `Main` page (60 points)

#### Markup validation — **+7**

- Markup is valid per <https://validator.w3.org/>. "Document checking completed. No errors or warnings to show." — full points. Warnings (no errors) — half points. **+4**
- The header logo is built from text elements **+1**
- The page contains exactly one `<h1>` **+1**
- A favicon is added **+1**

#### Layout matches the design — **+35**

- `<header>` block **+5**
- `Not only` block **+5**
- `About` block **+5**
- `Our Friends` block **+5**
- `Help` block **+5**
- `In addition` block **+5**
- `<footer>` block **+5**

#### CSS requirements — **+6**

- The `Help` block is positioned using a grid layout (flexbox or grid) **+2**
- When zooming out or widening the browser window (>1280px), the layout stays centered — it doesn't shift to the side or stretch to full width **+2**
- The background color stretches across the full page width **+2**

#### Interactivity — **+12**

- The `About the Shelter` navigation item is highlighted and non-interactive; the other navigation items are interactive **+2**
- Each pet card in **Our Friends** is interactive when hovering over any area of the card **+2**
- Smooth anchor scrolling **+2**
- All page links work according to the [Page links and navigation](#on-the-main-page) section for the `Main` page **+2**
- Links and buttons have interactivity beyond just `cursor: pointer` — e.g. background or font color changes, following the design style guide. If the design doesn't specify styles, choose something consistent with the overall design **+2**
- Required: smooth visual changes on hover and click that don't affect neighboring elements **+2** (animation duration is usually between 0.2s and 0.5s — duration doesn't affect scoring)

### `Pets` page (40 points)

#### Markup validation — **+7**

- Markup is valid per <https://validator.w3.org/> (same rules as for `Main`) **+4**
- The header logo is built from text elements **+1**
- The page contains exactly one `<h1>` **+1**
- A favicon is added **+1**

#### Layout matches the design — **+15**

- `<header>` block **+5**
- `Our Friends` block **+5**
- `<footer>` block **+5**

#### CSS requirements — **+4**

- When zooming out or widening the browser window (>1280px), the layout stays centered **+2**
- The background color stretches across the full page width **+2**

#### Interactivity — **+14**

- The `Our pets` navigation item is highlighted and non-interactive; the other navigation items are interactive **+2**
- Available pagination buttons (right) are active; unavailable ones (left) are disabled **+2**
- Each pet card in **Our Friends** is interactive when hovering over any area of the card **+2**
- Smooth anchor scrolling **+2**
- All page links work according to the [Page links and navigation](#on-the-pets-page) section for the `Pets` page **+2**
- Links and buttons have interactivity beyond just `cursor: pointer` **+2**
- Required: smooth visual changes on hover and click that don't affect neighboring elements **+2**

### Penalties

- Layout (full design or individual blocks) implemented as a screenshot **-100**
- Frameworks, libraries, or tools forbidden in the technical requirements are used **-100**

## Learning Resources

- [HTML Validation Service — W3C](https://validator.w3.org/)
- [Semantic HTML — MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
- [A Complete Guide to Flexbox — CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Complete Guide to Grid — CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [BEM Naming Convention](https://en.bem.info/methodology/naming-convention/)
- [PerfectPixel Chrome Extension](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi)
- [Smooth Scrolling (`scroll-behavior`) — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
