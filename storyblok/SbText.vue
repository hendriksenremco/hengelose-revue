<template>
  <div v-editable="blok">
    <Vue3RuntimeTemplate :template="resolvedRichText" />
  </div>
</template>
<script setup>
import Vue3RuntimeTemplate from 'vue3-runtime-template'
const props = defineProps({ blok: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.text, {
  resolver: (component, blok) => {
    return `<component :blok='${JSON.stringify(blok)}' is="${component}" />`
  }
}))
</script>
