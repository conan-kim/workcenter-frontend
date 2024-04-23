import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
const __dirname = path.resolve()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/assets/scss/abstracts";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@@': path.resolve(__dirname, 'public')
    }
  }
})
