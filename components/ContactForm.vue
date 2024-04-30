<template>
  <form :class="$style['form']" @submit.prevent="onSubmit">
    <h2>{{ title }}</h2>
    <FormInput v-model="name" name="name" label="Naam" />
    <FormInput v-model="email" name="email" label="Emailadres" />
    <FormInput v-model="phone" name="phone" label="Telefoonnummer" />
    <FormTextarea v-model="message" name="message" rows="10" label="Je bericht" />
    <Button color="cta" :class="$style['form__submit']" icon="ArrowRight" icon-pos="right" type="submit">
      Verstuur
    </Button>
  </form>
</template>
<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { object, string } from 'zod'
defineProps<{
  title: String
}>()

const validationSchema = toTypedSchema(
  object({
    name: string().optional(),
    phone: string().optional(),
    message: string({ required_error: 'Dit veld is verplicht' }).min(8),
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

const onSubmit = handleSubmit(async values => {
  if (!meta.value.valid) { return false }
  const { data } = await useFetch('https://submitform-dar6adajaq-ey.a.run.app', {
    method: 'POST',
    body: {
      type: 'contact-form',
      ...values.value
    }
  })

  if (data.value) {
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
  width: 100%;

  &__submit {
    width: auto;
    margin-left: auto;
  }
}
</style>
