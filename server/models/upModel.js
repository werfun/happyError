var execSql = require('../mysql/mysql')

// 创建用户
exports.createUser = (data) => {
  var sql = "INSERT INTO USER_INFO VALUES(?,?,?,?,?,?,?,?) "
  return execSql(sql, data)
}

// 浏览数据
exports.createPage = async (data) => {
  var sql = "INSERT INTO PAGE_INFO VALUES(?,?,?,?,?,?,?,?)"
  return execSql(sql, data)
}

// 浏览时长
exports.updatePage = async (data) => {
  var sql = "UPDATE PAGE_INFO SET during_time=? WHERE id=?"
  return execSql(sql, data)
}

// js 错误收集
exports.createJsError = async (data) => {
  var sql = "INSERT INTO JS_ERROR VALUES(?,?,?,?)"
  return execSql(sql, data)
}

// api访问收集
exports.createApi = async (data) => {
  var sql = "INSERT INTO API_ERROR VALUES(?,?,?,?,?,?)"
  return execSql(sql, data)
}
// 浏览数据
exports.createResourceLoad = async (data) => {
  var sql = "INSERT INTO RESOURCE_LOAD VALUES ?"
  return execSql(sql, data)
}
