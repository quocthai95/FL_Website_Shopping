// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var config = require('./configs/dbconfig');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var productRouter = require('./routes/Product');
var orderRouter = require('./routes/order');
var userRouter = require('./routes/user');
var emailRouter = require('./routes/email');

var app = express();

mongoose.connect(config.url)
  .then(function(){
    console.log("Successfully connected to the database");
  }).catch(function(err){
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
  });

//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}));
app.use(bodyParser.json({extended:true,limit:'50mb'}));

// app.use(function(req,res,next){
//   res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.setHeader('Access-Control-Request-Method', '*');
// 	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, PATCH, DELETE');
// 	res.setHeader('Access-Control-Allow-Headers', '*');
// 	if ( req.method === 'OPTIONS' ) {
// 		res.writeHead(200);
// 		res.end();
// 		return;
// 	}
//   next();
// });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
app.use(express.static(path.join(__dirname + '/dist')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/',homeRouter);
app.use('/product',productRouter);
app.use('/order',orderRouter);
app.use('/',userRouter);
app.use('/',emailRouter);


// // error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send();
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

module.exports = app;
