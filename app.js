var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// Setting up routers
var indexRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var loginRouter = require("./routes/login");
var blogRouter = require("./routes/blog");
var deleteRouter = require("./routes/delete");
var createRouter = require("./routes/create")
var aboutRouter = require("./routes/about")
var editRouter = require("./routes/edit")
var logoutRouter = require("./routes/logout");
var searchRouter = require("./routes/search")
var helpRouter = require("./routes/help")
//import the db.js module in the model directory
var db = require('./model/db');
//import the user.js module in the model directory
var users = require('./model/User').User;
//import the blog.js module in the model directory
var blogs = require('./model/Blog').Blog;

var app = express();

// view engine setup
app.listen(3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// routing
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/login',loginRouter);
app.use('/logout',logoutRouter);
app.use('/blogs',blogRouter);
app.use('/delete',deleteRouter);
app.use('/create',createRouter);
app.use('/edit',editRouter);
app.use('/about',aboutRouter);
app.use('/search',searchRouter)
app.use('/help',helpRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('../views/pages/error');
});

module.exports = app;
