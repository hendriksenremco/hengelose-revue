<template>
  <Container>
    <Button :icon="IconArrowRight" rounded icon-pos="right" color="cta">
      Kaarten kopen
    </Button>
    <Button :icon="IconPhone" rounded icon-pos="right">
      Contact
    </Button>
  </Container>
</template>
<script setup>
import IconArrowRight from 'remixicon/icons/Arrows/arrow-right-line.svg'
import IconPhone from 'remixicon/icons/Device/phone-line.svg'
</script>
