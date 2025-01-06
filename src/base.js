// @ts-check
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";

/**
 * @return { import("eslint").Linter.Config[] }
 */
export default () => [
  eslint.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
];
