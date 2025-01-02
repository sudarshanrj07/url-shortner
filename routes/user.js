import { Router } from "express";
import { loginHandler, signUpHandler } from "../controllers/user.js";

const router = Router();

router.post("/", signUpHandler);
router.post("/login", loginHandler);

export default router;
