
exports.createUser = (data) => {
  return new Promise(resolve => {
    var sql = "INSERT INTO USER_INFO VALUES(?,?,?,?,?,?,?,?) "
    query(sql, data, (error, results, fields) => {
      if (results) resolve({success: true, res: results})
      else resolve({success: false, res: error})
    })
  })
}
