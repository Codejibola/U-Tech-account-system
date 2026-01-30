import express from "express";
import {
  create,
  findAll,
  findOne,
  remove
} from "../controllers/tutorials.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, create);
router.get("/", authenticate, findAll);
router.get("/:id", authenticate, findOne);
router.delete("/:id", authenticate, remove);

export default router;
