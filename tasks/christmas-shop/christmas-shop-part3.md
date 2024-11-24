## Christmas Shop. Part-3: Adding Functionality

### Main Task Description and Requirements

- [Detailed Description](christmas-shop.md)

In this part of the task, you need to add the following functionality to the web pages previously created in the task:

- Opening and closing **burger menu** on pages when the width is 768px and less.
- **Slider** on the `home` page.
- **Timer** on the `home` page.
- **Random Gifts** on the `home` page.
- **Category switching** for gifts on the `gifts` page.
- Button **UP** on the `gifts` page.
- **Modal** for the selected product on both pages.

❗ Each DOM object (block) with a gift description, whether it's a gift in a category or a modal, will be generated from data objects with corresponding fields. The assembled JSON with the necessary objects for the project can be found in the [Materials](#materials).

## Materials:

- [The assembled JSON with all gifts](gifts.json)
- [Design in Figma](https://www.figma.com/design/zTB01BwWZVoXYK5atH3eZT/Cristmas-Shop)

## Workflow

1. The task should be completed in private repository of the school. [How to work with a school's private repository](https://docs.rs.school/#/private-repository).
2. Create a new branch named `christmas-shop-part3` from `christmas-shop` branch. You will find the `christmas-shop` folder containing the project files completed in the previous stage within this branch.
3. Continue working on the task within the branch you have created.
4. Ensure your work meets the [CrossCheck Criteria](#crosscheck-criteria).
5. Independently evaluate your work according to the provided [Criteria for Evaluation](#criteria-for-evaluation).
6. Create a Pull Request from the `christmas-shop-part3` branch to the `christmas-shop` branch, resolve any conflicts that arise, and then marge the Pull Request.  
   The title of the Pull Request can be chosen at your discretion. A description for this Pull Request is not necessary.
7. After completing the cross-check for the previous part of the task, update your project's deployment. For example, you can create and merge a Pull Request from the `christmas-shop` branch to the `gh-pages` branch.  
   The title of the Pull Request can be chosen at your discretion. A description for this Pull Request is not necessary.
8. Once you have completed your work, update the Pull Request from the `christmas-shop` branch to the `main` branch to include the newly added functionality from the third part of the task.  
   It is not required to merge this Pull Request.
9. Submit the deployment link of your project in the "Cross-Check Submit" section of the [RS APP](https://app.rs.school/).
10. After the task deadline has passed, the cross-check phase will start, lasting three days. To earn points for the task, you must review all the projects assigned to you for cross-checking and submit your review results in the "Cross-Check Review" section of the [RS APP](https://app.rs.school/).

### CrossCheck Criteria (90 points)

1. Implementation of the **burger menu** on both pages: **+22**
   - At a page width of 768px and less, the navigation panel hides, and the burger icon appears: **+2**
   - When clicking the burger icon, the burger menu slides out from the right, and the burger icon smoothly transforms into a cross: **+2**
   - The burger menu occupies the entire available screen area below the `<header>` block: **+2**
   - When clicking the cross, the burger menu smoothly hides, moving to the right of the screen, and the cross smoothly transforms into a burger icon: **+2**
   - The burger icon is created using HTML and CSS without the use of images/svg: **+2**
   - Links in the burger menu work, providing smooth scrolling to anchor points: **+2**
   - When clicking on any link (interactive or non-interactive) in the menu, the burger menu hides, and the cross transforms into a burger icon: **+2**
   - When clicking on any link (interactive or non-interactive) in the menu, the burger menu smoothly hides to the right, and the cross smoothly transforms into a burger icon if a user stays on the same page: **+2**
   - The placement and sizes of elements in the burger menu correspond to the layout (horizontal and vertical centering of menu items): **+2**
   - The page behind the open menu does not scroll: **+2**
   - When the page width increases to more than 768px, the burger icon and the open burger menu hide, and the navigation panel appears: **+2**
2. Implementation of the **Slider** on the `home` page: **+18**
   - Scrolling the slider in the corresponding direction is implemented by pressing left arrow button and right arrow button: **+2**
   - The left arrow button is inactive at the far left position of the slider: **+2**
   - The right arrow button is inactive at the far right position of the slider: **+2**
   - Scrolling the slider is accompanied by the carousel-like animation (the method of animation execution is not evaluated): **+4**
   - The slider is fully scrolled with 3 presses of the arrow button in one direction for screen widths more than 768px, and with 6 presses of the arrow button in one direction for screen widths of 768px and less: **+4**
   - When the screen width changes, the slider returns to its initial position, and the slider can be fully scrolled with the correct number of the relevant arrow button clicks (it works without reloading the page): **+4**
3. Implementation of the **Timer** on the `home` page: **+8**
   - The timer shows the correct value of the remaining days, hours, minutes, and seconds until the New Year in `UTC+0`: **+2**
   - Leading zeros are not displayed for single-digit numbers: **+2**
   - The timer updates every second, displaying the current remaining time with the labels `days`, `hours`, `minutes`, `seconds` (the labels must not change): **+4**
4. When both opening or refreshing the page, 4 random cards are displayed in the block **Best Gifts** on the `home` page: **+4**
5. Implementation of the **Category switching** for products on the `gifts` page: **+8**
   - The **ALL** category is active and all 36 gifts are displayed when both opening or reloading the `gifts` page. The order of sorting gifts does not matter: **+2**
   - When switching categories, the gifts of the selected category are displayed. The order of sorting gifts does not matter: **+4**
   - Only the selected category tab is active: **+2**
6. Implementation of the **Scroll-to-Top** button on the `gifts` page: **+12**
   - The button can only appear at a screen width of 768px and less: **+2**
   - At the top of the page, the button is not displayed: **+4**
   - The button appears after scrolling the page down by 300px: **+4**
   - When the button is clicked, the page scrolls to the top: **+2**
7. Implementation of the **Modal** for selected gift on both pages: **+18**
   - The Modal with the description of a specific gift opens when clicking on any part of a card of gift: **+4**
   - The description and superpowers in the Modal corresponds to the selected gift: **+4**
   - The part of the page outside the Modal is darkened: **+2**
   - When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: **+4**
   - Clicking on the area around the Modal and **Close** button closes it: **+2**
   - The Modal is centered on both axes, sizes of modal elements and their layout match the design: **+2**

### Penalties

Penalties for the task are assigned by the course curators, not by students. An imposed penalty results in zero points for the task. If you believe there's a reason to apply any of the following penalties in the work you're evaluating, please direct message the link to it to one of the curators:

1. The layout of the entire design or individual blocks is implemented using images, except in cases where the image is specifically required by the design.
2. The use of frameworks, libraries, and technologies that are prohibited in the [Technical Requirements](./christmas-shop.md#technical-requirements).

## Criteria for Evaluation

**Maximum score for the task: 90 points**

The scoring for each requirement is detailed in the [CrossCheck Criteria](#crosscheck-criteria) section.

Any disputed issues should be resolved in favor of the student being assessed.

## How to Submit

- **Christmas Shop. Part-3: Adding Functionality** task is evaluated through a cross-check process.
- Upon receipt of the task and prior to the submission deadline, proceed to the RS App at https://app.rs.school/. Navigate to **Cross-Check: Submit**, select the appropriate task from the dropdown list, and enter the URL of your deployed website into the **Solution URL** field. Then click the **Submit** button.

## Submit Recommendations

- Aim to submit early once the submission option becomes available in the RS App. You are free to make additional changes up until the deadline.
- Given that the project is contained within a private repository, there's no need to share repository or pull request links as reviewers will not have access to them. Private repositories are visible only to you, the course administrators, and any assigned mentors.
- Verify that the deployed website link is functional, especially when accessed in the browser's incognito mode.

## Task Evaluation

- Follow the instructions for conducting a cross-check available at: https://docs.rs.school/#/cross-check-flow
