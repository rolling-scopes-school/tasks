/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      // Enforce the task's coverage bar (see TASK.md — statements >= 80%).
      thresholds: {
        statements: 80,
        branches: 50,
        functions: 50,
        lines: 80,
      },
      exclude: ['src/main.tsx', 'src/vite-env.d.ts', '**/*.config.*', '**/*.test.{ts,tsx}'],
    },
  },
});
