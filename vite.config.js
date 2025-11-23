import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config: set dev server port to 3000
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false,
    host: true
  }
})
