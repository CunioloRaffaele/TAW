var express = require('express');
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');
const validateJsonRequest = require('../../middleware/validateJsonRequest');
var bookRouter = express.Router();

module.exports = bookRouter;