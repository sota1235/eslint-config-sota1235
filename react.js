module.exports = {
  extends: [
    "./index",
    "plugin:react/recommended",
  ],
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.{tsx,jsx}"],
      extends: [
        "plugin:react/recommended",
      ],
      plugins: ["react"],
    },
    {
      files: ["**/*.{tsx,jsx}"],
      rules: {
        "react/prop-types": "off",
        "react/jsx-uses-vars": "warn",
      },
    },
    {
      files: ["**/*.test.{tsx,jsx}"],
      rules: {
        "@typescript-eslint/ban-ts-ignore": "off",
      },
    },
  ],
};
