const Controller = require('egg').Controller

class up extends Controller {
  async getOrCreateUser() {
    const { ctx } = this
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
    let user = await this.getOrCreateUser()
    let data = ctx.request.body
    let msg = {
      id: null,
      user_id: user.id,
      url: ctx.req.headers.referer,
      project: null,
      browser: ctx.browser,
      platform: ctx.platform,
      ratio: JSON.stringify(data.ratio),
      ready_time: parseInt(data.readyTime),
      onload_time: parseInt(data.onloadTime),
      during_time: null,
      create_at: new Date(data.createTime)
    }
    let r = await ctx.model.Page.create(msg)
    if (r) {
      ctx.body = { success: true, msg: r }
    }
  }
  
  // 更新浏览时间
  async updatePage () {
    let { ctx } = this
    let data = ctx.request.body
    let msg = {
      during_time: data.duringTime,
      id: data.id
    }
    let r = await ctx.model.Page.updateById(msg)
    ctx.body = { success: true, msg: r }
  }

  // 浏览数据
  async createResource () {
    let { ctx } = this
    let data = ctx.request.body
    let msg = data.msg.map(item => {
      return {
        id: null,
        page_id: data.id,
        url: item.url,
        entry_type: item.entryType,
        type: item.type,
        duration: parseInt(item.duration),
        create_time: new Date
      }
    })
    let r = await ctx.model.Resource.bulkCreate(msg)
    ctx.body = { success: true, msg: r }
  }

  // js 错误收集
  async createJsError () {
    let { ctx } = this
    let data = ctx.request.body
    let user = await this.getOrCreateUser()
    let msg = {
      id: null,
      user_id: user.id,
      msg: JSON.stringify(data.msg),
      create_time: new Date
    }
    let r = await ctx.model.JsError.create(msg)
    ctx.body = { success: true, msg: r }
  }


  // api访问收集
  async createApi () {
    let { ctx } = this
    let data = ctx.request.body
    let user = await this.getOrCreateUser()
    let msg = {
      id: null,
      user_id: user.id,
      request_url: data.request_url,
      error_code: data.error_code,
      msg: data.msg,
      create_time: new Date
    }
    let r = await ctx.model.ApiError.create(msg)
    ctx.body = { success: true, msg: r }
  }
}

module.exports = up;
