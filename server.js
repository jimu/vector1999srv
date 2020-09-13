'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT | 1999,
  mongoose = require('mongoose'),
  User = require('./api/models/users'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vector1999api', {"useNewUrlParser": true, "useUnifiedTopology": true});

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

var routes = require('./api/routes/users');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port);

console.log('Vector1999 RESTful API server started on: ' + port);
