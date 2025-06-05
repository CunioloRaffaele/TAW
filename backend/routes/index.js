var express = require('express');
var routes = express.Router();

// Import all routers
var userRouter = require('./users/index');
var airlineRouter = require('./airlines/index');

// Attach all routers to the main router
routes.use('/users', userRouter);
routes.use('/airlines', airlineRouter);

module.exports = routes;
