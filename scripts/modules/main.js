(function() {
	
	!window.console && (window.console = { log: function() {}});
	
	requirejs.config({
		paths: {
			'backbone' : '../libs/backbone/backbone-loader',
			'jquery' : '../libs/jquery/jquery-loader',
			'underscore' : '../libs/underscore/underscore-loader',
			'text' : '../libs/require/require-text',
			'bootstrap' : '../libs/bootstrap/bootstrap-loader',
			'mockjax' : '../libs/mockjax/mockjax-loader'
		},
		shim: {
			'backbone' : [ 'underscore', 'jquery' ],
			'bootstrap' : [ 'jquery' ],
			'mockjax' : [ 'jquery' ]
		}
	});
	
	require(['jquery', 'mockjax'], function($) {
		$.mockjaxSettings.contentType = 'text/json';
		$.mockjax({
			responseTime: 0,
			url: '/sherpa/persons',
			responseText: '[{"id":1,"firstname":"Donald","lastname":"Duck"},{"id":2,"firstname":"Daisy","lastname":"Duck"},{"id":3,"firstname":"Mickey","lastname":"Mouse"},{"id":4,"firstname":"Minnie","lastname":"Mouse"}]'
		});
	});
	
	require(['app'], function(app) {
		app.initialize();
	});
	
}).call(this);
