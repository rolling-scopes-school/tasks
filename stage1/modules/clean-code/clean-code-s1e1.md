#### [Stage#1](../../) > [Clean Code S1E1](README.md)

# Task "Clean Code S1E1"

![image](clean-code.png)

Here is a small single-page [TODO-list application](https://github.com/rolling-scopes-school/clean-code-s1e1).
Your task is to edit and change code – refactor code files, while the functionality of the application should remain the same. Changes should be made according the following guidelines: [html-and-css](materials/html-and-css.md) and [html-and-css-extended](materials/html-and-css-extended.md).

No automatic code formatting tools are expected to be used at this task.

## Implementation Requirements

**Warning!** Student can give a 0, if at least one of the following requirements is not met:

- Use a personal **public** repository on GitHub to complete the task.
  Make a fork of an existing project or just create a new one and copy the task project files.
- One commit should contain changes according to one point of the guides and should also have all the made changes in the commit message. Intersection of 2 or more rules in a single commit is acceptable if compliance of one rule automatically leads to compliance of others (all rules should be listed in commit message in this case).
- Each commit should be made according to the [commit requirements](https://docs.rs.school/#/git-convention?id=%d0%a2%d1%80%d0%b5%d0%b1%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f-%d0%ba-%d0%b8%d0%bc%d0%b5%d0%bd%d0%b0%d0%bc-%d0%ba%d0%be%d0%bc%d0%bc%d0%b8%d1%82%d0%be%d0%b2).

- Create a new branch from the `main(master)` and name it as `clean-code-s1e1`. All your changes should be made inside this new branch.
- [The original application functionality](#application-functionality) must remain the same after all your changes.
- Once the task is completed, create a Pull Request from the branch `clean-code-s1e1` into `main(master)` of your personal **public** repository.

  **Warning!**: if you have forked the project, you will be advised to create a PR into the task description repository. You MUST change the repository and create the PR into `main(master) branch of` **YOUR** repository.

- Pull Request must be created according to [the following rules](https://docs.rs.school/#/pull-request-review-process?id=%d0%a2%d1%80%d0%b5%d0%b1%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f-%d0%ba-pull-request-pr).
- ❗ You should submit your **Pull Request** link once the task is completed.

### Application Functionality:

- Adding a new item to the "TODO" tasks list.
- Editing an item in the "TODO" tasks list.
- Deleting an item from the "TODO" tasks list.
- Marking an item as "COMPLETED" and moving it to the corresponding list via the checkbox.

- Deleting an item from the "COMPLETED" list.
- Editing an item in the "COMPLETED" list.
- Marking an item as incomplete via the checkbox and moving it into the "TODO" tasks list.

- The appearance of the application has not been changed.
- The delete button animation works.

### Recommendations:

- Carefully rename the attributes, don't miss a single one, including the JS files.
- You can deploy the application using `gh-pages` so it will be easier for the students to check your work.
- Learn and apply all code refactoring tools that your IDE has.

You have two commit styles - choose the one you like more. **Both of them are correct!**

_Commit style №1:_

```
fix(basic-2.2): add Html5 DOCTYPE tag
refactor(extended-2.1): update CSS according to BEM
```

_Commit style №2:_

```
fix: add Html5 DOCTYPE tag according to rule 2.2 in html-and-css.md
refactor: update CSS according to BEM to rule 2.1 in html-and-css-extended.md
```

## Evaluation criteria

**Check loyally, this task requires a lot of work. All arguable moments should be resolved in the higher score way. Stay human!**

**Maximum amount of points for the task +45**

- +2 points for each of 15 list items [beginner guideline](materials/html-and-css.md), which is fully completed\*.
- +5 points for each of 3 list items [advanced guideline](materials/html-and-css-extended.md), which if fully completed\*.
- If there are changes in margins and padding because of HTML tags' replacement, that insignificantly change the UI, that's not a mistake, no penalties should be applied.

(\* the rule must be applied for the whole document, not just for a piece of code).

## Cross-check

- The repository should be opened locally or on GitHub to review the task.
- Form for the Cross-Check: https://rolling-scopes-school.github.io/checklist/ ("Clean code S1E1")
- Cross-Check instruction: https://docs.rs.school/#/cross-check-flow.

[A document for questions](https://docs.google.com/spreadsheets/d/1lgzmc72mKCmYvHimvqBNENgKJuXMON8q1f1s4GEnEVI/edit?usp=sharing)

## Hints

- To create the commits students are offered to use [Commitizen](https://github.com/commitizen/cz-cli). Its usage is not required.
