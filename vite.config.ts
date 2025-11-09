// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    // Alterna automaticamente entre localhost e GitHub Pages
    base: mode === 'production' ? '/Proway-Computers/' : '/',
    
    build: {
      outDir: 'docs' // GitHub Pages espera a pasta docs/
    },

    server: {
      port: 4200,              // Porta igual ao Angular CLI
      historyApiFallback: true // Evita 404 em rotas Angular
    }
  };
});
