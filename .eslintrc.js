module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "strict": "off",
    "no-unused-vars": "warn",
    "no-console": "off",
    "no-undef": "error",
    "no-redeclare": "error",
    "no-empty": "warn",
    "eqeqeq": "warn",
    "no-unreachable": "warn",
  },
  overrides: [
    {
      files: ["*.mjs"],
      parserOptions: {
        sourceType: "module",
      },
    },
    {
      files: ["*.cjs"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
};
