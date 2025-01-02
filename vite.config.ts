import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import url from 'url'
import fs from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 讀取 package.json 並提取 name 屬性
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'));
const baseName = packageJson.name || '';

export default defineConfig({
  plugins: [react()],
  base: `/${baseName}/`,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
})
