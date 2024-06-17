<template>
  <div :class="$style['sponsors']">
    <div :class="$style['sponsors__wrapper']">
      <template v-for="sponsor in clonedStories" :key="sponsor">
        <component :is="sponsor.content.link.cached_url ? nuxtLink : 'div'" :to="sponsor.content.link.cached_url ? sponsor.content.link.cached_url : undefined" :class="$style['sponsors__item']">
          <NuxtImg v-if="sponsor.content.image.filename" :src="sponsor.content.image.filename" :alt="sponsor.content.name" :class="$style['sponsors__image']" />
          <span v-else :class="$style['sponsors__name']">{{ sponsor.content.name }}</span>
        </component>
      </template>
    </div>
  </div>
</template>
<script setup>
const nuxtLink = resolveComponent('nuxt-link')
const { stories } = await useHrStoryblok('cdn/stories', { version: 'published', content_type: 'Sponsor' })

const sortedStories = stories.sort((a, b) => {
  return a.content.image?.filename && !b.content.image?.filename ? -1 : 1
})

const clonedStories = [...sortedStories, ...sortedStories, ...sortedStories]
</script>
<style lang="scss" module>
.sponsors {
  display: flex;
  gap: var(--spacing-xxxl);
  overflow: hidden;
  mix-blend-mode: hard-light;

  &__item {
    color: var(--background-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    height: 5rem;
    transform: scale(0.9);
    transition: transform var(--duration-micro-normal) var(--easing-transition);
    will-change: transform;

    &:hover {
      opacity: 0.8;
      transform: scale(1);
    }
  }

  &__image {
    cursor: pointer;
    object-fit: contain;
    width: 100%;
    height: 100%;
    padding: var(--spacing);
  }

  &__name {
    color: var(--text-base);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    padding: var(--spacing);
    width: 100%;
    height: 100%;
  }

  &__wrapper {
    display: flex;
    gap: var(--spacing-xl);
    min-width: max-content;
    width:max-content;
    white-space: nowrap;
    animation: marquee 50s linear infinite;
    will-change: transform;
    transform: translateX(-33.333%)
  }

  &:hover {
    .sponsors__wrapper {
      animation-play-state: paused;
    }
  }
}

@keyframes marquee {
  from {
    transform: translateX(-33.333%)
  }

  to {
    transform: translateX(-66.66%);
  }
}
</style>
