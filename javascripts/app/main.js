/* ================================
* Main Scripts
* ================================ */

define(['jquery'], function($) {
	/* -- Use the following pattern for jQuery plugins -- */
	$(function() {
		/* -- Sample jQuery Plugin -- */
		require(['samplePlugin'], function() {
			$('.page-wrapper').samplePlugin();
		});
	});

	/* -- Add Selectivizr support for IE 6-8 <http://selectivizr.com/> -- */
	if ($('.lt-ie9').length > 0) {
		require(['selectivizr']);
	}
});
