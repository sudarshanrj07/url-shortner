import express from "express";
import "dotenv/config";
import mongoDbConnection from "./utils/conncetion.js";
import path from "path";
import cookieParser from "cookie-parser";
import staticRouter from "./routes/static.js";
import urlRouter from "./routes/url.js";
import userRouter from "./routes/user.js";
import { userAuth, userAuthenctication } from "./middlewares/userAuth.js";

const app = express();
const PORT = process.env.PORT || 3000;

mongoDbConnection(process.env.DB_URL).then(() => console.log("DB connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/url", userAuthenctication, urlRouter);
app.use("/", userAuth, staticRouter);
app.use("/api/user", userRouter);
app.listen(PORT, () => console.log(`Server is listning at PORT: ${PORT}`));
