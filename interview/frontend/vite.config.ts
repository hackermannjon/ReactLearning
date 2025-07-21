// Arquivo: frontend/vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite que o servidor seja acessado pela rede do Docker
    port: 5173, // Define a porta padrão do Vite (que mapeamos no docker-compose.dev.yml)
  }
})