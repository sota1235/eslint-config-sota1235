// @ts-check
import tseslint from "typescript-eslint";
import base from "./base.js";

/**
 * @param { { tsconfigPath?: string } } options
 * @return { import("eslint").Linter.Config[] }
 */
export default ({ tsconfigPath = "./tsconfig.json" }) => [
  ...base(),
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,cts,mts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: tsconfigPath,
      },
    },
  },
  {
    files: ["**/*.test.{tsx,ts,cts,mts}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/non-nullable-type-assertion-style": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
    },
  },
];
