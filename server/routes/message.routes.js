import express from "express";
import { getMessages, sendMessage } from "../controller/message.controller.js";
import protectRoute from "../middleware/protectorRoute.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/getMessages/:id", protectRoute, getMessages);

export default router;
