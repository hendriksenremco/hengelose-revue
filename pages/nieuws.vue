<template>
  <Container>
    <h1>Nieuws</h1>
    <div :class="$style['grid']" class="h-margin-top-xl">
      <Card v-for="story in stories" :key="story._uid" :alt="'Afbeelding over ' + story.content.title.toLowerCase() " :to="{path: '/' + story.full_slug}" :image="story.content.image.filename ">
        <b>{{ story.content.title }}</b>
        <small>{{ story.content.teaser }}</small>
        <template #actions>
          <Button icon="MoveRight" icon-pos="right" color="transparent">
            Lees meer
          </Button>
        </template>
      </Card>
    </div>
  </Container>
</template>
<script setup>
const { stories } = await useHrStoryblok('cdn/stories', { version: 'published', starts_with: 'nieuws', is_startpage: false })
useHead({
  title: 'Nieuws'
})
</script>
<style lang="scss" module>
.grid {
    display: grid;
    align-items: stretch;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: var(--spacing-l);
    width: 100%;

    & > * {
      height: 100%;
    }
}
</style>
