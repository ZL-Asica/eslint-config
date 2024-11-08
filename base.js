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
    settings: {
      'import/ignore': [
        'node_modules',
        '.coffee$', // fraught with parse errors
        '.(scss|less|css|svg)$', // can't parse unprocessed CSS modules, either
      ],
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
      'import/first': 'error', // Ensure all imports appear before other statements
      'import/newline-after-import': 'error', // Enforce a newline after import statements
      'import/no-duplicates': 'error', // Disallow duplicate imports
      'import/exports-last': 'error', // Ensure all exports appear after other statements
      'import/no-named-as-default': 'error', // Disallow use of the default export as a named export
      'import/no-named-as-default-member': 'error', // Disallow use of the default export as a named export
      'import/no-cycle': 'error', // Disallow cyclic dependencies
      'import/no-self-import': 'error', // Disallow a module importing itself
      'import/group-exports': 'error', // Prefer a single export default over named exports
      'unicorn/no-null': 'off', // Disallow the use of null
      'import/no-absolute-path': 'error', // Disallow the use of absolute paths
      'import/prefer-default-export': 'false', // Prefer a default export if module exports a single name
      'import/order': [
        'error',
        {
          // Configure the groups
          pathGroups: [
            {
              pattern: '~/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'src/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '../*',
              group: 'parent',
              position: 'after',
            },
            {
              pattern: './*',
              group: 'parent',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },
  eslintConfigPrettier, // Prettier compatibility rules
];
