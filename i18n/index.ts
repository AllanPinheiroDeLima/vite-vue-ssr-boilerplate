import { createI18n } from 'vue-i18n'
import {messages} from "./locales";


// Configs for internationalization of your app.
// to disable them, go to app.ts and comment out the use statement
// from vue's app
export const i18n = createI18n({
  locale: "pt",
  // This disables the legacy api
  // which causes messages to pop up in dev mode,
  // even though they don't prevent app from working
  legacy:  false,
  globalInjection: true,
  messages
});

