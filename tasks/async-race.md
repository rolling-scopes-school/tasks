# async-race

| Folder name   | Branch name   |
| ------------- | ------------- |
| async-race    | async-race    |

Date of the start and the deadline you can find in [the schedule](https://docs.google.com/spreadsheets/d/1oM2O8DtjC0HodB3j7hcIResaWBw8P18tXkOl1ymelvE/edit#gid=1646898206)

## Task "Async Race"

Your customer has an idea to spend his money. He has hired some engineers who installed some radio-controlled equipment :radio: to real cars :car:. To the all his collection of cars to be precise. He is eager to create kind of drag-racing competition in order to discover which car fastest. 

Each radio-contorller has an HTTP-compatible interface. It's let you to start or stop engine of the car and of course enable "driving" mode.

Your task is to create [SPA](https://en.wikipedia.org/wiki/Single-page_application) to manage the collection of the cars, operate its engines, and show races statistics.

Previously development of this application has been started by some belarusian developer Dzmitry (and was almost finished). But his laptop :computer: was stolen by bad guys. And we don't have any sources of UI 😞. But fortunately he has recorded some [demo](https://youtu.be/sTXtlBLh-Ts) before. And also he has stored the server-mock in his [repo](https://github.com/mikhama/async-race-api).

We have found in the latest news that a new company called "The Fast and the Furious" announced about releasing a new product that will really blow people's minds. There is no a lot of info about this product. All we know it's about "easier cars' management that you can imagine". It's exactly our thiefs :suspect:. They're going to release their product in two weeks. But we can't allow them to do that. We must be first.

What are you waiting for? Let's coding!

## Functional requirements
1. Basic structure:
   - (**+5**) There should be two views on the site: "Garage" and "Winners".
   - (**+5**) "Garage" view should contain its name, page number, and the full amount of items in the database (how many car user has in his garage).
   - (**+5**) "Winners" view should contain its name, page number, and the full amount of items in the database (how many records the winners table contains).
   - (**+10**) View state should be saved when user switches from one view to another. For example, page number shouldn't be reset, input controls should contain that they contained before switching, etc.
2. "Garage" view:
   - (**+15**) User should be able to create, update, delete a car, and see the list of the cars. Car has only two attributes: "name" and "color". For "delete"-operation car should be deleted from "garage" table as well as from "winners".
   - (**+10**) User should be able to select any color from an RGB-Palete [like here](https://www.colorspire.com/rgb-color-wheel/) and see the picture of the car colored with the color selected and car's name.
   - (**+5**) Near the car's picture should be buttons to update its attributes or delete it.
   - (**+10**) There should be pagination on the "Garage" view (7 cars per one page).
   - (**+10**) There should be a button to create random cars (100 cars per click). Name should be assembled from two random parts, for example "Tesla" + "Model S", or "Ford" + "Mustang" (At least 10 different names for each part). Color should be also generated randomly.
3. Car animation:
   - (**+5**) Near the car's picture should be buttons for starting / stoping the car engine.
   - (**+20**) User clicks to the engine start button -> UI is waiting for car's velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.
   - (**+5**) User clicks to the engine stop button -> UI is waiting for answer for stopping engine -> car returned to it's initial place.
   - (**+5**) Start engine button should be disabled in case car is already in driving mode. As well as stop engine button should be disabled when car is on it's initial place.
   - (**+15**) Car animation should work fine on any screen (smallest screen size is 500px).
4. Race animation:
   - (**+10**) There should be a button to start race. After user clicks this button all the cars on the current page start driving.
   - (**+10**) There should be a button to reset race. After user clicks this button all the cars return to it's initial places.
   - (**+10**) After some car finishes first user should see the message contains car's name that shows which one has won.
5. "Winners" view:
   - (**+10**) After some car wins it should be displayed at the "Winners view" table.
   - (**+5**) There should be pagination (10 winners per one page).
   - (**+10**) Table should include the next culumns: "№", "Image of the car", "Name of the car", "Wins number", "Best time in seconds" (names of the columns can differ). If the same car wins more than once the number of wins should be incremented while best time should be saved only if it's better than the stored one.
   - (**+10**) User should be able to sort cars by wins number and by best time (ASC, DESC).
  
## Non-functional requirements
- (**-100%** for not fulfillment) It's forbidden to use any libraries or frameworks, like JQuery, React, Angular, Lodash, Material Design, etc. But you can use CSS from Bootstrap (**CSS only!**) if you wish. **Note:** It may be allowed to use React or Angular, but only if you've already studied at previous RS-course and/or pretty understand how to work with a DOM Api (DOM modification, Event Delegation) and only after agrement with a mentor!
- (**-100%** for not fulfillment) Typescript must be used. Types of input and output parameters of all the methods must be described. Using type "any" is strictly forbidden.
- (**+40**) Application is divided to logical modules / layers. Like working with api it's separate module, as well as working with UI rendering, or working with an application state, etc. Better discuss architecture with a mentor before implementing.
- (**+30**) All the HTML-content is generated by JavaScript (body contains only one tag script inside).
- (**+25**) Application is SPA.
- (**+20**) Webpack or another bundler should be used. There should be one HTML-file, JS-file, and one CSS-file (or it can be embedded right in the HTML-file).
- (**+15**) Eslint with [Airbnb style guide](https://github.com/airbnb/javascript) should be used. Some paricular eslint-rules can be disabled or changed only after agrement with a mentor. There shouldn't be any eslint errors or warnings.
- (**+10**) Code divided to small functions with a clear names and purposes. Each function should be less or equal to 40 lines.
- (**+5**) There are not unnecessary code duplications.
- (**+5**) Code shouldn't contain magical numbers or strings.

## Requirements to commits, PR and repo
[Stage 2 requirements](https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md)

## Key skills
- Сommunication with a server (fetch, REST API)
- Async coding / Promises
- JS Animations
- DOM Api

----
## Cross-check:
- Max score: **190**.
- UI should be deployed to gh-pages, netlify or some similar service and the link shared via RS App.
- Reviewer should clone [repo with a server](https://github.com/mikhama/async-race-api.git) and keep the server running during functionality review.
- Task should be scored in accordance with [Functional requirements](https://github.com/rolling-scopes-school/async-race/blob/main/README.md#functional-requirements). You can find score points near each requirement.
- If some bugs were found then the next fees should be withdrawn:
  - (**-30**) Major bag (implemented functionality works, but after some manipulations it breaks down, and there are some unexpected errors in the browsers' console).
  - (**-10**) Minor bag (implemented functionality works, but after some manipulations it behavior changes, like button does not become enabled after changing some state, but there are not any errors in the browser's console).
- **Note:** When you push the "start engine button" and then the "stop engine button" and repeating this operation again and again as a mad man sometimes you can see an error with the status code "404". Officially it is not a bug.

## Mentor's review
- Max score: **150**.
- Task should be scored in accordance with [Non-functional requirements](https://github.com/rolling-scopes-school/async-race/blob/main/README.md#non-functional-requirements). You can find score points near each requirement.

## FAQ
You can find answers and questions in this document:
https://docs.google.com/spreadsheets/d/1KrObgPHt6guthtswtB8AKhrLpRZ_Kf8H-3V63VDCBGw/edit?usp=sharing

Link to Q&A live-stream recording:
https://www.youtube.com/watch?v=HHEMeRt42QY
