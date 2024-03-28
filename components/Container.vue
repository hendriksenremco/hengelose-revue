<template>
  <div
    :class="[
      $style['container'],
      {[$style['container--no-padding']]: noPadding},
      {[$style['container--full-width']]: fullWidth},
      {[$style['container--height-auto']]: heightAuto},
    ]">
    <slot />
  </div>
</template>
<script setup>
defineProps({
  noPadding: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  heightAuto: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="scss" module>
.container {
    max-width: var(--container-width);
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    padding: 5rem 0 var(--spacing-l) 0;

    @media (max-width: var(--container-width)) {
        padding: var(--spacing-l);
        padding-top: var(--topbar-height);
    }

    &--no-padding {
        padding: 0;
        padding-top: var(--topbar-height);
    }

    &--full-width {
        max-width: 100%;
    }

    &--height-auto {
        height: auto;
    }
}
</style>
