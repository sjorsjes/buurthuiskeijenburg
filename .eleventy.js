module.exports = function (config) {

	// LAYOUTS
	config.addLayoutAlias('base', 'layouts/base.njk');
	config.addLayoutAlias('content', 'layouts/content.njk');

	config.addCollection('myNav', function (collection) {
		const col = collection.getFilteredByTag('nav');

		return col.sort((a, b) => {
			if (a.data.navorder > b.data.navorder) {
				return 1;
			}

			if (a.data.navorder < b.data.navorder) {
				return -1;
			}

			return 0;
		});
	});

	config.addPassthroughCopy('./source/img');
	config.addPassthroughCopy('./source/css/**/*.min.css');
};
