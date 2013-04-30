define(['jquery', 'underscore', 'backbone', './person.collection', 'text!./person-list.html'], function($, _, Backbone, People, Template) {
	return Backbone.View.extend( {
		el: 'div.people',
		collection: People,
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.empty();
			var _html = _.template(Template, this.collection, { variable: 'people' } );
			this.$el.append(_html);
		}
	});
})