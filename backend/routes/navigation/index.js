var express = require('express');
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');
const checkAirlineEnrolled = require('../../middleware/checkAirlineEnrollment');
const validateJsonRequest = require('../../middleware/validateJsonRequest');
var navRouter = express.Router();

navRouter.post  ('/routes', validateJsonRequest, authMiddleware, checkAirlineEnrolled, controller.createRoute);
navRouter.get   ('/routes', controller.listRoutes);
navRouter.get   ('/routes/:airlineName', controller.getRouteByAirline);
navRouter.get   ('/airports', controller.getAirports);
navRouter.get   ('/airports/:airportId', controller.getAirportDetails);
navRouter.get   ('/airports/:departure/routes', controller.getAirportsDesinations);
navRouter.get   ('/airports/:destination/incoming-routes', controller.getAirportsDepartures);
navRouter.get   ('/routes/path', controller.getRouteBetweenAirports);
navRouter.post  ('/flights', validateJsonRequest, authMiddleware, checkAirlineEnrolled, controller.newFlight);
navRouter.get   ('/flights', validateJsonRequest, controller.listFlights);


module.exports = navRouter;