import { z } from 'zod'
import contactFormSchema from '~/schemas/contactForm'
export default defineEventHandler(async event => {
  const config = useAppConfig()
  const { db, mail } = await event.context
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

  try {
    await mail.sendMail({
      from: 'website@hengeloserevue.nl',
      to: config.mailTo,
      subject: 'Contact formulier ingevuld',
      html: `Naam: ${name}<br> E-mailadres: ${email}<br> Telefoonnummer: ${phone}<br> Bericht: ${message}`
    })
  } catch (e) {
    throw createError({ statusCode: 500, data: { type: 'MailError', message: e.message } })
  }

  return validated
})
