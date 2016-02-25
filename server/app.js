var express = require('express'),
	mongoose = require('mongoose'),
	path = require('path');

var config = require('./config/config'),
	middleware = require('./middleware/middleware')

var publicRouter = require('./public/router')

var app = express();

//global middleware for application
middleware(app)

//Routing
app.use('/', publicRouter);

app.listen(config.port, () => {
	console.log("Listening on port: " + config.port);
})

module.exports = app;
