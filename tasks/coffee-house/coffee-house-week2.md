## Coffee-House. Week-2 - Responsive Design

### Main Task Description and Requirements

- [Detailed Description](coffee-house.md)

In this part of the task, we will adapt the previously created pages (**Home** and **Menu > Coffee**) for tablets and mobile devices.
The goal is to match the layout with the corresponding [Design in Figma](https://www.figma.com/file/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?type=design&node-id=0-1&mode=design&t=qis81E9Ovgx47eVl-0) at screen resolutions of 1440px, 768px, and 380px.
The choice of breakpoints and their number is left to the student's discretion.  
For all other resolutions up to 380px, ensure:

- There is no horizontal scrollbar.
- The layout is adaptive and responsive.
- All page content is preserved.
- Image proportions are maintained.
- No white spaces are present to the right of the blocks.

To make responsive design, use relative units of measurement (%, rem, vh, etc).

## Workflow

1. The task should be completed in private repository of the school. [How to work with a school's private repository](https://docs.rs.school/#/private-repository).
2. Create a new branch named `coffee-house-week2` from the `coffee-house` branch. You will find the `coffee-house` folder containing the project files completed in the previous stage within this branch.
3. Continue working on the task within the branch you have created.
4. Ensure your work meets the [CrossCheck Criteria](#crosscheck-criteria).
5. Independently evaluate your work according to the provided [Criteria for Evaluation](#criteria-for-evaluation), keeping in mind the [DevTools Responsiveness Check Details](#devtools-responsiveness-check-details) and the [Specifics of Verifying Layout](#specifics-of-verifying-layout).
6. Create a Pull Request from the `coffee-house-week2` branch to the `coffee-house` branch, resolve any conflicts that arise, and then merge the Pull Request.  
   The title of the Pull Request can be chosen at your discretion. A description for this Pull Request is not necessary.
7. After completing the cross-check for the previous part of the task, update your project's deployment. For example, you can create and merge a Pull Request from the `coffee-house` branch to the `gh-pages` branch.  
   The title of the Pull Request can be chosen at your discretion. A description for this Pull Request is not necessary.
8. Once you have completed your work, update the Pull Request from the `coffee-house` branch to the `main` branch to include the newly added functionality from the second part of the task.  
   It is not required to merge this Pull Request.
9. Submit the deployment link of your project in the "Cross-Check Submit" section of the [RS APP](https://app.rs.school/).
10. After the task deadline has passed, the cross-check phase will start, lasting three days. To earn points for the task, you must review all the projects assigned to you for cross-checking and submit your review results in the "Cross-Check Review" section of the [RS APP](https://app.rs.school/).

### CrossCheck Criteria (90 points)

1. The layout of the pages aligns the design at a screen width of 1440px: **+14**
   - `<header>` block on each page: **+2**
   - `Enjoy` block on `home` page: **+2**
   - `Favourites Coffee` block on `home` page: **+2**
   - `About` block on `home` page: **+2**
   - `Mobile App` block on `home` page: **+2**
   - `Menu` block on `menu` page: **+2**
   - `<footer>` block on each page: **+2**
2. The layout of the pages aligns the design at a screen width of 768px: **+14**
   - `<header>` block on each page: **+2**
   - `Enjoy` block on `home` page: **+2**
   - `Favourites Coffee` block on `home` page: **+2**
   - `About` block on `home` page: **+2**
   - `Mobile App` block on `home` page: **+2**
   - `Menu` block on `menu` page: **+2**
   - `<footer>` block on each page: **+2**
3. The layout of the pages aligns the design at a screen width of 380px: **+14**
   - `<header>` block on each page: **+2**
   - `Enjoy` block on `home` page: **+2**
   - `Favourites Coffee` block on `home` page: **+2**
   - `About` block on `home` page: **+2**
   - `Mobile App` block on `home` page: **+2**
   - `Menu` block on `menu` page: **+2**
   - `<footer>` block on each page: **+2**
4. There is no horizontal scrollbar at all screen width up to 380px inclusive. All page content remains as per the design: it is not cropped, removed, or shifted to the side: **+20**
   - `home` page: no horizontal scroll bar between 1440px and 768px widths: **+5**
   - `home` page: no horizontal scroll bar between 768px and 380px widths: **+5**
   - `menu` page: no horizontal scroll bar between 1440px and 768px widths: **+5**
   - `menu` page: no horizontal scroll bar between 768px and 380px widths: **+5**
5. During smooth resizing of the browser window from 1440px to 380px, the layout occupies the full width of the window (including specified margins), elements adjust their sizes and positions appropriately without full scaling, no elements overlap, and images maintain their correct aspect ratios: **+8**
   - On `home` page: **+4**
   - On `menu` page: **+4**
6. At screen widths of 768px and below, the menu and navigation buttons in the header are concealed on both pages, and a burger menu icon is displayed: **+4**  
   (Note: Activation of the burger menu icon is not evaluated at this stage.)
7. Hover effects are active on desktop devices (as per the `Desktop` device type in DevTools) and are disabled for mobile devices (as per the `Mobile` device type in DevTools) on both pages: **+4**
8. The layout for both pages is validated and error-free according to the W3C Validator (https://validator.w3.org/): **+12**

### Penalties

1. If the layout of the entire design or individual blocks is implemented using images, this will result in a penalty of **-90 points**.
2. The use of frameworks, libraries, and technologies that are prohibited in the technical requirements will also result in a penalty of **-90 points**.

## Criteria for Evaluation

**Maximum score for the task: 90 points**

The scoring for each requirement is detailed in the [CrossCheck Criteria](#crosscheck-criteria) section.  
Penalties are outlined in the [Penalties](#penalties) section.

Any disputed issues should be resolved in favor of the student being assessed.

## DevTools Responsiveness Check Details

1. To open Developer Tools:
   - Press the `F12` key, or right-click and choose the `View Source` option in the context menu;
   - Click on the **Toggle Device Toolbar** icon in the top-right corner of the Developer Tools panel;
   - Select **Responsive** on the top panel.
2. Ensure there is no vertical scrollbar in **Responsive** mode. If a scrollbar is present, eliminate it by:
   - Switch the device type from `Desktop` to `Mobile` in the Device Toolbar panel;
   - If the device type is not visible, click on the three dots on the right in the Device Toolbar panel and choose `Add device type`.
3. Adjust the screen width to the specified value in the task description to check the layout against the Figma design. If the website page does not reformat correctly, or if there is a white space on the right, you may need to refresh the page multiple times.
4. Compare the layout with the Design for accuracy.
5. To test responsiveness at various screen widths, smoothly change the screen width in DevTools from the maximum (1440px) to the minimum (380px), and verify there is no horizontal scrollbar at any width. If a scrollbar or white space on the right emerges, refresh the page as the layout might not have updated correctly.
6. When scaling the screen (e.g., zoom to 125%), the actual width might differ by 1-2 pixels. For example, the actual value might be 767px or 769px even though the Developer Tools indicate 768px. Adjust to the transition point despite this discrepancy.
7. Confirm that hover effects on interactive elements are deactivated in the `Mobile` device type. Click on an interactive element to ensure it does not remain in a hover state. Then, switch to the `Desktop` device type to check that hover effects are functional.

![image](https://user-images.githubusercontent.com/73646765/223966120-845e2526-c54c-4611-8173-db5f9a2c3faa.png)

## Specifics of Verifying Layout

- A deviation of up to 10px horizontally and vertically from the layout is permissible as long as visual congruity between the design and the markup is preserved.
- Utilize the [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru) Chrome extension to verify alignment with the design.
- When using the PerfectPixel extension, ensure it is set to a scale factor of 1, and that your browser and operating system are set to 100% scale.
- Each block and section should be evaluated independently; deficiencies in one block should not affect the assessment of subsequent blocks. Start each new block's review with it aligned to the overlaid layout from PerfectPixel.
- For text, check its alignment and spacing within the confines of the block. Text sizes should be checked only for their height. Variations in word width and letter spacing are not considered errors as long as the correct font with specified properties is used.
- The disappearance of the two images in the `About` block on the `home` page must occur at screen width 768px.
- The disappearance of the four products in the `Menu` block on the `menu` page must occur at screen width 768px

## How to Submit

- **Coffee-House. Week-2 - Responsive Design** task is evaluated through a cross-check process.
- Upon receipt of the task and prior to the submission deadline, proceed to the RS App at https://app.rs.school/. Navigate to **Cross-Check: Submit**, select the appropriate task from the dropdown list, and enter the URL of your deployed website into the **Solution URL** field. Then click the **Submit** button.

## Submit Recommendations

- Aim to submit early once the submission option becomes available in the RS App. You are free to make additional changes up until the deadline.
- Given that the project is contained within a private repository, there's no need to share repository or pull request links as reviewers will not have access to them. Private repositories are visible only to you, the course administrators, and any assigned mentors.
- Verify that the deployed website link is functional, especially when accessed in the browser's incognito mode.

## Task Evaluation

- Follow the instructions for conducting a cross-check available at: https://docs.rs.school/#/cross-check-flow
