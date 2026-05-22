# HTML Builder

## Skills

`Node.js` `fs / fs/promises` `streams` `events` `readline` `path module` `process` `CommonJS modules` `command-line scripts`

## Task Description

A series of six Node.js scripts of increasing complexity. The first five are small standalone exercises focused on the file system, streams, events, and paths. The sixth is a final assignment that ties the previous tasks together into a small console utility that builds a static HTML page from components and a single bundled CSS file.

All six subtasks live in a single repository created from the [HTML-builder template](https://github.com/rolling-scopes-school/HTML-builder). Each subtask is a folder (`01-read-file`, `02-write-file`, …, `06-build-page`) and is run from the repository **root** with `node <folder-name>`.

> Most tasks can be solved in multiple ways. Reviewers evaluate the resulting behavior and adherence to the rules below — not the exact code style.

## Requirements

### General Rules (apply to every subtask)

1. **No third-party modules.** Only Node.js built-ins.
2. Each task must be runnable from the repository root via `node <task-folder-name>`.
3. **No synchronous `fs` functions** — `fs.statSync`, `fs.readFileSync`, `fs.writeFileSync`, etc. from the [synchronous API](https://nodejs.org/api/fs.html#fs_synchronous_api) are forbidden.
4. The use of `setTimeout()` is forbidden.
5. Use the **LTS** version of Node.js.
6. For imports, use [CommonJS](https://nodejs.org/docs/latest/api/modules.html#modules_modules_commonjs_modules) (`require`).

### 01 — Read a file and output its contents to the console

In `01-read-file/index.js`, write a script that prints the contents of `01-read-file/text.txt` to the console.

- The folder contains `index.js` and `text.txt`.
- Running `node 01-read-file` from the repository root prints the contents of `text.txt` to the console.
- File reading must use a **ReadStream** (no synchronous reads).

### 02 — Write console input to a file

In `02-write-file/index.js`, write a script that prompts for text and appends every entered line to a file in the same folder.

- Running `node 02-write-file` creates a text file inside the `02-write-file` folder and prints a prompt (text is up to you).
- After each user input, the entered text is **appended** to that file. The process keeps waiting for the next input.
- Pressing `Ctrl + C` or typing `exit` prints a farewell message (text is up to you) and terminates the process.

### 03 — Display information about files in a folder

In `03-files-in-folder/index.js`, write a script that prints information about each file in `03-files-in-folder/secret-folder`.

- Running `node 03-files-in-folder` prints one line per file, formatted as `<file name> - <extension> - <size>`.
  Example: `example - txt - 128.369kb`. Rounding and unit conversion to kB are optional.
- Only **files** (not directories) located **directly** inside `secret-folder` must be listed. Listing a subdirectory counts as an error.

### 04 — Copy a directory

In `04-copy-directory/index.js`, implement the `copyDir` function that copies the contents of `04-copy-directory/files` into `04-copy-directory/files-copy`.

- After the script finishes, `files-copy` exists and its contents exactly mirror `files`.
- When files are added/removed/modified inside `files` and the script is rerun, `files-copy` is updated accordingly (files that no longer exist in `files` must be removed from `files-copy`).
- The use of `fsPromises.cp()` is forbidden.

### 05 — Build the CSS bundle

In `05-merge-styles/index.js`, write a script that compiles all `.css` files from `05-merge-styles/styles` into a single `bundle.css` inside `05-merge-styles/project-dist`.

- After the script finishes, `project-dist/bundle.css` exists and contains the concatenated styles from every `.css` file in `styles`.
- On every rerun, `bundle.css` is overwritten with the current state of the `styles` folder.
- Files with an extension other than `.css`, as well as subdirectories, are ignored.
- The contents of individual `.css` files must not be corrupted in the bundle.

### 06 — Build an HTML page from components and styles _(final assignment)_

In `06-build-page/index.js`, write a script that assembles a static site inside `06-build-page/project-dist`.

When the script finishes, `06-build-page/project-dist/` must contain:

- `index.html` — produced by replacing tags of the form `{{component-name}}` inside `06-build-page/template.html` with the contents of `06-build-page/components/<component-name>.html`.
- `style.css` — a single bundle of all `.css` files from `06-build-page/styles` (the logic from task 05).
- `assets/` — an exact copy of `06-build-page/assets/` (the logic from task 04).

Additional rules:

- The use of `fsPromises.cp()` is forbidden.
- The original `template.html` must not be modified during script execution.
- Only files with the `.html` extension may be used as template components. Inserting any other file is an error.
- Two or more template tags written one after another with only spaces between them (e.g. `{{about}} {{articles}}`) must be processed as separate components without errors.
- Rerunning the script must update `index.html`, `style.css`, and `assets/` to reflect any changes in the source folders (new component added + corresponding tag added to `template.html`, new style file, new asset, etc.).

## Submission

1. Open the [HTML-builder template](https://github.com/rolling-scopes-school/HTML-builder) and click **Use this template → Create a new repository**.
2. Name the new repository `HTML-builder`. Keep it **public**.
3. Clone the repository and run `npm install` to install ESLint, Prettier, and Node.js typings.
4. Complete the tasks. Each subtask has its own `README.md` inside its folder.
5. Push every subtask solution to your repository.
6. Use the [Git commit convention](https://rs.school/docs/git-convention) for your commits.
7. Open a Pull Request following the [PR description schema](https://rs.school/docs/short-track/pull-request-requirements) — **do not merge** it into `main`.
8. Submit the repository link in [rs app](https://app.rs.school/) → **Cross-Check: Submit**.
9. After the deadline, complete the cross-check (3 days) in **Cross-Check Review**.

## Cross-check

This task is reviewed via the [cross-check process](https://rs.school/docs/cross-check-flow).

For each subtask, the reviewer clones the repository, runs `node <task-folder>` from the root, and checks whether the listed requirements hold. Any criterion that produces a runtime error, throws, or violates the [General Rules](#general-rules-apply-to-every-subtask) (sync `fs`, third-party modules, `setTimeout`, `fsPromises.cp` where forbidden, etc.) scores 0 for that bullet.

## Scoring Criteria

**Maximum score: 390 points**

### 01 — Read a file (40 points)

- Running `node 01-read-file` from the repository root prints the contents of `01-read-file/text.txt` to the console **+20**
- File reading is implemented with **ReadStream**; no synchronous `fs` calls are used **+20**

### 02 — Write console input to file (50 points)

- Running `node 02-write-file` creates a file inside `02-write-file/` and prints a prompt **+10**
- Each line entered by the user is **appended** to that file (previous content is preserved) **+15**
- The process keeps waiting for further input after each write **+5**
- Typing `exit` prints a farewell message and terminates the process **+10**
- Pressing `Ctrl + C` prints a farewell message and terminates the process **+10**

### 03 — Files in folder (50 points)

- Running `node 03-files-in-folder` lists files from `03-files-in-folder/secret-folder` to the console **+15**
- Each line is formatted as `<file name> - <extension> - <size>` **+20**
- Subdirectories are **not** listed; only files directly inside `secret-folder` appear **+15**

### 04 — Copy a directory (70 points)

- After running `node 04-copy-directory`, the `files-copy` folder exists and exactly mirrors the contents of `files` **+30**
- Rerunning the script after files are added/modified inside `files` updates `files-copy` accordingly **+20**
- Rerunning the script after files are **removed** from `files` also removes them from `files-copy` **+20**

### 05 — Merge styles (45 points)

- After running `node 05-merge-styles`, `project-dist/bundle.css` exists and contains the concatenated contents of every `.css` file inside `styles` **+20**
- Files with extensions other than `.css` and any subdirectories inside `styles` are ignored **+10**
- Rerunning the script overwrites `bundle.css` with the up-to-date content of `styles` **+15**

### 06 — Build page _(final, 135 points)_

- After running `node 06-build-page`, the `project-dist` folder is created and contains `index.html`, `style.css`, and an `assets/` folder **+20**
- `index.html` is built by substituting every `{{component-name}}` tag in `template.html` with the contents of `components/<component-name>.html` **+35**
- `style.css` is a bundle of all `.css` files from the `styles` folder **+20**
- `assets/` is an exact copy of `06-build-page/assets/` **+20**
- The original `template.html` is not modified by the script **+10**
- Two template tags written on the same line separated only by spaces (e.g. `{{about}} {{articles}}`) are processed as separate components without errors **+10**
- Rerunning the script after a new component is added to `components/` and its tag is added to `template.html` correctly updates `project-dist/index.html`. Changes inside `styles/` and `assets/` are also picked up **+20**

### Penalties

- A third-party module is used in any subtask **-390**
- A synchronous `fs` function is used in any subtask **-40** (per subtask, up to **-240**)
- `setTimeout()` is used **-30**
- `fsPromises.cp()` is used in task 04 or task 06 **-40** (per subtask)
- The repository is not publicly accessible at the time of cross-check **-390**

## Learning Resources

- [Node.js File System (`fs`) — official docs](https://nodejs.org/api/fs.html)
- [Node.js Path module — official docs](https://nodejs.org/api/path.html)
- [Node.js Streams — official docs](https://nodejs.org/api/stream.html)
- [Understanding Streams in Node.js — NodeSource](https://nodesource.com/blog/understanding-streams-in-nodejs/)
- [Node.js Events — official docs](https://nodejs.org/api/events.html)
- [Understanding Node.js Event-Driven Architecture — freeCodeCamp](https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d/)
- [Node.js Readline module — official docs](https://nodejs.org/api/readline.html)
- [Node.js Process — official docs](https://nodejs.org/api/process.html)
- [Working with folders in Node.js — official docs](https://nodejs.org/en/learn/manipulating-files/working-with-folders-in-nodejs)
- [Node.js file stats — official docs](https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats)
- [CommonJS modules — Node.js docs](https://nodejs.org/docs/latest/api/modules.html#modules_modules_commonjs_modules)
