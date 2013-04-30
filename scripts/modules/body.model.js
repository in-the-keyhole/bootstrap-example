define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		defaults: {
			heading: 'Bootstrap Example',
			date: new Date()
		}
	});
});