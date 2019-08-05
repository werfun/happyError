var execSql = require('../mysql/mysql')

// 搜索用户
exports.selectUser = (data) => {
  let sql = "SELECT * FROM USER_INFO WHERE(?)"
  return execSql(sql, data)
}

// 搜索用户
exports.selectUserCount = async (data) => {
  let sql = "SELECT count(*) as count FROM USER_INFO"
  return execSql(sql, data)
}

// 搜索用户
exports.selectUserAll = async (data) => {
  let sql = "SELECT * FROM USER_INFO LIMIT ?,?"
  return execSql(sql, data)
}

// 搜索浏览数据
exports.selectPage = async (data) => {
  let sql = "SELECT * FROM PAGE_INFO WHERE(?)"
  return execSql(sql, data)
}

// js 错误收集
exports.selectJsError = async (data) => {
  var sql = "SELECT * FROM JS_ERROR WHERE(?)"
  return execSql(sql, data)
}

// api访问收集
exports.selectApi = async (data) => {
  var sql = "SELECT * FROM API_ERROR WHERE(?)"
  return execSql(sql, data)
}

// 浏览数据
exports.selectResourceLoad = async (data) => {
  var sql = "SELECT * FROM RESOURCE_LOAD WHERE(?)"
  return execSql(sql, data)
}
