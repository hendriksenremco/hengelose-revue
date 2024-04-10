<template>
  <Container>
    <div v-for="story in stories" :key="story._uid">
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
  </Container>
</template>
<script setup>
const { stories }  = await useHrStoryblok('cdn/stories', { version:'published', starts_with: 'nieuws', is_startpage: false })
</script>