import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        include: ["**/*.test.ts", "**/*.test.tsx"],
        setupFiles: ["src/testConfig.ts"],
        coverage: {
            include: ["src/**/*.ts", "src/**/*.tsx"],
            exclude: ["src/main.tsx", "src/**/types/*.ts", "src/**/*.d.ts"],
        },
    },
});
