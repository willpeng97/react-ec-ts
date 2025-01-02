import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/react-ec-ts/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
})
