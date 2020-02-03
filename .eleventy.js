const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyPWAPlugin = require("eleventy-plugin-pwa");

module.exports = function (config) {
	// LAYOUTS
	config.addLayoutAlias('base', 'layouts/base.njk');
	config.addLayoutAlias('home', 'layouts/home.njk');
	config.addLayoutAlias('content', 'layouts/content.njk');
	config.addLayoutAlias('content-verenigingen', 'layouts/content-verenigingen.njk');
	config.addLayoutAlias('gallery', 'layouts/gallery.njk');
	config.addLayoutAlias('gallery-single', 'layouts/gallery-single.njk');
	config.addLayoutAlias('team', 'layouts/team-detail.njk');

	// PLUGINS
	config.addPlugin(eleventyNavigationPlugin);

	// Turn off for development
	if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
		config.addPlugin(eleventyPWAPlugin);
	}

	// FILTERS
	config.addNunjucksFilter('filterByYear', function (array, year) {
		return array.filter(v => v.year === `${year}`);
	});

	// STATICS
	config.addPassthroughCopy({ './source/_statics/js': 'lib/js' });
	config.addPassthroughCopy({ './source/_statics/img': 'lib/img' });
	config.addPassthroughCopy({ './source/_statics/css/**/*.min.css': 'lib/css' });
	config.addPassthroughCopy({ './source/manifest.json': 'manifest.json' });
	config.addPassthroughCopy({ './source/favicon.ico': 'favicon.ico' });
};
