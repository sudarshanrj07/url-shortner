import mongoose from "mongoose";

export default async function mongoDbConnection(url) {
	return mongoose.connect(url);
}
