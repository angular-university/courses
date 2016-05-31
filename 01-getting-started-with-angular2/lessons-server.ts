declare const require;


var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var httpProxy = require('http-proxy');




var proxy = httpProxy.createProxyServer();

var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());


var server = app.listen(8081, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});
