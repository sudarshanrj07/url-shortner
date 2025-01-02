import { User } from "../models/user.js";
import { setUser } from "../utils/auth.js";
export const signUpHandler = async (req, res) => {
	const { name, email, password } = req.body;

	await User.create({
		name,
		email,
		password,
	});

	res.redirect("/");
};

export const loginHandler = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({
		email,
		password,
	});

	if (!user) return res.render("login", { error: "Invalid credentials" });

	const token = setUser(user);
	res.cookie("jwt", token);

	res.redirect("/");
};
