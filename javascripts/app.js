/* ================================
 * RequireJS Config and App Initialization
 * ================================ */

/* -- Config -- */
requirejs.config({
	baseUrl: 'javascripts',
	paths: {
		'jquery': 'lib/jquery-1.10.2',
		'selectivizr': 'lib/selectivizr-min',
		'samplePlugin': 'lib/jquery.sampleplugin'
	},
	shim: {
		'selectivizr': ['jquery']
	},
	// Remove the following to enable caching
	'urlArgs': 'cachebust=' + new Date().getTime()
});

/* -- Initialize App -- */
requirejs(['app/main']);
