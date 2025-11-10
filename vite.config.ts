// vite.config.ts
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(({ mode }) => ({
  plugins:[angular()],
  
    // Alterna automaticamente entre localhost e GitHub Pages
    base: mode === 'production' ? '/Proway-Computers/' : '/',
    build: {
      outDir: 'docs' // GitHub Pages espera a pasta docs/
    },
    server: {
      port: 5173,              // Porta igual ao Angular CLI
      historyApiFallback: true // Evita 404 em rotas Angular
    
  }
}));
