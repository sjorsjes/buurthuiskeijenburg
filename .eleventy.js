const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (config) {
	// LAYOUTS
	config.addLayoutAlias('base', 'layouts/base.njk');
	config.addLayoutAlias('content', 'layouts/content.njk');
	config.addLayoutAlias('content-detail', 'layouts/content-detail.njk');

	// PLUGINS
	config.addPlugin(eleventyNavigationPlugin);

	// STATICS
	config.addPassthroughCopy({ './source/_statics/js': 'lib/js' });
	config.addPassthroughCopy({ './source/_statics/img': 'lib/img' });
	config.addPassthroughCopy({ './source/_statics/css/**/*.min.css': 'lib/css'});
};
