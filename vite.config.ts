import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nr12: resolve(__dirname, 'nr-12.html'),
        // Quando criar o PMOC, adicione a linha abaixo:
        // pmoc: resolve(__dirname, 'pmoc.html'),
      },
    },
  },
});
