import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['../..']
    }
  },
  resolve: {
    alias: [
      { find: '@lm-prototype-stencil/components/loader', replacement: path.resolve(__dirname, '../../packages/components/loader') },
      { find: '@lm-prototype-stencil/components-react', replacement: path.resolve(__dirname, '../../packages/components-react/src') },
      { find: '@lm-prototype-stencil/icons/lm-prototype-stencil-icon', replacement: path.resolve(__dirname, '../../packages/icons/dist/components/lm-prototype-stencil-icon.js') },
      { find: '@lm-prototype-stencil/icons', replacement: path.resolve(__dirname, '../../packages/icons') },
      { find: '@lm-prototype-stencil/components', replacement: path.resolve(__dirname, '../../packages/components') },
    ],
  },
  optimizeDeps: {
    include: ['@lm-prototype-stencil/icons'],
    exclude: ['@lm-prototype-stencil/components-react'],
  },
})
