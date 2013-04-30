define(['backbone', './person.model'], function(Backbone, Model) {
	return Backbone.Collection.extend({
		model : Model,
		url: '/sherpa/persons'
	});
});