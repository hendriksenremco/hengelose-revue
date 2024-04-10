<template>
  <div :class="$style['grid']">
    <div v-for="(item, n) in items" :key="n" :class="$style['grid__item']">
      <slot name="item" :item="item" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  items: {
    type: [Array, Object],
    default: null
  },
  maxWidth: {
    type: Number,
    default: 180
  }
})

const maxWidth = computed(() => `${props.maxWidth}px`)
</script>
<style lang="scss" module>
.grid {
  display: grid;
  align-items: stretch;
  justify-items: space-between;
  grid-template-columns: repeat(auto-fill, minmax(v-bind('maxWidth'), 1fr));
  gap: var(--spacing-xl);

  &__item {
    background-color: var(--secondary-surface);
    height: 100%;
    display: flex;
    object-fit: cover;
    padding: var(--spacing-xl);
  }
}
</style>
