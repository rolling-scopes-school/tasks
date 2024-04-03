# Welcome to the test task!

Below is a description of the test task. Please read it carefully. The ability to follow the requirements is important to us.
You should complete the task before proceeding to the recruiter's interview and subsequent technical interview.
During the technical interview, the interviewer may discuss your solution.

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

- Two main views: "Garage" and "Winners", each with their name, page number, and a count of items in the database.
- Persistent view state between switches, maintaining user input and pagination.

### Garage View

- [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations for cars with "name" and "color" attributes.
- Color selection from an RGB palette with a preview of the car in the chosen color.
- Pagination to display cars (7 per page) and a feature to generate 100 random cars at once.

### Car Animation

- Start/stop engine buttons with corresponding animations and handling of engine states.
- Adaptive animations that work on screens as small as 500px.

### Race Animation

- A button to start a race for all cars on the current page.
- A reset button to return all cars to their starting positions.
- Display the winner's name upon race completion.

### Winners View

- Display winning cars with their image, name, number of wins, and best time.
- Pagination and sorting capabilities by wins and best times.

## 📜 Non-functional Requirements

- **Framework Usage**: Development must utilize either React v18+ or Angular v17+.
- **TypeScript Mandatory**: Strong typing enforced throughout. TypeScript `strict` mode must be enabled, and the `noImplicitAny` flag set to `true` to ensure no implicit `any` types are used.
- **Modular Architecture**: Clear separation of concerns between API interaction, UI rendering, and state management.
- **SPA Implementation**: All content must be generated using TypeScript with strict type checking.
- **Code Quality**: Adherence to Airbnb's ESLint configuration, with functions limited to 40 lines and avoidance of magic numbers/strings. The `tsconfig.json` must be configured to enforce strict typing principles.

- These criteria emphasize the importance of clean code, proper architecture, and adherence to modern development practices. Intreviewers will use these guidelines to assess the technical execution and overall quality of the project.

## 🛠️ Technical Implementation

- Implement [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations for cars using the provided server mock.
- Design UI elements for car management and race controls.
- Utilize fetch for server communication, and handle promises for asynchronous tasks.
- Create animations for car movements using TypeScript and CSS.
- Ensure responsiveness and compatibility across different devices and browsers.

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

## Checklist

## 🚀 UI Deployment

- [ ] **Deployment Platform:** Successfully deploy the UI on one of the following platforms: GitHub Pages, Netlify, Vercel, Cloudflare Pages, or a similar service.

## ✅ Requirements to Commits and Repository

- [ ] **Commit guidelines compliance:** Ensure that all commits follow the specified commit guidelines, thereby promoting a clear and consistent commit history. This includes using meaningful commit messages that accurately describe the changes made.

- [ ] **Checklist included in README.md:** Include the project's checklist in the README.md file. Mark all implemented features to provide a clear overview of the project's completion status.

- [ ] **Score calculation:** Use this checklist to calculate your score. Check all implemented features, then calculate your score and put it at the top of the `README.md`.

- [ ] **UI Deployment link in README.md**: Place the link to the deployed UI at the top of the README.md file, alongside the calculated score.

## 🏁 Basic Structure (85 points)

### 1. View Configuration (30 points)

- [ ] **Two Views (10 points):** Implement two primary views: "Garage" and "Winners".
- [ ] **Garage View Content (5 points):** The "Garage" view must display its name, the current page number, and the total number of cars in the database (how many car user has in his garage).
- [ ] **Winners View Content (5 points):** The "Winners" view should similarly display its name, the current page number, and the total count of records in the database (how many records the winners table contains).
- [ ] **Persistent State (10 points):** Ensure the view state remains consistent when navigating between views. This includes preserving page numbers and input states. For example, page number shouldn't be reset, input controls should contain that they contained before switching, etc.

### 2. Garage View Functionality (55 points)

#### Car Management (45 points)

- [ ] **CRUD Operations (20 points):** Enable users to create, update, and delete cars, and display the list of cars. A car has two attributes: "name" and "color". For "delete"-operation car should be deleted from "garage" table as well as from "winners".
- [ ] **Color Selection (10 points):** Allow color selection from an RGB palette ([like here](https://colorspire.com/rgb-color-wheel/)), displaying the selected color on the car's image along with its name.
- [ ] **Management Buttons (5 points):** Provide buttons near each car's image for updating its attributes or deleting it.
- [ ] **Pagination (10 points):** Implement pagination for the "Garage" view, displaying 7 cars per page.

#### Car Generation (10 points)

- [ ] **Random Car Creation (10 points):** There should be a button to create random cars (100 cars per click). Name should be assembled from two random parts, for example "Tesla" + "Model S", or "Ford" + "Mustang" (At least 10 different names for each part). Color should be also generated randomly.

## 🚗 Car Animation (50 points)

- [ ] **Engine Control Buttons (10 points):** Place start/stop engine buttons near each car's image.
- [ ] **Start Engine Animation (20 points):** User clicks to the engine start button -> UI is waiting for car's velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.
- [ ] **Stop Engine Animation (10 points):** User clicks to the engine stop button -> UI is waiting for answer for stopping engine -> car returned to it's initial place.
- [ ] **Button States (5 points):** Start engine button should be disabled in case car is already in driving mode. As well as stop engine button should be disabled when car is on it's initial place.
- [ ] **Responsive Animation (5 points):** Ensure car animations are fluid and responsive on screens as small as 500px.

## 🏎️ Race Animation (35 points)

- [ ] **Start Race Button (15 points):** Implement a button to start the race for all cars on the current page.
- [ ] **Reset Race Button (10 points):** Create a button to reset the race, returning all cars to their starting positions.
- [ ] **Winner Announcement (10 points):** After some car finishes first user should see the message contains car's name that shows which one has won.

## 🏆 Winners View (45 points)

- [ ] **Display Winners (15 points):** After some car wins it should be displayed at the "Winners view" table.
- [ ] **Pagination for Winners (10 points):** Implement pagination for the "Winners" view, with 10 winners per page.
- [ ] **Winners Table (10 points):** The table should include columns for the car's №, image, name, number of wins, and best time in seconds. If the same car wins more than once the number of wins should be incremented while best time should be saved only if it's better than the stored one.
- [ ] **Sorting Functionality (10 points):** Allow users to sort the table by the number of wins and best time, in ascending or descending order.

## 🏗️ Application Architecture (40 points)

- [ ] **Modular Design (40 points):** The application should be clearly divided into logical modules or layers, such as API interaction, UI rendering, and state management. Consultation with a mentor on the architecture before implementation is advised.

## 📜 Dynamic Content Generation (30 points)

- [ ] **JavaScript-Generated HTML Content (30 points):** All HTML content must be dynamically generated using JavaScript, with the `<body>` tag containing only a single `<script>` tag.

## 🌐 Single Page Application (25 points)

- [ ] **SPA Implementation (25 points):** The application must be a Single Page Application (SPA) using either React v18+ or Angular v17+. All content must be generated using TypeScript with `strict` and `noImplicitAny` settings enabled in `tsconfig.json`, ensuring seamless user experience without page reloads during navigation.

## 📦 Bundling and Tooling (20 points)

- [ ] **Use of Webpack or Similar (20 points):** Implement Webpack or another bundling tool to compile the project into a minimal set of files, ideally one HTML file, one JS file, and one CSS file. Ensure that the configuration enforces TypeScript strict type checking.

## ✅ Code Quality and Standards (15 points)

- [ ] **Eslint with Airbnb Style Guide (15 points):** Code must adhere to the Airbnb ESLint configuration to maintain code quality, as outlined in the [Airbnb style guide](https://www.npmjs.com/package/eslint-config-airbnb). Specific rules may be adjusted only with mentor approval, and there should be no ESLint errors or warnings.

## 📏 Code Organization and Efficiency (15 points)

- [ ] **Function Modularization (10 points):** Code should be organized into small, clearly named functions with specific purposes. Each function should not exceed 40 lines, reflecting strong typing and avoiding the use of magic numbers or strings.
- [ ] **Code Duplication and Magic Numbers (5 points):** Minimize code duplication and maintain readability by avoiding the use of magic numbers or strings throughout the codebase.

## 🎨 Prettier and ESLint Configuration (10 points)

- [ ] **Prettier Setup (5 points):** Prettier is correctly set up with two scripts in `package.json`: `format` for auto-formatting and `ci:format` for checking issues.
- [ ] **ESLint Configuration (5 points):** ESLint is configured with the [Airbnb style guide](https://www.npmjs.com/package/eslint-config-airbnb). A `lint` script in `package.json` runs ESLint checks. Configuration files should reflect strict TypeScript settings as per `tsconfig.json`.

## 🌟 Overall Code Quality (35 points)

- [ ] **(Up to 35 points)** Discretionary points awarded by the reviewer based on overall code quality, readability

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
