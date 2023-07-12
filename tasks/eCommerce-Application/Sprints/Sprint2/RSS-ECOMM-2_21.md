### RSS-ECOMM-2_21: Logout Functionality for Authorized Users (5 points)

#### Description
Authorized users should have the ability to log out of their accounts. There should be a clear and visible link or button in the header allowing users to log out. The link or button can be implemented using various methods, such as a text link, a styled button, or an icon with a label. Upon logging out, the authentication token should be removed from the storage where it was saved (e.g., cookie, localStorage, or sessionStorage).

#### Visual Implementation Ideas
1. Text link: Display the link for "Logout" as underlined text, placed in the header, ensuring it has good contrast against the background for easy visibility.
2. Styled button: Create a button element with consistent background color, hover effect, and typography for the "Logout" link, making it visually distinct from other elements in the header.
3. Icon with label: Use a recognizable icon (e.g., a power-off or sign-out icon) with a label for the logout link, ensuring that the icon and text are visually connected and have a consistent style.

#### Acceptance Criteria
- A clear and visible link or button for logging out is present in the header for authenticated users, utilizing one of the visual implementation ideas or another suitable design
- Clicking the link or button logs out the user, clearing the authentication token from the storage where it was saved (e.g., cookie, localStorage, or sessionStorage)
