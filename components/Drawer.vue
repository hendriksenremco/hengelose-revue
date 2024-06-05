<template>
  <aside
    ref="root"
    tabindex="1"
    :class="[
      $style['drawer']
    ]">
    <slot />

    <LazyButton
      icon="X"
      transparent
      icon-pos="right"
      :class="$style['drawer__close']"
      @click="$emit('close')">
      Sluiten
    </LazyButton>
    <div v-if="show":class="$style['drawer__bottom']">
      <slot name="bottom" />
    </div>
  </aside>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
const emit = defineEmits(['close'])
const root = ref()
onMounted(() => {
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
    background-color: hsl(var(--secondary-hue) var(--secondary-saturation) 30% / 95%);
    box-shadow: var(--box-shadow-elevation-3);
    padding-top: var(--spacing-xxxxl);
    z-index: 101;
    container: drawer / inline-size;

    &__close {
      height: var(--topbar-height);
      position: absolute;
      right: 0;
      top: 0;
    }

    &__bottom {
      align-items: stretch;
      justify-content: space-around;
      display: flex;
      margin-top: auto;
      width: auto;
    }
}

</style>
