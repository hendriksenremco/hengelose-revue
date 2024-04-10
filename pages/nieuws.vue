<template>
  <Container>
    <h1>Nieuws van de Hengelose Revue</h1>
    <div :class="$style['grid']" class="h-margin-top-xl">
      <div v-for="story in stories" :key="story._uid">
        <Card :to="{path: '/' + story.full_slug}" :image="story.content.image.filename ">
          <h4>{{ story.content.title }}</h4>
          <small>{{ story.content.teaser }}</small>
        </Card>
      </div>
    </div>
  </Container>
</template>
<script setup>
const { stories } = await useHrStoryblok('cdn/stories', { version: 'published', starts_with: 'nieuws', is_startpage: false })
</script>
<style lang="scss" module>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: var(--spacing-l);
    width: 100%;
}
</style>
