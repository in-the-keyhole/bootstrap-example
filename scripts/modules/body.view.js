define(['jquery', 'underscore', 'backbone', 'bootstrap', './body.model', 'text!./body.html'], function($, _, Backbone, Bootstrap, Model, Template) {
	
	return Backbone.View.extend( {
		el: 'div.container-fluid',
		model: new Model(),
		initialize: function() {
			this.render();
		},
		render: function() {
			var _html = _.template(Template, this.model.toJSON(), { variable: 'model' } );
			this.$el.append(_html);
			this.$("[rel=tooltip]").tooltip({trigger: 'hover', delay: { show: 500, hide: 100 }});
		},
		events: {
			'click button.refresh' : 'refresh',
			'click button.people' : 'people'
		},
		'refresh' : function() {
			this.model.set('date', new Date());
			this.$el.empty();
			this.render();
		},
		'people' : function() {
			var _this = this;
			require(['./person/person.collection','./person/person.view'], function(Collection, View) {
				var _collection = new Collection();
				_collection.fetch({ success: function(col) {
					var _view = new View({ collection: col });
					_this.$el.append(_view.el);
				}});
			});
		}
	});
})