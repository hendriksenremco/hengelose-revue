<template>
  <nav
    ref="root"
    :class="[
      $style['drawer'],
      {[$style['drawer--show']]:show}
    ]">
    <slot />

    <IconButton :icon="iconClose" :class="$style['drawer__close']" @click="$emit('close')" />
  </nav>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
import iconClose from 'remixicon/icons/System/close-line.svg'
const emit = defineEmits(['close'])
defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
const root = ref()

onClickOutside(root, () => emit('close'))
</script>
<style lang="scss" module>
.drawer {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 90vw;
    transform: translateX(100%);
    transition: transform var(--duration-micro-normal) var(--easing-transition);
    background-color: var(--background-raised);
    box-shadow: var(--box-shadow-elevation-1);
    padding-top: var(--spacing-xxxxl);
    z-index:2;

    &--show {
        transform: translateX(0);
    }

    &__close {
        position: absolute;
        right: 0;
        top: 0;
    }
}

</style>
