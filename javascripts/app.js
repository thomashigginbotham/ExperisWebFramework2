/* ================================
 * RequireJS Config and App Initialization
 * ================================ */

/* -- Config -- */
requirejs.config({
	baseUrl: '/javascripts/lib',
	paths: {
		'app': '../app',
		'jquery': 'jquery-1.10.2',
		'selectivizr': 'selectivizr-min'
	},
	shim: {
		'selectivizr': ['jquery']
	},
	// Remove the following to enable caching
	'urlArgs': 'cachebust=' + new Date().getTime()
});

/* -- Initialize App -- */
requirejs(['app/main']);
