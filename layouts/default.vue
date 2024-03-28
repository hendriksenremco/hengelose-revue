<template>
  <Drawer :show="sidebarShouldShow" @close="hideSidebar">
    <Navigation />
  </Drawer>
  <TopBar>
    <Navigation />
    <template #mobile>
      <Button :icon="Menu" icon-pos="right" @click="showSidebar">
        Menu
      </Button>
    </template>
  </TopBar>
  <main :class="$style['layout__main']">
    <slot />
  </main>
</template>
<script setup>
import { Menu } from 'lucide-vue-next'
const { sidebarShouldShow, showSidebar, hideSidebar } = useLayout()
</script>
<style lang="scss" module>
.layout {

}
</style>
