var connection = require('./index')

function add() {
  let data = [
      1,
      '192.168.1.1.1',
      '谷歌',
      'macos',
      '1920*1080',
      new Date
  ];
  connection.connect()
  var sql = "INSERT INTO USER_INFO VALUES(?,?,?,?,?,?) "
  connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
    console.log(results, fields)
  })
  connection.end()
}
add()
