import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  preview: {
    host: true,             // Allow external access
    port: 4173,             // Make sure Render can detect the port
    allowedHosts: ['flashpay-frontend-amws.onrender.com'], // Add your Render domain
  },
})
