var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// include google cse
var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  key: 'AIzaSyCET7mR5tt8IRFck489wxqrD3ButhVVjpQ',
  cx: '002246757074746565668:zel-tatiewm'
});


var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use('/google-cse', function(req, res, next) {
  googleSearch.build({
    q: "golf",
    start: 0,
    num: 10
  }, function(error, response) {
    console.log(response);
  });
res.send('dd');
  //res.render('google-cse', { title: 'Express' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.post('/api/saveToken',function(req,res){
    var username = req.body.username;
    var access_token = req.body.access_token;
    var session = req.body.session;
    user.findOne({
        username: username,
        session: session
    },function(err, userObj){
        if(userObj!=null){
            userObj.token = access_token;
            console.log(access_token);
            userObj.save();
            res.jsonp({status:'true'});
        }else{
            res.jsonp({status:'false'});
        }
    });
});


module.exports = app;
