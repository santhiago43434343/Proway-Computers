// vite.config.ts
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [angular()],
  base: mode === 'production' ? '/Proway-Computers/' : '/',
  build: {
    outDir: 'docs'
  },
  server: {
    port: 5173,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@services': path.resolve(__dirname, 'src/app/services'),
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@pages': path.resolve(__dirname, 'src/app/pages')
    }
  }
}));
