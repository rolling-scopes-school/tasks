### Implement Routing and Browser Navigation to About Us Page (10 points)

#### Description

Implement routing to facilitate seamless navigation to the About Us page from all other pages. The About Us page should be accessible irrespective of the user's login status and should support browser navigation buttons (forward and back).

#### Implementation Details

1. **About Us Page:** This page should display information about the team and the project. It should be accessible from all other pages in the application.
2. **Routing:** The URL in the browser should change when users navigate to the About Us page. The About Us page should have a unique URL that can be directly accessed.
3. **Browser Navigation Buttons:** Implement support for browser navigation buttons. If a user navigates to a different page, the back button should take the user to the previously viewed page. The forward button should work correspondingly after using the back button.
4. **Public Accessibility:** The About Us page should be accessible whether the user is logged in or not. This page should not require authentication.

#### Acceptance Criteria

- Clicking on a navigation element directing to the About Us page takes the user to the About Us page.
- Navigating to the About Us page changes the URL in the browser.
- The About Us page has a unique URL that can be directly accessed.
- Directly accessing the About Us page's unique URL leads to the About Us page.
- The browser's back and forward buttons work as expected, enabling the user to navigate through their history of visited pages.
- The About Us page is accessible regardless of the user's authentication state.

#### Useful Links and Resources

1. [Using the HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
2. [Introduction to routing in React](https://reactrouter.com/en/6.14.1/start/tutorial)
3. [Client-side Routing in Angular](https://angular.io/guide/router)
4. [Vue Router](https://router.vuejs.org/)
