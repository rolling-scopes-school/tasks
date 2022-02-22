# Конфигурация eslint и prettier для использования в задании

## Набор рекомендуемых библиотек

```
"@typescript-eslint/eslint-plugin": "^5.7.0",
"@typescript-eslint/parser": "^5.7.0",
"eslint-config-prettier": "^8.3.0",
"eslint-config-react": "^1.1.7",
"eslint-plugin-prettier": "^4.0.0",
"husky": "^7.0.4",
"lint-staged": "^12.1.2",
"prettier": "^2.5.1",
```

## Конфигурцая eslint
Может изменяться только с согласия ментора
```
  {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["@typescript-eslint", "react", "prettier", "react-hooks"],
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "comma-dangle": ["error", "only-multiline"],
    "react/prop-types": "off",
    "react/display-name": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-reqiures": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "root": true
}
```

## Конфигурция prettier
```
{
  "endOfLine": "auto",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always"
}
```

