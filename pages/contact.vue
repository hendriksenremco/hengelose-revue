<template>
  <Container>
    <address>
      <b>Bezoekadres</b><br>
      Torenlaan 5-3<br>
      7559 PK<br> Hengelo<br>
      <Button :icon="Phone" to="tel:0031742918579">
        074 - 2918579
      </Button>
      <Button :icon="Mail" icon-pos="right" to="mailto:secretariaat@hengeloserevue.nl">
        secretariaat@hengeloserevue.nl
      </Button>
    </address>

    <h2>Verhuur</h2>
    <Button :icon="Phone" to="tel:0031610083459">
      Rinus Paskamp
    </Button>

    <h2>Sponsoring</h2>
    <Button :icon="Phone" to="tel:0031613162846">
      Henk Kiewik
    </Button>
  </Container>
</template>
<script setup>
import { Phone, Mail } from 'lucide-vue-next'
</script>
