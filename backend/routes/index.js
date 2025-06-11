var express = require('express');
var routes = express.Router();

// Import all routers
var userRouter = require('./users/index');
var airlineRouter = require('./airlines/index');
var navigationRouter = require('./navigation/index');

// Attach all routers to the main router
routes.use('/users', userRouter);
routes.use('/airlines', airlineRouter);
routes.use('/navigate', navigationRouter);

module.exports = routes;
