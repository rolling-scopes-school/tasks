# Coffee House

## Project's Description

Coffee House is a project where you will need to create a website consisting of two pages, make it responsive, and add interactivity.

## Key skills

- Valid semantic responsive web design;
- Easy-to-maintain readable code;
- Exporting styles and graphics from Figma;
- Using JavaScript to implement the functionality specified in the task.

## Project Work Stages

The task consists of three parts:

- [Coffee-House. Week-1: Fixed Layout](coffee-house-week1.md)
  - In this part of the task, you need to create the 'Home' and 'Menu' pages based on the layout, which should display correctly when the window width is at least 1440px;
  - The validity of the work is checked, as well as its compliance with the layout.
- [Coffee-House. Week-2: Responsive Design](coffee-house-week2.md)
  - In this part of the task, it is necessary to add responsiveness to the pages created in the first stage, up to and including a width of 380px;
  - The validity of the work is checked, its alignment with the layout at the corresponding page width, layout responsiveness, and the absence of horizontal scroll bars.
- [Coffee-House. Week-3: Adding Functionality](coffee-house-week3.md)
  - In this part of the task, we use JavaScript to add interactivity to the pages;
  - The implemented functionality is being checked.

The duration of each part of the task is 1 week.  
The form of evaluation for each part of the task is a cross-check review.

