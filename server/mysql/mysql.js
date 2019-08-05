var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '123456',
  database : 'happy_error'
});

var query = function(sql, data, callback){    
  pool.getConnection((err, conn) => {    
    if (err) {
      callback(err, null, null)
    } else {
      sql = mysql.format(sql, data)
      conn.query(sql, (qerr, vals, fields) => {
        conn.release()
        callback(qerr, vals, fields)   
      })   
    } 
  })    
}

let execSql = (sql, data) => {
  return new Promise(resolve => {
    query(sql, data, (error, results, fields) => {
      console.log('sql执行', sql, data, error, results)
      if (results) resolve({success: true, msg: results})
      else resolve({success: false, msg: error})
    })
  })
}

module.exports = execSql
