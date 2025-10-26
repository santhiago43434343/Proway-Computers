import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import history from 'connect-history-api-fallback';
import path from 'path'; // ⬅️ Adicione este import

export default defineConfig({
  plugins: [angular()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@services': path.resolve(__dirname, 'src/app/services'),
      '@components': path.resolve(__dirname, 'src/app/components')
    }
  },
  server: {
    host: true,
    fs: {
      strict: false
    },
    middlewareMode: false,
    //@ts-expect-error: Vite não reconhece setupMiddlewares na tipagem
    setupMiddlewares: (middlewares) => {
      middlewares.use(history({
        index: '/index.html',
        verbose: true,
        disableDotRule: true,
        htmlAcceptHeaders: ['text/html'],
        rewrites: [
          { from: /^\/api\/.*$/, to: '/index.html'}
        ]
      }));
      return middlewares;
    }
  },
  build: {
    outDir: 'dist/ecommerce',
    target: 'es2022'
  }
});











