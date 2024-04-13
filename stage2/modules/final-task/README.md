## Final Project

### School's Preparation for Final Project Execution

1. Before the start of the final project, all the students who have not completed the last three assignments in a row are to be expelled as inactive.

2. The team distribution process is to be done on [RS App](https://app.rs.school/course/team-distributions?course=js-fe-2023Q4).

3. Students may choose to form their teams independently. Each team will include three students.

4. To ensure that the score position reflects the students' level of preparation more objectively it is necessary to ask mentors to grade all the tasks except for the last one before the distribution into groups occurs. The points for the last task before the final project are not added to the score until students are distributed into teams.

### Teamwork Management

#### Distribution of Students into Groups

1. Students register on [RS App](https://app.rs.school/course/team-distributions?course=js-fe-2023Q4) thus confirming their willingness and readiness to take part in the final course project.

2. Groups are formed on [RS App](https://app.rs.school/course/team-distributions?course=js-fe-2023Q4). Students can either create their own team, join an existing team, or be assigned to a team randomly.

#### Mentor's Tasks

1. Assists students in solving emerging problems, provides recommendations, observations, and advice.

2. Conducts code reviews.

3. Passes on to students their development experience, accepted best practices in production.

#### Team Lead

1. Initially, the team lead is determined by the highest score, yet, by mutual agreement, they are free to assign their role to another team member.

2. Organizes and conducts the first meeting with the team.

3. Coordinates the team's activities, plans, distributes tasks, breaks down functionalities into subtasks for each team member, and resolves disagreements in case they arise.

4. If necessary, holds additional meetings with the team to clarify the requirements and tasks set before them.

#### Communication Channels

1. The team lead creates a server on Discord, leaves a link to it in the description of the team registration form on [RS App](https://app.rs.school/course/team-distributions?course=js-fe-2023Q4) and invites their team members to the created server or they join it themselves.

The following Discord channels need to be created:

- general (for general communication)
- materials (materials and useful links)
- git (questions about git)
- work-status (for daily reports of each team member)

2. The Discord server is the main communication channel for the group. Voice channels on Discord, Teams, Telegram, Skype, etc. can be used for video or audio conferences.

### First Meeting

1. Takes place the day after the distribution into teams. The time and format of the meeting are agreed upon in advance. It's highly recommended to document the meeting results in writing.

2. The first meeting objective is to establish basic agreements, project structure, environment, teamwork rules, and set up all essential prerequisites to initiate the development process.

3. Prior to the meeting, all group members must familiarize themselves with the task requirements, formulate their suggestions for implementation, assess their skills and preferences, and decide on the tasks they are able and willing to take on.

4. During the meeting, the participants are encouraged to identify each other's strengths, listen to suggestions, clarify preferences, and outline the plan for the upcoming week's tasks.

5. After the meeting, each team member should be allocated their own area of responsibility, for which they are accountable, and the completion of which contributes to a part of the entire project.

#### Work with Repository

1. At the initial stage of collaborative Git usage, almost every team member may encounter challenges and issues. It's essential to anticipate such difficulties and the possibility of errors beforehand.

2. The `master` branch serves as a primary production branch housing exclusively the project's final releases – the product that can be offered to users (in our case, what is subject to review). Until the end of development, the `master` branch is empty, containing only the `README.md` file. At the end of the development or when the deadline approaches, the `develop` branch is merged into the `master` branch.

3. The `develop` branch is the main development branch, containing the latest working version of the project, where all completed functional components are integrated as they are finalized.

4. Each team member, including the team lead, conducts development in their own branch. Branch names align with the specific functionality being implemented. Branches are created at the beginning of each feature development based on the current state of the `develop` branch. All merges into the `develop` branch occur only through Pull Requests. Resolving merge conflicts requires merging the `develop` branch into your feature branch.

5. A branch is considered merge-ready into `develop` if there is at least one approve from another team member or mentor and all comments (if any) are marked as resolved. A comment can be resolved only by the person who left it.

6. Following approval for the merge, each team member is responsible for merging their own Pull Request. If necessary, they resolve conflicts, thus gaining valuable experience.

7. Not only the team lead or mentor but also the other team members are expected to be requested to review and approve Pull Requests. This inclusive approach allows everyone to participate as a reviewer, gaining insights into all implemented features and their functionality.

8. Each team member is expected to contribute a minimum of five commits and at least two Pull Requests merged into the `develop` branch. Failure to adhere to these requirements results in penalty points for deficiencies in team organization.

#### Coordination of Collaborative Work

1. To allocate tasks, establish interim deadlines, and ensure clear insight into the development progress (including who is working on what and at what stage), a task tracker like GitHub Projects, Trello, or any other mutually agreed-upon tool is used.

2. In the work-status channel (or preferably in daily stand-up meetings), each team member (including the team lead) provides daily mini-reports structured as follows:

- what they accomplished the previous day and how long the development process took
- objectives for the current day
- what blockers or difficulties they encountered and where they need help

3. Task trackers and daily mini reports serve to mitigate duplication and parallelism in team tasks, preventing situations where two team members are working on the same task simultaneously. Daily reporting on individual contributions stimulates team members' engagement, facilitates benchmarking of individual progress against others', and keeps everyone informed about the development process.

4. The worklog, compiled based on the task tracker and daily mini reports, serves as a comprehensive record of the team's collective work, highlighting each member's contributions. It details the specific contributions of each team member, emphasizing tangible achievements like implemented features or application components — actions that would hold value and justify payment from an employer. Entries such as "learned to code", "thought a lot", "read a book" are deemed inadequate.

### Final Project Presentation

1. The final course project presentation is conducted by whatever means convenient for the jury (Teams, Google Meet, Discord, Skype, etc.).

2. Each team is tasked with creating a 5-7-minute presentation showcasing their developed application. They highlight the features and benefits of their application, and share insights into the development process, challenges faced, and solutions implemented.

3. Scores awarded to the team during the presentation are not disclosed or discussed.

### Grading of the Final Project

1. Final projects are assessed based on both cross-checks and project presentations.

2. Cross-checks are conducted not by individual students, but by groups. This means that each group is responsible for reviewing and assessing the projects of four other groups.

### Useful Links

- [Q&A Session. Organization of Teamwork](https://www.youtube.com/watch?v=35f-XI3bkWA)
