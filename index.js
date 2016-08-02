module.exports = {
  extends: 'airbnb',
  rules: {
    "no-unused-vars": ["warn"],
    "no-multi-spaces": [
      "error",
      {
        "exceptions": {
          "VariableDeclarator": true,
          "ImportDeclaration": true
        }
      }
    ],
    "no-console": ["off"],
    "key-spacing": ["error", {
      "align": {
        "beforeColon": true,
        "afterColon": true,
        "on": "colon"
      }
    }],
    "react/jsx-boolean-value": ["off"],
    "react/prop-types": ["warn"]
  }
};
