<template>
  <header :class="$style['top-bar']">
    <div :class="$style['container']">
      <Button :to="{path: '/'}" color="transparent" aria-label="Hengelose Revue" :class="$style['top-bar__button']" styleless>
        <Logo :class="$style['top-bar__logo']" />
      </Button>
      <div :class="$style['top-bar__content']">
        <slot />
      </div>
      <div v-if="!!$slots.aside" :class="$style['top-bar__aside']">
        <slot name="aside" />
      </div>
      <div :class="$style['top-bar__mobile-content']">
        <slot name="mobile" />
      </div>
    </div>
  </header>
</template>
<style lang="scss" module>
.top-bar {
    // background-color: var(--secondary-surface);
    background: linear-gradient(0deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 90%));
    color: var(--secondary-on-surface);

    // box-shadow: var(--box-shadow-elevation-1);
    display: flex;

    // align-items: stretch;
    // justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    container: topbar / inline-size;

    &__button {
        margin-left: calc(var(--spacing) * -1);
    }

    &__logo {
        width: 15rem;

    }

    &__content {
        display: flex;

        & * {
          min-height: 100%;
        }

        @container (width < 70rem) {
            display: none;
        }
    }

    &__aside {
      display: flex;
      margin-left: auto;

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

    // justify-content: space-between;
    flex-direction: row;
    width: 100%;

    padding-top: env(titlebar-area-height, 0);
    height: calc(var(--topbar-height) + env(titlebar-area-height));

    // max-width: 80rem;
    margin: 0 auto;

    // width: 100%;
}
</style>
