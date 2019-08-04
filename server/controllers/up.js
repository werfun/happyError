var upModel = require('../models/upModel')
var select = require('./select')

// 新增用户
exports.createUser = async (req, res) => {
  let { onlineip, country_nameCN, city_nameCN } = req.netInfo
  let { ratio } = req.body
  let sqlRes = await select.selectUser({ip: onlineip})
  if (sqlRes.success && sqlRes.msg.length) {
    return sqlRes
  }
  let info = Object.values({
    id: null,
    ip: onlineip,
    country: country_nameCN,
    city: city_nameCN,
    browser: req.browser,
    platform: req.platform,
    ratio: JSON.stringify(ratio),
    create_time: new Date
  })
  let r = await upModel.createUser(info)
  return r
}

// 浏览数据
exports.createPage = async (req, res) => {
  let data = req.body
  let msg = Object.values({
    id: null,
    user_id: data.user.id,
    url: req.headers.referer,
    project: null,
    ready_time: parseInt(data.readyTime),
    onload_time: parseInt(data.onloadTime),
    during_time: null,
    create_time: new Date(data.createTime)
  })
  let r = await upModel.createPage(msg)
  res.json(r)
}

// 浏览数据
exports.updatePage = async (req, res) => {
  let data = req.body
  let msg = Object.values({
    during_time: data.duringTime,
    id: data.id
  })
  let r = await upModel.updatePage(msg)
  res.json(r)
}

// js 错误收集
exports.createJsError = async (req, res) => {
  let data = req.body
  let msg = Object.values({
    id: null,
    user_id: data.user.id,
    msg: JSON.stringify(data.msg),
    create_time: new Date
  })
  let r = await upModel.createJsError(msg)
  res.json(r)
}

// api访问收集
exports.createApi = async (req, res) => {
  let data = Objec.values(req.query)
  let r = await upModel.createApi(data)
  if (r.success) {
    res.json({ success: true, msg: 'ok' })
  } else {
    res.json({ success: false, msg: r.error })
  }
}

// 浏览数据
exports.createResourceLoad = async (req, res) => {
  let data = Objec.values(req.query)
  let r = await upModel.createResourceLoad(data)
  if (r.success) {
    res.json({ success: true, msg: 'ok' })
  } else {
    res.json({ success: false, msg: r.error })
  }
}
