import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: [
      'node_modules',
      '.pnp.*',
      'dist',
      'build',
      '*.min.*',
      '.wrangler',
    ],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        project: './jsconfig.json',
      },
    },
  },
  pluginJs.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    rules: {
      // JavaScript Rules
      eqeqeq: ['error', 'always'], // Require === and !==
      curly: ['error', 'all'], // Require braces around all control blocks
      'no-implicit-coercion': 'error', // Disallow shorthand type conversions
      'no-var': 'error', // Require let or const instead of var
      'prefer-const': 'error', // Prefer const over let when possible

      // Unicorn Rules
      'unicorn/escape-case': 'error', // Enforce a specific return type for Math.pow
      'unicorn/prefer-string-slice': 'error', // Prefer String#slice() over String#substr() and String#substring()
      'unicorn/prefer-string-trim-start-end': 'error', // Prefer String#trimStart() & String#trimEnd() over String#trimLeft() & String#trimRight()
      'unicorn/prefer-at': 'error', // Prefer Array#at() over Array subscript notation
      'unicorn/prefer-object-from-entries': 'error', // Prefer Object.fromEntries() to Object.entries().reduce()
      'unicorn/better-regex': 'error', // Enforce better regexes
      'unicorn/no-abusive-eslint-disable': 'off', // Disallow disabling eslint rules via comments

      // Simple Import Sort Rules
      'simple-import-sort/imports': 'error', // Enforce import sorting
      'simple-import-sort/exports': 'error', // Enforce export sorting"

      // Import Rules
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  eslintConfigPrettier, // Prettier compatibility rules
];
