# 06-Demo: React + TypeScript + Vite + Vitest

Proyecto con React, TypeScript y Vite.
Reubicado y modificado el ejemplo inicial.
Dependencias añadidas: vitest, jsdom y testing-library/react.

## Initial project

Por ser parte de un monorepo, de la instalación inicial de Vite con React y TypeScript se elimina

- .gitignore
- eslint.config.js
- el contenido original del readme

## Install Vitest

```bash
npm install -D vitest
npm install -D @vitest/coverage-c8
npm install -D jsdom
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Update `tsconfig.app.json` y `tsconfig.node.json` to add `vitest` to the `types` array:

```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  }
}
```

Update `vite.config.ts` to add the `vitest` property:

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['**/*.test.ts', '**/*.test.tsx'],
    globals: true,
    coverage: {
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/main.tsx', 'src/**/types/*.ts', 'src/**/*.d.ts'],
    },
  },
});
```

Update `package.json` to add the `test` script:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

### Mejorar el uso de los matchers extra de @testing-library/jest-dom

`testConfig.ts` to src folder:

```ts
import '@testing-library/jest-dom/vitest';
```

Update `vitest.config.ts` to add the `setupFiles` property:

```ts
setupFiles: ['./testConfig.ts'];
```
