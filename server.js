var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.get('/', function(req, res) {
    res.send("Welcome to the Political Scorecard app!");
});

app.listen(8080, function() {
    console.log("Server up!");
});
