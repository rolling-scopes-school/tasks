### RSS-ECOMM-65: Implement Routing for Navigation to User Profile Page (15 points)

#### Description
To improve the user experience and navigation within the application, implement routing that allows users to navigate to the User Profile page. This involves:

1. **User Profile Page:** This page should display information about a user's profile. It should be accessible by clicking on a link in the header or by directly accessing a unique URL for the user profile.
2. **Header Link:** Add a link (or icon that functions as a link) to the User Profile page in the application header.
3. **Routing:** The URL in the browser should change when users navigate to the User Profile page and when they navigate away from it. The User Profile page should have a unique URL that can be directly accessed.
4. **Access Control:** The User Profile page should be accessible only to logged-in users. If a non-authenticated user tries to access this page, they should be redirected to the Login page.

#### Acceptance Criteria
- Clicking on the User Profile link in the header takes the user to the User Profile page.
- Navigating to and from the User Profile page changes the URL in the browser.
- The User Profile page has a unique URL that can be directly accessed.
- Directly accessing the unique URL for the User Profile page leads to the User Profile page.
- Only authenticated users can access the User Profile page. If an unauthenticated user tries to access the User Profile page, they are redirected to the Login page.

#### Useful Links and Resources
1. [Using the HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
2. [Introduction to routing in React](https://reactrouter.com/en/6.14.1/start/tutorial)
3. [Client-side Routing in Angular](https://angular.io/guide/router)
4. [Vue Router](https://router.vuejs.org/)
