<template>
  <!-- THIS ONE IS IN GLOBAL SCOPE, REFERENCED BY GLOBAL INJECTION AT THE CREATION
      MORE INFORMATION HERE https://vue-i18n.intlify.dev/guide/advanced/composition.html#global-scope
    -->
  <h1 class="text-lg font-bold">{{ $t("message.hello") }}</h1>
  {{ t("title") }}
  <ul>
    <li>{{ t("list.item1") }}</li>
    <li>{{ t("list.item2") }} <Counter /></li>
  </ul>
</template>

<script lang="ts" setup>
import Counter from './Counter.vue'
import {useI18n} from "vue-i18n";
/*
* This messages are inject through the composition api
* More information here: https://vue-i18n.intlify.dev/guide/advanced/composition.html#composition-api
* */
const { t } = useI18n()


</script>
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
