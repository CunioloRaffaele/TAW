var express = require('express');
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');
const validateJsonRequest = require('../../middleware/validateJsonRequest');
var bookRouter = express.Router();

bookRouter.get('/ticket/:UUID', authMiddleware, controller.getTicketDetails);
bookRouter.get('/ticket/:UUID/download', authMiddleware, controller.downloadTicket);

module.exports = bookRouter;