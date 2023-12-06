## Tips for Completing the Assignment

The following tips are intended to help you complete the "Markdown & Git" and "HTML, CSS & Git Basics" assignments. This article serves as a guide and reference but should not be copied verbatim.

- [Markdown & Git](git-markdown.md)
- [HTML, CSS & Git Basics](html-css-git.md)

## Let's Start with the First Task: Markdown & Git

1. Go to [GitHub](https://github.com/) and register for an account. Download and install [Git](https://git-scm.com/) on your computer. During installation, simply click "Next" repeatedly.

2. In your GitHub account, create a public repository with the name `rsschool-cv`.

   - How to do it: Click on the plus icon next to your profile picture, select "New repository" from the dropdown, enter the repository name, ensure it's public, and create a README.md file by checking the box.

   ![Step 2](https://i.ibb.co/2ZjkXSJ/image.png)

3. Clone the repository to your computer in the folder where you store your projects.

   - How to do it: Right-click in the folder and select "Open with Code" (or use Git Bash Here to enter commands in the terminal).

   ![Step 3](https://i.ibb.co/TmdL7HH/image.png)

4. Open the terminal in VS Code by selecting "Terminal" -> "New Terminal" or using the keyboard shortcut `Ctrl + ~`.

   ![Step 4](https://i.ibb.co/NShcJ68/image.png)

5. Visit your newly created repository on GitHub. Click the "Code" button and copy the HTTPS link.

   ![Step 5](https://i.ibb.co/37yVsvR/image.png)

6. In the terminal, use the command `git clone <HTTPS link>` to clone the repository to your computer.

   ![Step 6](https://i.ibb.co/wr6Hgh5/image.png)

   - This should create a folder named `rsschool-cv` in your project directory, containing a hidden `.git` folder and a README.md file.

   ![Step 6 Result](https://i.ibb.co/vYF8NKB/image.png)

7. Go to the folder with the hidden `.git` folder using the `cd ./rsschool-cv/` command.

   ![Step 7](https://i.ibb.co/h7g2CTc/image.png)

8. Create a new branch called `gh-pages` from the `main` branch and switch to it using the command `git checkout -b gh-pages`.

   ![Step 8](https://i.ibb.co/6WVpC6z/image.png)

   - You can verify your current branch using the `git branch` command.

   ![Step 8 Branch Check](https://i.ibb.co/znnfXDF/image.png)

9. In the `gh-pages` branch, create a new file named `cv.md`.

   ![Step 9](https://i.ibb.co/f02k32N/image.png)

10. To upload your changes from your local computer to GitHub, start by using the command `git add .` (note the dot at the end) to stage the changes. You can check what has changed from the initial state and display the files with the `git status` command.
    > **Note**: To successfully upload changes to the remote repository, make sure the changed files are saved. You can configure auto-save in your code editor if necessary.

![Step 10](https://i.ibb.co/K9Dk0rg/image.png)

11. Next, commit the changes using the `git commit -m 'COMMIT NAME'` command.
    - Pay attention to the **commit name requirements** described at [https://docs.rs.school/#/en/git-convention](https://docs.rs.school/#/en/git-convention). The task specifies that there should be at least three commits in the `gh-pages` branch, and commit names should start with prefixes like `init:`, `feat:`, `fix:`, `refactor:`, or `docs:`.

![Step 11](https://i.ibb.co/yWLXJM4/image.png)

12. Now you can push (send to GitHub from your local machine) the changes. First, check which branch you are in using the `git branch` command, and then push the changes using the `git push origin <BRANCH NAME>` command. You should use `git push origin gh-pages` to push to the `gh-pages` branch.

![Step 12](https://i.ibb.co/bQzrF0C/image.png)

- You can refresh the GitHub page in your browser to see the changes. A new `gh-pages` branch should appear, containing the README.md file and an empty cv.md file. You can also visit the commit page to view all the commits in this branch.

13. Fill in `cv.md` using your code editor with Markdown syntax following the guidelines at https://guides.hexlet.io/markdown/ and periodically push the changes to GitHub.

![Step 13](https://i.ibb.co/N2XZ1sj/image.png)

- **Don't forget to use appropriate commit names!**

14. In the `README.md` file, add a link of the form `https://GITHUB-USERNAME.github.io/rsschool-cv/cv`, replacing `GITHUB-USERNAME` with your GitHub username. After completing this step, your CV will be accessible via this link.

![Step 14](https://i.ibb.co/gJmDFxF/image.png)

- **Push the changes to GitHub.**

15. Once you have written your CV, added the link to README.md, and pushed the latest changes, create a Pull Request (PR) for review. Before doing this, it's a good idea to review the commit names. To create a Pull Request, go to your repository on GitHub, click the "Pull Request" button in the center, and then click "New pull request" on the right. Select the source and target branches and click the green "Create pull request" button.

![Step 15](https://i.ibb.co/C1k1FqH/image.png)

![Step 15.2](https://i.ibb.co/xL7Ny67/image.png)

![Step 15.3](https://i.ibb.co/phRt9rB/image.png)

- Provide a PR description according to the scheme at [https://docs.rs.school/#/pull-request-review-process?id=Requirements-for-pull-request-pr](https://docs.rs.school/#/pull-request-review-process?id=Requirements-for-pull-request-pr). Use the task's name as the PR title.

![Step 15.4](https://i.ibb.co/s5wnrSd/image.png)

- **Do not press "Merge"!**

16. Go to "RS App," then the "Auto-Test" tab. Choose the "Markdown & Git" task and click the "Submit" button.

![Step 16](https://i.ibb.co/rx18n8z/image.png)

## Moving on to the Second Task: HTML, CSS & Git Basics

You will continue your work in the "rsschool-cv" repository created during the previous "Git & Markdown" task.

1. From the `gh-pages` branch, create a new branch called `rsschool-cv-html`. Check your current branch using the `git branch` command. If you're in the `gh-pages` branch, create a new branch called `rsschool-cv-html` and switch to it.

   ![Step 1](https://i.ibb.co/mzJ0V8Z/image.png)

2. Create an `index.html` file. You will use this file for creating the CV layout.

   - Push the changes to the `rsschool-cv-html` branch.

   ![Step 2](https://i.ibb.co/rZpMP9Y/image.png)

3. For styling your CV, create a `style.css` file. You will write styles for the layout in this file. After creating it, push the changes to this branch. Additionally, add your photo or avatar.

4. In the `README.md` file in this branch, modify its contents. If the file doesn't exist, create it and add a link like `https://GITHUB-USERNAME.github.io/rsschool-cv/`, replacing `GITHUB-USERNAME` with your GitHub nickname. Push all changes to this branch (`rsschool-cv-html`).

   ![Step 4](https://i.ibb.co/T8BhmwN/image.png)

5. Create a Pull Request from the `rsschool-cv-html` branch to the `gh-pages` branch.

   ![Step 5](https://i.ibb.co/dfxdbsW/image.png)

6. Merge the Pull Request by clicking the "Merge pull request" button and confirming the merge.

   ![Step 6](https://i.ibb.co/cX9rF2z/image.png)

   ![Step 6.2](https://i.ibb.co/R4qP0v8/image.png)

7. Go to "RS App," then the "Auto-Test" tab. Choose the "HTML, CSS & Git Basics" task and click the "Submit" button.

   ![Step 7](https://i.ibb.co/x1XwQrD/image.png)
