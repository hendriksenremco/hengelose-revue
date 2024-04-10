<template>
  <NavItem v-for="page in story.content.pages" :to="{path: '/'+ page.full_slug}">
    {{ page.name }}
  </NavItem>
</template>
<script setup>
const { story } = await useHrStoryblok('cdn/stories/global/navigation', { resolve_relations: 'Navigation.pages', resolve_links: 'story' })

</script>
