<template>
  <header :class="$style['top-bar']">
    <div :class="$style['container']">
      <Button :to="{path: '/'}" color="transparent" :class="$style['top-bar__button']" styleless>
        <Logo :class="$style['top-bar__logo']" />
      </Button>
      <div :class="$style['top-bar__content']">
        <slot />
      </div>
      <div :class="$style['top-bar__mobile-content']">
        <slot name="mobile" />
      </div>
    </div>
  </header>
</template>
<style lang="scss" module>
.top-bar {
    background-color: var(--secondary-surface);
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: var(--topbar-height);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    container: topbar / inline-size;

    &__button {
        margin-right: var(--spacing-xl);
        margin-left: calc(var(--spacing) * -1);
    }

    &__logo {
        width: 15rem;

    }

    &__content {
        display: flex;

        @container (width < 70rem) {
            display: none;
        }
    }

    &__mobile-content {
        display: flex;
        margin-left: auto;

        @container (width >= 70rem) {
            display: none;
        }
    }
}

.container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    max-width: var(--container-width);
    margin: 0 auto;
    width: 100%;
}
</style>
