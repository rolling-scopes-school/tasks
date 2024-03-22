# Welcome to the test task!
Below is a description of the test task. Please read it carefully. The ability to follow the requirements is important to us.
You should complete the task before proceeding to the recruiter's interview and subsequent technical interview.
During the technical interview, the interviewer may discuss your solution. 

## Task "Async Race"

Your customer has an idea to spend his money. He has hired some engineers who installed radio-controlled equipment :radio: in real cars :car:, to be precise, all of his collection of cars. He is eager to create a kind of drag-racing competition in order to discover which car is the fastest.
Each radio controller has an HTTP-compatible interface. It lets you start or stop the engine of the car and, of course, enable "driving" mode.
Your task is to create a [SPA](https://en.wikipedia.org/wiki/Single-page_application) to manage the collection of cars, operate their engines, and show race statistics.
Previously, development of this application had been started by a Belarusian developer named Dzmitry (and was almost finished). However, his laptop :computer: was stolen by bad guys. Unfortunately, we don't have any sources of UI :disappointed:. Fortunately, he had recorded some [demo](https://youtu.be/sTXtlBLh-Ts) beforehand. Additionally, he had stored the server mock in his [repo](https://github.com/mikhama/async-race-api).
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

- CRUD operations for cars with "name" and "color" attributes.
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

- **Framework Usage**:  Development must utilize either React or Angular.
- **TypeScript Mandatory**: Strong typing throughout, with no use of "any".
- **Modular Architecture**: Clear separation of concerns between API interaction, UI rendering, and state management.
- **SPA Implementation**: All content must be generated using TypeScript.
- **Code Quality**: Adherence to Airbnb's ESLint configuration, with functions limited to 40 lines and avoidance of magic numbers/strings.

- These criteria emphasize the importance of clean code, proper architecture, and adherence to modern development practices. Intreviewers will use these guidelines to assess the technical execution and overall quality of the project.

## 🛠️ Technical Implementation

- Implement CRUD operations for cars using the provided server mock.
- Design UI elements for car management and race controls.
- Utilize fetch for server communication, and handle promises for asynchronous tasks.
- Create animations for car movements using TypeScript and CSS.
- Ensure responsiveness and compatibility across different devices and browsers.

## 📚 Resources

- [Server Mock Repo](https://github.com/mikhama/async-race-api)
- [Demo Video](https://youtu.be/sTXtlBLh-Ts)
- [Color Palette Tool](https://www.colorspire.com/rgb-color-wheel/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## 🔄 Evaluation

- Your work will be evaluated based on functional and non-functional requirements.
- The UI must be deployed for review, with a server instance running for functionality tests.
- Pay close attention to details in the implementation, as bugs and deviations from the requirements can impact your score.

## Requirements to commits, PR and repo

[Stage 2 requirements](https://docs.rs.school/#/en/pull-request-review-process)
NB: for mentor's check - submit link to PR, for cross-check - submit link to deploy.

## Cross-check:

- Max score: **215**.
- UI should be deployed to gh-pages, netlify or some similar service and the link shared via RS App.
- Reviewer should clone [repo with a server](https://github.com/mikhama/async-race-api.git) and keep the server running during functionality review.
- Task should be scored in accordance with [Functional requirements](./functional-requirements.md). You can find score points near each requirement.
- If some bugs were found then the next fees should be withdrawn:
  - (**-30**) Major bag (implemented functionality works, but after some manipulations it breaks down, and there are some unexpected errors in the browsers' console).
  - (**-10**) Minor bag (implemented functionality works, but after some manipulations it behavior changes, like button does not become enabled after changing some state, but there are not any errors in the browser's console).
- **Note:** When you push the "start engine button" and then the "stop engine button" or the "start race button" and "reset race button" and repeating this operation again and again as a mad man sometimes you can see an error with the status codes "404" or "429". Officially it is not a bug.

# Evaluation Criteria for "Async Race"

This document outlines the detailed criteria for the evaluation of the "Async Race" Single Page Application (SPA) development task. Your challenge is to create an engaging SPA that allows users to manage a collection of cars, operate their engines, and view race statistics.

## Total Points: 215

## 🏁 Basic Structure (85 points)

### 1. View Configuration (30 points)

- **Two Views (10 points):** Implement two primary views: "Garage" and "Winners".
- **Garage View Content (5 points):** The "Garage" view must display its name, the current page number, and the total number of cars in the database (how many car user has in his garage).
- **Winners View Content (5 points):** The "Winners" view should similarly display its name, the current page number, and the total count of records in the database (how many records the winners table contains).
- **Persistent State (10 points):** Ensure the view state remains consistent when navigating between views. This includes preserving page numbers and input states. For example, page number shouldn't be reset, input controls should contain that they contained before switching, etc.

### 2. Garage View Functionality (55 points)

#### Car Management (45 points)

- **CRUD Operations (20 points):** Enable users to create, update, and delete cars, and display the list of cars. A car has two attributes: "name" and "color". For "delete"-operation car should be deleted from "garage" table as well as from "winners".
- **Color Selection (10 points):** Allow color selection from an RGB palette ([like here](https://colorspire.com/rgb-color-wheel/)), displaying the selected color on the car's image along with its name.
- **Management Buttons (5 points):** Provide buttons near each car's image for updating its attributes or deleting it.
- **Pagination (10 points):** Implement pagination for the "Garage" view, displaying 7 cars per page.

#### Car Generation (10 points)

- **Random Car Creation (10 points):** There should be a button to create random cars (100 cars per click). Name should be assembled from two random parts, for example "Tesla" + "Model S", or "Ford" + "Mustang" (At least 10 different names for each part). Color should be also generated randomly.

## 🚗 Car Animation (50 points)

- **Engine Control Buttons (10 points):** Place start/stop engine buttons near each car's image.
- **Start Engine Animation (20 points):** User clicks to the engine start button -> UI is waiting for car's velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.
- **Stop Engine Animation (10 points):** User clicks to the engine stop button -> UI is waiting for answer for stopping engine -> car returned to it's initial place.
- **Button States (5 points):** Start engine button should be disabled in case car is already in driving mode. As well as stop engine button should be disabled when car is on it's initial place.
- **Responsive Animation (5 points):** Ensure car animations are fluid and responsive on screens as small as 500px.

## 🏎️ Race Animation (35 points)

- **Start Race Button (15 points):** Implement a button to start the race for all cars on the current page.
- **Reset Race Button (10 points):** Create a button to reset the race, returning all cars to their starting positions.
- **Winner Announcement (10 points):** After some car finishes first user should see the message contains car's name that shows which one has won.

## 🏆 Winners View (45 points)

- **Display Winners (15 points):** After some car wins it should be displayed at the "Winners view" table.
- **Pagination for Winners (10 points):** Implement pagination for the "Winners" view, with 10 winners per page.
- **Winners Table (10 points):** The table should include columns for the car's №, image, name, number of wins, and best time in seconds. If the same car wins more than once the number of wins should be incremented while best time should be saved only if it's better than the stored one.
- **Sorting Functionality (10 points):** Allow users to sort the table by the number of wins and best time, in ascending or descending order.

These criteria are designed to assess your application's functionality, user interface, and interaction with a server mock. Good luck with your development!

# Mentor Evaluation Criteria for "Async Race" SPA Development

Mentors will evaluate the "Async Race" Single Page Application (SPA) based on the following non-functional requirements. These criteria focus on the application architecture, coding standards, and best practices. The total potential deduction for not meeting these requirements is **-200%**, indicating the critical importance of adherence to these standards.

## Total Points: 190

## 🏗️ Application Architecture (40 points)

- **Modular Design (40 points):** The application should be clearly divided into logical modules or layers, such as API interaction, UI rendering, and state management. Consultation with a mentor on the architecture before implementation is advised.

## 📜 Dynamic Content Generation (30 points)

- **JavaScript-Generated HTML Content (30 points):** All HTML content must be dynamically generated using JavaScript, with the `<body>` tag containing only a single `<script>` tag.

## 🌐 Single Page Application (25 points)

- **SPA Implementation (25 points):** The application must be a Single Page Application (SPA), ensuring seamless user experience without page reloads during navigation.

## 📦 Bundling and Tooling (20 points)

- **Use of Webpack or Similar (20 points):** Implement Webpack or another bundling tool to compile the project into a minimal set of files, ideally one HTML file, one JS file, and one CSS file.

## ✅ Code Quality and Standards (15 points)

- **Eslint with Airbnb Style Guide (15 points):** Adhere to the Airbnb ESLint configuration to maintain code quality. Specific rules may be adjusted only with mentor approval, and there should be no ESLint errors or warnings.

## 📏 Code Organization and Efficiency (15 points)

- **Function Modularization (10 points):** Code should be organized into small, clearly named functions with specific purposes. Each function should not exceed 40 lines.
- **Code Duplication and Magic Numbers (5 points):** Minimize code duplication and avoid the use of magic numbers or strings throughout the codebase.

## 🎨 Prettier and ESLint Configuration (10 points)

- **(5 points)** Prettier is correctly set up with two scripts in `package.json`: `format` for auto-formatting and `ci:format` for checking issues.
- **(5 points)** ESLint is configured with the [Airbnb style guide](https://github.com/airbnb/javascript). A `lint` script in `package.json` runs ESLint checks.

## 🌟 Overall Code Quality (35 points)

- **(Up to 35 points)** Discretionary points awarded by the mentor based on overall code quality, readability


## FAQ

You can find answers and questions in this document:
https://docs.google.com/spreadsheets/d/1KrObgPHt6guthtswtB8AKhrLpRZ_Kf8H-3V63VDCBGw/edit?usp=sharing

Link to Q&A live-stream recording:
https://www.youtube.com/watch?v=HHEMeRt42QY
