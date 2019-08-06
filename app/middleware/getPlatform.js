var util = require('../utils')

module.exports = () => {
  return async function getPlatform(ctx, next) {
    util.getPlatform(ctx.req, next)
  }
}