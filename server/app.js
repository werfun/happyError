var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var upDataRouter = require('./routes/upData');
var bodyParser = require('body-parser')
var app = express();
var jsonParser = bodyParser.json()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//cors
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.sendStatus(200);
  else next();
});

app.use(bodyParser.text())
app.use(jsonParser)

app.use('/', indexRouter);
app.use('/up', upDataRouter);

app.listen(1212);
console.log('服务已启动', 'http://127.0.0.1:1212')
module.exports = app;
