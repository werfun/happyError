var upModel = require('../models/upModel')
var query = require('../mysql/mysql')
var select = require('./select')

// 新增用户
exports.createUser = async (req, res) => {
  let { onlineip, country_nameCN, city_nameCN } = req.netInfo
  let { browser, platform, ratio } = req.query
  let sqlRes = await select.selectUser({ip: onlineip})
  sqlRes.success && res.json({ success: false, msg: 'this user is exist' })

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
    res.json({ success: false, msg: error })
  }
}

// 浏览数据
exports.createPage = async (req, res) => {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO PAGE_INFO VALUES(?,?,?,?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    error && res.json({ success: false, msg: error })
    results && res.json({ success: true, msg: 'ok' })
  })
  connection.end()
}

// js 错误收集
exports.createJsError = async (req, res) => {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO JS_ERROR VALUES(?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    error && res.json({ success: false, msg: error })
    results && res.json({ success: true, msg: 'ok' })
  })
  connection.end()
}

// api访问收集
exports.createApi = async (req, res) => {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO API_ERROR VALUES(?,?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    error && res.json({ success: false, msg: error })
    results && res.json({ success: true, msg: 'ok' })
  })
  connection.end()
}

// 浏览数据
exports.createResourceLoad = async (req, res) => {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO RESOURCE_LOAD VALUES(?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    error && res.json({ success: false, msg: error })
    results && res.json({ success: true, msg: 'ok' })
  })
  connection.end()
}
