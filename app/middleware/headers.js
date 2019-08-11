var util = require('../utils')

module.exports = () => {
  return async function (ctx, next) {
    util.getIp(ctx)
    util.getPlatform(ctx)

    // 不使用await, 会导致客户端404
    await next()
  }
}
