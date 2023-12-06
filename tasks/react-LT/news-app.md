# News App

## Prerequisites

1. Create a new branch named _news-app_ in **your private RS** Github account and upload your solution.

## Description

In this task you're going to create a news app. This aplication should use open API https://newsapi.org/ (pay attention that with every request you need to send API key, you can get in on the homwe page of the API, you'll just need to sign up).

**Features:**

1.  App should have **3 pages**:

         / - home page with the list of news from newest to oldest (up to 20)

         /article/:id - article page

         /404 page should tell user that page they’re trying to visit doesn’t exist and show 404 status with some description.

2.  Article preview should have **Picture, Title, Source, Date of publication, Description** of the article, link **Read more**. If no picture was returned from API, placeholder should be displayed instead.
3.  **Clicking on the link "Read more"** on the article preview, user goes to it's page and can read full article. It should have picture, source, full article text, date of publication, link to return back on the home page
4.  If user goes to the route that doesn't exist, they should be redirected to /404.
5.  User should be able to **filter news by source**, it can be a dropdown with a list of all available sources (additionallt you can add a search bar in the dropdown, but it is not nesessery).
6.  User should be able to **search for a specific article** in selected source (by title).
7.  While articles are loading, **spinner** should be displayed.
8.  If there are no articles that match request, according **message should be shown**.
9.  _Optional task_: When user scrolls down and reaches last article that was loaded, new chank of artickles should be loaded and added to the end of the list. It should allow user to load additionally up to 100 articles.

## Details:

[Example_1](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react-LT/images/Example-1.png)

[Example_2](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react-LT/images/Example-2.png)

• Page shouldn't reload when user is clicking your news app links. If user decides to share link on an article to someone, link he copies from your app should always lead to an article, not be redirected to the homepage

• At least minimum styling should be added to your aplication. Pages should be responsive and look good on mobile (min possible width - 320px). Page should not stratch to the full width of the device (if it's big, like TV for example), max width of the page content is 1400px. Example of the design will be attached for your inspo. Pay attention that sources on the design wasn't implemented like dropdown. You don't have to do as on the design.

• If some error happened during Component render, it should be handeled by ErrorBoundary that should show error details

• Please use PropTypes library to typing props

• Use Redux for state management (it is recomended to start your app without it and only when all your Components are in place, add Redux state management). Please separate different Redux instances in different files (example will be provided below, folder store)

• It is recomended to use "Feature" approach in maintaining your app folders (example will be provided below, folder components and pages). Additioanaly if needed, add folder /shared at the same level as components, for components that are used multiple times on the page (basic link, button, inputs, etc.)

• Before you start development, please make sure that eslint is working and has basic rules for React apps (add command to start it, for more info check https://create-react-app.dev/docs/setting-up-your-editor/). Add pre-commit hook with https://www.npmjs.com/package/husky. Every time you make a commit it should run linter and check that everything is ok. If not commit should be blocked utill you fix all errors that appeared in console.

• If there was lecture covering testing in React, please, cover 5 components with unit tests and add running tests in pre-push hoook. So if any of the test has failed, push should be blocked. Add test coverage command in package.json. Make sure that components that you've chose to cover are covered on 100%. PS: Please, choose more or less complex components for testing.

**[Example](https://github.com/elkinny/React-to-do/tree/without-login-with-redux) for files structure and Redux**
