### Issue RSS-ECOMM-2_06: Redirect logged-in users to the main page from the login page (15 points)

#### Description

Redirect users who are already logged into the application to the main page if they attempt to access the login page. Ensure a smooth and seamless user experience by properly checking the user's authentication state, updating the URL in the address bar, and handling navigation during the redirection process.

#### Redirection and Authentication State Checking Tasks

- Implement a function, service, or route guard in your application that checks whether a user is already authenticated when they attempt to visit the login page.
- If the user is authenticated, redirect them to the main page, preventing access to the login page while they are logged in.
- Update the URL in the address bar to reflect the correct URL for the main page (e.g., "/main") for authenticated users redirected from the login page.
- Ensure that the browser's navigation (history) is updated correctly when redirecting authenticated users to the main page.

#### Acceptance Criteria

- Authenticated users who attempt to visit the login page are automatically redirected to the main page.
- The URL in the address bar is changed to the main page's URL for authenticated users redirected from the login page.
- Redirection maintains the user's authentication state during the process.
- Proper handling of navigation and user experience during redirection, including updating browser history.
