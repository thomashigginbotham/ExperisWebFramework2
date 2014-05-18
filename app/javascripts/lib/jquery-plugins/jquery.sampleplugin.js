/// <summary>
/// A sample jQuery plugin
/// </summary>
define(['jquery'], function ($) {
	$.fn.samplePlugin = function (options) {
		var settings = $.extend({}, options);

		this.append($('<p style="color:#f00">This text added from jquery.sampleplugin.js.</p>'));

		return this;
	};
});
