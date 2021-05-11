# "Markdown & Git"

## Task

Your task is to create a markdown document. Read about markdown here - https://guides.github.com/features/mastering-markdown/

Document should contain your Resume.
Here are some tips from EPAM HR department:

```
What should a Junior Developer Resume contain?

! Important: write your Resume in English if you can, if possible

1. First Name, Last Name (real ones)
2. Contact Info (add several ways to contact you)
3. Summary (your goal, wishes, reveal what is important for you, what do you want and why.
Some kind of self-presentation. In case of lack of experience  Junior Developer sells his/her potential, his/her passion and ability to learn fast. You shouldn't think that everybody is going to teach you when you come to the workplace . Rather being a Junior means always
learning new things from everywhere etc.).
4. Skills (e.g. programming languages, frameworks, methodologies, version control, tools etc.)
5. Code examples (LATEST)
6. Experience (for a Junior Dev it means all kinds of experience: coding tests, projects from courses,
freelance projects - wherever they had the opportunity to demonstrate skills they have.
Also it would be awesome if you add links to source code)
7. Education (including courses, seminars, lectures, online learning)
8. English (elaborate on what kind of practice you had, if any, how long it lasted and so on)
```

**NOTE!** You are recommended to use real data. However fake data will do too.

The document should be deployed on GitHub Pages (https://pages.github.com/), it will happen automatically as soon as you create a `gh-pages` branch. After that your page will be available at URL like this one: https://your-github-account.github.io/rsschool-cv/cv

### Repository Requirements:

1. Make a public repository called `rsschool-cv` on your GitHub account.
2. There should be only one file in the `master` branch - a `README.md` file with a link like this https://your-github-account.github.io/rsschool-cv/cv in it
3. The CV document itself called `cv.md` should be in the branch `gh-pages`.
4. Once you are done, open a Pull Request `gh-pages`->`master`. **Do not merge this Pull Request!**

### Commits Requirements

- A minimum of 3 commits
- [Commit names according to the guideline](https://docs.rs.school/#/en/git-convention)

### PR (Pull Request) Requirements

1. PR name should contain **the task name** and probably additional info.
2. Changes **must not contain commented code, unnecessary files, changes from other branches and generated files** like \*.bundle.js. Please review your changes before contributing. .editorconfig, .gitignore, etc. can be included.
3. Comments in the PR are a good practice.
4. [How to write the perfect Pull Request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)

### Criteria

- +50 points if the requirements for the task are met
- +50 points if repository, commit and PR requirements are met

### FAQ

1. Question: I’ve got 0 for the task  
   Answer: The page with your CV is absent at: https://your-github-account.github.io/rsschool-cv/cv

2. Question: I’ve got 50 and status "Failed repository requirements: ...."  
   Answer: You do not have "rsschool-cv" repository with "gh-pages" branch and "cv.md" file there. Or there is no “README.md” file in "master" branch.

3. Question: I’ve got 50 and status "Failed commit requirements: ...."  
   Answer: Your "gh-pages" branch has less then 3 commits or not all commits are made according to the rules: https://docs.rs.school/#/en/git-convention All commits that do not follow the rules will be written in the status.
   You can check your commits here: https://github.com/your-github-account/rsschool-cv/commits/gh-pages
   "Merge ..." or "Initial commit" commits were ignored.

4. Question: I’ve got 50 and status "Failed PR requirements:...."  
   Answer: The main reason, in the majority of cases, is that you haven’t made a Pull Request from ‘gh-pages’ to ‘master’. The other reason - there is no task title ("Markdown & Git") in your Pull Request. To look at your PR you can here:  https://github.com/your-github-account/rsschool-cv/pulls?utf8=%E2%9C%93&q=is%3Apr
