import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import {createVuetify, ThemeDefinition, useTheme} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {mdi} from "vuetify/lib/iconsets/mdi";

const myCustomLightTheme: ThemeDefinition = {
  dark: true,

  variables: {

  },
  colors: {
    primary: '#747bff',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}
export default createVuetify({
  components,
  directives,
  ssr: true,
  defaults: {
    VCard: {
      flat: true,
    },
    VBtn: {
      color: "primary"
    }
  },
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme
    }
  }
})
