import { createSSRApp, defineComponent, h } from 'vue'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
import type { PageContext } from './types'
import {pinia} from "../store";
import {i18n} from "../i18n";
import Vuetify from "../vuetify";

export { createApp }

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          }
        }
      )
    }
  })

  const app = createSSRApp(PageWithLayout)

  app.use(pinia)
  app.use(i18n)
  app.use(Vuetify)
  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}
