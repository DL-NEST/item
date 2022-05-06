import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require('path')

export default defineConfig({
  root: "src/render",
  base: './',
  plugins: [vue()],
  server:{
    proxy:{
      '/api': {
        target: 'http://localhost:5214/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  build: {
    outDir: "../../dist/render",
    emptyOutDir: true,
  },
  resolve: {
    alias: [
      {
        find:'@',
        replacement: path.resolve(__dirname, './'),
      },
      {
        find:'views',
        replacement: path.resolve(__dirname, './views'),
      }
    ],
  },
});
