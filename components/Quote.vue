<template>
  <blockquote :class="$style['quote']">
    <picture v-if="image" :class="$style['quote__image']">
      <NuxtImg :src="image" />
    </picture>

    <div :class="$style['quote__content']">
      <slot />
    </div>
  </blockquote>
</template>
<script lang="ts" setup>
defineProps<{
  image?: string
}>()
</script>
<style lang="scss" module>
.quote {
  aspect-ratio: 3/1;
  background-color: var(--primary-surface);
  box-shadow: var(--box-shadow-elevation-1);
  color: var(--primary-on-surface);
  display: flex;
  font-size: var(--font-size-huge);
  font-family: var(--font-family-slab);
  container: quote / inline-size;

  &__image {
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
    overflow: hidden;
    height: 33.333cqw;
    width: auto;

    > * {
      display: flex;
      object-fit: contain;

    }
  }

  &__content {
    display: flex;
    align-items: center;
    font-size: 4cqw;
    padding: var(--spacing-xl);
    text-wrap: nowrap;
  }
}
</style>
