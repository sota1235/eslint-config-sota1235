import { configs } from "./src/index.js";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs.base(),
  {
    ignores: ["**/node_modules/**"],
  },
];
