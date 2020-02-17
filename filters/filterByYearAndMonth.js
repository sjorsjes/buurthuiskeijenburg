const { format } = require('./formatDate');

module.exports = function (array, inputYear, inputMonth) {
	return array.filter(v => {
		const { numericMonth, year } = format(v.date);

		return year === inputYear && numericMonth === inputMonth;
	}).map(a => {
		const activity = format(a.date);
		const today = format(Date.now());
		const isToday = today.numericDay === activity.numericDay && today.numericMonth === activity.numericMonth && today.year === activity.year;

		return {
			...a,
			isToday,
		}
	});
}
