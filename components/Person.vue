<template>
  <div :class="$style['person']">
    <div :class="$style['person__wrapper']">
      <div :class="$style['person__image']">
        <NuxtImg provider="storyblok" format="webp" width="400" quality="10" :src="image" />
      </div>
      <div :class="$style['person__content']">
        <h2 :class="$style['person__title']">
          {{ name }}
        </h2>
        <h3 :class="$style['person__subtitle']">
          {{ subtitle }}
        </h3>
        <p :class="$style['person__text']">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  image?: string
  name?: string
  subtitle?: string
}>()
</script>
<style lang="scss" module>
.person {
  container: person / inline-size;
  width: 100%;

  &__wrapper {
  background: var(--secondary-surface);
  color: var(--secondary-on-surface);
  display: flex;
  align-self: baseline;
  align-items: stretch;
  width: 100%;

    @container person (width < 25rem) {
        flex-direction: column;
    }
  }
  &__image {
    aspect-ratio: 1/1;
    display: flex;
    height: 100%;
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
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
      opacity: 0.2;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-l);
    width: 100%;
  }

  &__title {
    // color: var(--color-primary);
    font-family: var(--font-family-slab);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    // text-shadow: 2px 2px 0px var(--hr-black);
  }

  &__subtitle {
    font-weight: var(--font-weight-normal);
  }

  &__text {
    color: var(--text-subtle);
    font-style: italic;
    margin-top: var(--spacing-xl);
    font-weight: var(--font-weight-normal);
    width: 100%;

    &:before {
      content:'"'
    }
    &:after {
      content: '"'
    }
  }

  &__button {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: auto;
    width: 100%;
  }
}
</style>
