<template>
  <div :class="[$style['hero'], {[$style['hero--height-auto']]: heightAuto}, {[$style['hero--no-overlay']]: noOverlay} ]">
    <div :class="$style['hero__container']">
      <div :class="$style['hero__background']">
        <slot name="background" />
      </div>
      <div :class="$style['hero__content']">
        <slot />
      </div>
      <div :class="$style['hero__actions']">
        <slot name="actions" />
      </div>
    </div>
  </div>
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
  background-size: cover;
  background-position: 50% 50%;
  justify-content: flex-end;
  display: flex;
  gap: var(--spacing-l);
  height: 75vh;
  padding: var(--spacing-xxl);
  position: relative;
  width: 100%;
  container: hero / inline-size;

  &:not(.hero--no-overlay)::after {
    background: linear-gradient(0deg,  rgb(0 0 0 / 100%) 0%, rgb(0 0 0 / 100%) 30%, rgb(0 0 0 / 0%));
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: auto;
    height: 50%;
    z-index: 0;

    @container(width >= 70rem) {
      background: linear-gradient(90deg,  rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 100%) 70%, rgb(0 0 0 / 100%));
      left: auto;
      right: 0;
      bottom: 0;
      height:100%;
      width: 50%;
    }
  }

  &:before {
    background-image: url(/video-overlay.svg);
    background-size: 3px;
    content: '';
    position: absolute;
    inset: 0;
    width: auto;
    height: auto;
    z-index: 1;
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
    max-width: var(--container-width);
    width: 100%;
    margin: 0 auto;

    @container(width >= 70rem) {
      align-items: flex-end;
      justify-content: center;
    }
  }

  &__content {
    color: var(--hero-text-color);
    text-align: center;
    position: relative;
    margin-bottom: var(--spacing-xxxl);
    z-index: 1;
    text-shadow: 2px 4px 20px var(--hr-black);

    @container hero (width >= 70rem) {
      text-align: right;

      h1 {
        font-size: var(--font-size-huge);
      }
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-l);
    position: relative;
    z-index: 1;

    @container hero (width >= 70rem) {
      flex-direction: row;
    }
  }

  &--height-auto {
    aspect-ratio: 16/9;
    height: auto;
  }
}
</style>
