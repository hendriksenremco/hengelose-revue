<template>
  <section :class="[$style['hero'], {[$style['hero--height-auto']]: heightAuto}, {[$style['hero--no-overlay']]: noOverlay} ]">
    <div :class="$style['hero__container']">
      <picture :class="$style['hero__background']">
        <slot name="background" />
      </picture>
      <div v-if="!!$slots.default" :class="$style['hero__content']">
        <slot />
      </div>
      <menu v-if="!!$slots.actions" :class="$style['hero__actions']">
        <slot name="actions" />
      </menu>
    </div>
  </section>
</template>
<script lang="ts" setup>
interface Props {
  heightAuto?: boolean
  noOverlay?: boolean
}
withDefaults(defineProps<Props>(), {
  heightAuto: false,
  noOverlay: false
})
</script>
<style lang="scss"  module>

.hero {
  --text-base: var(--light-color-100);

  background-size: cover;
  background-position: 50% 50%;
  justify-content: flex-end;
  display: flex;
  gap: var(--spacing-l);
  height: 85vh;
  padding: var(--spacing-xxxxl);
  position: relative;
  width: 100%;
  container: hero / inline-size;

  &:not(.hero--no-overlay)::after {
    background: linear-gradient(0deg,  rgb(0 0 0 / 80%) 0%, rgb(0 0 0 / 80%) 30%, rgb(0 0 0 / 0%));
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: auto;
    height: 50%;
    z-index: 0;
  }

  &::before {
    background-color: var(--primary-color-50);
    background-image: url("/video-overlay.svg");
    background-size: 3px;
    content: '';
    position: absolute;
    inset: 0;
    width: auto;
    height: auto;
    z-index: 1;
    opacity: .5;
    mix-blend-mode: soft-light;

    // backdrop-filter: contrast(110%) sepia(20%);
  }

  &__background {
    background-color: #000;
    position: absolute;
    inset: 0;

    & > * {
      object-fit: cover;
      object-position: 50% 25%;
      height: 100%;
      width:  100%;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    max-width: var(--container-width);
    width: 100%;
    margin: 0 auto;
  }

  &__content {
    color: var(--hero-text-color);
    text-align: center;
    position: relative;
    z-index: 1;
    text-shadow: 2px 4px 20px var(--dark-color-20);

    h1 {
      text-transform: uppercase;
      font-size: clamp(1.5rem, 9cqw, 3.5rem);
      letter-spacing: 2px;
    }

    // @container hero (width >= 70rem) {
    //   text-align: right;
    // }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-l);
    position: relative;
    z-index: 1;

    & > * {
        flex: 1;
        width: 100%;
      }

    @container hero (width >= 70rem) {
      flex-direction: row;

      & > * {
        flex: unset;
        width: auto;
      }
    }
  }

  &--height-auto {
    aspect-ratio: 16/9;
    height: auto;
  }
}
</style>
