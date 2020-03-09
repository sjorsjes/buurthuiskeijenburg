module.exports = function (array) {

	return array.sort((a, b) => {
		if (a.data.title) {
			if (a.data.title > b.data.title) {
				return 1;
			}

			if (a.data.title < b.data.title) {
				return -1;
			}
		} else {
			if (a.title > b.title) {
				return 1;
			}

			if (a.title < b.title) {
				return -1;
			}
		}

		return 0;
	});
}
