import { createPool } from 'mariadb'
export default defineNitroPlugin(async nitroApp => {
  const config = useAppConfig()
  const connection = await createPool({
    host: config.mysqlHost,
    user: config.mysqlUser,
    port: config.mysqlPort,
    password: config.mysqlPassword,
    database: config.mysqlDatabase
  })

  if (connection) {
    nitroApp.hooks.hookOnce('close', () => {
      connection.end()
    })

    nitroApp.hooks.hook('request', nitroApp => {
      nitroApp.context.db = connection
    })
  }
})
