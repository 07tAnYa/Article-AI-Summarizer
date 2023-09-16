import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['axios'], // Specify 'axios' as an external dependency
      output: {
        format: 'commonjs', // Set the output format to 'commonjs'
      },
    },
  },
});
