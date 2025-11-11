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
      '@pages': path.resolve(__dirname, 'src/app/pages'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: 
  `@use "@styles/variables" as *;
   @use "@styles/spacing" as *;
   @use "@styles/breakpoints" as *;
   @use "@styles/mixins" as *;
   @use "@styles/base";
   @use "@styles/global";
   @use "@styles/layout";
  ` //automatico para injeção global , ou personalizado 
      }
    }
  }
}));
