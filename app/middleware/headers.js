var util = require('../utils')

module.exports = () => {
  return async function (ctx, next) {
    util.getIp(ctx)
    util.getPlatform(ctx)
    next()
  }
}
