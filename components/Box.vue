<template>
  <section :class="$style['box']">
    <slot />
  </section>
</template>
<style lang="scss" module>
.box {
  background: linear-gradient(0deg, var(--background-base), var(--hr-red));
  padding: var(--spacing-l);
  position: relative;

  @media (width <= 70rem) {
    padding: var(--spacing);
  }
}
</style>
