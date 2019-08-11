const Controller = require('egg').Controller

class up extends Controller {
  async getOrCreateUser() {
    const { ctx } = this
    console.log('aaa')
    ctx.body = 'aaa'
    return 
    let { onlineip, country_nameCN, city_nameCN } = ctx.netInfo
    let user = await ctx.model.User.findByIp(onlineip)
    if (user) return user
    let info = {
      id: null,
      ip: onlineip,
      country: country_nameCN,
      city: city_nameCN,
      create_at: new Date
    }
    let r = await ctx.model.User.create(info)
    return r
  }

  // 浏览数据
  async createPage () {
    const { ctx } = this
    console.log('a')
    ctx.body='aaa'
    return 
    let user = await this.getOrCreateUser()
    let data = ctx.request.body
    let msg = {
      id: null,
      user_id: user.id,
      url: ctx.req.headers.referer,
      project: null,
      browser: ctx.browser,
      platform: ctx.platform,
      ratio: JSON.stringify(ratio),
      ready_time: parseInt(data.readyTime),
      onload_time: parseInt(data.onloadTime),
      during_time: null,
      create_time: new Date(data.createTime)
    }
    let r = await ctx.model.Page.create(msg)
    ctx.body = r
  }
  
  // 更新浏览时间
  async updatePage () {
    let { ctx } = this
    ctx.body = ctx
    let data = ctx.request.body
    let msg = {
      during_time: data.duringTime,
      id: data.id
    }
    let r = await ctx.model.Page.updateById(msg)
    res.json(r)
  }
}

module.exports = up;

// // js 错误收集
// exports.createJsError = async (req, res) => {
//   let data = req.body
//   let msg = Object.values({
//     id: null,
//     user_id: data.user.id,
//     msg: JSON.stringify(data.msg),
//     create_time: new Date
//   })
//   let r = await upModel.createJsError(msg)
//   res.json(r)
// }

// // api访问收集
// exports.createApi = async (req, res) => {
//   let data = req.body
//   let msg = Object.values({
//     id: null,
//     user_id: data.user.id,
//     request_url: data.request_url,
//     error_code: data.error_code,
//     msg: data.msg,
//     create_time: new Date
//   })
//   let r = await upModel.createApi(msg)
//   res.json(r)
// }

// // 浏览数据
// exports.createResourceLoad = async (req, res) => {
//   let data = req.body
//   let msg = data.msg.map(item => {
//     return Object.values({
//       id: null,
//       page_id: data.id,
//       url: item.url,
//       entry_type: item.entryType,
//       type: item.type,
//       duration: parseInt(item.duration),
//       create_time: new Date
//     })
//   })
//   let r = await upModel.createResourceLoad(msg)
//   res.json(r)
// }
