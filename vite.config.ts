import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MyPortfolio/', // 저장소 이름과 일치해야 함
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
