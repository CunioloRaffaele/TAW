var express = require('express');
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');
const validateJsonRequest = require('../../middleware/validateJsonRequest');
var bookRouter = express.Router();

bookRouter.get('/ticket/:id', authMiddleware, controller.getTicketDetails);
bookRouter.get('/ticket/:id/download', authMiddleware, controller.downloadTicket);

module.exports = bookRouter;