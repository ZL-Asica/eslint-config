import pluginJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
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
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    ...reactHooks.configs['recommended-latest'],
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

      // TypeScript Rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ], // Disallow unused variables
      '@typescript-eslint/no-explicit-any': 'warn', // Disallow explicit any types
      '@typescript-eslint/consistent-type-imports': 'error', // Require consistent imports of types

      // React Rules
      'react/react-in-jsx-scope': 'off', // Disallow missing React when using JSX
      'react/jsx-uses-react': 'off', // Prevent React to be incorrectly marked as unused
      'react/prop-types': 'off', // Prevent missing props validation in a React component definition

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
      'import/ignore': [
        'node_modules',
        String.raw`\.s?css$`,
        String.raw`\.svg$`,
      ], // Ignore imports of node_modules, CSS, and SVG files
      'import/first': 'error', // Ensure all imports appear before other statements
      'import/newline-after-import': 'error', // Enforce a newline after import statements
      'import/no-duplicates': 'error', // Disallow duplicate imports
      'import/exports-last': 'error', // Ensure all exports appear after other statements
      'import/no-named-as-default': 'error', // Disallow use of the default export as a named export
      'import/no-named-as-default-member': 'error', // Disallow use of the default export as a named export
      'import/no-cycle': 'error', // Disallow cyclic dependencies
      'import/no-self-import': 'error', // Disallow a module importing itself
      'import/group-exports': 'error', // Prefer a single export default over named exports
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: '~/**',
              group: 'external',
              position: 'before', // External imports first
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after', // Internal imports last
            },
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },
  {
    files: [
      'src/components/**/*.{js,jsx,ts,tsx}',
      'src/pages/**/*.{js,jsx,ts,tsx}',
      'src/context/**/*.{js,jsx,ts,tsx}',
    ],
    rules: {
      'unicorn/filename-case': [
        'error',
        { cases: { pascalCase: true } }, // PascalCase for components and pages
      ],
    },
  },
  {
    files: ['src/routes/**/*.{js,ts}'],
    rules: {
      'unicorn/filename-case': [
        'error',
        { cases: { kebabCase: true } }, // kebab-case for routes
      ],
    },
  },
  {
    files: ['src/hooks/**/*.{js,ts}', 'src/utils/**/*.{js,ts}'],
    rules: {
      'unicorn/filename-case': [
        'error',
        { cases: { camelCase: true } }, // camelCase for hooks and utils
      ],
    },
  },
  eslintConfigPrettier, // Prettier compatibility rules
];
