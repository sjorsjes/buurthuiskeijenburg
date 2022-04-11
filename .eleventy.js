require('dotenv').config();

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

const filterByYear = require('./filters/filterByYear');
const filterByYearAndMonth = require('./filters/filterByYearAndMonth');
const { formatDay, formatNumericDay, formatMonth, formatYear, formatDateTime } = require('./filters/formatDate');
const sortByTitle = require('./filters/filterSortByTitle');

module.exports = function (config) {
	config.addPlugin(UpgradeHelper);

	// LAYOUTS
	config.addLayoutAlias('base', 'layouts/base.njk');
	config.addLayoutAlias('home', 'layouts/home.njk');
	config.addLayoutAlias('content', 'layouts/content.njk');
	config.addLayoutAlias('content-verenigingen', 'layouts/verenigingen.njk');
	config.addLayoutAlias('gallery', 'layouts/gallery.njk');
	config.addLayoutAlias('gallery-single', 'layouts/gallery-single.njk');
	config.addLayoutAlias('team', 'layouts/team.njk');
	config.addLayoutAlias('agenda', 'layouts/agenda.njk');
	config.addLayoutAlias('activities', 'layouts/activities.njk');
	config.addLayoutAlias('nieuws', 'layouts/nieuws.njk');

	// PLUGINS
	config.addPlugin(eleventyNavigationPlugin);

	// FILTERS
	config.addNunjucksFilter('filterByYear', filterByYear);
	config.addNunjucksFilter('filterByYearAndMonth', filterByYearAndMonth);
	config.addNunjucksFilter('formatDay', formatDay);
	config.addNunjucksFilter('formatNumericDay', formatNumericDay);
	config.addNunjucksFilter('formatMonth', formatMonth);
	config.addNunjucksFilter('formatYear', formatYear);
	config.addNunjucksFilter('formatDateTime', formatDateTime);
	config.addNunjucksFilter('sortByTitle', sortByTitle);

	// https://github.com/pdehaan/11ty-wordpress-permalinks
	config.addFilter('post_permalink', page => {
		const yyyy = page.date.getFullYear();
		const mm = String(page.date.getMonth() + 1).padStart(2, '0');
		const dd = String(page.date.getDate() + 1).padStart(2, '0');

		return `${yyyy}/${mm}/${dd}/`;
	});

	// STATICS
	config.addPassthroughCopy({ './source/_statics/js': 'lib/js' });
	config.addPassthroughCopy({ './source/_statics/img': 'lib/img' });
	config.addPassthroughCopy({ './source/_statics/css/**/*.min.css': 'lib/css' });
	config.addPassthroughCopy({ './source/_statics/files': 'lib/files' });
	config.addPassthroughCopy({ './source/fotoalbums/gallery': 'lib/img/gallery' });
	config.addPassthroughCopy({ './source/manifest.json': 'manifest.json' });
	config.addPassthroughCopy({ './source/favicon.ico': 'favicon.ico' });
};
