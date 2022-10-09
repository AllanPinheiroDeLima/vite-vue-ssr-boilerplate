import Vuetify from "./vuetify"
import {render, RenderOptions} from "@testing-library/vue"

export const vuetifyRender = (component: any, renderOptions?: RenderOptions) => {
  return render(component, {
    ...renderOptions,
    global: {
      ...renderOptions?.global,
      plugins: (renderOptions?.global?.plugins ?? [])?.concat(Vuetify)
    }
  })
}
