var app = app || {};

app.Entity = Backbone.Model.extend({
    defaults: {
        name: "Unnamed",
        colour: "white",
        votes: []
    }
});
