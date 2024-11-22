import eslintConfigPrettier from 'eslint-config-prettier';

import baseConfig from './base.js';
import reactConfig from './react.js';
import tsConfig from './typescript.js';

const addPrettier = (config) => [...config, eslintConfigPrettier];

const zlAsicaConfig = addPrettier([...baseConfig]);
const zlAsicaTsConfig = addPrettier([...baseConfig, ...tsConfig]);
const zlAsicaReactConfig = addPrettier([...baseConfig, ...reactConfig]);
const zlAsicaTsReactConfig = addPrettier([
  ...baseConfig,
  ...tsConfig,
  ...reactConfig,
]);

export {
  zlAsicaConfig,
  zlAsicaReactConfig,
  zlAsicaTsConfig,
  zlAsicaTsReactConfig,
};
