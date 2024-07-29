/// <reference types="vitest" />
import ImportMetaEnvPlugin from '@import-meta-env/unplugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    ImportMetaEnvPlugin.vite({ example: '.env.example' }),
    // ...,
  ],
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
