# RSS Mentor Dashboard

### Deadline: Sunday, Feb 24, 2019 23:59

## Task

You need to implement dashboard of The Rolling Scopes School mentor as a page on github pages.

Dashboard should contain the following information:

- list of mentor's students
- list of student's tasks, which students should work on
- table student / tasks should be highlighted according to the following rules:
  - green color - reviewed tasks
  - yellow color is for tasks that students are working on now (status - in progress)
  - red color is for tasks that mentor should check (status - checking)
  - dark red color is for tasks that should already be done,
    but they are not (status - checked)
  - grey color/muted is for tasks to be done (status - no status / todo)

Selection of mentor should be done from all mentors of the current stream,
which are contained in separated excel file,
using autocomplete (https://bestofjs.org/projects/react-select or https://bestofjs.org/projects/chosen).
Selected mentor should be saved into a localStorage and seen on next page load.

### Approximate UI

![rss-mentor-dashboard](https://docs.google.com/drawings/d/e/2PACX-1vSV8wUHrWdVDOxyJGl86gC4s_Vmri8Xor3gMRKlB_gF_krSa7UJuydBZ6JMNSpHlQOjW08CtyOqGNny/pub?w=960&h=720)

### Requirements

- Should work in Chrome
- You can Google, communicate, chat and use Stackoverflow
- You may use Lodash
- You **must** use React to complete the task

### How to do / send

- make nodejs script, which
  - process data with help of library [node-xlsx](https://github.com/mgcrea/node-xlsx) from [data folder](https://drive.google.com/open?id=1ULj8KjnNNCgUdGunQ1TY00dNbCsqAsHW).
    You may use any other library for reading excel files.
  - uses files for processing - Tasks, Mentor score, Mentor-students pairs
    (information about pairs mentor - student + mapping name / surname of mentor to his github account)
  - fixes errors in data (wrong github account, incorrect pairs mentor-student).
    It is up to you to decide what to fix with the script, and what to fix manually in the source files. If you change source files, make sure that you've added a note about it in readme.md
  - connects (merges, joins) data from [google drive folder](https://drive.google.com/open?id=1ULj8KjnNNCgUdGunQ1TY00dNbCsqAsHW)
    - about mentor's students
    - about students' marks
  - gets json file with needed data
  - loads data on html page
- with help of React and React component draws dashboard, using resulting json
- build with webpack and deploy on github pages
- Pull Request should contain
  - nodejs script, instruction how to use it
  - resulting json
  - js file with React component
  - html page, which loads React, js file with React, json file with data, which renders React component
- post link to github page + PR [into form](https://docs.google.com/forms/d/e/1FAIpQLSctLqyRXrpdgC1vybGjGZoiYwZUUAf6_hSD-gPTZMORS_E1kQ/viewform)

### Requirements for commits, PR, repository

[Common requirements from stage 2](https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md)

### Assessment criteria:

- Maximum score for the task - **140**
- Generation of json file is implemented - **+25**
- Loading json file on page and rendering list of mentor's students is implemented - **+10**
- Loading json file on page and rendering list of mentor's tasks is implemented - **+10**
- Loading json file on page and selecting mentor from "select mentor" field is implemented - **+10**
- Loading selected mentor from localStorage is implemented - **+5**
- Color indication is implemented **+10**
- Requirements for commits, PR, repository are met **+5 баллов**
- Tests cover the following functionality:
  - merging data **+10**
  - the resulting json is generated correctly **+10**
  - fact of data rendering **+5**
- Login and selecting mentor on github account is implemented **+30**
- Up to **-50** points for not following [stage2-tasks-requirements](https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md)
- if you made server that checks Google document every few minutes and is able to return fresh json on github pages **_+10_**

## Who checks the task?

Your mentor.

## Additional materials

https://www.youtube.com/watch?v=YljG0j-9Vko - video with task analysis (1st hour). 2nd hour - small lifecoding of the same task.
