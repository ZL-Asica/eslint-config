# eslint-config-zl-asica

[![npm version][npm-version-badge]][npm-versions-link]
[![License][license-badge]][license-link]
[![code style: eslint][eslint-badge]][eslint-link]
[![Sponsor][sponsor-badge]][sponsor-link]

> [English](README.md) | [中文](README_CN.md)

**ZL Asica** 提供的一个可共享、可复用的 ESLint 配置，旨在为 JavaScript、TypeScript 和 React 项目提供一致的代码检查规则，并兼容 Prettier。（关于 Prettier 配置请[查看这里][prettier-config]）

## 目录

- [安装](#安装)
- [使用方法](#使用方法)
  - [JavaScript 项目](#javascript-项目)
  - [TypeScript 项目](#typescript-项目)
  - [React 项目](#react-项目)
  - [TypeScript 和 React 组合项目](#typescript-和-react-组合使用)
- [配置详情](#配置详情)
- [为何使用此配置](#为何使用此配置)

## 安装

将此包作为开发依赖安装在项目中（npm 7+）：

```bash
npm install --save-dev eslint eslint-config-zl-asica
# 或使用 Yarn
yarn add -D eslint eslint-config-zl-asica
# 或使用 pnpm
pnpm add -D eslint eslint-config-zl-asica
```

## 使用方法

该配置提供了三个独立的模块：**默认（JavaScript）**、**TypeScript** 和 **React**。每个配置可以根据需求单独引入。

### JavaScript 项目

对于 JavaScript 项目，导入主配置即可：

```javascript
// `eslint.config.js` 或 `eslint.config.mjs`
import { zlAsicaConfig } from 'eslint-config-zl-asica';

export default [
  ...zlAsicaConfig,

  // 您的自定义规则
  {
    rules: {
      'no-console': 'warn',
    },
  },
];
```

### TypeScript 项目

如果项目使用 TypeScript，可以在默认配置的基础上引入 `typescript` 配置：

```javascript
// `eslint.config.js` 或 `eslint.config.mjs`
import { zlAsicaConfig, zlAsicaTsConfig } from 'eslint-config-zl-asica';

export default [
  ...zlAsicaConfig,
  ...zlAsicaTsConfig,

  // 您的自定义规则
  {
    rules: {
      'no-console': 'warn',
    },
  },
];
```

### React 项目

对于使用 React 的项目，可以在默认配置的基础上引入 `react` 配置：

```javascript
// `eslint.config.js` 或 `eslint.config.mjs`
import { zlAsicaConfig, zlAsicaReactConfig } from 'eslint-config-zl-asica';

export default [
  ...zlAsicaConfig,
  ...zlAsicaReactConfig,

  // 您的自定义规则
  {
    rules: {
      'no-console': 'warn',
    },
  },
];
```

### TypeScript 和 React 组合使用

对于同时使用 TypeScript 和 React 的项目，可以引入所有三个配置：

```javascript
// `eslint.config.js` 或 `eslint.config.mjs`
import {
  zlAsicaConfig,
  zlAsicaTsConfig,
  zlAsicaReactConfig,
} from 'eslint-config-zl-asica';

export default [
  ...zlAsicaConfig,
  ...zlAsicaTsConfig,
  ...zlAsicaReactConfig,

  // 您的自定义规则
  {
    rules: {
      'no-console': 'warn',
    },
  },
];
```

这样使用可以方便地结合不同的配置，满足不同类型的项目需求。

## 配置详情

此配置包括以下规则集和插件：

- **JavaScript 规则**：为 JavaScript 和 JSX 提供一致的格式和风格规范。
- **TypeScript 规则**：为 TypeScript 项目提供类型安全的代码规范。
- **React 规则**：针对 React 和 React hooks 的特定规则。
- **Prettier 兼容性**：集成 `eslint-config-prettier`，禁用可能与 Prettier 冲突的格式化规则。

### 插件和设置

- **`import/ignore`**：忽略导入的 CSS 和其他样式表。
- **`import/order`**: 外部在前内部在后。
- **React 版本检测**：自动检测安装的 React 版本。

## 为何使用此配置

使用此配置可以确保：

- 在多个项目中保持一致的代码风格。
- 轻松集成 JavaScript、TypeScript 和 React 项目。
- 兼容 Prettier，减少格式冲突。

## 贡献

如果您想提出改进建议，欢迎在 [GitHub][github-link] 上提交 Pull Request 或 Issue。

## 许可证

此项目采用 [MIT License][license-link] 许可证。

<!-- badges -->

[npm-version-badge]: https://img.shields.io/npm/v/eslint-config-zl-asica?style=flat-square
[license-badge]: https://img.shields.io/github/license/ZL-Asica/eslint-config?style=flat-square
[eslint-badge]: https://img.shields.io/badge/code_style-eslint-4B32C3.svg?style=flat-square
[sponsor-badge]: https://img.shields.io/badge/sponsor-%E2%9D%A4-red?style=flat-square

<!-- links -->

[npm-versions-link]: https://www.npmjs.com/package/eslint-config-zl-asica
[eslint-link]: https://eslint.org/
[sponsor-link]: https://github.com/sponsors/ZL-Asica
[license-link]: https://github.com/ZL-Asica/eslint-config/blob/main/LICENSE
[github-link]: https://github.com/ZL-Asica/eslint-config
[prettier-config]: https://github.com/ZL-Asica/prettier-config
