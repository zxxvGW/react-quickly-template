/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  mode: 'development',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
  },
  server: {
    port: 8848
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
