# CV#2. HTML, CSS & Git Basics

Your task is to create a branch named `rsschool-cv-html` from the `gh-pages` branch of the `rsschool-cv` repository, add files `index.html` and `style.css` to it, which contain basic empty templates or templates with minimal content (the layout and styling of the CV will be done in the next task), and deploy them to GitHub Pages.

- [Task description and requirements](cv.md)
- [Tips for completing the task using VS Code](cv-hints.md)
- [Tips for completing the task using GitHub](cv-github-hints.md)

Please note that the tips provided are not part of the task. Follow the tips only as much as they can help you.

Some of the validation rules:

- Extra spaces at the end of lines are not allowed.
- A closing tag or closing slash for a non-pair tag is not allowed.
- If you use characters `<`, `>`, `&`, etc., they must be replaced with escape sequences.

All errors found by the validator during the checking of your work are listed in the `Details` section of the results table.

## Workflow

1. Continue working in the `rsschool-cv` repository created during the previous task [Markdown & Git](git-markdown.md).
2. Create a branch `rsschool-cv-html` from the `gh-pages` branch.
3. Maintain a commit history during the project. Follow the [commit guideline](https://docs.rs.school/#/en/git-convention), where the name of each commit should start with one of the specified prefixes: `init:`, `feat:`, `fix:`, `refactor:`, `docs:`.
4. In the `rsschool-cv-html` branch, place the files `index.html` and `style.css`, adding basic empty templates or templates with minimal content to them. The actual CV layout and styling will be done in the next task.
5. In the `README.md` file of the `rsschool-cv-html` branch, add a link like `https://GITHUB-USERNAME.github.io/rsschool-cv/`, replacing `GITHUB-USERNAME` with your GitHub username. This link will open the CV page as a fully styled webpage. We will add the actual layout during the next task.
6. Create a Pull Request from the `rsschool-cv-html` branch to the `gh-pages` branch. The title of the Pull Request should be `HTML, CSS & Git Basics`. Follow the [Pull Request description template](https://docs.rs.school/#/en/pull-request-review-process?id=Требования-к-pull-request-pr). Merge the Pull Request from the `rsschool-cv-html` branch to the `gh-pages` branch.

## How to Submit the Assignment

- After completing the task, go to the [RS App](https://app.rs.school/), select **Auto-Test**, choose the task's name, click **Open task**, click **Submit task**.
  The results (score, accuracy, details) may not appear immediately and could take some time to process. If you see zeros and blanks after submitting, you can refresh the results page to update them.
- You can submit the assignment as many times as you like before the deadline, and each subsequent submission will overwrite the previous one.
- Note: If you encounter the error "Error: Temporary Github Error. Cannot get commits. Please try in 10 mins." when submitting, it means the system is overloaded and cannot retrieve information about your commits from GitHub. You don't need to fix anything; just try submitting the assignment again later, repeating your attempts until successful or until the deadline, whichever comes first.

## Grading Criteria

**Maximum score for the assignment +100**

- Requirements for the repository are met +50.
- Requirements for commits and Pull Request are met +50

## Materials:

- [Working with Git [RU]](../git.md)
- [Basic HTML Template](https://www.w3schools.com/html/)

**NB** In the example above, the html tag is missing the lang attribute, which is necessary to pass the CV auto-test.

**hint** You can get a basic html layout by typing the exclamation mark (!) at the very top of a newly created empty HTML file and pressing Enter.

<details><summary>Click to see the demo pic</summary>

Create an empty index.html document. Place the cursor inside the HTML editor content and type `!`. You will get a content selection dialog that looks like this:

![demo](../images/html_template_basic.JPG)

</details>

<details><summary>Click to see the demo gif</summary>

![demo](../images/basic_html_2.gif)

</details>

**Additionally** You can use any basic HTML template of your choice by searching for it online.

- [Escape Sequences (in Russian)](https://www.lexium.ru/2009/05/343/)

Please use this Markdown-formatted text for your task, keeping the formatting intact.
