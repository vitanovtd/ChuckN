import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { fileURLToPath} from 'url';
import {dirname, resolve} from 'path';
 
import sass from 'sass';

// Global pre requirement imports for styling
// within the components ... ES6 utilized abroad ...
// aboslute paths sometimes required in order to be working ?

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);





export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: `
        
          @import "./src/styles/_variables.scss";
          @import "./src/styles/_mixins.scss";
          @import "./src/styles/_global.scss";
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

