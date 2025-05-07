module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    plugins: ["react", "@typescript-eslint"],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off" // Якщо ти використовуєш React 17+
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  };