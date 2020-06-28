const fetch = require('node-fetch');

module.exports = async function () {
	const posts = await fetch(`https://graph.facebook.com/v7.0/${process.env.FACEBOOK_APP_ID}/feed?fields=id%2Cpicture%2Cfull_picture%2Ccreated_time%2Cmessage&limit=${process.env.FACEBOOK_POST_LIMIT}&access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`)
		.then(res => res.json());

	return posts.data;
}
