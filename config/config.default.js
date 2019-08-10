module.exports = {
  keys: '123',
  middleware: ['headers'],
  Sequelize: {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: '123456',
    database: 'happy_error',
    pool: {
      max: 5,
      min: 0
    },
    timezone: "+08:00"
  }
}
