<template>
  <div :class="$style['person']">
    <div :class="$style['person__image']">
      <NuxtImg :src="image" />
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
      <div :class="$style['person__button']">
        <Button icon="ArrowRight" icon-pos="right" transparent>
          Lees meer
        </Button>
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
  background: var(--secondary-surface);
  display: flex;

  &__image {
    aspect-ratio: 1/1;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    padding: var(--spacing-l);
    width: 100%;
  }

  &__title {
    // color: var(--hr-orange);
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
    align-items: flex-end;;
    width: 100%;
  }
}
</style>
