module.exports = Backbone.View.extend({
    className: 'entity-container',
    attributes: function() { return { 
        style: 
            "background-color: " + this.model.get("bg_colour") + 
            "; color: " + this.model.get("fg_colour")
    }; },
    template: _.template($('#entity-template').html()),

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
