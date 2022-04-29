import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      viteMockServe({
          mockPath: './src/mock/index', // mock文件所在文件夹
          localEnabled: true, // 是否应用于本地
          supportTs: true
    })
  ],
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
