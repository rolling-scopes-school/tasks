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

- **No Libraries/Frameworks**: The use of libraries or frameworks such as JQuery, React, Angular, Lodash, Material Design, etc., is strictly prohibited.

  - Bootstrap CSS is permitted for **styling purposes** only.
  - CSS modules, CSS Preprocessors (`Sass`, `Less`, `Stylus`, `PostCSS`, etc.), CSS in JS libraries (`tailwindcss`, `jss`, `emotion/css`, etc.), `clsx/classnames` package are allowed.

- **TypeScript Mandatory**: The application must be developed using TypeScript. All method input and output parameters must be typed accurately, and the use of explicit or implicit "any" type, type assertions (`foo as BarType`) and non-nullability assertions (`y!`) is not allowed.
- **Modular Architecture**: Clear separation of concerns between API interaction, UI rendering, and state management.
- **SPA Implementation**: Entire content generated via TypeScript, utilizing Vite/Webpack or similar for bundling.
- **Code Quality**: Adhere to the [Unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) ESLint configuration, with functions limited to 40 lines and avoidance of magic numbers/strings.

## 🛠️ Technical Implementation

- Implement CRUD operations for cars using the provided server mock.
- Design UI elements for car management and race controls.
- Utilize fetch for server communication, and handle promises for asynchronous tasks.
- Create animations for car movements using JavaScript and CSS.
- Ensure responsiveness and compatibility across different devices and browsers.

## 📚 Resources

- [Server Mock Repo](https://github.com/mikhama/async-race-api)
- [Demo Video](https://youtu.be/sTXtlBLh-Ts)
- [Color Palette Tool](https://www.colorspire.com/rgb-color-wheel/)
- [SPA Wikipedia](https://en.wikipedia.org/wiki/Single-page_application)
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
  - (**-30**) Major bug (implemented functionality works, but after some manipulations it breaks down, and there are some unexpected errors in the browsers' console).
  - (**-10**) Minor bug (implemented functionality works, but after some manipulations it behavior changes, like button does not become enabled after changing some state, but there are not any errors in the browser's console).
- **Note:** When you push the "start engine button" and then the "stop engine button" or the "start race button" and "reset race button" and repeating this operation again and again as a mad man sometimes you can see an error with the status codes "404" or "429". Officially it is not a bug.

## Mentor's review

- Max score: **190**.
- Task should be scored in accordance with [Non-functional requirements](./non-functional-requirements.md). You can find score points near each requirement.

## FAQ

You can find answers and questions in this document:
https://docs.google.com/spreadsheets/d/1KrObgPHt6guthtswtB8AKhrLpRZ_Kf8H-3V63VDCBGw/edit?usp=sharing

Link to Q&A live-stream recording:
https://www.youtube.com/watch?v=HHEMeRt42QY
