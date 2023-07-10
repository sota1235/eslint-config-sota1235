module.exports = {
  extends: [
    "eslint:recommended",
    "prettier/prettier",
  ],
  env: { node: true, es6: true },
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["**/*.{tsx,ts}"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      plugins: ["@typescript-eslint"],
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["**/*.test.{tsx,ts}"],
      rules: {
        "@typescript-eslint/ban-ts-ignore": "off",
      },
    },
  ],
  reportUnusedDisableDirectives: true,
};
