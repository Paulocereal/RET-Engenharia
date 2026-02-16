import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração otimizada para SPA e GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './', 
});
