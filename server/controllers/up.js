var upModel = require('../models/upModel')
var query = require('../mysql/mysql')
var select = require('./select')

// 新增用户
exports.createUser = async (req, res) => {
  let { onlineip, country_nameCN, city_nameCN } = req.netInfo
  let { browser, platform, ratio } = req.query
  let sqlRes = await select.selectUser({ip: onlineip})
  if (sqlRes.success) {
    return res.json({ success: false, msg: 'this user is exist' })
  }
  let info = {
    id: null,
    ip: onlineip,
    country: country_nameCN,
    city: city_nameCN,
    browser,
    platform,
    ratio,
    create_time: new Date
  }

  info = Object.values(info)
  let r = []
  r = await upModel.createUser(info)
  if (r.success) {
    res.json({ success: true, msg: 'ok' })
  } else {
    res.json({ success: false, msg: r.error })
  }
}

// 浏览数据
exports.createPage = async (req, res) => {
  let data = Objec.values(req.query)
  let r = await upModel.createPage(data)
  if (r.success) {
    res.json({ success: true, msg: 'ok' })
  } else {
    res.json({ success: false, msg: r.error })
  }
}

// js 错误收集
exports.createJsError = async (req, res) => {
  let data = Objec.values(req.query)
  let r = await upModel.createJsError(data)
  if (r.success) {
    res.json({ success: true, msg: 'ok' })
  } else {
    res.json({ success: false, msg: r.error })
  }
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
