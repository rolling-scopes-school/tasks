### 🎯 Issue RSS-ECOMM-3_20: Implement Routing 🚦 and Browser Navigation 🌐 for User Profile Page (15 points)

#### 📋 Description

To enhance the user experience, implement routing and browser navigation that allows users to navigate to the User Profile page. The User Profile page should be restricted only to logged-in users.

#### 🔨 Implementation Details

1. **User Profile Page:** This page should display information about a user's profile. Only logged-in users should have access to this page.
2. **Routing:** The URL in the browser should change when users navigate to the User Profile page and when they navigate away from it. The User Profile page should have a unique URL that can be directly accessed.
3. **Browser Navigation:** Ensure the proper functioning of the browser's navigation buttons (Back and Forward) when navigating to and from the User Profile page.
4. **Access Control:** The User Profile page should be accessible only to logged-in users. If a user who is not logged in tries to access the User Profile page, they should be redirected to the Login page.

#### ✅ Acceptance Criteria

- Navigating to and from the User Profile page changes the URL in the browser.
- The User Profile page has a unique URL that can be directly accessed.
- Directly accessing the unique URL for the User Profile page leads to the User Profile page, if the user is logged in. If the user is not logged in, they are redirected to the Login page.
- The browser's Back and Forward buttons work correctly when navigating to and from the User Profile page.
- Only logged-in users can access the User Profile page.
