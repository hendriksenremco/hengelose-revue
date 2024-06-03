import { z } from 'zod'
import contactFormSchema from '~/schemas/contactForm'
export default defineEventHandler(async event => {
  const { db } = await event.context
  const { type, name, email, phone, message } = await readBody(event)
  const schema = z.object(contactFormSchema)
  let validated = null
  try {
    validated = await schema.parseAsync({ type, name, email, phone, message })
  } catch (e) {
    throw createError({ statusCode: 500, data: { type: 'ValidationError', message: JSON.parse(e.message) } })
  }

  try {
    await db.query(`INSERT INTO form_submission (type, name, email, phone, message) VALUES (${db.escape(type)}, ${db.escape(name)}, ${db.escape(email)}, ${db.escape(phone)}, ${db.escape(message)})`)
  } catch (e) {
    throw createError({ statusCode: 500, data: { type: 'QueryError', message: e.message } })
  }

  return validated
})
