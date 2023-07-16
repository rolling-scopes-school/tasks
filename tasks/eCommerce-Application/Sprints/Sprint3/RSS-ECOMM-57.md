### RSS-ECOMM-57: Implement Enlarged Image Modal (15 points)

#### Description
When users click on the product image in the Detailed Product Page, a modal window should pop up displaying an enlarged version of the image. This feature would allow users to view the product image in more detail.

#### Implementation Details
1. **Image Modal:** Implement a modal window that can display an enlarged version of a product image. Consider using a library or framework feature to handle modals, or build one from scratch. The modal should include a way for the user to close it, such as an "X" button in the corner.
2. **Image Click Event:** Attach an event listener to the product image that triggers the modal to open with the enlarged image when the image is clicked.
3. **Image Sizing:** Make sure that the enlarged image in the modal is significantly larger than the product image, but still fits within the viewport. You may need to limit the size of the image or make the modal scrollable if the image is too large.

#### Visual Implementation Ideas
1. **Modal Background:** When the modal opens, darken or blur the rest of the page behind the modal to help it stand out.
2. **Close Button:** Make sure the close button is easily visible and clearly indicates its purpose.

#### Acceptance Criteria
- The product image triggers a modal to open when it is clicked.
- The modal displays an enlarged version of the product image.
- There is a clear way for the user to close the modal.

#### Useful Links and Resources
1. [Modal windows in JavaScript](https://www.w3schools.com/howto/howto_css_modals.asp)
2. [Handling click events in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
