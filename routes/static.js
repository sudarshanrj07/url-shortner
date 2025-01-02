import { Router } from "express";
import { URL } from "../models/url.js";
import { restrictTo } from "../middlewares/userAuth.js";

const router = Router();

router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
	const allUrls = await URL.find({ createdBy: req.user._id });
	return res.render("home", { urls: allUrls });
});

router.get("/admin", restrictTo(["ADMIN"]), async (req, res) => {
	const allUrls = await URL.find({});
	return res.render("home", { urls: allUrls });
});

router.get("/signup", async (req, res) => {
	return res.render("signup");
});

router.get("/login", async (req, res) => {
	return res.render("login");
});

export default router;
