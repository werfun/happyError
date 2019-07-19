var express = require('express');
var router = express.Router();
var up = require('../controllers/up')
var util = require('../utils')

router.get('/', util.getIp,function (req, res, next) {
  console.log(req.netInfo)
  switch (req.query.type) {
    case 'user':
      up.createUser(req, res)
      break
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
