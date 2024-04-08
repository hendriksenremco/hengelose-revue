<template>
  <div :class="$style['scroller']">
    <div :class="$style['row']">
      <div>Hey,&nbsp;</div>
      <div :class="$style['word-wrapper']">
        <Transition>
          <div :key="count" :class="$style['word']">
            {{ items[count] }}...
          </div>
        </Transition>
      </div>
    </div>
    <div :class="$style['row']">
      <div>Wij zijn op zoek naar jou!</div>
    </div>
  </div>
</template>
<script setup>
const items = ref([
  'coupeuse',
  'decor-bouwer',
  'kapper',
  'naaister',
  'toneelspeler',
  'make-up specialist'
])
const count = ref(0)
const interval = ref(null)

const cycle = () => {
  if (count.value === (items.value.length - 1)) {
    count.value = 0
    return
  }
  count.value++
}

onBeforeUnmount(() => {
  clearInterval(interval.vlue)
})
onMounted(() => {
  interval.value = setInterval(() => cycle(), 3000)
})
</script>
<style lang="scss" module>
.scroller {
  font-size: var(--font-size-xlarge);
  font-weight: var(--font-weight-thin);
  font-family: var(--font-family);
  position: relative;
  margin-bottom: var(--spacing-l);
}

.word {
  font-weight: var(--font-weight-bold);
  display: inline-flex;
  align-items: flex-end;

  position: absolute;
  white-space: nowrap;
  vertical-align: baseline;
}

.word-wrapper {
  position: relative;
}

.row {
  display: flex;
  align-items: flex-start;
  vertical-align: bottom;
}

</style>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s var(--easing-transition);
  position: absolute;
}

.v-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}

.v-leave-to {
  transform: translateY(30px);
  opacity: 0;
}</style>
