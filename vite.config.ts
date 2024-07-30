/// <reference types="vitest" />
import ImportMetaEnvPlugin from '@import-meta-env/unplugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// vitest automatically sets NODE_ENV to 'test' when running tests
const isTest = process.env.NODE_ENV === 'test';

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: '0.0.0.0',
  // },
  plugins: [
    !isTest && TanStackRouterVite(),
    viteReact(),
    ImportMetaEnvPlugin.vite({ example: '.env.example' }),
    // ...,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
    exclude: ['**/node_modules/**', '**/e2e/**'],
  },
});
