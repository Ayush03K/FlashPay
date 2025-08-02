import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    host: true, 
    port: 4173, // process.env.PORT if needed
    allowedHosts: ['flashpay-frontend-amws.onrender.com'], // Allow your Render domain
  }
})
