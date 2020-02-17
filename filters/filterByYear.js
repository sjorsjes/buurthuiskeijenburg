module.exports = function (array, year) {
	return array.filter(v => v.year === `${year}`);
}
