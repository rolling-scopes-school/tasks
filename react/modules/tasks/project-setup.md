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
      - ESlint v.9 is already a part of the _react-ts_ setup.
   2. Prettier
      - Integrate Prettier for code formatting.
        You can execute the following command to add missing plugins:

      ```sh
      npm install -D eslint-plugin-react eslint-plugin-prettier eslint-config-prettier eslint-plugin-react-compiler@beta
      npm install -D --save-exact prettier
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
      import reactHooks from "eslint-plugin-react-hooks";
      import reactRefresh from "eslint-plugin-react-refresh";
      import react from "eslint-plugin-react";
      import tseslint from "typescript-eslint";
      import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
      import reactCompiler from "eslint-plugin-react-compiler";

      export default tseslint.config(
        { ignores: ["dist"] },
        {
          extends: [
            js.configs.recommended,
            ...tseslint.configs.strict,
            eslintPluginPrettier,
          ],
          files: ["**/*.{ts,tsx}"],
          languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
          },
          plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "react-compiler": reactCompiler,
          },
          rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
              "warn",
              { allowConstantExport: true },
            ],
            "react-compiler/react-compiler": "error",
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
          },
          settings: {
            react: {
              version: "detect",
            },
          },
        },
      );
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
