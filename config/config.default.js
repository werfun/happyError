module.exports = {
  keys: '123',
  middleware: ['headers'],
  sequelize: {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
    database: 'happy_error',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    timezone: "+08:00"
  },
  ipHeaders: 'X-Real-Ip, X-Forwarded-For',
  security: {
    csrf: {
      enable: false
    },
    domainWhiteList: [ '*' ]
  },
  cors: {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }
}
