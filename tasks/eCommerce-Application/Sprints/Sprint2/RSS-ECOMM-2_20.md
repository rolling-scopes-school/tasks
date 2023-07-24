### Issue RSS-ECOMM-2_20: Implement a 404 (Not Found) page for invalid route requests (15 points)

#### Description

As a user, I should see a 404 (Not Found) page if I try to access an invalid route or a non-existing page within the application. Create a user-friendly 404 page and redirect users to this page when they request an invalid route.

#### Visual Implementation Ideas

1. **Design**: Design a user-friendly 404 page that aligns with the overall theme and style of your application. Include clear messaging that informs the user that the page they're looking for could not be found.
2. **Return to Main Page**: Include a button or link that allows users to navigate back to the main page of the application.
3. **Search Function (Optional)**: To enhance the user experience, consider implementing a search bar or a list of links to popular or relevant pages on your site.
4. **Graphic (Optional)**: To make the 404 page more engaging, consider adding a simple animation or graphic.

#### Useful Links

- [How to design a 404 error page that keeps users on your site](https://www.canva.com/learn/404-page-design/)
- [Examples of animations](https://lottiefiles.com/search?q=404&category=animations)

#### Acceptance Criteria

- The 404 page contains clear messaging informing the user that the requested page could not be found.
- The 404 page includes a navigation option (e.g., a button or link) for users to return to the main page or another accessible section of the application.
- The application automatically redirects users to the 404 page when they request an invalid route.
- The application should maintain the originally requested URL in the browser's address bar when showing the 404 page, as this helps support user expectations and provides clearer context about the requested route.
