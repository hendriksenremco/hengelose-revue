<script setup>
import { Facebook, Instagram, MoveRight, ExternalLink, Phone, Mail, Menu, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
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
const icons = { Facebook, Instagram, MoveRight, ExternalLink, Phone, Mail, Menu, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, X }

if (!icons[props.name]) {
  console.log('missing icon', props.name)
}

</script>

<template>
  <component
    :is="icons[name]"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass" />
</template>
