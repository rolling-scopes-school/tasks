### Issue RSS-ECOMM-2_05: Redirect users to the main page upon successful login (15 points) 🎯

#### Description

Redirect users to the application's main page upon successful login, allowing them to access the main features and content of the application. The main page can contain simple text (e.g., "Main") or any other content to demonstrate that the user is successfully logged in. Ensure that the URL in the address bar is changed to the main page's URL, properly handling navigation and user experience during redirection.

#### URL Change and Redirection Tasks 🔀

- Implement a function or module in your application that handles successful authentication by redirecting users from the login page to the main page.
- Update the URL in the address bar to reflect the correct URL for the main page (e.g., "/main") upon successful login and redirection.
- Ensure that the browser's navigation (history) is updated correctly when redirecting users to the main page, allowing them to use the back button to navigate to the previous page if necessary.
- Make sure that the user's authentication state is preserved during the redirection process, allowing them to stay logged in when accessing the main page.

#### Acceptance Criteria ✅

- After successful authentication, users are redirected to the main page of the application, which contains simple text ("Main") or any other content.
- The URL in the address bar is changed to the main page's URL upon redirection.
- Proper handling of navigation and user experience during redirection, including browser history updates and preserving authentication state.

As the band Journey would say, "Don't stop believin'!" Let's guide our users to their main page destination like the faithful city boy on a midnight train going anywhere! 🌃🚂
