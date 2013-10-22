/// <summary>
/// A sample jQuery plugin
/// </summary>
define(['jquery'], function ($) {
	$.fn.samplePlugin = function (options) {
		var settings = $.extend({}, options);

		this.append($('<p style="color:#f00">Sample plugin initiated.</p>'));

		return this;
	};
});
