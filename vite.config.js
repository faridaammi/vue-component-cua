import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: path.resolve(__dirname,'src/index.js'),
      name:"vue-component-e-agadir",
      fileName: "vue-component-e-agadir",
    },
    rollupOptions :{
      external: ["vue"],
      output: {
        globals:{
          vue: "Vue"
        },
      }
    }
  },
  plugins: [vue()],
})
