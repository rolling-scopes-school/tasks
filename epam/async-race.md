# Welcome to the test task!

Below is a description of the test task. Please read it carefully. The ability to follow the requirements is important to us.
You should complete the task before proceeding to the recruiter's interview and subsequent technical interview.
During the technical interview, the interviewer may discuss your solution.  
To successfuly complete the task you **_MUST_** follow the requirements carefully.

### 🚧🚧🚧 Important Notes 🚧🚧🚧

- You **_MUST_** deploy your solution (frontend only). There are many free services like GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.
- You **_MUST_** provide a link to the deployed solution (frontend only) in the README.md file. Interviewer will have its own running backend.
- You **_MUST_** include a checklist in the README.md file. And estimate your score.
- The deadline for submitting your solution is 3 weeks after the task is assigned. If you have submitted, but the assignment has not yet been verified, you may continue development.

#### 🛑 IF YOU FAIL ANY OF THE ABOVE, THE INTERVIEWER IS ENTITLED TO REJECT YOUR ASSIGNMENT. 🛑

## Task "Async Race"

#### Try to imagine the scenario.

Your customer has an idea to spend their money. They have hired some engineers who installed radio-controlled equipment :radio: in real cars :car:. To be precise, in their entire collection of cars. They are eager to create a kind of drag-racing competition to discover which car is the fastest.
Each radio controller has an HTTP-compatible interface. It lets you start or stop the engine of the car and, of course, enable "driving" mode.
Your task is to create a [SPA](https://en.wikipedia.org/wiki/Single-page_application) to manage the collection of cars, operate their engines, and show race statistics.

Previously, the development of this application was started (and almost finished) by a freelance developer named Mikhama. However, his laptop :computer: was stolen by bad guys. Unfortunately, we don't have any sources for the UI :disappointed:. Fortunately, he had recorded some [demo](https://youtu.be/aLjibbo9spo). In addition, he had stored the server mock in his [repo](https://github.com/mikhama/async-race-api).
We found in the latest news that a new company called "The Fast and the Furious" announced the release of a new product that will really blow people's minds. There isn't a lot of information about this product. All we know is that it's about "easier car management than you can imagine." It's exactly what our thieves :supervillain: are up to. They're going to release their product in two weeks. But we can't allow them to do that. We must be first.

What are you waiting for? Let's start coding!

## 🎯 Objectives

- **Create a Single Page Application (SPA)**: Manage a collection of cars, operate their engines, and showcase race statistics in an engaging, interactive SPA.
- **Revive the Project**: Drawing inspiration from a demo video and a server mock, reconstruct the UI and breathe life back into this ambitious project.
- **Outpace the Competition**: Implement the project with speed and efficiency, ensuring we launch before our rivals, showcasing our innovative solution to car management and racing competitions.

## 🚗 Functional Requirements

### Basic Structure

- Two main views: "Garage" and "Winners."
- Persistent state of the user interface between switches, maintaining user input and pagination.
- The race condition when switching between views can be handled according to your preference (the race can be reset, continue, or stop). The main thing is to handle it correctly.

### Garage View

- Name of view ("Garage")
- Car creation and editing panel.
  - Field for entering the name (creating a car).
  - Color picker (creating a car).
  - Field for entering the name (editing a car).
  - Color picker (editing a car).
  - (Or you can use only one field and picker for both).
- Race control panel.
  - Race start and reset buttons.
  - Button for creating 100 random cars.
- Garage section.
  - Cars sections.
    - Car control panel.
      - Button to start and stop a single race.
      - Buttons for selecting and deleting a car.
    - Car's name.
    - Race track.
  - The number of all cars in the garage.
  - Pagination to display cars (7 per page).

### Winners View

- Name of view ("Winners")
- Winners table, with the following columns:
  - Car number.
  - Car icon.
  - Name.
  - Number of wins.
  - Best time.
- Pagination to display cars (10 per page).

### Race

- Adaptive animations that work on screens as small as 500px.
- Winner banner. Shown at the end of the race, in case there is a winner. 
- During a running race, navigation through the application and manipulations with cars should be handled. You can manage this at your discretion, but the work must be correct.
*Example: The race is started and we are trying to remove a car. Possible solutions:*
  - *Block the remove button until the end of the race.*
  - *Stop the race and remove the car.*


## 📜 Non-functional Requirements

- **Framework Usage**: Development must utilize either React v18+ or Angular v17+.
- **State Manager**: When using React v18+ it is mandatory to use a state manager (Redux, Redux toolkit, MobX or other). React.Context can also be used, but is not recommended.
- **TypeScript Mandatory**: Strong typing enforced throughout. TypeScript `strict` mode must be enabled, and the `noImplicitAny` flag set to `true` to ensure no implicit `any` types are used.
- **Modular Architecture**: Clear separation of concerns between API interaction, UI rendering, and state management.
- **SPA Implementation**: All content must be generated using TypeScript with strict type checking.
- **Code Quality**: Adherence to Airbnb's ESLint configuration, with functions limited to 40 lines and avoidance of magic numbers/strings. The `tsconfig.json` must be configured to enforce strict typing principles.
- **UI Design**: The design is completely up to you. In this project, we care about the quality of the code and the fulfillment of other functional and non-functional requirements.

- These criteria emphasize the importance of clean code, proper architecture, and adherence to modern development practices. Intreviewers will use these guidelines to assess the technical execution and overall quality of the project.

## 🛠️ Technical Implementation

- Implement [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations for cars using the provided server mock.
- Design UI elements for car management and race controls.
- Utilize fetch for server communication, and handle promises for asynchronous tasks.
- Create animations for car movements using TypeScript and CSS.

## Requirements to commits and repo

### Commit Guidelines

- Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) format.
- Use lowercase for commit types (`init`, `feat`, `fix`, `refactor`, `docs`, etc.).
- Write in present tense (e.g., "add feature") and imperative mood (e.g., "move cursor to...").

#### Commit Examples

- `init:` Start a project/task (e.g., `init: start youtube-task`).
- `feat:` Introduce new features (e.g., `feat: add zoom support`).
- `fix:` Correct bugs in existing features (e.g., `fix: correct data loading`).
- `refactor:` Improve the code without altering functionality (e.g., `refactor: rename vars`).
- `docs:` Update documentation (e.g., `docs: update readme`).

### README.md

When your solution is implemented, please include the checklist below in the `README.md`. Check all implemented features, then calculate your score and put it at the top of the `README.md`.

Also, please deploy the UI to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or a similar service, and put the link at the top of the `README.md` (alone with the calculated score).

## Checklist ___/400 pts


## 🚀 UI Deployment

- [ ] **Deployment Platform:** Successfully deploy the UI on one of the following platforms: GitHub Pages, Netlify, Vercel, Cloudflare Pages, or a similar service.

## ✅ Requirements to Commits and Repository

- [ ] **Commit guidelines compliance:** Ensure that all commits follow the specified commit guidelines, thereby promoting a clear and consistent commit history. This includes using meaningful commit messages that accurately describe the changes made.

- [ ] **Checklist included in README.md:** Include the project's checklist in the README.md file. Mark all implemented features to provide a clear overview of the project's completion status.

- [ ] **Score calculation:** Use this checklist to calculate your score. Check all implemented features, then calculate your score and put it at the top of the `README.md`.

- [ ] **UI Deployment link in README.md**: Place the link to the deployed UI at the top of the README.md file, alongside the calculated score.

## Basic Structure (80 points)

- [ ] **Two Views (10 points):** Implement two primary views: "Garage" and "Winners".
- [ ] **Garage View Content (30 points):** The "Garage" view must display:
  - [ ] Name of view
  - [ ] Car creation and editing panel
  - [ ] Race control panel
  - [ ] Garage section
- [ ] **Winners View Content (10 points):** The "Winners" view should display:
  - [ ] Name of view ("Winners")
  - [ ] Winners table
  - [ ] Pagination
- [ ] **Persistent State (30 points):** Ensure the view state remains consistent when navigating between views. This includes preserving page numbers and input states. For example, page number shouldn't be reset, input controls should contain that they contained before switching, etc.

## Garage View (90 points)

- [ ] **Car Creation And Editing Panel. CRUD Operations (20 points):** Enable users to create, update, and delete cars. A car has two attributes: "name" and "color". Empty and too long names should be handled. For "delete"-operation car should be deleted from "garage" table as well as from "winners".
- [ ] **Color Selection (10 points):** Allow color selection from an RGB palette ([like here](https://colorspire.com/rgb-color-wheel/)), displaying the selected color on the car's image along with its name.
- [ ] **Random Car Creation (20 points):** There should be a button to create random cars (100 cars per click). Name should be assembled from two random parts, for example "Tesla" + "Model S", or "Ford" + "Mustang" (At least 10 different names for each part). Color should be also generated randomly.
- [ ] **Car Management Buttons (10 points):** Provide buttons near each car's image for updating its attributes or deleting it.
- [ ] **Pagination (10 points):** Implement pagination for the "Garage" view, displaying 7 cars per page.
- [ ] **EXTRA POINTS (20 points):**
  - [ ] **Empty Garage** Handle empty garage with user friendly message "No Cars" or something like this. Do it at your discretion.
  - [ ] **Empty Garage Page** If you remove the last one car on the page, you should be moved on the previous page, to hide the empty one.


## 🏆 Winners View (50 points)

- [ ] **Display Winners (15 points):** After some car wins it should be displayed at the "Winners view" table.
- [ ] **Pagination for Winners (10 points):** Implement pagination for the "Winners" view, with 10 winners per page.
- [ ] **Winners Table (15 points):** The table should include columns for the car's №, image, name, number of wins, and best time in seconds. If the same car wins more than once the number of wins should be incremented while best time should be saved only if it's better than the stored one.
- [ ] **Sorting Functionality (10 points):** Allow users to sort the table by the number of wins and best time, in ascending or descending order.

## 🚗 Race (170 points)

- [ ] **Start Engine Animation (20 points):** User clicks to the engine start button near each car -> UI is waiting for car's velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.
- [ ] **Stop Engine Animation (20 points):** User clicks to the engine stop button near each car -> UI is waiting for answer for stopping engine -> car returned to it's initial place.
- [ ] **Responsive Animation (30 points):** Ensure car animations are fluid and responsive on screens as small as 500px.
- [ ] **Start Race Button (10 points):** Start button should start the race for all cars on the current page.
- [ ] **Reset Race Button (15 points):** Reset button should return all cars to their starting positions.
- [ ] **Winner Announcement (5 points):** After some car finishes first user should see the message contains car's name that shows which one has won.
- [ ] **Button States (20 points):** Start engine button should be disabled in case car is already in driving mode. As well as stop engine button should be disabled when car is on it's initial place.
- [ ] **Actions during the race (50 points):** Control over actions during a running race. Such as, deleting or editing a car, changing a page or view. Adding new cars. You can block buttons and stop the race. The main thing is to ensure predictable operation of the application.

## 🎨 Prettier and ESLint Configuration (10 points)

- [ ] **Prettier Setup (5 points):** Prettier is correctly set up with two scripts in `package.json`: `format` for auto-formatting and `ci:format` for checking issues.
- [ ] **ESLint Configuration (5 points):** ESLint is configured with the [Airbnb style guide](https://www.npmjs.com/package/eslint-config-airbnb). A `lint` script in `package.json` runs ESLint checks. Configuration files should reflect strict TypeScript settings as per `tsconfig.json`.

## 🌟 Overall Code Quality. (100 points) *Skip during self-check*

- [ ] **(Up to 100 points)** Discretionary points awarded by the reviewer based on overall code quality, readability
  - [ ] **Modular Design** The application should be clearly divided into logical modules or layers, such as API interaction, UI rendering, and state management.
  - [ ] **Function Modularization** Code should be organized into small, clearly named functions with specific purposes. Common functions moved to helper. Each function should not exceed 40 lines.
  - [ ] **Code Duplication and Magic Numbers** Minimize code duplication and maintain readability by avoiding the use of magic numbers or strings throughout the codebase.
  - [ ] **Readability** Clear, readable code. Understandable names of variables, functions, modules
  - [ ] **Extra features** *Example for React: Custom hooks, Portals, React Router* 

## 🔄 Evaluation Rules

- **[@Candidate]** The UI should be deployed to gh-pages, Netlify, or a similar service, and the link should be included in the `README.md`.
- **[@Reviewer]** You should clone the [server repository](https://github.com/mikhama/async-race-api.git) and keep the server running during the functionality review.
- **[@Reviewer]** Test task should be evaluated based on both functional and non-functional requirements.
- **[@Candidate]** Pay close attention to details in the implementation, as bugs and deviations from the requirements can impact your score.
- **[@Reviewer]** If bugs are found, the following deductions can be applied:
  - (**-30**) Major bug (implemented functionality works but breaks down after certain manipulations, with unexpected errors in the browser's console).
  - (**-10**) Minor bug (implemented functionality works but behaves inconsistently after certain manipulations, such as a button not becoming enabled after changing some state, with no errors in the browser's console).
  - **Note:** If you repeatedly press the "start engine button" then the "stop engine button" or the "start race button" then the "reset race button" and see a "404" or "429" error, this is not considered a bug.

## FAQ

#### Question: How do I integrate the mock server with my GitHub repository?

First, you'll need to clone the mock server's repository to your local machine and make sure it's up and running. Next, your task is to develop the user interface (UI) in a separate repository of your own. This setup requires the server to be active in your local environment (localhost), eliminating the need for backend deployment. It's important to understand that changes to the backend are not allowed, as the evaluation process involves using an unmodified version of the backend, specifically the one originally provided.

#### Question: Is it possible to use any UI component libraries like Ant Design?

Feel free to use any library

#### Question about sorting the winners. The page displays 10 entries. Should the sorting be applied to just these 10 entries, or to the entire array of winners?

The entire array - that's the whole idea, to use query string parameters to request a portion of the data (including the sorted ones). The JSON-server API handles this perfectly.

## Communication. Telegram channel

We have created a Telegram channel to give you an opportunity to discuss the task, ask questions, etc.
Join - https://t.me/+KuU8bd4-gcYwOTUy

## 📚 Resources

- [Server Mock Repo](https://github.com/mikhama/async-race-api)
- [Demo Video](https://youtu.be/aLjibbo9spo)
