import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import vuetify from 'vite-plugin-vuetify'
import path from "path";

const config = defineConfig({
  plugins: [
    vue(),
    ssr({ prerender: true, includeCSS: ["@mdi/font/css/materialdesignicons.css"] }),
    // tsconfigPaths({ loose: true, root: "." }),
    // CONFIGURATION STEPS HERE https://vue-i18n.intlify.dev/guide/introduction.html
    vueI18n(),
    vuetify({ autoImport: true })
  ],
  define: { 'process.env': {} },
  ssr: { noExternal: ['vuetify'] },
    resolve: {
    alias: {
      '@/pages': path.resolve(__dirname, './pages'),
      '@': path.resolve(__dirname, './')
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    reporters: ["dot", "json"],
    outputFile: ".vitest-result.json",
    root: ".",
    coverage: {
      all: true,
      // Should you have more folders to watch, like composables, clients or other
      // you may have to include them here
      include: ["pages", "renderer", "store"],
      reporter: ["lcov", "html", "text"],
      extension: [".vue", ".ts"],
      branches: 85,
      lines: 85,
      statements: 85,
      functions: 85
    }
  }
})

export default config
