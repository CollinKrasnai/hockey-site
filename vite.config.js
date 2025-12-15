import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // This outputs the built files to a folder named 'dist'
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  // This ensures Vercel serverless functions api/ work in local dev
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
