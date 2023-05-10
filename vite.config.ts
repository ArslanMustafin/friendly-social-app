import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/friendly-social-app/',
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      routes: path.resolve(__dirname, './src/routes'),
      services: path.resolve(__dirname, './src/services'),
      types: path.resolve(__dirname, './src/types'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react({})],
  server: {
    proxy: {
      '/api': {
        target: 'http://friendly-api.multimedia-trainer.ru/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/files': {
        target: 'http://friendly-api.multimedia-trainer.ru/files',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/files/, ''),
      },
    },
  },
});
