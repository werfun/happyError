var util = require('../utils')

module.exports = () => {
  return async function getIp(ctx, next) {
    util.getIp(ctx.req, next)
  }
}