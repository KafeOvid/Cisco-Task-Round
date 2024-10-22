import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Binds to all available network interfaces
    port: 5173,       // Default port or your preferred port
    strictPort: true, // Prevents Vite from switching to a different port
  }
})
