<script setup>
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: Number,
  color: String,
  strokeWidth: Number,
  defaultClass: String
})
const fileName = props.name.split(/\.?(?=[A-Z])/).join('-').toLowerCase()

const icon = await import(`~/node_modules/lucide-vue-next/dist/esm/icons/${fileName}.js`)
</script>

<template>
  <component
    :is="icon.default"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass" />
</template>
