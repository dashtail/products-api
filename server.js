var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://mongo:27017');

var port = process.env.port || 3000;
http.createServer(app).listen(port, function() {
    console.log("Running in: http://localhost:" + port)
});
