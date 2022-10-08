import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

const config = defineConfig({
  plugins: [
    vue(),
    ssr({ prerender: true }),
    tsconfigPaths({ loose: true }),
    // CONFIGURATION STEPS HERE https://vue-i18n.intlify.dev/guide/introduction.html
    vueI18n()
  ],
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
