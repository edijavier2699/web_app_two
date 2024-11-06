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
        '/investors/',
        '/assets-owners/',
        '/liquidity-pools/',
        // Rutas dinámicas
        '/faq-category/:id/',         // Para categorías en FAQ
        '/blog/article/:id/',         // Para artículos individuales
        '/property/details/:id/',     // Para propiedades específicas
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
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});

