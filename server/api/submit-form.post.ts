import { z } from 'zod'
import contactFormSchema from '~/schemas/contactForm'
export default defineEventHandler(async event => {
  const { db } = await event.context
  const { type, name, email, phone, message } = await readBody(event)

  const schema = z.object(contactFormSchema)

  const validated = schema.parse({ type, name, email, phone, message })
  const response = await db.query(`INSERT INTO form_submission (type, name, email, phone, message) VALUES (${db.escape(type)}, ${db.escape(name)}, ${db.escape(email)}, ${db.escape(phone)}, ${db.escape(message)})`)

  if (response) {
    return validated
  } else {
    return new Error('notok')
  }
})
