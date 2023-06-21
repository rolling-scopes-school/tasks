### Redirect users to the main page upon successful account creation and automatic login (10 points)

#### Description
Redirect users to the application's main page, displaying personalized content, upon successful account creation and automatic login. Ensure a smooth transition and handle redirection in a way that accounts for browser history, so users can utilize the back and forward navigation buttons seamlessly.

To implement the redirection process, consider the following recommendations:

- Use the routing or navigation functionality provided by the front-end framework or libraries of your choice.
- If you are not using a front-end framework, refer to these resources for redirection in plain TypeScript:
  - [window.location documentation - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) to understand how to use the `window.location` API for navigation.
  - [History API documentation - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/History) to learn about the `history.pushState()` and `history.replaceState()` methods for managing browser history.
- Ensure that the user's authentication state is updated and properly maintained throughout the application so that they can access personalized content when redirected to the main page.
- Merely hiding the registration form and showing the main page is not enough; make sure that the user is redirected to a new page or route.
- Utilize client-side routing techniques to minimize loading time and provide a more seamless user experience.

#### Acceptance Criteria
- Users are redirected to the main page upon successful account creation and automatic login
- The redirection process takes into account browser history for seamless navigation
- Proper use of the chosen front-end framework or library for handling routing and navigation, or implementation of plain TypeScript solutions when not using a front-end framework