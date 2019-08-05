var selectModel = require('../models/selectModel')

// 搜索用户
exports.selectUser = async (info) => {
  let r = await selectModel.selectUser(info)
  res.json(r)
}

// 搜索用户
exports.selectUserAll = async (req, res) => {
  let page = +req.query.page || 1
  let size = +req.query.page_size || 10
  let params = Object.values({
    page: (page - 1) * size,
    page_size: size
  })
  let total = await selectModel.selectUserCount()
  total.success && (total = total.msg[0].count)
  let noData = total <= (page - 1) * size
  noData && res.json({ success: true, msg: [], total: total })

  let r = await selectModel.selectUserAll(params)
  r.total = total
  res.json(r)
}

// 搜索page记录
exports.selectPage = async (req, res) => {
  let r = await selectModel.selectPage()
  res.json(r)
}
