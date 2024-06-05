<template>
  <ul :class="$style['navigation']">
    <NavItem
      v-for="item in story.content.items"
      :key="item.parent.full_slug"
      tag="li"
      :is-active="isActive(item.parent.full_slug)"
      :is-child-active="isChildActive(item.items)"
      :to="{path: '/'+ item.parent.full_slug}">
      {{ item.parent.name }}

      <template v-if="item.items.length" #subitems>
        <NavItem
          v-for="subItem in item.items"
          :key="subItem.full_slug"
          tag="li"
          :is-active="isActive(subItem.full_slug)"
          :to="{path: '/'+ subItem.full_slug}">
          {{ subItem.name }}
        </NavItem>
      </template>
    </NavItem>
  </ul>
</template>
<script setup>
const route = useRoute()
const { story } = await useHrStoryblok('cdn/stories/global/navigation', { resolve_relations: 'NavigationItem.items,NavigationItem.parent', resolve_links: 'story', version: 'draft' })

const isActive = item => {
  return route.path === `/${item}`
}
const isChildActive = items => {
  return items.some(item => `/${item.full_slug}` === route.path)
}
</script>
<style lang="scss" module>
.navigation {
  display: flex;
  flex-direction: inherit;
}
</style>
