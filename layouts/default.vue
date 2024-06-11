<template>
  <DrawerTransition>
    <LazyDrawer v-if="sidebarShouldShow" @close="hideSidebar">
      <Navigation />
      <template #bottom>
        <Socials />
      </template>
    </LazyDrawer>
  </DrawerTransition>
  <TopBar>
    <Navigation />
    <template #mobile>
      <Button icon="Menu" icon-pos="right" color="transparent" @click="showSidebar">
        Menu
      </Button>
    </template>
    <template #aside>
      <Socials />
    </template>
  </TopBar>
  <main :class="$style['layout__main']">
    <slot />
  </main>
  <Footer />
</template>
<script setup>
const { sidebarShouldShow, showSidebar, hideSidebar } = useLayout()
const { navigation } = useNavigation()
const { formatDefault, formatBreadcrumbs } = useHrMeta()
const route = useRoute()
formatDefault()

watch(() => route.path, () => {
  formatBreadcrumbs(navigation)
})
</script>
<style lang="scss" module>
.layout {
  &__main {
    min-height: calc(100vh - var(--topbar-height) + var(--spacing));
  }
}
</style>
