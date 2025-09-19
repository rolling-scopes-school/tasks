## Portfolio. Part 1: Responsive Layout

### Main Task Description and Requirements

- [Detailed Description](portfolio.md)

In this part of the task, you'll create the landing page for desktop, tablets and mobile devices.  
The goal is to match the layout with the corresponding [Design in Figma](https://www.figma.com/design/iFsApEUsf6tPwXas56gOiT/Portfolio) at screen resolutions of 1440px, 768px, and 380px.  
The choice of breakpoints and their number is left to the student's discretion.  
For all other resolutions between 1440px and 380px, ensure:

- There is no horizontal scrollbar.
- The layout is adaptive and responsive.
- All page content is preserved.
- Images follow the design, keeping their aspect ratio without distortion.
- No white spaces are present to the right of the sections.

To make responsive design, use relative units of measurement (%, rem, vh, etc).

## Workflow

1. The task must be completed in the school’s private repository. [How to work with a school's private repository](https://rs.school/docs/ru/private-repository).
2. Create a new branch named `portfolio` from the `main` branch. Create a folder `portfolio` in the created branch. Place your code in this folder.
3. Use `gh-pages` for deployment [How to deploy an assignment from a private school repository](https://rs.school/docs/ru/private-repository#как-сделать-деплой-задания-из-приватного-репозитория-школы).
4. Submit the deployment link of your project in the "Cross-Check Submit" section of the [RS APP](https://app.rs.school/).  
   [How to submit](#how-to-submit).
5. Complete the task. Don't forget to submit your work before the deadline (see step 8).
6. Ensure your work meets the [CrossCheck Criteria](#crosscheck-criteria-160-points).
7. Independently evaluate your work according to the provided [Criteria for Evaluation](#criteria-for-evaluation), keeping in mind the [DevTools Responsiveness Check Details](#devtools-responsiveness-check-details) and the [Specifics of Verifying Layout](#specifics-of-verifying-layout).
8. Open a Pull Request from the `portfolio` branch to the `main` branch. Give the Pull Request a title based on the task name. Provide a description for the Pull Request following [template](https://rs.school/docs/ru/pull-request-review-process#требования-к-pull-request-pr).
   There is no need to merge this Pull Request.
9. After the task deadline has passed, the cross-check phase will start, lasting three days. Failure to complete and submit cross-check reviews in the "Cross-Check Review" section of the [RS APP](https://app.rs.school/) will result in zero points for this task.

## Criteria for Evaluation

**Maximum score for the task: 160 points**

The scoring for each requirement is detailed in the [CrossCheck Criteria](#crosscheck-criteria-160-points) section.

Any disputed issues should be resolved in favor of the student being assessed.

### CrossCheck Criteria (160 points)

1. The layout of the page sections matches the design at a screen width of 1440px and above: **+40**
   - `<header>`: **+4**
   - `Hero` section: **+4**
   - `About` section: **+4**
   - `Portfolio` section: **+4**
   - `Price` section: **+4**
   - `FAQ` section: **+4**
   - `<footer>`: **+4**
   - When scaling the browser page (<100%) or increasing the page width (>1440px), the layout of the page (except slider's content) is centered rather than shifted to the side and not stretched across the entire width: **+6**
   - The background sections' color stretches across the entire width of the screen: **+6**
2. The layout of the page sections matches the design at a screen width of 768px: **+28**
   - `<header>`: **+4**
   - `Hero` section: **+4**
   - `About` section: **+4**
   - `Portfolio` section: **+4**
   - `Price` section: **+4**
   - `FAQ` section: **+4**
   - `<footer>`: **+4**
3. The layout of the page sections matches the design at a screen width of 380px: **+28**
   - `<header>`: **+4**
   - `Hero` section: **+4**
   - `About` section: **+4**
   - `Portfolio` section: **+4**
   - `Price` section: **+4**
   - `FAQ` section: **+4**
   - `<footer>`: **+4**
4. At any width between 1440px and 380px, no horizontal scrollbar appears. All page content displays exactly as intended by the design — nothing is cropped, removed, or shifted: **+12**
   - no horizontal scroll bar between 1440px and 768px widths: **+6**
   - no horizontal scroll bar between 768px and 380px widths: **+6**
5. During smooth resizing of the browser window from 1440px to 380px, the layout occupies the full width of the window (including specified margins), elements adjust their sizes and positions appropriately without full scaling, no elements overlap, and images maintain their correct aspect ratios: **+8**
6. At screen widths of 768px, the menu and navigation links in `<header>` are concealed, and a burger menu icon is displayed: **+4**  
   (Note: Activation of the burger menu icon is not evaluated at this stage.)
7. Interactivity: **+26**

- Smooth scrolling with anchor links: **+4**
- Interactivity of the links and buttons is implemented according to the Figma layout. Interactivity includes not only changing cursor's appearance, for example, using the `cursor: pointer` property, but also the use of other visual effects, such as changing the background color or font color, following the **Styleguide** in the Figma layout. If the interactivity is not specified in the **Styleguide**, `cursor: pointer` property is enough: **+4**
- Each Package-card in the `Packages & Pricing` section is interactive (color for border and button) when hovering over any area of the card: **+6**
- Each accordion's header in the `FAQ` section is interactive (color for name and "plus" sign) when hovering over any area of the header, except content of this accordion: **+6**
  (Note: Opening/closing of accordion sections is not evaluated at this stage.)
- Mandatory requirement for interactivity: smooth change in the appearance of an element on hover, without affecting adjacent elements: **+2**
- Hover effects are active on desktop devices (as per the `Desktop` device type in DevTools) and are disabled for mobile devices (as per the `Mobile` device type in DevTools): **+4**

8. Checking validation of the page: **+14**

- The layout for the page is validated and error-free according to the W3C Validator (https://validator.w3.org/): **+6**
  - Valid markup of checked page corresponds to the message _"Document checking completed. No errors or warnings to show."_ In this case, you assigns the full points for the checked page (+6).
  - If there are `warnings` but no `errors`, you assigns half of the points (+3) for the checked page
- Favicon is added to the page: **+4**
- Only one `<h1>` on the page: **+4**

### Penalties

Penalties for the task are assigned by the course curators, not by students. An imposed penalty results in zero points for the task. If you believe there's a reason to apply any of the following penalties in the work you're evaluating, please direct message the link to it to one of the curators:

1. The layout of the entire design or individual blocks is implemented using images, except in cases where the image is specifically required by the design.
2. The use of frameworks, libraries, and technologies that are prohibited in the [Technical Requirements](./portfolio.md#technical-requirements).

## DevTools Responsiveness Check Details

1. To open Developer Tools:
   - Press the `F12` key, or right-click and choose the `Inspect` option in the context menu;
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

## How to Submit

- **Portfolio. Part 1 - Responsive Layout** task is evaluated through a cross-check process.
- Upon receipt of the task and prior to the submission deadline, proceed to the RS App at https://app.rs.school/. Navigate to **Cross-Check: Submit**, select the appropriate task from the dropdown list, and enter the URL of your deployed website into the **Solution URL** field. Then click the **Submit** button.

## Submit Recommendations

- Aim to submit early once the submission option becomes available in the RS App. You are free to make additional changes up until the deadline.
- Given that the project is contained within a private repository, there's no need to share repository or pull request links as reviewers will not have access to them. Private repositories are visible only to you, the course administrators, and any assigned mentors.
- Verify that the deployed website link is functional, especially when accessed in the browser's incognito mode.

## Task Evaluation

- Follow the instructions for conducting a cross-check available at: https://rs.school/docs/ru/cross-check-flow

## Materials

- [How to load fonts [EN]](https://www.jonoalderson.com/performance/youre-loading-fonts-wrong/)
