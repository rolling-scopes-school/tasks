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
