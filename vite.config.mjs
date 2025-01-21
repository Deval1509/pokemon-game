import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      '.jsx': 'application/javascript',
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});



