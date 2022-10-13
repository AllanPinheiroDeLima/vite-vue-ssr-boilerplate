<template>
  <v-row align="center" justify="center" style="height: 100vh">
    <v-container class="text-center" style="max-width: 50%">
      <div style="position: relative">
        <div class="vite-brackground"></div>
        <v-img height="300" src="/assets/images/logo-with-shadow.png"></v-img>
      </div>
      <h1 class="text-md-h2 font-weight-bold">Next generation front-end tecnologies</h1>
      <p class="text-md-h4 text-disabled mt-6">Boilerplate for you, who needs to start fast and come up with solutions, not problems.</p>
    </v-container>
  </v-row>
  <v-container class="px-6">
    <h1 class="text-md-h4 font-weight-bold">State of the art</h1>
    <p class="text-md-h5 text-disabled">We've combined several tools, which, we believe, may help you start and finish your dream app.</p>
  </v-container>
  <v-row class="v-container mx-auto" style="align-items: stretch">
      <v-col md="4" sm="6" cols="12" v-for="feature in features" :key="feature.title">
        <v-card height="100%" class="pa-2" :color="cardBackground" rounded>
          <v-card-text>
            <v-avatar rounded color="grey-darken-3" class="pa-2" size="50">
              <v-img :src="feature.logo" width="40"></v-img>
            </v-avatar>
          </v-card-text>
          <v-card-title class="text-md-h5 font-weight-bold mb-0">{{ feature.title }}</v-card-title>
          <v-card-text class="mt-0 text-md-body-1">{{ feature.description }}</v-card-text>
          <v-card-actions>
            <v-btn
              :href="feature.docs"
              target="_blank"
              rounded="pill"
              variant="tonal"
            >Learn more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  <v-footer class="d-flex justify-center mt-12">
    <p>Made By ZRI Team</p>
  </v-footer>
  <!-- THIS ONE IS IN GLOBAL SCOPE, REFERENCED BY GLOBAL INJECTION AT THE CREATION
      MORE INFORMATION HERE https://vue-i18n.intlify.dev/guide/advanced/composition.html#global-scope
    -->
<!--  <h1>{{ $t("message.hello") }}</h1>-->
<!--  {{ t("title") }}-->
<!--  <ul>-->
<!--    <li>{{ t("list.item1") }}</li>-->
<!--    <li>{{ t("list.item2") }} <Counter /></li>-->
<!--  </ul>-->
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
import {computed, ref} from "vue";
import {useTheme} from "vuetify";

const theme = useTheme();

const cardBackground = computed(() => theme.global.name.value === "light" && "#f4f4f4")

/*
* This messages are inject throuhg the composition api
* More information here: https://vue-i18n.intlify.dev/guide/advanced/composition.html#composition-api
* */
const { t } = useI18n()

const features = ref([
  { title: "Vuetify", docs: "https://next.vuetifyjs.com/en/introduction/why-vuetify/", logo: "/assets/images/vuetify.png", description: "Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips."},
  { title: "Storybook", docs: "https://storybook.js.org/docs/react/get-started/introduction", logo: "/assets/images/storybook.png", description: "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free."},
  { title: "Vitest", docs: "https://vitest.dev/guide/", logo: "/assets/images/vitest.svg", description: "A Vite-native unit test framework. It's fast!. A blazing fast unit test framework powered by Vite."},
  { title: "Pinia", docs: "https://pinia.vuejs.org/introduction.html#why-should-i-use-pinia", logo: "/assets/images/pinia.svg", description: "Pinia started as an experiment to redesign what a Store for Vue could look like with the Composition API. Pinia works for both Vue 2 and Vue 3 and doesn't require you to use the composition API. "},
  { title: "VueI18n", docs: "https://kazupon.github.io/vue-i18n/introduction.html", logo: "/assets/images/vue-i18n.png", description: "Vue I18n is internationalization plugin for Vue.js. You can introduce internationalization into your app with a simple but powerful API"},
  { title: "SSR Ready", docs: "https://vite-plugin-ssr.com/", logo: "/assets/images/vite-ssr.svg", description: "Like Next.js/Nuxt but as do-one-thing-do-it-well Vite plugin."}
])

</script>
<style>
.vite-brackground {
  position: absolute;
  width: 250px;
  height: 250px;
  filter: blur(72px);
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient( -45deg, #bd34fe 50%, #47caff 50% );
}
</style>
<!--ENABLING SFC SUPPORT IS MADE THROUGH COMPOSITION API
  MORE INFORMATION HERE: https://vue-i18n.intlify.dev/guide/advanced/sfc.html#single-file-components
-->
<i18n>
{
  "pt": {
    "title": "Essa página é",
    "list": {
      "item1": "Renderizada em HTML",
      "item2": "Interativa."
    }
  },
  "en": {
    "title": "This page is",
    "list": {
      "item1": "Rendered to HTML.",
      "item2": "Interactive."
    }
  }
}
</i18n>
