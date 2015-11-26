var app = app || {};

app.EntityView = Backbone.View.extend({
    className: 'entity-container',
    template: _.template($('#entity-template').html()),

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
