var express = require('express');
var router = express.Router();
var select = require('../controllers/select')

router.get('/', async function (req, res, next) {
  
  switch (req.query.type) {
    case 'user':
      select.selectUserAll(req, res)  
      break
    case 'page':
      select.selectPage(req, res)
      break
    case 'js':
      select.selectJsError(req, res)
      // res.status(400).send({ code: 404, msg: 'Bad Request' });
      break
    case 'api':
      select.selectApi(req, res)
      break
    case 'resource':
      select.selectResourceLoad(req, res)
      braek
    default:
      res.json({
        success: false,
        msg: 'type is null'
      })
  }
});

module.exports = router
