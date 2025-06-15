var express = require('express');
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');
const checkAirlineEnrolled = require('../../middleware/checkAirlineEnrollment');
const validateJsonRequest = require('../../middleware/validateJsonRequest');
var navRouter = express.Router();

navRouter.post  ('/routes', validateJsonRequest, authMiddleware, checkAirlineEnrolled, controller.createRoute);
navRouter.get   ('/routes', controller.listRoutes);
navRouter.get   ('/airports', controller.getAirports);
navRouter.get   ('/airports/:query', controller.getAirports);
navRouter.get   ('/routes/airports/departure/:departure', controller.getAirportsDesinations);
navRouter.get   ('/routes/airports/destination/:destination', controller.getAirportsDepartures);
navRouter.get   ('/routes/airports/findRoute', controller.getRouteBetweenAirports);


module.exports = navRouter;