import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    rollupOptions: {
      external: ['/src/main.tsx'] // <-- Add this line if absolutely necessary
    }
  }
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
