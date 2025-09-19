## Portfolio. Part 2: Adding Functionality

### Main Task Description and Requirements

- [Detailed Description](portfolio.md)

In this part of the task, you need to add the following functionality to the web page previously created in the task:

- Opening and closing **burger menu** on the page when the width is 768px and less.
- **Slider** in `Portfolio` section.
- Opening/Closing of **accordions** in `FAQ` section
- **Scroll Down** button in `Hero` section.
- **Modal window**.

## Materials:

- [Design in Figma](https://www.figma.com/design/iFsApEUsf6tPwXas56gOiT/Portfolio)
- [Graphic materials (zip, ~110Mb)](https://drive.google.com/file/d/1W67CCUA5ixwOVISFA78VMQaHY9hO7Pvr/view?usp=sharing)

## Workflow

1. The task must be completed in the school’s private repository. [How to work with a school's private repository](https://rs.school/docs/ru/private-repository).
2. Create a new branch named `portfolio-part2` from `portfolio` branch. You will find the `portfolio` folder containing the project files completed in the previous stage within this branch.
3. Submit the deployment link of your project in the "Cross-Check Submit" section of the [RS APP](https://app.rs.school/).  
  [How to submit](#how-to-submit).
4. Continue working on the task within the branch you have created.
5. Ensure your work meets the [CrossCheck Criteria](#crosscheck-criteria-130-points).
6. Independently evaluate your work according to the provided [Criteria for Evaluation](#criteria-for-evaluation).
7. Create a Pull Request from the `portfolio-part2` branch to the `portfolio` branch, resolve any conflicts that arise, and then merge the Pull Request.  
   The title of the Pull Request can be chosen at your discretion. A description for this Pull Request is not necessary.
8. After completing the cross-check for the previous part of the task, update your project's deployment. For example, you can create and merge a Pull Request from the `portfolio` branch to the `gh-pages` branch.  
   The title of the Pull Request can be chosen at your discretion. A description for this Pull Request is not necessary.
9. Once you have completed your work, update the Pull Request from the `portfolio` branch to the `main` branch to include the newly added functionality from the second part of the task.  
   It is not required to merge this Pull Request.
10. After the task deadline has passed, the cross-check phase will start, lasting three days. Failure to complete and submit cross-check reviews in the "Cross-Check Review" section of the [RS APP](https://app.rs.school/) will result in zero points for this task.

## Criteria for Evaluation

**Maximum score for the task: 130 points**

The scoring for each requirement is detailed in the [CrossCheck Criteria](#crosscheck-criteria-130-points) section.

Any disputed issues should be resolved in favor of the student being assessed.

### CrossCheck Criteria (130 points)

1. Implementation of the **burger menu**: **+40**
   - At 768px and below, the navigation panel hides, and a burger icon appears: **+4**
   - The burger icon is created using HTML and CSS without the use of images/svg: **+4**
   - When clicking the burger icon, the burger menu slides out from the right, and the burger icon smoothly transforms into a cross: **+4**
   - The burger menu occupies the entire available screen area below the `<header>` block: **+4**
   - The placement and sizes of elements in the burger menu correspond to the layout (horizontal and vertical centering of menu items): **+4**
   - When clicking the cross, the burger menu smoothly hides, moving to the right of the screen, and the cross smoothly transforms into a burger icon: **+4**
   - When clicking on any link in the menu, the burger menu smoothly hides to the right, and the cross smoothly transforms into a burger icon: **+4**
   - Links scroll smoothly to their anchor points: **+4**
   - The page behind the open menu does not scroll: **+4**
   - Above 768px, both the burger icon and menu are hidden, and the standard navigation panel is shown: **+4**
2. Implementation of the **Slider**: **+40**
  - By default, the slider track must be horizontally centered on the page: **+4**
  - On desktop, slider scrolling is activated by hovering the cursor over the left or right area: **+8**
  - On desktop, the active area for scrolling the slider is ~30% of the screen width on each side: **+8**
  - On desktop, the remaining area in the center is inactive: **+4**
  - On mobile, the slider is scrolled by swiping with a finger: **+8**
  - The slider's end positions are aligned with the page content on either side. Scrolling is locked beyond these points: **+8**
3. Implementation of the **accordions** in the `FAQ` section: **+24**
  - By default, the first accordion is open: **+4**
  - You can open or close the accordion by clicking anywhere on its header: **+4**
  - Only one accordion can be open at a time (opening a new one closes the previous): **+8**
  - Accordion state persists after page reload: **+8**
4. Implementation of the **modals**: **+22**
  - A modal opens when you click any "BOOK NOW" button in the cards within the `Packages & Pricing` section: **+4**
  - The part of the page outside the Modal is darkened: **+4**
  - When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: **+4**
  - Clicking both outside the modal and on the close button closes it: **+4**
  - The Modal is centered on both axes, sizes of modal elements and their layout match the design: **+4**
5. Implementation of the **scroll down** button: **+4**
  - When the button is clicked, the page scrolls to `About` section: **+4**

### Penalties

Penalties for the task are assigned by the course curators, not by students. An imposed penalty results in zero points for the task. If you believe there's a reason to apply any of the following penalties in the work you're evaluating, please direct message the link to it to one of the curators:

1. The layout of the entire design or individual blocks is implemented using images, except in cases where the image is specifically required by the design.
2. The use of frameworks, libraries, and technologies that are prohibited in the [Technical Requirements](./portfolio.md#technical-requirements).

## How to Submit

- **Portfolio. Part 2: Adding Functionality** task is evaluated through a cross-check process.
- Upon receipt of the task and prior to the submission deadline, proceed to the RS App at https://app.rs.school/. Navigate to **Cross-Check: Submit**, select the appropriate task from the dropdown list, and enter the URL of your deployed website into the **Solution URL** field. Then click the **Submit** button.

## Submit Recommendations

- Aim to submit early once the submission option becomes available in the RS App. You are free to make additional changes up until the deadline.
- Given that the project is contained within a private repository, there's no need to share repository or pull request links as reviewers will not have access to them. Private repositories are visible only to you, the course administrators, and any assigned mentors.
- Verify that the deployed website link is functional, especially when accessed in the browser's incognito mode.

## Task Evaluation

- Follow the instructions for conducting a cross-check available at: https://rs.school/docs/ru/cross-check-flow
