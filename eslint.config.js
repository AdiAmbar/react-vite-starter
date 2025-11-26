import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactPlugin from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import typescriptEslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";


export default defineConfig([
  globalIgnores(["dist"]),
  {
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        },
      },
    },
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...typescriptEslint.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
    },
  },
  // override rules
  {
    rules: {
      "no-prototype-builtins": "warn",
      "no-useless-escape": "warn",
      // TODO: hooks are being used incorrectly in some places
      "react-hooks/rules-of-hooks": "warn",
      "react/jsx-no-target-blank": "warn",
      "react/no-unknown-property": [
        "error",
        { ignore: ["webkit-playsinline"] },
      ],
      "react/no-unescaped-entities": "warn",
      "react/no-children-prop": "warn",
      "react/display-name": "warn",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unnecessary-template-expression": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
    },
  },
  eslintConfigPrettier,
  {
    rules: {
      // enforce curly braces for all control flow statements
      curly: ["error", "all"],
    },
  },
]);
