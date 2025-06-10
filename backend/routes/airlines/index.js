var express = require('express');
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');
const checkAirlineEnrolled = require('../../middleware/checkAirlineEnrollment');
const validateJsonRequest = require('../../middleware/validateJsonRequest');
var airlineRouter = express.Router();

airlineRouter.post('/invite', validateJsonRequest, authMiddleware, controller.createAirlineNewAccount);

airlineRouter.post('/enroll/:invitationCode/:airlineName', validateJsonRequest, controller.newAirlineAccountEnrollment);

airlineRouter.post('/login', validateJsonRequest, controller.logAirlineIn);

airlineRouter.get('/airlines', controller.listAirlines);

airlineRouter.post('/aircrafts', validateJsonRequest, authMiddleware, checkAirlineEnrolled, controller.addAircraft);

airlineRouter.get('/aircrafts/:airlineName', controller.listAircrafts);

airlineRouter.delete('/aircrafts/:aircraftId', authMiddleware, checkAirlineEnrolled, controller.deleteAircraft);

//airlineRouter.post('/route', validateJsonRequest, authMiddleware, checkAirlineEnrolled, controller.addRoute);

module.exports = airlineRouter;