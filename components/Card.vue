<template>
  <component :is="to ? nuxtLink : 'div'" :to="to" :class="$style['card']">
    <div v-if="image" :class="$style['card__image']">
      <NuxtImg :src="image" />
    </div>
    <div :class="$style['card__content']">
      <slot />
    </div>
    <div v-if="!!$slots.actions" :class="$style['card__actions']">
      <slot name="actions" />
    </div>
  </component>
</template>
<script lang="ts" setup>
const nuxtLink = resolveComponent('nuxt-link')
defineProps<{
  image?: string
  to?: object
}>()
</script>
<style lang="scss" module>
.card {
  background-color: var(--secondary-surface);
  color: var(--text-base);
  display: inline-block;
  box-shadow: var(--box-shadow-elevation-3);
  text-decoration: none;

  &[href]:hover {
    color: var(--hr-orange);
  }

  &__image {
    aspect-ratio: 16/9;
    display: flex;

    & > * {
      width: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: var(--spacing-l);
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing);
    padding: var(--spacing);
  }
}
</style>
