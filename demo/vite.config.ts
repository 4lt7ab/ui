import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  server: { port: 4900, open: true },
  resolve: {
    alias: {
      '@4lt7ab/ui': path.resolve(__dirname, '../packages/ui/src'),
      '@4lt7ab/content': path.resolve(__dirname, '../packages/content/src'),
      '@4lt7ab/animations': path.resolve(__dirname, '../packages/animations/src'),
    },
  },
});
