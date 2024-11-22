declare module 'eslint-config-zl-asica' {
  import type { Linter } from 'eslint';

  // Main configurations as arrays of configurations
  export const zlAsicaConfig: Linter.Config[],
    zlAsicaTsConfig: Linter.Config[],
    zlAsicaReactConfig: Linter.Config[],
    zlAsicaTsReactConfig: Linter.Config[];
}

// For direct imports if needed
declare module 'eslint-config-zl-asica/base.js' {
  import type { Linter } from 'eslint';

  const baseConfig: Linter.Config;
  export default baseConfig;
}

declare module 'eslint-config-zl-asica/typescript.js' {
  import type { Linter } from 'eslint';

  const tsConfig: Linter.Config;
  export default tsConfig;
}

declare module 'eslint-config-zl-asica/react.js' {
  import type { Linter } from 'eslint';

  const reactConfig: Linter.Config;
  export default reactConfig;
}
