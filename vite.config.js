// /** @type {import('vite').UserConfig} */
import { resolve } from 'path'
// import { postcss } from './postcss.config.js'
// import liveReload from 'vite-plugin-live-reload'

export default {
   server: {
      port: 3000,
   },
   root: 'src',
   emptyOutDir: true,
   build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'src/index.html'),
            // about: resolve(__dirname, './src/'),
         },
      },
   },
   css: {
      devSourcemap: true,
      preprocessorOptions: {
         scss: {
            api: 'modern-compiler', // or "modern"
         },
      },
   },
}
// css: { postcss },
