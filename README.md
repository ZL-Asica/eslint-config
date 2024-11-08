# eslint-config-zl-asica

[![npm version][npm-version-badge]][npm-versions-link]
[![License][license-badge]][license-link]
[![code style: eslint][eslint-badge]][eslint-link]
[![Sponsor][sponsor-badge]][sponsor-link]

> [English](README.md) | [中文](README_CN.md)

A shareable and reusable ESLint configuration by **ZL Asica**, designed to provide consistent linting rules across JavaScript, TypeScript, and React projects with Prettier compatibility. (For Prettier configuration, please [check here][prettier-config])

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage (JavaScript Projects)](#basic-usage-javascript-projects)
  - [TypeScript Projects](#typescript-projects)
  - [React Projects](#react-projects)
  - [TypeScript and React Combined](#typescript-and-react-combined)
- [Configuration Details](#configuration-details)
- [Why Use This Configuration?](#why-use-this-configuration)

## Installation

Install this package as a development dependency in your project (npm 7+):

```bash
npm install --save-dev eslint eslint-config-zl-asica
# or with Yarn
yarn add -D eslint eslint-config-zl-asica
# or with pnpm
pnpm add -D eslint eslint-config-zl-asica
```

## Usage

The configuration provides three separate modules: **default (JavaScript)**, **TypeScript**, and **React**. Each configuration can be imported as needed.

### Basic Usage (JavaScript Projects)

For JavaScript projects, import the main configuration:

```javascript
// `eslint.config.js` or `eslint.config.mjs`
import zlAsicaConfig from 'eslint-config-zl-asica';

export default [
  ...zlAsicaConfig,

  // Your custom modifications
  {
    rules: {
      'no-console': 'warn',
    },
  },
];
```

### TypeScript Projects

If your project uses TypeScript, import the `typescript` configuration in addition to the default one:

```javascript
// `eslint.config.js` or `eslint.config.mjs`
import zlAsicaConfig from 'eslint-config-zl-asica';
import zlAsicaTsConfig from 'eslint-config-zl-asica/typescript';

export default [
  ...zlAsicaConfig,
  ...zlAsicaTsConfig,

  // Your custom modifications
  {
    rules: {
      'no-console': 'warn',
    },
  },
];
```

### React Projects

For projects that use React, import the `react` configuration alongside the default configuration:

```javascript
// `eslint.config.js` or `eslint.config.mjs`
import zlAsicaConfig from 'eslint-config-zl-asica';
import zlAsicaReactConfig from 'eslint-config-zl-asica/react';

export default [
  ...zlAsicaConfig,
  ...zlAsicaReactConfig,

  // Your custom modifications
  {
    rules: {
      'no-console': 'warn',
    },
  },
];
```

### TypeScript and React Combined

For projects that use both TypeScript and React, import all three configurations:

```javascript
// `eslint.config.js` or `eslint.config.mjs`
import zlAsicaConfig from 'eslint-config-zl-asica';
import zlAsicaTsConfig from 'eslint-config-zl-asica/typescript';
import zlAsicaReactConfig from 'eslint-config-zl-asica/react';

export default [
  ...zlAsicaConfig,
  ...zlAsicaTsConfig,
  ...zlAsicaReactConfig,

  // Your custom modifications
  {
    rules: {
      'no-console': 'warn',
    },
  },
];
```

## Configuration Details

This configuration includes the following rule sets and plugins:

- **JavaScript Rules**: Consistent formatting and style conventions for JavaScript (and jsx).
- **TypeScript Rules**: Type-safe coding standards for TypeScript projects.
- **React Rules**: React-specific rules for React and React hooks.
- **Prettier Compatibility**: Integrates `eslint-config-prettier` to disable formatting rules that might conflict with Prettier.

### Plugins and Settings

- **`import/ignore`**: Ignores CSS and other stylesheets for imports.
- **`import/order`**: External first then internal, newline in between.
- **React Version Detection**: Automatically detects the installed React version.

## Why Use This Configuration?

This configuration ensures:

- A consistent code style across multiple projects.
- Easy integration with JavaScript, TypeScript, and React projects.
- Compatibility with Prettier, reducing formatting conflicts.

## Contributing

If you’d like to suggest improvements, please feel free to open a pull request or issue on [GitHub][github-link].

## License

This project is licensed under the [MIT License][license-link].

<!-- Badges -->

[npm-version-badge]: https://img.shields.io/npm/v/eslint-config-zl-asica?style=flat-square
[license-badge]: https://img.shields.io/github/license/ZL-Asica/eslint-config?style=flat-square
[eslint-badge]: https://img.shields.io/badge/code_style-eslint-4B32C3.svg?style=flat-square
[sponsor-badge]: https://img.shields.io/badge/sponsor-%E2%9D%A4-red?style=flat-square

<!-- Links -->

[npm-versions-link]: https://www.npmjs.com/package/eslint-config-zl-asica
[eslint-link]: https://eslint.org/
[sponsor-link]: https://github.com/sponsors/ZL-Asica
[license-link]: https://github.com/ZL-Asica/eslint-config/blob/main/LICENSE
[github-link]: https://github.com/ZL-Asica/eslint-config
[prettier-config]: https://github.com/ZL-Asica/prettier-config