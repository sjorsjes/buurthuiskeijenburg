import type { MarkdownInstance } from "astro";

export const formatDay = (url: string) => {
	const { year, month, day } = urlToDate(url);
	const date = new Date(`${year}-${month}-${day}`);

	return {
		short: date.toLocaleString("nl-NL", { weekday: "short" }),
		numeric: date.toLocaleString("nl-NL", { day: "numeric" }),
	};
};
const format = (year: string | number, month: string | number, day = "01") => {
	return new Date(`${year}-${month}-${day}`).toLocaleString("nl-NL", {
		month: "long",
		year: "numeric",
	});
};

const urlToDate = (url: string) => {
	const [, , , , date]: any = url?.split("/");
	const [year, month, day] = date.split("-");

	return { year, month, day };
};

const nextMonthAndYear = (m: number, y: number) => {
	let month = m + 1;
	let year = y;

	if (m === 12) {
		month = 1;
		year = y + 1;
	}

	return { month, year };
};

const filterItems = (
	data: MarkdownInstance<Record<string, any>>[],
	m: number,
	y: number
) => {
	return data.filter((item: MarkdownInstance<Record<string, any>>) => {
		const { year, month } = urlToDate(item.url as string);

		return Number(year) === y && parseInt(month, 10) === m;
	});
};

export default (data: MarkdownInstance<Record<string, any>>[]) => {
	const date = new Date();
	const currentMonth = date.getMonth() + 1;
	const currentYear = date.getFullYear();
	const { month: nextMonth, year: nextYear } = nextMonthAndYear(
		currentMonth,
		currentYear
	);
	const { month: secondNextMonth, year: secondNextYear } = nextMonthAndYear(
		nextMonth,
		nextYear
	);

	return [
		{
			date: format(currentYear, currentMonth),
			data: filterItems(data, currentMonth, currentYear),
		},
		{
			date: format(nextYear, nextMonth),
			data: filterItems(data, nextMonth, nextYear),
		},
		{
			date: format(secondNextYear, secondNextMonth),
			data: filterItems(data, secondNextMonth, secondNextYear),
		},
	];
};
