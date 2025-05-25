var express = require('express');
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');
const validateJsonRequest = require('../../middleware/validateJsonRequest');
var airlineRouter = express.Router();

airlineRouter.post('/invite', validateJsonRequest, authMiddleware, controller.createAirlineNewAccount);

airlineRouter.post('/enroll/:invitationCode/:airlineName', validateJsonRequest, controller.newAirlineAccountEnrollment);

airlineRouter.get('/login', validateJsonRequest, controller.logAirlineIn);

airlineRouter.get('/list', controller.listAirlines);

module.exports = airlineRouter;