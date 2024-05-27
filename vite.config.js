// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Alias @ pour le répertoire src
      '@': path.resolve(__dirname, './src'),
      // Autres alias si nécessaire
    },
  },
  build: {
    // Configuration de la sortie et des assets
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
