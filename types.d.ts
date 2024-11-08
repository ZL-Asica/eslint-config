declare module 'eslint-config-zl-asica' {
  import type { Linter } from 'eslint';

  export const zlAsicaConfig: Linter.Config[],
    zlAsicaReactConfig: Linter.Config[],
    zlAsicaTsConfig: Linter.Config[];
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
