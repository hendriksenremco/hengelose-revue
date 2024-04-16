<template>
  <component
    :is="to ? nuxtLink :'button'"
    :to="to"
    :class="[$style['button'],
             {[$style[`button--${color}`]]: color},
             {[$style[`button--${size}`]]: size},
             {[$style[`button--styleless`]]: styleless},
             {[$style[`button--with-border`]]: withBorder},
             {[$style[`button--transparent`]]: transparent},
             {[$style[`button--rounded`]]: rounded},
    ]">
    <span :class="$style['button__content']">
      <span v-if="icon && iconPos ==='left'" :class="[$style['button__icon'], $style['button__icon--left']]">
        <Icon :name="icon" />
      </span>
      <slot />

      <span v-if="icon && iconPos === 'right'" :class="[$style['button__icon'], $style['button__icon--right']]">
        <Icon :name="icon" />
      </span>
    </span>
  </component>
</template>
<script setup>
const nuxtLink = resolveComponent('nuxt-link')
defineProps({
  to: {
    type: [String, Object],
    default: null
  },
  color: {
    type: String,
    default: null
  },
  withBorder: {
    type: Boolean,
    default: null
  },
  transparent: {
    type: Boolean,
    default: null
  },
  size: {
    type: String,
    default: null
  },
  iconPos: {
    type: String,
    default: 'left'
  },
  icon: {
    type: String,
    default: null
  },
  styleless: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  }
})

</script>
<style  lang="scss" module>
@import '~/css/components/_button';
</style>
