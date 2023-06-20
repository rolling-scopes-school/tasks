### Maintain user authentication state within the application (10 points)

#### Description
Maintain user authentication state within the application, allowing for a seamless user experience and ensuring that user information and actions are secure. Implement a consistent authentication state management process throughout the application, including storing and managing authentication tokens, verifying user access, and protecting routes for logged-in users.

#### Authentication State Management Tasks
- Implement a function, service, or module in your application to manage the authentication token received from the CommerceTools authentication service.
- Store the authentication token securely on the client-side (e.g., in cookies, localStorage, or sessionStorage) to enable persistent user sessions.
- Implement a mechanism to check the user's authentication state in real-time (e.g., validating the token or using an authentication state context with data retrieved from the server).
- Protect restricted routes and application sections to ensure that only authenticated users can access them. Implement route guard techniques to restrict access to unauthorized users.
- Allow users to log out of the application and clear the stored authentication token and any related user data.

#### Access Restriction Example: Profile Page
- Implement a route guard for the profile page route in the application that verifies whether the user is authenticated before granting access.
- If the user is authenticated, allow them to view the profile page with their user information.
- If the user is not authenticated, redirect them to the login page and display a message informing them that they must sign in to access the profile page.
- Ensure that any data retrieved for the profile page, such as user information, is only accessible to authenticated users.

#### Acceptance Criteria
- User authentication state is managed consistently across the application.
- Only authenticated users can access restricted sections of the application, such as the profile page.
- Proper token management, including storing, validating, and removing the token upon user logout.
- Users can log out and return to the login page, with authentication state reset.