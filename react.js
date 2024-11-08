import { existsSync } from 'node:fs';

import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

/** Helper function to conditionally apply paths */
const applyIfExists = (path, config) => (existsSync(path) ? config : undefined);

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    ...reactHooks.configs['recommended-latest'],
    rules: {
      // React Rules
      'react/react-in-jsx-scope': 'off', // Disallow missing React when using JSX
      'react/jsx-uses-react': 'off', // Prevent React to be incorrectly marked as unused
      'react/prop-types': 'off', // Prevent missing props validation in a React component definition
    },
  },
  // Conditionally apply these configurations based on path existence
  applyIfExists('src/components', {
    files: ['src/components/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'unicorn/filename-case': [
        'error',
        { cases: { pascalCase: true } }, // PascalCase for components and pages
      ],
    },
  }),
  applyIfExists('src/hooks', {
    files: ['src/hooks/**/*.{js,ts}'],
    rules: {
      'unicorn/filename-case': [
        'error',
        { cases: { camelCase: true } }, // camelCase for hooks
      ],
    },
  }),
  applyIfExists('src/utils', {
    files: ['src/utils/**/*.{js,ts}'],
    rules: {
      'unicorn/filename-case': [
        'error',
        { cases: { camelCase: true } }, // camelCase for utils
      ],
    },
  }),
].filter(Boolean); // Remove any `null` entries from the array
