import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    // Цей рядок каже Vitest ігнорувати папку tests, де лежать E2E тести
    exclude: ['**/node_modules/**', '**/tests/**', '**/dist/**'],
  },
});