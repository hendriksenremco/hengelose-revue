<template>
  <section :class="$style['box']">
    <slot />
  </section>
</template>
<style lang="scss" module>
.box {
  // background: var(--gradient-surface);
  color: var(--gradient-on-surface);
  padding: var(--spacing-l);
  position: relative;

  @media (width <= 70rem) {
    padding: var(--spacing);
  }
}
</style>
