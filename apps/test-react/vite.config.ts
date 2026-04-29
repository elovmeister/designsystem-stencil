import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@lm-prototype-stencil/components/loader': path.resolve(__dirname, '../../packages/components/loader'),
      '@lm-prototype-stencil/components-react': path.resolve(__dirname, '../../packages/components-react/src'),
      '@lm-prototype-stencil/components': path.resolve(__dirname, '../../packages/components'),
    },
  },
})