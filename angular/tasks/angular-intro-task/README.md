# Angular Intro: Film Collection

## Project Description

You will build **"Film Collection"** — a small movie catalog application using mock data. The goal is to get hands-on experience with core Angular concepts: components, routing, directives, pipes, and signals.

> **Important:** This project does **not use RxJS**. All reactivity is built exclusively with **Angular Signals**.

---

## Technical Requirements

- **Angular 20+** (latest stable version recommended)
- **Standalone components** (no NgModules)
- New control flow: `@if`, `@for`, `@switch`
- TypeScript strict mode
- No RxJS — only **Signals** for reactivity

---

## Mock Data

The application works with an array of **at least 10 films** defined in a separate file. Each film must contain: id, title, release year, genre, rating (0–10), duration in minutes, description, poster URL, and a favorite flag.

A ready-made mock data file can be downloaded here: [films.json](https://cdn.jsdelivr.net/gh/rolling-scopes-school/tasks@master/angular/tasks/angular-intro-task/films.json)

---

## User Scenario

### Common Layout

Every page of the application has the same structure:

- **Header** — contains the application title and navigation. Includes links to the home page and the "About" page. Navigation works without page reload.
- **Breadcrumbs** — show the user's current location in the application. For example: "Home", "Home > Film Title", "About". Clickable breadcrumb items serve as navigation links.
- **Content** — the main page content (changes depending on the route).
- **Footer** — contains the year, author name, and a link to GitHub.

Header, Breadcrumbs, and Footer are displayed on **every** page.

### Home Page (Catalog)

The user opens the application and lands on the home page.

- **All film cards** from the mock data are displayed on screen.
- Each card shows: poster, title, year, genre, rating.
- Above the card list there is a **search field**. When the page opens, focus is automatically set on it (via a custom autofocus directive).
- As the user types in the search field, the film list is **automatically filtered** by title — only films whose title contains the entered text remain.
- If no films match the query — a "Nothing found" message is displayed.
- Each card has an **"Add to favorites"** button. Clicking it toggles the film's favorite status.
- **Clicking on a card** (not the favorite button) navigates the user to that film's details page.

Breadcrumbs: **Home**

### Film Details Page

The user clicked on a film card and is now on the details page.

- Full film information is displayed: poster, title, year, genre, rating, duration (via a custom pipe), description.
- The film id is taken from the URL.
- There is a **"Back"** button to return to the film list.

Breadcrumbs: **Home** > **Film Title**

("Home" is a clickable link, "Film Title" is the current page and is not clickable.)

### Unknown Route

When navigating to a non-existent URL, the user is redirected to the home page (or a 404 page is shown).

---

## Service

Create a service for working with film data:

- Stores the film collection in a **signal**
- Provides access to all films
- Allows getting a film by id
- Allows toggling a film's favorite status
- Provides a computed list of favorite films
- Registered globally (singleton)

---

## Custom Directive

Create an **attribute directive** for autofocus:

- When the element appears in the DOM — automatically sets focus on it
- The directive must be **standalone**
- Must be applied to the search field on the home page

---

## Custom Pipe

Create a **pipe** that converts a number of minutes into a human-readable duration format:

- Hours only: `60` → `"1h"`
- Minutes only: `45` → `"45min"`
- Hours and minutes: `90` → `"1h 30min"`

The pipe must be **standalone** and used in the template of at least one component.

---

## Routing

- At least **2 routes**: film list, film details
- Navigation via `routerLink`
- Unknown route handling (wildcard)
- Film id is passed as a URL parameter

---

## Signals

All reactive data in the application is stored and processed via **Angular Signals**:

- Film collection in the service — `signal()`
- Favorites list — `computed()`
- Search string — `signal()`
- Filtered list — `computed()`
- Component interaction — `input()` / `output()`

---

## Evaluation

This task is **not graded**. However, completing it is a **mandatory prerequisite** for applying for a mentor. The mentor may use your solution to assess your skill level and decide whether to take you on for mentoring.

Below is a checklist to help you verify your work before submission.

### Components

- [ ] Film card accepts data via `input()`
- [ ] Film card notifies parent via `output()`
- [ ] Film list is rendered using `@for`
- [ ] Conditional rendering via `@if` ("Nothing found")
- [ ] Details page shows full film information
- [ ] Header, Breadcrumbs, and Footer are present on every page

### Routing

- [ ] At least 2 routes configured
- [ ] Navigation via `routerLink`
- [ ] URL parameter is correctly read on the details page
- [ ] Wildcard route is handled

### Directive

- [ ] Custom attribute directive created as standalone
- [ ] Sets focus on the element when it appears
- [ ] Applied to the search field

### Pipe

- [ ] Custom pipe created as standalone
- [ ] Converts minutes into a human-readable duration format
- [ ] Used in the template of at least one component

### Service and Signals

- [ ] Service is registered globally
- [ ] Data is stored in `signal()`
- [ ] Filtering is implemented via `computed()`
- [ ] Search by title works

### Code Quality

- [ ] TypeScript strict mode enabled
- [ ] No linter errors
- [ ] Code is organized into logical folders
- [ ] Project README is filled in (description, how to run)

---

## What to Study

- [Angular Components Overview](https://angular.dev/guide/components)
- [Angular Router](https://angular.dev/guide/routing)
- [Angular Directives](https://angular.dev/guide/directives)
- [Angular Pipes](https://angular.dev/guide/pipes)
- [Angular Signals](https://angular.dev/guide/signals)

---

## FAQ

**Q:** Can I use a UI library (Angular Material, PrimeNG)?
**A:** No. Use only plain CSS / SCSS for styling.

**Q:** Can I use RxJS?
**A:** No. The goal of this task is to learn the signal-based approach in Angular without the distraction of RxJS.

**Q:** Where do I get poster images?
**A:** You can use any placeholder services or free images from open sources.

**Q:** Can I add more functionality?
**A:** Yes. Extra features (sorting, animations, dark theme) are welcome but do not affect the evaluation.

---

## Submission

To submit, provide a link to a **public GitHub repository** with your completed assignment. Make sure the project runs via `ng serve` without errors.

After submission, you will be able to apply for a mentor.
