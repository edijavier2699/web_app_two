import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) { // Especificamos que 'id' es de tipo string
          if (id.includes('node_modules')) {
            return 'vendor'; // Agrupa los módulos de node_modules en un chunk separado
          }
        },
      },
    },
  },
});

