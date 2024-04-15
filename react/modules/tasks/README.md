# General requirements for all the tasks

Those requireminets are applied to all the tasks, if not provided in the task explicitly

## Questions

You should be using Discord as the main mean of the communication.
Also we will try to collect your questions regarding the 1st Module using special form, which will be provided via the Discord with the 1st Module start. Questions will be collected in Module 01 section spreadsheet, which also will be provided via the Discord with the 1st Module start. Please, check answers carefully before posting the question, may be your question has been answered already.
We will try to conduct a session for each module providing answers for some questions.

## Repository requirements

- The task should be completed in **your personal private repository**.
- In the repository, create a branch from the `main` branch using the task's name and work within this newly created branch.
- The commit history should reflect the process of creating the app. Refer to [Commit requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU] for details.
- Once development is complete, you need to create a Pull Request from the current task branch to the `main` branch. Refer to [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU] for details.
- After completing the module, private repository should be exposed for the duration of the cross-check (please check the schedule). When the cross-check is finished, repository should be made private again.

**Do not merge Pull Request from the development branch to the `main` branch**

## Cross-code-review process

1. Clone the repository you are going to review
2. Install all the required dependencies
3. Run linting using special command in package.json file, output should not produce any errors or warnings
4. Run tests using special command in package.json file, all tests should pass, test coverage should be shown after running all the tests
5. Review the code. Pay attention at the following "code smells": props drilling; large, complex components aka "god" components; direct DOM manipulation, etc.

When reviewing the code try pay attention at the following principles:

- Write code as simply as possible: KISS
- Avoid unnecessary repetition: DRY
- Delete what is not needed: YAGNI

We also need to mention the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) and other [SOLID](https://en.wikipedia.org/wiki/SOLID) principles
Please, check [this article](https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/) for reference
Last, but not least - check the presence of the comments. Ideally there shouldn't be any comments at all. Sometimes people just comment code which is not needed. So why not to remove it entirely? In case you will need to restore this code, you can always refer to the git history. And more - [comments are lies](https://blog.devgenius.io/code-should-be-the-one-version-of-the-truth-dont-add-comments-b0bcd8631a9a)

## Cross-check process

Run app and check that the functionality is working (cross-check)
