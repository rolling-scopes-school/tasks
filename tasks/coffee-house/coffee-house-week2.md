## Coffee-House. Week-2 - Responsive design

### Main Task Description and Requirements

- [Detailed Description](coffee-house.md)

In this part of the task, we will adapt the previously created pages (**Home** and **Menu > Coffee**) for tablets and mobile devices.
At screen resolutions of 1440px, 768px, and 380px, the goal is to match the layout with the corresponding [Design in Figma](https://www.figma.com/file/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?type=design&node-id=0-1&mode=design&t=qis81E9Ovgx47eVl-0).  
The choice of breakpoints and their number is left to the student.  
For all other resolutions up to 380px, ensure:

- There is no horizontal scroll bar.
- The layout is adaptive and responsive.
- All page content is retained.
- Image proportions remain unchanged.
- No white spaces appear to the right of the blocks.
  To make responsive design, use relative units of measurement (%, rem, vh, etc).

## Workflow

1. Task should be done in private school's repository. [How to work with a school's private repository](https://docs.rs.school/#/private-repository).
2. Create new branch `coffee-house-week2` from `coffee-house`. You will already find the `coffee-house` folder with the project files completed in the previous stage in this branch.
3. Continue working on the task in the branch you've created.
4. Check if your work meets [CrossCheck Criteria](#crosscheck-criteria).
5. Evaluate your work independently according to the provided [Criteria for evaluation](#criteria-for-evaluation), taking into account the [DevTools responsiveness check details](#devtools-responsiveness-check-details) and [Specifics of verifying layout](#specifics-of-verifying-layout).
6. To make the assessment of your work easier, print your self-assessment to the browser console. To do this, include the `index.js` file in your `*.html` file, write a `console.log()` function in it, and in parentheses within quotes, write your self-assessment points. Use the `\n` character to insert line breaks.  
   For example:

```
console.log('1. First criteria's name: +5\n2.Second criteria's name: +10')
```

7. Create a Pull Request from the `coffee-house-week2` branch to the `coffee-house` branch, check for conflicts, and perform the Merge.  
   The Pull Request title can be arbitrary. There is no need to describe this Pull Request.
8. After completing the cross-check for the previous part of the task, update your project's deployment. For example, create and merge a Pull Request from the `coffee-house` branch into the `gh-pages` branch.  
   The Pull Request title can be arbitrary. There is no need to describe this Pull Request.
9. After completing your work, update the Pull Request from the `coffee-house` branch to the `main` branch, expanding its functionality with the second part of the task.  
   There is no need to merge this Pull Request.
10. Submit the link to the deployment of your work in the [RS APP](https://app.rs.school/) section "Cross-Check Submit".
11. After the task deadline, the cross-check process begins. The cross-check lasts for three days. To receive points for the task, you need to review all the submissions sent for review and submit the results of the review in the "Cross-Check Review" section of [RS APP](https://app.rs.school/).

### CrossCheck Criteria (90 points)

1. The layout of the pages matches the design at a screen width of 1440px: **+14**
   - `<header>` block on each page **+2**
   - `Enjoy` block on `home` page **+2**
   - `Favourites Coffee` block on `home` page **+2**
   - `About` block on `home` page **+2**
   - `Mobile App` block on `home` page **+2**
   - `Menu` block on `menu` page **+2**
   - `<footer>` block on each page **+2**
2. The layout of the pages matches the design at a screen width of 768px: **+14**
   - `<header>` block on each page **+2**
   - `Enjoy` block on `home` page **+2**
   - `Favourites Coffee` block on `home` page **+2**
   - `About` block on `home` page **+2**
   - `Mobile App` block on `home` page **+2**
   - `Menu` block on `menu` page **+2**
   - `<footer>` block on each page **+2**
3. The layout of the pages matches the design at a screen width of 380px: **+14**
   - `<header>` block on each page **+2**
   - `Enjoy` block on `home` page **+2**
   - `Favourites Coffee` block on `home` page **+2**
   - `About` block on `home` page **+2**
   - `Mobile App` block on `home` page **+2**
   - `Menu` block on `menu` page **+2**
   - `<footer>` block on each page **+2**
4. There is no horizontal scroll bar at all screen width up to 380px inclusive. All page content remains as per the design: it is not cropped, removed, or shifted to the side: **+20**
   - No horizontal scroll bar when the `home` page width is between 1440px and 768px: **+5**
   - No horizontal scroll bar when the `home` page width is between 768рх and 380рх: **+5**
   - No horizontal scroll bar when the `menu` page width is between 1440px and 768px: **+5**
   - No horizontal scroll bar when the `menu` page width is between 768рх and 380рх: **+5**
5. During smooth resizing of the screen from 1440px to 380px, the layout takes up the full width of the window (including the margins specified in the layout), elements change their sizes and positions (but without full scaling), elements do not overlap, and images maintain their correct proportions: **+8**
   - On `home` page: **+4**
   - On `menu` page: **+4**
6. At screen widths of 768px and below on both pages, the menu and navigation buttons in the header are hidden, and a burger menu icon appears: **+4**  
   Opening the menu by clicking on the burger menu icon is not checked at this stage
7. Hover effects are enable on desktop devices (`Desktop` device type in DevTools) and disabled for mobile devices on both pages (`Mobile` device type in DevTools): **+4**
8. The layout of both pages is valid: to check the validity of the layout, use the service https://validator.w3.org/ : **+12**

### Penalties

1. Layout of the entire design or individual blocks is implemented using images -90
2. Using frameworks, libraries, and technologies prohibited in technical requirements -90

## Criteria for evaluation

**Maximum score for the task: 90 points**

Scores for requirement points are specified in [CrossCheck Criteria](#crosscheck-criteria) section.  
Penalties are specified in [Penalties](#penalties) section.

All disputed issues are resolved in favor of the student being assessed.

To make the assessment of your work easier, print self-assessment of your project in the browser console, listing points for each criteria you have completed.

## DevTools responsiveness check details

1. Open Developer Tools:
   - Press the `F12` key or right-click and choose the `View Source` option in the context menu;
   - Click on the **Toggle device toolbar** icon in the top right corner of the developer tools panel;
   - Choose **Responsive** on the top panel.
2. Make sure there is no vertical scrollbar in **Responsive** mode. If a scrollbar is present, remove it by following these steps:
   - Switch the device type from `Desktop` to `Mobile` in the Device Toolbar panel;
   - If the device type is not displayed, click on the three dots on the right in the Device Toolbar panel and select `Add device type`
3. Set the screen width to the required value according to the task description, at which we will check the layout against the Design from Figma. If the page of the website being checked does not reformat, or if there is a white space on the right, you may need to refresh the page several times.
4. Check the layout for compliance with the Design.
5. For check responsiveness at different screen widths, smoothly change the screen width in DevTools from maximum (1440px) to minimum (380px), and make sure there is no horizontal scroll bar at any screen widths. If a scroll bar appears or white space appears on the right, try refreshing the page; perhaps the layout didn't update.
6. When scaling the screen (e.g., zoom + 125%), the actual width may differ by 1-2 pixels. For example, the actual value may be 767 or 769, even though the developer tools show 768. Therefore, you should adjust to the transition point, despite the difference.
7. Check that hover effects on interactive elements are disabled in the `Mobile` device type. To do this, click on an interactive element and ensure it does not remain in a hover state. Switch to the `Desktop` device type to verify that hover effects are enabled.

![image](https://user-images.githubusercontent.com/73646765/223966120-845e2526-c54c-4611-8173-db5f9a2c3faa.png)

## Specifics of verifying layout

- Deviation from the layout of up to 10px horizontally and vertically is allowed, provided that the visual similarity between the layout and the markup is maintained.
- Use the [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru) extension as a tool to check the layout's conformity with the design.
- When checking the layout using the PerfectPixel extension, make sure that the extension is set to a scale of 1, while the browser and operating system are set to a scale of 100%.
- Each block and section are reviewed separately, meaning that shortcomings in the previous block do not carry over to next one. When transitioning to the review of the next block, we align it with overlaid layout.
- Regarding text, we check its alignment and spacing relative to the block's boundaries. Text sizes are only checked for height. Deviations in word width and letter spacing when comparing the layout and the markup are not considered errors if the correct font with the specified properties is used
- The disappearance of the two images in the `About` block of the `home` page can occur at any point between 1440px and 768px

## How to submit

- **Coffee-House. Week-2 - Responsive design** task is checked by cross-check.
- After receiving the task but before the deadline, please go to the RS App at https://app.rs.school/. Select **Cross-Check: Submit**, choose the relevant task from the dropdown menu, and add the link to the deployed version of your created website in the **Solution URL** field. Then, click **Submit** button.

## Submit Recommendations

- Consider submitting early, once the option is available in the RS App. You can make further changes until the deadline.
- As the project resides in a private repository, repository or pull request links are unnecessary since reviewers won't access them. Only you, course admins, and assigned mentors (if any) can view the private school repository.
- Ensure the deployed link functions in the browser's incognito mode.

## Task Evaluation

- Instructions for conducting a cross-check: https://docs.rs.school/#/cross-check-flow
