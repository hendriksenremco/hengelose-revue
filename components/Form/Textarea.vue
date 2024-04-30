<template>
  <label :class="[$style['form-input'], {[$style['form-input--error']]: meta.dirty && !meta.valid }]">
    <div :class="$style['form-input__label']">
      {{ label }}
    </div>
    <textarea v-model="value" v-bind="$attrs" :class="$style['form-input__input']" />
    <div v-if="errors.length" :class="$style['form-input__errors']">
      {{ errors[0] }}
    </div>
  </label>
</template>
<script setup lang="ts">
import { useField } from 'vee-validate'
const props = defineProps<{
  name: string
  label?: string
}>()

const { value, errors, meta } = useField(() => props.name)
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

  &__errors {
    color: var(--primary-color-50);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    padding: var(--spacing) 0;
  }

  &--error {
    .form-input__input {
      border-bottom-color: var(--primary-color-50);
    }
  }

}
</style>
