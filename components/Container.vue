<template>
  <div
    :class="[
      $style['container'],
      {[$style['container--no-padding']]: noPadding},
      {[$style['container--no-padding-top']]: noPaddingTop},
      {[$style['container--full-width']]: fullWidth},
      {[$style['container--full-height']]: fullHeight},
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
  noPaddingTop: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  fullHeight: {
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
  padding: 5rem 0 var(--spacing-l) 0;

  @media (width <= 70rem) {
    padding: var(--spacing);
    padding-top: calc(var(--topbar-height) + var(--spacing));
  }

  &--no-padding{
      padding: 0;
      padding-top: var(--topbar-height);
  }

  &--no-padding-top {
    padding-top: 0;
  }

  &--full-width {
      max-width: 100%;
  }

  &--full-height {
    min-height: calc(100vh - var(--topbar-height));
  }
}

</style>
