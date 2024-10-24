import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer'; // Importamos correctamente el plugin

export default defineConfig({
  plugins: [
    react(),
    visualizer({ // Agregamos el plugin visualizer
      open: true, // Abre automáticamente el informe en el navegador
      filename: 'stats.html', // Nombre del archivo de reporte
      gzipSize: true, // Muestra el tamaño gzip
      brotliSize: true, // Muestra el tamaño brotli
    }),
  ],
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
