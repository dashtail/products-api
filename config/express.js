var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var app = express();
app.use(cors());

app.set('secret', 'eqw!@#321')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

consign({ cwd: 'app' })
	.include('models')
	.then('api')
	.then('routes')
	.into(app);

module.exports = app;
