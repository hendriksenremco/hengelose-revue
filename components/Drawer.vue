<template>
  <nav
    ref="root"
    :aria-hidden="!show"
    tabindex="1"
    :class="[
      $style['drawer'],
      {[$style['drawer--show']]:show}
    ]">
    <slot />

    <Button icon="X" transparent icon-pos="right" :class="$style['drawer__close']" @click="$emit('close')">
      Sluiten
    </Button>
  </nav>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
const emit = defineEmits(['close'])
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
const root = ref()

watch(() => props.show, () => {
  if (!props.show) { return false }
  root.value.focus()
})

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
    box-shadow: var(--box-shadow-elevation-3);
    padding-top: var(--spacing-xxxxl);
    z-index: 101;
    container: drawer / inline-size;
    opacity: 0;

    &--show {
        transform: translateX(0);
        opacity: 1;
    }

    &__close {
      height: var(--topbar-height);
      position: absolute;
      right: 0;
      top: 0;
    }
}

</style>
