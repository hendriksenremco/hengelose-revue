<template>
  <div :class="$style['card']">
    <div v-if="image" :class="$style['card__image']">
      <img :src="image">
    </div>
    <div :class="$style['card__content']">
      <slot />
    </div>
    <div v-if="!!$slots.actions" :class="$style['card__actions']">
      <slot name="actions" />
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  image?: string
}>()
</script>
<style lang="scss" module>
.card {
  background-color: var(--secondary-surface);
  box-shadow: var(--box-shadow-elevation-3);
  max-width: 300px;

  &__image {
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
