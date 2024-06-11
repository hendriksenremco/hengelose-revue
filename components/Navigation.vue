<template>
  <ul :class="$style['navigation']">
    <LazyNavItem
      v-for="item in navigation.items"
      :key="item.parent.full_slug"
      tag="li"
      :is-active="isActive(item.parent.full_slug)"
      :is-child-active="isChildActive(item.items)"
      :to="{path: '/'+ item.parent.full_slug}">
      {{ item.parent.name }}

      <template v-if="item.items.length" #subitems>
        <LazyNavItem
          v-for="subItem in item.items"
          :key="subItem.full_slug"
          tag="li"
          :is-active="isActive(subItem.full_slug)"
          :to="{path: '/'+ subItem.full_slug}">
          {{ subItem.name }}
        </LazyNavItem>
      </template>
    </LazyNavItem>
  </ul>
</template>
<script setup>
const route = useRoute()
const { navigation } = useNavigation()

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
