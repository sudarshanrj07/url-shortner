import jwt from "jsonwebtoken";

const secret = "goFuckYourSelf";

export const setUser = (user) => {
	if (!user) return null;
	return jwt.sign({ id: user._id, email: user.email }, secret);
};

export const getUser = (token) => {
	if (!token) return null;
	try {
		return jwt.verify(token, secret);
	} catch (error) {
		return null;
	}
};
