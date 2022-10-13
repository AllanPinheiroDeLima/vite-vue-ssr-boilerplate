<template>
  <v-app app>
    <v-app-bar height="40" app fixed color="transparent" flat class="v-container blurred-background">
        <v-app-bar-title>Vite SSR Vuetify Boilerplate</v-app-bar-title>
        <v-spacer></v-spacer>
      <template v-slot:append>
        <div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn color="grey lighten-2" icon="mdi-translate" v-bind="props"></v-btn>
            </template>
            <v-list min-width="150">
              <v-list-item v-for="lang in languages">{{ lang.name }}</v-list-item>
            </v-list>
          </v-menu>
        </div>
        <v-divider vertical class="mx-6"></v-divider>
        <v-switch
          hide-details
          density="comfortable"
          inset=""
          v-model="darkTheme"
          true-icon="mdi-moon-waxing-crescent"
          false-icon="mdi-white-balance-sunny"
        />
        <v-divider vertical class="mx-6"></v-divider>
        <v-btn color="grey lighten-2" icon="mdi-twitter" class="mr-6"></v-btn>
        <v-btn color="grey lighten-2" icon="mdi-github"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>

import {ref, watch} from "vue";
import {useTheme} from "vuetify";
import {useI18n} from "vue-i18n";

const darkTheme = ref(true);

const theme = useTheme();
watch(darkTheme, (isDark) => {
  theme.global.name.value = isDark ? "dark" : "light"
})

const lang = useI18n();
const languages = ref([
  { name: "Português", code: "pt" },
  { name: "English", code: "en" }
]);

</script>
<style>
.blurred-background {
  backdrop-filter: blur(30px);
}
</style>