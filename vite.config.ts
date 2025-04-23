import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true, // ファイル監視を強制的にポーリング方式に
    },
    host: true, // LAN内アクセスやWSL対策
  },
  plugins: [react(), tailwindcss()],
})
