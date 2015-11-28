var EntityView = require('./entity.js');
var Election = require('../collections/election.js');

module.exports = Backbone.View.extend({
    el: '#election-container',

    initialize: function() {
        this.collection = new Election();
        this.collection.fetch({reset: true});
        this.render();

        this.listenTo(this.collection, 'add', this.renderEntity);
        this.listenTo(this.collection, 'reset', this.render);
    },

    render: function() {
        this.collection.each(function(entity) {
            this.renderEntity(entity);
        }, this);
    },

    renderEntity: function(entity) {
        var entityView = new EntityView({
            model: entity
        });
        this.$el.append(entityView.render().el);  
    }
});
