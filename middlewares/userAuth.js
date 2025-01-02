import { getUser } from "../utils/auth.js";

export const checkUserAuth = (req, res, next) => {
	const tokenCookie = req.cookies?.token;

	console.log("token cookie ", tokenCookie);
	if (!tokenCookie) return next();

	const token = tokenCookie;
	console.log("token ", token);
	const user = getUser(token);
	console.log("User ", user);
	req.user = user;
	return next();
};

export const restrictTo = (roles = []) => {
	return (req, res, next) => {
		if (!req.user) return res.redirect("/login");
		console.log(req.user);
		if (!roles.includes(req.user.role)) return res.end("Unauthorized");

		return next();
	};
};
