import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PORT } from "./src/config/env.js";

// Routes
import authRoutes from "./src/routes/auth.routes.js";
import tutorialRoutes from "./src/routes/tutorial.routes.js";
import projectRoutes from "./src/routes/project.routes.js";
import messageRoutes from "./src/routes/message.routes.js";

// Database
import pool from "./src/config/db.js";

dotenv.config();

class Server {
  constructor() {
    this.app = express();
    this.port = PORT || 5000;

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeDatabase();
  }

  initializeMiddlewares() {
    this.app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initializeRoutes() {
    this.app.get("/", (req, res) => {
      res.status(200).json({
        status: "success",
        message: "U-Tech API is running",
      });
    });

    this.app.use("/api/auth", authRoutes);
    this.app.use("/api/tutorials", tutorialRoutes);
    this.app.use("/api/projects", projectRoutes);
    this.app.use("/api/messages", messageRoutes);
  }

  async initializeDatabase() {
    try {
      await pool.query("SELECT 1");
      console.log("✅ PostgreSQL connected successfully");
    } catch (error) {
      console.error("❌ Database connection failed:", error.message);
      process.exit(1);
    }
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running on ${this.port}`);
    });
  }
}

const utech_server = new Server();
utech_server.start();