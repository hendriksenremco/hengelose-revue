<template>
  <Container>
    <div v-for="story in data.stories" :key="story._uid">
      <Card :image="story.content.image.filename ">
        <h4>{{ story.content.title }}</h4>
        <small>{{ story.content.teaser }}</small>
        <template #actions>
          <Button :to="{name: 'nieuws-slug', params: {slug: story.slug}}" icon="MoveRight" icon-pos="right" color="transparent">
            Lees meer
          </Button>
        </template>
      </Card>
    </div>
  </Container>
</template>
<script setup>
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', { version: 'draft', starts_with: 'nieuws', is_startpage: false })
</script>
