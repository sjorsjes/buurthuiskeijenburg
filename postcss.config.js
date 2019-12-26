const atImport = require('postcss-import');
const mediaVariables = require('postcss-media-variables');
const customProperties = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const nested = require('postcss-nested');
const clean = require('postcss-clean');

module.exports = {
	plugins: [
		atImport(),
		mediaVariables(),
		customMedia(),
		customProperties({
			preserve: false,
		}),
		mediaVariables(),
		nested(),
		clean(),
	],
};
