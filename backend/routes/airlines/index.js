var express = require('express');
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');
const checkAirlineEnrolled = require('../../middleware/checkAirlineEnrollment');
const validateJsonRequest = require('../../middleware/validateJsonRequest');
var airlineRouter = express.Router();

airlineRouter.post  ('/invite', validateJsonRequest, authMiddleware, controller.createAirlineNewAccount);
airlineRouter.post  ('/enroll/:invitationCode/:airlineName', validateJsonRequest, controller.newAirlineAccountEnrollment);
airlineRouter.post  ('/login', validateJsonRequest, controller.logAirlineIn);
airlineRouter.get   ('/airlines', controller.listAirlines);
airlineRouter.post  ('/aircrafts', validateJsonRequest, authMiddleware, checkAirlineEnrolled, controller.addAircraft);
airlineRouter.get   ('/aircrafts/:airlineName', controller.listAircrafts);
airlineRouter.delete('/aircrafts/:aircraftId', authMiddleware, checkAirlineEnrolled, controller.deleteAircraft);
airlineRouter.post  ('/routes', validateJsonRequest, authMiddleware, checkAirlineEnrolled, controller.enrollInRoute);
airlineRouter.delete('/routes/:routeId', authMiddleware, checkAirlineEnrolled, controller.unenrollFromRoute);
airlineRouter.get   ('/routes', authMiddleware, checkAirlineEnrolled, controller.listRoutes);
airlineRouter.get   ('/flights', authMiddleware, checkAirlineEnrolled, controller.listFlights);
airlineRouter.get   ('/flights/pending', authMiddleware, checkAirlineEnrolled, controller.listActiveFlights);
airlineRouter.post  ('/tickets', validateJsonRequest, authMiddleware, checkAirlineEnrolled, controller.createTicket);
airlineRouter.delete('/tickets/:ticketUUID', authMiddleware, checkAirlineEnrolled, controller.deleteTicket);

module.exports = airlineRouter;