var setupController = require('./controllers/setupController');
var userController = require('./controllers/userController');
var dbConnections = require('./config/dbConnections');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect(dbConnections.getMongoConnection());
setupController(app, express);
userController(app);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});