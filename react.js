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

      // React specific import order
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before', // Ensures React is prioritized at the very top
            },
            {
              pattern: 'react-dom',
              group: 'builtin',
              position: 'before', // Ensures React DOM immediately follows React
            },
            {
              pattern: '~/**',
              group: 'external',
              position: 'after', // All aliased external imports follow built-in imports
            },
            {
              pattern: '@/pages/**',
              group: 'internal',
              position: 'after', // Project-specific pages imported after components
            },
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'after', // Project-specific components imported after external aliases
            },
            {
              pattern: '@/hooks/**',
              group: 'internal',
              position: 'after', // Hooks imported following components and pages
            },
            {
              pattern: '@/utils/**',
              group: 'internal',
              position: 'after', // Utility files imported following hooks
            },
            {
              pattern: '**/*.css',
              group: 'type',
              position: 'after', // CSS files positioned last to separate styles from functional code
            },
            {
              pattern: '@/styles/**',
              group: 'type',
              position: 'after', // Project-specific styles are last to keep order clean
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
    ],
    rules: {
      'unicorn/filename-case': [
        'error',
        { cases: { pascalCase: true } }, // PascalCase for components and pages
      ],
    },
  },
  {
    files: ['src/routes/**/*.{js,jsx,ts,tsx}'],
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
