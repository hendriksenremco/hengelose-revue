import nodemailer from 'nodemailer'
export default defineNitroPlugin(async nitroApp => {
  const config = useRuntimeConfig()
  const transport = nodemailer.createTransport({
    host: config.mailHost,
    port: config.mailPort,
    auth: {
      user: config.mailUser,
      pass: config.mailPassword
    }
  })

  nitroApp.hooks.hook('request', nitroApp => {
    nitroApp.context.mail = transport
  })
})
