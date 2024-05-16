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
             {[$style[`button--loading`]]: loading},
             {[$style[`button--icon-only`]]: iconOnly},
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
  },
  loading: {
    type: Boolean,
    default: false
  },
  iconOnly: {
    type: Boolean,
    default: false
  }
})

</script>
<style  lang="scss" module>
.button {
    --background-color: var(--secondary-surface);
    --color: var(--secondary-on-surface);
    --content-height: var(--spacing-xxl);
    --padding-y: var(--spacing);
    --padding-x: var(--spacing-m);
    --icon-size: var(--spacing-xl);
    --font-size: --font-size-base;

    background-color: var(--background-color);
    border: 0;

    cursor: pointer;
    color: var(--color);
    display: inline-flex;
    align-items: center;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size);
    font-family: var(--font-family-slab);
    line-height: 1;
    padding: var(--padding-y) var(--padding-x);
    vertical-align: middle;
    position: relative;
    transition: all var(--duration-micro-fast) var(--easing-transition);
    text-decoration: none;
    font-style:normal;
    overflow: hidden;
    white-space: nowrap;

    &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: var(--opacity-surface);
        z-index: 0;
        width: 100%;
        height: 100%;
        transition: transform var(--duration-micro-fast) var(--easing-transition);
        will-change: transform;
    }

    &:hover {
        --background-color: var(--primary-surface-state-1);
        &:before {
            transform: translateY(-100%) translateZ(0);
        }
    }

    &:active {
        --background-color: var(--primary-surface-state-2);
    }

    &__content {
        clip-path: view-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing);
        height: var(--content-height);
        padding: var(--padding-y) var(--padding-x);
        position: relative;
        z-index: 0;
        width: 100%;
    }

    &__icon {
        display: flex;

        &--left {
            margin-right: var(--spacing);
        }

        &--right {
            margin-left: var(--spacing);
        }
        svg {
            margin: 0 calc(var(--spacing-s) * -1);
            width: var(--icon-size);
            height: var(--icon-size);
            stroke-width: 1.5;
        }
    }

    &--loading {
      opacity: 0.75;
      &:before {
        top: 0;
        animation: loading 2s var(--easing-transition) infinite;
      }
    }

    &--rounded {
        border-radius: 100%;
    }

    &--cta {
        background: var(--cta-gradient);
        color: var(--primary-cta-on-base);
    }

    &--with-border {
      box-shadow: inset 0px 0px 0px 2px var(--text-base);
      color: var(--text-base);
    }

    &--styleless {
      --padding-x: var(--spacing);
      background-color: transparent;
      font-family: var(--font-family);
      text-transform: none;
      font-weight: var(--font-weight-normal);

      .button__content {
          height: auto;
          // padding: 0;
      }
    }

    &--opacity {
      background-color: var(--opacity-surface);
    }

    &--transparent {
      background-color: transparent;
    }

    &--big {
        --content-height: var(--spacing-xxxl);
        --padding-x: var(--spacing-xxl);
        --font-size: var(--font-size-large);
    }

    &--icon-only {
      .button__icon {
        margin: 0;
      }
    }
}

@keyframes loading {
  0% {
    transform: scaleX(0);
    transform-origin: 0% 0%;
  }
  50% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
    left: 0;
  }
  100% {
    left: 100%;
  }
}
</style>
