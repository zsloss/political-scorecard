var app = app || {};

app.Election = Backbone.Collection.extend({
    model: app.Entity,
    url: '/api/entities'
});
