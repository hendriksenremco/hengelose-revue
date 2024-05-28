<template>
  <component :is="to ? nuxtLink : 'div'" :to="to" :class="[$style['card'],{[$style['card--contain']]: contain }, ,{[$style[`card--${background}`]]: background }]">
    <div v-if="image" :class="$style['card__image']">
      <NuxtImg :src="image" />
    </div>
    <div v-if="!image && !!$slots.image" :class="$style['card__image']">
      <slot name="image" />
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
interface Props {
  image?: string | null
  to?: object | null,
  contain?: boolean,
  background?: 'dark' | 'light' | null
}
withDefaults(defineProps<Props>(), {
  image: null,
  to: null,
  contain: false,
  background: null
})
</script>
<style lang="scss" module>
.card {
  background-color: var(--secondary-surface);
  color: var(--secondary-on-surface);
  display: inline-flex;
  flex-direction: column;
  box-shadow: var(--box-shadow-elevation-1);
  text-decoration: none;
  transition: all var(--duration-micro-fast) var(--easing-transition);

  &[href]:hover {
    color: var(--color-primary);
    box-shadow: var(--box-shadow-elevation-3);
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
    height: auto;
    flex: 1;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing);
    padding: var(--spacing);
  }

  &--light {
    .card__image {
      background-color: var(--light-color-80);
    }
  }

  &--dark {
    .card__image {
      background-color: var(--dark-color-30);
    }
  }

  &--contain {
    .card__image {
      padding: var(--spacing);
      width: 100%;

      & > * {
        object-fit: contain;
      }
    }
  }
}
</style>
