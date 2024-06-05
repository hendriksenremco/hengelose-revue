<template>
  <div :class="$style['news']">
    <h2 :class="$style['news__title']">
      <NuxtLink :to="{name:'nieuws'}">
        {{ blok.title }}
      </NuxtLink>
    </h2>
    <div :class="$style['news__grid']">
      <LazyCard v-for="story in data.stories" :key="story._uid" :alt="'Afbeelding over ' + story.content.title.toLowerCase()" :to="{path: '/' + story.full_slug}" :image="story.content.image.filename ">
        <b>{{ story.content.title }}</b><br>
        <small>{{ story.content.teaser }}</small>

        <template #actions>
          <Button icon="MoveRight" icon-pos="right" color="transparent">
            Lees meer
          </Button>
        </template>
      </LazyCard>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object })

const data = await useHrStoryblok('cdn/stories/', {
  version: 'published',
  starts_with: 'nieuws',
  is_startpage: false,
  page: 1,
  per_page: 4
})
</script>
<style lang="scss" module>
.news {
  &__title {
    margin-bottom: var(--spacing-l);

    a {
      color: var(--text-base);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: var(--spacing-l);
    width: 100%;
  }
}
</style>
