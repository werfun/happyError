var query = require('../mysql/mysql')

// 创建用户
function selectUser (info, callBack) {
  var sql = "SELECT id FROM USER_INFO WHERE(?)"
  query(sql, info, function (error, results, fields) {
    if (results) {
      callBack({ success: true, result: results })
    } else {
      callBack({ success: false, msg: error })
    }
  })
}

// 浏览数据
function selectPage (req, res) {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO PAGE_INFO VALUES(?,?,?,?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    if (results) {
      callBack({ success: true, result: results })
    } else {
      callBack({ success: false, msg: error })
    }
  })
  connection.end()
}

// js 错误收集
function selectJsError (req, res) {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO JS_ERROR VALUES(?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    error ? callBack({ success: false, msg: error }) : callBack({ success: true, result: results })
  })
  connection.end()
}

// api访问收集
function selectApi (req, res) {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO API_ERROR VALUES(?,?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    error ? callBack({ success: false, msg: error }) : callBack({ success: true, result: results })
  })
  connection.end()
}

// 浏览数据
function selectResourceLoad (req, res) {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO RESOURCE_LOAD VALUES(?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    error ? callBack({ success: false, msg: error }) : callBack({ success: true, result: results })
  })
  connection.end()
}

module.exports = {
  selectUser,
  selectPage,
  selectJsError,
  selectApi,
  selectResourceLoad
}
