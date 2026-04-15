import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["packages/*/src/**/*.test.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@4lt7ab/core": path.resolve(__dirname, "packages/core/src"),
    },
  },
});
