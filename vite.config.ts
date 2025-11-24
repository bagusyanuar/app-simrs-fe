import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'url'
import generouted from '@generouted/react-router/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), generouted()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
