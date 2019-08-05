var query = require('../mysql/mysql')

// 创建用户
exports.createUser = (data) => {
  return new Promise(resolve => {
    var sql = "INSERT INTO USER_INFO VALUES(?,?,?,?,?,?,?,?) "
    query(sql, data, (error, results, fields) => {
      if (results) resolve({success: true, msg: results})
      else resolve({success: false, msg: error})
    })
  })
}

// 浏览数据
exports.createPage = async (data) => {
  return new Promise(resolve => {
    var sql = "INSERT INTO PAGE_INFO VALUES(?,?,?,?,?,?,?,?)"
    query(sql, data, (error, results, fields) => {
      if (results) resolve({success: true, msg: results})
      else resolve({success: false, msg: error})
    })
  })
}

// 浏览时长
exports.updatePage = async (data) => {
  return new Promise(resolve => {
    var sql = "UPDATE PAGE_INFO SET during_time=? WHERE id=?"
    query(sql, data, (error, results, fields) => {
      if (results) resolve({success: true, msg: results})
      else resolve({success: false, msg: error})
    })
  })
}

// js 错误收集
exports.createJsError = async (data) => {
  return new Promise(resolve => {
    var sql = "INSERT INTO JS_ERROR VALUES(?,?,?,?)"
    query(sql, data, (error, results, fields) => {
      if (results) resolve({success: true, res: results})
      else resolve({success: false, msg: error})
    })
  })
}

// api访问收集
exports.createApi = async (data) => {
  return new Promise(resolve => {
    var sql = "INSERT INTO API_ERROR VALUES(?,?,?,?,?,?)"
    query(sql, data, (error, results, fields) => {
      if (results) resolve({success: true, res: results})
      else resolve({success: false, msg: error})
    })
  })
}
// 浏览数据
exports.createResourceLoad = async (data) => {
  return new Promise(resolve => {
    var sql = "INSERT INTO RESOURCE_LOAD VALUES ?"
    query(sql, [data], (error, results, fields) => {
      if (results) resolve({success: true, res: results})
      else resolve({success: false, msg: error})
    })
  })
}
