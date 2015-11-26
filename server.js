var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost/political-scorecard');

var entitySchema = mongoose.Schema({
    name: String,
    colour: String,
    votes: [{
        score: Number,
        description: String
    }]
});

var Entity = mongoose.model('Entity', entitySchema);

app.get('/', function(req, res) {
    res.send("Welcome to the Political Scorecard app!");
});

app.get('/entities', function(req, res) {
    Entity.find(function (err, entities) {
        if (err) res.send(err);
        res.json(entities);
    });
});

app.post('/entities', function(req, res) {
    var entity = new Entity();
    entity.name = req.body.name;
    entity.colour = req.body.colour;
    entity.votes = [];

    entity.save(function (err) {
        if (err) res.send(err);
        res.json(entity);
    });
});

app.listen(8080, function() {
    console.log("Server up!");
});
