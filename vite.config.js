import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
  // Force Vite to always re-bundle and not use the cache
  optimizeDeps: {
    force: true
  },
  // Add a timestamp to the file names in production to bust cache
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].[hash].[time].js`,
        chunkFileNames: `[name].[hash].[time].js`,
        assetFileNames: `[name].[hash].[time].[ext]`,
      },
    },
  },
})