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
];
