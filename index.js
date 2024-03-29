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
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
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
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/non-nullable-type-assertion-style": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-return": "off",
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
