var express = require('express');
var userRouter = express.Router();

/* GET users listing. */
userRouter.get('/auth', function(req, res, next) {
  res.status(200);
  res.send('respond with a resource');
});

module.exports = userRouter;
