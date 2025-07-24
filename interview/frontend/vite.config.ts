import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Adiciona a configuração para que o plugin do React use o plugin do styled-components
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true
    }
  }
})