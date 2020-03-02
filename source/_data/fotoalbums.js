const fg = require('fast-glob');

module.exports = async function () {
	const galleryYears = await fg('source/_statics/img/gallery/*', { objectMode: true, onlyDirectories: true });

	const activitiesPerYear = await Promise.all(galleryYears.map(async (yearObj) => {
		const year = yearObj.name;
		const activities = await fg(`source/_statics/img/gallery/${year}/*`, { objectMode: true, onlyDirectories: true });
		const imagesPerActivity = await Promise.all(activities.map(async (activity) => {
			const images = await fg(`source/_statics/img/gallery/${year}/${activity.name}/*`, { objectMode: true });

			return {
				[activity.name]: images.map(image => image.name),
			};
		}));

		return activities.map((activity) => {
			let [name, metadata] = activity.name.split('__');

			name = name.trim();

			if (metadata) {
				metadata = metadata.trim();
			}

			const img = imagesPerActivity.find((act) => {
				const [key] = Object.keys(act);

				return key === activity.name;
			});

			return {
				year,
				name,
				fullName: activity.name,
				metadata,
				images: img[activity.name]
			}
		});
	}));

	return activitiesPerYear.flat();
}
