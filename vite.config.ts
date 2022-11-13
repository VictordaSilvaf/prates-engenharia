import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import react from "@vitejs/plugin-react";
import * as path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@assets': path.resolve(__dirname, '/assets'),
      '@services': path.resolve(__dirname, '/src/services'),
      '@templates': path.resolve(__dirname, '/src/templates'),
      '@public': path.resolve(__dirname, '/src/public')
    }
  },
  plugins: [react(), imagetools()],
});
