define(['jquery'], function($) {
	return {
		initialize: function() {
			require(['./body.view'], function(BodyView) {
				var _view = new BodyView();
				$('body').append(_view.el);
			});
		},
	}
});