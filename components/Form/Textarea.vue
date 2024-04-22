<template>
  <label :class="$style['form-input']">
    <div :class="$style['form-input__label']">
      {{ label }}
    </div>
    <textarea v-model="model" v-bind="$attrs" :class="$style['form-input__input']" />
  </label>
</template>
<script setup lang="ts">
const model = defineModel()
defineProps<{
  label?: string
}>()
</script>
<style lang="scss" module>
.form-input {
  width: 100%;
  &__label {
    font-size: var(--font-size);
    // font-family: var(--font-family-slab);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-s);
  }

  &__input {
    border: 0;
    outline: 0;
    background-color: transparent;
    color: var(--text-base);
    border: 1px solid var(--border-subtle);
    padding: var(--spacing-m);
    font-size: var(--font-size);
    outline: none;
    min-width: 250px;
    resize: none;
    width: 100%;

    &:focus  {
      border-color: var(--color-primary);
    }
  }

}
</style>
