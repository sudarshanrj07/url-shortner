import { Router } from "express";
import { genrateShortUrlHandler } from "../controllers/url.js";

const router = Router();

router.post("/", genrateShortUrlHandler);

export default router;
