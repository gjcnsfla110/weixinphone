import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

import postcssImport from 'postcss-import';

export default defineConfig({
  plugins: [
	  uni()
	  ],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://clphone.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
      postcss: {
        plugins: [postcssImport()]
      }
  },
});