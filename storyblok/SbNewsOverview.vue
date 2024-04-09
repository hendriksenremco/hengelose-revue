<template>
  <div :class="$style['news']" v-if="!pending">
    <h2 :class="$style['news__title']">{{ blok.title  }}</h2>
    <div :class="$style['news__grid']">
      <div v-for="story in data.stories" :key="story._uid">
        <Card :image="story.content.image.filename ">
          <h4>{{ story.content.title }}</h4>
          <small>{{ story.content.teaser }}</small>
          <template #actions>

            <Button :to="{path: '/' + story.full_slug}" icon="MoveRight" icon-pos="right" color="transparent">
              Lees meer
            </Button>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object })
const {$preview} = useNuxtApp()
const version = $preview ? 'draft' : 'published'
const { data, pending } = useAsyncData('news-overview', async() => {
  const { data } = await useStoryblokApi().get('cdn/stories/', {
    version,
    starts_with: 'nieuws',
    is_startpage: false,
    page: 1,
    per_page: 4
  })

  return data 
})

</script>
<style lang="scss" module>
.news {

  &__title {
    margin-bottom: var(--spacing-l)
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: var(--spacing-l);
    width: 100%;
  }
}
</style>