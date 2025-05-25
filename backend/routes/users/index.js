var express = require('express');
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');
const validateJsonRequest = require('../../middleware/validateJsonRequest');
var userRouter = express.Router();

userRouter.post('/newAccount', validateJsonRequest, controller.createNewAccount);

userRouter.get('/login', validateJsonRequest, controller.logUserIn);

userRouter.get('/getAccountInfo', authMiddleware, controller.getAccountInfo);

userRouter.delete('/deleteAccount', authMiddleware, controller.deleteAccount);

userRouter.get('/sudoListAccounts', authMiddleware, controller.sudoListAccount);

userRouter.delete('/sudoDeleteAccount/:id', authMiddleware, controller.sudoDeleteAccount);

module.exports = userRouter;
