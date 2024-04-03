<template>
  <div :class="$style['sponsors']">
    <div :class="$style['sponsors__wrapper']">
      <div v-for="sponsor in items" :key="sponsor" :class="$style['sponsors__item']">
        {{ sponsor.name }}
      </div>
    </div>
    <div :class="$style['sponsors__wrapper']">
      <div v-for="sponsor in items" :key="sponsor +'d'" :class="$style['sponsors__item']" aria-hidden="true">
        {{ sponsor.name }}
      </div>
    </div>
  </div>
</template>
<script setup>

const items = ref([
  {
    name: 'Jos & Rinus Paskamp'
  },
  {
    name: 'Minie Lamers'
  },
  {
    name: 'Ike en Gertie ter Stal'
  },
  {
    name: 'Tanta Son'
  },
  {
    name: 'A. van Rossum'
  },
  {
    name: 'Iza fotografie'
  },
  {
    name: 'Blankestijn advocaten mediators'
  },
  {
    name: 'Erica bloemen & interieur'
  },
  {
    name: 'Knoef druk en print'
  },
  {
    name: 'Nijhof schoenen'
  },
  {
    name: 'Bouwbedrijf Exterkate'
  },
  {
    name: 'Jan Krul caravans & outdoor'
  }
])
</script>
<style lang="scss" module>
.sponsors {
  display: flex;
  gap: var(--spacing-xxl);

  &__item {
    aspect-ratio: 4/1;
    box-shadow: var(--box-shadow-elevation-2);
    background-color: var(--opacity-surface);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-xxl);
    width: 100%;
  }

  &__wrapper {
    display: flex;
    gap: var(--spacing-xl);
    min-width: max-content;
    width:max-content;
    white-space: nowrap;
    animation: marquee 150s linear infinite;
    will-change: transform;
  }

  &:hover {
    .sponsors__wrapper {
      animation-play-state: paused;
    }
  }
}

@keyframes marquee {
  from {
    transform: translateY(0)
  }

  to {
    transform: translateX(calc(-100% - var(--spacing-xxl)));
  }
}
</style>
