var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const result = require('dotenv').config()
if (result.error) {
  console.log("Unable to load \".env\" file.");
  process.exit(-1);
}

var routes = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

// Requested endpoint is not matched by any route
app.use(function(req, res, next) {
  res.status(404);
  res.json({
    status: 404,
    message: 'Endpoint Not Found'
  });
});

module.exports = app;
