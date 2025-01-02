import { getUser } from "../utils/auth.js";

export const userAuthenctication = (req, res, next) => {
	const userUid = req.cookies?.jwt;

	if (!userUid) return res.redirect("/login");

	const user = getUser(userUid);

	if (!user) return res.redirect("/login");

	req.user = user;
	next();
};

export const userAuth = (req, res, next) => {
	const userUid = req.cookies?.jwt;

	const user = getUser(userUid);

	req.user = user;
	next();
};
