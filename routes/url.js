import { Router } from "express";
import {
	genrateShortUrlHandler,
	getAnalyticsHandler,
} from "../controllers/url.js";
import { URL } from "../models/url.js";

const router = Router();

router.post("/", genrateShortUrlHandler);
router.get("/:shortId", async (req, res) => {
	const shortId = req.params.shortId;
	const entry = await URL.findOneAndUpdate(
		{ shortId },
		{
			$push: {
				analytics: { timestamp: Date.now() },
			},
		}
	);
	res.redirect(entry.redirectUrl);
});

router.get("/analytics/:shortId", getAnalyticsHandler);

export default router;
