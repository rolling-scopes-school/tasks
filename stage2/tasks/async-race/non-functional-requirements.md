# Mentor Evaluation Criteria for "Async Race" SPA Development

Mentors will evaluate the "Async Race" Single Page Application (SPA) based on the following non-functional requirements. These criteria focus on the application architecture, coding standards, and best practices. The total potential deduction for not meeting these requirements is **-200%**, indicating the critical importance of adherence to these standards.

## Total Points: 190

## 🏗️ Application Architecture (40 points)

- **Modular Design (40 points):** The application should be clearly divided into logical modules or layers, such as API interaction, UI rendering, and state management. Consultation with a mentor on the architecture before implementation is advised.

## 📜 Dynamic Content Generation (30 points)

- **JavaScript-Generated HTML Content (30 points):** All HTML content must be dynamically generated using JavaScript, with the `<body>` tag containing only a single `<script>` tag.

## 🌐 Single Page Application (25 points)

- **SPA Implementation (25 points):** The application must be a Single Page Application (SPA), ensuring seamless user experience without page reloads during navigation.

## 📦 Bundling and Tooling (20 points)

- **Use of Webpack or Similar (20 points):** Implement Webpack or another bundling tool to compile the project into a minimal set of files, ideally one HTML file, one JS file, and one CSS file.

## ✅ Code Quality and Standards (15 points)

- **Eslint with Airbnb Style Guide (15 points):** Adhere to the Airbnb ESLint configuration to maintain code quality. Specific rules may be adjusted only with mentor approval, and there should be no ESLint errors or warnings.

## 📏 Code Organization and Efficiency (15 points)

- **Function Modularization (10 points):** Code should be organized into small, clearly named functions with specific purposes. Each function should not exceed 40 lines.
- **Code Duplication and Magic Numbers (5 points):** Minimize code duplication and avoid the use of magic numbers or strings throughout the codebase.

## 🎨 Prettier and ESLint Configuration (10 points)

- **(5 points)** Prettier is correctly set up with two scripts in `package.json`: `format` for auto-formatting and `ci:format` for checking issues.
- **(5 points)** ESLint is configured with the [Airbnb style guide](https://github.com/airbnb/javascript). A `lint` script in `package.json` runs ESLint checks.

## 🌟 Overall Code Quality (35 points)

- **(Up to 35 points)** Discretionary points awarded by the mentor based on overall code quality, readability

## 🔒 Mandatory Requirements

- **No Libraries/Frameworks (-100%):** The use of libraries or frameworks such as JQuery, React, Angular, Lodash, Material Design, etc., is strictly prohibited. Bootstrap CSS is permitted for styling purposes only.
- **Typescript Usage (-100%):** The application must be developed using TypeScript. All method input and output parameters must be typed accurately, and the use of "any" type is not allowed.

  These criteria emphasize the importance of clean code, proper architecture, and adherence to modern development practices. Mentors will use these guidelines to assess the technical execution and overall quality of the project.
