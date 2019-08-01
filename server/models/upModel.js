var query = require('../mysql/mysql')

// 创建用户
exports.createUser = (data) => {
  return new Promise(resolve => {
    var sql = "INSERT INTO USER_INFO VALUES(?,?,?,?,?,?,?,?) "
    query(sql, data, (error, results, fields) => {
      if (results) resolve({success: true, msg: results})
      else resolve({success: false, error: error})
    })
  })
}

// 浏览数据
exports.createPage = async (data) => {
  return new Promise(resolve => {
    var sql = "INSERT INTO PAGE_INFO VALUES(?,?,?,?,?,?,?)"
    query(sql, data, (error, results, fields) => {
      if (results) resolve({success: true, msg: results})
      else resolve({success: false, error: error})
    })
  })
}

// js 错误收集
exports.createJsError = async (data) => {
  return new Promise(resolve => {
    var sql = "INSERT INTO JS_ERROR VALUES(?,?,?)"
    query(sql, data, (error, results, fields) => {
      if (results) resolve({success: true, res: results})
      else resolve({success: false, error: error})
    })
  })
}

// api访问收集
exports.createApi = async (data) => {
  return new Promise(resolve => {
    var sql = "INSERT INTO API_ERROR VALUES(?,?,?,?,?)"
    query(sql, data, (error, results, fields) => {
      if (results) resolve({success: true, res: results})
      else resolve({success: false, error: error})
    })
  })
}

// 浏览数据
exports.createResourceLoad = async (data) => {
  return new Promise(resolve => {
    var sql = "INSERT INTO RESOURCE_LOAD VALUES(?,?,?,?)"
    query(sql, data, (error, results, fields) => {
      if (results) resolve({success: true, res: results})
      else resolve({success: false, error: error})
    })
  })
}
