var query = require('./mysql')

// 创建用户
function createUser (req, res) {
  let { onlineip, country_nameCN, city_nameCN } = req.netInfo
  let info = {
    ip: onlineip,
    country: country_nameCN,
    city: city_nameCN,
    browser: '',
    platform: '',
    ratio: '',
    create_time: +new Date
  }
  var sql = "INSERT INTO USER_INFO VALUES(?) "
  query(sql, info, function (error, results, fields) {
    if (error) {
      res.json({ success: false, msg: error }) 
      // throw error
    }
    if (results) {
      console.log(results)
      res.json({ success: true, msg: 'ok' })
    }
  })
  console.log('meishi')
}

// 浏览数据
function createPage (data, res) {
  connection.connect()
  var sql = "INSERT INTO PAGE_INFO VALUES(?,?,?,?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
  })
  connection.end()
}

// js 错误收集
function createJsError (data, res) {
  connection.connect()
  var sql = "INSERT INTO JS_ERROR VALUES(?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
  })
  connection.end()
}

// api访问收集
function createApi (data, res) {
  connection.connect()
  var sql = "INSERT INTO API_ERROR VALUES(?,?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
  })
  connection.end()
}

// 浏览数据
function createResourceLoad (data, res) {
  connection.connect()
  var sql = "INSERT INTO RESOURCE_LOAD VALUES(?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
  })
  connection.end()
}


module.exports = {
  createUser,
  createPage,
  createJsError,
  createApi,
  createResourceLoad
}
