# 🧱 React Vite Project Setup with ESLint, Prettier and Husky

## ⚠️ Initial Setup Instructions

1. ✅ First Commit — README.md Only
   - Your very first commit must contain only a README.md file.
   - Do not install Vite, React, or any dependencies in the initial commit.
   - Commit message should follow convention, like: `chore: initial commit with README`

2. 🌿 Branching Rules
   - All further development must happen in dedicated branches.
   - The main branch should stay clean and must not be merged with any student branches.

## Technical requirements

1. Language Requirement
   - Use **TypeScript** for the project.
2. Project Setup
   - Initialize the project using [Vite](https://vitejs.dev/guide/) with the [_react-ts_ template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

     ```sh
     # npm 7+, extra double-dash is needed:
     npm create vite@latest rs-react-app -- --template react-ts
     ```

3. Code Quality Tools
   1. ESLint
      - ESlint is already a part of the _react-ts_ setup.
   2. Prettier
      - Integrate Prettier for code formatting.
        You can execute the following command to add missing plugins:

      ```sh
      npm remove eslint-plugin-react-hooks
      npm install -D eslint-plugin-react-x prettier eslint-config-prettier
      ```

      Now, add a new file `.prettierrc` to the root of the project:

      ```json
      {
        "trailingComma": "es5",
        "tabWidth": 2,
        "semi": true,
        "singleQuote": true
      }
      ```

      And this is how your `eslint.config.js` should look like:

      ```js
      import js from "@eslint/js";
      import globals from "globals";
      import reactRefresh from "eslint-plugin-react-refresh";
      import reactX from "eslint-plugin-react-x";
      import tseslint from "typescript-eslint";
      import eslintConfigPrettier from "eslint-config-prettier/flat";
      import { defineConfig, globalIgnores } from "eslint/config";

      export default defineConfig([
        globalIgnores(["dist"]),
        {
          files: ["**/*.{ts,tsx}"],
          extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactRefresh.configs.vite,
            reactX.configs.recommended,
            eslintConfigPrettier,
          ],
          languageOptions: {
            globals: globals.browser,
          },
        },
      ]);
      ```

   3. Husky
      - Add Husky and configure it to run `lint` command on pre-commit.

      ```sh
      npm install --save-dev husky
      ```

      You can follow the official [Husky documentation](https://typicode.github.io/husky/get-started.html)

   4. package.json commands
      - Add the following npm scripts:
        - `format:fix`: For running Prettier's --write command.

        ```json
            "format:fix": "prettier --write ."
        ```

        You can check the final setup [here](https://github.com/kravaring/rs-react-app).

---

⚠️ **Attention** ⚠️: Your final setup may differ from what is presented here, depending on course requirements and personal preferences. The use of `any` is typically discouraged, and we would prefer the plugins mentioned above to be utilized. This guide is intended to assist beginners and should not restrict more advanced users.
