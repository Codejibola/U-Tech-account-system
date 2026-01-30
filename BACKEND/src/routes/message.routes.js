import express from "express";
import {
  sendMessage,
  getUserMessages,
} from "../controllers/message.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, sendMessage);
router.get("/", authenticate, getUserMessages);

export default router;
