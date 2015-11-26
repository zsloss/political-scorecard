var app = app || {};

app.ElectionView = Backbone.View.extend({
    el: '#election-container',

    initialize: function() {
        this.collection = new app.Election();
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
        var entityView = new app.EntityView({
            model: entity
        });
        this.$el.append(entityView.render().el);  
    }
});
