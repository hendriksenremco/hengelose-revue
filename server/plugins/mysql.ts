import { createPool } from 'mysql2/promise'
export default defineNitroPlugin(async nitroApp => {
  const config = useRuntimeConfig()

  const connection = await createPool({
    host: config.mysqlHost,
    user: config.mysqlUser,
    port: parseInt(config.mysqlPort),
    password: config.mysqlPassword,
    database: config.mysqlDatabase
  })

  nitroApp.hooks.hookOnce('close', () => {
    connection.end()
  })

  nitroApp.hooks.hook('request', nitroApp => {
    nitroApp.context.db = connection
  })
})
