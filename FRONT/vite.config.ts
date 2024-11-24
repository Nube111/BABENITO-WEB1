import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        // Puedes agregar aquí opciones personalizadas si necesitas algún preprocesador como SASS, LESS, etc.
      },
    },
  },
})
