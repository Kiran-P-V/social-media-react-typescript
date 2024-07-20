import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";
import protectRoute from "../middleware/protectorRoute.js";

const router = express.Router();

router.post("/login", protectRoute, login);
router.post("/signup", signup);
router.post("/logout", protectRoute, logout);

export default router;
