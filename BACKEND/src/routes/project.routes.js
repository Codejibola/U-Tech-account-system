import express from "express";
import {
  createProjectRequest,
  getMyProjects,
} from "../controllers/project.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";


const router = express.Router();


router.post("/", authenticate, createProjectRequest);
router.get("/", authenticate, getMyProjects);

export default router;
