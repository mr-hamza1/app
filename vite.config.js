import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000, // Set limit to 1000 kB (optional)

    // Rollup options for manual chunking
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split dependencies into separate chunks
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor'; // React-specific chunk
            }
            return 'vendor'; // General vendor chunk
          }
        },
      },
    },
  },
})
