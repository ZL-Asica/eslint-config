import tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{ts,mts,tsx}'],
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        requireConfigFile: true,
        project: './tsconfig.json',
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      // TypeScript Rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ], // Disallow unused variables
      '@typescript-eslint/no-explicit-any': 'warn', // Disallow explicit any types
      '@typescript-eslint/consistent-type-imports': 'error', // Require consistent imports of types
    },
  },
];
