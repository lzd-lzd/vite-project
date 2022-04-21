import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`
    }
  },
  server: {
    port: 4000,
    // open: true,
    // proxy: { // 代理配置
    //   '/dev': ''
    // },
  },
})
