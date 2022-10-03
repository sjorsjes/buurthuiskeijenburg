const atImport = require('postcss-import');
const nested = require('postcss-nested');

module.exports = {
	plugins: [
		atImport(),
		nested(),
	],
};
