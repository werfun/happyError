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
      console.log('sql 操作成功!', sql, data)
      sql = mysql.format(sql, data)
      conn.query(sql, (qerr, vals, fields) => {
        conn.release()
        callback(qerr, vals, fields)   
      })   
    } 
  })    
}  

module.exports = query
