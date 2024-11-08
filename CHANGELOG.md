# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2024-11-07

### Added

- Initial release of `eslint-config-zl-asica`.
- Modular ESLint configuration with separate modules for JavaScript, TypeScript, and React, ensuring flexible integration.
- **JavaScript Rules**: Standard linting and style conventions for js and JSX.
- **TypeScript Rules**: Type-safe configurations to promote consistency in TypeScript projects.
- **React Rules**: Comprehensive support for JSX, hooks, and React-specific best practices.
- **Prettier Compatibility**: Integrated with `eslint-config-prettier` to eliminate conflicts with Prettier.

### Configuration Highlights

- **Modular Imports**: Split configurations into separate modules (`index`, `typescript`, `react`), making them easy to import as needed.
- **`eslint-plugin-pangu`**: Enforces spacing between English and Chinese characters for readability.
- **File Naming Convention**: Enforced naming styles in React files based on directory:
  - **PascalCase** for `components`, `pages`, and `context`
  - **kebab-case** for `routes`
  - **camelCase** for `hooks` and `utils`
- **`import/ignore`**: Configured to ignore `.svg`, `.scss`, `.less`, and `.css` files.
- **React Version Detection**: Automatically detects the installed React version.
- **Extended Import Resolver**: Includes TypeScript and Node module resolution for better compatibility.

### Documentation

- Detailed `README.md` explaining installation, modular usage for JavaScript, TypeScript, and React, and configuration specifics.
- Links to GitHub for issue reporting and sponsorship options.
