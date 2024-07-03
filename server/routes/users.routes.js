import express from "express";
import protectRoute from "../middleware/protectorRoute.js";
import { getAllUsers } from "../controller/user.controller.js";

const router = express.Router();

router.get("/getAllUsers", protectRoute, getAllUsers);

export default router;
