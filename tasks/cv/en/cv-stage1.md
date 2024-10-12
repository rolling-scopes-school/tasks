# CV

In this task, the layout of the CV created during the [HTML, CSS & Git](html-css-git.md) assignment will be cross-checked.

## Workflow

1. Work in your personal repository `rsschool-cv`.
2. Create a branch `cv-html-css` from the `rsschool-cv-html` branch. The files with the layout will be automatically moved to this branch.
3. Check the compliance of your CV with the requirements of the task, evaluate your work according to the provided [Scoring Criteria](#scoring-criteria), and make necessary changes.
4. Create and merge a Pull Request from the `cv-html-css` branch into the `gh-pages` branch. The Pull Request's name can be arbitrary. There is no need to describe this Pull Request.
5. After completing the work, open a Pull Request from the `cv-html-css` branch into the `main` branch. Name the Pull Request based on the task's name. [Provide a description for the Pull Request following the schema](https://docs.rs.school/#/en/pull-request-review-process?id=pr-requirements) and do not merge this Pull Request.

## Layout Requirements

- The layout should be valid. Use the [W3C Markup Validation Service](https://validator.w3.org/) to check the validity of your layout.
- The layout should be semantic.
- The layout should be responsive.
- When writing code, follow the guidelines provided by [codeguide.academy/html-css.html [RU]](https://codeguide.academy/html-css.html).
- The content should be placed in a block that is horizontally centered on the page.
- The content of the CV should adhere to the recommendations of the EPAM HR department, as specified in the [Markdown & Git](git-markdown.md) assignment.
- The CV page should display correctly in the latest version of the Google Chrome browser.
- In the footer, include a link to your GitHub, the year of application creation, the [course logo](../rs-school-logo.svg) with a link to the [course](https://rs.school/courses/javascript). This item is not graded, but without a link to your GitHub, reviewers won't be able to check the PR description and assign points for it.

## Commit Requirements

- [Name your commits according to the guideline](https://docs.rs.school/#/en/git-convention)

## Technical Requirements

- The application's functionality should be tested in the latest version of the Google Chrome browser.
- You may use [Bootstrap](https://getbootstrap.com/), [Material Design](https://material.io/), CSS frameworks, HTML, and CSS preprocessors.
- You are allowed to use jQuery only as a dependency for UI libraries. The use of jQuery in the main application code is not allowed.
- You can use Angular/React/Vue and other JS frameworks and libraries (except for jQuery).

## How to Submit the Task

CV is a task that will be cross-checked.

The cross-check starts after the task deadline on Tuesday morning and ends late at night on Thursday at 23:59 UTC.

To submit the task before the task's deadline, go to the rs app [https://app.rs.school/](https://app.rs.school/), navigate to the **Cross-Check: Submit** tab, select the **CV** task, and add the link to your CV's deployment on GitHub Pages to the form.

To review the application during the cross-check, links to the reviewed works will be available in the rs app under the **Cross-Check: Review** tab.

## Scoring Criteria

**Maximum score for the task: +150**

For your convenience, please print your project's self-assessment to the browser console, specifying the points for each completed item.

- Valid layout +10
  Use the [W3C Markup Validation Service](https://validator.w3.org/) to check the validity of the layout.
  - "Document checking completed. No errors or warnings to show." +10
- Semantic layout +20
  The HTML code should include semantic HTML5 tags, such as `article, aside, figure, figcaption, footer, header, main, nav, section`, and use headings `h1-h6`. There should be only one `h1` heading.
  - 2 points for each unique semantic HTML5 tag and each unique heading `h1-h6`, but no more than 20 points in total.
- CSS styles used for layout +10
  - 1 point for each stylized element, but no more than 10 points.
- Content is placed in a horizontally centered block. The background color, if present, stretches to the full width of the page +10
- Responsive layout: No horizontal scroll bar should appear at any screen resolution up to 320px, while all content on the page should be preserved +10
- There should be an adaptive burger menu. The menu items should link to the main sections of the CV. Smooth scrolling to anchors should be implemented when clicking on menu items. When the screen width is reduced, the menu should become adaptive. The appearance of the adaptive menu can be copied from the [museum layout](https://www.figma.com/file/xkP6mIaq7uG1Uru7CpasXq/Museum-04.09) +10
- The CV page should contain an image, such as a photo or avatar of the CV author, with correct proportions and an `alt` attribute (it can be empty) +10
- Contacts for communication and a list of skills should be formatted as `ul > li` +10
- The CV should include contact information, a brief self-description, a list of skills, education details, and English proficiency information +10
- The CV should include a code sample from you (e.g., a solution from the Codewars website) with code highlighting. You can use a JavaScript library, such as [highlight.js [RU]](https://wiki.pwodev.com/highlight-js-лучшая-подсветка-кода/), for code highlighting +10
- The CV should include images with links to projects you have completed. When clicking on an image, the project page should open in a new tab. Each project should have a title, a brief description, and a list of technologies used +10
- The CV should be in English +10
- Compliance with `Pull Request` requirements: include a link to the task, a screenshot of the CV page, a link to the deployment of the CV page on GitHub Pages, and a self-assessment (break down the self-assessment by the criteria, indicating the score for each item) +10
  Note to reviewers: Since a link to the CV deployment is submitted, you will need to find the `Pull Request` for review yourself. To do this, click on the GitHub link in the footer, go to the `rsschool-cv` repository, find an open PR from the `cv-html-css` branch to the `main` branch with the title `CV`, and check its description.
- Include a video resume of the CV author in English. The video resume should be embedded in the CV page as a video, not as a button or link. The video should be 3-5 minutes in duration (±15 seconds). The video description on YouTube should include a link to its English transcript (e.g., in a [Google Docs](https://docs.google.com/document/u/0/)). +10
  Attention CV authors: Ensure that the video plays and the link to the transcript opens in incognito mode in your browser.
- Design, styling, and quality of the CV should be no less than the examples of CVs provided in the assignment materials. This is an additional 10 points, so some subjectivity in the assessment may be present +10

The difference between the maximum score for the task (150 points) and the maximum possible score for completing all the requirements (160 points) allows for potential errors by reviewers during cross-check, discrepancies in the task description, and different interpretations of the requirements by reviewers and those being reviewed.

## Cross-Check

- Cross-check instructions: [Cross-Check Flow](https://docs.rs.school/#/en/cross-check-flow)
- Review form: [Review Form](https://rolling-scopes-school.github.io/checklist/) (item "CV")
- Please add links to the best works to the form: [Form](https://forms.gle/tgC3Y3dn9y2Yu5NF6)

## Resources

- [Semantic Tags in HTML (Russian)](https://youtu.be/bQRmGxhARhc)
- [HTML5 Semantic Elements (Russian)](https://www.youtube.com/watch?v=_ih1xJyPk4A)
- [HTML5 Semantic Elements (English)](https://html5css.ru/html/html5_semantic_elements.php)
- [CV Design Examples](https://www.freepik.com/free-photos-vectors/cv-template)
- [CV Design Examples](https://www.canva.com/resumes/templates/)
- [Figma Community - CV](https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query=cv&editor_type=all&price=all&creators=all)

## Examples of CVs

- [Example 1](https://mserykh.github.io/rsschool-cv/)
- [Example 2](https://kusakinvova.github.io/rsschool-cv/)
- [Example 3](https://petr9ra.github.io/rsschool-cv/)
- [Example 4](https://estydaven.github.io/rsschool-cv/)
- [Example 5](https://alexandrdrozdfd.github.io/rsschool-cv/)
- [Example 6](https://yuriandev.github.io/rsschool-cv/)

## Video Resume Examples

- [Example 1](https://www.youtube.com/watch?v=3j2vEycHWhs)
- [Example 2](https://www.youtube.com/watch?v=a_KLPUaDi4g)
- [Example 3](https://www.youtube.com/watch?v=cQVWIw85OAs)
- [Example 4](https://www.youtube.com/watch?v=A426pZuQIUk)
- [Example 5](https://www.youtube.com/watch?v=8QIDUvjnbM8)
- [Example 6](https://www.youtube.com/watch?v=NNlEKrpeByM)
- [Example 7](https://www.youtube.com/watch?v=01wkFZnmflo)
- [Example 8](https://www.youtube.com/watch?v=CLTbVVw85hw)
