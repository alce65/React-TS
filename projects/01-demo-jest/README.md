# React Demo

Pruebas de react para preparar el curso "TS medio con React" - 05/2025

## Installation

Vite + React + TypeScript

- **"react"**: "^19.0.0",
- "react-dom": "^19.0.0"
- **"typescript"**: "~5.7.2",
- "@types/react": "^19.0.10",
- "@types/react-dom": "^19.0.4",

- **"vite"**: "^6.3.1"
- "@vitejs/plugin-react": "^4.3.4",
  "@vitejs/plugin-react-swc": "^3.9.0", (Si se elige el template con SWC)
- "globals": "^16.0.0",

- **"eslint"**: "^9.22.0",
- "@eslint/js": "^9.22.0",
- "eslint-plugin-react-hooks": "^5.2.0",
- "eslint-plugin-react-refresh": "^0.4.19",
- "typescript-eslint": "^8.26.1",

### Dependencias

- **"jest"**: "^29.7.0",
- "@types/jest": "^29.5.14",
- "ts-jest": "^29.3.2",
- "jest-ts-webcompat-resolver": "^1.0.0",
- "identity-obj-proxy": "^3.0.0",
- **"jsdom"**: "^26.1.0",
- ["jest-environment-jsdom": "^29.7.0"],
- **"@testing-library/react"**: "^16.3.0",
- ["@testing-library/dom": "^10.4.0"],
- "@testing-library/jest-dom": "^6.6.3",
- "@testing-library/user-event": "^14.6.1",

#### Jest

```js jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
    preset: "ts-jest",
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ["dist"],
    resolver: "jest-ts-webcompat-resolver",
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy",
    },
};
```
