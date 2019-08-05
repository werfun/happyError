var selectModel = require('../models/selectModel')

// 创建用户
exports.selectUser = (info) => {
  return new Promise(async resolve => {
    let r = await selectModel.selectUser(info)
    resolve(r)
  })
}
