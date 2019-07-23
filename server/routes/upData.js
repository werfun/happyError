var express = require('express');
var router = express.Router();
var up = require('../controllers/up')
var util = require('../utils')

router.post('/', util.getIp, async function (req, res, next) {
  console.log(req.netInfo)
  console.log(req.body, req.body.type)
  let user = await up.createUser(req, res)
  req.body.user = user
  switch (req.body.type) {
    case 'page':
      up.createPage(req, res)
      break
    case 'js':
      up.createJsError(req, res)
      break
    case 'api':
      up.createApi(req, res)
      break
    case 'resource':
      up.createResourceLoad(req, res)
      braek
    default:
      res.json({
        success: false,
        msg: 'type not null'
      })
  }
});

module.exports = router
