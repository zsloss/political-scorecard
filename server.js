var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost/political-scorecard');

var entitySchema = mongoose.Schema({
    name: String,
    bg_colour: String,
    fg_colour: String,
    votes: [{
        score: Number,
        description: String
    }]
});

var Entity = mongoose.model('Entity', entitySchema);

app.use(express.static(path.join(__dirname, 'site')));

app.get('/api/entities', function(req, res) {
    Entity.find(function (err, entities) {
        if (err) res.send(err);
        res.json(entities);
    });
});

app.get('/api/entities/:id', function(req, res) {
    Entity.findById(req.params.id, function (err, entity) {
        if (err) res.send(err);
        res.json(entity);
    });
});
app.post('/api/entities', function(req, res) {
    var entity = new Entity();
    entity.name = req.body.name;
    entity.bg_colour = req.body.bg_colour;
    entity.fg_colour = req.body.fg_colour;
    entity.votes = [];

    entity.save(function (err) {
        if (err) res.send(err);
        res.json(entity);
    });
});

app.put('/api/entities/:id', function(req, res) {
    Entity.findById(req.params.id, function(err, entity) {
        if (err) res.send(err);
        entity.name = req.body.name;
        entity.bg_colour = req.body.bg_colour;
        entity.fg_colour = req.body.fg_colour;
        entity.votes = req.body.votes;

        entity.save(function (err) {
            if (err) res.send(err);
            res.json(entity);
        });
    });
});

app.delete('/api/entities/:id', function(req, res) {
    Entity.findById(req.params.id, function(err, entity) {
        if (err) res.send(err);
        entity.remove(function(err) {
            if (err) res.send(err);
            res.send(entity);
        });
    });
});

app.listen(8080, function() {
    console.log("Server up!");
});
