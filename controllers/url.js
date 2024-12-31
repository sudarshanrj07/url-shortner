import { URL } from "../models/url.js";
import { genrateShortId } from "../utils/idGenrator.js";

export const genrateShortUrlHandler = async (req, res) => {
	const { redirectUrl } = req.body;
	if (!redirectUrl) return res.status(400).json({ error: "URL is required" });
	try {
		const shortId = genrateShortId();
		await URL.create({
			shortId,
			redirectUrl,
			analytics: [],
		});

		return res.status(200).json({ id: shortId });
	} catch (error) {
		console.log(error);
	}
};

export const getAnalyticsHandler = async (req, res) => {
	const { shortId } = req.params;

	const result = await URL.findOne({ shortId });

	return res.json({
		totalClicks: result.analytics.length,
		analytics: result.analytics,
	});
};
