const days = new Map([['Mon', 'ma'], ['Tue', 'di'], ['Wed', 'wo'], ['Thu', 'do'], ['Fri', 'vr'], ['Sat', 'za'], ['Sun', 'zo']]);
const months = new Map([['1', 'januari'], ['2', 'februari'], ['3', 'maart'], ['4', 'april'], ['5', 'mei'], ['6', 'juni'], ['7', 'juli'], ['8', 'augustus'], ['9', 'september'], ['10', 'oktober'], ['11', 'november'], ['12', 'december']]);

const dayOptions = { timeZone: 'Europe/Amsterdam', day: '2-digit' };
const weekdayOptions = { timeZone: 'Europe/Amsterdam', weekday: 'short' };
const monthOptions = { timeZone: 'Europe/Amsterdam', month: 'numeric' };
const yearOptions = { timeZone: 'Europe/Amsterdam', year: 'numeric' };

const format = (dateString) => {
	if (!dateString) {
		return;
	}

	const date = new Date(dateString);
	const numericDay = new Intl.DateTimeFormat([], dayOptions).format(date);
	const numericMonth = new Intl.DateTimeFormat([], monthOptions).format(date);
	const weekday = new Intl.DateTimeFormat([], weekdayOptions).format(date);

	return {
		numericDay,
		numericMonth,
		day: days.get(weekday),
		month: months.get(numericMonth),
		year: new Intl.DateTimeFormat([], yearOptions).format(date)
	};
};

const formatDay = (dateString) => {
	const { day } = format(dateString);

	return day;
}

const formatNumericDay = (dateString) => {
	const { numericDay } = format(dateString);

	return numericDay;
}

const formatMonth = (dateString) => {
	const { month } = format(dateString);

	return month;
}

const formatNumericMonth = (dateString) => {
	const { numericMonth } = format(dateString);

	return numericMonth;
}

const formatYear = (dateString) => {
	const { year } = format(dateString);

	return year;
}

module.exports = {
	format,
	formatDay,
	formatNumericDay,
	formatMonth,
	formatNumericMonth,
	formatYear
}
