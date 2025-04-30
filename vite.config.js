import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; // fixed incorrect import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      // Removed 'react-slick' from externals – it must be bundled
      external: [], // or simply remove this key if not needed
    },
  },
});
