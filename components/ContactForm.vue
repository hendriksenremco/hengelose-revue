<template>
  <form :class="$style['form']" @submit.prevent="onSubmit">
    <h2>{{ title }}</h2>
    <FormInput v-model="name" name="name" label="Naam" />
    <FormInput v-model="email" name="email" label="Emailadres" />
    <FormInput v-model="phone" name="phone" label="Telefoonnummer" />
    <FormTextarea v-model="message" name="message" rows="10" label="Je bericht" />
    <Button
      :loading="loading"
      color="cta"
      :class="$style['form__submit']"
      icon="ArrowRight"
      icon-pos="right"
      type="submit">
      {{ loading ? 'Bezig...' : 'Verstuur' }}
    </Button>

    <div v-if="success" :class="$style['form__message']">
      <h3>Gelukt! We nemen zo snel mogelijk contact met je op hierover.</h3>
    </div>
  </form>
</template>
<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { object, string } from 'zod'
defineProps<{
  title?: String
}>()

const loading: Ref<boolean> = ref(false)
const success: Ref<boolean> = ref(false)

const validationSchema = toTypedSchema(
  object({
    name: string().optional(),
    phone: string().optional(),
    message: string({ required_error: 'Dit veld is verplicht' }).min(8, { message: 'Moet minimaal 8 karakters bevatten' }),
    email: string({ required_error: 'Dit veld is verplicht' }).email({ message: 'Dit moet een geldig e-mailadres zijn' })
  })
)

const { value: name } = useField('name')
const { value: email } = useField('email')
const { value: phone } = useField('phone')
const { value: message } = useField('message')

const { handleSubmit, meta, resetForm } = useForm({
  validationSchema
})

const onSubmit = handleSubmit(async () => {
  if (!meta.value.valid) { return false }
  success.value = false
  loading.value = true
  const { data } = await useFetch('https://submitform-dar6adajaq-ey.a.run.app', {
    method: 'POST',
    body: {
      type: 'contact-form',
      name,
      email,
      phone,
      message
    }
  })

  loading.value = false
  if (data.value) {
    success.value = true
    resetForm()
  }
})
</script>
<style lang="scss" module>
.form {
  background-color: var(--secondary-surface);
  color: var(--secondary-on-surface);
  box-shadow: var(--box-shadow-elevation-1);
  display: inline-flex;
  align-items: stretch;
  flex-direction: column;
  gap: var(--spacing-l);
  padding: var(--spacing-xl);
  position: relative;
  width: 100%;

  &__submit {
    width: auto;
    margin-left: auto;
  }

  &__message {
    background: var(--cta-gradient);
    backdrop-filter: blur(4px);
    color: var(--text-base);
    display: flex;
    place-items: center;
    padding: var(--spacing-xl);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
</style>