[Design in Figma](https://www.figma.com/file/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?type=design&node-id=0-1&mode=design&t=qis81E9Ovgx47eVl-0)

## Creating your own copy of the layout

Start the task by creating your own copy of the layout. To do this:

- Log in to [Figma](https://www.figma.com/);
- Open the layout;
- On the top panel, click on the arrow next to the layout name, and select the option "Duplicate to your drafts";
- At the top left, open the settings, and choose "Back to files";
- Open the copy of the layout with the label "In Drafts".

## Code quality recommendations

Recommendations are provided for reference; strict adherence to them is not expected and will not be checked.

- [Guideline](https://codeguide.academy/html-css.html#html)
- Code quality guide
  - [General principles](../../stage1/modules/clean-code/materials/generic-principles.md)
  - [HTML and CSS recommendations - beginner level](../../stage1/modules/clean-code/materials/html-and-css.md)
  - [HTML and CSS recommendations - advanced level](../../stage1/modules/clean-code/materials/html-and-css-extended.md)

## Technical requirements

1. The layout is valid, semantic, and matches the design.
2. The application is displayed correctly and functions properly in the latest version of Google Chrome.
3. Using CSS frameworks (e.g., `Bootstrap`) **is not allowed**.
4. Using JS frameworks (e.g., `Angular`, `React`, `Vue`, etc.) **is not allowed**.
5. Using outdated libraries (e.g. `JQuery`, etc.) or pre-built libraries (e.g. `Swiper`, etc) to implement functionality **is not allowed**.
6. Using `TypeScript` **is not allowed**.
7. Using CSS preprocessors (`SASS`, `SCSS`), `normalize.css` is allowed.
8. Using a style reset with `reset.css` is not recommended.
9. Adding layout as an image by taking a screenshot of a part of the layout and pasting it into the markup is not allowed. Please use tags and characters for layout, and use images only for adding pictures and icons, not for layout elements (buttons, blocks, sections).
10. The code must be readable, without minification or obfuscation. You are allowed to use bundlers, such as [Vite](https://vitejs.dev/) or [Webpack](https://webpack.js.org/), but please enable [source maps](https://web.dev/articles/source-maps). Gulp is unmaintained and should not be used.

## Repository Requirements

- Task should be done in private school's repository. [How to work with a school's private repository](https://docs.rs.school/#/private-repository)
- Create new branch `coffee-house` from `main`. Create a folder `coffee-house` in the created branch. Place your code in this folder.
- The `main` (or `master`) branch should be empty (contain only files like README.md, .gitignore or .github folder)
- Use `gh-pages` for deployment [How to deploy an assignment from a private school repository](https://docs.rs.school/#/private-repository?id=Как-сделать-деплой-задания-из-приватного-репозитория-школы)
- Since the task is divided into three parts, coffee-house will have three versions:
  1.  The `coffee-house` branch will contain the first part of the assignment. When starting the second part, create a branch `coffee-house-week2` from the `coffee-house` branch to continue from where you left off in the first part
  2.  Upon completing the second part of the assignment, create a Pull Request from the `coffee-house-week2` branch to the `coffee-house` branch, check for conflicts, and perform the Merge
  3.  For the third part, repeat the first 2 steps with a different branch name (`coffee-house-week3`)
  4.  Please note: Pull Requests with subsequent merges are only done from the current development branch into the initial branch of this task. Merging into the `main` branch is not performed!
- The internal structure of the project is at your discretion. The simplest option is separate pages, each with its own styles and js. When submitting the work, please ensure that the provided submission link opens the main page of the deployed project

## Commit Requirements

- Commit history should reflect the application development process.
- [Give commit names according to the guideline](https://docs.rs.school/#/git-convention)

## Requirements for Pull Requests

- Name the Pull Request according to the task title
- [Provide the Pull Request description following the template](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr)  
  **No need to merge the Pull Request from the development branch into the `main` branch**.

## How to submit

After receiving the task but before the deadline, please go to the RS App at https://app.rs.school/. Select **Cross-Check: Submit**, choose the relevant task from the dropdown menu, and add the link to the deployed version of your created website in the **Solution URL** field. Then, click **Submit** button.

## Submit Recommendations

- It is recommended to submit the task as early as possible, as soon as the option becomes available in the rs app. After submission, you can continue working on the task until the deadline
- Since the project is being done in a private repository, there is no point in submitting a link to the repository or a pull request - the reviewer won't be able to see it. The private school repository is only visible to you, course admins, and your mentors when they become available
- Make sure that the deployed link you provide opens in incognito mode of the browser

## Task Evaluation

- Each part of the assignment is assessed through a cross-check
- Instructions for conducting a cross-check: https://docs.rs.school/#/cross-check-flow

## Materials

- [Старт в Figma для верстальщика](https://htmlacademy.ru/blog/soft/figma)
- [Инструкция по работе в Figma для верстальщика](https://breezzly.ru/guides/start-v-figma-dlya-verstalshhika)
- [Верстка сайта с нуля из Figma](https://www.youtube.com/playlist?list=PL5_s7xdj2Vsw-bCx5nOZJMFIiHwRgok--)

## RS School Webinars

- Sergey Shalyapin's Webinars
  - [Stream 11.02.2020. Broswers and IDEs. HTML and CSS Basics [RU]](https://youtu.be/UQavTWiTpnA)
  - [Stream 03.03.2020 Forms & Inputs. Flexbox & Grid example [RU]](https://youtu.be/PhRVJC0kBGE)
  - [Stream 10.03.2020. DOM events exampes [RU]](https://youtu.be/_5f0kznOM_A)
  - [Stream 17.03.2020 DOM examples [RU]](https://youtu.be/0M9Rz-wXYas)
  - [Stream 07.04.2022. SCSS (Sass) Basics. Flex vs Grid Layout [RU]](https://youtu.be/MOrQRgP8kbo)
  - [Stream 12.04.2022. Media queries. Responsive vs Adaptive. [RU]](https://youtu.be/CbtdP2vGOI8)
  - [Stream 20.04.2022. JS DOM & Events. Simple carousel example [RU]](https://youtu.be/2xP-HahCtio)
- Victoria Vorozhun's Webinars
  - [Friday Live Coding. Part 1 [RU]](https://youtu.be/ZAde-IJAHzo)
  - [Friday Live Coding. Part 2 [RU]](https://youtu.be/BJENQIX2e2o)
  - [Friday Live Coding. Part 3 [RU]](https://youtu.be/fooyYgIuZe8)
  - [Friday Live Coding. Part 4 [RU]](https://youtu.be/Qk2UGlFNKPE)
  - [Friday Live Coding. Part 5 [RU]](https://youtu.be/ouZnGUefneQ)
  - [Code Repository](https://github.com/ViktoriyaVorozhun/friday-live-coding/tree/develop)
  - [Figma Design](https://www.figma.com/file/fw0GA18nmpVjTBzjtiEK2L/Friday_Live_Coding?node-id=0%3A1)
