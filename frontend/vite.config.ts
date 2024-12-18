import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: 'stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
    sitemap({
      hostname: 'https://www.tokunize.com', // Reemplaza con tu dominio
      dynamicRoutes: [
        '/',
        '/blog/',
        '/marketplace/',
        '/faq/',
        '/privacy-policy/',
        '/legal-notices/',
        '/terms-of-services/',
        '/about-us/',
        '/how-it-works/',
        '/faq-category/:id/', // Para categorías en FAQ
        '/blog/article/:id/', // Para artículos individuales
        '/property/details/:id/', // Para propiedades específicas
      ],
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
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Dependencias más grandes o usadas frecuentemente
            if (id.includes('@radix-ui')) return 'radix-ui';
            if (id.includes('react-leaflet') || id.includes('leaflet')) return 'leaflet';
            if (id.includes('react-quill')) return 'react-quill';
            if (id.includes('recharts')) return 'recharts';
            if (id.includes('axios')) return 'axios';
            if (id.includes('zod')) return 'zod';
            if (id.includes('@heroicons/react') || id.includes('lucide-react')) return 'icons';
            if (id.includes('react') || id.includes('react-dom')) return 'react';

            // Agrupa otras dependencias en un vendor general
            return 'vendor';
          }
        },
      },
    },
  },
});


