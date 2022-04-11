const atImport = require('postcss-import');
const customProperties = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const nested = require('postcss-nested');
const csso = require('postcss-csso');

module.exports = {
	plugins: [
		atImport(),
		customMedia(),
		customProperties({
			preserve: false,
		}),
		nested(),
		csso({
			sourceMap: true,
		}),
	],
};
