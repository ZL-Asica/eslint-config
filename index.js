import baseConfig from './base.js';
import reactConfig from './react.js';
import tsConfig from './typescript.js';

export { default as zlAsicaConfig } from './base.js';

export const zlAsicaTsConfig = [...baseConfig, ...tsConfig],
  zlAsicaReactConfig = [...baseConfig, ...reactConfig],
  zlAsicaTsReactConfig = [...baseConfig, ...tsConfig, ...reactConfig];
