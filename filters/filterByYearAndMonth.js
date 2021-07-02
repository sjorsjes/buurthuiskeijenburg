const { format, months } = require('./formatDate');

const nextMonthAndYear = function(m, y) {
	let month = parseInt(m) + 1;
	let year = parseInt(y);

	if (m === 12) {
		month = 1;
		year = parseInt(y) + 1;
	}

	return { month: `${month}`, year: `${year}` };
}

const filterItems = function(array, inputYear, inputMonth) {
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

module.exports = function(array, inputYear, inputMonth, return2MonthsAhead = false) {
	const current = filterItems(array, inputYear, inputMonth);

	if (return2MonthsAhead) {
		const items = [];
		const { month: nextMonth, year: nextYear } = nextMonthAndYear(inputMonth, inputYear);
		const { month: secondNextMonth, year: secondNextYear } = nextMonthAndYear(nextMonth, nextYear);

		const next = filterItems(array, nextYear, nextMonth);
		const secondNext = filterItems(array, secondNextYear, secondNextMonth);
		
		items.push({ month: months.get(inputMonth), year: inputYear, data: current});
		items.push({ month: months.get(nextMonth), year: nextYear, data: next});
		items.push({ month: months.get(secondNextMonth), year: secondNextYear, data: secondNext});

		return items;
	}
	
	return current;
}
