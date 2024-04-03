<template>
  <footer :class="$style['footer']">
    <Logo :class="$style['footer__logo']" />
  </footer>
</template>
<style lang="scss" module>
.footer {
  background-color: var(--background-base);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xxxl);

  &__logo {
    width: 200px;
  }
}
</style>
