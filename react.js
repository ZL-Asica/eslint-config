import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

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
];
