/* ================================
 * RequireJS Config and App Initialization
 * ================================ */

/* -- Config -- */
requirejs.config({
	baseUrl: 'javascripts',
	paths: {
		'jquery': 'lib/jquery/jquery-1.10.2',
		'selectivizr': 'lib/polyfills/selectivizr-min',
		'samplePlugin': 'lib/jquery-plugins/jquery.sampleplugin'
	},
	shim: {
		'selectivizr': ['jquery']
	},
	// Remove the following to enable caching
	'urlArgs': 'cachebust=' + new Date().getTime()
});

/* -- Initialize App (app.js) -- */
requirejs(['app']);
