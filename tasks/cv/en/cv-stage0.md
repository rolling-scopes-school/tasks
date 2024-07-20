# CV#3. CV. Cross-Check

In this task, you are required to create a CV webpage. The content of this webpage should be based on the data you added to the Markdown document created during the execution of task [CV#1. Markdown & Git](git-markdown.md). You can modify, add, or edit this data as needed.

## Requirements for Formatting

- Valid HTML markup. Use the service [https://validator.w3.org/](https://validator.w3.org/) to check the validity of your markup.
- Semantic HTML markup.
- Follow the [HTML and CSS guidelines](https://codeguide.academy/html-css.html) when writing code.
- Content should be placed within a block that is horizontally centered on the page.
- The CV page should display correctly in the latest version of Google Chrome.
- Include a footer with a link to your GitHub, the year of creation, and the [course logo](../rs-school-logo.svg) with a [link to the course](https://rs.school/courses/javascript-ru).

## Workflow

1. Work in the `rsschool-cv-html` branch of the `rsschool-cv` repository.
2. When formatting the CV, follow the [Formatting Requirements](#requirements-for-formatting) and [Evaluation Criteria](#evaluation-criteria).
3. Self-assess your work based on the provided [Evaluation Criteria](#evaluation-criteria).
4. Create a Pull Request from the `rsschool-cv-html` branch to the `gh-pages` branch.
   - Choose a title for the Pull Request at your discretion.
   - No need to provide a description for this Pull Request.
   - Merge the Pull Request from the `rsschool-cv-html` branch into the `gh-pages` branch.
5. Create a Pull Request from the `rsschool-cv-html` branch to the `main` branch.
   - Title the Pull Request as "CV. Cross-Check."
   - Provide a description for the Pull Request following this [schema](https://docs.rs.school/#/en/pull-request-review-process?id=Требования-к-pull-request-pr).
   - Do not merge the Pull Request from the `rsschool-cv-html` branch into the `main` branch.
6. In the `README.md` file of the `main` branch, add two links where you should replace `GITHUB-USERNAME` with your GitHub username. These links should open your CV in Markdown format and as a formatted webpage.
   - `https://GITHUB-USERNAME.github.io/rsschool-cv/cv`
   - `https://GITHUB-USERNAME.github.io/rsschool-cv/`

## Evaluation Criteria

**Maximum score for the task: +120**

- The student submits a link to their CV deployed on `gh-pages` in the [rs app](https://app.rs.school/course/student/cross-check-submit) (+10 points).
- Valid markup (+10 points).
  - Use the [https://validator.w3.org/](https://validator.w3.org/) service to check validity.
  - Valid markup should display "Document checking completed. No errors or warnings to show." Full points for meeting this requirement.
  - If there are warnings (warnings) but no errors (errors), half of the points for this requirement are awarded.
- Semantic markup (+20 points).
  - The following elements are present and used as intended in the code:
    - `header`, `main`, `footer` (+5 points).
    - `nav` element (+5 points).
    - Only one `h1` heading (+5 points).
    - `h2` headings (+5 points).
- Footer includes a link to the author's GitHub, the year of creation, the [course logo](../rs-school-logo.svg), and a [link to the course](https://rs.school/courses/javascript-ru) (+10 points).
  - If the link in the footer leads to the [stage0 course](https://rs.school/courses/javascript-preschool-ru), it is not considered an error.
- CSS styles are used for formatting the CV (+10 points).
- When the browser window is resized, the formatting remains centered horizontally rather than shifting to the side (+10 points).
- The CV page includes a photo or avatar of the author, with no distortion of proportions, and with an `alt` attribute for the image (+10 points).
- Navigation, contact information, and a list of skills are formatted as a list (`ul > li` or `ul > li > a`) (+10 points).
  - Numbered lists (`ol > li` or `ol > li > a`) are also allowed.
- Content of the CV (+30 points).
  - The CV includes:
    - A brief self-introduction (+5 points).
    - Contact information (+5 points).
    - A list of skills (+5 points).
    - A code example. Code is added using characters and tags, not as an image (+5 points).
    - A list of completed educational projects with links to source code or the application page (+5 points).
    - Information about education and English proficiency (+5 points).
- The CV is written in English (+10 points).

The difference between the maximum score for the task (130 points) and the maximum possible score for meeting all requirements (120 points) allows for potential discrepancies in cross-checking, inaccuracies in the task description, differing interpretations of requirements by reviewers and those being reviewed.

## How to Submit the Task

- Task `CV#3. CV Cross-Check` will be reviewed during cross-check.
- After receiving the task but before the deadline, visit the rs app [https://app.rs.school/](https://app.rs.school/), select **Cross-Check: Submit**, choose the task name from the dropdown, add the link to your deployed CV on `gh-pages` in the **Solution URL** field, and click **Submit**.
- It is recommended to submit the task as early as possible once it becomes available in the rs app.
- After submitting, you can continue working on the task until the deadline.

## Checking Task CV#3. CV Cross-Check

- Cross-check instructions: [https://docs.rs.school/#/en/cross-check-flow](https://docs.rs.school/#/cross-check-flow).
- Cross-check form: [https://rolling-scopes-school.github.io/checklist/](https://rolling-scopes-school.github.io/checklist/), under "CV#3. CV. Cross-Check."
- Example video of a cross-check: [https://youtu.be/PPGO8Mvtc20](https://youtu.be/PPGO8Mvtc20).
- Please add links to the very best works from your cohort with very high-quality execution to this form: [https://forms.gle/kcmAkFK4j1EGW5JS8](https://forms.gle/kcmAkFK4j1EGW5JS8).

## Resources

- [HTML5 Semantic Elements](https://html5css.ru/html/html5_semantic_elements.php)
- [Examples of CV Templates](https://www.freepik.com/free-photos-vectors/cv-template)
- [Examples of CV Templates](https://www.canva.com/resumes/templates/)
- [Figma Community. CV](https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query=cv&editor_type=all&price=all&creators=all)

## Examples of CVs

- [Example 1](https://mserykh.github.io/rsschool-cv/)
- [Example 2](https://petr9ra.github.io/rsschool-cv/)
- [Example 3](https://estydaven.github.io/rsschool-cv/)
- [Example 4](https://alexandrdrozdfd.github.io/rsschool-cv/)
- [Example 5](https://yuriandev.github.io/rsschool-cv/)
- [Example 6](https://annavoloshina.github.io/rsschool-cv/)
- [Example 7](https://kryvetski-andrei.github.io/rsschool-cv/)
- [Example 8](https://nikita-resh.github.io/rsschool-cv/)
- [Example 9](https://themrcrowley.github.io/rsschool-cv/)
- [Example 10](https://elvinyeka.github.io/rsschool-cv/)
