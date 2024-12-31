import express from "express";
import "dotenv/config";
import urlRouter from "./routes/url.js";
import mongoDbConnection from "./utils/conncetion.js";
const app = express();
const PORT = process.env.PORT || 3000;

mongoDbConnection(process.env.DB_URL).then(() => console.log("DB connected"));

app.use(express.json());
app.use("/api/url", urlRouter);

app.listen(PORT, () => console.log(`Server is listning at PORT: ${PORT}`));
