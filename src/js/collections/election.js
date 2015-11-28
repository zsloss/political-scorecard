var Entity = require('../models/entity.js');

module.exports = Backbone.Collection.extend({
    model: Entity,
    url: '/api/entities'
});
