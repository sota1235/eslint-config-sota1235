import base from "./base.js";
import react from "eslint-plugin-react";
import globals from "globals";

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
export default () => [
  ...base(),
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "react/prop-types": "off",
      "react/jsx-uses-vars": "warn",
    },
  },
];
