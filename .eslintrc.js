module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn",
    semi: "warn",
    quotes: ["error", "double"],
    "no-const-assign": "warn",
    "no-irregular-whitespace": "warn",
    "no-misleading-character-class": "warn",
    "arrow-body-style": ["warn", "always"],
    "class-methods-use-this": "warn",
  },
};
