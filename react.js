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
              position: 'before', // React always comes first
            },
            {
              pattern: 'react-dom',
              group: 'builtin',
              position: 'before', // React DOM always comes second
            },
            {
              pattern: '~/**',
              group: 'external',
              position: 'after', // Aliases come after builtins
            },
            {
              pattern: [
                'components/**',
                'pages/**',
                '@/components/**',
                '@/pages/**',
              ],
              group: 'internal',
              position: 'after', // Components come after aliases
            },
            {
              pattern: ['hooks/**', 'utils/**', '@/hooks/**', '@/utils/**'],
              group: 'internal',
              position: 'after', // Hooks come after components
            },
            {
              pattern: ['**/*.css', '**/*.scss', '**/*.sass', '@/styles/**'],
              group: 'type',
              position: 'after', // CSS files come last
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
