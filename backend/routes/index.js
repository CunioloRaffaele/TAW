var express = require('express');
var routes = express.Router();

// Import all routers
var userRouter = require('./users/index');

// Attach all routers to the main router
routes.use('/user', userRouter);

module.exports = routes;
