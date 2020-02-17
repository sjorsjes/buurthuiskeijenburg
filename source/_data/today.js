const { format } = require('../../filters/formatDate');

module.exports = () => {
	const today = new Date();
	const { numericDay, numericMonth, month, year } = format(today);

	return {
		day: numericDay,
		numericMonth: numericMonth,
		month,
		year
	}
}
